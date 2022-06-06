# coding: utf-8
import traceback
import pika


def get_exchange_name(sport_type_id):
    sport_type_id_exchange_mapping = {
        '11': 'KU_SC',
        '51': 'KU_SC',
        '52': 'KU_SC',
        '53': 'KU_SC',
        '12': 'KU_BK',
        '13': 'KU_BS',
        '14': 'KU_TN',
        '15': 'KU_HC',
        '16': 'KU_BK',
        '17': 'KU_BK',
        '18': 'KU_ES',
        '19': 'KU_FB',
        '20': 'KU_BK',
        '21': 'KU_BK',
        '22': 'KU_BK',
        '23': 'KU_BK'
    }
    return sport_type_id_exchange_mapping.get(sport_type_id, 'KU_BK')

def init_session(url):
    parameters = pika.URLParameters(url)
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()
    return connection, channel


def upload_data(channel, data, sport_type_id):
    try:
        exchange = get_exchange_name(str(sport_type_id))
        channel.basic_publish(exchange='test', routing_key=exchange, body=memoryview(data.SerializeToString()))
    except Exception:
        traceback.print_exc()
        return False
    return True
