from argparse import ArgumentParser
import yaml
from crawler_runner import CrawlerRunner


def parse_args():
    parser = ArgumentParser(description='ku ws crawler')
    parser.add_argument('--daemon', help='run as a daemon in the background', action='store_true')
    parser.add_argument('-c', '--config', help='config file path', default='config.yml')
    parser.add_argument('-s', '--secrets', help='secrets config file path', default='secrets.yml')
    parser.add_argument('-f', '--read-from-file', help='read data from file as crawled data')
    parser.add_argument('-d', '--dump', help='dump crawled and protobuf data', action='store_true')
    parser.add_argument('-D', '--debug', help='debug mode', action='store_true')
    parser.add_argument('-v', '--verbose', help='print verbose log', action='store_true')
    parser.add_argument('--game-type', help='ball type (ex. soccer 、 basketball...)')
    parser.add_argument('--play-type', help='early, today, team totals')
    return parser.parse_args()


if __name__ == '__main__':
    arguments = parse_args()
    with open(arguments.config) as config_file:
        config = yaml.safe_load(config_file)
    with open(arguments.secrets) as secrets_file:
        secrets = yaml.safe_load(secrets_file)

    crawler_config = {
        'read_from_file': arguments.read_from_file,
        'dump': arguments.dump,
        'debug': arguments.debug,
        'verbose': arguments.verbose
    }

    crawler_config.update(config)
    crawler_config.update(secrets)
    # 執行指定球種玩法
    if arguments.game_type and arguments.play_type:
        task = {
            'crawler_name': f"ku_{arguments.game_type}_{arguments.play_type}",
            'game_type': arguments.game_type,
            'game_mode': arguments.play_type,
            'socket': {}
        }
        runner = CrawlerRunner(crawler_config, [task], arguments.daemon)
    # 執行設定檔中的爬取任務
    else:
        tasks = []
        for task in secrets['tasks']:
            for target in task['targets']:
                if target['enabled']:
                    task_filter = []
                    if 'games' in target:
                        for game_type in target['games']:
                            if not game_type['enabled']:
                                task_filter.append(game_type['name'])

                    task_name = f'ku_{task["name"]}_{target["mode"]}'
                    task_spec = {
                        'crawler_name': task_name,
                        'game_type': task['name'],
                        'game_mode': target['mode'],
                        'filter':  task_filter,
                        'socket': {}
                    }
                    tasks.append(task_spec)
        runner = CrawlerRunner(crawler_config, tasks, arguments.daemon)
    runner.run()
