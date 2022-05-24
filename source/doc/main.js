var PlayMode = {};
!function(n) {
    "use strict";
    n[n.None = -1] = "None",
    n[n.ZP = 0] = "ZP",
    n[n.DS = 1] = "DS",
    n[n.ZD = 2] = "ZD"
}(PlayMode = PlayMode || {});
var ChatType = {};
!function(n) {
    n[n.Normal = 0] = "Normal",
    n[n.System = 1] = "System",
    n[n.Gift = 2] = "Gift",
    n[n.SubscrbeAnchor = 3] = "SubscrbeAnchor",
    n[n.Anchor = 5] = "Anchor",
    n[n.ShowReceipt = 6] = "ShowReceipt",
    n[n.Announcement = 7] = "Announcement",
    n[n.Normal_Quick = 8] = "Normal_Quick",
    n[n.Normal_Sticker = 9] = "Normal_Sticker"
}(ChatType = ChatType || {});
var ChatPrompt = {};
!function(n) {
    n[n.None = 0] = "None",
    n[n.Chatroom = 1] = "Chatroom",
    n[n.Gift = 2] = "Gift",
    n[n.Quick = 3] = "Quick",
    n[n.Form = 4] = "Form",
    n[n.FaceIcon = 5] = "FaceIcon"
}(ChatPrompt = ChatPrompt || {});
var BulletMode = {};
!function(n) {
    n[n.Close = 0] = "Close",
    n[n.All = 1] = "All",
    n[n.Half = 2] = "Half"
}(BulletMode = BulletMode || {});
var Ball = {};
!function(n) {
    var t, o, a, r, g, F, l, e, s, A, _, i, S, B, m, P, u, T, c, O, h, d, k, p, y, f, C, L, I, H, E, R, D, K, G, v, U, b, X, w, W, N, x, M, Q, Z, V, Y, $, j, q, J, z, nn = 1;
    p = t = t || {},
    (c = P = P || {})[c.All = 1] = "All",
    c[c.TopHalf = 2] = "TopHalf",
    (c = u = u || {})[c.All = 1] = "All",
    c[c.TopHalf = 2] = "TopHalf",
    (c = T = T || {})[c.Goal = 1] = "Goal",
    c[c.Coner = 2] = "Coner",
    c[c.Punishment = 3] = "Punishment",
    (c = E = E || {})[c.All = 1] = "All",
    c[c.TopHalf = 2] = "TopHalf",
    p.All = p[p.All = 1] = {
        key: "All",
        idx: 1,
        val: P
    },
    p.Corner = p[p.Corner = 2] = {
        key: "Corner",
        idx: 2,
        val: u
    },
    p.DSFifteen = p[p.DSFifteen = 3] = {
        key: "DSFifteen",
        idx: 3,
        val: T
    },
    p.Wave = p[p.Wave = 4] = {
        key: "Wave",
        idx: 4,
        val: E
    },
    p.GoalBall = p[p.GoalBall = 5] = {
        key: "GoalBall",
        idx: 5,
        val: 1
    },
    p.HalfAll = p[p.HalfAll = 6] = {
        key: "HalfAll",
        idx: 6,
        val: 1
    },
    p.ZDFifteen = p[p.ZDFifteen = 7] = {
        key: "ZDFifteen",
        idx: 7,
        val: 1
    },
    E = o = o || {},
    (p = O = O || {})[p.All = 1] = "All",
    p[p.TopHalf = 2] = "TopHalf",
    (p = h = h || {})[p.All = 1] = "All",
    p[p["1ST"] = 2] = "1ST",
    p[p["2ST"] = 3] = "2ST",
    p[p["3ST"] = 4] = "3ST",
    p[p["4ST"] = 5] = "4ST",
    (p = d = d || {})[p.All = 1] = "All",
    p[p.TopHalf = 2] = "TopHalf",
    p[p.DownHalf = 3] = "DownHalf",
    p[p["1ST"] = 4] = "1ST",
    p[p["2ST"] = 5] = "2ST",
    p[p["3ST"] = 6] = "3ST",
    p[p["4ST"] = 7] = "4ST",
    (p = k = k || {})[p.All = 1] = "All",
    p[p["1ST"] = 2] = "1ST",
    p[p["3ST"] = 3] = "3ST",
    (p = C = C || {})[p.All = 1] = "All",
    p[p.TopHalf = 2] = "TopHalf",
    p[p.DownHalf = 3] = "DownHalf",
    p[p["1ST"] = 4] = "1ST",
    p[p["2ST"] = 5] = "2ST",
    p[p["3ST"] = 6] = "3ST",
    p[p["4ST"] = 7] = "4ST",
    E.All = E[E.All = 1] = {
        key: "All",
        idx: 1,
        val: O
    },
    E.DSDownHalf = E[E.DSDownHalf = 2] = {
        key: "DSDownHalf",
        idx: 2,
        val: 1
    },
    E.DSSingle = E[E.DSSingle = 3] = {
        key: "DSSingle",
        idx: 3,
        val: h
    },
    E.DSSingleTeam = E[E.DSSingleTeam = 4] = {
        key: "DSSingleTeam",
        idx: 4,
        val: d
    },
    E.ZDSingle = E[E.ZDSingle = 5] = {
        key: "ZDSingle",
        idx: 5,
        val: k
    },
    E.ZDThreePoints = E[E.ZDThreePoints = 6] = {
        key: "ZDThreePoints",
        idx: 6,
        val: 1
    },
    E.ZDSingleTeam = E[E.ZDSingleTeam = 7] = {
        key: "ZDSingleTeam",
        idx: 7,
        val: C
    },
    E = a = a || {},
    (C = y = y || {})[C.All = 1] = "All",
    C[C.TopHalf = 2] = "TopHalf",
    (C = f = f || {})[C.All = 1] = "All",
    C[C.TopHalf = 2] = "TopHalf",
    (C = R = R || {})[C.All = 1] = "All",
    C[C["2ST"] = 2] = "2ST",
    C[C["3ST"] = 3] = "3ST",
    C[C["4ST"] = 4] = "4ST",
    C[C["5ST"] = 5] = "5ST",
    C[C["6ST"] = 6] = "6ST",
    C[C["7ST"] = 7] = "7ST",
    C[C["8ST"] = 8] = "8ST",
    E.DSAll = E[E.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: y
    },
    E.DSOneToThree = E[E.DSOneToThree = 2] = {
        key: "DSOneToThree",
        idx: 2,
        val: 1
    },
    E.DSOneToSeven = E[E.DSOneToSeven = 3] = {
        key: "DSOneToSeven",
        idx: 3,
        val: 1
    },
    E.DSFirst = E[E.DSFirst = 4] = {
        key: "DSFirst",
        idx: 4,
        val: 1
    },
    E.DSSingleTeam = E[E.DSSingleTeam = 5] = {
        key: "DSSingleTeam",
        idx: 5,
        val: 1
    },
    E.ZDAll = E[E.ZDAll = 6] = {
        key: "ZDAll",
        idx: 6,
        val: f
    },
    E.ZDOneToThree = E[E.ZDOneToThree = 7] = {
        key: "ZDOneToThree",
        idx: 7,
        val: 1
    },
    E.ZDOneToSeven = E[E.ZDOneToSeven = 8] = {
        key: "ZDOneToSeven",
        idx: 8,
        val: 1
    },
    E.ZDSingle = E[E.ZDSingle = 9] = {
        key: "ZDSingle",
        idx: 9,
        val: R
    },
    E.ZDSingleTeam = E[E.ZDSingleTeam = 10] = {
        key: "ZDSingleTeam",
        idx: 10,
        val: 1
    },
    R = r = r || {},
    (E = L = L || {})[E.GAME = 1] = "GAME",
    E[E.SET = 2] = "SET",
    (E = I = I || {})[E.All = 1] = "All",
    E[E["1ST"] = 2] = "1ST",
    E[E["2ST"] = 3] = "2ST",
    E[E["3ST"] = 4] = "3ST",
    (E = H = H || {})[E.GAME = 1] = "GAME",
    E[E.SET = 2] = "SET",
    (E = G = G || {})[E.All = 1] = "All",
    E[E["1ST"] = 2] = "1ST",
    E[E["2ST"] = 3] = "2ST",
    E[E["3ST"] = 4] = "3ST",
    E[E["4ST"] = 5] = "4ST",
    E[E["5ST"] = 6] = "5ST",
    R.DSAll = R[R.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: L
    },
    R.DSSingle = R[R.DSSingle = 2] = {
        key: "DSSingle",
        idx: 2,
        val: I
    },
    R.ZDAll = R[R.ZDAll = 3] = {
        key: "ZDAll",
        idx: 3,
        val: H
    },
    R.ZDSingle = R[R.ZDSingle = 4] = {
        key: "ZDSingle",
        idx: 4,
        val: G
    },
    R.ZDTotalGames = R[R.ZDTotalGames = 5] = {
        key: "ZDTotalGames",
        idx: 5,
        val: 1
    },
    G = g = g || {},
    (R = b = b || {})[R.All = 1] = "All",
    R[R["2ST"] = 2] = "2ST",
    R[R["3ST"] = 3] = "3ST",
    R[R["4ST"] = 4] = "4ST",
    G.DSAll = G[G.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: 1
    },
    G.DSSingle = G[G.DSSingle = 2] = {
        key: "DSSingle",
        idx: 2,
        val: b
    },
    G.SingleTeam = G[G.SingleTeam = 3] = {
        key: "SingleTeam",
        idx: 3,
        val: 1
    },
    G.ZDAll = G[G.ZDAll = 4] = {
        key: "ZDAll",
        idx: 4,
        val: 1
    },
    b = F = F || {},
    (G = D = D || {})[G.Game = 1] = "Game",
    G[G.Points = 2] = "Points",
    (G = K = K || {})[G.Game = 1] = "Game",
    G[G.Points = 2] = "Points",
    (G = w = w || {})[G.All = 1] = "All",
    G[G["1ST"] = 2] = "1ST",
    G[G["2ST"] = 3] = "2ST",
    G[G["3ST"] = 4] = "3ST",
    G[G["4ST"] = 5] = "4ST",
    G[G["5ST"] = 6] = "5ST",
    G[G["6ST"] = 7] = "6ST",
    G[G["7ST"] = 8] = "7ST",
    b.DSAll = b[b.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: D
    },
    b.DSFirstWin = b[b.DSFirstWin = 2] = {
        key: "DSFirstWin",
        idx: 2,
        val: 1
    },
    b.ZDAll = b[b.ZDAll = 3] = {
        key: "ZDAll",
        idx: 3,
        val: K
    },
    b.ZDSingle = b[b.ZDSingle = 4] = {
        key: "ZDSingle",
        idx: 4,
        val: w
    },
    b.ZDSingleTeam = b[b.ZDSingleTeam = 5] = {
        key: "ZDSingleTeam",
        idx: 5,
        val: 1
    },
    w = l = l || {},
    (b = v = v || {})[b.Game = 1] = "Game",
    b[b.Points = 2] = "Points",
    (b = U = U || {})[b.Game = 1] = "Game",
    b[b.Points = 2] = "Points",
    (b = Q = Q || {})[b.All = 1] = "All",
    b[b["1ST"] = 2] = "1ST",
    b[b["2ST"] = 3] = "2ST",
    b[b["3ST"] = 4] = "3ST",
    b[b["4ST"] = 5] = "4ST",
    b[b["5ST"] = 6] = "5ST",
    w.DSAll = w[w.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: v
    },
    w.DSFirstWin = w[w.DSFirstWin = 2] = {
        key: "DSFirstWin",
        idx: 2,
        val: 1
    },
    w.ZDAll = w[w.ZDAll = 3] = {
        key: "ZDAll",
        idx: 3,
        val: U
    },
    w.ZDSingle = w[w.ZDSingle = 4] = {
        key: "ZDSingle",
        idx: 4,
        val: Q
    },
    w.ZDSingleTeam = w[w.ZDSingleTeam = 5] = {
        key: "ZDSingleTeam",
        idx: 5,
        val: 1
    },
    Q = e = e || {},
    (w = X = X || {})[w["1ST"] = 1] = "1ST",
    w[w["2ST"] = 2] = "2ST",
    w[w["3ST"] = 3] = "3ST",
    w[w["4ST"] = 4] = "4ST",
    w[w["5ST"] = 5] = "5ST",
    w[w["6ST"] = 6] = "6ST",
    w[w["7ST"] = 7] = "7ST",
    (w = Y = Y || {})[w["1ST"] = 1] = "1ST",
    w[w["2ST"] = 2] = "2ST",
    w[w["3ST"] = 3] = "3ST",
    w[w["4ST"] = 4] = "4ST",
    w[w["5ST"] = 5] = "5ST",
    w[w["6ST"] = 6] = "6ST",
    w[w["7ST"] = 7] = "7ST",
    Q.DSGame = Q[Q.DSGame = 1] = {
        key: "DSGame",
        idx: 1,
        val: 1
    },
    Q.Single = Q[Q.Single = 2] = {
        key: "Single",
        idx: 2,
        val: X
    },
    Q.Total = Q[Q.Total = 3] = {
        key: "Total",
        idx: 3,
        val: Y
    },
    Q.ZDGame = Q[Q.ZDGame = 4] = {
        key: "ZDGame",
        idx: 4,
        val: 1
    },
    Y = s = s || {},
    (Q = W = W || {})[Q.All = 1] = "All",
    Q[Q.TopHalf = 2] = "TopHalf",
    (Q = N = N || {})[Q.All = 1] = "All",
    Q[Q["1ST"] = 2] = "1ST",
    Q[Q["2ST"] = 3] = "2ST",
    Q[Q["3ST"] = 4] = "3ST",
    Q[Q["4ST"] = 5] = "4ST",
    (Q = x = x || {})[Q.All = 1] = "All",
    Q[Q.TopHalf = 2] = "TopHalf",
    (Q = M = M || {})[Q.All = 1] = "All",
    Q[Q["1ST"] = 2] = "1ST",
    Q[Q["3ST"] = 3] = "3ST",
    (Q = j = j || {})[Q.All = 1] = "All",
    Q[Q.TopHalf = 2] = "TopHalf",
    Q[Q.DownHalf = 3] = "DownHalf",
    Q[Q["1ST"] = 4] = "1ST",
    Q[Q["2ST"] = 5] = "2ST",
    Q[Q["3ST"] = 6] = "3ST",
    Q[Q["4ST"] = 7] = "4ST",
    Y.DSAll = Y[Y.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: W
    },
    Y.DSDownHalf = Y[Y.DSDownHalf = 2] = {
        key: "DSDownHalf",
        idx: 2,
        val: 1
    },
    Y.DSSingle = Y[Y.DSSingle = 3] = {
        key: "DSSingle",
        idx: 3,
        val: N
    },
    Y.ZDAll = Y[Y.ZDAll = 4] = {
        key: "ZDAll",
        idx: 4,
        val: x
    },
    Y.ZDSingle = Y[Y.ZDSingle = 5] = {
        key: "ZDSingle",
        idx: 5,
        val: M
    },
    Y.ZDSingleTeam = Y[Y.ZDSingleTeam = 6] = {
        key: "ZDSingleTeam",
        idx: 6,
        val: j
    },
    (Y = A = A || {}).DSGame = Y[Y.DSGame = 1] = {
        key: "DSGame",
        idx: 1,
        val: 1
    },
    Y.DSFirstWin = Y[Y.DSFirstWin = 2] = {
        key: "DSFirstWin",
        idx: 2,
        val: 1
    },
    j = _ = _ || {},
    (Y = Z = Z || {})[Y.Game = 1] = "Game",
    Y[Y.Points = 2] = "Points",
    (Y = V = V || {})[Y.Game = 1] = "Game",
    Y[Y.Points = 2] = "Points",
    (Y = q = q || {})[Y.All = 1] = "All",
    Y[Y["1ST"] = 2] = "1ST",
    Y[Y["2ST"] = 3] = "2ST",
    Y[Y["3ST"] = 4] = "3ST",
    Y[Y["4ST"] = 5] = "4ST",
    Y[Y["5ST"] = 6] = "5ST",
    Y[Y["6ST"] = 7] = "5ST",
    Y[Y["7ST"] = 8] = "5ST",
    j.DSAll = j[j.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: Z
    },
    j.FirstWin = j[j.FirstWin = 2] = {
        key: "FirstWin",
        idx: 2,
        val: 1
    },
    j.ZDAll = j[j.ZDAll = 3] = {
        key: "ZDAll",
        idx: 3,
        val: V
    },
    j.ZDSingle = j[j.ZDSingle = 4] = {
        key: "ZDSingle",
        idx: 4,
        val: q
    },
    j.ZDSingleTeam = j[j.ZDSingleTeam = 5] = {
        key: "ZDSingleTeam",
        idx: 5,
        val: 1
    },
    q = i = i || {},
    (j = $ = $ || {})[j.All = 1] = "All",
    j[j.TopHalf = 2] = "TopHalf",
    (j = J = J || {})[j.All = 1] = "All",
    j[j.TopHalf = 2] = "TopHalf",
    q.DSAll = q[q.DSAll = 1] = {
        key: "DSAll",
        idx: 1,
        val: $
    },
    q.ZDAll = q[q.ZDAll = 2] = {
        key: "ZDAll",
        idx: 2,
        val: J
    },
    q = S = S || {},
    (J = z = z || {})[J.All = 1] = "All",
    J[J.TopHalf = 2] = "TopHalf",
    q.All = q[q.All = 1] = {
        key: "All",
        idx: 1,
        val: z
    },
    (z = nn = nn || {}).All = z[z.All = 1] = {
        key: "All",
        idx: 1,
        val: void 0
    },
    (z = B = B || {}).All = z[z.All = 1] = {
        key: "All",
        idx: 1,
        val: void 0
    },
    (z = m = m || {}).All = z[z.All = 1] = {
        key: "All",
        idx: 1,
        val: void 0
    },
    n.fv = n[n.fv = 99] = {
        key: "fv",
        idx: 99,
        val: 1
    },
    n.cs = n[n.cs = 100] = {
        key: "cs",
        idx: 100,
        val: 1
    },
    n.tv = n[n.tv = 54] = {
        key: "tv",
        idx: 54,
        val: 1
    },
    n.op = n[n.op = 53] = {
        key: "op",
        idx: 53,
        val: nn
    },
    n.none = n[n.none = -1] = {
        key: "none",
        idx: -1,
        val: -1
    },
    n.pass = n[n.pass = 10] = {
        key: "pass",
        idx: 10,
        val: 1
    },
    n.sc = n[n.sc = 11] = {
        key: "sc",
        idx: 11,
        val: t
    },
    n.wd = n[n.wd = 27] = {
        key: "wd",
        idx: 27,
        val: t
    },
    n.eu = n[n.eu = 26] = {
        key: "eu",
        idx: 26,
        val: t
    },
    n.ch = n[n.ch = 51] = {
        key: "ch",
        idx: 51,
        val: t
    },
    n.fi = n[n.fi = 52] = {
        key: "fi",
        idx: 52,
        val: t
    },
    n.bk = n[n.bk = 12] = {
        key: "bk",
        idx: 12,
        val: o
    },
    n.bb = n[n.bb = 13] = {
        key: "bb",
        idx: 13,
        val: a
    },
    n.tn = n[n.tn = 14] = {
        key: "tn",
        idx: 14,
        val: r
    },
    n.ih = n[n.ih = 15] = {
        key: "ih",
        idx: 15,
        val: g
    },
    n.vl = n[n.vl = 16] = {
        key: "vl",
        idx: 16,
        val: F
    },
    n.bm = n[n.bm = 17] = {
        key: "bm",
        idx: 17,
        val: l
    },
    n.es = n[n.es = 18] = {
        key: "es",
        idx: 18,
        val: e
    },
    n.af = n[n.af = 19] = {
        key: "af",
        idx: 19,
        val: s
    },
    n.pb = n[n.pb = 20] = {
        key: "pb",
        idx: 20,
        val: A
    },
    n.tt = n[n.tt = 21] = {
        key: "tt",
        idx: 21,
        val: _
    },
    n.hb = n[n.hb = 22] = {
        key: "hb",
        idx: 22,
        val: i
    },
    n.wp = n[n.wp = 23] = {
        key: "wp",
        idx: 23,
        val: S
    },
    n.ot = n[n.ot = 24] = {
        key: "ot",
        idx: 24,
        val: B
    },
    n.bx = n[n.bx = 28] = {
        key: "bx",
        idx: 28,
        val: m
    }
}(Ball = Ball || {});
var Args = {};
!function(n) {
    "use strict";
    n[n.BelowKind = 100001] = "BelowKind",
    n[n.BelowKindSub = 100002] = "BelowKindSub",
    n[n.CoverAndReturn = 100003] = "CoverAndReturn",
    n[n.CoverNoReturn = 100004] = "CoverNoReturn",
    n[n.AddBallTable = 100005] = "AddBallTable",
    n[n.RemoveBallTable = 100006] = "RemoveBallTable",
    n[n.FVAndCS = 100007] = "FVAndCS",
    n[n.PKPL = 100008] = "PKPL",
    n[n.BigSmallPL = 100009] = "BigSmallPL",
    n[n.OddPairPL = 100010] = "OddPairPL",
    n[n.OnlyPL = 100011] = "OnlyPL",
    n[n.RealDel = 100012] = "RealDel",
    n[n.FakeDel = 100013] = "FakeDel",
    n[n.ModeWS = 100015] = "ModeWS",
    n[n.ModeXHR = 100016] = "ModeXHR",
    n[n.AlertText = 100017] = "AlertText",
    n[n.Reload = 100018] = "Reload",
    n[n.BackPage = 100019] = "BackPage",
    n[n.Outer = 100020] = "Outer",
    n[n.Inner = 100021] = "Inner",
    n[n.Panel = 100022] = "Panel",
    n[n.UpScroll = 100023] = "UpScroll",
    n[n.DownScroll = 100024] = "DownScroll",
    n[n.Load = 100025] = "Load",
    n[n.Unload = 100026] = "Unload",
    n[n.LoadFV = 100027] = "LoadFV",
    n[n.UnloadFV = 100028] = "UnloadFV",
    n[n.InitialBall = 100029] = "InitialBall",
    n[n.ClosureBall = 100030] = "ClosureBall",
    n[n.SortHot = 100031] = "SortHot",
    n[n.SortTime = 100032] = "SortTime",
    n[n.Insert = 100033] = "Insert",
    n[n.InsertAfter = 100034] = "InsertAfter",
    n[n.InsertBefore = 100035] = "InsertBefore",
    n[n.InsertMiddle = 100036] = "InsertMiddle",
    n[n.MT = 100037] = "MT",
    n[n.MTOver = 100038] = "MTOver",
    n[n.RDBar = 100039] = "RDBar",
    n[n.RDIcon = 100040] = "RDIcon",
    n[n.RDScore = 100041] = "RDScore",
    n[n.RDRound = 100042] = "RDRound",
    n[n.ScoreBoard = 100043] = "ScoreBoard",
    n[n.RDAnimation = 100044] = "RDAnimation",
    n[n.RDInfo = 100045] = "RDInfo",
    n[n.GameLive = 100046] = "GameLive",
    n[n.RDHistory = 100047] = "RDHistory",
    n[n.More = 100048] = "More",
    n[n.Mobile = 100049] = "Mobile",
    n[n.PC = 100050] = "PC",
    n[n.ChatRoom = 100051] = "ChatRoom",
    n[n.NoPanel = 100052] = "NoPanel",
    n[n.OriginBackPage = 100053] = "OriginBackPage",
    n[n.Anchor = 100054] = "Anchor",
    n[n.ShortEn = 110001] = "ShortEn",
    n[n.ShortNum = 110002] = "ShortNum",
    n[n.WholeEn = 110003] = "WholeEn",
    n[n.WholeLang = 110004] = "WholeLang",
    n[n.VolDistance = 120001] = "VolDistance",
    n[n.VolPercent = 120002] = "VolPercent",
    n[n.LiveTvNoSignal = 120003] = "LiveTvNoSignal",
    n[n.LiveTvRegionalRestriction = 120004] = "LiveTvRegionalRestriction",
    n[n.LiveTvLoading = 120005] = "LiveTvLoading",
    n[n.LiveTvPlayMask = 120006] = "LiveTvPlayMask",
    n[n.LiveTvPlayRDUrl = 120007] = "LiveTvPlayRDUrl",
    n[n.LiveTvNotPlayRDUrl = 120008] = "LiveTvNotPlayRDUrl",
    n[n.LiveTvUnmute = 120009] = "LiveTvUnmute",
    n[n.LiveNoDeposit = 120010] = "LiveNoDeposit",
    n[n.LiveTvRDFirst = 120011] = "LiveTvRDFirst",
    n[n.LiveTv = 120012] = "LiveTv",
    n[n.PopLiveTv = 120013] = "PopLiveTv",
    n[n.LiveRdSuccess = 120014] = "LiveRdSuccess",
    n[n.LiveRdOtherError = 120015] = "LiveRdOtherError",
    n[n.LivePlayWrong = 120016] = "LivePlayWrong",
    n[n.NoneBlank = 130001] = "NoneBlank",
    n[n.BothBlank = 130002] = "BothBlank",
    n[n.LeftBlank = 130003] = "LeftBlank",
    n[n.RightBlank = 130003] = "RightBlank",
    n[n.ShowCart = 200001] = "ShowCart",
    n[n.ShowReceipt = 200002] = "ShowReceipt",
    n[n.Single = 200003] = "Single",
    n[n.Multi = 200004] = "Multi",
    n[n.Fast = 200005] = "Fast",
    n[n.Mini = 200006] = "Mini",
    n[n.BaseList = 200007] = "BaseList",
    n[n.SaveList = 200008] = "SaveList",
    n[n.RemoveList = 200009] = "RemoveList",
    n[n.CBE_IF = 200010] = "CBE_IF",
    n[n.CBE_MultiNoPoint = 200011] = "CBE_MultiNoPoint",
    n[n.CBE_Change = 200012] = "CBE_Change",
    n[n.CBE_NoPoint = 200013] = "CBE_NoPoint",
    n[n.Success = 200014] = "Success",
    n[n.PKChange = 200015] = "PKChange",
    n[n.OtherError = 200016] = "OtherError",
    n[n.ShowAlert = 200017] = "ShowAlert",
    n[n.CalcShowNum = 200018] = "CalcShowNum",
    n[n.CalcKeyNum = 200019] = "CalcKeyNum",
    n[n.CalcPassNum = 200020] = "CalcPassNum",
    n[n.CalcTotalPassNum = 200021] = "CalcTotalPassNum",
    n[n.Step1 = 200022] = "Step1",
    n[n.Step2 = 200023] = "Step2",
    n[n.Step3 = 200024] = "Step3",
    n[n.FCBet = 200025] = "FCBet",
    n[n.FCChange = 200026] = "FCChange",
    n[n.FCSuccess = 200027] = "FCSuccess",
    n[n.FCSending = 200028] = "FCSending",
    n[n.FCClose = 200029] = "FCClose",
    n[n.Coin = 200030] = "Coin",
    n[n.Winning = 200031] = "Winning",
    n[n.PlayWin = 210001] = "PlayWin",
    n[n.PlayHDP = 210002] = "PlayHDP",
    n[n.PlayOU = 210003] = "PlayOU",
    n[n.PlayOE = 210004] = "PlayOE",
    n[n.PlayShowPK = 210005] = "PlayShowPK",
    n[n.PlayYN = 210006] = "PlayYN",
    n[n.PlayHT = 210007] = "PlayHT",
    n[n.PlayTeamTS = 210008] = "PlayTeamTS",
    n[n.PlayCS = 210009] = "PlayCS",
    n[n.PlayTS = 210010] = "PlayTS",
    n[n.PlayHF = 210011] = "PlayHF",
    n[n.PlayPSO = 210012] = "PlayPSO",
    n[n.PlayGoalWin = 210013] = "PlayGoalWin",
    n[n.NoChkBT = 210014] = "NoChkBT",
    n[n.ChkShortBT = 210015] = "ChkShortBT",
    n[n.ChkLongBT = 210016] = "ChkLongBT",
    n[n.TeamAB = 210017] = "TeamAB",
    n[n.TeamA = 210018] = "TeamA",
    n[n.TeamB = 210019] = "TeamB",
    n[n.TeamHSGS = 210020] = "TeamHSGS",
    n[n.OR_ScoreAB = 210021] = "OR_ScoreAB",
    n[n.OR_FHAndFT = 210022] = "OR_FHAndFT",
    n[n.OR_ScoreA = 210023] = "OR_ScoreA",
    n[n.OR_ScoreB = 210024] = "OR_ScoreB",
    n[n.OR_YesOrNo = 210025] = "OR_YesOrNo",
    n[n.OR_FHAndSH = 210026] = "OR_FHAndSH",
    n[n.OR_TeamAOrBOrDauce = 210027] = "OR_TeamAOrBOrDauce",
    n[n.OR_ScoreAPlusB = 210028] = "OR_ScoreAPlusB",
    n[n.OR_TeamAOrBOrNoGoal = 210029] = "OR_TeamAOrBOrNoGoal",
    n[n.OR_MinuteAndSecond = 210030] = "OR_MinuteAndSecond",
    n[n.OR_TeamAOrBOrX = 210034] = "OR_TeamAOrBOrX",
    n[n.OR_BothTeamsToGoals = 210035] = "OR_BothTeamsToGoals",
    n[n.OR_IsLoseBall = 210036] = "OR_IsLoseBall",
    n[n.TopError = 210031] = "TopError",
    n[n.MaskError = 210032] = "MaskError",
    n[n.BtmError = 210033] = "BtmError",
    n[n.CE_ClearTop = 220010] = "CE_ClearTop",
    n[n.CE_ChkLimit = 220011] = "CE_ChkLimit",
    n[n.CE_ChkCombLimit = 220012] = "CE_ChkCombLimit",
    n[n.CE_ChkLTGTLimit = 220013] = "CE_ChkLTGTLimit",
    n[n.CE_ChkEmpty = 220014] = "CE_ChkEmpty",
    n[n.CE_GTAvlBl = 220015] = "CE_GTAvlBl",
    n[n.CE_ChkLTLimit = 220016] = "CE_ChkLTLimit",
    n[n.CE_ChkGTLimit = 220017] = "CE_ChkGTLimit",
    n[n.CE_LTLimit = 220018] = "CE_LTLimit",
    n[n.CE_GTLimit = 220019] = "CE_GTLimit",
    n[n.CE_AvlBl = 220020] = "CE_AvlBl",
    n[n.CE_GTCombLimit = 220021] = "CE_GTCombLimit",
    n[n.CE_LTCombLimit = 220022] = "CE_LTCombLimit",
    n[n.CE_GTCombWin = 220023] = "CE_GTCombWin",
    n[n.CE_ClearMask = 220050] = "CE_ClearMask",
    n[n.CE_ClosePK = 220051] = "CE_ClosePK",
    n[n.CE_Ban = 220052] = "CE_Ban",
    n[n.CE_IF = 220091] = "CE_IF",
    n[n.CE_MultiEmpty = 220092] = "CE_MultiEmpty",
    n[n.GE_Error = 300001] = "GE_Error",
    n[n.GE_NoEnough = 300002] = "GE_NoEnough",
    n[n.GE_Success = 300003] = "GE_Success",
    n[n.GE_SeriousError = 300099] = "GE_SeriousError",
    n[n.GE_ChatroomSpeakToFast = 300100] = "GE_ChatroomSpeakToFast",
    n[n.Unsettlement = 400001] = "Unsettlement",
    n[n.Exchange = 400002] = "Exchange"
}(Args = Args || {});
var VideoSource = {};
!function(n) {
    "use strict";
    n[n.None = -1] = "None",
    n[n.Hls = 0] = "Hls",
    n[n.Sldp = 1] = "Sldp",
    n[n.WebGL = 2] = "WebGL"
}(VideoSource = VideoSource || {});
var MainProperty = {
    webDevice: "",
    userDevice: "",
    isApp: !1,
    initVersion: 0,
    jsVersion: "",
    cssVersion: "",
    lang: "",
    urlParam: {},
    verify: "",
    RadarData: "",
    RadarAnimation: "",
    BBWSUrl: [],
    SMWSUrl: [],
    WRWSUrl: [],
    GRXHRUrl: [],
    RDXHRUrl: [],
    APIService: "",
    RadarService: "",
    RadarProtocol: "",
    RadarUrlSearch: "",
    GRXHRProtocol: "",
    GRXHRUrlSearch: "",
    sessionID: "",
    gameData: {},
    allyData: {},
    oddData: {},
    favoriteData: [],
    innerData: {
        gameData: {},
        allyData: {},
        oddData: {}
    },
    panelData: {
        panelTitle: [],
        titleTimer: null,
        showTitle: !1,
        fullScreenTimer: null,
        fullScreenClickTime: 0,
        RDAnimate: 0,
        roomId: "",
        anchorId: "",
        anchorLang: "",
        scoreBoard: {
            rt: null,
            st: "",
            runsA: [],
            runsB: [],
            rga: [],
            rgb: [],
            pr: null,
            base: -1,
            o: -1,
            ht: ""
        },
        gameLive: {
            domain: [],
            route: "",
            rSteamId: ""
        },
        girlLive: {
            domain: [],
            route: "",
            anchor: []
        },
        popGameLive: {
            domain: [],
            route: "",
            rSteamId: "",
            gId: "",
            type: null,
            anchor: [],
            aId: ""
        },
        game: {
            aId: "",
            mode: "",
            type: Ball.none.key,
            ta: [],
            tb: [],
            pa: "",
            pb: "",
            h: null,
            gpid: null
        },
        panel: Args.NoPanel,
        userOpen: !1,
        mId: "",
        bulletMode: BulletMode.Half,
        bulletPosition: null
    },
    favoriteLimit: 50,
    waitToDraw: null,
    waitToDrawInner: null,
    resizeDraw: null,
    cart: {
        open: !1,
        count: 0,
        cartLimit: 10,
        maxInputLength: 7,
        allyData: {},
        gameData: {},
        oddData: {},
        isSending: !1,
        list: [],
        multiPassCount: [0, 0],
        step1ErrorMsg: {
            single: {
                btm: [],
                item: {},
                btmBl: !1,
                btmChange: !1
            },
            multi: {
                btm: [],
                item: {}
            },
            fast: {
                btm: [],
                item: {}
            },
            mini: {
                btm: [],
                item: {}
            }
        },
        step3Status: [],
        fastCartItem: {
            rel: null,
            className: null
        },
        returnMax: {},
        step: ["", ""],
        loc: {
            type: "",
            step: "",
            fcBtn: ""
        },
        defPoint: "",
        defPassPoint: ""
    },
    receiptKeepList: [],
    receiptDefault: {
        cookieLimit: 15,
        addNum: 5,
        displayNum: 5,
        resend: 3
    },
    cartTimer: {
        time: {
            send: null
        },
        scanner: null,
        baseList: {},
        saveList: [],
        removeList: []
    },
    sortOption: {
        kind: -1,
        kindSub: {},
        sort: Args.SortHot,
        csChecked: ["All"],
        zpDate: "All"
    },
    alOption: {
        sort: 0,
        seachArray: [],
        cache: {},
        cacheName: Ball.none.key,
        fvAlly: []
    },
    ballSequence: [],
    gameSequence: [],
    allySequence: {
        pin: [],
        pop: []
    },
    isAutoAdapt: !0,
    isFastTrade: !1,
    isPrincipal: 0,
    innerPage: "",
    playMode: PlayMode.None,
    ballType: Ball.none.key,
    recentGroup: {},
    historyGroup: {},
    serverTime: {
        last: "",
        ms: 0,
        timer: null
    },
    user: {
        account: "",
        balance: 0,
        defaultObl: 1,
        defaultPassOblm: [1, 0],
        modeData: {},
        hasEnoughDeposit: 0,
        category: 0,
        hasDormant: 0
    },
    userModeLimit: 5,
    coin: 1,
    Recover: function() {},
    recordWindow: {},
    LastScroll: 0,
    BallAllyClosure: {},
    imgSet: {
        sc: "soccer",
        eu: "UEFA",
        wd: "worldCup",
        ch: "champion",
        fi: "fives",
        bk: "basketball",
        bb: "baseball",
        tn: "tennis",
        ih: "hockey",
        vl: "volleyball",
        bm: "badminton",
        es: "pcgame_20210630",
        af: "football",
        pb: "billiard",
        tt: "pingpong",
        hb: "handball",
        wp: "waterpolo",
        op: "olympic_20210531",
        ot: "other2",
        tv: "liveTv",
        bx: "boxing"
    },
    tempError: "",
    lastTouchEnd: 0,
    funcSetting: {},
    RecordCircuitLog: 1,
    RecordSNLog: !0,
    RecordLog: !0,
    KeepBBRSCount: 2,
    KeepWRRSCount: 2,
    KeepSMRSCount: 2,
    IsIosBagOrAndroidApp: !1
};
"function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function(n) {
    return this.slice(0, n.length) === n
}
),
"function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function(n) {
    return -1 !== this.indexOf(n, this.length - n.length)
}
),
void 0 === Array.isArray && (Array.isArray = function(n) {
    return "[object Array]" === Object.prototype.toString.call(n)
}
),
String.prototype.replaceAll = function(n, t) {
    return " " == n ? this.replace(new RegExp(/\s/gm), t) : this.replace(new RegExp(n,"gm"), t)
}
,
Array.prototype.remove = function(n) {
    n = this.indexOf(n);
    -1 < n && this.splice(n, 1)
}
,
Date.prototype.Format = function(n) {
    var t, o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        F: this.getMilliseconds()
    };
    for (t in /(y+)/i.test(n) && (n = n.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
    o)
        new RegExp("(" + t + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? o[t] : ("00" + o[t]).substr(("" + o[t]).length)));
    return n
}
,
Object.defineProperty(Error.prototype, "toJSON", {
    value: function() {
        var t = {};
        return Object.getOwnPropertyNames(this).forEach(function(n) {
            t[n] = this[n]
        }, this),
        t
    },
    configurable: !0,
    writable: !0
}),
"function" != typeof Object.assign && (Object.assign = function(n) {
    "use strict";
    if (null == n)
        throw new TypeError("Cannot convert undefined or null to object");
    n = Object(n);
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        if (null != o)
            for (var a in o)
                Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a])
    }
    return n
}
),
function() {
    var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = n;
    n = window.cancelAnimationFrame || window.cancelAnimationFrame || window.cancelAnimationFrame || window.cancelAnimationFrame;
    window.cancelAnimationFrame = n
}();
var Tool = {
    IsIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
    IsTouch: "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints,
    IsBlankDirect: ("ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Safari" == GetBrowserType(),
    IsShowHomeRemark: function(n) {
        return Tool.IsSC(n) || 0 <= [Ball.bb.key, Ball.bk.key, Ball.ih.key, Ball.vl.key, Ball.af.key, Ball.hb.key, Ball.wp.key, Ball.bx.key, Ball.ot.key].indexOf(n)
    },
    IsMultiSport: function(n) {
        return 0 <= [Ball.cs.key, Ball.fv.key, Ball.op.key, Ball.tv.key].indexOf(n)
    },
    IsSC: function(n) {
        return 0 <= [Ball.sc.key, Ball.eu.key, Ball.wd.key, Ball.ch.key, Ball.fi.key].indexOf(n)
    },
    IsEUorWD: function(n) {
        return 0 <= [Ball.eu.key, Ball.wd.key].indexOf(n)
    },
    IsCHorFI: function(n) {
        return 0 <= [Ball.ch.key, Ball.fi.key].indexOf(n)
    },
    IsMultiQtr: function() {
        return !!(Tool.IsSC(MainProperty.ballType) && Ball.sc.val.DSFifteen.idx == MainProperty.sortOption.kind || Ball.bk.key == MainProperty.ballType && 0 <= [Ball.bk.val.DSSingle.idx, Ball.bk.val.DSSingleTeam.idx, Ball.bk.val.ZDSingle.idx].indexOf(MainProperty.sortOption.kind) || Ball.bb.key == MainProperty.ballType && Ball.bb.val.ZDSingle.idx == MainProperty.sortOption.kind || Ball.tn.key == MainProperty.ballType && 0 <= [Ball.tn.val.DSSingle.idx, Ball.tn.val.ZDSingle.idx].indexOf(MainProperty.sortOption.kind) || Ball.ih.key == MainProperty.ballType && Ball.ih.val.DSSingle.idx == MainProperty.sortOption.kind || Ball.vl.key == MainProperty.ballType && Ball.vl.val.ZDSingle.idx == MainProperty.sortOption.kind || Ball.bm.key == MainProperty.ballType && Ball.bm.val.ZDSingle.idx == MainProperty.sortOption.kind || "pc" == MainProperty.webDevice && Ball.es.key == MainProperty.ballType && 0 <= [Ball.es.val.Single.idx, Ball.es.val.Total.idx].indexOf(MainProperty.sortOption.kind) || Ball.af.key == MainProperty.ballType && 0 <= [Ball.af.val.DSSingle.idx, Ball.af.val.ZDSingle.idx].indexOf(MainProperty.sortOption.kind) || Ball.tt.key == MainProperty.ballType && Ball.tt.val.ZDSingle.idx == MainProperty.sortOption.kind || "mobile" == MainProperty.webDevice && (Tool.IsSC(MainProperty.ballType) && Ball.sc.val.ZDFifteen.idx == MainProperty.sortOption.kind || Ball.bk.key == MainProperty.ballType && Ball.bk.val.ZDSingleTeam.idx == MainProperty.sortOption.kind || Ball.af.key == MainProperty.ballType && Ball.af.val.ZDSingleTeam.idx == MainProperty.sortOption.kind))
    },
    IsOuterSingleTeam: function() {
        return MainProperty.ballType == Ball.bk.key && MainProperty.sortOption.kind == Ball.bk.val.ZDSingleTeam.idx || MainProperty.ballType == Ball.es.key && MainProperty.sortOption.kind == Ball.es.val.Single.idx || MainProperty.ballType == Ball.af.key && MainProperty.sortOption.kind == Ball.af.val.ZDSingleTeam.idx
    },
    IsEmptyObject: function(n) {
        for (var t in n)
            return !1;
        return !0
    },
    IsInArray: function(n, t) {
        return -1 < t.indexOf(n)
    },
    GetIOSVersion: function() {
        var n = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
        return n ? n[1].replace("_", ".").split("_")[0] : 0
    },
    ChangeBoundary: function(n) {
        var t, o, a = !1, r = document.getElementById(n);
        return r && (t = r.offsetHeight,
        o = r.offsetTop,
        t < (n = window.innerHeight) && n <= o + t && (r.style.top = n - t + "px",
        a = !0)),
        a
    },
    DeepClone: function(n) {
        var t = (typeof n).toLowerCase()
          , o = null;
        if (Array.isArray(n)) {
            o = [];
            for (var a = 0; a < n.length; a++)
                o.push(this.DeepClone(n[a]))
        } else {
            if ("object" !== t)
                return n;
            for (var r in o = {},
            n)
                o[r] = this.DeepClone(n[r])
        }
        return o
    },
    TransformUserBalance: function(n) {
        if (0 != /^(\-|\+)?\d+(\.\d+)?$/.test(n)) {
            MainProperty.user.balance = parseFloat(n);
            var t = (t = MainProperty.user.balance.toString()).indexOf(".") < 0 ? t : t.split(".")[0].replace("-0", "0");
            ChatVue.$store.user.balance = t;
            n = /(\d{1,3})(?=(\d{3})+$)/g;
            return t = "vi" == langFont.Font_Langue ? t.replace(n, "$1.") : t.replace(n, "$1,"),
            "mobile" === MainProperty.webDevice ? ($("#userBalance").text("$ " + t),
            $("#miniCartInfo > div > div.betMoney,#bet02 > div.popupT > div.popupMoney").text("$ " + t),
            $("#liveScore > div.header > div.icon_money").text("$ " + t),
            $("#note > div.header > div.icon_money").text("$ " + t),
            $("#gameResult > div.header > div.icon_money").text("$ " + t),
            $("#gameRule > div.header > div.icon_money").text("$ " + t),
            $("#calculatorBlock > div.icon_money").text("$ " + t),
            $("#pkTutorialsInfo > div.header > div.icon_money").text("$ " + t)) : $("#userBalance").text(t),
            t
        }
    },
    TransformPanelId: function(n, t) {
        switch (n) {
        case 0:
            return t == Args.ShortNum ? Args.ScoreBoard : "scoreBoard";
        case 1:
            return t == Args.ShortNum ? Args.RDAnimation : "RDAnimate";
        case 2:
            return t == Args.ShortNum ? Args.RDInfo : "RDInfo";
        case 3:
            return t == Args.ShortNum ? Args.GameLive : "gameLive";
        case 4:
            return t == Args.ShortNum ? Args.RDHistory : "RDHistory";
        case 5:
            return t == Args.ShortNum ? Args.Anchor : "Anchor";
        default:
            return t == Args.ShortNum ? Args.NoPanel : ""
        }
    },
    TransformGameType: function(n, t) {
        var o = "";
        switch (n = isNaN(parseInt(n, 10)) ? n : parseInt(n, 10)) {
        case Ball.cs.idx:
        case Ball.cs.key:
            o = t == Args.ShortNum ? Ball.cs.idx : t == Args.WholeEn ? "" : t == Args.WholeLang ? langFont.Font_ComingSoon : Ball.cs.key;
            break;
        case Ball.sc.idx:
        case Ball.sc.key:
            o = t == Args.ShortNum ? Ball.sc.idx : t == Args.WholeEn ? "soccer" : t == Args.WholeLang ? langFont.Font_Soccer : Ball.sc.key;
            break;
        case Ball.eu.idx:
        case Ball.eu.key:
            o = t == Args.ShortNum ? Ball.eu.idx : t == Args.WholeEn ? "UEFA" : t == Args.WholeLang ? langFont.Font_Euro : Ball.eu.key;
            break;
        case Ball.wd.idx:
        case Ball.wd.key:
            o = t == Args.ShortNum ? Ball.wd.idx : t == Args.WholeEn ? "worldCup" : t == Args.WholeLang ? langFont.Font_WorldCup : Ball.wd.key;
            break;
        case Ball.ch.idx:
        case Ball.ch.key:
            o = t == Args.ShortNum ? Ball.ch.idx : t == Args.WholeEn ? "champion" : t == Args.WholeLang ? langFont.Font_ChampionsLeague : Ball.ch.key;
            break;
        case Ball.fi.idx:
        case Ball.fi.key:
            o = t == Args.ShortNum ? Ball.fi.idx : t == Args.WholeEn ? "fives" : t == Args.WholeLang ? langFont.Font_TopLeague : Ball.fi.key;
            break;
        case Ball.bk.idx:
        case Ball.bk.key:
            o = t == Args.ShortNum ? Ball.bk.idx : t == Args.WholeEn ? "basketball" : t == Args.WholeLang ? langFont.Font_Basketball : Ball.bk.key;
            break;
        case Ball.bb.idx:
        case Ball.bb.key:
            o = t == Args.ShortNum ? Ball.bb.idx : t == Args.WholeEn ? "baseball" : t == Args.WholeLang ? langFont.Font_Baseball : Ball.bb.key;
            break;
        case Ball.tn.idx:
        case Ball.tn.key:
            o = t == Args.ShortNum ? Ball.tn.idx : t == Args.WholeEn ? "tennis" : t == Args.WholeLang ? langFont.Font_Tennis : Ball.tn.key;
            break;
        case Ball.ih.idx:
        case Ball.ih.key:
            o = t == Args.ShortNum ? Ball.ih.idx : t == Args.WholeEn ? "hockey" : t == Args.WholeLang ? langFont.Font_IceHockey : Ball.ih.key;
            break;
        case Ball.vl.idx:
        case Ball.vl.key:
            o = t == Args.ShortNum ? Ball.vl.idx : t == Args.WholeEn ? "volleyball" : t == Args.WholeLang ? langFont.Font_Volleyball : Ball.vl.key;
            break;
        case Ball.bm.idx:
        case Ball.bm.key:
            o = t == Args.ShortNum ? Ball.bm.idx : t == Args.WholeEn ? "badminton" : t == Args.WholeLang ? langFont.Font_Badminton : Ball.bm.key;
            break;
        case Ball.es.idx:
        case Ball.es.key:
            o = t == Args.ShortNum ? Ball.es.idx : t == Args.WholeEn ? "pcgame" : t == Args.WholeLang ? langFont.Font_ESports : Ball.es.key;
            break;
        case Ball.af.idx:
        case Ball.af.key:
            o = t == Args.ShortNum ? Ball.af.idx : t == Args.WholeEn ? "football" : t == Args.WholeLang ? langFont.Font_USFootball : Ball.af.key;
            break;
        case Ball.pb.idx:
        case Ball.pb.key:
            o = t == Args.ShortNum ? Ball.pb.idx : t == Args.WholeEn ? "billiard" : t == Args.WholeLang ? langFont.Font_Poolball : Ball.pb.key;
            break;
        case Ball.tt.idx:
        case Ball.tt.key:
            o = t == Args.ShortNum ? Ball.tt.idx : t == Args.WholeEn ? "pingpong" : t == Args.WholeLang ? langFont.Font_TableTennis : Ball.tt.key;
            break;
        case Ball.hb.idx:
        case Ball.hb.key:
            o = t == Args.ShortNum ? Ball.hb.idx : t == Args.WholeEn ? "handball" : t == Args.WholeLang ? langFont.Font_Handball : Ball.hb.key;
            break;
        case Ball.wp.idx:
        case Ball.wp.key:
            o = t == Args.ShortNum ? Ball.wp.idx : t == Args.WholeEn ? "waterpolo" : t == Args.WholeLang ? langFont.Font_WaterPolo : Ball.wp.key;
            break;
        case Ball.fv.idx:
        case Ball.fv.key:
            o = t == Args.ShortNum ? Ball.fv.idx : t == Args.WholeEn ? "" : t == Args.WholeLang ? langFont.Font_MyGame : Ball.fv.key;
            break;
        case Ball.op.idx:
        case Ball.op.key:
            o = t == Args.ShortNum ? Ball.op.idx : t == Args.WholeEn ? "olympic" : t == Args.WholeLang ? langFont.Font_OlympicWinter : Ball.op.key;
            break;
        case Ball.ot.idx:
        case Ball.ot.key:
            o = t == Args.ShortNum ? Ball.ot.idx : t == Args.WholeEn ? "other" : t == Args.WholeLang ? langFont.Font_Other : Ball.ot.key;
            break;
        case Ball.bx.idx:
        case Ball.bx.key:
            o = t == Args.ShortNum ? Ball.bx.idx : t == Args.WholeEn ? "boxing" : t == Args.WholeLang ? langFont.Font_Boxing : Ball.bx.key;
            break;
        case Ball.tv.idx:
        case Ball.tv.key:
            o = t == Args.ShortNum ? Ball.tv.idx : t == Args.WholeEn ? "liveTv" : t == Args.WholeLang ? langFont.Font_LiveTV : Ball.tv.key;
            break;
        case Ball.pass.idx:
        case Ball.pass.key:
            o = t == Args.ShortNum ? Ball.pass.idx : t == Args.WholeEn ? "" : t == Args.WholeLang ? langFont.Font_CartPass : Ball.pass.key;
            break;
        case Ball.none.idx:
        case Ball.none.key:
        default:
            o = t == Args.ShortNum ? Ball.none.idx : t == Args.WholeEn || t == Args.WholeLang ? "" : Ball.none.key
        }
        return o
    },
    TransformModeText: function(n, t) {
        return [["ZP", "DS", "ZD"], [langFont.Font_ZP, langFont.Font_DS, langFont.Font_ZD]][n][t]
    },
    TransformDateTime: function(n, t, o) {
        for (var a = {
            1: "yyyy",
            2: "MM",
            4: "dd",
            8: "hh",
            16: "mm",
            32: "ss"
        }, r = 32, g = o; 1 <= r; r /= 2)
            r <= g ? g -= r : delete a[r];
        var F = [[1, 2, 4], [8, 16, 32]];
        ["zh", "cn"].indexOf(t) < 0 && (F = [[4, 2, 1], [8, 16, 32]]);
        for (var l = ["", ""], r = 0; r < F.length; r++)
            for (g = 0; g < F[r].length; g++)
                a[F[r][g]] && (0 < l[r].length && (l[r] += 0 < r ? ":" : "-"),
                l[r] += a[F[r][g]]);
        return new Date(n).Format(l.join(" "))
    },
    TransformStatus: function(n, t) {
        var o = {
            sc: {
                0: langFont.Font_SCStatus[0],
                1: langFont.Font_SCStatus[1],
                2: langFont.Font_SCStatus[2],
                3: langFont.Font_SCStatus[3],
                4: langFont.Font_SCStatus[4],
                60: langFont.Font_SCStatus[5]
            },
            bk: {
                0: langFont.Font_BKStatus[0],
                1: langFont.Font_BKStatus[1],
                2: langFont.Font_BKStatus[2],
                3: langFont.Font_BKStatus[3],
                4: langFont.Font_BKStatus[4],
                5: langFont.Font_BKStatus[5],
                6: langFont.Font_BKStatus[6],
                7: langFont.Font_BKStatus[7],
                11: langFont.Font_BKStatus[8],
                12: langFont.Font_BKStatus[9],
                13: langFont.Font_BKStatus[10],
                60: langFont.Font_BKStatus[11],
                61: langFont.Font_BKStatus[12]
            },
            bb: {
                0: langFont.Font_BBStatus[0],
                1: langFont.Font_BBStatus[1],
                2: langFont.Font_BBStatus[2],
                3: langFont.Font_BBStatus[3],
                4: langFont.Font_BBStatus[4],
                5: langFont.Font_BBStatus[5],
                6: langFont.Font_BBStatus[6],
                7: langFont.Font_BBStatus[7],
                8: langFont.Font_BBStatus[8],
                9: langFont.Font_BBStatus[9],
                10: langFont.Font_BBStatus[10],
                11: langFont.Font_BBStatus[11],
                12: langFont.Font_BBStatus[12],
                13: langFont.Font_BBStatus[13],
                14: langFont.Font_BBStatus[14],
                15: langFont.Font_BBStatus[15],
                16: langFont.Font_BBStatus[16],
                17: langFont.Font_BBStatus[17],
                18: langFont.Font_BBStatus[18],
                20: langFont.Font_BBStatus[19],
                31: langFont.Font_BBStatus[20],
                32: langFont.Font_BBStatus[21],
                60: langFont.Font_BBStatus[22],
                70: langFont.Font_BBStatus[23],
                71: langFont.Font_BBStatus[24],
                72: langFont.Font_BBStatus[25],
                73: langFont.Font_BBStatus[26],
                74: langFont.Font_BBStatus[27],
                75: langFont.Font_BBStatus[28],
                76: langFont.Font_BBStatus[29],
                77: langFont.Font_BBStatus[30],
                78: langFont.Font_BBStatus[31],
                79: langFont.Font_BBStatus[32],
                80: langFont.Font_BBStatus[33],
                81: langFont.Font_BBStatus[34],
                82: langFont.Font_BBStatus[35],
                83: langFont.Font_BBStatus[36],
                84: langFont.Font_BBStatus[37],
                85: langFont.Font_BBStatus[38],
                86: langFont.Font_BBStatus[39],
                87: langFont.Font_BBStatus[40],
                88: langFont.Font_BBStatus[41],
                89: langFont.Font_BBStatus[42],
                90: langFont.Font_BBStatus[43],
                91: langFont.Font_BBStatus[44],
                92: langFont.Font_BBStatus[45],
                93: langFont.Font_BBStatus[46],
                94: langFont.Font_BBStatus[47],
                95: langFont.Font_BBStatus[48],
                96: langFont.Font_BBStatus[49],
                97: langFont.Font_BBStatus[50],
                98: langFont.Font_BBStatus[51],
                99: langFont.Font_BBStatus[52],
                100: langFont.Font_BBStatus[53],
                101: langFont.Font_BBStatus[54],
                102: langFont.Font_BBStatus[55],
                103: langFont.Font_BBStatus[56],
                104: langFont.Font_BBStatus[57],
                105: langFont.Font_BBStatus[58],
                106: langFont.Font_BBStatus[59],
                107: langFont.Font_BBStatus[60],
                108: langFont.Font_BBStatus[61],
                109: langFont.Font_BBStatus[62],
                110: langFont.Font_BBStatus[63],
                111: langFont.Font_BBStatus[64],
                112: langFont.Font_BBStatus[65],
                113: langFont.Font_BBStatus[66],
                114: langFont.Font_BBStatus[67],
                115: langFont.Font_BBStatus[68],
                116: langFont.Font_BBStatus[69],
                117: langFont.Font_BBStatus[70],
                118: langFont.Font_BBStatus[71],
                119: langFont.Font_BBStatus[72],
                120: langFont.Font_BBStatus[73],
                121: langFont.Font_BBStatus[74],
                122: langFont.Font_BBStatus[75],
                123: langFont.Font_BBStatus[76],
                124: langFont.Font_BBStatus[77],
                125: langFont.Font_BBStatus[78],
                126: langFont.Font_BBStatus[79],
                127: langFont.Font_BBStatus[80],
                128: langFont.Font_BBStatus[81],
                129: langFont.Font_BBStatus[82],
                130: langFont.Font_BBStatus[83],
                131: langFont.Font_BBStatus[84],
                132: langFont.Font_BBStatus[85],
                133: langFont.Font_BBStatus[86],
                134: langFont.Font_BBStatus[87],
                135: langFont.Font_BBStatus[88],
                136: langFont.Font_BBStatus[89],
                137: langFont.Font_BBStatus[90],
                138: langFont.Font_BBStatus[91],
                139: langFont.Font_BBStatus[92],
                140: langFont.Font_BBStatus[93],
                141: langFont.Font_BBStatus[94],
                142: langFont.Font_BBStatus[95],
                143: langFont.Font_BBStatus[96],
                144: langFont.Font_BBStatus[97],
                145: langFont.Font_BBStatus[98],
                146: langFont.Font_BBStatus[99],
                147: langFont.Font_BBStatus[100],
                148: langFont.Font_BBStatus[101],
                149: langFont.Font_BBStatus[102],
                150: langFont.Font_BBStatus[103],
                151: langFont.Font_BBStatus[104]
            },
            tn: {
                0: langFont.Font_TNStatus[0],
                1: langFont.Font_TNStatus[1],
                2: langFont.Font_TNStatus[2],
                3: langFont.Font_TNStatus[3],
                4: langFont.Font_TNStatus[4],
                5: langFont.Font_TNStatus[5],
                20: langFont.Font_TNStatus[6],
                60: langFont.Font_TNStatus[7],
                61: langFont.Font_TNStatus[8]
            },
            ih: {
                0: langFont.Font_IHStatus[0],
                1: langFont.Font_IHStatus[1],
                2: langFont.Font_IHStatus[2],
                3: langFont.Font_IHStatus[3],
                4: langFont.Font_IHStatus[4],
                5: langFont.Font_IHStatus[5],
                6: langFont.Font_IHStatus[6],
                60: langFont.Font_IHStatus[7],
                61: langFont.Font_IHStatus[8]
            },
            vl: {
                0: langFont.Font_VLStatus[0],
                1: langFont.Font_VLStatus[1],
                2: langFont.Font_VLStatus[2],
                3: langFont.Font_VLStatus[3],
                4: langFont.Font_VLStatus[4],
                5: langFont.Font_VLStatus[5],
                6: langFont.Font_VLStatus[6],
                7: langFont.Font_VLStatus[7],
                20: langFont.Font_VLStatus[8],
                60: langFont.Font_VLStatus[9],
                61: langFont.Font_VLStatus[10]
            },
            bm: {
                0: langFont.Font_BMStatus[0],
                1: langFont.Font_BMStatus[1],
                2: langFont.Font_BMStatus[2],
                3: langFont.Font_BMStatus[3],
                4: langFont.Font_BMStatus[4],
                5: langFont.Font_BMStatus[5],
                20: langFont.Font_BMStatus[6],
                60: langFont.Font_BMStatus[7],
                61: langFont.Font_BMStatus[8]
            },
            es: {
                0: langFont.Font_ESStatus[0],
                1: langFont.Font_ESStatus[1],
                2: langFont.Font_ESStatus[2],
                3: langFont.Font_ESStatus[3],
                4: langFont.Font_ESStatus[4],
                5: langFont.Font_ESStatus[5],
                6: langFont.Font_ESStatus[6],
                7: langFont.Font_ESStatus[7],
                20: langFont.Font_ESStatus[8],
                60: langFont.Font_ESStatus[9],
                61: langFont.Font_ESStatus[10]
            },
            af: {
                0: langFont.Font_AFStatus[0],
                1: langFont.Font_AFStatus[1],
                2: langFont.Font_AFStatus[2],
                3: langFont.Font_AFStatus[3],
                4: langFont.Font_AFStatus[4],
                6: langFont.Font_AFStatus[5],
                7: langFont.Font_AFStatus[6],
                11: langFont.Font_AFStatus[7],
                12: langFont.Font_AFStatus[8],
                13: langFont.Font_AFStatus[9],
                20: langFont.Font_AFStatus[10],
                60: langFont.Font_AFStatus[11],
                61: langFont.Font_AFStatus[12]
            },
            pb: {
                0: langFont.Font_PBStatus[0],
                20: langFont.Font_PBStatus[1]
            },
            tt: {
                0: langFont.Font_TTStatus[0],
                1: langFont.Font_TTStatus[1],
                2: langFont.Font_TTStatus[2],
                3: langFont.Font_TTStatus[3],
                4: langFont.Font_TTStatus[4],
                5: langFont.Font_TTStatus[5],
                6: langFont.Font_TTStatus[6],
                7: langFont.Font_TTStatus[7],
                20: langFont.Font_TTStatus[8],
                60: langFont.Font_TTStatus[9],
                61: langFont.Font_TTStatus[10]
            },
            hb: {
                0: langFont.Font_HBStatus[0],
                11: langFont.Font_HBStatus[1],
                12: langFont.Font_HBStatus[2],
                13: langFont.Font_HBStatus[3],
                14: langFont.Font_HBStatus[4],
                20: langFont.Font_HBStatus[5],
                60: langFont.Font_HBStatus[6],
                61: langFont.Font_HBStatus[7]
            },
            wp: {
                0: langFont.Font_WPStatus[0],
                1: langFont.Font_WPStatus[1],
                2: langFont.Font_WPStatus[2],
                3: langFont.Font_WPStatus[3],
                4: langFont.Font_WPStatus[4],
                10: langFont.Font_WPStatus[5],
                11: langFont.Font_WPStatus[6],
                12: langFont.Font_WPStatus[7],
                13: langFont.Font_WPStatus[8],
                14: langFont.Font_WPStatus[9],
                20: langFont.Font_WPStatus[10],
                60: langFont.Font_WPStatus[11],
                61: langFont.Font_WPStatus[12]
            },
            op: {
                0: langFont.Font_OPStatus[0],
                20: langFont.Font_OPStatus[1]
            },
            ot: {
                0: langFont.Font_OPStatus[0],
                20: langFont.Font_OPStatus[1]
            },
            bx: {
                0: langFont.Font_BXStatus[0]
            }
        };
        return o[n = Tool.IsSC(n) ? Ball.sc.key : n] && o[n][t] ? o[n][t] : ""
    },
    TransformGdOrSt: function(n, t, o, a, r, g, F) {
        var l = ["", ""]
          , e = g
          , s = Tool.TransformStatus(n, a);
        if (t == PlayMode.ZD) {
            switch (n) {
            case Ball.sc.key:
            case Ball.eu.key:
            case Ball.wd.key:
            case Ball.ch.key:
            case Ball.fi.key:
                e = [2, 4, 60].indexOf(a) < 0 ? (g = Math.floor((MainProperty.serverTime.ms - g) / 1e3 / 60)) > parseInt(F, 10) ? F + "+" : g + "'" : "";
                break;
            case Ball.bb.key:
                9 == o && (s = langFont.Font_RollBall);
                break;
            case Ball.es.key:
                2 == o && (s = langFont.Font_RollBall)
            }
            l = [s, e]
        } else
            l = Tool.TransformDateTime(r, langFont.Font_Langue, 30).split(" ");
        return l
    },
    TransformRunTime: function(n, t) {
        var o = t;
        return "-60" == t ? o = Tool.TransformStatus(n, 60) : isNaN(new Date(t).getTime()) || (o = Tool.IsSC(n) ? new Date(t).setSeconds(0) : new Date(t).Format("mm:ss")),
        o
    },
    TransformCountry: function(n) {
        for (var t = [], o = 0; o < n.length; o++)
            n[o] && 0 < n[o].length ? t.push("-" + n[o]) : t.push("");
        return t
    },
    TransformRuns: function(n, t, o, a) {
        var r = Array.isArray(t) ? t : []
          , t = {
            sc: 6,
            eu: 6,
            wd: 6,
            bk: 5,
            bb: 10,
            tn: 5,
            vl: 7,
            bm: 5,
            af: 5,
            tt: 7,
            es: 7,
            hb: 3,
            ih: 4,
            op: 0,
            ot: 0,
            bx: 0,
            wp: 5
        };
        if (t[n]) {
            if (0 < (s = t[n] - r.length))
                for (var g = 0; g < s; g++)
                    r.push("");
            else
                s < 0 && (r = r.splice(0, t[n]));
            switch (n) {
            case "bk":
            case "af":
                for (var F = "", l = "", e = 0 <= o.indexOf("A") ? "A" : 0 <= o.indexOf("B") ? "B" : "", s = "A" == e ? 1 : 2, A = [], g = 0; g < r.length; g++)
                    r[g] && "B" != e && (g < s ? (F = F || 0,
                    F += parseInt(r[g], 10)) : (l = l || 0,
                    l += parseInt(r[g], 10))),
                    e ? A.push("") : A.push(r[g]);
                r = [F.toString(), l.toString()].concat(A);
                break;
            case "tn":
            case "vl":
            case "bm":
            case "tt":
                for (var _ = "", g = 0; g < r.length; g++)
                    r[g] && (_ = _ || 0,
                    _ += parseInt(r[g], 10),
                    0 <= r[g].indexOf("'") && (r[g] = a ? r[g].split("'")[0] : r[g].replace("'", "<sup>") + "</sup>"));
                r.unshift(_.toString())
            }
        }
        return r
    },
    TransformNumToPk: function(n, t) {
        if ("" == t)
            return "";
        function o(n, t) {
            for (var o = n.toString().length; o < t; o = n.length)
                n = "0" + n;
            return n
        }
        if (-1 == t)
            return "0";
        if (!(0 <= ["11001", "11002", "11011", "11012", "11021", "11022", "11064", "11065", "11101", "11102", "11111", "11112", "11121", "11122", "11164", "11165", "11201", "11202", "11211", "11212", "11221", "11222", "11231", "11232", "11241", "11242", "11251", "11252", "11301", "11302", "11311", "11312", "11321", "11322", "11331", "11332", "11341", "11342", "11351", "11352", "11401", "11402", "11411", "11412", "11421", "11422", "11431", "11432", "11441", "11442", "11451", "11452", "11701", "11702", "11015", "11016", "11115", "11116", "26001", "26002", "26011", "26012", "26021", "26022", "26064", "26065", "26101", "26102", "26111", "26112", "26121", "26122", "26164", "26165", "26201", "26202", "26211", "26212", "26221", "26222", "26231", "26232", "26241", "26242", "26251", "26252", "26301", "26302", "26311", "26312", "26321", "26322", "26331", "26332", "26341", "26342", "26351", "26352", "26401", "26402", "26411", "26412", "26421", "26422", "26431", "26432", "26441", "26442", "26451", "26452", "26701", "26702", "26015", "26016", "26115", "26116", "27001", "27002", "27011", "27012", "27021", "27022", "27064", "27065", "27101", "27102", "27111", "27112", "27121", "27122", "27164", "27165", "27201", "27202", "27211", "27212", "27221", "27222", "27231", "27232", "27241", "27242", "27251", "27252", "27301", "27302", "27311", "27312", "27321", "27322", "27331", "27332", "27341", "27342", "27351", "27352", "27401", "27402", "27411", "27412", "27421", "27422", "27431", "27432", "27441", "27442", "27451", "27452", "27701", "27702", "27015", "27016", "27115", "27116"].indexOf(n))) {
            t = Math.round(Math.abs(t) / 1e3 * 200);
            r = parseInt(t / 200);
            return 100 < (a = t % 200) ? (r += 1) + "+" + o(a = 200 - a, 2) : 0 == a ? r + "" : 100 == a ? r + ".5" : r + "-" + o(a, 2)
        }
        t = Math.abs(t);
        var a, r = parseInt(t / 1e3);
        return 0 == (a = t % 1e3) || 500 == a ? t / 1e3 + "" : 250 == a ? r + "/" + (r + .5) : 750 == a ? r + .5 + "/" + (r + 1) : ""
    },
    TransformPointer: function(n, t) {
        var o = (t = parseFloat(t)) + parseFloat(1);
        if (isNaN(t))
            return ["", ""];
        if (0 <= ["11003", "11004", "11013", "11014", "11023", "11024", "11071", "11103", "11104", "11113", "11114", "11123", "11124", "11203", "11204", "11213", "11214", "11223", "11224", "11233", "11234", "11243", "11244", "11253", "11254", "11303", "11304", "11313", "11314", "11323", "11324", "11333", "11334", "11343", "11344", "11353", "11354", "11403", "11404", "11413", "11414", "11423", "11424", "11433", "11434", "11443", "11444", "11453", "11454", "11531", "11703", "11711", "26003", "26004", "26013", "26014", "26023", "26024", "26071", "26103", "26104", "26113", "26114", "26123", "26124", "26203", "26204", "26213", "26214", "26223", "26224", "26233", "26234", "26243", "26244", "26253", "26254", "26303", "26304", "26313", "26314", "26323", "26324", "26333", "26334", "26343", "26344", "26353", "26354", "26403", "26404", "26413", "26414", "26423", "26424", "26433", "26434", "26443", "26444", "26453", "26454", "26531", "26703", "26711", "27003", "27004", "27013", "27014", "27023", "27024", "27071", "27103", "27104", "27113", "27114", "27123", "27124", "27203", "27204", "27213", "27214", "27223", "27224", "27233", "27234", "27243", "27244", "27253", "27254", "27303", "27304", "27313", "27314", "27323", "27324", "27333", "27334", "27343", "27344", "27353", "27354", "27403", "27404", "27413", "27414", "27423", "27424", "27433", "27434", "27443", "27444", "27453", "27454", "27531", "27703", "27711"].indexOf(n))
            return [t.toFixed(3), o.toFixed(3)];
        n = t.toString();
        if (n.split(".").length < 2 || n.split(".")[1].length < 2)
            return [t.toFixed(2), o.toFixed(2)];
        t = n.split(".")[1].length;
        return [n, o.toFixed(t)]
    },
    TransformMathFloor: function(n, t) {
        0 <= (n = n.toString()).indexOf("e-") && n.split("e-")[1] > t && (n = "0");
        var o = n.split(".")
          , a = 0 == t ? o[0] : o[0] + "."
          , n = 0;
        o[1] && (n = o[1].length,
        a += o[1].substr(0, t));
        for (var r = n; r < t; r++)
            a += "0";
        return a
    },
    TransformRadar: function(n, t, o, a) {
        var r = !1;
        return o && (n ? (!a && 0 <= [Ball.sc.key, Ball.eu.key, Ball.wd.key, Ball.ch.key, Ball.fi.key, Ball.bk.key, Ball.tn.key].indexOf(t) || MainProperty.panelData.game.mode == PlayMode.ZD && 0 <= [Ball.sc.key, Ball.eu.key, Ball.wd.key, Ball.ch.key, Ball.fi.key, Ball.bk.key, Ball.tn.key].indexOf(t)) && (r = !0) : (o = o.toUpperCase()).endsWith("C") ? r = !0 : 0 == a ? r = !!o.endsWith("A") : 0 <= [Ball.sc.key, Ball.eu.key, Ball.wd.key, Ball.ch.key, Ball.fi.key, Ball.bk.key, Ball.tn.key].indexOf(t) && (r = !!o.endsWith("B"))),
        r
    },
    TransformInvalid: function(n) {
        switch (n) {
        case 1:
            return langFont.Font_Deleted;
        case 2:
            return langFont.Font_GoalNoteCanceled;
        case 3:
            return langFont.Font_ArbitrageNoteCanceled;
        case 6:
            return langFont.Font_RedCardErrorCanceled;
        case 101:
            return langFont.Font_StandoffWithdrawal;
        case 102:
            return langFont.Font_Delayed;
        case 103:
            return langFont.Font_Postponed;
        case 104:
            return langFont.Font_Abandoned;
        case 105:
            return langFont.Font_Cancelled;
        case 106:
            return langFont.Font_Forfeit;
        case 107:
            return langFont.Font_CompletedEarly;
        case 108:
            return langFont.Font_Undecided;
        case 109:
            return langFont.Font_TeamError;
        case 110:
            return langFont.Font_PlayerReplacement;
        case 111:
            return langFont.Font_EventReservations;
        case 112:
            return langFont.Font_HomeAndGuestError;
        case 113:
            return langFont.Font_HomeAndGuestNotPlaying;
        case 114:
            return langFont.Font_IrregularTime;
        case 115:
            return langFont.Font_PlayerNotStarted;
        case 116:
            return langFont.Font_NoOvertime;
        case 117:
            return langFont.Font_NoPenalty;
        case 118:
            return langFont.Font_CancelledBets;
        case 119:
            return langFont.Font_AllyError;
        case 191:
            return langFont.Font_GameResultCorrect;
        case 192:
            return langFont.Font_Description;
        case 120:
            return langFont.Font_HomeTeamNonparticipation;
        case 121:
            return langFont.Font_AwayTeamNonparticipation;
        case 210:
            return langFont.Font_ExchangeCancel;
        case 211:
            return langFont.Font_ExchangeSuccess;
        case 255:
            return langFont.Font_CartBetRefusal;
        default:
            return ""
        }
    },
    TransformKTypeDetailInfo: function(n) {
        function t(n, t) {
            return [langFont.Font_PBGameWinnerItems[parseInt(n.substr(2, 2)) - 10], t, Args.ChkShortBT, t == Args.PlayHDP, Args.TeamAB, Args.OR_ScoreAB]
        }
        var o = n[0]
          , a = n[1]
          , r = 4 == n[2] ? 1 : n[2]
          , g = o.substr(0, 2)
          , n = {
            11: {
                11001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11011: function(n) {
                    return [langFont.Font_SCFTCorner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11012: function(n) {
                    return [langFont.Font_SCFTCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11013: function(n) {
                    return [langFont.Font_SCFTCorner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11014: function(n) {
                    return [langFont.Font_SCFTCorner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11021: function(n) {
                    return [langFont.Font_SCFTPunishment, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11022: function(n) {
                    return [langFont.Font_SCFTPunishment, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11023: function(n) {
                    return [langFont.Font_SCFTPunishment, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11024: function(n) {
                    return [langFont.Font_SCFTPunishment, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11061: function(n) {
                    return [langFont.Font_SCFTCorrectScore, Args.PlayCS, Args.NoChkBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11062: function(n) {
                    return [langFont.Font_SCFTGoals, Args.PlayTS, Args.NoChkBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11063: function(n) {
                    return [langFont.Font_HaFu, Args.PlayHF, Args.NoChkBT, !1, Args.TeamAB, Args.OR_FHAndFT]
                },
                11064: function(n) {
                    return 1 < r ? [langFont.Font_SCFTTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SCFTTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                11065: function(n) {
                    return 1 < r ? [langFont.Font_SCFTTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SCFTTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                11015: function(n) {
                    return 1 < r ? [langFont.Font_SCFTSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SCFTSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                11016: function(n) {
                    return 1 < r ? [langFont.Font_SCFTSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SCFTSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                11066: function(n) {
                    return [langFont.Font_SCFTWhetherBothTeamsScored, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_BothTeamsToGoals]
                },
                11067: function(n) {
                    return [langFont.Font_SC2HWhetherBothTeamsScored, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_BothTeamsToGoals]
                },
                11068: function(n) {
                    return 1 < r ? [langFont.Font_SCFTWhetherLoseBall, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamB, Args.OR_IsLoseBall] : [langFont.Font_SCFTWhetherLoseBall, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamA, Args.OR_IsLoseBall]
                },
                11069: function(n) {
                    return 1 < r ? [langFont.Font_SCFTWhetherLoseBall, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamA, Args.OR_IsLoseBall] : [langFont.Font_SCFTWhetherLoseBall, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamB, Args.OR_IsLoseBall]
                },
                11070: function(n) {
                    return [langFont.Font_SCHalfOfTheMostGoalsDoubleItem, Args.PlayHT, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_FHAndSH]
                },
                11071: function(n) {
                    return [langFont.Font_SCHalfOfTheMostGoalsThreeItems, Args.PlayHT, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_FHAndSH]
                },
                11101: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11102: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11103: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11104: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11111: function(n) {
                    return [langFont.Font_SC1HCorner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11112: function(n) {
                    return [langFont.Font_SC1HCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11113: function(n) {
                    return [langFont.Font_SC1HCorner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11114: function(n) {
                    return [langFont.Font_SC1HCorner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11121: function(n) {
                    return [langFont.Font_SC1HPunishment, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11122: function(n) {
                    return [langFont.Font_SC1HPunishment, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11123: function(n) {
                    return [langFont.Font_SC1HPunishment, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11124: function(n) {
                    return [langFont.Font_SC1HPunishment, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11161: function(n) {
                    return [langFont.Font_SC1HCorrectScore, Args.PlayCS, Args.NoChkBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11162: function(n) {
                    return [langFont.Font_SC1HGoals, Args.PlayTS, Args.NoChkBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11164: function(n) {
                    return 1 < r ? [langFont.Font_SC1HTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SC1HTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                11165: function(n) {
                    return 1 < r ? [langFont.Font_SC1HTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SC1HTotalGoals, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                11115: function(n) {
                    return 1 < r ? [langFont.Font_SC1HSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SC1HSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                11116: function(n) {
                    return 1 < r ? [langFont.Font_SC1HSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SC1HSingleTeamTotalCorner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                11167: function(n) {
                    return [langFont.Font_SC1HWhetherBothTeamsScored, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_BothTeamsToGoals]
                },
                11201: function(n) {
                    return [langFont.Font_SCSpecific15Items[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11202: function(n) {
                    return [langFont.Font_SCSpecific15Items[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11203: function(n) {
                    return [langFont.Font_SCSpecific15Items[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11204: function(n) {
                    return [langFont.Font_SCSpecific15Items[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11211: function(n) {
                    return [langFont.Font_SCSpecific15Items[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11212: function(n) {
                    return [langFont.Font_SCSpecific15Items[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11213: function(n) {
                    return [langFont.Font_SCSpecific15Items[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11214: function(n) {
                    return [langFont.Font_SCSpecific15Items[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11221: function(n) {
                    return [langFont.Font_SCSpecific15Items[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11222: function(n) {
                    return [langFont.Font_SCSpecific15Items[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11223: function(n) {
                    return [langFont.Font_SCSpecific15Items[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11224: function(n) {
                    return [langFont.Font_SCSpecific15Items[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11231: function(n) {
                    return [langFont.Font_SCSpecific15Items[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11232: function(n) {
                    return [langFont.Font_SCSpecific15Items[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11233: function(n) {
                    return [langFont.Font_SCSpecific15Items[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11234: function(n) {
                    return [langFont.Font_SCSpecific15Items[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11241: function(n) {
                    return [langFont.Font_SCSpecific15Items[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11242: function(n) {
                    return [langFont.Font_SCSpecific15Items[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11243: function(n) {
                    return [langFont.Font_SCSpecific15Items[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11244: function(n) {
                    return [langFont.Font_SCSpecific15Items[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11251: function(n) {
                    return [langFont.Font_SCSpecific15Items[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11252: function(n) {
                    return [langFont.Font_SCSpecific15Items[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11253: function(n) {
                    return [langFont.Font_SCSpecific15Items[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11254: function(n) {
                    return [langFont.Font_SCSpecific15Items[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11301: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11302: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11303: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11304: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11311: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11312: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11313: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11314: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11321: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11322: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11323: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11324: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11331: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11332: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11333: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11334: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11341: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11342: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11343: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11344: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11351: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11352: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11353: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11354: function(n) {
                    return [langFont.Font_SCSpecific15CornerItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11401: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11402: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11403: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11404: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11411: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11412: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11413: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11414: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11421: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11422: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11423: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11424: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11431: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11432: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11433: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11434: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11441: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11442: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11443: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11444: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11451: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11452: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11453: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11454: function(n) {
                    return [langFont.Font_SCSpecific15PunishmentItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11501: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTFirstOffside, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastOffside, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                11502: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTFirstFreeKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastFreeKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                11503: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTFirstOutOfBounds, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastOutOfBounds, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                11504: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTFirstGoalKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastGoalKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                11505: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTFirstSubstitute, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastSubstitute, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                11506: function(n) {
                    return 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastCorner, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_SCFTXCorner.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11507: function(n) {
                    return 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastPunishment, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_SCFTXPunishment.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11531: function(n) {
                    return 99 == parseInt(n.substr(0, 2)) ? [langFont.Font_SCFTLastGoal, Args.PlayGoalWin, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrNoGoal] : [langFont.Font_SCFTXGoal.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayGoalWin, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrNoGoal]
                },
                11551: function(n) {
                    return [langFont.Font_SC2HFirstOffside, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11552: function(n) {
                    return [langFont.Font_SC2HFirstFreeKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11553: function(n) {
                    return [langFont.Font_SC2HFirstOutOfBounds, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11554: function(n) {
                    return [langFont.Font_SC2HFirstGoalKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11556: function(n) {
                    return [langFont.Font_SC2HFirstCorner, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11557: function(n) {
                    return [langFont.Font_SC2HFirstPunishment, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11571: function(n) {
                    return [langFont.Font_SC1HLastOffside, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11572: function(n) {
                    return [langFont.Font_SC1HLastFreeKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11574: function(n) {
                    return [langFont.Font_SC1HLastGoalKick, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11576: function(n) {
                    return [langFont.Font_SC1HLastCorner, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11577: function(n) {
                    return [langFont.Font_SC1HLastPunishment, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11601: function(n) {
                    return [langFont.Font_SCFTWhetherOwnGoals, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_YesOrNo]
                },
                11602: function(n) {
                    return [langFont.Font_SCFTWhetherRedCard, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_YesOrNo]
                },
                11603: function(n) {
                    return [langFont.Font_SCFTWhetherOvertime, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_YesOrNo]
                },
                11604: function(n) {
                    return [langFont.Font_SCFTWhetherPenalties, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_YesOrNo]
                },
                11605: function(n) {
                    return [langFont.Font_FirstKickTeam, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11701: function(n) {
                    return [langFont.Font_Penalty, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                11702: function(n) {
                    return [langFont.Font_Penalty, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11703: function(n) {
                    return [langFont.Font_Penalty, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                11711: function(n) {
                    return [langFont.Font_SCPenaltiesXRound.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayWin, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                11712: function(n) {
                    return 1 < r ? [langFont.Font_SCPenaltiesXWhetherScored.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayYN, Args.ChkLongBT, !1, Args.TeamB, Args.OR_YesOrNo] : [langFont.Font_SCPenaltiesXWhetherScored.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayYN, Args.ChkLongBT, !1, Args.TeamA, Args.OR_YesOrNo]
                },
                11713: function(n) {
                    return 1 < r ? [langFont.Font_SCPenaltiesXWhetherScored.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayYN, Args.ChkLongBT, !1, Args.TeamA, Args.OR_YesOrNo] : [langFont.Font_SCPenaltiesXWhetherScored.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayYN, Args.ChkLongBT, !1, Args.TeamB, Args.OR_YesOrNo]
                }
            },
            12: {
                12001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12005: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12006: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12007: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12008: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12010: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFT3PointerMade[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BKFTX3PointerMade.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12011: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFTFirstFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFTLastFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BKFTXFreeThrow.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12012: function(n) {
                    return [langFont.Font_BKFTPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12021: function(n) {
                    return [langFont.Font_BKFTFirstPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12022: function(n) {
                    return [langFont.Font_BKFTLastPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12023: function(n) {
                    return [langFont.Font_BKFTMostPointsInOneQuarter, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12101: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12102: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12103: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12104: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12105: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12106: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12107: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12108: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12109: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK1HPriorityGetPoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFirstOrLastGetPoint[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                12112: function(n) {
                    return [langFont.Font_BK1HPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12201: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12202: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12203: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12204: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12205: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12206: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12207: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12208: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12209: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFirstOrLastGetPoint[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK2HLastGetPoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                12212: function(n) {
                    return [langFont.Font_BK2HPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12301: function(n) {
                    return [langFont.Font_BKQuarters[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12302: function(n) {
                    return [langFont.Font_BKQuarters[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12303: function(n) {
                    return [langFont.Font_BKQuarters[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12304: function(n) {
                    return [langFont.Font_BKQuarters[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12305: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12306: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12307: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12308: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12309: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK1stQuarterPriorityGetPoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFirstOrLastGetPoint[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                12312: function(n) {
                    return [langFont.Font_BK1stQuarterPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12401: function(n) {
                    return [langFont.Font_BKQuarters[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12402: function(n) {
                    return [langFont.Font_BKQuarters[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12403: function(n) {
                    return [langFont.Font_BKQuarters[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12404: function(n) {
                    return [langFont.Font_BKQuarters[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12405: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12406: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12407: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12408: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12409: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFirstOrLastGetPoint[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK2ndQuarterLastGetPoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                12410: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK2ndQuarterLast3PointerMade, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BK2ndQuarterX3PointerMade.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12411: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK2ndQuarterFirstFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK2ndQuarterLastFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BK2ndQuarterXFreeThrow.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12412: function(n) {
                    return [langFont.Font_BK2ndQuarterPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12501: function(n) {
                    return [langFont.Font_BKQuarters[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12502: function(n) {
                    return [langFont.Font_BKQuarters[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12503: function(n) {
                    return [langFont.Font_BKQuarters[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12504: function(n) {
                    return [langFont.Font_BKQuarters[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12505: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12506: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12507: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12508: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12509: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK3rdQuarterPriorityGetPoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFirstOrLastGetPoint[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                12510: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK3rdQuarterLast3PointerMade, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BK3rdQuarterX3PointerMade.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12511: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK3rdQuarterFirstFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK3rdQuarterLastFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BK3rdQuarterXFreeThrow.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12512: function(n) {
                    return [langFont.Font_BK3rdQuarterPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12601: function(n) {
                    return [langFont.Font_BKQuarters[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12602: function(n) {
                    return [langFont.Font_BKQuarters[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12603: function(n) {
                    return [langFont.Font_BKQuarters[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12604: function(n) {
                    return [langFont.Font_BKQuarters[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12605: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12606: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BKTotalScoreItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                12607: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12608: function(n) {
                    return 1 < r ? [langFont.Font_BKTotalScoreItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BKTotalScoreItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                12609: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFirstOrLastGetPoint[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK4thQuarterLastGetPoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : void 0
                },
                12610: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK4thQuarterLast3PointerMade, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BK4thQuarterX3PointerMade.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12611: function(n) {
                    return 1 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK4thQuarterFirstFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BK4thQuarterLastFreeThrow, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BK4thQuarterXFreeThrow.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12612: function(n) {
                    return [langFont.Font_BK4thQuarterPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12701: function(n) {
                    return [langFont.Font_BKFTTotal3PointerMade, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12702: function(n) {
                    return [langFont.Font_BKFTTotal3PointerMade, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12703: function(n) {
                    return [langFont.Font_BKFTTotal3PointerMade, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12704: function(n) {
                    return [langFont.Font_BKFTAssist, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12705: function(n) {
                    return [langFont.Font_BKFTAssist, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12706: function(n) {
                    return [langFont.Font_BKFTAssist, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12707: function(n) {
                    return [langFont.Font_BKFTRebound, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12708: function(n) {
                    return [langFont.Font_BKFTRebound, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12709: function(n) {
                    return [langFont.Font_BKFTRebound, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12710: function(n) {
                    return [langFont.Font_BKFTSteal, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12711: function(n) {
                    return [langFont.Font_BKFTSteal, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12712: function(n) {
                    return [langFont.Font_BKFTSteal, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12713: function(n) {
                    return [langFont.Font_BKFTBlock, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12714: function(n) {
                    return [langFont.Font_BKFTBlock, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12715: function(n) {
                    return [langFont.Font_BKFTBlock, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12716: function(n) {
                    return [langFont.Font_BKFTFreeThrow, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12717: function(n) {
                    return [langFont.Font_BKFTFreeThrow, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12718: function(n) {
                    return [langFont.Font_BKFTFreeThrow, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12719: function(n) {
                    return [langFont.Font_BKFTTurnover, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12720: function(n) {
                    return [langFont.Font_BKFTTurnover, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12721: function(n) {
                    return [langFont.Font_BKFTTurnover, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12758: function(n) {
                    return [langFont.Font_BKPlayerScore, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12759: function(n) {
                    return [langFont.Font_BKPlayerScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12760: function(n) {
                    return [langFont.Font_BKPlayerScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12761: function(n) {
                    return [langFont.Font_BKPlayer3Point, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12762: function(n) {
                    return [langFont.Font_BKPlayer3Point, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12763: function(n) {
                    return [langFont.Font_BKPlayer3Point, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12764: function(n) {
                    return [langFont.Font_BKPlayerAssist, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12765: function(n) {
                    return [langFont.Font_BKPlayerAssist, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12766: function(n) {
                    return [langFont.Font_BKPlayerAssist, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12767: function(n) {
                    return [langFont.Font_BKPlayerRebound, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12768: function(n) {
                    return [langFont.Font_BKPlayerRebound, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12769: function(n) {
                    return [langFont.Font_BKPlayerRebound, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12776: function(n) {
                    return [langFont.Font_BKPlayerFreeThrow, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12777: function(n) {
                    return [langFont.Font_BKPlayerFreeThrow, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12778: function(n) {
                    return [langFont.Font_BKPlayerFreeThrow, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12779: function(n) {
                    return [langFont.Font_BKPlayerTurnover, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12780: function(n) {
                    return [langFont.Font_BKPlayerTurnover, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12781: function(n) {
                    return [langFont.Font_BKPlayerTurnover, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12782: function(n) {
                    return [langFont.Font_BKPlayerBlock, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                12783: function(n) {
                    return [langFont.Font_BKPlayerBlock, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12784: function(n) {
                    return [langFont.Font_BKPlayerBlock, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                12801: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFTLast2PointerMade, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BKFTX2PointerMade.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12802: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFTLastFoul, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BKFTXFoul.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12803: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFTLastRebound, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BKFTXRebound.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                12804: function(n) {
                    return 9 == parseInt(n.substr(0, 1)) ? [langFont.Font_BKFTLastTimeout, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_BKFTXTimeout.replace(" X ", parseInt(n.substr(0, 1))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                }
            },
            13: {
                13001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13005: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13006: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13007: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13011: function(n) {
                    return [langFont.Font_BBFTTotalHit, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13012: function(n) {
                    return [langFont.Font_BBFTTotalHit, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13016: function(n) {
                    return 1 < r ? [langFont.Font_BBFTTeamTotalHit, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBFTTeamTotalHit, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13017: function(n) {
                    return 1 < r ? [langFont.Font_BBFTTeamTotalHit, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBFTTeamTotalHit, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13021: function(n) {
                    return [langFont.Font_BBHTGTTotalScore, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13022: function(n) {
                    return [langFont.Font_BBHTGTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13023: function(n) {
                    return [langFont.Font_BBHTGTTotalScore, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13024: function(n) {
                    return [langFont.Font_BBHTGTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13031: function(n) {
                    return [langFont["Font_Set1-3"], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13032: function(n) {
                    return [langFont["Font_Set1-3"], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13033: function(n) {
                    return [langFont["Font_Set1-3"], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13034: function(n) {
                    return [langFont["Font_Set1-3"], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13035: function(n) {
                    return [langFont["Font_Set1-3"], Args.PlayHDP, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13051: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13052: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13053: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13054: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13056: function(n) {
                    return 1 < r ? [langFont.Font_1HTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_1HTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13057: function(n) {
                    return 1 < r ? [langFont.Font_1HTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_1HTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13071: function(n) {
                    return [langFont["Font_Set1-7"], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13072: function(n) {
                    return [langFont["Font_Set1-7"], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13073: function(n) {
                    return [langFont["Font_Set1-7"], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13074: function(n) {
                    return [langFont["Font_Set1-7"], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13075: function(n) {
                    return [langFont["Font_Set1-7"], Args.PlayHDP, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13111: function(n) {
                    return [langFont.Font_BBGetPointItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13112: function(n) {
                    return [langFont.Font_BBGetPointItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13113: function(n) {
                    return [langFont.Font_BBGetPointItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13116: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13117: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13121: function(n) {
                    return [langFont.Font_BBGetPointItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13122: function(n) {
                    return [langFont.Font_BBGetPointItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13123: function(n) {
                    return [langFont.Font_BBGetPointItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13126: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13127: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13131: function(n) {
                    return [langFont.Font_BBGetPointItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13132: function(n) {
                    return [langFont.Font_BBGetPointItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13133: function(n) {
                    return [langFont.Font_BBGetPointItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13136: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13137: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13141: function(n) {
                    return [langFont.Font_BBGetPointItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13142: function(n) {
                    return [langFont.Font_BBGetPointItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13143: function(n) {
                    return [langFont.Font_BBGetPointItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13146: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13147: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13151: function(n) {
                    return [langFont.Font_BBGetPointItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13152: function(n) {
                    return [langFont.Font_BBGetPointItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13153: function(n) {
                    return [langFont.Font_BBGetPointItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13156: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13157: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13161: function(n) {
                    return [langFont.Font_BBGetPointItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13162: function(n) {
                    return [langFont.Font_BBGetPointItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13163: function(n) {
                    return [langFont.Font_BBGetPointItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13166: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13167: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13171: function(n) {
                    return [langFont.Font_BBGetPointItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13172: function(n) {
                    return [langFont.Font_BBGetPointItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13173: function(n) {
                    return [langFont.Font_BBGetPointItems[6], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13176: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13177: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13181: function(n) {
                    return [langFont.Font_BBGetPointItems[7], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13182: function(n) {
                    return [langFont.Font_BBGetPointItems[7], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13183: function(n) {
                    return [langFont.Font_BBGetPointItems[7], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13186: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[7], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_BBTotalScoreItems[7], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                13187: function(n) {
                    return 1 < r ? [langFont.Font_BBTotalScoreItems[7], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_BBTotalScoreItems[7], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                13211: function(n) {
                    return [langFont.Font_BBHitItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13212: function(n) {
                    return [langFont.Font_BBHitItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13213: function(n) {
                    return [langFont.Font_BBHitItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13221: function(n) {
                    return [langFont.Font_BBHitItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13222: function(n) {
                    return [langFont.Font_BBHitItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13223: function(n) {
                    return [langFont.Font_BBHitItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13231: function(n) {
                    return [langFont.Font_BBHitItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13232: function(n) {
                    return [langFont.Font_BBHitItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13233: function(n) {
                    return [langFont.Font_BBHitItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13241: function(n) {
                    return [langFont.Font_BBHitItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13242: function(n) {
                    return [langFont.Font_BBHitItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13243: function(n) {
                    return [langFont.Font_BBHitItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13251: function(n) {
                    return [langFont.Font_BBHitItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13252: function(n) {
                    return [langFont.Font_BBHitItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13253: function(n) {
                    return [langFont.Font_BBHitItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13261: function(n) {
                    return [langFont.Font_BBHitItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13262: function(n) {
                    return [langFont.Font_BBHitItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13263: function(n) {
                    return [langFont.Font_BBHitItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13271: function(n) {
                    return [langFont.Font_BBHitItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13272: function(n) {
                    return [langFont.Font_BBHitItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13273: function(n) {
                    return [langFont.Font_BBHitItems[6], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13281: function(n) {
                    return [langFont.Font_BBHitItems[7], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                13282: function(n) {
                    return [langFont.Font_BBHitItems[7], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13283: function(n) {
                    return [langFont.Font_BBHitItems[7], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                13301: function(n) {
                    return [langFont.Font_FTFirstPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                13302: function(n) {
                    return [langFont.Font_FTLastPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                13303: function(n) {
                    return [langFont.Font_BBFTFirstTurnover, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                13304: function(n) {
                    return [langFont.Font_BBFTFirstHomeRun, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                13305: function(n) {
                    return [langFont.Font_BBFTPriorityGet2Point, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                13306: function(n) {
                    return [langFont.Font_BBFTPriorityGet3Point, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                13307: function(n) {
                    return [langFont.Font_MostPointsInOneGame, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                13321: function(n) {
                    return [langFont.Font_BBTotalRHE, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAPlusB]
                }
            },
            14: {
                14001: function(n) {
                    return [langFont.Font_TNGamesWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                14002: function(n) {
                    return [langFont.Font_TNGamesWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14004: function(n) {
                    return [langFont.Font_TNGamesWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14005: function(n) {
                    return 1 < r ? [langFont.Font_TNPlayerTotalGames, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_TNPlayerTotalGames, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                14006: function(n) {
                    return 1 < r ? [langFont.Font_TNPlayerTotalGames, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_TNPlayerTotalGames, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                14011: function(n) {
                    return [langFont.Font_TNSetsWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                14013: function(n) {
                    return [langFont.Font_TNSetsWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14101: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                14102: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14103: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14104: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14201: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                14202: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14203: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14204: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14301: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                14302: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14303: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14304: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14401: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                14402: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14403: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14501: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                14502: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14503: function(n) {
                    return [langFont.Font_TNSetsWinnerItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                14601: function(n) {
                    return 1 < r ? [langFont.Font_TNPlayerIsWin, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamB, Args.OR_YesOrNo] : [langFont.Font_TNPlayerIsWin, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamA, Args.OR_YesOrNo]
                },
                14602: function(n) {
                    return 1 < r ? [langFont.Font_TNPlayerIsWin, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamA, Args.OR_YesOrNo] : [langFont.Font_TNPlayerIsWin, Args.PlayYN, Args.ChkShortBT, !1, Args.TeamB, Args.OR_YesOrNo]
                }
            },
            15: {
                15001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15005: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15006: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                15007: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                15021: function(n) {
                    return [langFont.Font_IHHTAndGTTotalScore, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamHSGS, Args.OR_ScoreAB]
                },
                15022: function(n) {
                    return [langFont.Font_IHHTAndGTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamHSGS, Args.OR_ScoreAB]
                },
                15023: function(n) {
                    return [langFont.Font_IHHTAndGTTotalScore, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamHSGS, Args.OR_ScoreAB]
                },
                15101: function(n) {
                    return [langFont.Font_IHQuarters[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15102: function(n) {
                    return [langFont.Font_IHQuarters[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15103: function(n) {
                    return [langFont.Font_IHQuarters[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15104: function(n) {
                    return [langFont.Font_IHQuarters[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15105: function(n) {
                    return [langFont.Font_IHQuarters[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15201: function(n) {
                    return [langFont.Font_IHQuarters[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15202: function(n) {
                    return [langFont.Font_IHQuarters[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15203: function(n) {
                    return [langFont.Font_IHQuarters[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15204: function(n) {
                    return [langFont.Font_IHQuarters[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15205: function(n) {
                    return [langFont.Font_IHQuarters[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15301: function(n) {
                    return [langFont.Font_IHQuarters[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15302: function(n) {
                    return [langFont.Font_IHQuarters[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15303: function(n) {
                    return [langFont.Font_IHQuarters[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15304: function(n) {
                    return [langFont.Font_IHQuarters[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                15305: function(n) {
                    return [langFont.Font_IHQuarters[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                15401: function(n) {
                    return [langFont.Font_FirstPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrX]
                },
                15411: function(n) {
                    return [langFont.Font_LastPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrX]
                }
            },
            16: {
                16001: function(n) {
                    return [langFont.Font_VLGamesWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16002: function(n) {
                    return [langFont.Font_VLGamesWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16003: function(n) {
                    return [langFont.Font_VLGamesWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16004: function(n) {
                    return [langFont.Font_VLGamesWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16011: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16012: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16013: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16014: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16015: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                16016: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                16101: function(n) {
                    return [langFont.Font_VLGameWinnerItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16102: function(n) {
                    return [langFont.Font_VLGameWinnerItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16103: function(n) {
                    return [langFont.Font_VLGameWinnerItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16104: function(n) {
                    return [langFont.Font_VLGameWinnerItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16201: function(n) {
                    return [langFont.Font_VLGameWinnerItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16202: function(n) {
                    return [langFont.Font_VLGameWinnerItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16203: function(n) {
                    return [langFont.Font_VLGameWinnerItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16204: function(n) {
                    return [langFont.Font_VLGameWinnerItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16301: function(n) {
                    return [langFont.Font_VLGameWinnerItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16302: function(n) {
                    return [langFont.Font_VLGameWinnerItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16303: function(n) {
                    return [langFont.Font_VLGameWinnerItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16304: function(n) {
                    return [langFont.Font_VLGameWinnerItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16401: function(n) {
                    return [langFont.Font_VLGameWinnerItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16402: function(n) {
                    return [langFont.Font_VLGameWinnerItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16403: function(n) {
                    return [langFont.Font_VLGameWinnerItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16404: function(n) {
                    return [langFont.Font_VLGameWinnerItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16501: function(n) {
                    return [langFont.Font_VLGameWinnerItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16502: function(n) {
                    return [langFont.Font_VLGameWinnerItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16503: function(n) {
                    return [langFont.Font_VLGameWinnerItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16504: function(n) {
                    return [langFont.Font_VLGameWinnerItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16601: function(n) {
                    return [langFont.Font_VLGameWinnerItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16602: function(n) {
                    return [langFont.Font_VLGameWinnerItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16603: function(n) {
                    return [langFont.Font_VLGameWinnerItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16604: function(n) {
                    return [langFont.Font_VLGameWinnerItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16701: function(n) {
                    return [langFont.Font_VLGameWinnerItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                16702: function(n) {
                    return [langFont.Font_VLGameWinnerItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16703: function(n) {
                    return [langFont.Font_VLGameWinnerItems[6], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                16704: function(n) {
                    return [langFont.Font_VLGameWinnerItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                }
            },
            17: {
                17001: function(n) {
                    return [langFont.Font_BMGamesWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                17002: function(n) {
                    return [langFont.Font_BMGamesWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17003: function(n) {
                    return [langFont.Font_BMGamesWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17004: function(n) {
                    return [langFont.Font_BMGamesWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17011: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                17012: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17013: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17014: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17015: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                17016: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                17101: function(n) {
                    return [langFont.Font_BMGameWinnerItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                17102: function(n) {
                    return [langFont.Font_BMGameWinnerItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17103: function(n) {
                    return [langFont.Font_BMGameWinnerItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17104: function(n) {
                    return [langFont.Font_BMGameWinnerItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17201: function(n) {
                    return [langFont.Font_BMGameWinnerItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                17202: function(n) {
                    return [langFont.Font_BMGameWinnerItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17203: function(n) {
                    return [langFont.Font_BMGameWinnerItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17204: function(n) {
                    return [langFont.Font_BMGameWinnerItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17301: function(n) {
                    return [langFont.Font_BMGameWinnerItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                17302: function(n) {
                    return [langFont.Font_BMGameWinnerItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17303: function(n) {
                    return [langFont.Font_BMGameWinnerItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17304: function(n) {
                    return [langFont.Font_BMGameWinnerItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17401: function(n) {
                    return [langFont.Font_BMGameWinnerItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                17402: function(n) {
                    return [langFont.Font_BMGameWinnerItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17403: function(n) {
                    return [langFont.Font_BMGameWinnerItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17404: function(n) {
                    return [langFont.Font_BMGameWinnerItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17501: function(n) {
                    return [langFont.Font_BMGameWinnerItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                17502: function(n) {
                    return [langFont.Font_BMGameWinnerItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17503: function(n) {
                    return [langFont.Font_BMGameWinnerItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                17504: function(n) {
                    return [langFont.Font_BMGameWinnerItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                }
            },
            18: {
                18001: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18002: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18003: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18004: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18101: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18102: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18103: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18104: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18105: function(n) {
                    return [langFont.Font_ESKillHeroItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18106: function(n) {
                    return [langFont.Font_ESKillHeroItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18108: function(n) {
                    return [langFont.Font_ESKillHeroItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18109: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18110: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18112: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18113: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18114: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18116: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18117: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18118: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18120: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18121: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18122: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18124: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18125: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18126: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18128: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18129: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18130: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18132: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18133: function(n) {
                    return [langFont.Font_ESKillCaesarItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18134: function(n) {
                    return [langFont.Font_ESKillCaesarItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18136: function(n) {
                    return [langFont.Font_ESKillCaesarItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18137: function(n) {
                    return [langFont.Font_ESKillTyrantItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18138: function(n) {
                    return [langFont.Font_ESKillTyrantItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18140: function(n) {
                    return [langFont.Font_ESKillTyrantItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18141: function(n) {
                    return [langFont.Font_ESKillDominateItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18142: function(n) {
                    return [langFont.Font_ESKillDominateItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18144: function(n) {
                    return [langFont.Font_ESKillDominateItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18145: function(n) {
                    return [langFont.Font_ESKillDevilItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18146: function(n) {
                    return [langFont.Font_ESKillDevilItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18148: function(n) {
                    return [langFont.Font_ESKillDevilItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18149: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18150: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18152: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18153: function(n) {
                    return [langFont.Font_ESScoreItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18154: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18156: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18171: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18172: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18173: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18174: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18175: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18176: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18177: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18178: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18179: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18180: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18181: function(n) {
                    return [langFont.Font_ESFirstBloodItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18182: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18183: function(n) {
                    return [langFont.Font_ESWinXRoundItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18184: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18191: function(n) {
                    return [langFont.Font_ESBattleTimeItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                18201: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18202: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18203: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18204: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18205: function(n) {
                    return [langFont.Font_ESKillHeroItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18206: function(n) {
                    return [langFont.Font_ESKillHeroItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18208: function(n) {
                    return [langFont.Font_ESKillHeroItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18209: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18210: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18212: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18213: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18214: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18216: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18217: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18218: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18220: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18221: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18222: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18224: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18225: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18226: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18228: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18229: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18230: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18232: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18233: function(n) {
                    return [langFont.Font_ESKillCaesarItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18234: function(n) {
                    return [langFont.Font_ESKillCaesarItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18236: function(n) {
                    return [langFont.Font_ESKillCaesarItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18237: function(n) {
                    return [langFont.Font_ESKillTyrantItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18238: function(n) {
                    return [langFont.Font_ESKillTyrantItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18240: function(n) {
                    return [langFont.Font_ESKillTyrantItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18241: function(n) {
                    return [langFont.Font_ESKillDominateItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18242: function(n) {
                    return [langFont.Font_ESKillDominateItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18244: function(n) {
                    return [langFont.Font_ESKillDominateItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18245: function(n) {
                    return [langFont.Font_ESKillDevilItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18246: function(n) {
                    return [langFont.Font_ESKillDevilItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18248: function(n) {
                    return [langFont.Font_ESKillDevilItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18249: function(n) {
                    return [langFont.Font_ESRoundItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18250: function(n) {
                    return [langFont.Font_ESRoundItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18252: function(n) {
                    return [langFont.Font_ESRoundItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18253: function(n) {
                    return [langFont.Font_ESScoreItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18254: function(n) {
                    return [langFont.Font_ESScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18256: function(n) {
                    return [langFont.Font_ESScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18271: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18272: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18273: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18274: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18275: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18276: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18277: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18278: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18279: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18280: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18281: function(n) {
                    return [langFont.Font_ESFirstBloodItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18282: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18283: function(n) {
                    return [langFont.Font_ESWinXRoundItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18284: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18291: function(n) {
                    return [langFont.Font_ESBattleTimeItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                18301: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18302: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18303: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18304: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18305: function(n) {
                    return [langFont.Font_ESKillHeroItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18306: function(n) {
                    return [langFont.Font_ESKillHeroItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18308: function(n) {
                    return [langFont.Font_ESKillHeroItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18309: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18310: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18312: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18313: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18314: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18316: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18317: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18318: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18320: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18321: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18322: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18324: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18325: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18326: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18328: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18329: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18330: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18332: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18333: function(n) {
                    return [langFont.Font_ESKillCaesarItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18334: function(n) {
                    return [langFont.Font_ESKillCaesarItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18336: function(n) {
                    return [langFont.Font_ESKillCaesarItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18337: function(n) {
                    return [langFont.Font_ESKillTyrantItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18338: function(n) {
                    return [langFont.Font_ESKillTyrantItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18340: function(n) {
                    return [langFont.Font_ESKillTyrantItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18341: function(n) {
                    return [langFont.Font_ESKillDominateItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18342: function(n) {
                    return [langFont.Font_ESKillDominateItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18344: function(n) {
                    return [langFont.Font_ESKillDominateItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18345: function(n) {
                    return [langFont.Font_ESKillDevilItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18346: function(n) {
                    return [langFont.Font_ESKillDevilItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18348: function(n) {
                    return [langFont.Font_ESKillDevilItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18349: function(n) {
                    return [langFont.Font_ESRoundItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18350: function(n) {
                    return [langFont.Font_ESRoundItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18352: function(n) {
                    return [langFont.Font_ESRoundItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18353: function(n) {
                    return [langFont.Font_ESScoreItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18354: function(n) {
                    return [langFont.Font_ESScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18356: function(n) {
                    return [langFont.Font_ESScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18371: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18372: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18373: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18374: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18375: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18376: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18377: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18378: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18379: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18380: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18381: function(n) {
                    return [langFont.Font_ESFirstBloodItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18382: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18383: function(n) {
                    return [langFont.Font_ESWinXRoundItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18384: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18391: function(n) {
                    return [langFont.Font_ESBattleTimeItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                18401: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18402: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18403: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18404: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18405: function(n) {
                    return [langFont.Font_ESKillHeroItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18406: function(n) {
                    return [langFont.Font_ESKillHeroItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18408: function(n) {
                    return [langFont.Font_ESKillHeroItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18409: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18410: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18412: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18413: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18414: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18416: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18417: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18418: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18420: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18421: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18422: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18424: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18425: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18426: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18428: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18429: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18430: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18432: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18433: function(n) {
                    return [langFont.Font_ESKillCaesarItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18434: function(n) {
                    return [langFont.Font_ESKillCaesarItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18436: function(n) {
                    return [langFont.Font_ESKillCaesarItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18437: function(n) {
                    return [langFont.Font_ESKillTyrantItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18438: function(n) {
                    return [langFont.Font_ESKillTyrantItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18440: function(n) {
                    return [langFont.Font_ESKillTyrantItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18441: function(n) {
                    return [langFont.Font_ESKillDominateItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18442: function(n) {
                    return [langFont.Font_ESKillDominateItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18444: function(n) {
                    return [langFont.Font_ESKillDominateItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18445: function(n) {
                    return [langFont.Font_ESKillDevilItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18446: function(n) {
                    return [langFont.Font_ESKillDevilItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18448: function(n) {
                    return [langFont.Font_ESKillDevilItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18449: function(n) {
                    return [langFont.Font_ESRoundItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18450: function(n) {
                    return [langFont.Font_ESRoundItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18452: function(n) {
                    return [langFont.Font_ESRoundItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18453: function(n) {
                    return [langFont.Font_ESScoreItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18454: function(n) {
                    return [langFont.Font_ESScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18456: function(n) {
                    return [langFont.Font_ESScoreItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18471: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18472: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18473: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18474: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18475: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18476: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18477: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18478: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18479: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18480: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18481: function(n) {
                    return [langFont.Font_ESFirstBloodItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18482: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18483: function(n) {
                    return [langFont.Font_ESWinXRoundItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18484: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18491: function(n) {
                    return [langFont.Font_ESBattleTimeItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                18501: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18502: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18503: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18504: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18505: function(n) {
                    return [langFont.Font_ESKillHeroItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18506: function(n) {
                    return [langFont.Font_ESKillHeroItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18508: function(n) {
                    return [langFont.Font_ESKillHeroItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18509: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18510: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18512: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18513: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18514: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18516: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18517: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18518: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18520: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18521: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18522: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18524: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18525: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18526: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18528: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18529: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18530: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18532: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18533: function(n) {
                    return [langFont.Font_ESKillCaesarItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18534: function(n) {
                    return [langFont.Font_ESKillCaesarItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18536: function(n) {
                    return [langFont.Font_ESKillCaesarItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18537: function(n) {
                    return [langFont.Font_ESKillTyrantItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18538: function(n) {
                    return [langFont.Font_ESKillTyrantItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18540: function(n) {
                    return [langFont.Font_ESKillTyrantItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18541: function(n) {
                    return [langFont.Font_ESKillDominateItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18542: function(n) {
                    return [langFont.Font_ESKillDominateItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18544: function(n) {
                    return [langFont.Font_ESKillDominateItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18545: function(n) {
                    return [langFont.Font_ESKillDevilItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18546: function(n) {
                    return [langFont.Font_ESKillDevilItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18548: function(n) {
                    return [langFont.Font_ESKillDevilItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18549: function(n) {
                    return [langFont.Font_ESRoundItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18550: function(n) {
                    return [langFont.Font_ESRoundItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18552: function(n) {
                    return [langFont.Font_ESRoundItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18553: function(n) {
                    return [langFont.Font_ESScoreItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18554: function(n) {
                    return [langFont.Font_ESScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18556: function(n) {
                    return [langFont.Font_ESScoreItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18571: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18572: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18573: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18574: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18575: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18576: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18577: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18578: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18579: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18580: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18581: function(n) {
                    return [langFont.Font_ESFirstBloodItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18582: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18583: function(n) {
                    return [langFont.Font_ESWinXRoundItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18584: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18591: function(n) {
                    return [langFont.Font_ESBattleTimeItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                18601: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18602: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18603: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18604: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18605: function(n) {
                    return [langFont.Font_ESKillHeroItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18606: function(n) {
                    return [langFont.Font_ESKillHeroItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18608: function(n) {
                    return [langFont.Font_ESKillHeroItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18609: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18610: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18612: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18613: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18614: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18616: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18617: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18618: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18620: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18621: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18622: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18624: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18625: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18626: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18628: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18629: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18630: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18632: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18633: function(n) {
                    return [langFont.Font_ESKillCaesarItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18634: function(n) {
                    return [langFont.Font_ESKillCaesarItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18636: function(n) {
                    return [langFont.Font_ESKillCaesarItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18637: function(n) {
                    return [langFont.Font_ESKillTyrantItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18638: function(n) {
                    return [langFont.Font_ESKillTyrantItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18640: function(n) {
                    return [langFont.Font_ESKillTyrantItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18641: function(n) {
                    return [langFont.Font_ESKillDominateItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18642: function(n) {
                    return [langFont.Font_ESKillDominateItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18644: function(n) {
                    return [langFont.Font_ESKillDominateItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18645: function(n) {
                    return [langFont.Font_ESKillDevilItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18646: function(n) {
                    return [langFont.Font_ESKillDevilItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18648: function(n) {
                    return [langFont.Font_ESKillDevilItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18649: function(n) {
                    return [langFont.Font_ESRoundItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18650: function(n) {
                    return [langFont.Font_ESRoundItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18652: function(n) {
                    return [langFont.Font_ESRoundItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18653: function(n) {
                    return [langFont.Font_ESScoreItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18654: function(n) {
                    return [langFont.Font_ESScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18656: function(n) {
                    return [langFont.Font_ESScoreItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18671: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18672: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18673: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18674: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18675: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18676: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18677: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18678: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18679: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18680: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18681: function(n) {
                    return [langFont.Font_ESFirstBloodItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18682: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18683: function(n) {
                    return [langFont.Font_ESWinXRoundItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18684: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18691: function(n) {
                    return [langFont.Font_ESBattleTimeItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                18701: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18702: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18703: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18704: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18705: function(n) {
                    return [langFont.Font_ESKillHeroItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18706: function(n) {
                    return [langFont.Font_ESKillHeroItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18708: function(n) {
                    return [langFont.Font_ESKillHeroItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18709: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18710: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18712: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18713: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18714: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18716: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18717: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18718: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18720: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18721: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18722: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18724: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18725: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18726: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18728: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18729: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18730: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18732: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18733: function(n) {
                    return [langFont.Font_ESKillCaesarItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18734: function(n) {
                    return [langFont.Font_ESKillCaesarItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18736: function(n) {
                    return [langFont.Font_ESKillCaesarItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18737: function(n) {
                    return [langFont.Font_ESKillTyrantItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18738: function(n) {
                    return [langFont.Font_ESKillTyrantItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18740: function(n) {
                    return [langFont.Font_ESKillTyrantItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18741: function(n) {
                    return [langFont.Font_ESKillDominateItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18742: function(n) {
                    return [langFont.Font_ESKillDominateItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18744: function(n) {
                    return [langFont.Font_ESKillDominateItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18745: function(n) {
                    return [langFont.Font_ESKillDevilItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18746: function(n) {
                    return [langFont.Font_ESKillDevilItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18748: function(n) {
                    return [langFont.Font_ESKillDevilItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18749: function(n) {
                    return [langFont.Font_ESRoundItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18750: function(n) {
                    return [langFont.Font_ESRoundItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18752: function(n) {
                    return [langFont.Font_ESRoundItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18753: function(n) {
                    return [langFont.Font_ESScoreItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                18754: function(n) {
                    return [langFont.Font_ESScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18756: function(n) {
                    return [langFont.Font_ESScoreItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                18771: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18772: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18773: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18774: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18775: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18776: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18777: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18778: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18779: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18780: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18781: function(n) {
                    return [langFont.Font_ESFirstBloodItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18782: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18783: function(n) {
                    return [langFont.Font_ESWinXRoundItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18784: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                18791: function(n) {
                    return [langFont.Font_ESBattleTimeItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180001: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180002: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180003: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180004: function(n) {
                    return [langFont.Font_ESGamesWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180101: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180102: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180103: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180104: function(n) {
                    return [langFont.Font_ESGameItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180105: function(n) {
                    return [langFont.Font_ESKillHeroItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180106: function(n) {
                    return [langFont.Font_ESKillHeroItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180108: function(n) {
                    return [langFont.Font_ESKillHeroItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180109: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180110: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180112: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180113: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180114: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180116: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180117: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180118: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180120: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180121: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180122: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180124: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180125: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180126: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180128: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180129: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180130: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180132: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180133: function(n) {
                    return [langFont.Font_ESKillCaesarItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180134: function(n) {
                    return [langFont.Font_ESKillCaesarItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180136: function(n) {
                    return [langFont.Font_ESKillCaesarItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180137: function(n) {
                    return [langFont.Font_ESKillTyrantItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180138: function(n) {
                    return [langFont.Font_ESKillTyrantItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180140: function(n) {
                    return [langFont.Font_ESKillTyrantItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180141: function(n) {
                    return [langFont.Font_ESKillDominateItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180142: function(n) {
                    return [langFont.Font_ESKillDominateItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180144: function(n) {
                    return [langFont.Font_ESKillDominateItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180145: function(n) {
                    return [langFont.Font_ESKillDevilItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180146: function(n) {
                    return [langFont.Font_ESKillDevilItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180148: function(n) {
                    return [langFont.Font_ESKillDevilItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180149: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180150: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180152: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180153: function(n) {
                    return [langFont.Font_ESScoreItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180154: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180156: function(n) {
                    return [langFont.Font_ESRoundItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180171: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180172: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180173: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180174: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180175: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180176: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180177: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180178: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180179: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180180: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180181: function(n) {
                    return [langFont.Font_ESFirstBloodItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180182: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180183: function(n) {
                    return [langFont.Font_ESWinXRoundItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180184: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180185: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMiddleTowerItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMiddleTowerItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180186: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstHighlandTowerItems[0], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXHighlandTowerItems[0].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180191: function(n) {
                    return [langFont.Font_ESBattleTimeItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180201: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180202: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180203: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180204: function(n) {
                    return [langFont.Font_ESGameItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180205: function(n) {
                    return [langFont.Font_ESKillHeroItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180206: function(n) {
                    return [langFont.Font_ESKillHeroItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180208: function(n) {
                    return [langFont.Font_ESKillHeroItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180209: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180210: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180212: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180213: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180214: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180216: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180217: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180218: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180220: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180221: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180222: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180224: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180225: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180226: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180228: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180229: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180230: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180232: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180233: function(n) {
                    return [langFont.Font_ESKillCaesarItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180234: function(n) {
                    return [langFont.Font_ESKillCaesarItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180236: function(n) {
                    return [langFont.Font_ESKillCaesarItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180237: function(n) {
                    return [langFont.Font_ESKillTyrantItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180238: function(n) {
                    return [langFont.Font_ESKillTyrantItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180240: function(n) {
                    return [langFont.Font_ESKillTyrantItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180241: function(n) {
                    return [langFont.Font_ESKillDominateItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180242: function(n) {
                    return [langFont.Font_ESKillDominateItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180244: function(n) {
                    return [langFont.Font_ESKillDominateItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180245: function(n) {
                    return [langFont.Font_ESKillDevilItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180246: function(n) {
                    return [langFont.Font_ESKillDevilItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180248: function(n) {
                    return [langFont.Font_ESKillDevilItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180249: function(n) {
                    return [langFont.Font_ESRoundItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180250: function(n) {
                    return [langFont.Font_ESRoundItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180252: function(n) {
                    return [langFont.Font_ESRoundItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180253: function(n) {
                    return [langFont.Font_ESScoreItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180254: function(n) {
                    return [langFont.Font_ESScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180256: function(n) {
                    return [langFont.Font_ESScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180271: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180272: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180273: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180274: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180275: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180276: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180277: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180278: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180279: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180280: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180281: function(n) {
                    return [langFont.Font_ESFirstBloodItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180282: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180283: function(n) {
                    return [langFont.Font_ESWinXRoundItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180284: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180285: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMiddleTowerItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMiddleTowerItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180286: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstHighlandTowerItems[1], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXHighlandTowerItems[1].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180291: function(n) {
                    return [langFont.Font_ESBattleTimeItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180301: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180302: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180303: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180304: function(n) {
                    return [langFont.Font_ESGameItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180305: function(n) {
                    return [langFont.Font_ESKillHeroItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180306: function(n) {
                    return [langFont.Font_ESKillHeroItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180308: function(n) {
                    return [langFont.Font_ESKillHeroItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180309: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180310: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180312: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180313: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180314: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180316: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180317: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180318: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180320: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180321: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180322: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180324: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180325: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180326: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180328: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180329: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180330: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180332: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180333: function(n) {
                    return [langFont.Font_ESKillCaesarItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180334: function(n) {
                    return [langFont.Font_ESKillCaesarItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180336: function(n) {
                    return [langFont.Font_ESKillCaesarItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180337: function(n) {
                    return [langFont.Font_ESKillTyrantItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180338: function(n) {
                    return [langFont.Font_ESKillTyrantItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180340: function(n) {
                    return [langFont.Font_ESKillTyrantItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180341: function(n) {
                    return [langFont.Font_ESKillDominateItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180342: function(n) {
                    return [langFont.Font_ESKillDominateItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180344: function(n) {
                    return [langFont.Font_ESKillDominateItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180345: function(n) {
                    return [langFont.Font_ESKillDevilItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180346: function(n) {
                    return [langFont.Font_ESKillDevilItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180348: function(n) {
                    return [langFont.Font_ESKillDevilItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180349: function(n) {
                    return [langFont.Font_ESRoundItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180350: function(n) {
                    return [langFont.Font_ESRoundItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180352: function(n) {
                    return [langFont.Font_ESRoundItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180353: function(n) {
                    return [langFont.Font_ESScoreItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180354: function(n) {
                    return [langFont.Font_ESScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180356: function(n) {
                    return [langFont.Font_ESScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180371: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180372: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180373: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180374: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180375: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180376: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180377: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180378: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180379: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180380: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180381: function(n) {
                    return [langFont.Font_ESFirstBloodItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180382: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180383: function(n) {
                    return [langFont.Font_ESWinXRoundItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180384: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180385: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMiddleTowerItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMiddleTowerItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180386: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstHighlandTowerItems[2], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXHighlandTowerItems[2].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180391: function(n) {
                    return [langFont.Font_ESBattleTimeItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180401: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180402: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180403: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180404: function(n) {
                    return [langFont.Font_ESGameItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180405: function(n) {
                    return [langFont.Font_ESKillHeroItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180406: function(n) {
                    return [langFont.Font_ESKillHeroItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180408: function(n) {
                    return [langFont.Font_ESKillHeroItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180409: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180410: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180412: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180413: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180414: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180416: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180417: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180418: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180420: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180421: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180422: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180424: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180425: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180426: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180428: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180429: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180430: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180432: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180433: function(n) {
                    return [langFont.Font_ESKillCaesarItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180434: function(n) {
                    return [langFont.Font_ESKillCaesarItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180436: function(n) {
                    return [langFont.Font_ESKillCaesarItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180437: function(n) {
                    return [langFont.Font_ESKillTyrantItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180438: function(n) {
                    return [langFont.Font_ESKillTyrantItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180440: function(n) {
                    return [langFont.Font_ESKillTyrantItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180441: function(n) {
                    return [langFont.Font_ESKillDominateItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180442: function(n) {
                    return [langFont.Font_ESKillDominateItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180444: function(n) {
                    return [langFont.Font_ESKillDominateItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180445: function(n) {
                    return [langFont.Font_ESKillDevilItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180446: function(n) {
                    return [langFont.Font_ESKillDevilItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180448: function(n) {
                    return [langFont.Font_ESKillDevilItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180449: function(n) {
                    return [langFont.Font_ESRoundItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180450: function(n) {
                    return [langFont.Font_ESRoundItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180452: function(n) {
                    return [langFont.Font_ESRoundItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180453: function(n) {
                    return [langFont.Font_ESScoreItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180454: function(n) {
                    return [langFont.Font_ESScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180456: function(n) {
                    return [langFont.Font_ESScoreItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180471: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180472: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180473: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180474: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180475: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180476: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180477: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180478: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180479: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180480: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180481: function(n) {
                    return [langFont.Font_ESFirstBloodItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180482: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180483: function(n) {
                    return [langFont.Font_ESWinXRoundItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180484: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180485: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMiddleTowerItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMiddleTowerItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180486: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstHighlandTowerItems[3], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXHighlandTowerItems[3].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180491: function(n) {
                    return [langFont.Font_ESBattleTimeItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180501: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180502: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180503: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180504: function(n) {
                    return [langFont.Font_ESGameItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180505: function(n) {
                    return [langFont.Font_ESKillHeroItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180506: function(n) {
                    return [langFont.Font_ESKillHeroItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180508: function(n) {
                    return [langFont.Font_ESKillHeroItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180509: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180510: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180512: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180513: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180514: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180516: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180517: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180518: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180520: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180521: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180522: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180524: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180525: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180526: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180528: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180529: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180530: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180532: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180533: function(n) {
                    return [langFont.Font_ESKillCaesarItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180534: function(n) {
                    return [langFont.Font_ESKillCaesarItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180536: function(n) {
                    return [langFont.Font_ESKillCaesarItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180537: function(n) {
                    return [langFont.Font_ESKillTyrantItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180538: function(n) {
                    return [langFont.Font_ESKillTyrantItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180540: function(n) {
                    return [langFont.Font_ESKillTyrantItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180541: function(n) {
                    return [langFont.Font_ESKillDominateItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180542: function(n) {
                    return [langFont.Font_ESKillDominateItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180544: function(n) {
                    return [langFont.Font_ESKillDominateItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180545: function(n) {
                    return [langFont.Font_ESKillDevilItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180546: function(n) {
                    return [langFont.Font_ESKillDevilItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180548: function(n) {
                    return [langFont.Font_ESKillDevilItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180549: function(n) {
                    return [langFont.Font_ESRoundItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180550: function(n) {
                    return [langFont.Font_ESRoundItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180552: function(n) {
                    return [langFont.Font_ESRoundItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180553: function(n) {
                    return [langFont.Font_ESScoreItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180554: function(n) {
                    return [langFont.Font_ESScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180556: function(n) {
                    return [langFont.Font_ESScoreItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180571: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180572: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180573: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180574: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180575: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180576: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180577: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180578: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180579: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180580: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180581: function(n) {
                    return [langFont.Font_ESFirstBloodItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180582: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180583: function(n) {
                    return [langFont.Font_ESWinXRoundItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180584: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180585: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMiddleTowerItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMiddleTowerItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180586: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstHighlandTowerItems[4], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXHighlandTowerItems[4].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180591: function(n) {
                    return [langFont.Font_ESBattleTimeItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180601: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180602: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180603: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180604: function(n) {
                    return [langFont.Font_ESGameItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180605: function(n) {
                    return [langFont.Font_ESKillHeroItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180606: function(n) {
                    return [langFont.Font_ESKillHeroItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180608: function(n) {
                    return [langFont.Font_ESKillHeroItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180609: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180610: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180612: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180613: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180614: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180616: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180617: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180618: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180620: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180621: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180622: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180624: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180625: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180626: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180628: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180629: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180630: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180632: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180633: function(n) {
                    return [langFont.Font_ESKillCaesarItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180634: function(n) {
                    return [langFont.Font_ESKillCaesarItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180636: function(n) {
                    return [langFont.Font_ESKillCaesarItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180637: function(n) {
                    return [langFont.Font_ESKillTyrantItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180638: function(n) {
                    return [langFont.Font_ESKillTyrantItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180640: function(n) {
                    return [langFont.Font_ESKillTyrantItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180641: function(n) {
                    return [langFont.Font_ESKillDominateItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180642: function(n) {
                    return [langFont.Font_ESKillDominateItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180644: function(n) {
                    return [langFont.Font_ESKillDominateItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180645: function(n) {
                    return [langFont.Font_ESKillDevilItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180646: function(n) {
                    return [langFont.Font_ESKillDevilItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180648: function(n) {
                    return [langFont.Font_ESKillDevilItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180649: function(n) {
                    return [langFont.Font_ESRoundItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180650: function(n) {
                    return [langFont.Font_ESRoundItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180652: function(n) {
                    return [langFont.Font_ESRoundItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180653: function(n) {
                    return [langFont.Font_ESScoreItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180654: function(n) {
                    return [langFont.Font_ESScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180656: function(n) {
                    return [langFont.Font_ESScoreItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180671: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180672: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180673: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180674: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180675: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180676: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180677: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180678: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180679: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180680: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180681: function(n) {
                    return [langFont.Font_ESFirstBloodItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180682: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180683: function(n) {
                    return [langFont.Font_ESWinXRoundItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180684: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180685: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMiddleTowerItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMiddleTowerItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180686: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstHighlandTowerItems[5], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXHighlandTowerItems[5].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180691: function(n) {
                    return [langFont.Font_ESBattleTimeItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180701: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180702: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180703: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180704: function(n) {
                    return [langFont.Font_ESGameItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180705: function(n) {
                    return [langFont.Font_ESKillHeroItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180706: function(n) {
                    return [langFont.Font_ESKillHeroItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180708: function(n) {
                    return [langFont.Font_ESKillHeroItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180709: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180710: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180712: function(n) {
                    return [langFont.Font_ESDestroyTowerItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180713: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180714: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180716: function(n) {
                    return [langFont.Font_ESDestroyCrystalItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180717: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180718: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180720: function(n) {
                    return [langFont.Font_ESDestroyBarrackItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180721: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180722: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180724: function(n) {
                    return [langFont.Font_ESKillSmallDragonItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180725: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180726: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180728: function(n) {
                    return [langFont.Font_ESKillBigDragonItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180729: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180730: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180732: function(n) {
                    return [langFont.Font_ESKillMagicDragonItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180733: function(n) {
                    return [langFont.Font_ESKillCaesarItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180734: function(n) {
                    return [langFont.Font_ESKillCaesarItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180736: function(n) {
                    return [langFont.Font_ESKillCaesarItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180737: function(n) {
                    return [langFont.Font_ESKillTyrantItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180738: function(n) {
                    return [langFont.Font_ESKillTyrantItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180740: function(n) {
                    return [langFont.Font_ESKillTyrantItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180741: function(n) {
                    return [langFont.Font_ESKillDominateItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180742: function(n) {
                    return [langFont.Font_ESKillDominateItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180744: function(n) {
                    return [langFont.Font_ESKillDominateItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180745: function(n) {
                    return [langFont.Font_ESKillDevilItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180746: function(n) {
                    return [langFont.Font_ESKillDevilItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180748: function(n) {
                    return [langFont.Font_ESKillDevilItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180749: function(n) {
                    return [langFont.Font_ESRoundItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180750: function(n) {
                    return [langFont.Font_ESRoundItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180752: function(n) {
                    return [langFont.Font_ESRoundItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180753: function(n) {
                    return [langFont.Font_ESScoreItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180754: function(n) {
                    return [langFont.Font_ESScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180756: function(n) {
                    return [langFont.Font_ESScoreItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                180771: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstSmallDragonItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXSmallDragonItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180772: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBigDragonItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBigDragonItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180773: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMagicDragonItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMagicDragonItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180774: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCaesarItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCaesarItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180775: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTyrantItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTyrantItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180776: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDominateItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDominateItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180777: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstDevilItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXDevilItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180778: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstCrystalItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXCrystalItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180779: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstBarrackItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXBarrackItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180780: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstTowerItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXTowerItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180781: function(n) {
                    return [langFont.Font_ESFirstBloodItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180782: function(n) {
                    return [langFont.Font_ESFirstKillXHeroItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180783: function(n) {
                    return [langFont.Font_ESWinXRoundItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180784: function(n) {
                    return [langFont.Font_ESFirstWinXRoundItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180785: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstMiddleTowerItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXMiddleTowerItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180786: function(n) {
                    return 1 == parseInt(n.substr(0, 2)) ? [langFont.Font_ESFirstHighlandTowerItems[6], Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_ESFirstXHighlandTowerItems[6].replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                180791: function(n) {
                    return [langFont.Font_ESBattleTimeItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_MinuteAndSecond]
                },
                180853: function(n) {
                    return [langFont.Font_ESScoreItems[7], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                180953: function(n) {
                    return [langFont.Font_ESScoreItems[8], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                181053: function(n) {
                    return [langFont.Font_ESScoreItems[9], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                181153: function(n) {
                    return [langFont.Font_ESScoreItems[10], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                181253: function(n) {
                    return [langFont.Font_ESScoreItems[11], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                181353: function(n) {
                    return [langFont.Font_ESScoreItems[12], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                181453: function(n) {
                    return [langFont.Font_ESScoreItems[13], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                181553: function(n) {
                    return [langFont.Font_ESScoreItems[14], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                }
            },
            19: {
                19001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                19002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19005: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19006: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19007: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_FTTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19008: function(n) {
                    return 1 < r ? [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_FTTotalScore, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19012: function(n) {
                    return [langFont.Font_AFTotalThreePoint[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19014: function(n) {
                    return [langFont.Font_AFTotalThreePoint[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19015: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamThreePoint, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFFTTeamThreePoint, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19016: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamThreePoint, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFFTTeamThreePoint, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19017: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamThreePoint, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFFTTeamThreePoint, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19018: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamThreePoint, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFFTTeamThreePoint, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19022: function(n) {
                    return [langFont.Font_AFTotalTouchDown[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19024: function(n) {
                    return [langFont.Font_AFTotalTouchDown[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19025: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamTouchDown, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFFTTeamTouchDown, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19026: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamTouchDown, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFFTTeamTouchDown, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19027: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamTouchDown, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFFTTeamTouchDown, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19028: function(n) {
                    return 1 < r ? [langFont.Font_AFFTTeamTouchDown, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFFTTeamTouchDown, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19051: function(n) {
                    return [langFont.Font_FTFirstPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19052: function(n) {
                    return [langFont.Font_FTLastPoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19053: function(n) {
                    return [langFont.Font_AFFTMostPointsInOneQuarter, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19054: function(n) {
                    return [langFont.Font_AFFTShortThreePoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19055: function(n) {
                    return [langFont.Font_AFFTLongThreePoint, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19056: function(n) {
                    return [langFont.Font_AFFTShortTouchDown, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19057: function(n) {
                    return [langFont.Font_AFFTLongTouchDown, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19058: function(n) {
                    return [langFont.Font_AFFTMostDiscardKick, Args.PlayShowPK, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19071: function(n) {
                    n = parseInt(n.substr(0, 2));
                    return 1 == n ? [langFont.Font_AFFTFirstThreePoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == n ? [langFont.Font_AFFTLastThreePoint, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_AFFTXThreePoint.replace(" X ", n), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19072: function(n) {
                    n = parseInt(n.substr(0, 2));
                    return 1 == n ? [langFont.Font_AFFTFirstTouchDown, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == n ? [langFont.Font_AFFTLastTouchDown, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_AFFTXTouchDown.replace(" X ", n), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19073: function(n) {
                    n = parseInt(n.substr(0, 2));
                    return 1 == n ? [langFont.Font_AFFTFirstMistake, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : 99 == n ? [langFont.Font_AFFTXMistake, Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce] : [langFont.Font_AFFTLastMistake.replace(" X ", n), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19074: function(n) {
                    return [langFont.Font_AFFTPriorityGetXPoint.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                19091: function(n) {
                    return [langFont.Font_AFFTThreePointYard, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAPlusB]
                },
                19092: function(n) {
                    return [langFont.Font_AFFTTouchDownYard, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAPlusB]
                },
                19093: function(n) {
                    return [langFont.Font_AFFTTotalRunYard, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAPlusB]
                },
                19094: function(n) {
                    return [langFont.Font_AFFTTotalPassYard, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAPlusB]
                },
                19101: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                19102: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19103: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19104: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19105: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19106: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19107: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19108: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19112: function(n) {
                    return [langFont.Font_AFTotalThreePoint[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19122: function(n) {
                    return [langFont.Font_AFTotalTouchDown[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19201: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                19202: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19203: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19204: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19205: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19206: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19207: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19208: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19212: function(n) {
                    return [langFont.Font_AFTotalThreePoint[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19222: function(n) {
                    return [langFont.Font_AFTotalTouchDown[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19301: function(n) {
                    return [langFont.Font_AFQuarters[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                19302: function(n) {
                    return [langFont.Font_AFQuarters[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19303: function(n) {
                    return [langFont.Font_AFQuarters[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19304: function(n) {
                    return [langFont.Font_AFQuarters[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19305: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19307: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19401: function(n) {
                    return [langFont.Font_AFQuarters[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                19402: function(n) {
                    return [langFont.Font_AFQuarters[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19403: function(n) {
                    return [langFont.Font_AFQuarters[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19404: function(n) {
                    return [langFont.Font_AFQuarters[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19405: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19407: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19501: function(n) {
                    return [langFont.Font_AFQuarters[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                19502: function(n) {
                    return [langFont.Font_AFQuarters[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19503: function(n) {
                    return [langFont.Font_AFQuarters[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19504: function(n) {
                    return [langFont.Font_AFQuarters[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19505: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19507: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                19601: function(n) {
                    return [langFont.Font_AFQuarters[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                19602: function(n) {
                    return [langFont.Font_AFQuarters[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19603: function(n) {
                    return [langFont.Font_AFQuarters[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19604: function(n) {
                    return [langFont.Font_AFQuarters[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                19605: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_AFTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                19607: function(n) {
                    return 1 < r ? [langFont.Font_AFTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_AFTotalScoreItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                }
            },
            20: {
                20001: function(n) {
                    return [langFont.Font_PBGamesWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                20002: function(n) {
                    return [langFont.Font_PBGamesWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                20003: function(n) {
                    return [langFont.Font_PBGamesWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                20004: function(n) {
                    return [langFont.Font_PBGamesWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                20101: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20102: function(n) {
                    return t(o, Args.PlayOU)
                },
                20103: function(n) {
                    return t(o, Args.PlayWin)
                },
                20104: function(n) {
                    return t(o, Args.PlayOE)
                },
                20111: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20112: function(n) {
                    return t(o, Args.PlayOU)
                },
                20113: function(n) {
                    return t(o, Args.PlayWin)
                },
                20114: function(n) {
                    return t(o, Args.PlayOE)
                },
                20121: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20122: function(n) {
                    return t(o, Args.PlayOU)
                },
                20123: function(n) {
                    return t(o, Args.PlayWin)
                },
                20124: function(n) {
                    return t(o, Args.PlayOE)
                },
                20131: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20132: function(n) {
                    return t(o, Args.PlayOU)
                },
                20133: function(n) {
                    return t(o, Args.PlayWin)
                },
                20134: function(n) {
                    return t(o, Args.PlayOE)
                },
                20141: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20142: function(n) {
                    return t(o, Args.PlayOU)
                },
                20143: function(n) {
                    return t(o, Args.PlayWin)
                },
                20144: function(n) {
                    return t(o, Args.PlayOE)
                },
                20151: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20152: function(n) {
                    return t(o, Args.PlayOU)
                },
                20153: function(n) {
                    return t(o, Args.PlayWin)
                },
                20154: function(n) {
                    return t(o, Args.PlayOE)
                },
                20161: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20162: function(n) {
                    return t(o, Args.PlayOU)
                },
                20163: function(n) {
                    return t(o, Args.PlayWin)
                },
                20164: function(n) {
                    return t(o, Args.PlayOE)
                },
                20171: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20172: function(n) {
                    return t(o, Args.PlayOU)
                },
                20173: function(n) {
                    return t(o, Args.PlayWin)
                },
                20174: function(n) {
                    return t(o, Args.PlayOE)
                },
                20181: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20182: function(n) {
                    return t(o, Args.PlayOU)
                },
                20183: function(n) {
                    return t(o, Args.PlayWin)
                },
                20184: function(n) {
                    return t(o, Args.PlayOE)
                },
                20191: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20192: function(n) {
                    return t(o, Args.PlayOU)
                },
                20193: function(n) {
                    return t(o, Args.PlayWin)
                },
                20194: function(n) {
                    return t(o, Args.PlayOE)
                },
                20201: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20202: function(n) {
                    return t(o, Args.PlayOU)
                },
                20203: function(n) {
                    return t(o, Args.PlayWin)
                },
                20204: function(n) {
                    return t(o, Args.PlayOE)
                },
                20211: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20212: function(n) {
                    return t(o, Args.PlayOU)
                },
                20213: function(n) {
                    return t(o, Args.PlayWin)
                },
                20214: function(n) {
                    return t(o, Args.PlayOE)
                },
                20221: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20222: function(n) {
                    return t(o, Args.PlayOU)
                },
                20223: function(n) {
                    return t(o, Args.PlayWin)
                },
                20224: function(n) {
                    return t(o, Args.PlayOE)
                },
                20231: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20232: function(n) {
                    return t(o, Args.PlayOU)
                },
                20233: function(n) {
                    return t(o, Args.PlayWin)
                },
                20234: function(n) {
                    return t(o, Args.PlayOE)
                },
                20241: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20242: function(n) {
                    return t(o, Args.PlayOU)
                },
                20243: function(n) {
                    return t(o, Args.PlayWin)
                },
                20244: function(n) {
                    return t(o, Args.PlayOE)
                },
                20251: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20252: function(n) {
                    return t(o, Args.PlayOU)
                },
                20253: function(n) {
                    return t(o, Args.PlayWin)
                },
                20254: function(n) {
                    return t(o, Args.PlayOE)
                },
                20261: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20262: function(n) {
                    return t(o, Args.PlayOU)
                },
                20263: function(n) {
                    return t(o, Args.PlayWin)
                },
                20264: function(n) {
                    return t(o, Args.PlayOE)
                },
                20271: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20272: function(n) {
                    return t(o, Args.PlayOU)
                },
                20273: function(n) {
                    return t(o, Args.PlayWin)
                },
                20274: function(n) {
                    return t(o, Args.PlayOE)
                },
                20281: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20282: function(n) {
                    return t(o, Args.PlayOU)
                },
                20283: function(n) {
                    return t(o, Args.PlayWin)
                },
                20284: function(n) {
                    return t(o, Args.PlayOE)
                },
                20291: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20292: function(n) {
                    return t(o, Args.PlayOU)
                },
                20293: function(n) {
                    return t(o, Args.PlayWin)
                },
                20294: function(n) {
                    return t(o, Args.PlayOE)
                },
                20301: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20302: function(n) {
                    return t(o, Args.PlayOU)
                },
                20303: function(n) {
                    return t(o, Args.PlayWin)
                },
                20304: function(n) {
                    return t(o, Args.PlayOE)
                },
                20311: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20312: function(n) {
                    return t(o, Args.PlayOU)
                },
                20313: function(n) {
                    return t(o, Args.PlayWin)
                },
                20314: function(n) {
                    return t(o, Args.PlayOE)
                },
                20321: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20322: function(n) {
                    return t(o, Args.PlayOU)
                },
                20323: function(n) {
                    return t(o, Args.PlayWin)
                },
                20324: function(n) {
                    return t(o, Args.PlayOE)
                },
                20331: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20332: function(n) {
                    return t(o, Args.PlayOU)
                },
                20333: function(n) {
                    return t(o, Args.PlayWin)
                },
                20334: function(n) {
                    return t(o, Args.PlayOE)
                },
                20341: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20342: function(n) {
                    return t(o, Args.PlayOU)
                },
                20343: function(n) {
                    return t(o, Args.PlayWin)
                },
                20344: function(n) {
                    return t(o, Args.PlayOE)
                },
                20351: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20352: function(n) {
                    return t(o, Args.PlayOU)
                },
                20353: function(n) {
                    return t(o, Args.PlayWin)
                },
                20354: function(n) {
                    return t(o, Args.PlayOE)
                },
                20361: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20362: function(n) {
                    return t(o, Args.PlayOU)
                },
                20363: function(n) {
                    return t(o, Args.PlayWin)
                },
                20364: function(n) {
                    return t(o, Args.PlayOE)
                },
                20371: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20372: function(n) {
                    return t(o, Args.PlayOU)
                },
                20373: function(n) {
                    return t(o, Args.PlayWin)
                },
                20374: function(n) {
                    return t(o, Args.PlayOE)
                },
                20381: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20382: function(n) {
                    return t(o, Args.PlayOU)
                },
                20383: function(n) {
                    return t(o, Args.PlayWin)
                },
                20384: function(n) {
                    return t(o, Args.PlayOE)
                },
                20391: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20392: function(n) {
                    return t(o, Args.PlayOU)
                },
                20393: function(n) {
                    return t(o, Args.PlayWin)
                },
                20394: function(n) {
                    return t(o, Args.PlayOE)
                },
                20401: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20402: function(n) {
                    return t(o, Args.PlayOU)
                },
                20403: function(n) {
                    return t(o, Args.PlayWin)
                },
                20404: function(n) {
                    return t(o, Args.PlayOE)
                },
                20411: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20412: function(n) {
                    return t(o, Args.PlayOU)
                },
                20413: function(n) {
                    return t(o, Args.PlayWin)
                },
                20414: function(n) {
                    return t(o, Args.PlayOE)
                },
                20421: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20422: function(n) {
                    return t(o, Args.PlayOU)
                },
                20423: function(n) {
                    return t(o, Args.PlayWin)
                },
                20424: function(n) {
                    return t(o, Args.PlayOE)
                },
                20431: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20432: function(n) {
                    return t(o, Args.PlayOU)
                },
                20433: function(n) {
                    return t(o, Args.PlayWin)
                },
                20434: function(n) {
                    return t(o, Args.PlayOE)
                },
                20441: function(n) {
                    return t(o, Args.PlayHDP)
                },
                20442: function(n) {
                    return t(o, Args.PlayOU)
                },
                20443: function(n) {
                    return t(o, Args.PlayWin)
                },
                20444: function(n) {
                    return t(o, Args.PlayOE)
                },
                20901: function(n) {
                    return [langFont.Font_PBPriorityXGameWinner.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                },
                20902: function(n) {
                    return [langFont.Font_PBMostPointsInXGame.replace(" X ", parseInt(n.substr(0, 2))), Args.PlayShowPK, Args.ChkLongBT, !1, Args.TeamAB, Args.OR_TeamAOrBOrDauce]
                }
            },
            21: {
                21001: function(n) {
                    return [langFont.Font_TTGamesWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21002: function(n) {
                    return [langFont.Font_TTGamesWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21003: function(n) {
                    return [langFont.Font_TTGamesWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21004: function(n) {
                    return [langFont.Font_TTGamesWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21011: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21012: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21013: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21014: function(n) {
                    return [langFont.Font_TotalWinner, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21015: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA]
                },
                21016: function(n) {
                    return 1 < r ? [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamA, Args.OR_ScoreA] : [langFont.Font_SingleTeamTotalScore, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamB, Args.OR_ScoreB]
                },
                21101: function(n) {
                    return [langFont.Font_TTGameWinnerItems[0], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21102: function(n) {
                    return [langFont.Font_TTGameWinnerItems[0], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21103: function(n) {
                    return [langFont.Font_TTGameWinnerItems[0], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21104: function(n) {
                    return [langFont.Font_TTGameWinnerItems[0], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21201: function(n) {
                    return [langFont.Font_TTGameWinnerItems[1], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21202: function(n) {
                    return [langFont.Font_TTGameWinnerItems[1], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21203: function(n) {
                    return [langFont.Font_TTGameWinnerItems[1], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21204: function(n) {
                    return [langFont.Font_TTGameWinnerItems[1], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21301: function(n) {
                    return [langFont.Font_TTGameWinnerItems[2], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21302: function(n) {
                    return [langFont.Font_TTGameWinnerItems[2], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21303: function(n) {
                    return [langFont.Font_TTGameWinnerItems[2], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21304: function(n) {
                    return [langFont.Font_TTGameWinnerItems[2], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21401: function(n) {
                    return [langFont.Font_TTGameWinnerItems[3], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21402: function(n) {
                    return [langFont.Font_TTGameWinnerItems[3], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21403: function(n) {
                    return [langFont.Font_TTGameWinnerItems[3], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21404: function(n) {
                    return [langFont.Font_TTGameWinnerItems[3], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21501: function(n) {
                    return [langFont.Font_TTGameWinnerItems[4], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21502: function(n) {
                    return [langFont.Font_TTGameWinnerItems[4], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21503: function(n) {
                    return [langFont.Font_TTGameWinnerItems[4], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21504: function(n) {
                    return [langFont.Font_TTGameWinnerItems[4], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21601: function(n) {
                    return [langFont.Font_TTGameWinnerItems[5], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21602: function(n) {
                    return [langFont.Font_TTGameWinnerItems[5], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21603: function(n) {
                    return [langFont.Font_TTGameWinnerItems[5], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21604: function(n) {
                    return [langFont.Font_TTGameWinnerItems[5], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21701: function(n) {
                    return [langFont.Font_TTGameWinnerItems[6], Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                21702: function(n) {
                    return [langFont.Font_TTGameWinnerItems[6], Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21703: function(n) {
                    return [langFont.Font_TTGameWinnerItems[6], Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                21704: function(n) {
                    return [langFont.Font_TTGameWinnerItems[6], Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                }
            },
            22: {
                22001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                22002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22101: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                22102: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22103: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22104: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22201: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                22202: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22203: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                22204: function(n) {
                    return [langFont.Font_2ndHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                }
            },
            23: {
                23001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                23002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                23003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                23004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                23101: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                23102: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                23103: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                23104: function(n) {
                    return [langFont.Font_1stHalf, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                }
            },
            24: {
                24001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                24002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                24003: function(n) {
                    return [langFont.Font_FT, Args.PlayWin, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                24004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                }
            },
            28: {
                28001: function(n) {
                    return [langFont.Font_FT, Args.PlayHDP, Args.ChkShortBT, !0, Args.TeamAB, Args.OR_ScoreAB]
                },
                28002: function(n) {
                    return [langFont.Font_FT, Args.PlayOU, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                },
                28004: function(n) {
                    return [langFont.Font_FT, Args.PlayOE, Args.ChkShortBT, !1, Args.TeamAB, Args.OR_ScoreAB]
                }
            }
        };
        Tool.IsSC(Tool.TransformGameType(g, Args.ShortEn)) && (o = "11" + o.substr(2),
        g = "11");
        a = n[g] && "function" == typeof n[g][o] ? n[g][o](a) : [];
        return 0 < a.length && (a[0] = a[0].replace(" - ", "-")),
        a
    },
    TransformAIdToModeBall: function(n) {
        var t = n.endsWith("1") ? "DS" : "ZD";
        return MainProperty.allyData[n] && (t += MainProperty.allyData[n].type),
        t
    },
    SetThemeHabit: function(n) {
        switch (n) {
        case "Classic":
        case "Modern":
            MainProperty.user.theme.theme = n;
            break;
        case "White":
        case "Black":
            MainProperty.user.theme.color = n
        }
    },
    HasKindSubGame: function(n) {
        for (var t = Mapping.GetOuterKT(MainProperty.ballType, MainProperty.sortOption.kind, n + 1, Args.BelowKindSub, !0), o = Object.keys(MainProperty.oddData), a = 0; a < o.length; a++)
            for (var r = o[a], g = Object.keys(MainProperty.oddData[r]), F = 0; F < g.length; F++)
                for (var l = g[F], e = Object.keys(MainProperty.oddData[r][l]), s = 0; s < e.length; s++) {
                    var A = e[s];
                    if (0 <= t.indexOf(A))
                        return !0
                }
        return !1
    }
}
  , Alert = {
    Status: !1,
    Type: 0,
    Msg: "",
    IsCancal: !1,
    CancalType: [],
    Initial: function(n, t, o, a) {
        (Alert.Status || 0 < $("#alertBlock").length) && Alert.Remove(),
        Alert.Status = !0,
        Alert.Type = n,
        Alert.Msg = t,
        Alert.Confirm = function() {
            "function" == typeof o && o(),
            Alert.Remove()
        }
        ,
        "function" == typeof a && a(),
        Alert.Open()
    },
    Open: function() {
        "mobile" == MainProperty.webDevice ? Alert.DrawMobile() : Alert.Draw()
    },
    Draw: function() {
        var n = "";
        n += '<div id="alertMask" class="mask"></div>',
        n += '<div id="alertBlock" class="popUp_sysMsg">',
        n += '<div class="btn_closeSM" onclick="Alert.Close()"></div>',
        n += '<div class="popSM_T">' + langFont.Font_SystemMessage + "</div>",
        n += '<div class="popSM_In">',
        n += '<div class="popSM_InText">' + Alert.Msg + "</div>",
        n += "</div>",
        n += '<div class="popSM_btn">',
        n += '<input type="button" id="btnAlertCancel" value="' + langFont.Font_MsgCancel + '" class="btn_popSM_clear" style="display: none;" onclick="Alert.Cancel()" />',
        n += '<input type="button" id="btnAlertConfirm" value="' + langFont.Font_MsgSure + '" class="btn_popSM_confirm" onclick="Alert.Confirm()" />',
        n += "</div>",
        n += "</div>",
        $("body").prepend(n),
        $("#alertBlock").show(),
        $("#alertMask").show(),
        0 <= Alert.CancalType.indexOf(Alert.Type) && (Alert.IsCancal = !0,
        $("#btnAlertCancel").show())
    },
    DrawMobile: function() {
        var n = "";
        n += '<div id="alertMask" class="mask"></div>',
        n += '<div id="alertBlock" class="popList popMsg">',
        n += '<div class="popListBox_T">',
        n += '<div class="popListBox_T_text">' + langFont.Font_SystemMessage + '<div class="btn_popListBox_close" onclick="Alert.Confirm()"></div></div>',
        n += "</div>",
        n += '<div class="popListBox_In"><div class="popListBox_In_text">' + Alert.Msg + "</div></div>",
        n += "</div>",
        $("body").prepend(n),
        $("#alertBlock").css("display", "flex"),
        $("#alertMask").show(),
        $("#alertBlock").click(function() {
            Alert.Confirm()
        })
    },
    Confirm: function() {
        Alert.Remove()
    },
    Cancel: function() {
        Alert.Remove()
    },
    Close: function() {
        1 == Alert.IsCancal ? Alert.Cancel() : Alert.Confirm()
    },
    Remove: function() {
        Alert.Status = !1,
        Alert.Type = 0,
        Alert.Msg = "",
        Alert.IsCancal = !1,
        Alert.Confirm = Alert.Remove,
        $("#alertBlock").add("#alertMask").remove()
    }
}
  , Maintain = {
    Status: Args.MTOver,
    Version: null,
    Initial: function() {
        Maintain.Status != Args.MT && (0 < $("#maintain").length && Maintain.Remove(),
        Maintain.Status = Args.MT,
        Maintain.CloseOtherPage(),
        Maintain.Open())
    },
    Open: function() {
        var n = "/bbView/Restricted.aspx?isMT=1&isMobile=" + (Tool.IsTouch ? 1 : 0)
          , t = "";
        t += '<div id="maintain">' + ("mobile" == MainProperty.webDevice ? '<div class="btn_AR_close" onclick="Header.BackPage()"></div>' : ""),
        t += '<iframe class="maintain_In" src="' + n + '" frameborder="0" scrolling="no"></iframe>',
        t += "</div>",
        $("body").prepend(t),
        $("#maintain > iframe.maintain_In").load(function() {
            $("#maintain").show(),
            PlayerAPI && (PlayerAPI[Args.LiveTv] && PlayerAPI[Args.LiveTv].DestroyPlayer(),
            PlayerAPI[Args.PopLiveTv] && PlayerAPI[Args.PopLiveTv].DestroyPlayer(),
            PlayerAPI.ExitFullScreen())
        })
    },
    Close: function() {
        Maintain.Status = Args.MTOver,
        Maintain.CloseOtherPage(),
        PlayerAPI && (PlayerAPI[Args.LiveTv] && PlayerAPI[Args.LiveTv].DestroyPlayer(),
        PlayerAPI[Args.PopLiveTv] && PlayerAPI[Args.PopLiveTv].DestroyPlayer(),
        PlayerAPI.ExitFullScreen()),
        ShowAlert(Args.Reload, langFont.Font_MaintainUpdate)
    },
    Remove: function() {
        Maintain.Status = Args.MTOver,
        $("#maintain").remove()
    },
    CloseOtherPage: function() {
        for (var n = Object.keys(MainProperty.recordWindow), t = 0; t < n.length; t++) {
            var o = n[t];
            0 == Tool.IsEmptyObject(MainProperty.recordWindow[o]) && (MainProperty.recordWindow[o].close(),
            delete MainProperty.recordWindow[o])
        }
    }
}
  , SMMaintain = {
    Status: Args.MTOver,
    Open: function() {
        var n;
        this.Status == Args.MTOver && (n = "pc" == MainProperty.webDevice ? '<div class="navTop_info smMaintain" style="display: none;"><div class="navTop_infoBox" style="display: none;">' + langFont.Font_Maintain + "</div></div>" : '<div class="moreBT_info smMaintain" style="display: none;">' + langFont.Font_Maintain + "</div>",
        $("#broadcast").addClass("off").append(n),
        this.Status = Args.MT,
        2 != MainProperty.user.category && (ChatVue.smMaintain = !0))
    },
    Close: function() {
        this.Status == Args.MT && ($("#broadcast").removeClass("off"),
        $("#broadcast > div.smMaintain").remove(),
        this.Status = Args.MTOver,
        2 != MainProperty.user.category && (ChatVue.smMaintain = !1))
    }
}
  , ReceiveLog = {
    Timer: null,
    ReceiveMsg: {},
    RecordLog: function(n, t) {},
    CheckLog: function() {}
};
function ShowAlert(n, t, o, a) {
    var r, g = [Args.BackPage];
    if ("function" != typeof o && ((r = {})[Args.AlertText] = function() {
        Alert.Remove()
    }
    ,
    r[Args.Reload] = function() {
        location.reload()
    }
    ,
    r[Args.OriginBackPage] = r[Args.BackPage] = function() {
        var n = window;
        opener && 0 <= Object.keys(opener).indexOf("Alert") && "object" == typeof opener.Alert && (n = opener.window || n),
        n.close(),
        n.location.replace("about:blank"),
        n.history.back()
    }
    ,
    o = "function" == typeof r[n] ? r[n] : r[Args.AlertText]),
    "function" != typeof a && ((r = {})[Args.OriginBackPage] = r[Args.BackPage] = function() {
        var n = MainProperty.recordWindow;
        opener && 0 <= Object.keys(opener).indexOf("Alert") && "object" == typeof opener.Alert && (n = opener.MainProperty.recordWindow || n);
        for (var t = Object.keys(n), o = 0; o < t.length; o++) {
            var a = t[o];
            0 == Tool.IsEmptyObject(n[a]) && n[a].close()
        }
    }
    ,
    a = "function" == typeof r[n] ? r[n] : function() {}
    ),
    0 <= g.indexOf(n) && opener && 0 <= Object.keys(opener).indexOf("Alert") && "object" == typeof opener.Alert)
        try {
            opener.ShowAlert(Args.OriginBackPage, t)
        } catch (n) {
            var F = "";
            try {
                F = opener.location.href
            } catch (n) {
                F = n
            }
            BBXHR.RecordLog("發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + MainProperty.sessionID + "\r\nsource: Document\r\nShowAlert Error: " + n + "\r\nmsg: " + t + "\r\nopenerDetail: " + F + "\r\nurl: " + window.location.href + "\r\n")
        }
    else
        Alert.Initial(n, t, o, a);
    0 <= [Args.BackPage, Args.OriginBackPage, Args.Reload].indexOf(n) && window.DataAdapter && DataAdapter.TerminateWorker()
}
function GetBrowserType() {
    var n = navigator.userAgent
      , t = "Other"
      , o = -1 < n.indexOf("compatible") && -1 < n.indexOf("MSIE")
      , a = -1 < n.indexOf("Edg") && !o
      , r = -1 < n.indexOf("Trident") && -1 < n.indexOf("rv:11.0");
    return -1 < n.indexOf("OnePlusBrowser") ? t = "OnePlusBrowser" : -1 < n.indexOf("HeyTapBrowser") ? t = "HeyTapBrowser" : -1 < n.indexOf("OppoBrowser") ? t = "OppoBrowser" : -1 < n.indexOf("MiuiBrowser") ? t = "MiuiBrowser" : -1 < n.indexOf("VivoBrowser") || -1 < n.indexOf("vivo") && -1 < n.indexOf("wv") ? t = "VivoBrowser" : -1 < n.indexOf("QQBrowser") ? t = "QQ" : -1 < n.indexOf("TencentTraveler") ? t = "TT" : -1 < n.indexOf("UC") || -1 < n.indexOf("UBrowser") ? t = "UC" : -1 < n.indexOf("360SE") || -1 < n.indexOf("QHBrowser") || -1 < n.indexOf("Qihoo") ? t = "Qihoo360" : (-1 < n.indexOf("SE") && -1 < n.indexOf("MetaSr") || -1 < n.indexOf("Sogou")) && !r ? t = "Sougou" : -1 < n.indexOf("TheWorld") ? t = "Theworld" : -1 < n.indexOf("Maxthon") ? t = "Maxthon" : -1 < n.indexOf("Avant") ? t = "Avant" : -1 < n.indexOf("baidu") || -1 < n.indexOf("BIDU") || -1 < n.indexOf("Baidu") ? t = "Baidu" : -1 < n.indexOf("MicroMessenger") ? t = "微信" : -1 < n.indexOf("SamsungBrowser") ? t = "SamsungBrowser" : o ? t = "IE" : a ? t = "IEEdg" : r ? t = "IE11" : -1 < n.indexOf("Firefox") || -1 < n.indexOf("FxiOS") ? t = "Firefox" : -1 < n.indexOf("Opera") || -1 < n.indexOf("OPR") ? t = "Opera" : -1 < n.indexOf("Chrome") || -1 < n.indexOf("CriOS") ? t = "Chrome" : -1 < n.indexOf("Safari") && n.indexOf("Chrome") < 0 ? t = "Safari" : -1 < n.indexOf("Sleipnir") && (t = "Sleipnir"),
    t
}
function GetUrlParam() {
    if (!(location.href.indexOf("?") < 0))
        for (var n, t = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), o = 0; o < t.length; o++)
            (n = t[o].split("="))[1] = decodeURIComponent(n[1].replace(/\+/g, " ")),
            isNaN(parseInt(n[1], 10)) || "date" == n[0] || "wId" == n[0] ? MainProperty.urlParam[n[0]] = n[1] : MainProperty.urlParam[n[0]] = parseInt(n[1], 10)
}
function GetCookie(n) {
    var t = ""
      , o = n + "=";
    if (0 <= document.cookie.indexOf(o))
        for (var a = document.cookie.split("; "), r = 0; r < a.length; r++)
            if (0 == a[r].indexOf(o)) {
                t = a[r].replace(o, ""),
                t = unescape(GetUnZip(t));
                break
            }
    return t
}
function SetCookie(n, t) {
    /^(?:[-;:&=\+\$,\w]+@)?[0-9.-]+(:[0-9]+)?/.test(location.host) ? document.cookie = n + "=" + SetZip(escape(t)) + ";" : document.cookie = n + "=" + SetZip(escape(t)) + ";domain=" + location.hostname.substring(location.host.indexOf(".")) + ";path=/"
}
function DelAllCookie() {
    if (0 < document.cookie.length)
        for (var n = ["ASP.NET_SessionId", "bb_fr_lang"], t = document.cookie.split("; "), o = 0; o < t.length; o++) {
            var a = t[o]
              , r = a.indexOf("=")
              , a = -1 < r ? a.substr(0, r) : a;
            n.indexOf(a) < 0 && SetCookie(a, "")
        }
}
function GetLocalStorage(n) {
    var t = "";
    return window.localStorage && localStorage.getItem(n) && (t = unescape(GetUnZip(localStorage.getItem(n)))),
    t
}
function SetLocalStorage(n, t) {
    window.localStorage && localStorage.setItem(n, SetZip(escape(t)))
}
function GetUnZip(n) {
    var t, o = "{}";
    try {
        var a = atob(n)
          , o = pako.inflate(a, {
            to: "string"
        })
    } catch (n) {
        "function" == typeof window.onerror && (t = new Error(n),
        window.onerror(t.message + "\r\n" + t.stack + "\r\n\r\nb64Data"))
    } finally {
        return o
    }
}
function SetZip(n) {
    var t, o = "";
    try {
        var a = pako.deflate(n, {
            to: "string"
        })
          , o = btoa(a)
    } catch (n) {
        "function" == typeof window.onerror && (t = new Error(n),
        window.onerror(t.message + "\r\n" + t.stack + "\r\n\r\nb64Data"))
    } finally {
        return o
    }
}
function CalcDecimal(n, t, o) {
    if (isNaN(t) && isNaN(o))
        return "";
    var a, r = "", g = t.toString(), F = o.toString(), l = g.split(".")[1] ? g.split(".")[1].length : 0, e = F.split(".")[1] ? F.split(".")[1].length : 0;
    switch (n) {
    case "+":
        r = (t * (a = Math.pow(10, Math.max(l, e))) + o * a) / a,
        r = CalcDecimal("/", CalcDecimal("*", t, a) + CalcDecimal("*", o, a), a);
        break;
    case "*":
        a = Math.pow(10, l + e),
        r = Number(g.replace(".", "")) * Number(F.replace(".", "")) / a;
        break;
    case "/":
        a = Math.pow(10, e - l),
        r = Number(g.replace(".", "")) / Number(F.replace(".", "")) * a;
        break;
    default:
        r = ""
    }
    return r
}
function GetUserBalance() {
    $.ajax({
        type: "POST",
        url: "/ajax/AjaxCart.aspx",
        data: {
            method: "CheckUserBalance"
        },
        dataType: "text",
        error: function(n) {
            LogOutCheck('{"st":"' + n.status + '"}')
        },
        success: function(n) {
            n && 1 != LogOutCheck(n) && (n = JSON.parse(n),
            Tool.TransformUserBalance(n.bl))
        }
    })
}
function LogOutCheck(n) {
    var t = !0
      , o = "";
    try {
        var a = "string" == typeof n ? JSON.parse(n) : "object" == typeof n && n.st ? n : {
            st: 0
        };
        switch (parseInt(a.st, 10)) {
        case -99:
            o = langFont.Font_AccountLogout;
            break;
        case -100:
            o = langFont.Font_OverFrequentlyOperating;
            break;
        case -101:
            o = langFont.Font_DataLoadFailed;
            break;
        case -102:
            o = langFont.Font_LimitedAccess;
            break;
        case -103:
            o = langFont.Font_PleaseRevisitAndOperate;
            break;
        case -104:
            o = langFont.Font_AccountLoginAgain;
            break;
        case -105:
            o = langFont.Font_PleaseRevisitAndOperate1;
            break;
        case -106:
            o = langFont.Font_PleaseRevisitAndOperate2;
            break;
        case -107:
            o = langFont.Font_PleaseRevisitAndOperate3;
            break;
        case 429:
            o = langFont.Font_SystemAbnormal;
            break;
        default:
            t = !1
        }
    } catch (n) {
        t = !1
    }
    return t && ShowAlert(Args.BackPage, o),
    t
}
function InitialAlOptionCache(n) {
    var t = Object.keys(MainProperty.imgSet)
      , o = [Ball.none.key, Ball.fv.key, Ball.cs.key]
      , a = 0 <= o.indexOf(MainProperty.ballType) ? MainProperty.ballType : PlayMode[MainProperty.playMode] + MainProperty.ballType;
    MainProperty.alOption.cacheName = a;
    for (var r = 0; r < t.length; r++) {
        var g = t[r];
        MainProperty.alOption.cache["DS" + g] || (MainProperty.alOption.cache["DS" + g] = {
            list: ["All"],
            allCheck: !0,
            hideUncheck: !1
        }),
        MainProperty.alOption.cache["ZD" + g] || (MainProperty.alOption.cache["ZD" + g] = {
            list: ["All"],
            allCheck: !0,
            hideUncheck: !1
        }),
        MainProperty.alOption.cache["ZP" + g] || (MainProperty.alOption.cache["ZP" + g] = {
            list: ["All"],
            allCheck: !0,
            hideUncheck: !1
        })
    }
    for (r = 0; r < o.length; r++) {
        g = o[r];
        MainProperty.alOption.cache[g] || (MainProperty.alOption.cache[g] = {
            list: ["All"],
            allCheck: !0,
            hideUncheck: !1
        })
    }
    if (n && 0 < n.length && MainProperty.alOption.cache[a].list.indexOf("All") < 0) {
        for (var F = $.extend([], MainProperty.alOption.cache[a].list), l = n.map(function(n) {
            return n[0]
        }), r = 0; r < F.length; r++)
            l.indexOf(F[r]) < 0 && MainProperty.alOption.cache[a].list.remove(F[r]);
        0 == MainProperty.alOption.cache[a].list.length && (MainProperty.alOption.cache[a].list = ["All"])
    }
    return MainProperty.alOption.cache[a].list
}
function InitialCache(n, t, o, a, r) {
    var g = {}
      , F = {}
      , l = {};
    if (t && 0 < t.length)
        for (var e = 0; e < t.length; e++) {
            var s = t[e]
              , A = AllyNameProcess(B = s[0], s[1])
              , _ = n.allyData[B] ? n.allyData[B].gidSet : [];
            n.allyData[B] = {
                aId: B,
                an: A,
                s: s[2],
                gidSet: _,
                sport: Tool.TransformGameType(s[3], Args.ShortEn),
                type: Tool.TransformGameType(s[4], Args.ShortEn)
            },
            F[B] = n.allyData[B]
        }
    if (o && 0 < o.length)
        for (e = 0; e < o.length; e++) {
            var i = o[e]
              , S = i[0]
              , B = i[1]
              , m = null != a && a[S] || {};
            n.allyData[B] && (n.allyData[B].gidSet.indexOf(S) < 0 && n.allyData[B].gidSet.push(S),
            n.gameData[S] = {
                mode: 1 < parseInt(S.substr(2, 1)) ? 2 : 1,
                gId: S,
                aId: B,
                type: MainProperty.allyData[B].type,
                ta: i[2],
                tb: i[3],
                pa: i[4] ? "mobile" == MainProperty.webDevice && "Classic" == MainProperty.user.theme.theme ? i[4] : "-" + i[4] : "",
                pb: i[5] ? "mobile" == MainProperty.webDevice && "Classic" == MainProperty.user.theme.theme ? i[5] : "-" + i[5] : "",
                coa: Tool.TransformCountry(i[6]),
                cob: Tool.TransformCountry(i[7]),
                h: 4 == i[8] ? 1 : i[8],
                gd: i[9],
                rt: Tool.TransformRunTime(MainProperty.allyData[B].type, i[10]),
                st: parseInt(i[11], 10),
                mId: i[12],
                live: i[13],
                zd: i[14],
                mp: i[15] || 1,
                cd: i[16],
                gpid: i[17],
                isScore: i[18],
                ht: i[19],
                hasInner: i[20],
                ra: m[0],
                rb: m[1],
                rcna: m[2] || 0,
                rcnb: m[3] || 0,
                sa: Tool.TransformRuns(MainProperty.allyData[B].type, m[4], B, !0),
                sb: Tool.TransformRuns(MainProperty.allyData[B].type, m[5], B, !0),
                na: m[6],
                nb: m[7],
                runsA: Tool.TransformRuns(MainProperty.allyData[B].type, m[8], B, !0),
                runsB: Tool.TransformRuns(MainProperty.allyData[B].type, m[9], B, !0),
                pr: m[10] || 0,
                tc: m[11],
                fra: m[12],
                frb: m[13]
            },
            g[S] = n.gameData[S])
        }
    if (r && 0 < r.length)
        for (e = 0; e < r.length; e++) {
            var P = r[e]
              , S = P[0];
            if (n.gameData[S]) {
                n.oddData[S] = {};
                for (var u = 1; u < P.length; u++) {
                    var T = P[u];
                    n.oddData[S][T[3]] || (n.oddData[S][T[3]] = {}),
                    n.oddData[S][T[3]][T[0]] || (n.oddData[S][T[3]][T[0]] = {});
                    var c = {
                        kT: T[0],
                        ra: T[1],
                        rb: T[2],
                        sT: T[3],
                        sId: T[4],
                        isParlay: T[5],
                        dt: T[6],
                        wt: T[7],
                        line: T[8],
                        pk: Tool.TransformNumToPk(T[0], T[8]),
                        lineAt: T[9],
                        obm: T[10],
                        gbm: T[11]
                    };
                    $.extend(n.oddData[S][T[3]][T[0]], c);
                    for (var O = 12; O < T.length; O++)
                        n.oddData[S][T[3]][T[0]][T[O]] = Tool.TransformPointer(T[0], T[O + 1]),
                        O += 1
                }
            }
            l[S] = n.oddData[S]
        }
    return {
        allys: F,
        games: g,
        odds: l
    }
}
function AllyNameProcess(n, t) {
    return n.endsWith("3") ? t + " - " + langFont.Font_OT : t
}
function FilterSchedule(o, t, n, a) {
    var r = []
      , g = []
      , F = []
      , l = MainProperty.alOption.cacheName;
    r = (r = 0 <= MainProperty.alOption.cache[l].list.indexOf("All") ? Tool.DeepClone(MainProperty.allySequence.pop) : MainProperty.allySequence.pop.filter(function(n) {
        if (t[n])
            return 0 <= MainProperty.alOption.cache[l].list.indexOf(n)
    })).map(function(n) {
        return Tool.DeepClone(t[n])
    });
    for (var e = 0; e < r.length; e++)
        MainProperty.ballType == Ball.cs.key && MainProperty.sortOption.csChecked.indexOf("All") < 0 && MainProperty.sortOption.csChecked.indexOf(r[e].type) < 0 || (F = F.concat(r[e].gidSet));
    Tool.IsMultiSport(MainProperty.ballType) ? F = Tool.DeepClone(F).sort(function(n, t) {
        if (o[n].type == o[t].type && o[n].mode == o[t].mode)
            return F.indexOf(n) > F.indexOf(t) ? 1 : -1;
        n = Tool.TransformAIdToModeBall(o[n].aId),
        t = Tool.TransformAIdToModeBall(o[t].aId);
        return MainProperty.ballSequence.indexOf(n) > MainProperty.ballSequence.indexOf(t) ? 1 : -1
    }) : MainProperty.sortOption.sort == Args.SortTime && (F = Tool.DeepClone(F).sort(function(n, t) {
        if (o[n].type == o[t].type)
            return o[n].gd != o[t].gd ? o[n].gd > o[t].gd ? 1 : -1 : F.indexOf(n) > F.indexOf(t) ? 1 : -1;
        n = Tool.TransformAIdToModeBall(o[n].aId),
        t = Tool.TransformAIdToModeBall(o[t].aId);
        return MainProperty.ballSequence.indexOf(n) > MainProperty.ballSequence.indexOf(t) ? 1 : -1
    }));
    for (e = 0; e < F.length; e++) {
        var s = F[e]
          , A = GetGameST(o[s], n[s], !1);
        if (MainProperty.playMode != PlayMode.ZP || "All" == MainProperty.sortOption.zpDate || o[s].gd.substr(0, 10) == MainProperty.sortOption.zpDate)
            if (Mapping.TransformMenuType(o[s].type, o[s].mode, null)[0][1] != MainProperty.sortOption.kind && 0 != MainProperty.sortOption.kind || 0 != A.length)
                for (var _ = 0; _ < A.length && (g.push(A[_]),
                "mobile" != MainProperty.webDevice && (o[s].type != Ball.es.key || MainProperty.sortOption.kind != Ball.es.val.Single.idx)); _++)
                    ;
            else {
                var i = Tool.DeepClone(o[s]);
                i.sT = "0101",
                g.push(i)
            }
    }
    var S = []
      , S = Tool.IsSC(MainProperty.ballType) && 0 <= [Ball.sc.val.Corner.idx, Ball.sc.val.DSFifteen.idx, Ball.sc.val.Wave.idx, Ball.sc.val.GoalBall.idx, Ball.sc.val.ZDFifteen.idx].indexOf(MainProperty.sortOption.kind) || Tool.IsMultiQtr() ? g.filter(function(n) {
        for (var t = n.mode < 2 ? "DS" + n.type : "ZD" + n.type, o = 0 == MainProperty.sortOption.kind ? Mapping.TransformMenuType(n.type, n.mode, null)[0][1] : MainProperty.sortOption.kind, t = "mobile" == MainProperty.webDevice ? MainProperty.sortOption.kindSub : MainProperty.sortOption.kindSub[t], a = Mapping.GetOuterKT(n.type, o, t, Args.BelowKindSub, !0), r = 0; r < a.length; r++)
            if (MainProperty.oddData[n.gId] && MainProperty.oddData[n.gId][n.sT] && MainProperty.oddData[n.gId][n.sT][a[r]])
                return !0
    }).map(function(n) {
        return n.gId
    }).filter(function(n, t, o) {
        return o.indexOf(n) === t
    }) : g.map(function(n) {
        return n.gId
    }).filter(function(n, t, o) {
        return o.indexOf(n) === t
    });
    if ("mobile" == MainProperty.webDevice && (g = g.filter(function(n) {
        return 0 <= S.indexOf(n.gId)
    })),
    MainProperty.gameSequence = S,
    a != Args.CoverNoReturn)
        return g
}
function InitialModeData(n) {
    for (var t in n)
        n[t] && 0 == Tool.IsEmptyObject(n[t]) && ("default" == t ? MainProperty.user.modeData[101] = n[t] : MainProperty.user.modeData[t] = n[t]);
    Cart.UpdateCartLimit()
}
function SMProcess() {
    Tool.IsBlankDirect ? (NewWindow(null, "LiveBroadcast"),
    MainProperty.recordWindow.LiveBroadcast && (MainProperty.recordWindow.LiveBroadcast.location = "/bbView/LiveBroadcast.aspx")) : ("mobile" == MainProperty.webDevice || MainProperty.recordWindow.LiveBroadcast && MainProperty.recordWindow.LiveBroadcast.close(),
    NewWindow("/bbView/LiveBroadcast.aspx", "LiveBroadcast"))
}
function NewWindow(t, o, a, r) {
    var n = Tool.IsBlankDirect || !t ? "about:blank" : t
      , g = o || "newwindow"
      , F = null != window.screenLeft ? window.screenLeft : screen.left
      , l = window.innerWidth || document.documentElement.clientWidth || screen.width
      , e = "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=no, width=" + a + ", height=" + r + ", top=" + (screen.height / 2 - r / 2) + ", left=" + (l / 2 - a / 2 + F);
    try {
        o ? (void 0 !== MainProperty.recordWindow[o] && (0 == Tool.IsEmptyObject(MainProperty.recordWindow[o]) && (MainProperty.recordWindow[o].onunload = function() {}
        ,
        MainProperty.recordWindow[o].close()),
        MainProperty.recordWindow[o] = void 0,
        delete MainProperty.recordWindow[o]),
        MainProperty.recordWindow[o] = a || r ? window.open(n, o, e) : window.open(n, o)) : (MainProperty.recordWindow[g] = void 0,
        delete MainProperty.recordWindow[g],
        MainProperty.recordWindow[g] = a || r ? window.open(n, "_blank", e) : window.open(n, "_blank")),
        Tool.IsBlankDirect && t && MainProperty.recordWindow[g] && (MainProperty.recordWindow[g].location = t)
    } catch (n) {
        BBXHR.RecordLog("發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + MainProperty.sessionID + "\r\nsource: Document\r\n" + n + "\r\nurl: " + t + ", title: " + o + ", width: " + a + ", height: " + r + ", initTitle: " + MainProperty.recordWindow[g])
    }
}
function Mask() {
    $("#lockUI").removeClass("defCursor").show()
}
function UnMask(n) {
    0 < n ? $("#lockUI").fadeOut(n) : "number" == typeof n && n <= 0 ? $("#lockUI").hide() : $("#lockUI").fadeOut(1e3, function() {
        $("#lockUI").addClass("defCursor")
    })
}
function UnGaryMask() {
    $("#lockUI").removeClass("gray")
}
function GetGameST(n, t, o) {
    if (!t)
        return [];
    for (var a, r = Object.keys(t).sort(function(n, t) {
        return n.substr(2, 2) != t.substr(2, 2) ? parseInt(n.substr(2, 2)) > parseInt(t.substr(2, 2)) ? 1 : -1 : parseInt(n) > parseInt(t) ? 1 : -1
    }), g = [], F = "", l = 0; l < r.length; l++)
        r[l] != F && (F = r[l],
        o ? g.push(r[l]) : ((a = Tool.DeepClone(n)).sT = r[l],
        g.push(a)));
    return g
}
function InitialSetting() {
    var t = connStr;
    $("#loadJS").remove(),
    delete window.connStr,
    MainProperty.user.account = t.Account,
    MainProperty.user.balance = t.Balance,
    MainProperty.user.level = t.Level,
    MainProperty.user.nickName = t.NickName,
    MainProperty.user.hasEnoughDeposit = t.Deposit,
    MainProperty.user.hasDormant = t.Dormant,
    MainProperty.user.category = t.Category,
    MainProperty.user.ip = t.Ip,
    MainProperty.user.modeId = t.ModeId,
    MainProperty.user.theme = {
        theme: t.Theme.theme,
        color: t.Theme.color,
        imgPath: t.Theme.imgPath,
        timer: null,
        themeSetting: {
            color: t.ThemeSetting.Color,
            theme: t.ThemeSetting.Theme,
            extraColor: t.ThemeSetting.ExtraColor,
            extraTheme: t.ThemeSetting.ExtraTheme
        }
    },
    MainProperty.verify = t.Verify,
    MainProperty.jsVersion = t.JSVersion,
    MainProperty.jsPath = t.JSPath,
    MainProperty.cssVersion = t.CSSVersion,
    MainProperty.isApp = 0 <= t.UserDevice.indexOf("APP"),
    MainProperty.IsIosBagOrAndroidApp = 0 <= t.UserDevice.indexOf("APP") && (void 0 !== window.JBS || 0 <= navigator.userAgent.indexOf("IOS_WV_B")),
    MainProperty.userDevice = t.UserDevice,
    MainProperty.funcSetting = {
        mode: t.FuncSet.Mode,
        sport: t.FuncSet.Mode == PlayMode.ZD && t.FuncSet.Sport == Ball.cs.idx ? Ball.none.idx : t.FuncSet.Sport,
        sort: t.FuncSet.Sort,
        cartComfirmMsg: t.FuncSet.CartComfirmMsg,
        cartCallBackMsg: t.FuncSet.CartCallBackMsg,
        defPoint: t.FuncSet.DefPoint,
        defPassPoint: t.FuncSet.DefPassPoint,
        defChip: t.FuncSet.DefChip,
        defChipM: t.FuncSet.DefChipM,
        defMulti: t.FuncSet.DefMulti
    },
    MainProperty.playMode = MainProperty.funcSetting.mode,
    MainProperty.ballType = Tool.TransformGameType(MainProperty.funcSetting.sport, Args.ShortEn),
    MainProperty.sortOption.sort = 0 == MainProperty.funcSetting.sort ? Args.SortHot : Args.SortTime,
    MainProperty.RadarData = t.RadarData,
    MainProperty.RadarAnimation = t.RadarAnimation,
    MainProperty.BBWSUrl = t.BBWSUrl,
    MainProperty.SMWSUrl = t.SMWSUrl,
    MainProperty.WRWSUrl = t.WRWSUrl,
    MainProperty.APIService = t.APIService,
    MainProperty.RadarService = t.RadarService,
    MainProperty.GRXHRUrl = t.GRXHRUrl,
    MainProperty.RDXHRUrl = t.RDXHRUrl,
    MainProperty.RadarProtocol = t.RadarProtocol,
    MainProperty.RadarUrlSearch = t.RadarUrlSearch,
    MainProperty.GRXHRProtocol = t.GRXHRProtocol,
    MainProperty.GRXHRUrlSearch = t.GRXHRUrlSearch,
    MainProperty.sessionID = MainProperty.user.account + "_" + t.SessionID,
    MainProperty.RecordCircuitLog = (void 0 === t.RecordCircuitLog ? MainProperty : t).RecordCircuitLog,
    MainProperty.RecordSNLog = (void 0 === t.RecordSNLog ? MainProperty : t).RecordSNLog,
    MainProperty.RecordLog = (void 0 === t.RecordLog ? MainProperty : t).RecordLog,
    MainProperty.KeepBBRSCount = (void 0 === t.KeepBBRSCount ? MainProperty : t).KeepBBRSCount,
    MainProperty.KeepWRRSCount = (void 0 === t.KeepWRRSCount ? MainProperty : t).KeepWRRSCount,
    MainProperty.KeepSMRSCount = (void 0 === t.KeepSMRSCount ? MainProperty : t).KeepSMRSCount,
    ChatVue.$store.gift.canDonate = t.IsGift,
    ChatVue.$store.gift.canFree = t.FreeCoin,
    ChatVue.$store.main.giftAnimation = t.GiftAnimation,
    ChatVue.dormant = 1 == MainProperty.user.hasDormant,
    ChatVue.showAnn = Number(GetCookie("showChatAnn") || 1),
    ChatVue.$store.main.testChannelList = t.TestChannel ? t.TestChannel.split(",") : [],
    window.VueOrderReport && (VueOrderReport.showFree = t.FreeCoin),
    GetCookie("userAccount") == MainProperty.user.account && GetCookie("bbLang") == langFont.Font_Langue || (DelAllCookie(),
    SetCookie("userAccount", MainProperty.user.account),
    SetCookie("bbLang", langFont.Font_Langue)),
    GetUrlParam(),
    ReceiveLog.CheckLog(),
    "mobile" == MainProperty.webDevice && (Header.BackPage = function() {
        Mask();
        var n = t.BackPage;
        n ? location.href = n : history.back()
    }
    ),
    DataAdapter.InitialAdapter([MainProperty.BBWSUrl, t.BBUrlSearch, t.BBProtocol], [MainProperty.SMWSUrl, t.SMUrlSearch, 25], [MainProperty.WRWSUrl, t.WRUrlSearch, t.WRProtocol])
}
function ParlaysText(n, t) {
    return (1 == t ? langFont.Font_CartString[0] : langFont.Font_CartString[1]).replace(" X ", n).replace(" Y ", t)
}
function GetRanStr(n) {
    for (var t = "", o = 0; o < n; o++)
        t += String.fromCharCode(65 + Math.ceil(25 * Math.random()));
    return t
}
function CheckAllyIndex(n) {
    for (var t = !1, o = $.extend([], n.allyIndex), a = [], r = 0; r < n.allyIndex.length; r++) {
        var g = n.allyIndex[r];
        MainProperty.allyData[g] || (o.remove(g),
        a.push(g),
        t = !0)
    }
    return t && BBXHR.RecordLog("發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + MainProperty.sessionID + "\r\nsource: Document\r\nprevAllyIndex: " + MainProperty.allySequence.pin.join(", ") + "\r\nextraAlly: " + a.join(", ") + "\r\ndata: " + JSON.stringify(n)),
    o
}
function ErrorLogInitial(n, t) {
    window.BBXHR || (window.BBXHR = {
        XHRWorker: new Worker("/js/" + MainProperty.jsPath + "/XHRWorker.js"),
        RecordLog: function(n) {
            null != this.XHRWorker && this.XHRWorker.postMessage(n)
        }
    }),
    null == BBXHR.XHRWorker && (BBXHR.XHRWorker = new Worker("/js/" + MainProperty.jsPath + "/XHRWorker.js"),
    n && BBXHR.XHRWorker.postMessage({
        action: "initial",
        token: n
    })),
    t || (window.onerror = function(n, t, o, a, r) {
        return BBXHR.RecordLog("發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + MainProperty.sessionID + "\r\nsource: Document\r\n" + JSON.stringify({
            message: n,
            source: t,
            lineno: o,
            colno: a,
            error: r
        })),
        location.origin.indexOf("localhost") < 0
    }
    ,
    0 < MainProperty.tempError.length && BBXHR.RecordLog(MainProperty.tempError),
    delete MainProperty.tempError)
}
function AuthGroup(n, t, o) {
    if ("number" != typeof o)
        return BBXHR.RecordLog("發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + MainProperty.sessionID + "\r\nsource: Document\r\nAuthGroup failed, sn is not number, action: " + n + ", group: " + t + " ,sn: " + o),
        !1;
    t = t || 0,
    o = o || 0,
    MainProperty.historyGroup[n] ? MainProperty.historyGroup[n][t] || (MainProperty.historyGroup[n][t] = new Array(150)) : (MainProperty.historyGroup[n] = {},
    MainProperty.historyGroup[n][t] = new Array(150));
    var a = MainProperty.historyGroup[n][t].indexOf(o) < 0;
    return MainProperty.recentGroup[n] ? MainProperty.recentGroup[n][t] && MainProperty.recentGroup[n][t] >= o ? (a && MainProperty.RecordSNLog && BBXHR.RecordLog("發送時間: " + (new Date).Format("yyyy-MM-dd hh:mm:ss.F") + "\r\ntoken: " + MainProperty.sessionID + "\r\nsource: Document\r\nAuthGroup failed, action: " + n + ", group: " + t + " ,localSN: " + MainProperty.recentGroup[n][t] + ", updateSN: " + o, "SN"),
    !1) : (MainProperty.recentGroup[n][t] = o,
    a && (MainProperty.historyGroup[n][t].push(o),
    MainProperty.historyGroup[n][t].shift()),
    !0) : (MainProperty.recentGroup[n] = {},
    MainProperty.recentGroup[n][t] = o,
    a && (MainProperty.historyGroup[n][t].push(o),
    MainProperty.historyGroup[n][t].shift()),
    !0)
}
function AuthLocation(n, t, o, a, r, g) {
    var F = !1;
    switch (n) {
    case "add":
        if (F = (MainProperty.playMode == t || Ball.fv.idx == o) && Ball[MainProperty.ballType].idx == o,
        0 <= g.indexOf("ally") || 0 <= g.indexOf("allyIndex"))
            break;
        if (F = F && a == MainProperty.sortOption.kind,
        0 <= g.indexOf("odds"))
            break;
        break;
    case "del":
        F = (MainProperty.playMode == t || Ball.fv.idx == o) && Ball[MainProperty.ballType].idx == o;
        break;
    case "update":
        if (0 <= g.indexOf("ballIndex")) {
            F = !0;
            break
        }
        if (F = MainProperty.playMode == t || Ball.fv.idx == o,
        0 <= g.indexOf("menu")) {
            0 <= g.indexOf("kindSub") && (F = MainProperty.playMode == t && Ball[MainProperty.ballType].idx == o && MainProperty.sortOption.kind == a);
            break
        }
        o = Ball[MainProperty.ballType].idx == o;
        if (0 <= g.indexOf("ally") || 0 <= g.indexOf("allyIndex") || 0 <= g.indexOf("zdCount")) {
            F = o;
            break
        }
        if (F = F && o,
        0 <= g.indexOf("game"))
            break;
        if (F = F && a == MainProperty.sortOption.kind,
        0 <= g.indexOf("score") || 0 <= g.indexOf("odd"))
            break;
        break;
    case "updateM":
    case "addM":
    case "delM":
    case "updateP":
        F = MainProperty.innerPage == r;
        break;
    case "updatePL":
        F = MainProperty.panelData.popGameLive.gId == r
    }
    return F
}
var Mapping = {
    GetScoreBoardTitle: function(n) {
        var t = {
            sc: [[], ["", "", langFont.Font_SBSCTotal], ["icon_cardR", "icon_corner", "SB_total"]],
            bk: [["1", "2", "3", "4", "OT"], [langFont.Font_SBBKTotal], ["SB_total"]],
            bkA: [["1", "2", "OT"], [langFont.Font_SBBKTotal], ["SB_total"]],
            bkB: [[], [langFont.Font_SBBKTotal], ["SB_total"]],
            bb: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "OT"], ["R", "H"], ["", ""]],
            tn: [["1", "2", "3", "4", "5"], [langFont.Font_SBTNPoint, langFont.Font_TNSetAndRound[0], langFont.Font_TNSetAndRound[1]], ["SB_point", "SB_set", "SB_round"]],
            ih: [["1", "2", "3", "OT"], [langFont.Font_SBIHTotal], ["SB_total"]],
            af: [["1", "2", "3", "4", "OT"], [langFont.Font_SBAFTotal], ["SB_total"]],
            vl: [["1", "2", "3", "4", "5", "6", "7"], [langFont.Font_SBVLTotal, langFont.Font_VLSetAndRound[0]], ["SB_total", "SB_round"]],
            bm: [["1", "2", "3", "4", "5"], [langFont.Font_SBBMTotal, langFont.Font_BMSetAndRound[0]], ["SB_total", "SB_round"]],
            es: [["1", "2", "3", "4", "5", "6", "7"], [langFont.Font_TNSetAndRound[1]], ["SB_round"]],
            hb: [["1", "2"], [langFont.Font_SBHBTotal], ["SB_total"]],
            tt: [["1", "2", "3", "4", "5", "6", "7"], [langFont.Font_SBTTTotal, langFont.Font_SBGame], ["SB_total", "SB_round"]],
            wp: [["1", "2", "3", "4", "OT"], [langFont.Font_SBWPTotal], ["SB_total"]],
            ot: [[], [langFont.Font_SBOTTotal], ["SB_total"]],
            op: [[], [langFont.Font_SBOTTotal], ["SB_total"]]
        };
        return n.indexOf("bk") < 0 && (n = (n = n.replace("A", "")).replace("B", "")),
        t[n = Tool.IsSC(n) ? "sc" : n] || [[], [], []]
    },
    IsHomeChange: function(n, t, o) {
        return Tool.IsSC(n) && (Array.isArray(t) || (t = "11" + t.substr(2)),
        n = "sc"),
        0 <= {
            sc: ["11001", "11003", "11011", "11013", "11021", "11023", "11061", "11063", "11101", "11103", "11111", "11113", "11121", "11123", "11161", "11201", "11203", "11211", "11213", "11221", "11223", "11231", "11233", "11241", "11243", "11251", "11253", "11301", "11303", "11311", "11313", "11321", "11323", "11331", "11333", "11341", "11343", "11351", "11353", "11401", "11403", "11411", "11413", "11421", "11423", "11431", "11433", "11441", "11443", "11451", "11453", "11501", "11502", "11503", "11504", "11505", "11506", "11507", "11531", "11551", "11552", "11553", "11554", "11556", "11557", "11571", "11572", "11574", "11576", "11577", "11605", "11701", "11703", "11711"],
            bk: ["12001", "12003", "12010", "12011", "12012", "12021", "12022", "12023", "12101", "12103", "12109", "12112", "12201", "12203", "12209", "12212", "12301", "12303", "12309", "12312", "12401", "12403", "12409", "12410", "12411", "12412", "12501", "12503", "12509", "12510", "12511", "12512", "12601", "12603", "12609", "12610", "12611", "12612", "12701", "12704", "12707", "12710", "12713", "12716", "12719", "12758", "12761", "12764", "12767", "12776", "12779", "12801", "12802", "12803", "12804"],
            bb: ["13001", "13003", "13005", "13011", "13031", "13033", "13035", "13051", "13053", "13071", "13073", "13075", "13111", "13113", "13211", "13213", "13121", "13123", "13221", "13223", "13131", "13133", "13231", "13233", "13141", "13143", "13241", "13243", "13151", "13153", "13251", "13253", "13161", "13163", "13261", "13263", "13171", "13173", "13271", "13273", "13181", "13183", "13281", "13283", "13301", "13302", "13303", "13304", "13305", "13306", "13307"],
            tn: ["14001", "14011", "14013", "14101", "14103", "14201", "14203", "14301", "14303", "14401", "14403", "14501", "14503"],
            ih: ["15001", "15003", "15005", "15101", "15103", "15105", "15201", "15203", "15205", "15301", "15303", "15305", "15401", "15411"],
            vl: ["16001", "16003", "16011", "16013", "16101", "16103", "16201", "16203", "16301", "16303", "16401", "16403", "16501", "16503", "16601", "16603", "16701", "16703"],
            bm: ["17001", "17003", "17011", "17013", "17101", "17103", "17201", "17203", "17301", "17303", "17401", "17403", "17501", "17503"],
            es: ["180001", "180003", "180101", "180103", "180105", "180109", "180113", "180117", "180121", "180125", "180129", "180133", "180137", "180141", "180145", "180149", "180153", "180171", "180172", "180173", "180174", "180175", "180176", "180177", "180178", "180179", "180180", "180181", "180182", "180183", "180184", "180185", "180186", "180201", "180203", "180205", "180209", "180213", "180217", "180221", "180225", "180229", "180233", "180237", "180241", "180245", "180249", "180253", "180271", "180272", "180273", "180274", "180275", "180276", "180277", "180278", "180279", "180280", "180281", "180282", "180283", "180284", "180285", "180286", "180301", "180303", "180305", "180309", "180313", "180317", "180321", "180325", "180329", "180333", "180337", "180341", "180345", "180349", "180353", "180371", "180372", "180373", "180374", "180375", "180376", "180377", "180378", "180379", "180380", "180381", "180382", "180383", "180384", "180385", "180386", "180401", "180403", "180405", "180409", "180413", "180417", "180421", "180425", "180429", "180433", "180437", "180441", "180445", "180449", "180453", "180471", "180472", "180473", "180474", "180475", "180476", "180477", "180478", "180479", "180480", "180481", "180482", "180483", "180484", "180485", "180486", "180501", "180503", "180505", "180509", "180513", "180517", "180521", "180525", "180529", "180533", "180537", "180541", "180545", "180549", "180553", "180571", "180572", "180573", "180574", "180575", "180576", "180577", "180578", "180579", "180580", "180581", "180582", "180583", "180584", "180585", "180586", "180601", "180603", "180605", "180609", "180613", "180617", "180621", "180625", "180629", "180633", "180637", "180641", "180645", "180649", "180653", "180671", "180672", "180673", "180674", "180675", "180676", "180677", "180678", "180679", "180680", "180681", "180682", "180683", "180684", "180685", "180686", "180701", "180703", "180705", "180709", "180713", "180717", "180721", "180725", "180729", "180733", "180737", "180741", "180745", "180749", "180753", "180771", "180772", "180773", "180774", "180775", "180776", "180777", "180778", "180779", "180780", "180781", "180782", "180783", "180784", "180785", "180786", "180853", "180953", "181053", "181153", "181253", "181353", "181453", "181553"],
            af: ["19001", "19003", "19101", "19103", "19201", "19203", "19301", "19303", "19401", "19403", "19501", "19503", "19601", "19603", "19051", "19052", "19053", "19054", "19055", "19056", "19057", "19058", "19071", "19072", "19073", "19074"],
            pb: ["20001", "20003", "20101", "20103", "20111", "20113", "20121", "20123", "20131", "20133", "20141", "20143", "20151", "20153", "20161", "20163", "20171", "20173", "20181", "20183", "20191", "20193", "20201", "20203", "20211", "20213", "20221", "20223", "20231", "20233", "20241", "20243", "20251", "20253", "20261", "20263", "20271", "20273", "20281", "20283", "20291", "20293", "20301", "20303", "20311", "20313", "20321", "20323", "20331", "20333", "20341", "20343", "20351", "20353", "20361", "20363", "20371", "20373", "20381", "20383", "20391", "20393", "20401", "20403", "20411", "20413", "20421", "20423", "20431", "20433", "20441", "20443", "20901", "20902"],
            tt: ["21001", "21003", "21011", "21013", "21101", "21103", "21201", "21203", "21301", "21303", "21401", "21403", "21501", "21503", "21601", "21603", "21701", "21703"],
            hb: ["22001", "22003", "22101", "22103"],
            wp: ["23001", "23003", "23101", "23103"],
            op: ["24001", "24003"],
            ot: ["24001", "24003"],
            bx: ["28001"]
        }[n].indexOf(t) && 2 == o
    },
    GetOuterHeaderText: function(n, t, o) {
        var a = {
            sc: {
                1: {
                    1: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_SCFTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_SC1HWin],
                    2: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_SCFTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_SC1HWin]
                },
                2: {
                    1: [4, 4, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_SCFTWin, langFont.Font_FTOE],
                    2: [4, 4, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_SC1HWin, langFont.Font_1HOE]
                },
                3: {
                    1: [6, 6, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    2: [6, 6, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    3: [6, 6, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC]
                },
                4: {
                    1: ["X", "X", ""],
                    2: ["X", "X", ""]
                },
                5: {
                    1: [99, 99, langFont.Font_SCFT + " 0 - 1", langFont.Font_SCFT + " 2 - 3", langFont.Font_SCFT + " 4 - 6", langFont.Font_SCFT + " 7+", langFont.Font_SC1H + " 0", langFont.Font_SC1H + " 1", langFont.Font_SC1H + " 2", langFont.Font_SC1H + " 3+"]
                },
                6: {
                    1: [99, 99, langFont.Font_Home + " / " + langFont.Font_Home, langFont.Font_Home + " / " + langFont.Font_GoalsPeace, langFont.Font_Home + " / " + langFont.Font_Guest, langFont.Font_GoalsPeace + " / " + langFont.Font_Home, langFont.Font_GoalsPeace + " / " + langFont.Font_GoalsPeace, langFont.Font_GoalsPeace + " / " + langFont.Font_Guest, langFont.Font_Guest + " / " + langFont.Font_Home, langFont.Font_Guest + " / " + langFont.Font_GoalsPeace, langFont.Font_Guest + " / " + langFont.Font_Guest]
                },
                7: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC]
                }
            },
            bk: {
                1: {
                    1: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE],
                    2: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                3: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    2: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    3: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    4: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    5: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven]
                },
                4: {
                    1: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    6: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    7: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    8: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                6: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                7: {
                    1: [1, 1, ""]
                }
            },
            bb: {
                1: {
                    1: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HWin],
                    2: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HWin]
                },
                2: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OneLoses, langFont.Font_OddAndEven]
                },
                3: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OneLoses, langFont.Font_OddAndEven]
                },
                4: {
                    1: [6, 6, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundScore[2], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1], langFont.Font_BBOneRoundHit[2]]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                },
                6: {
                    1: [4, 2, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU],
                    2: [4, 2, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU]
                },
                7: {
                    1: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU]
                },
                8: {
                    1: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU]
                },
                9: {
                    1: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    2: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    3: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    4: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    5: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    6: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    7: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    8: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]]
                },
                10: {
                    1: [2, 2, langFont.Font_FTOU, langFont.Font_1HOU],
                    2: [2, 2, langFont.Font_FTOU, langFont.Font_1HOU]
                }
            },
            tn: {
                1: {
                    1: [5, 3, langFont.Font_TNGameHDP, langFont.Font_TNGameOU, langFont.Font_TNGameOE, langFont.Font_TNSetHDP, langFont.Font_TNSetWin],
                    2: [5, 3, langFont.Font_TNGameHDP, langFont.Font_TNGameOU, langFont.Font_TNGameOE, langFont.Font_TNSetHDP, langFont.Font_TNSetWin]
                },
                2: {
                    1: [4, 4, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin, langFont.Font_SetsOE],
                    2: [4, 4, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin, langFont.Font_SetsOE],
                    3: [4, 4, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin, langFont.Font_SetsOE],
                    4: [4, 4, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin, langFont.Font_SetsOE]
                },
                3: {
                    1: [4, 2, langFont.Font_TNGameHDP, langFont.Font_TNGameOU, langFont.Font_TNSetWin, langFont.Font_TNSetHDP],
                    2: [4, 2, langFont.Font_TNGameHDP, langFont.Font_TNGameOU, langFont.Font_TNSetWin, langFont.Font_TNSetHDP]
                },
                4: {
                    1: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    2: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    3: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    4: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    5: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    6: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            ih: {
                1: {
                    1: [3, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win]
                },
                3: {
                    1: [1, 1, langFont.Font_OU]
                },
                4: {
                    1: [2, 2, langFont.Font_FTHDP, langFont.Font_FTOU]
                }
            },
            vl: {
                1: {
                    1: [5, 3, langFont.Font_VLGameHDP, langFont.Font_VLGameOU, langFont.Font_VLGameWin, langFont.Font_VLTotalOU, langFont.Font_VLTotalOE],
                    2: [5, 3, langFont.Font_VLGameHDP, langFont.Font_VLGameOU, langFont.Font_VLGameWin, langFont.Font_VLTotalOU, langFont.Font_VLTotalOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win]
                },
                3: {
                    1: [3, 1, langFont.Font_VLGameHDP, langFont.Font_TotalHDP, langFont.Font_VLTotalOU],
                    2: [3, 1, langFont.Font_VLGameHDP, langFont.Font_TotalHDP, langFont.Font_VLTotalOU]
                },
                4: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    6: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    7: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    8: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            bm: {
                1: {
                    1: [4, 2, langFont.Font_BMGameHDP, langFont.Font_BMGameWin, langFont.Font_BMTotalOU, langFont.Font_BMTotalOE],
                    2: [4, 2, langFont.Font_BMGameHDP, langFont.Font_BMGameWin, langFont.Font_BMTotalOU, langFont.Font_BMTotalOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win]
                },
                3: {
                    1: [3, 1, langFont.Font_BMGameHDP, langFont.Font_TotalHDP, langFont.Font_BMTotalOU],
                    2: [3, 1, langFont.Font_BMGameHDP, langFont.Font_TotalHDP, langFont.Font_BMTotalOU]
                },
                4: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    6: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            es: {
                1: {
                    1: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameWin]
                },
                2: {
                    1: [1, 1, ""],
                    2: [1, 1, ""],
                    3: [1, 1, ""],
                    4: [1, 1, ""],
                    5: [1, 1, ""],
                    6: [1, 1, ""],
                    7: [1, 1, ""]
                },
                3: {
                    1: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    2: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    3: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    4: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    5: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    6: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    7: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    8: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    9: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    10: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    11: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    12: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    13: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    14: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE],
                    15: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameOE]
                },
                4: {
                    1: [2, 2, langFont.Font_ESGameHDP, langFont.Font_ESGameOU]
                }
            },
            af: {
                1: {
                    1: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HWin],
                    2: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HWin]
                },
                2: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven]
                },
                3: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    2: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    3: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    4: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    5: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven]
                },
                4: {
                    1: [4, 2, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU],
                    2: [4, 2, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU]
                },
                5: {
                    1: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU],
                    2: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU],
                    3: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU]
                },
                6: {
                    1: [1, 1, ""]
                }
            },
            pb: {
                1: {
                    1: [4, 3, langFont.Font_PBGamesHDP, langFont.Font_PBGamesOU, langFont.Font_PBGamesWin, langFont.Font_PBGamesOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                }
            },
            tt: {
                1: {
                    1: [4, 2, langFont.Font_TTGamesHDP, langFont.Font_TTGamesWin, langFont.Font_TTTotalOU, langFont.Font_TTTotalOE],
                    2: [4, 2, langFont.Font_TTGamesHDP, langFont.Font_TTGamesWin, langFont.Font_TTTotalOU, langFont.Font_TTTotalOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                3: {
                    1: [5, 2, langFont.Font_TTGamesHDP, langFont.Font_TTGamesOU, langFont.Font_TotalHDP, langFont.Font_TTTotalOU, langFont.Font_TTTotalOE],
                    2: [5, 2, langFont.Font_TTGamesHDP, langFont.Font_TTGamesOU, langFont.Font_TotalHDP, langFont.Font_TTTotalOU, langFont.Font_TTTotalOE]
                },
                4: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    6: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    7: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    8: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            hb: {
                1: {
                    1: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE],
                    2: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE]
                },
                2: {
                    1: [4, 2, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU],
                    2: [4, 2, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU]
                }
            },
            wp: {
                1: {
                    1: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE],
                    2: [6, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE]
                }
            },
            op: {
                0: {
                    1: [4, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_FTOE],
                    2: [4, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_FTOE]
                }
            },
            ot: {
                1: {
                    1: [4, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_FTOE],
                    2: [4, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_FTOE]
                }
            },
            bx: {
                1: {
                    1: [3, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE],
                    2: [3, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE]
                }
            }
        }
          , r = {
            sc: {
                1: {
                    1: [6, 6, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_SCFTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_SC1HWin]
                },
                2: {
                    1: [4, 4, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_SCFTWin, langFont.Font_FTOE],
                    2: [4, 4, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_SC1HWin, langFont.Font_1HOE]
                },
                3: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    6: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC]
                },
                4: {
                    1: ["X", "X", ""],
                    2: ["X", "X", ""]
                },
                5: {
                    1: ["X", "X", ""],
                    2: ["X", "X", ""]
                },
                6: {
                    1: ["X", "X", ""]
                },
                7: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC],
                    6: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_WinSC]
                }
            },
            bk: {
                1: {
                    1: [6, 6, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                3: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    2: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    3: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    4: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven]
                },
                4: {
                    1: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    6: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven],
                    7: [2, 2, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                6: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                7: {
                    1: [1, 1, langFont.Font_OU],
                    2: [1, 1, langFont.Font_OU],
                    3: [1, 1, langFont.Font_OU],
                    4: [1, 1, langFont.Font_OU],
                    5: [1, 1, langFont.Font_OU],
                    6: [1, 1, langFont.Font_OU],
                    7: [1, 1, langFont.Font_OU]
                }
            },
            bb: {
                1: {
                    1: [6, 6, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HWin]
                },
                2: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OneLoses, langFont.Font_OddAndEven]
                },
                3: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OneLoses, langFont.Font_OddAndEven]
                },
                4: {
                    1: [6, 6, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundScore[2], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1], langFont.Font_BBOneRoundHit[2]]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                },
                6: {
                    1: [4, 4, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU]
                },
                7: {
                    1: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU]
                },
                8: {
                    1: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU]
                },
                9: {
                    1: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    2: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    3: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    4: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    5: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    6: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]],
                    7: [4, 4, langFont.Font_BBOneRoundScore[0], langFont.Font_BBOneRoundScore[1], langFont.Font_BBOneRoundHit[0], langFont.Font_BBOneRoundHit[1]]
                },
                10: {
                    1: [2, 2, langFont.Font_FTOU, langFont.Font_1HOU]
                }
            },
            tn: {
                1: {
                    1: [5, 5, langFont.Font_TNGameHDP, langFont.Font_TNGameOU, langFont.Font_TNGameOE, langFont.Font_TNSetHDP, langFont.Font_TNSetWin]
                },
                2: {
                    1: [4, 4, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin, langFont.Font_SetsOE],
                    2: [4, 4, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin, langFont.Font_SetsOE],
                    3: [4, 4, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin, langFont.Font_SetsOE]
                },
                3: {
                    1: [4, 4, langFont.Font_TNGameHDP, langFont.Font_TNGameOU, langFont.Font_TNSetWin, langFont.Font_TNSetHDP]
                },
                4: {
                    1: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    2: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    3: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    4: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin],
                    5: [3, 3, langFont.Font_SetsHDP, langFont.Font_SetsOU, langFont.Font_SetsWin]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            ih: {
                1: {
                    1: [3, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win]
                },
                3: {
                    1: [1, 1, langFont.Font_OU]
                },
                4: {
                    1: [2, 2, langFont.Font_FTHDP, langFont.Font_FTOU]
                }
            },
            vl: {
                1: {
                    1: [5, 5, langFont.Font_VLGameHDP, langFont.Font_VLGameOU, langFont.Font_VLGameWin, langFont.Font_VLTotalOU, langFont.Font_VLTotalOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win]
                },
                3: {
                    1: [3, 3, langFont.Font_VLGameHDP, langFont.Font_TotalHDP, langFont.Font_VLTotalOU]
                },
                4: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    6: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    7: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            bm: {
                1: {
                    1: [4, 4, langFont.Font_BMGameHDP, langFont.Font_BMGameWin, langFont.Font_BMTotalOU, langFont.Font_BMTotalOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win]
                },
                3: {
                    1: [3, 3, langFont.Font_BMGameHDP, langFont.Font_TotalHDP, langFont.Font_BMTotalOU]
                },
                4: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            es: {
                1: {
                    1: [3, 3, langFont.Font_ESGameHDP, langFont.Font_ESGameOU, langFont.Font_ESGameWin]
                },
                4: {
                    1: [2, 2, langFont.Font_ESGameHDP, langFont.Font_ESGameOU]
                }
            },
            af: {
                1: {
                    1: [6, 6, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HWin]
                },
                2: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven]
                },
                3: {
                    1: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    2: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    3: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven],
                    4: [4, 4, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_Win, langFont.Font_OddAndEven]
                },
                4: {
                    1: [4, 4, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU]
                },
                5: {
                    1: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU],
                    2: [2, 2, langFont.Font_HandicapNotAll, langFont.Font_OU]
                },
                6: {
                    1: [1, 1, langFont.Font_OU],
                    2: [1, 1, langFont.Font_OU],
                    3: [1, 1, langFont.Font_OU],
                    4: [1, 1, langFont.Font_OU],
                    5: [1, 1, langFont.Font_OU],
                    6: [1, 1, langFont.Font_OU],
                    7: [1, 1, langFont.Font_OU]
                }
            },
            pb: {
                1: {
                    1: [4, 4, langFont.Font_PBGamesHDP, langFont.Font_PBGamesOU, langFont.Font_PBGamesWin, langFont.Font_PBGamesOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                }
            },
            tt: {
                1: {
                    1: [4, 4, langFont.Font_TTGamesHDP, langFont.Font_TTGamesWin, langFont.Font_TTTotalOU, langFont.Font_TTTotalOE]
                },
                2: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                3: {
                    1: [5, 5, langFont.Font_TTGamesHDP, langFont.Font_TTGamesOU, langFont.Font_TotalHDP, langFont.Font_TTTotalOU, langFont.Font_TTTotalOE]
                },
                4: {
                    1: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    2: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    3: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    4: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    5: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    6: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven],
                    7: [3, 3, langFont.Font_HandicapNotAll, langFont.Font_OU, langFont.Font_OddAndEven]
                },
                5: {
                    1: [1, 1, langFont.Font_OU]
                }
            },
            hb: {
                1: {
                    1: [6, 6, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE]
                },
                2: {
                    1: [4, 4, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_1HHDP, langFont.Font_1HOU]
                }
            },
            wp: {
                1: {
                    1: [6, 6, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE, langFont.Font_1HHDP, langFont.Font_1HOU, langFont.Font_1HOE]
                }
            },
            op: {
                0: {
                    1: [4, 4, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_FTOE]
                }
            },
            ot: {
                1: {
                    1: [4, 4, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTWin, langFont.Font_FTOE]
                }
            },
            bx: {
                1: {
                    1: [3, 3, langFont.Font_FTHDP, langFont.Font_FTOU, langFont.Font_FTOE]
                }
            }
        }
          , a = a;
        return "mobile" === MainProperty.webDevice && (a = r),
        a[n = Tool.IsSC(n) ? Ball.sc.key : n] && a[n][t] && a[n][t][o] ? a[n][t][o] : [99, 99, []]
    },
    GetOuterKT: function(n, t, o, a, r) {
        var g = {
            sc: {
                1: {
                    1: [[6, 3, [["11001", [Args.PKPL, ["1", "2", ""]]], ["11002", [Args.BigSmallPL, ["1", "2", ""]]], ["11003", [Args.OnlyPL, ["1", "2", "3"]]], ["11101", [Args.PKPL, ["1", "2", ""]]], ["11102", [Args.BigSmallPL, ["1", "2", ""]]], ["11103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[6, 3, [["11001", [Args.PKPL, ["1", "2", ""]]], ["11002", [Args.BigSmallPL, ["1", "2", ""]]], ["11003", [Args.OnlyPL, ["1", "2", "3"]]], ["11101", [Args.PKPL, ["1", "2", ""]]], ["11102", [Args.BigSmallPL, ["1", "2", ""]]], ["11103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["11011", [Args.PKPL, ["1", "2", ""]]], ["11012", [Args.BigSmallPL, ["1", "2", ""]]], ["11013", [Args.OnlyPL, ["1", "2", "3"]]], ["11014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["11111", [Args.PKPL, ["1", "2", ""]]], ["11112", [Args.BigSmallPL, ["1", "2", ""]]], ["11113", [Args.OnlyPL, ["1", "2", "3"]]], ["11114", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[2, 1, [["11201,11202,11203#11221,11222,11223#11241,11242,11243", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["11211,11212,11213#11231,11232,11233#11251,11252,11253", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    2: [[2, 1, [["11301,11302,11303#11321,11322,11323#11341,11342,11343", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["11311,11312,11313#11331,11332,11333#11351,11352,11353", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    3: [[2, 1, [["11401,11402,11403#11421,11422,11423#11441,11442,11443", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["11411,11412,11413#11431,11432,11433#11451,11452,11453", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]]
                },
                4: {
                    1: [[1, 1, [["11061", [Args.OnlyPL, [["10", "01"], ["20", "02"], ["21", "12"], ["30", "03"], ["31", "13"], ["32", "23"], ["40", "04"], ["41", "14"], ["42", "24"], ["43", "34"], ["00"], ["11"], ["22"], ["33"], ["44"], ["99"]]]]]]],
                    2: [[1, 1, [["11161", [Args.OnlyPL, [["10", "01"], ["20", "02"], ["21", "12"], ["30", "03"], ["31", "13"], ["32", "23"], ["00"], ["11"], ["22"], ["33"], ["99"]]]]]]]
                },
                5: {
                    1: [[99, 99, [["11062", [Args.OnlyPL, ["01", "23", "46", "79"]]], ["11162", [Args.OnlyPL, ["0", "1", "2", "3"]]]]]]
                },
                6: {
                    1: [[99, 99, [["11063", [Args.OnlyPL, r ? ["11", "13", "12", "31", "33", "32", "21", "23", "22"] : ["22", "23", "21", "32", "33", "31", "12", "13", "11"]]]]]]
                },
                7: {
                    1: [[3, 3, [["11201,11202,11203", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["11211,11212,11213", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["11221,11222,11223", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["11231,11232,11233", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["11241,11242,11243", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["11251,11252,11253", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]]
                }
            },
            eu: {
                1: {
                    1: [[6, 3, [["26001", [Args.PKPL, ["1", "2", ""]]], ["26002", [Args.BigSmallPL, ["1", "2", ""]]], ["26003", [Args.OnlyPL, ["1", "2", "3"]]], ["26101", [Args.PKPL, ["1", "2", ""]]], ["26102", [Args.BigSmallPL, ["1", "2", ""]]], ["26103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[6, 3, [["26001", [Args.PKPL, ["1", "2", ""]]], ["26002", [Args.BigSmallPL, ["1", "2", ""]]], ["26003", [Args.OnlyPL, ["1", "2", "3"]]], ["26101", [Args.PKPL, ["1", "2", ""]]], ["26102", [Args.BigSmallPL, ["1", "2", ""]]], ["26103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["26011", [Args.PKPL, ["1", "2", ""]]], ["26012", [Args.BigSmallPL, ["1", "2", ""]]], ["26013", [Args.OnlyPL, ["1", "2", "3"]]], ["26014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["26111", [Args.PKPL, ["1", "2", ""]]], ["26112", [Args.BigSmallPL, ["1", "2", ""]]], ["26113", [Args.OnlyPL, ["1", "2", "3"]]], ["26114", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[2, 1, [["26201,26202,26203#26221,26222,26223#26241,26242,26243", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["26211,26212,26213#26231,26232,26233#26251,26252,26253", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    2: [[2, 1, [["26301,26302,26303#26321,26322,26323#26341,26342,26343", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["26311,26312,26313#26331,26332,26333#26351,26352,26353", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    3: [[2, 1, [["26401,26402,26403#26421,26422,26423#26441,26442,26443", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["26411,26412,26413#26431,26432,26433#26451,26452,26453", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]]
                },
                4: {
                    1: [[1, 1, [["26061", [Args.OnlyPL, [["10", "01"], ["20", "02"], ["21", "12"], ["30", "03"], ["31", "13"], ["32", "23"], ["40", "04"], ["41", "14"], ["42", "24"], ["43", "34"], ["00"], ["11"], ["22"], ["33"], ["44"], ["99"]]]]]]],
                    2: [[1, 1, [["26161", [Args.OnlyPL, [["10", "01"], ["20", "02"], ["21", "12"], ["30", "03"], ["31", "13"], ["32", "23"], ["00"], ["11"], ["22"], ["33"], ["99"]]]]]]]
                },
                5: {
                    1: [[99, 99, [["26062", [Args.OnlyPL, ["01", "23", "46", "79"]]], ["26162", [Args.OnlyPL, ["0", "1", "2", "3"]]]]]]
                },
                6: {
                    1: [[99, 99, [["26063", [Args.OnlyPL, r ? ["11", "13", "12", "31", "33", "32", "21", "23", "22"] : ["22", "23", "21", "32", "33", "31", "12", "13", "11"]]]]]]
                },
                7: {
                    1: [[3, 3, [["26201,26202,26203", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["26211,26212,26213", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["26221,26222,26223", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["26231,26232,26233", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["26241,26242,26243", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["26251,26252,26253", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]]
                }
            },
            wd: {
                1: {
                    1: [[6, 3, [["27001", [Args.PKPL, ["1", "2", ""]]], ["27002", [Args.BigSmallPL, ["1", "2", ""]]], ["27003", [Args.OnlyPL, ["1", "2", "3"]]], ["27101", [Args.PKPL, ["1", "2", ""]]], ["27102", [Args.BigSmallPL, ["1", "2", ""]]], ["27103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[6, 3, [["27001", [Args.PKPL, ["1", "2", ""]]], ["27002", [Args.BigSmallPL, ["1", "2", ""]]], ["27003", [Args.OnlyPL, ["1", "2", "3"]]], ["27101", [Args.PKPL, ["1", "2", ""]]], ["27102", [Args.BigSmallPL, ["1", "2", ""]]], ["27103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["27011", [Args.PKPL, ["1", "2", ""]]], ["27012", [Args.BigSmallPL, ["1", "2", ""]]], ["27013", [Args.OnlyPL, ["1", "2", "3"]]], ["27014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["27111", [Args.PKPL, ["1", "2", ""]]], ["27112", [Args.BigSmallPL, ["1", "2", ""]]], ["27113", [Args.OnlyPL, ["1", "2", "3"]]], ["27114", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[2, 1, [["27201,27202,27203#27221,27222,27223#27241,27242,27243", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["27211,27212,27213#27231,27232,27233#27251,27252,27253", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    2: [[2, 1, [["27301,27302,27303#27321,27322,27323#27341,27342,27343", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["27311,27312,27313#27331,27332,27333#27351,27352,27353", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    3: [[2, 1, [["27401,27402,27403#27421,27422,27423#27441,27442,27443", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]], ["27411,27412,27413#27431,27432,27433#27451,27452,27453", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]]
                },
                4: {
                    1: [[1, 1, [["27061", [Args.OnlyPL, [["10", "01"], ["20", "02"], ["21", "12"], ["30", "03"], ["31", "13"], ["32", "23"], ["40", "04"], ["41", "14"], ["42", "24"], ["43", "34"], ["00"], ["11"], ["22"], ["33"], ["44"], ["99"]]]]]]],
                    2: [[1, 1, [["27161", [Args.OnlyPL, [["10", "01"], ["20", "02"], ["21", "12"], ["30", "03"], ["31", "13"], ["32", "23"], ["00"], ["11"], ["22"], ["33"], ["99"]]]]]]]
                },
                5: {
                    1: [[99, 99, [["27062", [Args.OnlyPL, ["01", "23", "46", "79"]]], ["27162", [Args.OnlyPL, ["0", "1", "2", "3"]]]]]]
                },
                6: {
                    1: [[99, 99, [["27063", [Args.OnlyPL, r ? ["11", "13", "12", "31", "33", "32", "21", "23", "22"] : ["22", "23", "21", "32", "33", "31", "12", "13", "11"]]]]]]
                },
                7: {
                    1: [[3, 3, [["27201,27202,27203", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["27211,27212,27213", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["27221,27222,27223", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["27231,27232,27233", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["27241,27242,27243", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["27251,27252,27253", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]]
                }
            },
            bk: {
                1: {
                    1: [[6, 3, [["12001", [Args.PKPL, ["1", "2", ""]]], ["12002", [Args.BigSmallPL, ["1", "2", ""]]], ["12004", [Args.OddPairPL, ["1", "2", ""]]], ["12101", [Args.PKPL, ["1", "2", ""]]], ["12102", [Args.BigSmallPL, ["1", "2", ""]]], ["12104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[6, 3, [["12001", [Args.PKPL, ["1", "2", ""]]], ["12002", [Args.BigSmallPL, ["1", "2", ""]]], ["12004", [Args.OddPairPL, ["1", "2", ""]]], ["12101", [Args.PKPL, ["1", "2", ""]]], ["12102", [Args.BigSmallPL, ["1", "2", ""]]], ["12104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["12201", [Args.PKPL, ["1", "2", ""]]], ["12202", [Args.BigSmallPL, ["1", "2", ""]]], ["12204", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[1, 1, [["12301,12302,12303,12304#12401,12402,12403,12404#12501,12502,12503,12504#12601,12602,12603,12604", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[4, 4, [["12301", [Args.PKPL, ["1", "2", ""]]], ["12302", [Args.BigSmallPL, ["1", "2", ""]]], ["12303", [Args.OnlyPL, ["1", "2", "3"]]], ["12304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["12401", [Args.PKPL, ["1", "2", ""]]], ["12402", [Args.BigSmallPL, ["1", "2", ""]]], ["12403", [Args.OnlyPL, ["1", "2", "3"]]], ["12404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[4, 4, [["12501", [Args.PKPL, ["1", "2", ""]]], ["12502", [Args.BigSmallPL, ["1", "2", ""]]], ["12503", [Args.OnlyPL, ["1", "2", "3"]]], ["12504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[4, 4, [["12601", [Args.PKPL, ["1", "2", ""]]], ["12602", [Args.BigSmallPL, ["1", "2", ""]]], ["12603", [Args.OnlyPL, ["1", "2", "3"]]], ["12604", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[2, 2, [[r ? "12005,12006#12105,12106#12205,12206#12305,12306#12405,12406#12505,12506#12605,12606" : "12007,12008#12107,12108#12207,12208#12307,12308#12407,12408#12507,12508#12607,12608", [[Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [2, 2, [[r ? "12007,12008#12107,12108#12207,12208#12307,12308#12407,12408#12507,12508#12607,12608" : "12005,12006#12105,12106#12205,12206#12305,12306#12405,12406#12505,12506#12605,12606", [[Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[2, 2, [[r ? "12005" : "12007", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12006" : "12008", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12007" : "12005", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12008" : "12006", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[2, 2, [[r ? "12105" : "12107", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12106" : "12108", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12107" : "12105", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12108" : "12106", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[2, 2, [[r ? "12205" : "12207", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12206" : "12208", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12207" : "12205", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12208" : "12206", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[2, 2, [[r ? "12305" : "12307", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12306" : "12308", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12307" : "12305", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12308" : "12306", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    6: [[2, 2, [[r ? "12405" : "12407", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12406" : "12408", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12407" : "12405", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12408" : "12406", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    7: [[2, 2, [[r ? "12505" : "12507", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12506" : "12508", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12507" : "12505", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12508" : "12506", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    8: [[2, 2, [[r ? "12605" : "12607", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12606" : "12608", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12607" : "12605", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12608" : "12606", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[3, 3, [["12301,12302,12304", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["12501,12502,12504", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[3, 3, [["12301", [Args.PKPL, ["1", "2", ""]]], ["12302", [Args.BigSmallPL, ["1", "2", ""]]], ["12304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[3, 3, [["12501", [Args.PKPL, ["1", "2", ""]]], ["12502", [Args.BigSmallPL, ["1", "2", ""]]], ["12504", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                6: {
                    1: [[3, 3, [["12701", [Args.PKPL, ["1", "2", ""]]], ["12702", [Args.BigSmallPL, ["1", "2", ""]]], ["12703", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                7: {
                    1: [[1, 1, [[r ? "12005&01#12105&01#12205&01#12305&01#12405&01#12505&01#12605&01" : "12007&01#12107&01#12207&01#12307&01#12407&01#12507&01#12607&01", [[Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]]]]]], [1, 1, [[r ? "12007&01#12107&01#12207&01#12307&01#12407&01#12507&01#12607&01" : "12005&01#12105&01#12205&01#12305&01#12405&01#12505&01#12605&01", [[Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]]]]]]]
                }
            },
            bb: {
                1: {
                    1: [[6, 3, [["13001", [Args.PKPL, ["2", "1", ""]]], ["13002", [Args.BigSmallPL, ["1", "2", ""]]], ["13003", [Args.OnlyPL, ["2", "1", ""]]], ["13051", [Args.PKPL, ["2", "1", ""]]], ["13052", [Args.BigSmallPL, ["1", "2", ""]]], ["13053", [Args.OnlyPL, ["2", "1", ""]]]]]],
                    2: [[6, 3, [["13001", [Args.PKPL, ["2", "1", ""]]], ["13002", [Args.BigSmallPL, ["1", "2", ""]]], ["13003", [Args.OnlyPL, ["2", "1", ""]]], ["13051", [Args.PKPL, ["2", "1", ""]]], ["13052", [Args.BigSmallPL, ["1", "2", ""]]], ["13053", [Args.OnlyPL, ["2", "1", ""]]]]]]
                },
                2: {
                    1: [[4, 4, [["13031", [Args.PKPL, ["2", "1", ""]]], ["13032", [Args.BigSmallPL, ["1", "2", ""]]], ["13035", [Args.PKPL, ["2", "1", ""]]], ["13034", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[4, 4, [["13071", [Args.PKPL, ["2", "1", ""]]], ["13072", [Args.BigSmallPL, ["1", "2", ""]]], ["13075", [Args.PKPL, ["2", "1", ""]]], ["13074", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[6, 6, [["13111", [Args.PKPL, ["2", "1", ""]]], ["13112", [Args.BigSmallPL, ["1", "2", ""]]], ["13113", [Args.OnlyPL, ["2", "1", ""]]], ["13211", [Args.PKPL, ["2", "1", ""]]], ["13212", [Args.BigSmallPL, ["1", "2", ""]]], ["13213", [Args.OnlyPL, ["2", "1", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "13007" : "13006", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "13006" : "13007", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                6: {
                    1: [[4, 2, [["13001", [Args.PKPL, ["2", "1", ""]]], ["13002", [Args.BigSmallPL, ["1", "2", ""]]], ["13051", [Args.PKPL, ["2", "1", ""]]], ["13052", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[4, 2, [["13001", [Args.PKPL, ["2", "1", ""]]], ["13002", [Args.BigSmallPL, ["1", "2", ""]]], ["13051", [Args.PKPL, ["2", "1", ""]]], ["13052", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                7: {
                    1: [[2, 2, [["13031", [Args.PKPL, ["2", "1", ""]]], ["13032", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                8: {
                    1: [[2, 2, [["13071", [Args.PKPL, ["2", "1", ""]]], ["13072", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                9: {
                    1: [[2, 2, [["13121,13122,13221,13222", [[Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]], [2, 2, [["13131,13132,13231,13232", [[Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]], [2, 2, [["13141,13142,13241,13242", [[Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]], [2, 2, [["13151,13152,13251,13252", [[Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]], [2, 2, [["13161,13162,13261,13262", [[Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]], [2, 2, [["13171,13172,13271,13272", [[Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]], [2, 2, [["13181,13182,13281,13282", [[Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.PKPL, ["2", "1", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]]],
                    2: [[4, 4, [["13121", [Args.PKPL, ["2", "1", ""]]], ["13122", [Args.BigSmallPL, ["1", "2", ""]]], ["13221", [Args.PKPL, ["2", "1", ""]]], ["13222", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["13131", [Args.PKPL, ["2", "1", ""]]], ["13132", [Args.BigSmallPL, ["1", "2", ""]]], ["13231", [Args.PKPL, ["2", "1", ""]]], ["13232", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    4: [[4, 4, [["13141", [Args.PKPL, ["2", "1", ""]]], ["13142", [Args.BigSmallPL, ["1", "2", ""]]], ["13241", [Args.PKPL, ["2", "1", ""]]], ["13242", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    5: [[4, 4, [["13151", [Args.PKPL, ["2", "1", ""]]], ["13152", [Args.BigSmallPL, ["1", "2", ""]]], ["13251", [Args.PKPL, ["2", "1", ""]]], ["13252", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    6: [[4, 4, [["13161", [Args.PKPL, ["2", "1", ""]]], ["13162", [Args.BigSmallPL, ["1", "2", ""]]], ["13261", [Args.PKPL, ["2", "1", ""]]], ["13262", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    7: [[4, 4, [["13171", [Args.PKPL, ["2", "1", ""]]], ["13172", [Args.BigSmallPL, ["1", "2", ""]]], ["13271", [Args.PKPL, ["2", "1", ""]]], ["13272", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    8: [[4, 4, [["13181", [Args.PKPL, ["2", "1", ""]]], ["13182", [Args.BigSmallPL, ["1", "2", ""]]], ["13281", [Args.PKPL, ["2", "1", ""]]], ["13282", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                10: {
                    1: [[2, 2, [[r ? "13007" : "13006", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "13057" : "13056", [Args.BigSmallPL, ["1", "2", ""]]]]], [2, 2, [[r ? "13006" : "13007", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "13056" : "13057", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            tn: {
                1: {
                    1: [[5, 3, [["14001", [Args.PKPL, ["1", "2", ""]]], ["14002", [Args.BigSmallPL, ["1", "2", ""]]], ["14004", [Args.OddPairPL, ["1", "2", ""]]], ["14011", [Args.PKPL, ["1", "2", ""]]], ["14013", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[5, 3, [["14001", [Args.PKPL, ["1", "2", ""]]], ["14002", [Args.BigSmallPL, ["1", "2", ""]]], ["14004", [Args.OddPairPL, ["1", "2", ""]]], ["14011", [Args.PKPL, ["1", "2", ""]]], ["14013", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[1, 1, [["14101,14102,14103,14104#14201,14202,14203,14204#14301,14302,14303,14304", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[4, 4, [["14101", [Args.PKPL, ["1", "2", ""]]], ["14102", [Args.BigSmallPL, ["1", "2", ""]]], ["14103", [Args.OnlyPL, ["1", "2", "3"]]], ["14104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["14201", [Args.PKPL, ["1", "2", ""]]], ["14202", [Args.BigSmallPL, ["1", "2", ""]]], ["14203", [Args.OnlyPL, ["1", "2", "3"]]], ["14204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[4, 4, [["14301", [Args.PKPL, ["1", "2", ""]]], ["14302", [Args.BigSmallPL, ["1", "2", ""]]], ["14303", [Args.OnlyPL, ["1", "2", "3"]]], ["14304", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[4, 2, [["14001", [Args.PKPL, ["1", "2", ""]]], ["14002", [Args.BigSmallPL, ["1", "2", ""]]], ["14013", [Args.OnlyPL, ["1", "2", "3"]]], ["14011", [Args.PKPL, ["1", "2", ""]]]]]],
                    2: [[4, 2, [["14001", [Args.PKPL, ["1", "2", ""]]], ["14002", [Args.BigSmallPL, ["1", "2", ""]]], ["14013", [Args.OnlyPL, ["1", "2", "3"]]], ["14011", [Args.PKPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["14101,14102,14103", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["14201,14202,14203", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["14301,14302,14303", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["14401,14402,14403", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]], [3, 3, [["14501,14502,14503", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    2: [[3, 3, [["14101", [Args.PKPL, ["1", "2", ""]]], ["14102", [Args.BigSmallPL, ["1", "2", ""]]], ["14103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["14201", [Args.PKPL, ["1", "2", ""]]], ["14202", [Args.BigSmallPL, ["1", "2", ""]]], ["14203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["14301", [Args.PKPL, ["1", "2", ""]]], ["14302", [Args.BigSmallPL, ["1", "2", ""]]], ["14303", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["14401", [Args.PKPL, ["1", "2", ""]]], ["14402", [Args.BigSmallPL, ["1", "2", ""]]], ["14403", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    6: [[3, 3, [["14501", [Args.PKPL, ["1", "2", ""]]], ["14502", [Args.BigSmallPL, ["1", "2", ""]]], ["14503", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "14005" : "14006", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "14006" : "14005", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            ih: {
                1: {
                    1: [[3, 3, [["15001", [Args.PKPL, ["1", "2", ""]]], ["15002", [Args.BigSmallPL, ["1", "2", ""]]], ["15004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[1, 1, [["15101,15102,15103#15201,15202,15203#15301,15302,15303", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]]]]]]],
                    2: [[4, 4, [["15101", [Args.PKPL, ["1", "2", ""]]], ["15102", [Args.BigSmallPL, ["1", "2", ""]]], ["15103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[4, 4, [["15201", [Args.PKPL, ["1", "2", ""]]], ["15202", [Args.BigSmallPL, ["1", "2", ""]]], ["15203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[4, 4, [["15301", [Args.PKPL, ["1", "2", ""]]], ["15302", [Args.BigSmallPL, ["1", "2", ""]]], ["15303", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                3: {
                    1: [[1, 1, [[r ? "15006" : "15007", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "15007" : "15006", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[2, 2, [["15001", [Args.PKPL, ["1", "2", ""]]], ["15002", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            vl: {
                1: {
                    1: [[5, 3, [["16001", [Args.PKPL, ["1", "2", ""]]], ["16002", [Args.BigSmallPL, ["1", "2", ""]]], ["16003", [Args.OnlyPL, ["1", "2", "3"]]], ["16012", [Args.BigSmallPL, ["1", "2", ""]]], ["16014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[5, 3, [["16001", [Args.PKPL, ["1", "2", ""]]], ["16002", [Args.BigSmallPL, ["1", "2", ""]]], ["16003", [Args.OnlyPL, ["1", "2", "3"]]], ["16012", [Args.BigSmallPL, ["1", "2", ""]]], ["16014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["16101", [Args.PKPL, ["1", "2", ""]]], ["16102", [Args.BigSmallPL, ["1", "2", ""]]], ["16103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                3: {
                    1: [[3, 1, [["16001", [Args.PKPL, ["1", "2", ""]]], ["16011", [Args.PKPL, ["1", "2", ""]]], ["16012", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[3, 1, [["16001", [Args.PKPL, ["1", "2", ""]]], ["16011", [Args.PKPL, ["1", "2", ""]]], ["16012", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["16101,16102,16104", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["16201,16202,16204", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["16301,16302,16304", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["16401,16402,16404", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["16501,16502,16504", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["16601,16602,16604", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["16701,16702,16704", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[3, 3, [["16101", [Args.PKPL, ["1", "2", ""]]], ["16102", [Args.BigSmallPL, ["1", "2", ""]]], ["16104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[3, 3, [["16201", [Args.PKPL, ["1", "2", ""]]], ["16202", [Args.BigSmallPL, ["1", "2", ""]]], ["16204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[3, 3, [["16301", [Args.PKPL, ["1", "2", ""]]], ["16302", [Args.BigSmallPL, ["1", "2", ""]]], ["16304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[3, 3, [["16401", [Args.PKPL, ["1", "2", ""]]], ["16402", [Args.BigSmallPL, ["1", "2", ""]]], ["16404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    6: [[3, 3, [["16501", [Args.PKPL, ["1", "2", ""]]], ["16502", [Args.BigSmallPL, ["1", "2", ""]]], ["16504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    7: [[3, 3, [["16601", [Args.PKPL, ["1", "2", ""]]], ["16602", [Args.BigSmallPL, ["1", "2", ""]]], ["16604", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    8: [[3, 3, [["16701", [Args.PKPL, ["1", "2", ""]]], ["16702", [Args.BigSmallPL, ["1", "2", ""]]], ["16704", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "16015" : "16016", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "16016" : "16015", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            bm: {
                1: {
                    1: [[4, 2, [["17001", [Args.PKPL, ["1", "2", ""]]], ["17003", [Args.OnlyPL, ["1", "2", "3"]]], ["17012", [Args.BigSmallPL, ["1", "2", ""]]], ["17014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 2, [["17001", [Args.PKPL, ["1", "2", ""]]], ["17003", [Args.OnlyPL, ["1", "2", "3"]]], ["17012", [Args.BigSmallPL, ["1", "2", ""]]], ["17014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["17101", [Args.PKPL, ["1", "2", ""]]], ["17102", [Args.BigSmallPL, ["1", "2", ""]]], ["17103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                3: {
                    1: [[3, 1, [["17001", [Args.PKPL, ["1", "2", ""]]], ["17011", [Args.PKPL, ["1", "2", ""]]], ["17012", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[3, 1, [["17001", [Args.PKPL, ["1", "2", ""]]], ["17011", [Args.PKPL, ["1", "2", ""]]], ["17012", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["17101,17102,17104", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["17201,17202,17204", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["17301,17302,17304", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["17401,17402,17404", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["17501,17502,17504", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[3, 3, [["17101", [Args.PKPL, ["1", "2", ""]]], ["17102", [Args.BigSmallPL, ["1", "2", ""]]], ["17104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[3, 3, [["17201", [Args.PKPL, ["1", "2", ""]]], ["17202", [Args.BigSmallPL, ["1", "2", ""]]], ["17204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[3, 3, [["17301", [Args.PKPL, ["1", "2", ""]]], ["17302", [Args.BigSmallPL, ["1", "2", ""]]], ["17304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[3, 3, [["17401", [Args.PKPL, ["1", "2", ""]]], ["17402", [Args.BigSmallPL, ["1", "2", ""]]], ["17404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    6: [[3, 3, [["17501", [Args.PKPL, ["1", "2", ""]]], ["17502", [Args.BigSmallPL, ["1", "2", ""]]], ["17504", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "17015" : "17016", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "17016" : "17015", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            es: {
                1: {
                    1: [[3, 3, [["180001", [Args.PKPL, ["1", "2", ""]]], ["180002", [Args.BigSmallPL, ["1", "2", ""]]], ["180003", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[1, 1, [["180101&01#180181&01#180182&05#180182&10#180182&15#180182&20#180178&01#180178&02#180178&03#180179&01#180179&02#180179&03#180180&01#180180&02#180180&03#180171&01#180171&02#180171&03#180172&01#180172&02#180172&03#180173&01#180173&02#180173&03#180174&01#180174&02#180174&03#180175&01#180175&02#180175&03#180176&01#180176&02#180176&03#180177&01#180177&02#180177&03#180191&01#180183&01#180183&16#180184&05#180185&01#180186&01", [[Args.PKPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["101", "102"]], [Args.PKPL, ["151", "152"]], [Args.PKPL, ["201", "202"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.BigSmallPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["161", "162"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["011", "012"]]]]]]],
                    2: [[1, 1, [["180201&01#180281&01#180282&05#180282&10#180282&15#180282&20#180278&01#180278&02#180278&03#180279&01#180279&02#180279&03#180280&01#180280&02#180280&03#180271&01#180271&02#180271&03#180272&01#180272&02#180272&03#180273&01#180273&02#180273&03#180274&01#180274&02#180274&03#180275&01#180275&02#180275&03#180276&01#180276&02#180276&03#180277&01#180277&02#180277&03#180291&01#180283&01#180283&16#180284&05#180285&01#180286&01", [[Args.PKPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["101", "102"]], [Args.PKPL, ["151", "152"]], [Args.PKPL, ["201", "202"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.BigSmallPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["161", "162"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["011", "012"]]]]]]],
                    3: [[1, 1, [["180301&01#180381&01#180382&05#180382&10#180382&15#180382&20#180378&01#180378&02#180378&03#180379&01#180379&02#180379&03#180380&01#180380&02#180380&03#180371&01#180371&02#180371&03#180372&01#180372&02#180372&03#180373&01#180373&02#180373&03#180374&01#180374&02#180374&03#180375&01#180375&02#180375&03#180376&01#180376&02#180376&03#180377&01#180377&02#180377&03#180391&01#180383&01#180383&16#180384&05#180385&01#180386&01", [[Args.PKPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["101", "102"]], [Args.PKPL, ["151", "152"]], [Args.PKPL, ["201", "202"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.BigSmallPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["161", "162"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["011", "012"]]]]]]],
                    4: [[1, 1, [["180401&01#180481&01#180482&05#180482&10#180482&15#180482&20#180478&01#180478&02#180478&03#180479&01#180479&02#180479&03#180480&01#180480&02#180480&03#180471&01#180471&02#180471&03#180472&01#180472&02#180472&03#180473&01#180473&02#180473&03#180474&01#180474&02#180474&03#180475&01#180475&02#180475&03#180476&01#180476&02#180476&03#180477&01#180477&02#180477&03#180491&01#180483&01#180483&16#180484&05#180485&01#180486&01", [[Args.PKPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["101", "102"]], [Args.PKPL, ["151", "152"]], [Args.PKPL, ["201", "202"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.BigSmallPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["161", "162"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["011", "012"]]]]]]],
                    5: [[1, 1, [["180501&01#180581&01#180582&05#180582&10#180582&15#180582&20#180578&01#180578&02#180578&03#180579&01#180579&02#180579&03#180580&01#180580&02#180580&03#180571&01#180571&02#180571&03#180572&01#180572&02#180572&03#180573&01#180573&02#180573&03#180574&01#180574&02#180574&03#180575&01#180575&02#180575&03#180576&01#180576&02#180576&03#180577&01#180577&02#180577&03#180591&01#180583&01#180583&16#180584&05#180585&01#180586&01", [[Args.PKPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["101", "102"]], [Args.PKPL, ["151", "152"]], [Args.PKPL, ["201", "202"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.BigSmallPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["161", "162"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["011", "012"]]]]]]],
                    6: [[1, 1, [["180601&01#180681&01#180682&05#180682&10#180682&15#180682&20#180678&01#180678&02#180678&03#180679&01#180679&02#180679&03#180680&01#180680&02#180680&03#180671&01#180671&02#180671&03#180672&01#180672&02#180672&03#180673&01#180673&02#180673&03#180674&01#180674&02#180674&03#180675&01#180675&02#180675&03#180676&01#180676&02#180676&03#180677&01#180677&02#180677&03#180691&01#180683&01#180683&16#180684&05#180685&01#180686&01", [[Args.PKPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["101", "102"]], [Args.PKPL, ["151", "152"]], [Args.PKPL, ["201", "202"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.BigSmallPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["161", "162"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["011", "012"]]]]]]],
                    7: [[1, 1, [["180701&01#180781&01#180782&05#180782&10#180782&15#180782&20#180778&01#180778&02#180778&03#180779&01#180779&02#180779&03#180780&01#180780&02#180780&03#180771&01#180771&02#180771&03#180772&01#180772&02#180772&03#180773&01#180773&02#180773&03#180774&01#180774&02#180774&03#180775&01#180775&02#180775&03#180776&01#180776&02#180776&03#180777&01#180777&02#180777&03#180791&01#180783&01#180783&16#180784&05#180785&01#180786&01", [[Args.PKPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["101", "102"]], [Args.PKPL, ["151", "152"]], [Args.PKPL, ["201", "202"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["021", "022"]], [Args.PKPL, ["031", "032"]], [Args.BigSmallPL, ["1", "2"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["161", "162"]], [Args.PKPL, ["051", "052"]], [Args.PKPL, ["011", "012"]], [Args.PKPL, ["011", "012"]]]]]]]
                },
                3: {
                    1: [[3, 3, [["180105,180106,180108#180109,180110,180112#180113,180114,180116#180117,180118,180120#180121,180122,180124#180125,180126,180128#180129,180130,180132#180133,180134,180136#180137,180138,180140#180141,180142,180144#180145,180146,180148#180149,180150,180152#180153,180154,180156", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[3, 3, [["180205,180206,180208#180209,180210,180212#180213,180214,180216#180217,180218,180220#180221,180222,180224#180225,180226,180228#180229,180230,180232#180233,180234,180236#180237,180238,180240#180241,180242,180244#180245,180246,180248#180249,180250,180252#180253,180254,180256", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    3: [[3, 3, [["180305,180306,180308#180309,180310,180312#180313,180314,180316#180317,180318,180320#180321,180322,180324#180325,180326,180328#180329,180330,180332#180333,180334,180336#180337,180338,180340#180341,180342,180344#180345,180346,180348#180349,180350,180352#180353,180354,180356", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    4: [[3, 3, [["180405,180406,180408#180409,180410,180412#180413,180414,180416#180417,180418,180420#180421,180422,180424#180425,180426,180428#180429,180430,180432#180433,180434,180436#180437,180438,180440#180441,180442,180444#180445,180446,180448#180449,180450,180452#180453,180454,180456", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    5: [[3, 3, [["180505,180506,180508#180509,180510,180512#180513,180514,180516#180517,180518,180520#180521,180522,180524#180525,180526,180528#180529,180530,180532#180533,180534,180536#180537,180538,180540#180541,180542,180544#180545,180546,180548#180549,180550,180552#180553,180554,180556", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    6: [[3, 3, [["180605,180606,180608#180609,180610,180612#180613,180614,180616#180617,180618,180620#180621,180622,180624#180625,180626,180628#180629,180630,180632#180633,180634,180636#180637,180638,180640#180641,180642,180644#180645,180646,180648#180649,180650,180652#180653,180654,180656", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    7: [[3, 3, [["180705,180706,180708#180709,180710,180712#180713,180714,180716#180717,180718,180720#180721,180722,180724#180725,180726,180728#180729,180730,180732#180733,180734,180736#180737,180738,180740#180741,180742,180744#180745,180746,180748#180749,180750,180752#180753,180754,180756", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]], [Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    8: [[3, 3, [["180853,180854,180856", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    9: [[3, 3, [["180953,180954,180956", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    10: [[3, 3, [["181053,181054,181056", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    11: [[3, 3, [["181153,181154,181156", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    12: [[3, 3, [["181253,181254,181256", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    13: [[3, 3, [["181353,181354,181356", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    14: [[3, 3, [["181453,181454,181456", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    15: [[3, 3, [["181553,181554,181556", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]]
                },
                4: {
                    1: [[2, 2, [["180001", [Args.PKPL, ["1", "2", ""]]], ["180002", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            af: {
                1: {
                    1: [[6, 3, [["19001", [Args.PKPL, ["1", "2", ""]]], ["19002", [Args.BigSmallPL, ["1", "2", ""]]], ["19003", [Args.OnlyPL, ["1", "2", "3"]]], ["19101", [Args.PKPL, ["1", "2", ""]]], ["19102", [Args.BigSmallPL, ["1", "2", ""]]], ["19103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[6, 3, [["19001", [Args.PKPL, ["1", "2", ""]]], ["19002", [Args.BigSmallPL, ["1", "2", ""]]], ["19003", [Args.OnlyPL, ["1", "2", "3"]]], ["19101", [Args.PKPL, ["1", "2", ""]]], ["19102", [Args.BigSmallPL, ["1", "2", ""]]], ["19103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["19201", [Args.PKPL, ["1", "2", ""]]], ["19202", [Args.BigSmallPL, ["1", "2", ""]]], ["19203", [Args.OnlyPL, ["1", "2", "3"]]], ["19204", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[1, 1, [["19301,19302,19303,19304#19401,19402,19403,19404#19501,19502,19503,19504#19601,19602,19603,19604", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OnlyPL, ["1", "2", "3"]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[4, 4, [["19301", [Args.PKPL, ["1", "2", ""]]], ["19302", [Args.BigSmallPL, ["1", "2", ""]]], ["19303", [Args.OnlyPL, ["1", "2", "3"]]], ["19304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["19401", [Args.PKPL, ["1", "2", ""]]], ["19402", [Args.BigSmallPL, ["1", "2", ""]]], ["19403", [Args.OnlyPL, ["1", "2", "3"]]], ["19404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[4, 4, [["19501", [Args.PKPL, ["1", "2", ""]]], ["19502", [Args.BigSmallPL, ["1", "2", ""]]], ["19503", [Args.OnlyPL, ["1", "2", "3"]]], ["19504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[4, 4, [["19601", [Args.PKPL, ["1", "2", ""]]], ["19602", [Args.BigSmallPL, ["1", "2", ""]]], ["19603", [Args.OnlyPL, ["1", "2", "3"]]], ["19604", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[4, 2, [["19001", [Args.PKPL, ["1", "2", ""]]], ["19002", [Args.BigSmallPL, ["1", "2", ""]]], ["19101", [Args.PKPL, ["1", "2", ""]]], ["19102", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[4, 2, [["19001", [Args.PKPL, ["1", "2", ""]]], ["19002", [Args.BigSmallPL, ["1", "2", ""]]], ["19101", [Args.PKPL, ["1", "2", ""]]], ["19102", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[2, 2, [["19301,19302", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]], [2, 2, [["19501,19502", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]]]]]]],
                    2: [[2, 2, [["19301", [Args.PKPL, ["1", "2", ""]]], ["19302", [Args.PKPL, ["1", "2", ""]]]]]],
                    3: [[2, 2, [["19501", [Args.PKPL, ["1", "2", ""]]], ["19502", [Args.PKPL, ["1", "2", ""]]]]]]
                },
                6: {
                    1: [[1, 1, [[r ? "19005&01#19105&01#19205&01#19305&01#19405&01#19505&01#19605&01" : "19007&01#19107&01#19207&01#19307&01#19407&01#19507&01#19607&01", [[Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]]]]]], [1, 1, [[r ? "19007&01#19107&01#19207&01#19307&01#19407&01#19507&01#19607&01" : "19005&01#19105&01#19205&01#19305&01#19405&01#19505&01#19605&01", [[Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]], [Args.BigSmallPL, ["1", "2"]]]]]]]
                }
            },
            pb: {
                1: {
                    1: [[4, 3, [["20001", [Args.PKPL, ["1", "2", ""]]], ["20002", [Args.BigSmallPL, ["1", "2", ""]]], ["20003", [Args.OnlyPL, ["1", "2", "3"]]], ["20004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["20101", [Args.PKPL, ["1", "2", ""]]], ["20102", [Args.BigSmallPL, ["1", "2", ""]]], ["20104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            tt: {
                1: {
                    1: [[4, 2, [["21001", [Args.PKPL, ["1", "2", ""]]], ["21003", [Args.OnlyPL, ["1", "2", "3"]]], ["21012", [Args.BigSmallPL, ["1", "2", ""]]], ["21014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 2, [["21001", [Args.PKPL, ["1", "2", ""]]], ["21003", [Args.OnlyPL, ["1", "2", "3"]]], ["21012", [Args.BigSmallPL, ["1", "2", ""]]], ["21014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["21101", [Args.PKPL, ["1", "2", ""]]], ["21102", [Args.BigSmallPL, ["1", "2", ""]]], ["21104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[5, 2, [["21001", [Args.PKPL, ["1", "2", ""]]], ["21002", [Args.BigSmallPL, ["1", "2", ""]]], ["21011", [Args.PKPL, ["1", "2", ""]]], ["21012", [Args.BigSmallPL, ["1", "2", ""]]], ["21014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[5, 2, [["21001", [Args.PKPL, ["1", "2", ""]]], ["21002", [Args.BigSmallPL, ["1", "2", ""]]], ["21011", [Args.PKPL, ["1", "2", ""]]], ["21012", [Args.BigSmallPL, ["1", "2", ""]]], ["21014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["21101,21102,21104", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["21201,21202,21204", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["21301,21302,21304", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["21401,21402,21404", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["21501,21502,21504", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["21601,21602,21604", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]], [3, 3, [["21701,21702,21704", [[Args.PKPL, ["1", "2", ""]], [Args.BigSmallPL, ["1", "2", ""]], [Args.OddPairPL, ["1", "2", ""]]]]]]],
                    2: [[3, 3, [["21101", [Args.PKPL, ["1", "2", ""]]], ["21102", [Args.BigSmallPL, ["1", "2", ""]]], ["21104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[3, 3, [["21201", [Args.PKPL, ["1", "2", ""]]], ["21202", [Args.BigSmallPL, ["1", "2", ""]]], ["21204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[3, 3, [["21301", [Args.PKPL, ["1", "2", ""]]], ["21302", [Args.BigSmallPL, ["1", "2", ""]]], ["21304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[3, 3, [["21401", [Args.PKPL, ["1", "2", ""]]], ["21402", [Args.BigSmallPL, ["1", "2", ""]]], ["21404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    6: [[3, 3, [["21501", [Args.PKPL, ["1", "2", ""]]], ["21502", [Args.BigSmallPL, ["1", "2", ""]]], ["21504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    7: [[3, 3, [["21601", [Args.PKPL, ["1", "2", ""]]], ["21602", [Args.BigSmallPL, ["1", "2", ""]]], ["21604", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    8: [[3, 3, [["21701", [Args.PKPL, ["1", "2", ""]]], ["21702", [Args.BigSmallPL, ["1", "2", ""]]], ["21704", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "21015" : "21016", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "21016" : "21015", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            hb: {
                1: {
                    1: [[6, 3, [["22001", [Args.PKPL, ["1", "2", ""]]], ["22002", [Args.BigSmallPL, ["1", "2", ""]]], ["22004", [Args.OddPairPL, ["1", "2", ""]]], ["22101", [Args.PKPL, ["1", "2", ""]]], ["22102", [Args.BigSmallPL, ["1", "2", ""]]], ["22104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[6, 3, [["22001", [Args.PKPL, ["1", "2", ""]]], ["22002", [Args.BigSmallPL, ["1", "2", ""]]], ["22004", [Args.OddPairPL, ["1", "2", ""]]], ["22101", [Args.PKPL, ["1", "2", ""]]], ["22102", [Args.BigSmallPL, ["1", "2", ""]]], ["22104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[4, 2, [["22001", [Args.PKPL, ["1", "2", ""]]], ["22002", [Args.BigSmallPL, ["1", "2", ""]]], ["22101", [Args.PKPL, ["1", "2", ""]]], ["22102", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[4, 2, [["22001", [Args.PKPL, ["1", "2", ""]]], ["22002", [Args.BigSmallPL, ["1", "2", ""]]], ["22101", [Args.PKPL, ["1", "2", ""]]], ["22102", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            wp: {
                1: {
                    1: [[6, 3, [["23001", [Args.PKPL, ["1", "2", ""]]], ["23002", [Args.BigSmallPL, ["1", "2", ""]]], ["23004", [Args.OddPairPL, ["1", "2", ""]]], ["23101", [Args.PKPL, ["1", "2", ""]]], ["23102", [Args.BigSmallPL, ["1", "2", ""]]], ["23104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[6, 3, [["23001", [Args.PKPL, ["1", "2", ""]]], ["23002", [Args.BigSmallPL, ["1", "2", ""]]], ["23004", [Args.OddPairPL, ["1", "2", ""]]], ["23101", [Args.PKPL, ["1", "2", ""]]], ["23102", [Args.BigSmallPL, ["1", "2", ""]]], ["23104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            op: {
                0: {
                    1: [[4, 3, [["24001", [Args.PKPL, ["1", "2", ""]]], ["24002", [Args.BigSmallPL, ["1", "2", ""]]], ["24003", [Args.OnlyPL, ["1", "2", ""]]], ["24004", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 3, [["24001", [Args.PKPL, ["1", "2", ""]]], ["24002", [Args.BigSmallPL, ["1", "2", ""]]], ["24003", [Args.OnlyPL, ["1", "2", ""]]], ["24004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            ot: {
                1: {
                    1: [[4, 3, [["24001", [Args.PKPL, ["1", "2", ""]]], ["24002", [Args.BigSmallPL, ["1", "2", ""]]], ["24003", [Args.OnlyPL, ["1", "2", ""]]], ["24004", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 3, [["24001", [Args.PKPL, ["1", "2", ""]]], ["24002", [Args.BigSmallPL, ["1", "2", ""]]], ["24003", [Args.OnlyPL, ["1", "2", ""]]], ["24004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            bx: {
                1: {
                    1: [[3, 3, [["28001", [Args.PKPL, ["1", "2", ""]]], ["28002", [Args.BigSmallPL, ["1", "2", ""]]], ["28004", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[3, 3, [["28001", [Args.PKPL, ["1", "2", ""]]], ["28002", [Args.BigSmallPL, ["1", "2", ""]]], ["28004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            }
        }
          , r = {
            sc: {
                1: {
                    1: [[6, 6, [["11001", [Args.PKPL, ["1", "2", ""]]], ["11002", [Args.BigSmallPL, ["1", "2", ""]]], ["11003", [Args.OnlyPL, ["1", "2", "3"]]], ["11101", [Args.PKPL, ["1", "2", ""]]], ["11102", [Args.BigSmallPL, ["1", "2", ""]]], ["11103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["11011", [Args.PKPL, ["1", "2", ""]]], ["11012", [Args.BigSmallPL, ["1", "2", ""]]], ["11013", [Args.OnlyPL, ["1", "2", "3"]]], ["11014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["11111", [Args.PKPL, ["1", "2", ""]]], ["11112", [Args.BigSmallPL, ["1", "2", ""]]], ["11113", [Args.OnlyPL, ["1", "2", "3"]]], ["11114", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[3, 3, [["11201", [Args.PKPL, ["1", "2", ""]]], ["11202", [Args.BigSmallPL, ["1", "2", ""]]], ["11203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[3, 3, [["11211", [Args.PKPL, ["1", "2", ""]]], ["11212", [Args.BigSmallPL, ["1", "2", ""]]], ["11213", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["11221", [Args.PKPL, ["1", "2", ""]]], ["11222", [Args.BigSmallPL, ["1", "2", ""]]], ["11223", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["11231", [Args.PKPL, ["1", "2", ""]]], ["11232", [Args.BigSmallPL, ["1", "2", ""]]], ["11233", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["11241", [Args.PKPL, ["1", "2", ""]]], ["11242", [Args.BigSmallPL, ["1", "2", ""]]], ["11243", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    6: [[3, 3, [["11251", [Args.PKPL, ["1", "2", ""]]], ["11252", [Args.BigSmallPL, ["1", "2", ""]]], ["11253", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                4: {
                    1: [[99, 99, [["11061", [Args.OnlyPL, [[langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest], [["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], ["4:4", "44"], ["1:3", "13"]], [["3:2", "32"], [langFont.Font_Else, "99"], ["2:3", "23"]], [["4:0", "40"], [], ["0:4", "04"]], [["4:1", "41"], [], ["1:4", "14"]], [["4:2", "42"], [], ["2:4", "24"]], [["4:3", "43"], [], ["3:4", "34"]]]]]]]],
                    2: [[99, 99, [["11161", [Args.OnlyPL, [[langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest], [["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], [langFont.Font_Else, "99"], ["1:3", "13"]], [["3:2", "32"], [], ["2:3", "23"]]]]]]]]
                },
                5: {
                    1: [[99, 99, [["11062", [Args.OnlyPL, [[["0 - 1", "01"], ["2 - 3", "23"]], [["4 - 6", "46"], [langFont.Font_7orMore, "79"]]]]]]]],
                    2: [[99, 99, [["11162", [Args.OnlyPL, [[["0", "0"], ["1", "1"]], [["2", "2"], [langFont.Font_3orMore, "3"]]]]]]]]
                },
                6: {
                    1: [[99, 99, [["11063", [Args.OnlyPL, [[[langFont.Font_Home + " / " + langFont.Font_Home, r ? "11" : "22"], [langFont.Font_Home + " / " + langFont.Font_Peace, r ? "13" : "23"], [langFont.Font_Home + " / " + langFont.Font_Guest, r ? "12" : "21"]], [[langFont.Font_Peace + " / " + langFont.Font_Home, r ? "31" : "32"], [langFont.Font_Peace + " / " + langFont.Font_Peace, "33"], [langFont.Font_Peace + " / " + langFont.Font_Guest, r ? "32" : "31"]], [[langFont.Font_Guest + " / " + langFont.Font_Home, r ? "21" : "12"], [langFont.Font_Guest + " / " + langFont.Font_Peace, r ? "23" : "13"], [langFont.Font_Guest + " / " + langFont.Font_Guest, r ? "22" : "11"]]]]]]]]
                },
                7: {
                    1: [[3, 3, [["11201", [Args.PKPL, ["1", "2", ""]]], ["11202", [Args.BigSmallPL, ["1", "2", ""]]], ["11203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[3, 3, [["11211", [Args.PKPL, ["1", "2", ""]]], ["11212", [Args.BigSmallPL, ["1", "2", ""]]], ["11213", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["11221", [Args.PKPL, ["1", "2", ""]]], ["11222", [Args.BigSmallPL, ["1", "2", ""]]], ["11223", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["11231", [Args.PKPL, ["1", "2", ""]]], ["11232", [Args.BigSmallPL, ["1", "2", ""]]], ["11233", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["11241", [Args.PKPL, ["1", "2", ""]]], ["11242", [Args.BigSmallPL, ["1", "2", ""]]], ["11243", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    6: [[3, 3, [["11251", [Args.PKPL, ["1", "2", ""]]], ["11252", [Args.BigSmallPL, ["1", "2", ""]]], ["11253", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                }
            },
            eu: {
                1: {
                    1: [[6, 6, [["26001", [Args.PKPL, ["1", "2", ""]]], ["26002", [Args.BigSmallPL, ["1", "2", ""]]], ["26003", [Args.OnlyPL, ["1", "2", "3"]]], ["26101", [Args.PKPL, ["1", "2", ""]]], ["26102", [Args.BigSmallPL, ["1", "2", ""]]], ["26103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["26011", [Args.PKPL, ["1", "2", ""]]], ["26012", [Args.BigSmallPL, ["1", "2", ""]]], ["26013", [Args.OnlyPL, ["1", "2", "3"]]], ["26014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["26111", [Args.PKPL, ["1", "2", ""]]], ["26112", [Args.BigSmallPL, ["1", "2", ""]]], ["26113", [Args.OnlyPL, ["1", "2", "3"]]], ["26114", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[3, 3, [["26201", [Args.PKPL, ["1", "2", ""]]], ["26202", [Args.BigSmallPL, ["1", "2", ""]]], ["26203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[3, 3, [["26211", [Args.PKPL, ["1", "2", ""]]], ["26212", [Args.BigSmallPL, ["1", "2", ""]]], ["26213", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["26221", [Args.PKPL, ["1", "2", ""]]], ["26222", [Args.BigSmallPL, ["1", "2", ""]]], ["26223", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["26231", [Args.PKPL, ["1", "2", ""]]], ["26232", [Args.BigSmallPL, ["1", "2", ""]]], ["26233", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["26241", [Args.PKPL, ["1", "2", ""]]], ["26242", [Args.BigSmallPL, ["1", "2", ""]]], ["26243", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    6: [[3, 3, [["26251", [Args.PKPL, ["1", "2", ""]]], ["26252", [Args.BigSmallPL, ["1", "2", ""]]], ["26253", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                4: {
                    1: [[99, 99, [["26061", [Args.OnlyPL, [[langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest], [["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], ["4:4", "44"], ["1:3", "13"]], [["3:2", "32"], [langFont.Font_Else, "99"], ["2:3", "23"]], [["4:0", "40"], [], ["0:4", "04"]], [["4:1", "41"], [], ["1:4", "14"]], [["4:2", "42"], [], ["2:4", "24"]], [["4:3", "43"], [], ["3:4", "34"]]]]]]]],
                    2: [[99, 99, [["26161", [Args.OnlyPL, [[langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest], [["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], [langFont.Font_Else, "99"], ["1:3", "13"]], [["3:2", "32"], [], ["2:3", "23"]]]]]]]]
                },
                5: {
                    1: [[99, 99, [["26062", [Args.OnlyPL, [[["0 - 1", "01"], ["2 - 3", "23"]], [["4 - 6", "46"], [langFont.Font_7orMore, "79"]]]]]]]],
                    2: [[99, 99, [["26162", [Args.OnlyPL, [[["0", "0"], ["1", "1"]], [["2", "2"], [langFont.Font_3orMore, "3"]]]]]]]]
                },
                6: {
                    1: [[99, 99, [["26063", [Args.OnlyPL, [[[langFont.Font_Home + " / " + langFont.Font_Home, r ? "11" : "22"], [langFont.Font_Home + " / " + langFont.Font_Peace, r ? "13" : "23"], [langFont.Font_Home + " / " + langFont.Font_Guest, r ? "12" : "21"]], [[langFont.Font_Peace + " / " + langFont.Font_Home, r ? "31" : "32"], [langFont.Font_Peace + " / " + langFont.Font_Peace, "33"], [langFont.Font_Peace + " / " + langFont.Font_Guest, r ? "32" : "31"]], [[langFont.Font_Guest + " / " + langFont.Font_Home, r ? "21" : "12"], [langFont.Font_Guest + " / " + langFont.Font_Peace, r ? "23" : "13"], [langFont.Font_Guest + " / " + langFont.Font_Guest, r ? "22" : "11"]]]]]]]]
                },
                7: {
                    1: [[3, 3, [["26201", [Args.PKPL, ["1", "2", ""]]], ["26202", [Args.BigSmallPL, ["1", "2", ""]]], ["26203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[3, 3, [["26211", [Args.PKPL, ["1", "2", ""]]], ["26212", [Args.BigSmallPL, ["1", "2", ""]]], ["26213", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["26221", [Args.PKPL, ["1", "2", ""]]], ["26222", [Args.BigSmallPL, ["1", "2", ""]]], ["26223", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["26231", [Args.PKPL, ["1", "2", ""]]], ["26232", [Args.BigSmallPL, ["1", "2", ""]]], ["26233", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["26241", [Args.PKPL, ["1", "2", ""]]], ["26242", [Args.BigSmallPL, ["1", "2", ""]]], ["26243", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    6: [[3, 3, [["26251", [Args.PKPL, ["1", "2", ""]]], ["26252", [Args.BigSmallPL, ["1", "2", ""]]], ["26253", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                }
            },
            wd: {
                1: {
                    1: [[6, 6, [["27001", [Args.PKPL, ["1", "2", ""]]], ["27002", [Args.BigSmallPL, ["1", "2", ""]]], ["27003", [Args.OnlyPL, ["1", "2", "3"]]], ["27101", [Args.PKPL, ["1", "2", ""]]], ["27102", [Args.BigSmallPL, ["1", "2", ""]]], ["27103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["27011", [Args.PKPL, ["1", "2", ""]]], ["27012", [Args.BigSmallPL, ["1", "2", ""]]], ["27013", [Args.OnlyPL, ["1", "2", "3"]]], ["27014", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["27111", [Args.PKPL, ["1", "2", ""]]], ["27112", [Args.BigSmallPL, ["1", "2", ""]]], ["27113", [Args.OnlyPL, ["1", "2", "3"]]], ["27114", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[3, 3, [["27201", [Args.PKPL, ["1", "2", ""]]], ["27202", [Args.BigSmallPL, ["1", "2", ""]]], ["27203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[3, 3, [["27211", [Args.PKPL, ["1", "2", ""]]], ["27212", [Args.BigSmallPL, ["1", "2", ""]]], ["27213", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["27221", [Args.PKPL, ["1", "2", ""]]], ["27222", [Args.BigSmallPL, ["1", "2", ""]]], ["27223", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["27231", [Args.PKPL, ["1", "2", ""]]], ["27232", [Args.BigSmallPL, ["1", "2", ""]]], ["27233", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["27241", [Args.PKPL, ["1", "2", ""]]], ["27242", [Args.BigSmallPL, ["1", "2", ""]]], ["27243", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    6: [[3, 3, [["27251", [Args.PKPL, ["1", "2", ""]]], ["27252", [Args.BigSmallPL, ["1", "2", ""]]], ["27253", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                4: {
                    1: [[99, 99, [["27061", [Args.OnlyPL, [[langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest], [["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], ["4:4", "44"], ["1:3", "13"]], [["3:2", "32"], [langFont.Font_Else, "99"], ["2:3", "23"]], [["4:0", "40"], [], ["0:4", "04"]], [["4:1", "41"], [], ["1:4", "14"]], [["4:2", "42"], [], ["2:4", "24"]], [["4:3", "43"], [], ["3:4", "34"]]]]]]]],
                    2: [[99, 99, [["27161", [Args.OnlyPL, [[langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest], [["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], [langFont.Font_Else, "99"], ["1:3", "13"]], [["3:2", "32"], [], ["2:3", "23"]]]]]]]]
                },
                5: {
                    1: [[99, 99, [["27062", [Args.OnlyPL, [[["0 - 1", "01"], ["2 - 3", "23"]], [["4 - 6", "46"], [langFont.Font_7orMore, "79"]]]]]]]],
                    2: [[99, 99, [["27162", [Args.OnlyPL, [[["0", "0"], ["1", "1"]], [["2", "2"], [langFont.Font_3orMore, "3"]]]]]]]]
                },
                6: {
                    1: [[99, 99, [["27063", [Args.OnlyPL, [[[langFont.Font_Home + " / " + langFont.Font_Home, r ? "11" : "22"], [langFont.Font_Home + " / " + langFont.Font_Peace, r ? "13" : "23"], [langFont.Font_Home + " / " + langFont.Font_Guest, r ? "12" : "21"]], [[langFont.Font_Peace + " / " + langFont.Font_Home, r ? "31" : "32"], [langFont.Font_Peace + " / " + langFont.Font_Peace, "33"], [langFont.Font_Peace + " / " + langFont.Font_Guest, r ? "32" : "31"]], [[langFont.Font_Guest + " / " + langFont.Font_Home, r ? "21" : "12"], [langFont.Font_Guest + " / " + langFont.Font_Peace, r ? "23" : "13"], [langFont.Font_Guest + " / " + langFont.Font_Guest, r ? "22" : "11"]]]]]]]]
                },
                7: {
                    1: [[3, 3, [["27201", [Args.PKPL, ["1", "2", ""]]], ["27202", [Args.BigSmallPL, ["1", "2", ""]]], ["27203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[3, 3, [["27211", [Args.PKPL, ["1", "2", ""]]], ["27212", [Args.BigSmallPL, ["1", "2", ""]]], ["27213", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["27221", [Args.PKPL, ["1", "2", ""]]], ["27222", [Args.BigSmallPL, ["1", "2", ""]]], ["27223", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["27231", [Args.PKPL, ["1", "2", ""]]], ["27232", [Args.BigSmallPL, ["1", "2", ""]]], ["27233", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["27241", [Args.PKPL, ["1", "2", ""]]], ["27242", [Args.BigSmallPL, ["1", "2", ""]]], ["27243", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    6: [[3, 3, [["27251", [Args.PKPL, ["1", "2", ""]]], ["27252", [Args.BigSmallPL, ["1", "2", ""]]], ["27253", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                }
            },
            bk: {
                1: {
                    1: [[6, 6, [["12001", [Args.PKPL, ["1", "2", ""]]], ["12002", [Args.BigSmallPL, ["1", "2", ""]]], ["12004", [Args.OddPairPL, ["1", "2", ""]]], ["12101", [Args.PKPL, ["1", "2", ""]]], ["12102", [Args.BigSmallPL, ["1", "2", ""]]], ["12104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["12201", [Args.PKPL, ["1", "2", ""]]], ["12202", [Args.BigSmallPL, ["1", "2", ""]]], ["12204", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[4, 4, [["12301", [Args.PKPL, ["1", "2", ""]]], ["12302", [Args.BigSmallPL, ["1", "2", ""]]], ["12303", [Args.OnlyPL, ["1", "2", "3"]]], ["12304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["12401", [Args.PKPL, ["1", "2", ""]]], ["12402", [Args.BigSmallPL, ["1", "2", ""]]], ["12403", [Args.OnlyPL, ["1", "2", "3"]]], ["12404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["12501", [Args.PKPL, ["1", "2", ""]]], ["12502", [Args.BigSmallPL, ["1", "2", ""]]], ["12503", [Args.OnlyPL, ["1", "2", "3"]]], ["12504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[4, 4, [["12601", [Args.PKPL, ["1", "2", ""]]], ["12602", [Args.BigSmallPL, ["1", "2", ""]]], ["12603", [Args.OnlyPL, ["1", "2", "3"]]], ["12604", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[2, 2, [[r ? "12005" : "12007", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12006" : "12008", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12007" : "12005", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12008" : "12006", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[2, 2, [[r ? "12105" : "12107", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12106" : "12108", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12107" : "12105", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12108" : "12106", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[2, 2, [[r ? "12205" : "12207", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12206" : "12208", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12207" : "12205", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12208" : "12206", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[2, 2, [[r ? "12305" : "12307", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12306" : "12308", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12307" : "12305", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12308" : "12306", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[2, 2, [[r ? "12405" : "12407", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12406" : "12408", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12407" : "12405", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12408" : "12406", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    6: [[2, 2, [[r ? "12505" : "12507", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12506" : "12508", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12507" : "12505", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12508" : "12506", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    7: [[2, 2, [[r ? "12605" : "12607", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12606" : "12608", [Args.OddPairPL, ["1", "2", ""]]]]], [2, 2, [[r ? "12607" : "12605", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "12608" : "12606", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[3, 3, [["12301", [Args.PKPL, ["1", "2", ""]]], ["12302", [Args.BigSmallPL, ["1", "2", ""]]], ["12304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[3, 3, [["12501", [Args.PKPL, ["1", "2", ""]]], ["12502", [Args.BigSmallPL, ["1", "2", ""]]], ["12504", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                6: {
                    1: [[3, 3, [["12701", [Args.PKPL, ["1", "2", ""]]], ["12702", [Args.BigSmallPL, ["1", "2", ""]]], ["12703", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                7: {
                    1: [[1, 1, [[r ? "12005" : "12007", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "12007" : "12005", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[1, 1, [[r ? "12105" : "12107", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "12107" : "12105", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    3: [[1, 1, [[r ? "12205" : "12207", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "12207" : "12205", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    4: [[1, 1, [[r ? "12305" : "12307", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "12307" : "12305", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    5: [[1, 1, [[r ? "12405" : "12407", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "12407" : "12405", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    6: [[1, 1, [[r ? "12505" : "12507", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "12507" : "12505", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    7: [[1, 1, [[r ? "12605" : "12607", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "12607" : "12605", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            bb: {
                1: {
                    1: [[6, 6, [["13001", [Args.PKPL, ["2", "1", ""]]], ["13002", [Args.BigSmallPL, ["1", "2", ""]]], ["13003", [Args.OnlyPL, ["2", "1", ""]]], ["13051", [Args.PKPL, ["2", "1", ""]]], ["13052", [Args.BigSmallPL, ["1", "2", ""]]], ["13053", [Args.OnlyPL, ["2", "1", ""]]]]]]
                },
                2: {
                    1: [[4, 4, [["13031", [Args.PKPL, ["2", "1", ""]]], ["13032", [Args.BigSmallPL, ["1", "2", ""]]], ["13035", [Args.PKPL, ["2", "1", ""]]], ["13034", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[4, 4, [["13071", [Args.PKPL, ["2", "1", ""]]], ["13072", [Args.BigSmallPL, ["1", "2", ""]]], ["13075", [Args.PKPL, ["2", "1", ""]]], ["13074", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[6, 6, [["13111", [Args.PKPL, ["2", "1", ""]]], ["13112", [Args.BigSmallPL, ["1", "2", ""]]], ["13113", [Args.OnlyPL, ["2", "1", ""]]], ["13211", [Args.PKPL, ["2", "1", ""]]], ["13212", [Args.BigSmallPL, ["1", "2", ""]]], ["13213", [Args.OnlyPL, ["2", "1", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "13007" : "13006", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "13006" : "13007", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                6: {
                    1: [[4, 4, [["13001", [Args.PKPL, ["2", "1", ""]]], ["13002", [Args.BigSmallPL, ["1", "2", ""]]], ["13051", [Args.PKPL, ["2", "1", ""]]], ["13052", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                7: {
                    1: [[2, 2, [["13031", [Args.PKPL, ["2", "1", ""]]], ["13032", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                8: {
                    1: [[2, 2, [["13071", [Args.PKPL, ["2", "1", ""]]], ["13072", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                9: {
                    1: [[4, 4, [["13121", [Args.PKPL, ["2", "1", ""]]], ["13122", [Args.BigSmallPL, ["1", "2", ""]]], ["13221", [Args.PKPL, ["2", "1", ""]]], ["13222", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["13131", [Args.PKPL, ["2", "1", ""]]], ["13132", [Args.BigSmallPL, ["1", "2", ""]]], ["13231", [Args.PKPL, ["2", "1", ""]]], ["13232", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["13141", [Args.PKPL, ["2", "1", ""]]], ["13142", [Args.BigSmallPL, ["1", "2", ""]]], ["13241", [Args.PKPL, ["2", "1", ""]]], ["13242", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    4: [[4, 4, [["13151", [Args.PKPL, ["2", "1", ""]]], ["13152", [Args.BigSmallPL, ["1", "2", ""]]], ["13251", [Args.PKPL, ["2", "1", ""]]], ["13252", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    5: [[4, 4, [["13161", [Args.PKPL, ["2", "1", ""]]], ["13162", [Args.BigSmallPL, ["1", "2", ""]]], ["13261", [Args.PKPL, ["2", "1", ""]]], ["13262", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    6: [[4, 4, [["13171", [Args.PKPL, ["2", "1", ""]]], ["13172", [Args.BigSmallPL, ["1", "2", ""]]], ["13271", [Args.PKPL, ["2", "1", ""]]], ["13272", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    7: [[4, 4, [["13181", [Args.PKPL, ["2", "1", ""]]], ["13182", [Args.BigSmallPL, ["1", "2", ""]]], ["13281", [Args.PKPL, ["2", "1", ""]]], ["13282", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                10: {
                    1: [[2, 2, [[r ? "13007" : "13006", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "13057" : "13056", [Args.BigSmallPL, ["1", "2", ""]]]]], [2, 2, [[r ? "13006" : "13007", [Args.BigSmallPL, ["1", "2", ""]]], [r ? "13056" : "13057", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            tn: {
                1: {
                    1: [[5, 5, [["14001", [Args.PKPL, ["1", "2", ""]]], ["14002", [Args.BigSmallPL, ["1", "2", ""]]], ["14004", [Args.OddPairPL, ["1", "2", ""]]], ["14011", [Args.PKPL, ["1", "2", ""]]], ["14013", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["14101", [Args.PKPL, ["1", "2", ""]]], ["14102", [Args.BigSmallPL, ["1", "2", ""]]], ["14103", [Args.OnlyPL, ["1", "2", "3"]]], ["14104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["14201", [Args.PKPL, ["1", "2", ""]]], ["14202", [Args.BigSmallPL, ["1", "2", ""]]], ["14203", [Args.OnlyPL, ["1", "2", "3"]]], ["14204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["14301", [Args.PKPL, ["1", "2", ""]]], ["14302", [Args.BigSmallPL, ["1", "2", ""]]], ["14303", [Args.OnlyPL, ["1", "2", "3"]]], ["14304", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[4, 4, [["14001", [Args.PKPL, ["1", "2", ""]]], ["14002", [Args.BigSmallPL, ["1", "2", ""]]], ["14013", [Args.OnlyPL, ["1", "2", "3"]]], ["14011", [Args.PKPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["14101", [Args.PKPL, ["1", "2", ""]]], ["14102", [Args.BigSmallPL, ["1", "2", ""]]], ["14103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[3, 3, [["14201", [Args.PKPL, ["1", "2", ""]]], ["14202", [Args.BigSmallPL, ["1", "2", ""]]], ["14203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[3, 3, [["14301", [Args.PKPL, ["1", "2", ""]]], ["14302", [Args.BigSmallPL, ["1", "2", ""]]], ["14303", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    4: [[3, 3, [["14401", [Args.PKPL, ["1", "2", ""]]], ["14402", [Args.BigSmallPL, ["1", "2", ""]]], ["14403", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    5: [[3, 3, [["14501", [Args.PKPL, ["1", "2", ""]]], ["14502", [Args.BigSmallPL, ["1", "2", ""]]], ["14503", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "14005" : "14006", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "14006" : "14005", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            ih: {
                1: {
                    1: [[3, 3, [["15001", [Args.PKPL, ["1", "2", ""]]], ["15002", [Args.BigSmallPL, ["1", "2", ""]]], ["15004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[4, 4, [["15101", [Args.PKPL, ["1", "2", ""]]], ["15102", [Args.BigSmallPL, ["1", "2", ""]]], ["15103", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    2: [[4, 4, [["15201", [Args.PKPL, ["1", "2", ""]]], ["15202", [Args.BigSmallPL, ["1", "2", ""]]], ["15203", [Args.OnlyPL, ["1", "2", "3"]]]]]],
                    3: [[4, 4, [["15301", [Args.PKPL, ["1", "2", ""]]], ["15302", [Args.BigSmallPL, ["1", "2", ""]]], ["15303", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                3: {
                    1: [[1, 1, [[r ? "15006" : "15007", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "15007" : "15006", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[2, 2, [["15001", [Args.PKPL, ["1", "2", ""]]], ["15002", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            vl: {
                1: {
                    1: [[5, 5, [["16001", [Args.PKPL, ["1", "2", ""]]], ["16002", [Args.BigSmallPL, ["1", "2", ""]]], ["16003", [Args.OnlyPL, ["1", "2", "3"]]], ["16012", [Args.BigSmallPL, ["1", "2", ""]]], ["16014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["16101", [Args.PKPL, ["1", "2", ""]]], ["16102", [Args.BigSmallPL, ["1", "2", ""]]], ["16103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                3: {
                    1: [[3, 3, [["16001", [Args.PKPL, ["1", "2", ""]]], ["16011", [Args.PKPL, ["1", "2", ""]]], ["16012", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["16101", [Args.PKPL, ["1", "2", ""]]], ["16102", [Args.BigSmallPL, ["1", "2", ""]]], ["16104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[3, 3, [["16201", [Args.PKPL, ["1", "2", ""]]], ["16202", [Args.BigSmallPL, ["1", "2", ""]]], ["16204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[3, 3, [["16301", [Args.PKPL, ["1", "2", ""]]], ["16302", [Args.BigSmallPL, ["1", "2", ""]]], ["16304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[3, 3, [["16401", [Args.PKPL, ["1", "2", ""]]], ["16402", [Args.BigSmallPL, ["1", "2", ""]]], ["16404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[3, 3, [["16501", [Args.PKPL, ["1", "2", ""]]], ["16502", [Args.BigSmallPL, ["1", "2", ""]]], ["16504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    6: [[3, 3, [["16601", [Args.PKPL, ["1", "2", ""]]], ["16602", [Args.BigSmallPL, ["1", "2", ""]]], ["16604", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    7: [[3, 3, [["16701", [Args.PKPL, ["1", "2", ""]]], ["16702", [Args.BigSmallPL, ["1", "2", ""]]], ["16704", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "16015" : "16016", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "16016" : "16015", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            bm: {
                1: {
                    1: [[4, 4, [["17001", [Args.PKPL, ["1", "2", ""]]], ["17003", [Args.OnlyPL, ["1", "2", "3"]]], ["17012", [Args.BigSmallPL, ["1", "2", ""]]], ["17014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["17101", [Args.PKPL, ["1", "2", ""]]], ["17102", [Args.BigSmallPL, ["1", "2", ""]]], ["17103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                3: {
                    1: [[3, 3, [["17001", [Args.PKPL, ["1", "2", ""]]], ["17011", [Args.PKPL, ["1", "2", ""]]], ["17012", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["17101", [Args.PKPL, ["1", "2", ""]]], ["17102", [Args.BigSmallPL, ["1", "2", ""]]], ["17104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[3, 3, [["17201", [Args.PKPL, ["1", "2", ""]]], ["17202", [Args.BigSmallPL, ["1", "2", ""]]], ["17204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[3, 3, [["17301", [Args.PKPL, ["1", "2", ""]]], ["17302", [Args.BigSmallPL, ["1", "2", ""]]], ["17304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[3, 3, [["17401", [Args.PKPL, ["1", "2", ""]]], ["17402", [Args.BigSmallPL, ["1", "2", ""]]], ["17404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[3, 3, [["17501", [Args.PKPL, ["1", "2", ""]]], ["17502", [Args.BigSmallPL, ["1", "2", ""]]], ["17504", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "17015" : "17016", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "17016" : "17015", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            es: {
                1: {
                    1: [[3, 3, [["180001", [Args.PKPL, ["1", "2", ""]]], ["180002", [Args.BigSmallPL, ["1", "2", ""]]], ["180003", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                4: {
                    1: [[2, 2, [["180001", [Args.PKPL, ["1", "2", ""]]], ["180002", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            af: {
                1: {
                    1: [[6, 6, [["19001", [Args.PKPL, ["1", "2", ""]]], ["19002", [Args.BigSmallPL, ["1", "2", ""]]], ["19003", [Args.OnlyPL, ["1", "2", "3"]]], ["19101", [Args.PKPL, ["1", "2", ""]]], ["19102", [Args.BigSmallPL, ["1", "2", ""]]], ["19103", [Args.OnlyPL, ["1", "2", "3"]]]]]]
                },
                2: {
                    1: [[4, 4, [["19201", [Args.PKPL, ["1", "2", ""]]], ["19202", [Args.BigSmallPL, ["1", "2", ""]]], ["19203", [Args.OnlyPL, ["1", "2", "3"]]], ["19204", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[4, 4, [["19301", [Args.PKPL, ["1", "2", ""]]], ["19302", [Args.BigSmallPL, ["1", "2", ""]]], ["19303", [Args.OnlyPL, ["1", "2", "3"]]], ["19304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[4, 4, [["19401", [Args.PKPL, ["1", "2", ""]]], ["19402", [Args.BigSmallPL, ["1", "2", ""]]], ["19403", [Args.OnlyPL, ["1", "2", "3"]]], ["19404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[4, 4, [["19501", [Args.PKPL, ["1", "2", ""]]], ["19502", [Args.BigSmallPL, ["1", "2", ""]]], ["19503", [Args.OnlyPL, ["1", "2", "3"]]], ["19504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[4, 4, [["19601", [Args.PKPL, ["1", "2", ""]]], ["19602", [Args.BigSmallPL, ["1", "2", ""]]], ["19603", [Args.OnlyPL, ["1", "2", "3"]]], ["19604", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[4, 4, [["19001", [Args.PKPL, ["1", "2", ""]]], ["19002", [Args.BigSmallPL, ["1", "2", ""]]], ["19101", [Args.PKPL, ["1", "2", ""]]], ["19102", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[2, 2, [["19301", [Args.PKPL, ["1", "2", ""]]], ["19302", [Args.PKPL, ["1", "2", ""]]]]]],
                    2: [[2, 2, [["19501", [Args.PKPL, ["1", "2", ""]]], ["19502", [Args.PKPL, ["1", "2", ""]]]]]]
                },
                6: {
                    1: [[1, 1, [[r ? "19005" : "19007", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "19007" : "19005", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    2: [[1, 1, [[r ? "19105" : "19107", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "19107" : "19105", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    3: [[1, 1, [[r ? "19205" : "19207", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "19207" : "19205", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    4: [[1, 1, [[r ? "19305" : "19307", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "19307" : "19305", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    5: [[1, 1, [[r ? "19405" : "19407", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "19407" : "19405", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    6: [[1, 1, [[r ? "19505" : "19507", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "19507" : "19505", [Args.BigSmallPL, ["1", "2", ""]]]]]],
                    7: [[1, 1, [[r ? "19605" : "19607", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "19607" : "19605", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            pb: {
                1: {
                    1: [[4, 4, [["20001", [Args.PKPL, ["1", "2", ""]]], ["20002", [Args.BigSmallPL, ["1", "2", ""]]], ["20003", [Args.OnlyPL, ["1", "2", "3"]]], ["20004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["20101", [Args.PKPL, ["1", "2", ""]]], ["20102", [Args.BigSmallPL, ["1", "2", ""]]], ["20104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            tt: {
                1: {
                    1: [[4, 4, [["21001", [Args.PKPL, ["1", "2", ""]]], ["21003", [Args.OnlyPL, ["1", "2", "3"]]], ["21012", [Args.BigSmallPL, ["1", "2", ""]]], ["21014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[3, 3, [["21101", [Args.PKPL, ["1", "2", ""]]], ["21102", [Args.BigSmallPL, ["1", "2", ""]]], ["21104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                3: {
                    1: [[5, 5, [["21001", [Args.PKPL, ["1", "2", ""]]], ["21002", [Args.BigSmallPL, ["1", "2", ""]]], ["21011", [Args.PKPL, ["1", "2", ""]]], ["21012", [Args.BigSmallPL, ["1", "2", ""]]], ["21014", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                4: {
                    1: [[3, 3, [["21101", [Args.PKPL, ["1", "2", ""]]], ["21102", [Args.BigSmallPL, ["1", "2", ""]]], ["21104", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    2: [[3, 3, [["21201", [Args.PKPL, ["1", "2", ""]]], ["21202", [Args.BigSmallPL, ["1", "2", ""]]], ["21204", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    3: [[3, 3, [["21301", [Args.PKPL, ["1", "2", ""]]], ["21302", [Args.BigSmallPL, ["1", "2", ""]]], ["21304", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    4: [[3, 3, [["21401", [Args.PKPL, ["1", "2", ""]]], ["21402", [Args.BigSmallPL, ["1", "2", ""]]], ["21404", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    5: [[3, 3, [["21501", [Args.PKPL, ["1", "2", ""]]], ["21502", [Args.BigSmallPL, ["1", "2", ""]]], ["21504", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    6: [[3, 3, [["21601", [Args.PKPL, ["1", "2", ""]]], ["21602", [Args.BigSmallPL, ["1", "2", ""]]], ["21604", [Args.OddPairPL, ["1", "2", ""]]]]]],
                    7: [[3, 3, [["21701", [Args.PKPL, ["1", "2", ""]]], ["21702", [Args.BigSmallPL, ["1", "2", ""]]], ["21704", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                5: {
                    1: [[1, 1, [[r ? "21015" : "21016", [Args.BigSmallPL, ["1", "2", ""]]]]], [1, 1, [[r ? "21016" : "21015", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            hb: {
                1: {
                    1: [[6, 6, [["22001", [Args.PKPL, ["1", "2", ""]]], ["22002", [Args.BigSmallPL, ["1", "2", ""]]], ["22004", [Args.OddPairPL, ["1", "2", ""]]], ["22101", [Args.PKPL, ["1", "2", ""]]], ["22102", [Args.BigSmallPL, ["1", "2", ""]]], ["22104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                },
                2: {
                    1: [[4, 4, [["22001", [Args.PKPL, ["1", "2", ""]]], ["22002", [Args.BigSmallPL, ["1", "2", ""]]], ["22101", [Args.PKPL, ["1", "2", ""]]], ["22102", [Args.BigSmallPL, ["1", "2", ""]]]]]]
                }
            },
            wp: {
                1: {
                    1: [[6, 6, [["23001", [Args.PKPL, ["1", "2", ""]]], ["23002", [Args.BigSmallPL, ["1", "2", ""]]], ["23004", [Args.OddPairPL, ["1", "2", ""]]], ["23101", [Args.PKPL, ["1", "2", ""]]], ["23102", [Args.BigSmallPL, ["1", "2", ""]]], ["23104", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            op: {
                0: {
                    1: [[4, 4, [["24001", [Args.PKPL, ["1", "2", ""]]], ["24002", [Args.BigSmallPL, ["1", "2", ""]]], ["24003", [Args.OnlyPL, ["1", "2", ""]]], ["24004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            ot: {
                1: {
                    1: [[4, 4, [["24001", [Args.PKPL, ["1", "2", ""]]], ["24002", [Args.BigSmallPL, ["1", "2", ""]]], ["24003", [Args.OnlyPL, ["1", "2", ""]]], ["24004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            },
            bx: {
                1: {
                    1: [[3, 3, [["28001", [Args.PKPL, ["1", "2", ""]]], ["28002", [Args.BigSmallPL, ["1", "2", ""]]], ["28004", [Args.OddPairPL, ["1", "2", ""]]]]]]
                }
            }
        }
          , g = g;
        "mobile" === MainProperty.webDevice && (g = r);
        var F = function(n) {
            var t = [];
            if (Array.isArray(n))
                for (var o = 0; o < n.length; o++)
                    t = t.concat(F(n[o]));
            else
                0 <= n.indexOf("#") ? t = t.concat(F(n.split("#"))) : 0 <= n.indexOf("&") ? t = t.concat(F(n.split("&"))) : 0 <= n.indexOf(",") ? t = t.concat(F(n.split(","))) : 2 < n.length && t.push(n);
            return t.filter(function(n, t, o) {
                return o.indexOf(n) === t
            })
        }
          , l = g[n = Tool.IsSC(n) && !Tool.IsEUorWD(n) ? Ball.sc.key : n] && g[n][t] ? g[n][t] : {};
        if (a == Args.BelowKind) {
            var e, s = [];
            for (e in l)
                for (var A = 0; A < l[e].length; A++)
                    for (j = 0; j < l[e][A][2].length; j++) {
                        var _ = l[e][A][2][j][0];
                        s = s.concat(F(_))
                    }
            return s
        }
        if (l = l[o] || [],
        a != Args.BelowKindSub)
            return l;
        for (s = [],
        A = 0; A < l.length; A++)
            for (j = 0; j < l[A][2].length; j++) {
                _ = l[A][2][j][0];
                s = s.concat(F(_))
            }
        return s
    },
    GetOuterScore: function(n, t, o, a) {
        var r = {
            sc: {
                7: {
                    1: function(n) {
                        return 0 <= ["11201", "11202", "11203"].indexOf(n) ? 0 : 0 <= ["11211", "11212", "11213"].indexOf(n) ? 1 : 0 <= ["11221", "11222", "11223"].indexOf(n) ? 2 : 0 <= ["11231", "11232", "11233"].indexOf(n) ? 3 : 0 <= ["11241", "11242", "11243"].indexOf(n) ? 4 : 0 <= ["11251", "11252", "11253"].indexOf(n) ? 5 : void 0
                    }
                }
            },
            eu: {
                7: {
                    1: function(n) {
                        return 0 <= ["26201", "26202", "26203"].indexOf(n) ? 0 : 0 <= ["26211", "26212", "26213"].indexOf(n) ? 1 : 0 <= ["26221", "26222", "26223"].indexOf(n) ? 2 : 0 <= ["26231", "26232", "26233"].indexOf(n) ? 3 : 0 <= ["26241", "26242", "26243"].indexOf(n) ? 4 : 0 <= ["26251", "26252", "26253"].indexOf(n) ? 5 : void 0
                    }
                }
            },
            wd: {
                7: {
                    1: function(n) {
                        return 0 <= ["27201", "27202", "27203"].indexOf(n) ? 0 : 0 <= ["27211", "27212", "27213"].indexOf(n) ? 1 : 0 <= ["27221", "27222", "27223"].indexOf(n) ? 2 : 0 <= ["27231", "27232", "27233"].indexOf(n) ? 3 : 0 <= ["27241", "27242", "27243"].indexOf(n) ? 4 : 0 <= ["27251", "27252", "27253"].indexOf(n) ? 5 : void 0
                    }
                }
            },
            bk: {
                5: {
                    1: function(n) {
                        return 0 <= ["12301", "12302", "12304"].indexOf(n) ? 2 : 0 <= ["12501", "12502", "12504"].indexOf(n) ? 4 : void 0
                    },
                    2: function(n) {
                        if (0 <= ["12301", "12302", "12304"].indexOf(n))
                            return 2
                    },
                    3: function(n) {
                        if (0 <= ["12501", "12502", "12504"].indexOf(n))
                            return 4
                    }
                }
            },
            tn: {
                4: {
                    1: function(n) {
                        return 0 <= ["14101", "14102", "14103"].indexOf(n) ? 1 : 0 <= ["14201", "14202", "14203"].indexOf(n) ? 2 : 0 <= ["14301", "14302", "14303"].indexOf(n) ? 3 : 0 <= ["14401", "14402", "14403"].indexOf(n) ? 4 : 0 <= ["14501", "14502", "14503"].indexOf(n) ? 5 : void 0
                    },
                    2: function(n) {
                        if (0 <= ["14101", "14102", "14103"].indexOf(n))
                            return 1
                    },
                    3: function(n) {
                        if (0 <= ["14201", "14202", "14203"].indexOf(n))
                            return 2
                    },
                    4: function(n) {
                        if (0 <= ["14301", "14302", "14303"].indexOf(n))
                            return 3
                    },
                    5: function(n) {
                        if (0 <= ["14401", "14402", "14403"].indexOf(n))
                            return 4
                    },
                    6: function(n) {
                        if (0 <= ["14501", "14502", "14503"].indexOf(n))
                            return 5
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["14005", "14006"].indexOf(n))
                            return 0
                    }
                }
            },
            vl: {
                4: {
                    1: function(n) {
                        return 0 <= ["16101", "16102", "16104"].indexOf(n) ? 1 : 0 <= ["16201", "16202", "16204"].indexOf(n) ? 2 : 0 <= ["16301", "16302", "16304"].indexOf(n) ? 3 : 0 <= ["16401", "16402", "16404"].indexOf(n) ? 4 : 0 <= ["16501", "16502", "16504"].indexOf(n) ? 5 : 0 <= ["16601", "16602", "16604"].indexOf(n) ? 6 : 0 <= ["16701", "16702", "16704"].indexOf(n) ? 7 : void 0
                    },
                    2: function(n) {
                        if (0 <= ["16101", "16102", "16104"].indexOf(n))
                            return 1
                    },
                    3: function(n) {
                        if (0 <= ["16201", "16202", "16204"].indexOf(n))
                            return 2
                    },
                    4: function(n) {
                        if (0 <= ["16301", "16302", "16304"].indexOf(n))
                            return 3
                    },
                    5: function(n) {
                        if (0 <= ["16401", "16402", "16404"].indexOf(n))
                            return 4
                    },
                    6: function(n) {
                        if (0 <= ["16501", "16502", "16504"].indexOf(n))
                            return 5
                    },
                    7: function(n) {
                        if (0 <= ["16601", "16602", "16604"].indexOf(n))
                            return 6
                    },
                    8: function(n) {
                        if (0 <= ["16701", "16702", "16704"].indexOf(n))
                            return 7
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["16015", "16016"].indexOf(n))
                            return 0
                    }
                }
            },
            bm: {
                4: {
                    1: function(n) {
                        return 0 <= ["17101", "17102", "17104"].indexOf(n) ? 1 : 0 <= ["17201", "17202", "17204"].indexOf(n) ? 2 : 0 <= ["17301", "17302", "17304"].indexOf(n) ? 3 : 0 <= ["17401", "17402", "17404"].indexOf(n) ? 4 : 0 <= ["17501", "17502", "17504"].indexOf(n) ? 5 : void 0
                    },
                    2: function(n) {
                        if (0 <= ["17101", "17102", "17104"].indexOf(n))
                            return 1
                    },
                    3: function(n) {
                        if (0 <= ["17201", "17202", "17204"].indexOf(n))
                            return 2
                    },
                    4: function(n) {
                        if (0 <= ["17301", "17302", "17304"].indexOf(n))
                            return 3
                    },
                    5: function(n) {
                        if (0 <= ["17401", "17402", "17404"].indexOf(n))
                            return 4
                    },
                    6: function(n) {
                        if (0 <= ["17501", "17502", "17504"].indexOf(n))
                            return 5
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["17015", "17016"].indexOf(n))
                            return 0
                    }
                }
            },
            af: {
                5: {
                    1: function(n) {
                        return 0 <= ["19301", "19302"].indexOf(n) ? 2 : 0 <= ["19501", "19502"].indexOf(n) ? 4 : void 0
                    },
                    2: function(n) {
                        if (0 <= ["19301", "19302"].indexOf(n))
                            return 2
                    },
                    3: function(n) {
                        if (0 <= ["19501", "19502"].indexOf(n))
                            return 4
                    }
                }
            },
            tt: {
                4: {
                    1: function(n) {
                        return 0 <= ["21101", "21102", "21104"].indexOf(n) ? 1 : 0 <= ["21201", "21202", "21204"].indexOf(n) ? 2 : 0 <= ["21301", "21302", "21304"].indexOf(n) ? 3 : 0 <= ["21401", "21402", "21404"].indexOf(n) ? 4 : 0 <= ["21501", "21502", "21504"].indexOf(n) ? 5 : 0 <= ["21601", "21602", "21604"].indexOf(n) ? 6 : 0 <= ["21701", "21702", "21704"].indexOf(n) ? 7 : void 0
                    },
                    2: function(n) {
                        if (0 <= ["21101", "21102", "21104"].indexOf(n))
                            return 1
                    },
                    3: function(n) {
                        if (0 <= ["21201", "21202", "21204"].indexOf(n))
                            return 2
                    },
                    4: function(n) {
                        if (0 <= ["21301", "21302", "21304"].indexOf(n))
                            return 3
                    },
                    5: function(n) {
                        if (0 <= ["21401", "21402", "21404"].indexOf(n))
                            return 4
                    },
                    6: function(n) {
                        if (0 <= ["21501", "21502", "21504"].indexOf(n))
                            return 5
                    },
                    7: function(n) {
                        if (0 <= ["21601", "21602", "21604"].indexOf(n))
                            return 6
                    },
                    8: function(n) {
                        if (0 <= ["21701", "21702", "21704"].indexOf(n))
                            return 7
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["21015", "21016"].indexOf(n))
                            return 0
                    }
                }
            }
        };
        "mobile" === MainProperty.webDevice && (r = {
            sc: {
                7: {
                    1: function(n) {
                        if (0 <= ["11201", "11202", "11203"].indexOf(n))
                            return 0
                    },
                    2: function(n) {
                        if (0 <= ["11211", "11212", "11213"].indexOf(n))
                            return 1
                    },
                    3: function(n) {
                        if (0 <= ["11221", "11222", "11223"].indexOf(n))
                            return 2
                    },
                    4: function(n) {
                        if (0 <= ["11231", "11232", "11233"].indexOf(n))
                            return 3
                    },
                    5: function(n) {
                        if (0 <= ["11241", "11242", "11243"].indexOf(n))
                            return 4
                    },
                    6: function(n) {
                        if (0 <= ["11251", "11252", "11253"].indexOf(n))
                            return 5
                    }
                }
            },
            eu: {
                7: {
                    1: function(n) {
                        if (0 <= ["26201", "26202", "26203"].indexOf(n))
                            return 0
                    },
                    2: function(n) {
                        if (0 <= ["26211", "26212", "26213"].indexOf(n))
                            return 1
                    },
                    3: function(n) {
                        if (0 <= ["26221", "26222", "26223"].indexOf(n))
                            return 2
                    },
                    4: function(n) {
                        if (0 <= ["26231", "26232", "26233"].indexOf(n))
                            return 3
                    },
                    5: function(n) {
                        if (0 <= ["26241", "26242", "26243"].indexOf(n))
                            return 4
                    },
                    6: function(n) {
                        if (0 <= ["26251", "26252", "26253"].indexOf(n))
                            return 5
                    }
                }
            },
            wd: {
                7: {
                    1: function(n) {
                        if (0 <= ["27201", "27202", "27203"].indexOf(n))
                            return 0
                    },
                    2: function(n) {
                        if (0 <= ["27211", "27212", "27213"].indexOf(n))
                            return 1
                    },
                    3: function(n) {
                        if (0 <= ["27221", "27222", "27223"].indexOf(n))
                            return 2
                    },
                    4: function(n) {
                        if (0 <= ["27231", "27232", "27233"].indexOf(n))
                            return 3
                    },
                    5: function(n) {
                        if (0 <= ["27241", "27242", "27243"].indexOf(n))
                            return 4
                    },
                    6: function(n) {
                        if (0 <= ["27251", "27252", "27253"].indexOf(n))
                            return 5
                    }
                }
            },
            bk: {
                5: {
                    1: function(n) {
                        if (0 <= ["12301", "12302", "12304"].indexOf(n))
                            return 2
                    },
                    2: function(n) {
                        if (0 <= ["12501", "12502", "12504"].indexOf(n))
                            return 4
                    }
                }
            },
            tn: {
                4: {
                    1: function(n) {
                        if (0 <= ["14101", "14102", "14103"].indexOf(n))
                            return 1
                    },
                    2: function(n) {
                        if (0 <= ["14201", "14202", "14203"].indexOf(n))
                            return 2
                    },
                    3: function(n) {
                        if (0 <= ["14301", "14302", "14303"].indexOf(n))
                            return 3
                    },
                    4: function(n) {
                        if (0 <= ["14401", "14402", "14403"].indexOf(n))
                            return 4
                    },
                    5: function(n) {
                        if (0 <= ["14501", "14502", "14503"].indexOf(n))
                            return 5
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["14005", "14006"].indexOf(n))
                            return 0
                    }
                }
            },
            vl: {
                4: {
                    1: function(n) {
                        if (0 <= ["16101", "16102", "16104"].indexOf(n))
                            return 1
                    },
                    2: function(n) {
                        if (0 <= ["16201", "16202", "16204"].indexOf(n))
                            return 2
                    },
                    3: function(n) {
                        if (0 <= ["16301", "16302", "16304"].indexOf(n))
                            return 3
                    },
                    4: function(n) {
                        if (0 <= ["16401", "16402", "16404"].indexOf(n))
                            return 4
                    },
                    5: function(n) {
                        if (0 <= ["16501", "16502", "16504"].indexOf(n))
                            return 5
                    },
                    6: function(n) {
                        if (0 <= ["16601", "16602", "16604"].indexOf(n))
                            return 6
                    },
                    7: function(n) {
                        if (0 <= ["16701", "16702", "16704"].indexOf(n))
                            return 7
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["16015", "16016"].indexOf(n))
                            return 0
                    }
                }
            },
            bm: {
                4: {
                    1: function(n) {
                        if (0 <= ["17101", "17102", "17104"].indexOf(n))
                            return 1
                    },
                    2: function(n) {
                        if (0 <= ["17201", "17202", "17204"].indexOf(n))
                            return 2
                    },
                    3: function(n) {
                        if (0 <= ["17301", "17302", "17304"].indexOf(n))
                            return 3
                    },
                    4: function(n) {
                        if (0 <= ["17401", "17402", "17404"].indexOf(n))
                            return 4
                    },
                    5: function(n) {
                        if (0 <= ["17501", "17502", "17504"].indexOf(n))
                            return 5
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["17015", "17016"].indexOf(n))
                            return 0
                    }
                }
            },
            af: {
                5: {
                    1: function(n) {
                        if (0 <= ["19301", "19302"].indexOf(n))
                            return 2
                    },
                    2: function(n) {
                        if (0 <= ["19501", "19502"].indexOf(n))
                            return 4
                    }
                }
            },
            tt: {
                4: {
                    1: function(n) {
                        if (0 <= ["21101", "21102", "21104"].indexOf(n))
                            return 1
                    },
                    2: function(n) {
                        if (0 <= ["21201", "21202", "21204"].indexOf(n))
                            return 2
                    },
                    3: function(n) {
                        if (0 <= ["21301", "21302", "21304"].indexOf(n))
                            return 3
                    },
                    4: function(n) {
                        if (0 <= ["21401", "21402", "21404"].indexOf(n))
                            return 4
                    },
                    5: function(n) {
                        if (0 <= ["21501", "21502", "21504"].indexOf(n))
                            return 5
                    },
                    6: function(n) {
                        if (0 <= ["21601", "21602", "21604"].indexOf(n))
                            return 6
                    },
                    7: function(n) {
                        if (0 <= ["21701", "21702", "21704"].indexOf(n))
                            return 7
                    }
                },
                5: {
                    1: function(n) {
                        if (0 <= ["21015", "21016"].indexOf(n))
                            return 0
                    }
                }
            }
        });
        a = r[n = Tool.IsSC(n) && !Tool.IsEUorWD(n) ? "sc" : n] && r[n][t] && r[n][t][o] ? r[n][t][o](a) : "";
        return a || 0 == a ? a : ""
    },
    GetOuterDropOption: function(n, t) {
        var o = {
            sc: {
                1: [langFont.Font_FT, langFont.Font_1stHalf],
                2: [langFont.Font_FT, langFont.Font_1stHalf],
                3: [langFont.Font_Goal, langFont.Font_SCCorner, langFont.Font_Punishment],
                4: [langFont.Font_FT, langFont.Font_1stHalf],
                5: [],
                6: [],
                7: []
            },
            bk: {
                1: [langFont.Font_FT, langFont.Font_1stHalf],
                2: [],
                3: [langFont.Font_All, langFont.Font_BKQuarters[0], langFont.Font_BKQuarters[1], langFont.Font_BKQuarters[2], langFont.Font_BKQuarters[3]],
                4: [langFont.Font_All, langFont.Font_FT, langFont.Font_1stHalf, langFont.Font_2ndHalf, langFont.Font_BKQuartersLang[0], langFont.Font_BKQuartersLang[1], langFont.Font_BKQuartersLang[2], langFont.Font_BKQuartersLang[3]],
                5: [langFont.Font_All, langFont.Font_BKQuarters[0], langFont.Font_BKQuarters[2]],
                6: [],
                7: []
            },
            bb: {
                1: [langFont.Font_FT, langFont.Font_1stHalf],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [langFont.Font_FT, langFont.Font_1stHalf],
                7: [],
                8: [],
                9: [langFont.Font_All, langFont.Font_BBRounds[1], langFont.Font_BBRounds[2], langFont.Font_BBRounds[3], langFont.Font_BBRounds[4], langFont.Font_BBRounds[5], langFont.Font_BBRounds[6], langFont.Font_BBRounds[7]],
                10: []
            },
            tn: {
                1: [langFont.Font_TNGames, langFont.Font_TNSets],
                2: [langFont.Font_All, langFont.Font_TNSetsItems[0], langFont.Font_TNSetsItems[1], langFont.Font_TNSetsItems[2]],
                3: [langFont.Font_TNGames, langFont.Font_TNSets],
                4: [langFont.Font_All, langFont.Font_TNSetsItems[0], langFont.Font_TNSetsItems[1], langFont.Font_TNSetsItems[2], langFont.Font_TNSetsItems[3], langFont.Font_TNSetsItems[4]],
                5: []
            },
            ih: {
                1: [],
                2: [langFont.Font_All, langFont.Font_IHQuarters[0], langFont.Font_IHQuarters[1], langFont.Font_IHQuarters[2]],
                3: [],
                4: []
            },
            vl: {
                1: [langFont.Font_VLGames, langFont.Font_VLTotal],
                2: [],
                3: [langFont.Font_VLGames, langFont.Font_VLTotal],
                4: [langFont.Font_All, langFont.Font_VLSetsItems[0], langFont.Font_VLSetsItems[1], langFont.Font_VLSetsItems[2], langFont.Font_VLSetsItems[3], langFont.Font_VLSetsItems[4], langFont.Font_VLSetsItems[5], langFont.Font_VLSetsItems[6]],
                5: []
            },
            bm: {
                1: [langFont.Font_BMGames, langFont.Font_BMTotal],
                2: [],
                3: [langFont.Font_BMGames, langFont.Font_BMTotal],
                4: [langFont.Font_All, langFont.Font_BMSetsItems[0], langFont.Font_BMSetsItems[1], langFont.Font_BMSetsItems[2], langFont.Font_BMSetsItems[3], langFont.Font_BMSetsItems[4]],
                5: []
            },
            es: {
                1: [],
                2: [langFont.Font_ESGameItems[0], langFont.Font_ESGameItems[1], langFont.Font_ESGameItems[2], langFont.Font_ESGameItems[3], langFont.Font_ESGameItems[4], langFont.Font_ESGameItems[5], langFont.Font_ESGameItems[6]],
                3: [langFont.Font_ESGameItems[0], langFont.Font_ESGameItems[1], langFont.Font_ESGameItems[2], langFont.Font_ESGameItems[3], langFont.Font_ESGameItems[4], langFont.Font_ESGameItems[5], langFont.Font_ESGameItems[6], langFont.Font_ESGameItems[7], langFont.Font_ESGameItems[8], langFont.Font_ESGameItems[9], langFont.Font_ESGameItems[10], langFont.Font_ESGameItems[11], langFont.Font_ESGameItems[12], langFont.Font_ESGameItems[13], langFont.Font_ESGameItems[14]],
                4: []
            },
            af: {
                1: [langFont.Font_FT, langFont.Font_1stHalf],
                2: [],
                3: [langFont.Font_All, langFont.Font_AFQuarters[0], langFont.Font_AFQuarters[1], langFont.Font_AFQuarters[2], langFont.Font_AFQuarters[3]],
                4: [langFont.Font_FT, langFont.Font_1stHalf],
                5: [langFont.Font_All, langFont.Font_AFQuarters[0], langFont.Font_AFQuarters[2]],
                6: []
            },
            pb: {
                1: [],
                2: []
            },
            tt: {
                1: [langFont.Font_TTGames, langFont.Font_TTTotal],
                2: [],
                3: [langFont.Font_TTGames, langFont.Font_TTTotal],
                4: [langFont.Font_All, langFont.Font_TTSetsItems[0], langFont.Font_TTSetsItems[1], langFont.Font_TTSetsItems[2], langFont.Font_TTSetsItems[3], langFont.Font_TTSetsItems[4], langFont.Font_TTSetsItems[5], langFont.Font_TTSetsItems[6]],
                5: []
            },
            hb: {
                1: [langFont.Font_FT, langFont.Font_1stHalf],
                2: [langFont.Font_FT, langFont.Font_1stHalf]
            },
            wp: {
                1: [langFont.Font_FT, langFont.Font_1stHalf]
            },
            op: {
                0: []
            },
            ot: {
                1: []
            },
            bx: {
                1: []
            }
        }
          , a = {
            sc: {
                1: [],
                2: [langFont.Font_FT, langFont.Font_1stHalf],
                3: [langFont.Font_SCSpecific15Items[0], langFont.Font_SCSpecific15Items[1], langFont.Font_SCSpecific15Items[2], langFont.Font_SCSpecific15Items[3], langFont.Font_SCSpecific15Items[4], langFont.Font_SCSpecific15Items[5]],
                4: [langFont.Font_FT, langFont.Font_1stHalf],
                5: [langFont.Font_FT, langFont.Font_1stHalf],
                6: [],
                7: [langFont.Font_SCSpecific15Items[0], langFont.Font_SCSpecific15Items[1], langFont.Font_SCSpecific15Items[2], langFont.Font_SCSpecific15Items[3], langFont.Font_SCSpecific15Items[4], langFont.Font_SCSpecific15Items[5]]
            },
            bk: {
                1: [],
                2: [],
                3: [langFont.Font_BKQuarters[0], langFont.Font_BKQuarters[1], langFont.Font_BKQuarters[2], langFont.Font_BKQuarters[3]],
                4: [langFont.Font_FT, langFont.Font_1stHalf, langFont.Font_2ndHalf, langFont.Font_BKQuartersLang[0], langFont.Font_BKQuartersLang[1], langFont.Font_BKQuartersLang[2], langFont.Font_BKQuartersLang[3]],
                5: [langFont.Font_BKQuarters[0], langFont.Font_BKQuarters[2]],
                6: [],
                7: [langFont.Font_FT, langFont.Font_1stHalf, langFont.Font_2ndHalf, langFont.Font_BKQuartersLang[0], langFont.Font_BKQuartersLang[1], langFont.Font_BKQuartersLang[2], langFont.Font_BKQuartersLang[3]]
            },
            bb: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [langFont.Font_BBRounds[1], langFont.Font_BBRounds[2], langFont.Font_BBRounds[3], langFont.Font_BBRounds[4], langFont.Font_BBRounds[5], langFont.Font_BBRounds[6], langFont.Font_BBRounds[7]],
                10: []
            },
            tn: {
                1: [],
                2: [langFont.Font_TNSetsItems[0], langFont.Font_TNSetsItems[1], langFont.Font_TNSetsItems[2]],
                3: [],
                4: [langFont.Font_TNSetsItems[0], langFont.Font_TNSetsItems[1], langFont.Font_TNSetsItems[2], langFont.Font_TNSetsItems[3], langFont.Font_TNSetsItems[4]],
                5: []
            },
            ih: {
                1: [],
                2: [langFont.Font_IHQuarters[0], langFont.Font_IHQuarters[1], langFont.Font_IHQuarters[2]],
                3: [],
                4: []
            },
            vl: {
                1: [],
                2: [],
                3: [],
                4: [langFont.Font_VLSetsItems[0], langFont.Font_VLSetsItems[1], langFont.Font_VLSetsItems[2], langFont.Font_VLSetsItems[3], langFont.Font_VLSetsItems[4], langFont.Font_VLSetsItems[5], langFont.Font_VLSetsItems[6]],
                5: []
            },
            bm: {
                1: [],
                2: [],
                3: [],
                4: [langFont.Font_BMSetsItems[0], langFont.Font_BMSetsItems[1], langFont.Font_BMSetsItems[2], langFont.Font_BMSetsItems[3], langFont.Font_BMSetsItems[4]],
                5: []
            },
            es: {
                1: [],
                4: []
            },
            af: {
                1: [],
                2: [],
                3: [langFont.Font_AFQuarters[0], langFont.Font_AFQuarters[1], langFont.Font_AFQuarters[2], langFont.Font_AFQuarters[3]],
                4: [],
                5: [langFont.Font_AFQuarters[0], langFont.Font_AFQuarters[2]],
                6: [langFont.Font_FT, langFont.Font_1stHalf, langFont.Font_2ndHalf, langFont.Font_AFQuarters[0], langFont.Font_AFQuarters[1], langFont.Font_AFQuarters[2], langFont.Font_AFQuarters[3]]
            },
            pb: {
                1: [],
                2: []
            },
            tt: {
                1: [],
                2: [],
                3: [],
                4: [langFont.Font_TTSetsItems[0], langFont.Font_TTSetsItems[1], langFont.Font_TTSetsItems[2], langFont.Font_TTSetsItems[3], langFont.Font_TTSetsItems[4], langFont.Font_TTSetsItems[5], langFont.Font_TTSetsItems[6]],
                5: []
            },
            hb: {
                1: [],
                2: []
            },
            wp: {
                1: []
            },
            op: {
                0: []
            },
            ot: {
                1: []
            },
            bx: {
                1: []
            }
        }
          , o = o;
        return "mobile" === MainProperty.webDevice && (o = a),
        o[n = Tool.IsSC(n) ? Ball.sc.key : n] && o[n][t] ? o[n][t] : []
    },
    TransformMenuType: function(n, t, o) {
        var a = {
            none: {
                0: [["", Ball.none.val]],
                1: [["", Ball.none.val]],
                2: [["", Ball.none.val]]
            },
            sc: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.sc.val.All.idx], [langFont.Font_Corner, Ball.sc.val.Corner.idx], [langFont.Font_SCSpecific15, Ball.sc.val.DSFifteen.idx], [langFont.Font_SCCorrectScore, Ball.sc.val.Wave.idx], [langFont.Font_Goals, Ball.sc.val.GoalBall.idx], [langFont.Font_HaFu, Ball.sc.val.HalfAll.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.sc.val.All.idx], [langFont.Font_Corner, Ball.sc.val.Corner.idx], [langFont.Font_SCSpecific15, Ball.sc.val.DSFifteen.idx], [langFont.Font_SCCorrectScore, Ball.sc.val.Wave.idx], [langFont.Font_Goals, Ball.sc.val.GoalBall.idx], [langFont.Font_HaFu, Ball.sc.val.HalfAll.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.sc.val.All.idx], [langFont.Font_Corner, Ball.sc.val.Corner.idx], [langFont.Font_SCSpecific15, Ball.sc.val.ZDFifteen.idx], [langFont.Font_SCCorrectScore, Ball.sc.val.Wave.idx], [langFont.Font_Goals, Ball.sc.val.GoalBall.idx], [langFont.Font_HaFu, Ball.sc.val.HalfAll.idx]]
            },
            bk: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bk.val.All.idx], [langFont.Font_2ndHalf, Ball.bk.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.bk.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bk.val.DSSingleTeam.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bk.val.All.idx], [langFont.Font_2ndHalf, Ball.bk.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.bk.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bk.val.DSSingleTeam.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bk.val.All.idx], [langFont.Font_Qtr, Ball.bk.val.ZDSingle.idx], [langFont.Font_Total3PointerMade, Ball.bk.val.ZDThreePoints.idx], [langFont.Font_SingleTeamTotalScore, Ball.bk.val.ZDSingleTeam.idx]]
            },
            bb: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bb.val.DSAll.idx], [langFont["Font_Set1-3"], Ball.bb.val.DSOneToThree.idx], [langFont["Font_Set1-7"], Ball.bb.val.DSOneToSeven.idx], [langFont.Font_BBRounds1, Ball.bb.val.DSFirst.idx], [langFont.Font_SingleTeamTotalScore, Ball.bb.val.DSSingleTeam.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bb.val.DSAll.idx], [langFont["Font_Set1-3"], Ball.bb.val.DSOneToThree.idx], [langFont["Font_Set1-7"], Ball.bb.val.DSOneToSeven.idx], [langFont.Font_BBRounds1, Ball.bb.val.DSFirst.idx], [langFont.Font_SingleTeamTotalScore, Ball.bb.val.DSSingleTeam.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bb.val.ZDAll.idx], [langFont["Font_Set1-3"], Ball.bb.val.ZDOneToThree.idx], [langFont["Font_Set1-7"], Ball.bb.val.ZDOneToSeven.idx], [langFont.Font_BBGame, Ball.bb.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bb.val.ZDSingleTeam.idx]]
            },
            tn: {
                0: [[langFont.Font_TNGames + " / " + langFont.Font_TNSets, Ball.tn.val.DSAll.idx], [langFont.Font_Set, Ball.tn.val.DSSingle.idx]],
                1: [[langFont.Font_TNGames + " / " + langFont.Font_TNSets, Ball.tn.val.DSAll.idx], [langFont.Font_Set, Ball.tn.val.DSSingle.idx]],
                2: [[langFont.Font_TNGames + " / " + langFont.Font_TNSets, Ball.tn.val.ZDAll.idx], [langFont.Font_Set, Ball.tn.val.ZDSingle.idx], [langFont.Font_TNPlayerTotalGames, Ball.tn.val.ZDTotalGames.idx]]
            },
            ih: {
                0: [[langFont.Font_FT, Ball.ih.val.DSAll.idx], [langFont.Font_IHQtr, Ball.ih.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.ih.val.SingleTeam.idx]],
                1: [[langFont.Font_FT, Ball.ih.val.DSAll.idx], [langFont.Font_IHQtr, Ball.ih.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.ih.val.SingleTeam.idx]],
                2: [[langFont.Font_FT, Ball.ih.val.ZDAll.idx], [langFont.Font_SingleTeamTotalScore, Ball.ih.val.SingleTeam.idx]]
            },
            vl: {
                0: [[langFont.Font_VLGames + " / " + langFont.Font_VLTotal, Ball.vl.val.DSAll.idx], [langFont.Font_VLGameWinnerItems[0], Ball.vl.val.DSFirstWin.idx]],
                1: [[langFont.Font_VLGames + " / " + langFont.Font_VLTotal, Ball.vl.val.DSAll.idx], [langFont.Font_VLGameWinnerItems[0], Ball.vl.val.DSFirstWin.idx]],
                2: [[langFont.Font_VLGames + " / " + langFont.Font_VLTotal, Ball.vl.val.ZDAll.idx], [langFont.Font_VLGame, Ball.vl.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.vl.val.ZDSingleTeam.idx]]
            },
            bm: {
                0: [[langFont.Font_BMGames + " / " + langFont.Font_BMTotal, Ball.bm.val.DSAll.idx], [langFont.Font_BMGameWinnerItems[0], Ball.bm.val.DSFirstWin.idx]],
                1: [[langFont.Font_BMGames + " / " + langFont.Font_BMTotal, Ball.bm.val.DSAll.idx], [langFont.Font_BMGameWinnerItems[0], Ball.bm.val.DSFirstWin.idx]],
                2: [[langFont.Font_BMGames + " / " + langFont.Font_BMTotal, Ball.bm.val.ZDAll.idx], [langFont.Font_BMGame, Ball.bm.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bm.val.ZDSingleTeam.idx]]
            },
            es: {
                0: [[langFont.Font_ESGames, Ball.es.val.DSGame.idx], [langFont.Font_ESGame, Ball.es.val.Single.idx], [langFont.Font_ESSum, Ball.es.val.Total.idx]],
                1: [[langFont.Font_ESGames, Ball.es.val.DSGame.idx], [langFont.Font_ESGame, Ball.es.val.Single.idx], [langFont.Font_ESSum, Ball.es.val.Total.idx]],
                2: [[langFont.Font_ESGames, Ball.es.val.ZDGame.idx], [langFont.Font_ESGame, Ball.es.val.Single.idx], [langFont.Font_ESSum, Ball.es.val.Total.idx]]
            },
            af: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.af.val.DSAll.idx], [langFont.Font_2ndHalf, Ball.af.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.af.val.DSSingle.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.af.val.DSAll.idx], [langFont.Font_2ndHalf, Ball.af.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.af.val.DSSingle.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.af.val.ZDAll.idx], [langFont.Font_Qtr, Ball.af.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.af.val.ZDSingleTeam.idx]]
            },
            pb: {
                0: [[langFont.Font_PBGames, Ball.pb.val.DSGame.idx], [langFont.Font_PBGameWinnerItems[0], Ball.pb.val.DSFirstWin.idx]],
                1: [[langFont.Font_PBGames, Ball.pb.val.DSGame.idx], [langFont.Font_PBGameWinnerItems[0], Ball.pb.val.DSFirstWin.idx]],
                2: [[langFont.Font_PBGames, Ball.pb.val.DSGame.idx], [langFont.Font_PBGameWinnerItems[0], Ball.pb.val.DSFirstWin.idx]]
            },
            tt: {
                0: [[langFont.Font_TTGames + " / " + langFont.Font_TTTotal, Ball.tt.val.DSAll.idx], [langFont.Font_TTGameWinnerItems[0], Ball.tt.val.FirstWin.idx]],
                1: [[langFont.Font_TTGames + " / " + langFont.Font_TTTotal, Ball.tt.val.DSAll.idx], [langFont.Font_TTGameWinnerItems[0], Ball.tt.val.FirstWin.idx]],
                2: [[langFont.Font_TTGames + " / " + langFont.Font_TTTotal, Ball.tt.val.ZDAll.idx], [langFont.Font_TTGame, Ball.tt.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.tt.val.ZDSingleTeam.idx]]
            },
            hb: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.hb.val.DSAll.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.hb.val.DSAll.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.hb.val.ZDAll.idx]]
            },
            wp: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.wp.val.All.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.wp.val.All.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.wp.val.All.idx]]
            },
            bx: {
                0: [[langFont.Font_FT, Ball.bx.val.All.idx]],
                1: [[langFont.Font_FT, Ball.bx.val.All.idx]],
                2: [[langFont.Font_FT, Ball.bx.val.All.idx]]
            },
            ot: {
                0: [[langFont.Font_FT, Ball.ot.val.All.idx]],
                1: [[langFont.Font_FT, Ball.ot.val.All.idx]],
                2: [[langFont.Font_FT, Ball.ot.val.All.idx]]
            }
        }
          , r = {
            none: {
                0: [["", Ball.none.val]],
                1: [["", Ball.none.val]],
                2: [["", Ball.none.val]]
            },
            sc: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.sc.val.All.idx], [langFont.Font_Corner, Ball.sc.val.Corner.idx], [langFont.Font_SCSpecific15 + " - " + langFont.Font_Goal, Ball.sc.val.DSFifteen.idx], [langFont.Font_SCCorrectScore, Ball.sc.val.Wave.idx], [langFont.Font_Goals, Ball.sc.val.GoalBall.idx], [langFont.Font_HaFu, Ball.sc.val.HalfAll.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.sc.val.All.idx], [langFont.Font_Corner, Ball.sc.val.Corner.idx], [langFont.Font_SCSpecific15 + " - " + langFont.Font_Goal, Ball.sc.val.DSFifteen.idx], [langFont.Font_SCCorrectScore, Ball.sc.val.Wave.idx], [langFont.Font_Goals, Ball.sc.val.GoalBall.idx], [langFont.Font_HaFu, Ball.sc.val.HalfAll.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.sc.val.All.idx], [langFont.Font_Corner, Ball.sc.val.Corner.idx], [langFont.Font_SCSpecific15 + " - " + langFont.Font_Goal, Ball.sc.val.ZDFifteen.idx], [langFont.Font_SCCorrectScore, Ball.sc.val.Wave.idx], [langFont.Font_Goals, Ball.sc.val.GoalBall.idx], [langFont.Font_HaFu, Ball.sc.val.HalfAll.idx]]
            },
            bk: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bk.val.All.idx], [langFont.Font_2ndHalf, Ball.bk.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.bk.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bk.val.DSSingleTeam.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bk.val.All.idx], [langFont.Font_2ndHalf, Ball.bk.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.bk.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bk.val.DSSingleTeam.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bk.val.All.idx], [langFont.Font_Qtr, Ball.bk.val.ZDSingle.idx], [langFont.Font_Total3PointerMade, Ball.bk.val.ZDThreePoints.idx], [langFont.Font_SingleTeamTotalScore, Ball.bk.val.ZDSingleTeam.idx]]
            },
            bb: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bb.val.DSAll.idx], [langFont["Font_Set1-3"], Ball.bb.val.DSOneToThree.idx], [langFont["Font_Set1-7"], Ball.bb.val.DSOneToSeven.idx], [langFont.Font_BBRounds1, Ball.bb.val.DSFirst.idx], [langFont.Font_SingleTeamTotalScore, Ball.bb.val.DSSingleTeam.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bb.val.DSAll.idx], [langFont["Font_Set1-3"], Ball.bb.val.DSOneToThree.idx], [langFont["Font_Set1-7"], Ball.bb.val.DSOneToSeven.idx], [langFont.Font_BBRounds1, Ball.bb.val.DSFirst.idx], [langFont.Font_SingleTeamTotalScore, Ball.bb.val.DSSingleTeam.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.bb.val.ZDAll.idx], [langFont["Font_Set1-3"], Ball.bb.val.ZDOneToThree.idx], [langFont["Font_Set1-7"], Ball.bb.val.ZDOneToSeven.idx], [langFont.Font_BBGame, Ball.bb.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bb.val.ZDSingleTeam.idx]]
            },
            tn: {
                0: [[langFont.Font_TNGames + " / " + langFont.Font_TNSets, Ball.tn.val.DSAll.idx], [langFont.Font_Set, Ball.tn.val.DSSingle.idx]],
                1: [[langFont.Font_TNGames + " / " + langFont.Font_TNSets, Ball.tn.val.DSAll.idx], [langFont.Font_Set, Ball.tn.val.DSSingle.idx]],
                2: [[langFont.Font_TNGames + " / " + langFont.Font_TNSets, Ball.tn.val.ZDAll.idx], [langFont.Font_Set, Ball.tn.val.ZDSingle.idx], [langFont.Font_TNPlayerTotalGames, Ball.tn.val.ZDTotalGames.idx]]
            },
            ih: {
                0: [[langFont.Font_FT, Ball.ih.val.DSAll.idx], [langFont.Font_IHQtr, Ball.ih.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.ih.val.SingleTeam.idx]],
                1: [[langFont.Font_FT, Ball.ih.val.DSAll.idx], [langFont.Font_IHQtr, Ball.ih.val.DSSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.ih.val.SingleTeam.idx]],
                2: [[langFont.Font_FT, Ball.ih.val.ZDAll.idx], [langFont.Font_SingleTeamTotalScore, Ball.ih.val.SingleTeam.idx]]
            },
            vl: {
                0: [[langFont.Font_VLGames + " / " + langFont.Font_VLTotal, Ball.vl.val.DSAll.idx], [langFont.Font_VLGameWinnerItems[0], Ball.vl.val.DSFirstWin.idx]],
                1: [[langFont.Font_VLGames + " / " + langFont.Font_VLTotal, Ball.vl.val.DSAll.idx], [langFont.Font_VLGameWinnerItems[0], Ball.vl.val.DSFirstWin.idx]],
                2: [[langFont.Font_VLGames + " / " + langFont.Font_VLTotal, Ball.vl.val.ZDAll.idx], [langFont.Font_VLGame, Ball.vl.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.vl.val.ZDSingleTeam.idx]]
            },
            bm: {
                0: [[langFont.Font_BMGames + " / " + langFont.Font_BMTotal, Ball.bm.val.DSAll.idx], [langFont.Font_BMGameWinnerItems[0], Ball.bm.val.DSFirstWin.idx]],
                1: [[langFont.Font_BMGames + " / " + langFont.Font_BMTotal, Ball.bm.val.DSAll.idx], [langFont.Font_BMGameWinnerItems[0], Ball.bm.val.DSFirstWin.idx]],
                2: [[langFont.Font_BMGames + " / " + langFont.Font_BMTotal, Ball.bm.val.ZDAll.idx], [langFont.Font_BMGame, Ball.bm.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.bm.val.ZDSingleTeam.idx]]
            },
            es: {
                0: [[langFont.Font_ESGames, Ball.es.val.DSGame.idx]],
                1: [[langFont.Font_ESGames, Ball.es.val.DSGame.idx]],
                2: [[langFont.Font_ESGames, Ball.es.val.ZDGame.idx]]
            },
            af: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.af.val.DSAll.idx], [langFont.Font_2ndHalf, Ball.af.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.af.val.DSSingle.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.af.val.DSAll.idx], [langFont.Font_2ndHalf, Ball.af.val.DSDownHalf.idx], [langFont.Font_Qtr, Ball.af.val.DSSingle.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.af.val.ZDAll.idx], [langFont.Font_Qtr, Ball.af.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.af.val.ZDSingleTeam.idx]]
            },
            pb: {
                0: [[langFont.Font_PBGames, Ball.pb.val.DSGame.idx], [langFont.Font_PBGameWinnerItems[0], Ball.pb.val.DSFirstWin.idx]],
                1: [[langFont.Font_PBGames, Ball.pb.val.DSGame.idx], [langFont.Font_PBGameWinnerItems[0], Ball.pb.val.DSFirstWin.idx]],
                2: [[langFont.Font_PBGames, Ball.pb.val.DSGame.idx], [langFont.Font_PBGameWinnerItems[0], Ball.pb.val.DSFirstWin.idx]]
            },
            tt: {
                0: [[langFont.Font_TTGames + " / " + langFont.Font_TTTotal, Ball.tt.val.DSAll.idx], [langFont.Font_TTGameWinnerItems[0], Ball.tt.val.FirstWin.idx]],
                1: [[langFont.Font_TTGames + " / " + langFont.Font_TTTotal, Ball.tt.val.DSAll.idx], [langFont.Font_TTGameWinnerItems[0], Ball.tt.val.FirstWin.idx]],
                2: [[langFont.Font_TTGames + " / " + langFont.Font_TTTotal, Ball.tt.val.ZDAll.idx], [langFont.Font_TTGame, Ball.tt.val.ZDSingle.idx], [langFont.Font_SingleTeamTotalScore, Ball.tt.val.ZDSingleTeam.idx]]
            },
            hb: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.hb.val.DSAll.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.hb.val.DSAll.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.hb.val.ZDAll.idx]]
            },
            wp: {
                0: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.wp.val.All.idx]],
                1: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.wp.val.All.idx]],
                2: [[langFont.Font_FT + " / " + langFont.Font_1stHalf, Ball.wp.val.All.idx]]
            },
            bx: {
                0: [[langFont.Font_FT, Ball.bx.val.All.idx]],
                1: [[langFont.Font_FT, Ball.bx.val.All.idx]],
                2: [[langFont.Font_FT, Ball.bx.val.All.idx]]
            },
            ot: {
                0: [[langFont.Font_FT, Ball.ot.val.All.idx]],
                1: [[langFont.Font_FT, Ball.ot.val.All.idx]],
                2: [[langFont.Font_FT, Ball.ot.val.All.idx]]
            }
        }
          , a = a;
        "mobile" === MainProperty.webDevice && (a = r);
        var g = a[n = Tool.IsSC(n) ? Ball.sc.key : n] && a[n][t] ? a[n][t] : [["", 1]];
        if (o) {
            for (var F = 0; F < g.length; F++)
                if (g[F][1] == o)
                    return g[F][0];
            return ""
        }
        return Tool.IsMultiSport(n) ? [["", 0]] : g
    },
    GetInnerTitle: function(n, t) {
        var o = {
            sc: {
                0: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_SCSpecific15, 1], [langFont.Font_SCCorner + " / " + langFont.Font_Punishment, 2], [langFont.Font_SCBoRuBan, 3], [langFont.Font_SpecialBet, 4]],
                1: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_SCSpecific15, 1], [langFont.Font_SCCorner + " / " + langFont.Font_Punishment, 2], [langFont.Font_SCBoRuBan, 3], [langFont.Font_SpecialBet, 4]],
                2: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_SCSpecific15, 1], [langFont.Font_SCCorner + " / " + langFont.Font_Punishment, 2], [langFont.Font_SCBoRuBan, 3], [langFont.Font_SpecialBet, 4]]
            },
            bk: {
                0: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_Qtr, 1], [langFont.Font_SpecialBet, 2], [langFont.Font_PlayerBet, 3]],
                1: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_Qtr, 1], [langFont.Font_SpecialBet, 2], [langFont.Font_PlayerBet, 3]],
                2: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_Qtr, 1], [langFont.Font_BKTotal3PointerMade, 4], [langFont.Font_SpecialBet, 5]]
            },
            bb: {
                0: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_BBGame, 1], [langFont.Font_SpecialBet, 2]],
                1: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_BBGame, 1], [langFont.Font_SpecialBet, 2]],
                2: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_BBGame, 1], [langFont.Font_SpecialBet, 2]]
            },
            tn: {
                0: [[langFont.Font_FT, 0], [langFont.Font_Set, 1]],
                1: [[langFont.Font_FT, 0], [langFont.Font_Set, 1]],
                2: [[langFont.Font_FT, 2], [langFont.Font_Set, 3], [langFont.Font_SpecialBet, 4]]
            },
            ih: {
                0: [[langFont.Font_FT, 0], [langFont.Font_IHQtr, 1]],
                1: [[langFont.Font_FT, 0], [langFont.Font_IHQtr, 1]],
                2: [[langFont.Font_FT, 2], [langFont.Font_IHQtr, 3], [langFont.Font_SpecialBet, 4]]
            },
            vl: {
                0: [[langFont.Font_FT, 0], [langFont.Font_VLGame, 1]],
                1: [[langFont.Font_FT, 0], [langFont.Font_VLGame, 1]],
                2: [[langFont.Font_FT, 2], [langFont.Font_VLGame, 3], [langFont.Font_SpecialBet, 4]]
            },
            bm: {
                0: [[langFont.Font_FT, 0], [langFont.Font_BMGame, 1]],
                1: [[langFont.Font_FT, 0], [langFont.Font_BMGame, 1]],
                2: [[langFont.Font_FT, 2], [langFont.Font_BMGame, 3], [langFont.Font_SpecialBet, 4]]
            },
            es: {
                0: [[langFont.Font_FT, 0], [langFont.Font_ESGameItems[0], 1], [langFont.Font_ESGameItems[1], 2], [langFont.Font_ESGameItems[2], 3], [langFont.Font_ESGameItems[3], 4], [langFont.Font_ESGameItems[4], 5], [langFont.Font_ESGameItems[5], 6], [langFont.Font_ESGameItems[6], 7], [langFont.Font_ESGameItems[7], 8], [langFont.Font_ESGameItems[8], 9], [langFont.Font_ESGameItems[9], 10], [langFont.Font_ESGameItems[10], 11], [langFont.Font_ESGameItems[11], 12], [langFont.Font_ESGameItems[12], 13], [langFont.Font_ESGameItems[13], 14], [langFont.Font_ESGameItems[14], 15]],
                1: [[langFont.Font_FT, 0], [langFont.Font_ESGameItems[0], 1], [langFont.Font_ESGameItems[1], 2], [langFont.Font_ESGameItems[2], 3], [langFont.Font_ESGameItems[3], 4], [langFont.Font_ESGameItems[4], 5], [langFont.Font_ESGameItems[5], 6], [langFont.Font_ESGameItems[6], 7], [langFont.Font_ESGameItems[7], 8], [langFont.Font_ESGameItems[8], 9], [langFont.Font_ESGameItems[9], 10], [langFont.Font_ESGameItems[10], 11], [langFont.Font_ESGameItems[11], 12], [langFont.Font_ESGameItems[12], 13], [langFont.Font_ESGameItems[13], 14], [langFont.Font_ESGameItems[14], 15]],
                2: [[langFont.Font_FT, 0], [langFont.Font_ESGameItems[0], 1], [langFont.Font_ESGameItems[1], 2], [langFont.Font_ESGameItems[2], 3], [langFont.Font_ESGameItems[3], 4], [langFont.Font_ESGameItems[4], 5], [langFont.Font_ESGameItems[5], 6], [langFont.Font_ESGameItems[6], 7], [langFont.Font_ESGameItems[7], 8], [langFont.Font_ESGameItems[8], 9], [langFont.Font_ESGameItems[9], 10], [langFont.Font_ESGameItems[10], 11], [langFont.Font_ESGameItems[11], 12], [langFont.Font_ESGameItems[12], 13], [langFont.Font_ESGameItems[13], 14], [langFont.Font_ESGameItems[14], 15]]
            },
            af: {
                0: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_Qtr, 1], [langFont.Font_SpecialBet, 2]],
                1: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_Qtr, 1], [langFont.Font_SpecialBet, 2]],
                2: [[langFont.Font_FT + " / " + langFont.Font_Halftime, 0], [langFont.Font_Qtr, 1], [langFont.Font_SpecialBet, 3]]
            },
            pb: {
                0: [[langFont.Font_FT, 0], [langFont.Font_PBGame, 1], [langFont.Font_SpecialBet, 2]],
                1: [[langFont.Font_FT, 0], [langFont.Font_PBGame, 1], [langFont.Font_SpecialBet, 2]],
                2: []
            },
            tt: {
                0: [[langFont.Font_FT, 0], [langFont.Font_TTGame, 1]],
                1: [[langFont.Font_FT, 0], [langFont.Font_TTGame, 1]],
                2: [[langFont.Font_FT, 0], [langFont.Font_TTGame, 2], [langFont.Font_SpecialBet, 3]]
            },
            hb: {
                0: [[langFont.Font_FT, 0], [langFont.Font_Halftime, 1]],
                1: [[langFont.Font_FT, 0], [langFont.Font_Halftime, 1]],
                2: [[langFont.Font_FT, 0], [langFont.Font_Halftime, 1]]
            },
            wp: {
                0: [[langFont.Font_FT, 0], [langFont.Font_Halftime, 1]],
                1: [[langFont.Font_FT, 0], [langFont.Font_Halftime, 1]],
                2: [[langFont.Font_FT, 0], [langFont.Font_Halftime, 1]]
            },
            op: {
                0: [[langFont.Font_FT, 0]],
                1: [[langFont.Font_FT, 0]],
                2: [[langFont.Font_FT, 0]]
            },
            ot: {
                0: [[langFont.Font_FT, 0]],
                1: [[langFont.Font_FT, 0]],
                2: [[langFont.Font_FT, 0]]
            },
            bx: {
                0: [[langFont.Font_FT, 0]],
                1: [[langFont.Font_FT, 0]],
                2: [[langFont.Font_FT, 0]]
            }
        };
        return o[n = Tool.IsSC(n) ? Ball.sc.key : n] && o[n][t] ? o[n][t] : []
    },
    GetInnerGroupSet: function(n, t, o) {
        o = {
            sc: [[[langFont.Font_FT, ["11003", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["11531", ["01", [langFont.Font_SCFirstGoal]], [[langFont.Font_Home, "011"], [langFont.Font_GRNoGoal, "013"], [langFont.Font_Guest, "012"]]], [[["11531", ["X", [langFont.Font_SCXGoal]], [[langFont.Font_Home, "X1"], [langFont.Font_GRNoGoal, "X3"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["11531", ["99", [langFont.Font_SCLastGoal]], [[langFont.Font_Home, "991"], [langFont.Font_GRNoGoal, "993"], [langFont.Font_Guest, "992"]]]], [langFont.Font_1stHalf, ["11103", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[[langFont.Font_SCSpecific15Items[0], !0, ""], ["11203", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[1], !0, ""], ["11213", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11211", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11212", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11214", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[2], !0, ""], ["11223", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11221", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11222", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11224", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[3], !0, ""], ["11233", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11231", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11232", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11234", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[4], !0, ""], ["11243", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11241", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11242", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11244", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[5], !0, ""], ["11253", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11251", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11252", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11254", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[[langFont.Font_SCFTCorner, !0, ""], ["11013", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["11506", ["01", [langFont.Font_SCFirstCorner]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], [[["11506", ["X", [langFont.Font_SCXCorner]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["11506", ["99", [langFont.Font_SCLastCorner]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [langFont.Font_SC1HCorner, ["11113", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11111", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11112", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11114", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["11576", ["99", [langFont.Font_SCLastCorner]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [[langFont.Font_SCSpecific15CornerItems[0], !0, ""], ["11303", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[1], !0, ""], ["11313", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11311", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11312", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11314", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[2], !0, ""], ["11323", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11321", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11322", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11324", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[3], !0, ""], ["11333", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11331", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11332", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11334", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[4], !0, ""], ["11343", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11341", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11342", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11344", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[5], !0, ""], ["11353", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11351", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11352", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11354", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCFTPunishment, !0, langFont.Font_SCPunishmentText], ["11023", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11021", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11022", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11024", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["11507", ["01", [langFont.Font_SCFirstPunishment]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], [[["11507", ["X", [langFont.Font_SCXPunishment]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["11507", ["99", [langFont.Font_SCLastPunishment]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [langFont.Font_SC1HPunishment, ["11123", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11121", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11122", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11124", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["11577", ["99", [langFont.Font_SCLastPunishment]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [[langFont.Font_SCSpecific15PunishmentItems[0], !0, ""], ["11403", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[1], !0, ""], ["11413", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11411", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11412", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11414", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[2], !0, ""], ["11423", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11421", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11422", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11424", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[3], !0, ""], ["11433", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11431", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11432", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11434", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[4], !0, ""], ["11443", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11441", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11442", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11444", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[5], !0, ""], ["11453", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11451", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11452", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11454", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_SCFTCorrectScore, ["11061", ["*", [langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest]], [[["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], ["4:4", "44"], ["1:3", "13"]], [["3:2", "32"], [langFont.Font_Else, "99"], ["2:3", "23"]], [["4:0", "40"], [], ["0:4", "04"]], [["4:1", "41"], [], ["1:4", "14"]], [["4:2", "42"], [], ["2:4", "24"]], [["4:3", "43"], [], ["3:4", "34"]]]]], [langFont.Font_SC1HCorrectScore, ["11161", ["*", [langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest]], [[["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], [langFont.Font_Else, "99"], ["1:3", "13"]], [["3:2", "32"], [], ["2:3", "23"]]]]], [langFont.Font_SCFTGoals, ["11062", ["*", ""], [["0 - 1", "01"], ["2 - 3", "23"], ["4 - 6", "46"], [langFont.Font_7orMore, "79"]]]], [langFont.Font_SC1HGoals, ["11162", ["*", ""], [["0", "0"], ["1", "1"], ["2", "2"], [langFont.Font_3orMore, "3"]]]], [langFont.Font_HaFu, ["11063", ["*", []], [[[langFont.Font_Home + " / " + langFont.Font_Home, o ? "11" : "22"], [langFont.Font_Home + " / " + langFont.Font_Peace, o ? "13" : "23"], [langFont.Font_Home + " / " + langFont.Font_Guest, o ? "12" : "21"]], [[langFont.Font_Peace + " / " + langFont.Font_Home, o ? "31" : "32"], [langFont.Font_Peace + " / " + langFont.Font_Peace, "33"], [langFont.Font_Peace + " / " + langFont.Font_Guest, o ? "32" : "31"]], [[langFont.Font_Guest + " / " + langFont.Font_Home, o ? "21" : "12"], [langFont.Font_Guest + " / " + langFont.Font_Peace, o ? "23" : "13"], [langFont.Font_Guest + " / " + langFont.Font_Guest, o ? "22" : "11"]]]]]], [[langFont.Font_HalfOfTheMostGoals, ["11071", ["*", [langFont.Font_SCThreeItems]], [[langFont.Font_1stHalf, "1"], [langFont.Font_Peace, "3"], [langFont.Font_2ndHalf, "2"]]], ["11070", ["*", [langFont.Font_SCDoubleItem]], [[langFont.Font_1stHalf, "1"], [langFont.Font_2ndHalf, "2"]]]], [langFont.Font_SCFTTotalGoals, [o ? "11064" : "11065", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "11065" : "11064", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SC1HTotalGoals, [o ? "11164" : "11165", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "11165" : "11164", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SCFTSingleTeamTotalCorner, [o ? "11015" : "11016", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "11016" : "11015", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SC1HSingleTeamTotalCorner, [o ? "11115" : "11116", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "11116" : "11115", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_FirstLastBet, [[["11605", ["01", [langFont.Font_SCFTFirstKick]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["11501", ["01", [langFont.Font_SCFTFirstOffside]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11501", ["99", [langFont.Font_SCFTLastOffside]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11571", ["99", [langFont.Font_SC1HLastOffside]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11502", ["01", [langFont.Font_SCFTFirstFreeKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11502", ["99", [langFont.Font_SCFTLastFreeKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11572", ["99", [langFont.Font_SC1HLastFreeKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11503", ["01", [langFont.Font_SCFTFirstOutOfBounds]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11503", ["99", [langFont.Font_SCFTLastOutOfBounds]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11504", ["01", [langFont.Font_SCFTFirstGoalKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11504", ["99", [langFont.Font_SCFTLastGoalKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11574", ["99", [langFont.Font_SC1HLastGoalKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11505", ["01", [langFont.Font_SCFTFirstSubstitute]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11505", ["99", [langFont.Font_SCFTLastSubstitute]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["11551", ["01", [langFont.Font_SC2HFirstOffside]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11552", ["01", [langFont.Font_SC2HFirstFreeKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11553", ["01", [langFont.Font_SC2HFirstOutOfBounds]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11554", ["01", [langFont.Font_SC2HFirstGoalKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11557", ["01", [langFont.Font_SC2HFirstPunishment]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["11556", ["01", [langFont.Font_SC2HFirstCorner]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]]], ["*", []], null]], [langFont.Font_ElsePlayMode, [[["11066", ["*", [langFont.Font_SCFTWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["11167", ["*", [langFont.Font_SC1HWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["11067", ["*", [langFont.Font_SC2HWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["11602", ["*", [langFont.Font_SCFTWhetherRedCard]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["11603", ["*", [langFont.Font_SCFTWhetherOvertime]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["11604", ["*", [langFont.Font_SCFTWhetherPenalties]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["11601", ["*", [langFont.Font_SCFTWhetherOwnGoals]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], [o ? "11068" : "11069", ["*", [langFont.Font_SCFTHomeWhetherLoseBall]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], [o ? "11069" : "11068", ["*", [langFont.Font_SCFTGuestWhetherLoseBall]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["11501", ["X", [langFont.Font_SCXOffside]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["11502", ["X", [langFont.Font_SCXFreeKick]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["11503", ["X", [langFont.Font_SCXOutOfBounds]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["11504", ["X", [langFont.Font_SCXGoalKick]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["11505", ["X", [langFont.Font_SCXSubstitute]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null]], [[langFont.Font_Penalties, !1, langFont.Font_SCPenaltyText], ["11703", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["11701", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["11702", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["11711", ["*", [langFont.Font_SCXRoundWin]], [[[langFont.Font_Home, "X1"], [langFont.Font_Peace, "X3"], [langFont.Font_Guest, "X2"]]]], ["11712", ["*", [langFont.Font_SCXHomeHandicapNotAll]], [[[langFont.Font_Yes, "X1"], [langFont.Font_No, "X2"]]]], ["11713", ["*", [langFont.Font_SCXGuestHandicapNotAll]], [[[langFont.Font_Yes, "X1"], [langFont.Font_No, "X2"]]]]]]],
            eu: [[[langFont.Font_FT, ["26003", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["26531", ["01", [langFont.Font_SCFirstGoal]], [[langFont.Font_Home, "011"], [langFont.Font_GRNoGoal, "013"], [langFont.Font_Guest, "012"]]], [[["26531", ["X", [langFont.Font_SCXGoal]], [[langFont.Font_Home, "X1"], [langFont.Font_GRNoGoal, "X3"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["26531", ["99", [langFont.Font_SCLastGoal]], [[langFont.Font_Home, "991"], [langFont.Font_GRNoGoal, "993"], [langFont.Font_Guest, "992"]]]], [langFont.Font_1stHalf, ["26103", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[[langFont.Font_SCSpecific15Items[0], !0, ""], ["26203", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[1], !0, ""], ["26213", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26211", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26212", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26214", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[2], !0, ""], ["26223", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26221", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26222", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26224", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[3], !0, ""], ["26233", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26231", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26232", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26234", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[4], !0, ""], ["26243", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26241", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26242", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26244", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[5], !0, ""], ["26253", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26251", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26252", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26254", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[[langFont.Font_SCFTCorner, !0, ""], ["26013", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["26506", ["01", [langFont.Font_SCFirstCorner]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], [[["26506", ["X", [langFont.Font_SCXCorner]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["26506", ["99", [langFont.Font_SCLastCorner]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [langFont.Font_SC1HCorner, ["26113", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26111", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26112", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26114", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["26576", ["99", [langFont.Font_SCLastCorner]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [[langFont.Font_SCSpecific15CornerItems[0], !0, ""], ["26303", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[1], !0, ""], ["26313", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26311", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26312", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26314", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[2], !0, ""], ["26323", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26321", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26322", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26324", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[3], !0, ""], ["26333", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26331", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26332", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26334", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[4], !0, ""], ["26343", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26341", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26342", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26344", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[5], !0, ""], ["26353", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26351", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26352", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26354", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCFTPunishment, !0, langFont.Font_SCPunishmentText], ["26023", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26021", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26022", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26024", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["26507", ["01", [langFont.Font_SCFirstPunishment]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], [[["26507", ["X", [langFont.Font_SCXPunishment]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["26507", ["99", [langFont.Font_SCLastPunishment]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [langFont.Font_SC1HPunishment, ["26123", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26121", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26122", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26124", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["26577", ["99", [langFont.Font_SCLastPunishment]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [[langFont.Font_SCSpecific15PunishmentItems[0], !0, ""], ["26403", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[1], !0, ""], ["26413", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26411", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26412", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26414", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[2], !0, ""], ["26423", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26421", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26422", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26424", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[3], !0, ""], ["26433", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26431", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26432", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26434", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[4], !0, ""], ["26443", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26441", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26442", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26444", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[5], !0, ""], ["26453", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26451", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26452", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26454", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_SCFTCorrectScore, ["26061", ["*", [langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest]], [[["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], ["4:4", "44"], ["1:3", "13"]], [["3:2", "32"], [langFont.Font_Else, "99"], ["2:3", "23"]], [["4:0", "40"], [], ["0:4", "04"]], [["4:1", "41"], [], ["1:4", "14"]], [["4:2", "42"], [], ["2:4", "24"]], [["4:3", "43"], [], ["3:4", "34"]]]]], [langFont.Font_SC1HCorrectScore, ["26161", ["*", [langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest]], [[["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], [langFont.Font_Else, "99"], ["1:3", "13"]], [["3:2", "32"], [], ["2:3", "23"]]]]], [langFont.Font_SCFTGoals, ["26062", ["*", ""], [["0 - 1", "01"], ["2 - 3", "23"], ["4 - 6", "46"], [langFont.Font_7orMore, "79"]]]], [langFont.Font_SC1HGoals, ["26162", ["*", ""], [["0", "0"], ["1", "1"], ["2", "2"], [langFont.Font_3orMore, "3"]]]], [langFont.Font_HaFu, ["26063", ["*", []], [[[langFont.Font_Home + " / " + langFont.Font_Home, o ? "11" : "22"], [langFont.Font_Home + " / " + langFont.Font_Peace, o ? "13" : "23"], [langFont.Font_Home + " / " + langFont.Font_Guest, o ? "12" : "21"]], [[langFont.Font_Peace + " / " + langFont.Font_Home, o ? "31" : "32"], [langFont.Font_Peace + " / " + langFont.Font_Peace, "33"], [langFont.Font_Peace + " / " + langFont.Font_Guest, o ? "32" : "31"]], [[langFont.Font_Guest + " / " + langFont.Font_Home, o ? "21" : "12"], [langFont.Font_Guest + " / " + langFont.Font_Peace, o ? "23" : "13"], [langFont.Font_Guest + " / " + langFont.Font_Guest, o ? "22" : "11"]]]]]], [[langFont.Font_HalfOfTheMostGoals, ["26071", ["*", [langFont.Font_SCThreeItems]], [[langFont.Font_1stHalf, "1"], [langFont.Font_Peace, "3"], [langFont.Font_2ndHalf, "2"]]], ["26070", ["*", [langFont.Font_SCDoubleItem]], [[langFont.Font_1stHalf, "1"], [langFont.Font_2ndHalf, "2"]]]], [langFont.Font_SCFTTotalGoals, [o ? "26064" : "26065", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "26065" : "26064", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SC1HTotalGoals, [o ? "26164" : "26165", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "26165" : "26164", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SCFTSingleTeamTotalCorner, [o ? "26015" : "26016", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "26016" : "26015", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SC1HSingleTeamTotalCorner, [o ? "26115" : "26116", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "26116" : "26115", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_FirstLastBet, [[["26605", ["01", [langFont.Font_SCFTFirstKick]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["26501", ["01", [langFont.Font_SCFTFirstOffside]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26501", ["99", [langFont.Font_SCFTLastOffside]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26571", ["99", [langFont.Font_SC1HLastOffside]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26502", ["01", [langFont.Font_SCFTFirstFreeKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26502", ["99", [langFont.Font_SCFTLastFreeKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26572", ["99", [langFont.Font_SC1HLastFreeKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26503", ["01", [langFont.Font_SCFTFirstOutOfBounds]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26503", ["99", [langFont.Font_SCFTLastOutOfBounds]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26504", ["01", [langFont.Font_SCFTFirstGoalKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26504", ["99", [langFont.Font_SCFTLastGoalKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26574", ["99", [langFont.Font_SC1HLastGoalKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26505", ["01", [langFont.Font_SCFTFirstSubstitute]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26505", ["99", [langFont.Font_SCFTLastSubstitute]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["26551", ["01", [langFont.Font_SC2HFirstOffside]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26552", ["01", [langFont.Font_SC2HFirstFreeKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26553", ["01", [langFont.Font_SC2HFirstOutOfBounds]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26554", ["01", [langFont.Font_SC2HFirstGoalKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26557", ["01", [langFont.Font_SC2HFirstPunishment]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["26556", ["01", [langFont.Font_SC2HFirstCorner]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]]], ["*", []], null]], [langFont.Font_ElsePlayMode, [[["26066", ["*", [langFont.Font_SCFTWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["26167", ["*", [langFont.Font_SC1HWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["26067", ["*", [langFont.Font_SC2HWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["26602", ["*", [langFont.Font_SCFTWhetherRedCard]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["26603", ["*", [langFont.Font_SCFTWhetherOvertime]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["26604", ["*", [langFont.Font_SCFTWhetherPenalties]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["26601", ["*", [langFont.Font_SCFTWhetherOwnGoals]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], [o ? "26068" : "26069", ["*", [langFont.Font_SCFTHomeWhetherLoseBall]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], [o ? "26069" : "26068", ["*", [langFont.Font_SCFTGuestWhetherLoseBall]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["26501", ["X", [langFont.Font_SCXOffside]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["26502", ["X", [langFont.Font_SCXFreeKick]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["26503", ["X", [langFont.Font_SCXOutOfBounds]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["26504", ["X", [langFont.Font_SCXGoalKick]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["26505", ["X", [langFont.Font_SCXSubstitute]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null]], [[langFont.Font_Penalties, !1, langFont.Font_SCPenaltyText], ["26703", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["26701", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["26702", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["26711", ["*", [langFont.Font_SCXRoundWin]], [[[langFont.Font_Home, "X1"], [langFont.Font_Peace, "X3"], [langFont.Font_Guest, "X2"]]]], ["26712", ["*", [langFont.Font_SCXHomeHandicapNotAll]], [[[langFont.Font_Yes, "X1"], [langFont.Font_No, "X2"]]]], ["26713", ["*", [langFont.Font_SCXGuestHandicapNotAll]], [[[langFont.Font_Yes, "X1"], [langFont.Font_No, "X2"]]]]]]],
            wd: [[[langFont.Font_FT, ["27003", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["27531", ["01", [langFont.Font_SCFirstGoal]], [[langFont.Font_Home, "011"], [langFont.Font_GRNoGoal, "013"], [langFont.Font_Guest, "012"]]], [[["27531", ["X", [langFont.Font_SCXGoal]], [[langFont.Font_Home, "X1"], [langFont.Font_GRNoGoal, "X3"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["27531", ["99", [langFont.Font_SCLastGoal]], [[langFont.Font_Home, "991"], [langFont.Font_GRNoGoal, "993"], [langFont.Font_Guest, "992"]]]], [langFont.Font_1stHalf, ["27103", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[[langFont.Font_SCSpecific15Items[0], !0, ""], ["27203", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[1], !0, ""], ["27213", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27211", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27212", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27214", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[2], !0, ""], ["27223", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27221", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27222", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27224", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[3], !0, ""], ["27233", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27231", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27232", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27234", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[4], !0, ""], ["27243", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27241", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27242", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27244", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15Items[5], !0, ""], ["27253", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27251", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27252", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27254", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[[langFont.Font_SCFTCorner, !0, ""], ["27013", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["27506", ["01", [langFont.Font_SCFirstCorner]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], [[["27506", ["X", [langFont.Font_SCXCorner]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["27506", ["99", [langFont.Font_SCLastCorner]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [langFont.Font_SC1HCorner, ["27113", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27111", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27112", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27114", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["27576", ["99", [langFont.Font_SCLastCorner]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [[langFont.Font_SCSpecific15CornerItems[0], !0, ""], ["27303", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[1], !0, ""], ["27313", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27311", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27312", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27314", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[2], !0, ""], ["27323", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27321", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27322", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27324", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[3], !0, ""], ["27333", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27331", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27332", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27334", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[4], !0, ""], ["27343", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27341", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27342", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27344", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15CornerItems[5], !0, ""], ["27353", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27351", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27352", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27354", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCFTPunishment, !0, langFont.Font_SCPunishmentText], ["27023", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27021", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27022", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27024", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["27507", ["01", [langFont.Font_SCFirstPunishment]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], [[["27507", ["X", [langFont.Font_SCXPunishment]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["27507", ["99", [langFont.Font_SCLastPunishment]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [langFont.Font_SC1HPunishment, ["27123", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27121", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27122", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27124", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], ["27577", ["99", [langFont.Font_SCLastPunishment]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]]], [[langFont.Font_SCSpecific15PunishmentItems[0], !0, ""], ["27403", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[1], !0, ""], ["27413", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27411", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27412", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27414", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[2], !0, ""], ["27423", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27421", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27422", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27424", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[3], !0, ""], ["27433", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27431", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27432", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27434", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[4], !0, ""], ["27443", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27441", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27442", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27444", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [[langFont.Font_SCSpecific15PunishmentItems[5], !0, ""], ["27453", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27451", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27452", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27454", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_SCFTCorrectScore, ["27061", ["*", [langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest]], [[["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], ["4:4", "44"], ["1:3", "13"]], [["3:2", "32"], [langFont.Font_Else, "99"], ["2:3", "23"]], [["4:0", "40"], [], ["0:4", "04"]], [["4:1", "41"], [], ["1:4", "14"]], [["4:2", "42"], [], ["2:4", "24"]], [["4:3", "43"], [], ["3:4", "34"]]]]], [langFont.Font_SC1HCorrectScore, ["27161", ["*", [langFont.Font_Home, langFont.Font_Peace, langFont.Font_Guest]], [[["1:0", "10"], ["0:0", "00"], ["0:1", "01"]], [["2:0", "20"], ["1:1", "11"], ["0:2", "02"]], [["2:1", "21"], ["2:2", "22"], ["1:2", "12"]], [["3:0", "30"], ["3:3", "33"], ["0:3", "03"]], [["3:1", "31"], [langFont.Font_Else, "99"], ["1:3", "13"]], [["3:2", "32"], [], ["2:3", "23"]]]]], [langFont.Font_SCFTGoals, ["27062", ["*", ""], [["0 - 1", "01"], ["2 - 3", "23"], ["4 - 6", "46"], [langFont.Font_7orMore, "79"]]]], [langFont.Font_SC1HGoals, ["27162", ["*", ""], [["0", "0"], ["1", "1"], ["2", "2"], [langFont.Font_3orMore, "3"]]]], [langFont.Font_HaFu, ["27063", ["*", []], [[[langFont.Font_Home + " / " + langFont.Font_Home, o ? "11" : "22"], [langFont.Font_Home + " / " + langFont.Font_Peace, o ? "13" : "23"], [langFont.Font_Home + " / " + langFont.Font_Guest, o ? "12" : "21"]], [[langFont.Font_Peace + " / " + langFont.Font_Home, o ? "31" : "32"], [langFont.Font_Peace + " / " + langFont.Font_Peace, "33"], [langFont.Font_Peace + " / " + langFont.Font_Guest, o ? "32" : "31"]], [[langFont.Font_Guest + " / " + langFont.Font_Home, o ? "21" : "12"], [langFont.Font_Guest + " / " + langFont.Font_Peace, o ? "23" : "13"], [langFont.Font_Guest + " / " + langFont.Font_Guest, o ? "22" : "11"]]]]]], [[langFont.Font_HalfOfTheMostGoals, ["27071", ["*", [langFont.Font_SCThreeItems]], [[langFont.Font_1stHalf, "1"], [langFont.Font_Peace, "3"], [langFont.Font_2ndHalf, "2"]]], ["27070", ["*", [langFont.Font_SCDoubleItem]], [[langFont.Font_1stHalf, "1"], [langFont.Font_2ndHalf, "2"]]]], [langFont.Font_SCFTTotalGoals, [o ? "27064" : "27065", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "27065" : "27064", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SC1HTotalGoals, [o ? "27164" : "27165", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "27165" : "27164", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SCFTSingleTeamTotalCorner, [o ? "27015" : "27016", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "27016" : "27015", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_SC1HSingleTeamTotalCorner, [o ? "27115" : "27116", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "27116" : "27115", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_FirstLastBet, [[["27605", ["01", [langFont.Font_SCFTFirstKick]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["27501", ["01", [langFont.Font_SCFTFirstOffside]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27501", ["99", [langFont.Font_SCFTLastOffside]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27571", ["99", [langFont.Font_SC1HLastOffside]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27502", ["01", [langFont.Font_SCFTFirstFreeKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27502", ["99", [langFont.Font_SCFTLastFreeKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27572", ["99", [langFont.Font_SC1HLastFreeKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27503", ["01", [langFont.Font_SCFTFirstOutOfBounds]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27503", ["99", [langFont.Font_SCFTLastOutOfBounds]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27504", ["01", [langFont.Font_SCFTFirstGoalKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27504", ["99", [langFont.Font_SCFTLastGoalKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27574", ["99", [langFont.Font_SC1HLastGoalKick]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27505", ["01", [langFont.Font_SCFTFirstSubstitute]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27505", ["99", [langFont.Font_SCFTLastSubstitute]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["27551", ["01", [langFont.Font_SC2HFirstOffside]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27552", ["01", [langFont.Font_SC2HFirstFreeKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27553", ["01", [langFont.Font_SC2HFirstOutOfBounds]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27554", ["01", [langFont.Font_SC2HFirstGoalKick]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27557", ["01", [langFont.Font_SC2HFirstPunishment]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["27556", ["01", [langFont.Font_SC2HFirstCorner]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]]], ["*", []], null]], [langFont.Font_ElsePlayMode, [[["27066", ["*", [langFont.Font_SCFTWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["27167", ["*", [langFont.Font_SC1HWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["27067", ["*", [langFont.Font_SC2HWhetherBothTeamsScored]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["27602", ["*", [langFont.Font_SCFTWhetherRedCard]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["27603", ["*", [langFont.Font_SCFTWhetherOvertime]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["27604", ["*", [langFont.Font_SCFTWhetherPenalties]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["27601", ["*", [langFont.Font_SCFTWhetherOwnGoals]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], [o ? "27068" : "27069", ["*", [langFont.Font_SCFTHomeWhetherLoseBall]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], [o ? "27069" : "27068", ["*", [langFont.Font_SCFTGuestWhetherLoseBall]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], ["27501", ["X", [langFont.Font_SCXOffside]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["27502", ["X", [langFont.Font_SCXFreeKick]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["27503", ["X", [langFont.Font_SCXOutOfBounds]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["27504", ["X", [langFont.Font_SCXGoalKick]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["27505", ["X", [langFont.Font_SCXSubstitute]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null]], [[langFont.Font_Penalties, !1, langFont.Font_SCPenaltyText], ["27703", ["*", [langFont.Font_WinSC]], [[langFont.Font_Home, "1"], [langFont.Font_Peace, "3"], [langFont.Font_Guest, "2"]]], ["27701", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["27702", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["27711", ["*", [langFont.Font_SCXRoundWin]], [[[langFont.Font_Home, "X1"], [langFont.Font_Peace, "X3"], [langFont.Font_Guest, "X2"]]]], ["27712", ["*", [langFont.Font_SCXHomeHandicapNotAll]], [[[langFont.Font_Yes, "X1"], [langFont.Font_No, "X2"]]]], ["27713", ["*", [langFont.Font_SCXGuestHandicapNotAll]], [[[langFont.Font_Yes, "X1"], [langFont.Font_No, "X2"]]]]]]],
            bk: [[[langFont.Font_FT, ["12001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_1stHalf, ["12101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_2ndHalf, ["12201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_BKQuarters[0], ["12301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKQuarters[1], ["12401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12403", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKQuarters[2], ["12501", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12502", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12503", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12504", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKQuarters[3], ["12601", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12602", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12603", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12604", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_BKFirstLastPoint, ["12021", ["*", [langFont.Font_BKFTFirstPoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["12022", ["*", [langFont.Font_BKFTLastPoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_MostPointsInOneQuarter, ["12023", ["*", [langFont.Font_BKFTMostPointsInOneQuarter]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_PriorityGet, ["12012", ["05", [langFont.Font_BKPriorityGetPointItems[0]]], [[langFont.Font_Home, "051"], [langFont.Font_Guest, "052"]]], ["12012", ["10", [langFont.Font_BKPriorityGetPointItems[1]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["12012", ["15", [langFont.Font_BKPriorityGetPointItems[2]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["12012", ["20", [langFont.Font_BKPriorityGetPointItems[3]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]], ["12012", ["25", [langFont.Font_BKPriorityGetPointItems[4]]], [[langFont.Font_Home, "251"], [langFont.Font_Guest, "252"]]], ["12012", ["30", [langFont.Font_BKPriorityGetPointItems[5]]], [[langFont.Font_Home, "301"], [langFont.Font_Guest, "302"]]], ["12012", ["35", [langFont.Font_BKPriorityGetPointItems[6]]], [[langFont.Font_Home, "351"], [langFont.Font_Guest, "352"]]], ["12012", ["40", [langFont.Font_BKPriorityGetPointItems[7]]], [[langFont.Font_Home, "401"], [langFont.Font_Guest, "402"]]], ["12012", ["45", [langFont.Font_BKPriorityGetPointItems[8]]], [[langFont.Font_Home, "451"], [langFont.Font_Guest, "452"]]], ["12012", ["50", [langFont.Font_BKPriorityGetPointItems[9]]], [[langFont.Font_Home, "501"], [langFont.Font_Guest, "502"]]], ["12112", ["05", [langFont.Font_BK1HQuarterPriorityGetPointItems[0]]], [[langFont.Font_Home, "051"], [langFont.Font_Guest, "052"]]], ["12112", ["10", [langFont.Font_BK1HQuarterPriorityGetPointItems[1]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["12112", ["15", [langFont.Font_BK1HQuarterPriorityGetPointItems[2]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["12112", ["20", [langFont.Font_BK1HQuarterPriorityGetPointItems[3]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]], ["12112", ["25", [langFont.Font_BK1HQuarterPriorityGetPointItems[4]]], [[langFont.Font_Home, "251"], [langFont.Font_Guest, "252"]]], ["12112", ["30", [langFont.Font_BK1HQuarterPriorityGetPointItems[5]]], [[langFont.Font_Home, "301"], [langFont.Font_Guest, "302"]]], ["12112", ["35", [langFont.Font_BK1HQuarterPriorityGetPointItems[6]]], [[langFont.Font_Home, "351"], [langFont.Font_Guest, "352"]]], ["12212", ["05", [langFont.Font_BK2HQuarterPriorityGetPointItems[0]]], [[langFont.Font_Home, "051"], [langFont.Font_Guest, "052"]]], ["12212", ["10", [langFont.Font_BK2HQuarterPriorityGetPointItems[1]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["12212", ["15", [langFont.Font_BK2HQuarterPriorityGetPointItems[2]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["12212", ["20", [langFont.Font_BK2HQuarterPriorityGetPointItems[3]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]], ["12212", ["25", [langFont.Font_BK2HQuarterPriorityGetPointItems[4]]], [[langFont.Font_Home, "251"], [langFont.Font_Guest, "252"]]], ["12212", ["30", [langFont.Font_BK2HQuarterPriorityGetPointItems[5]]], [[langFont.Font_Home, "301"], [langFont.Font_Guest, "302"]]], ["12212", ["35", [langFont.Font_BK2HQuarterPriorityGetPointItems[6]]], [[langFont.Font_Home, "351"], [langFont.Font_Guest, "352"]]], ["12312", ["05", [langFont.Font_BK1stQuarterPriorityGetPointItems[0]]], [[langFont.Font_Home, "051"], [langFont.Font_Guest, "052"]]], ["12312", ["10", [langFont.Font_BK1stQuarterPriorityGetPointItems[1]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["12312", ["15", [langFont.Font_BK1stQuarterPriorityGetPointItems[2]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["12312", ["20", [langFont.Font_BK1stQuarterPriorityGetPointItems[3]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]], ["12412", ["05", [langFont.Font_BK2ndQuarterPriorityGetPointItems[0]]], [[langFont.Font_Home, "051"], [langFont.Font_Guest, "052"]]], ["12412", ["10", [langFont.Font_BK2ndQuarterPriorityGetPointItems[1]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["12412", ["15", [langFont.Font_BK2ndQuarterPriorityGetPointItems[2]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["12412", ["20", [langFont.Font_BK2ndQuarterPriorityGetPointItems[3]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]], ["12512", ["05", [langFont.Font_BK3rdQuarterPriorityGetPointItems[0]]], [[langFont.Font_Home, "051"], [langFont.Font_Guest, "052"]]], ["12512", ["10", [langFont.Font_BK3rdQuarterPriorityGetPointItems[1]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["12512", ["15", [langFont.Font_BK3rdQuarterPriorityGetPointItems[2]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["12512", ["20", [langFont.Font_BK3rdQuarterPriorityGetPointItems[3]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]], ["12612", ["05", [langFont.Font_BK4thQuarterPriorityGetPointItems[0]]], [[langFont.Font_Home, "051"], [langFont.Font_Guest, "052"]]], ["12612", ["10", [langFont.Font_BK4thQuarterPriorityGetPointItems[1]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["12612", ["15", [langFont.Font_BK4thQuarterPriorityGetPointItems[2]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["12612", ["20", [langFont.Font_BK4thQuarterPriorityGetPointItems[3]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]]], [langFont.Font_BKFTTotal3PointerMade, ["12701", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12702", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12703", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_FTTotalScore, [o ? "12005" : "12007", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12006" : "12008", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "12007" : "12005", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12008" : "12006", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKTotalScoreItems[0], [o ? "12105" : "12107", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12106" : "12108", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "12107" : "12105", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12108" : "12106", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKTotalScoreItems[1], [o ? "12205" : "12207", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12206" : "12208", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "12207" : "12205", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12208" : "12206", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKTotalScoreItems[2], [o ? "12305" : "12307", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12306" : "12308", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "12307" : "12305", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12308" : "12306", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKTotalScoreItems[3], [o ? "12405" : "12407", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12406" : "12408", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "12407" : "12405", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12408" : "12406", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKTotalScoreItems[4], [o ? "12505" : "12507", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12506" : "12508", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "12507" : "12505", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12508" : "12506", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKTotalScoreItems[5], [o ? "12605" : "12607", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12606" : "12608", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "12607" : "12605", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12608" : "12606", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKFTAssist, ["12704", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12705", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12706", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKFTRebound, ["12707", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12708", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12709", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKFTSteal, ["12710", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12711", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12712", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKFTBlock, ["12713", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12714", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12715", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKFTFreeThrow, ["12716", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12717", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12718", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKFTTurnover, ["12719", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12720", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12721", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ElsePlayMode, ["12801", ["01", [langFont.Font_BKFTFirst2PointerMade]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12801", ["02", [langFont.Font_BKFTSecond2PointerMade]], [[langFont.Font_Home, "21"], [langFont.Font_Guest, "22"]]], ["12801", ["09", [langFont.Font_BKFTLast2PointerMade]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12010", ["01", [langFont.Font_BKFT3PointerMade[0]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12010", ["02", [langFont.Font_BKFT3PointerMade[1]]], [[langFont.Font_Home, "21"], [langFont.Font_Guest, "22"]]], ["12010", ["03", [langFont.Font_BKFT3PointerMade[2]]], [[langFont.Font_Home, "31"], [langFont.Font_Guest, "32"]]], ["12010", ["04", [langFont.Font_BKFT3PointerMade[3]]], [[langFont.Font_Home, "41"], [langFont.Font_Guest, "42"]]], ["12010", ["05", [langFont.Font_BKFT3PointerMade[4]]], [[langFont.Font_Home, "51"], [langFont.Font_Guest, "52"]]], ["12010", ["09", [langFont.Font_BKFT3PointerMade[5]]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12410", ["01", [langFont.Font_BK2ndQuarter3PointerMade[0]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12410", ["02", [langFont.Font_BK2ndQuarter3PointerMade[1]]], [[langFont.Font_Home, "21"], [langFont.Font_Guest, "22"]]], ["12410", ["03", [langFont.Font_BK2ndQuarter3PointerMade[2]]], [[langFont.Font_Home, "31"], [langFont.Font_Guest, "32"]]], ["12510", ["01", [langFont.Font_BK3rdQuarter3PointerMade[0]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12510", ["02", [langFont.Font_BK3rdQuarter3PointerMade[1]]], [[langFont.Font_Home, "21"], [langFont.Font_Guest, "22"]]], ["12510", ["03", [langFont.Font_BK3rdQuarter3PointerMade[2]]], [[langFont.Font_Home, "31"], [langFont.Font_Guest, "32"]]], ["12610", ["01", [langFont.Font_BK4thQuarter3PointerMade[0]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12610", ["02", [langFont.Font_BK4thQuarter3PointerMade[1]]], [[langFont.Font_Home, "21"], [langFont.Font_Guest, "22"]]], ["12610", ["03", [langFont.Font_BK4thQuarter3PointerMade[2]]], [[langFont.Font_Home, "31"], [langFont.Font_Guest, "32"]]], ["12803", ["01", [langFont.Font_BKFTFirstRebound]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12803", ["09", [langFont.Font_BKFTLastRebound]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12804", ["01", [langFont.Font_BKFTFirstTimeout]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12804", ["09", [langFont.Font_BKFTLastTimeout]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12011", ["01", [langFont.Font_BKFTFirstFreeThrow]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12011", ["09", [langFont.Font_BKFTLastFreeThrow]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12411", ["01", [langFont.Font_BKFirstFreeThrowItems[0]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12411", ["09", [langFont.Font_BKLastFreeThrowItems[0]]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12511", ["01", [langFont.Font_BKFirstFreeThrowItems[1]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12511", ["09", [langFont.Font_BKLastFreeThrowItems[1]]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12611", ["01", [langFont.Font_BKFirstFreeThrowItems[2]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12611", ["09", [langFont.Font_BKLastFreeThrowItems[2]]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12802", ["01", [langFont.Font_BKFTFirstFoul]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12802", ["09", [langFont.Font_BKFTLastFoul]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12109", ["09", [langFont.Font_BKFirstOrLastGetPoint[0]]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12209", ["01", [langFont.Font_BKFirstOrLastGetPoint[1]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12309", ["09", [langFont.Font_BKFirstOrLastGetPoint[2]]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12409", ["01", [langFont.Font_BKFirstOrLastGetPoint[3]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]], ["12509", ["09", [langFont.Font_BKFirstOrLastGetPoint[4]]], [[langFont.Font_Home, "91"], [langFont.Font_Guest, "92"]]], ["12609", ["01", [langFont.Font_BKFirstOrLastGetPoint[5]]], [[langFont.Font_Home, "11"], [langFont.Font_Guest, "12"]]]]], [[langFont.Font_BKPlayerScore, ["12758", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12759", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12760", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKPlayer3Point, ["12761", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12762", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12763", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKPlayerAssist, ["12764", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12765", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12766", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKPlayerRebound, ["12767", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12758", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12769", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKPlayerBlock, ["12782", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12783", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12784", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKPlayerFreeThrow, ["12776", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12777", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12778", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BKPlayerTurnover, ["12779", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12780", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12781", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_BKTotal3PointerMade, ["12701", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["12702", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["12703", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_FTTotalScore, [o ? "12005" : "12007", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12007" : "12005", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BKTotalScoreItems[0], [o ? "12105" : "12107", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12107" : "12105", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BKTotalScoreItems[1], [o ? "12205" : "12207", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12207" : "12205", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BKTotalScoreItems[2], [o ? "12305" : "12307", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12307" : "12305", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BKTotalScoreItems[3], [o ? "12405" : "12407", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12407" : "12405", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BKTotalScoreItems[4], [o ? "12505" : "12507", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12507" : "12505", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BKTotalScoreItems[5], [o ? "12605" : "12607", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "12607" : "12605", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            bb: [[[langFont.Font_FT, ["13001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13005", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_1stHalf, ["13051", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13052", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13053", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13054", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont["Font_Set1-3"], ["13031", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13032", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13033", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13035", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13034", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont["Font_Set1-7"], ["13071", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13072", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13073", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13075", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13074", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_BBGetPointItems[0], ["13111", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13112", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13113", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBGetPointItems[1], ["13121", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13122", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13123", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBGetPointItems[2], ["13131", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13132", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13133", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBGetPointItems[3], ["13141", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13142", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13143", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBGetPointItems[4], ["13151", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13152", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13153", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBGetPointItems[5], ["13161", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13162", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13163", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBGetPointItems[6], ["13171", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13172", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13173", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBGetPointItems[7], ["13181", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13182", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13183", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[0], ["13211", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13212", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13213", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[1], ["13221", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13222", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13223", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[2], ["13231", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13232", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13233", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[3], ["13241", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13242", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13243", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[4], ["13251", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13252", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13253", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[5], ["13261", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13262", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13263", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[6], ["13271", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13272", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13273", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBHitItems[7], ["13281", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13282", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13283", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]]], [[langFont.Font_FirstLastPoint, ["13301", ["*", [langFont.Font_FTFirstPoint]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]], ["13302", ["*", [langFont.Font_FTLastPoint]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBFTTotalHit, ["13011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Guest + " +pk", "2"], [langFont.Font_Home + " -pk", "1"]]], ["13012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalRHE, ["13321", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_FTTotalScore, [o ? "13006" : "13007", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13007" : "13006", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_1HTotalScore, [o ? "13056" : "13057", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13057" : "13056", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[0], [o ? "13116" : "13117", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13117" : "13116", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[1], [o ? "13126" : "13127", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13127" : "13126", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[2], [o ? "13136" : "13137", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13137" : "13136", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[3], [o ? "13146" : "13147", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13147" : "13146", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[4], [o ? "13156" : "13157", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13157" : "13156", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[5], [o ? "13166" : "13167", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13167" : "13166", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[6], [o ? "13176" : "13177", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13177" : "13176", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBTotalScoreItems[7], [o ? "13186" : "13187", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13187" : "13186", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBFTTeamTotalHit, [o ? "13016" : "13017", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "13017" : "13016", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_BBFTFirstHomeRun, ["13304", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBFTFirstTurnover, ["13303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_MostPointsInOneGame, ["13307", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBFTPriorityGet2Point, ["13305", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBFTPriorityGet3Point, ["13306", ["*", [langFont.Font_WinInner]], [[langFont.Font_Guest, "2"], [langFont.Font_Home, "1"]]]], [langFont.Font_BBWinDifference, ["13341", ["*", ["", langFont.Font_Guest, langFont.Font_Home]], [[["1", ""], ["", "21"], ["", "11"]], [["2", ""], ["", "22"], ["", "12"]], [["3", ""], ["", "23"], ["", "13"]], [["4", ""], ["", "24"], ["", "14"]], [["5", ""], ["", "25"], ["", "15"]], [["6", ""], ["", "26"], ["", "16"]], [["7", ""], ["", "27"], ["", "17"]], [["8", ""], ["", "28"], ["", "18"]], [[langFont.Font_BB9orMore, ""], ["", "29"], ["", "19"]]]]], [langFont.Font_ElsePlayMode, ["13322", ["*", [langFont.Font_BBTotalStrikeOut]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["13323", ["*", [langFont.Font_TotalTurnovers]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            tn: [[[langFont.Font_TNGamesWinner, ["14001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["14004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TNSetsWinner, ["14011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14013", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]]], [[langFont.Font_TNSetsWinnerItems[0], ["14101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["14103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TNSetsWinnerItems[1], ["14201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["14203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TNSetsWinnerItems[2], ["14301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["14303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TNPlayerTotalGames, [o ? "14005" : "14006", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "14006" : "14005", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_TNPlayerIsWin, [o ? "14601" : "14602", ["*", [langFont.Font_Home]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]], [o ? "14602" : "14601", ["*", [langFont.Font_Guest]], [[langFont.Font_Yes, "1"], [langFont.Font_No, "2"]]]]], [[langFont.Font_TNGamesWinner, ["14001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_TNSetsWinner, ["14013", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]]]], [[langFont.Font_TNSetsWinnerItems[0], ["14103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_TNSetsWinnerItems[1], ["14203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_TNSetsWinnerItems[2], ["14303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_TNSetsWinnerItems[3], ["14403", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_TNSetsWinnerItems[4], ["14503", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["14501", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["14502", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]], [[langFont.Font_TNPlayerTotalGames, [o ? "14005" : "14006", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "14006" : "14005", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            ih: [[[langFont.Font_FT, ["15001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15005", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_FirstLastPoint, ["15401", ["*", [langFont.Font_FirstPoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15411", ["*", [langFont.Font_LastPoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_FTTotalScore, [o ? "15006" : "15007", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "15007" : "15006", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]], [[langFont.Font_IHQuarters[0], ["15101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15105", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_IHQuarters[1], ["15201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15205", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_IHQuarters[2], ["15301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15305", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]]], [[langFont.Font_FT, ["15001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_IHQuarters[0], ["15101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15105", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_IHQuarters[1], ["15201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15205", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_IHQuarters[2], ["15301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["15302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["15303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["15305", ["*", [langFont.Font_OneLosesTwoWins]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]]], [[langFont.Font_FTTotalScore, [o ? "15006" : "15007", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "15007" : "15006", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            vl: [[[langFont.Font_VLGamesWinner, ["16001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_TotalWinner, ["16011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16013", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_VLGameWinnerItems[0], ["16101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_VLGamesWinner, ["16001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_TotalWinner, ["16011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_VLGameWinnerItems[0], ["16101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_VLGameWinnerItems[1], ["16201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_VLGameWinnerItems[2], ["16301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_VLGameWinnerItems[3], ["16401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16403", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_VLGameWinnerItems[4], ["16501", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16502", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16503", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16504", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_VLGameWinnerItems[5], ["16601", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16602", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16603", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16604", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_VLGameWinnerItems[6], ["16701", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["16702", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["16703", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["16704", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_SingleTeamTotalScore, [o ? "16015" : "16016", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "16016" : "16015", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            bm: [[[langFont.Font_BMGamesWinner, ["17001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TotalWinner, ["17011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17013", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_BMGameWinnerItems[0], ["17101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_BMGamesWinner, ["17001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TotalWinner, ["17011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17013", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_BMGameWinnerItems[0], ["17101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BMGameWinnerItems[1], ["17201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BMGameWinnerItems[2], ["17301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BMGameWinnerItems[3], ["17401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17403", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_BMGameWinnerItems[4], ["17501", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["17502", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["17503", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["17504", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_SingleTeamTotalScore, [o ? "17015" : "17016", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "17016" : "17015", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            es: [[[langFont.Font_ESGamesWinner, ["180001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESGameItems[0], [[["180101", ["01", [langFont.Font_ESGameItems[0]]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180181", ["01", [langFont.Font_ESOuterItems[1]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180182", ["X", [langFont.Font_ESXItems[0]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180178", ["01", [langFont.Font_ESOuterItems[6]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180178", ["X", [langFont.Font_ESXItems[1]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180179", ["01", [langFont.Font_ESOuterItems[9]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180179", ["X", [langFont.Font_ESXItems[2]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180180", ["01", [langFont.Font_ESOuterItems[12]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180180", ["X", [langFont.Font_ESXItems[3]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180171", ["01", [langFont.Font_ESOuterItems[15]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180171", ["X", [langFont.Font_ESXItems[4]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180172", ["01", [langFont.Font_ESOuterItems[18]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180172", ["X", [langFont.Font_ESXItems[5]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180173", ["01", [langFont.Font_ESOuterItems[21]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180173", ["X", [langFont.Font_ESXItems[6]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180174", ["01", [langFont.Font_ESOuterItems[24]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180174", ["X", [langFont.Font_ESXItems[7]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180175", ["01", [langFont.Font_ESOuterItems[27]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180175", ["X", [langFont.Font_ESXItems[8]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180176", ["01", [langFont.Font_ESOuterItems[30]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180176", ["X", [langFont.Font_ESXItems[9]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180177", ["01", [langFont.Font_ESOuterItems[33]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180177", ["X", [langFont.Font_ESXItems[10]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180183", ["01", [langFont.Font_ESOuterItems[37]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180183", ["X", [langFont.Font_ESXItems[11]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180184", ["X", [langFont.Font_ESXItems[12]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180185", ["01", [langFont.Font_ESOuterItems[40]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180185", ["X", [langFont.Font_ESXItems[13]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180186", ["01", [langFont.Font_ESOuterItems[41]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180186", ["X", [langFont.Font_ESXItems[14]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["180191", ["*", [langFont.Font_ESOuterItems[36]]], [[langFont.Font_MoreThan + " pk", "1"], [langFont.Font_LessThan + " pk", "2"]]]], [langFont.Font_ESKillHeroItems[0], ["180105", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180106", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180108", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyTowerItems[0], ["180109", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180110", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180112", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyCrystalItems[0], ["180113", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180114", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180116", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyBarrackItems[0], ["180117", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180118", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180120", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillSmallDragonItems[0], ["180121", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180122", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180124", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillBigDragonItems[0], ["180125", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180126", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180128", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillMagicDragonItems[0], ["180129", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180130", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180132", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillCaesarItems[0], ["180133", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180134", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180136", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillTyrantItems[0], ["180137", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180138", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180140", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDominateItems[0], ["180141", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180142", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180144", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDevilItems[0], ["180145", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180146", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180148", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESRoundItems[0], ["180149", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180150", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180152", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESScoreItems[0], ["180153", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180154", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180156", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESGameItems[1], [[["180201", ["01", [langFont.Font_ESGameItems[1]]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180281", ["01", [langFont.Font_ESOuterItems[1]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180282", ["X", [langFont.Font_ESXItems[0]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180278", ["01", [langFont.Font_ESOuterItems[6]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180278", ["X", [langFont.Font_ESXItems[1]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180279", ["01", [langFont.Font_ESOuterItems[9]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180279", ["X", [langFont.Font_ESXItems[2]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180280", ["01", [langFont.Font_ESOuterItems[12]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180280", ["X", [langFont.Font_ESXItems[3]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180271", ["01", [langFont.Font_ESOuterItems[15]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180271", ["X", [langFont.Font_ESXItems[4]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180272", ["01", [langFont.Font_ESOuterItems[18]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180272", ["X", [langFont.Font_ESXItems[5]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180273", ["01", [langFont.Font_ESOuterItems[21]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180273", ["X", [langFont.Font_ESXItems[6]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180274", ["01", [langFont.Font_ESOuterItems[24]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180274", ["X", [langFont.Font_ESXItems[7]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180275", ["01", [langFont.Font_ESOuterItems[27]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180275", ["X", [langFont.Font_ESXItems[8]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180276", ["01", [langFont.Font_ESOuterItems[30]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180276", ["X", [langFont.Font_ESXItems[9]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180277", ["01", [langFont.Font_ESOuterItems[33]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180277", ["X", [langFont.Font_ESXItems[10]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180283", ["01", [langFont.Font_ESOuterItems[37]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180283", ["X", [langFont.Font_ESXItems[11]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180284", ["X", [langFont.Font_ESXItems[12]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180285", ["01", [langFont.Font_ESOuterItems[40]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180285", ["X", [langFont.Font_ESXItems[13]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180286", ["01", [langFont.Font_ESOuterItems[41]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180286", ["X", [langFont.Font_ESXItems[14]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["180291", ["*", [langFont.Font_ESOuterItems[36]]], [[langFont.Font_MoreThan + " pk", "1"], [langFont.Font_LessThan + " pk", "2"]]]], [langFont.Font_ESKillHeroItems[1], ["180205", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180206", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180208", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyTowerItems[1], ["180209", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180210", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180212", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyCrystalItems[1], ["180213", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180214", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180216", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyBarrackItems[1], ["180217", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180218", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180220", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillSmallDragonItems[1], ["180221", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180222", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180224", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillBigDragonItems[1], ["180225", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180226", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180228", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillMagicDragonItems[1], ["180229", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180230", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180232", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillCaesarItems[1], ["180233", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180234", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180236", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillTyrantItems[1], ["180237", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180238", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180240", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDominateItems[1], ["180241", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180242", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180244", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDevilItems[1], ["180245", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180246", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180248", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESRoundItems[1], ["180249", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180250", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180252", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESScoreItems[1], ["180253", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180254", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180256", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESGameItems[2], [[["180301", ["01", [langFont.Font_ESGameItems[2]]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180381", ["01", [langFont.Font_ESOuterItems[1]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180382", ["X", [langFont.Font_ESXItems[0]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180378", ["01", [langFont.Font_ESOuterItems[6]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180378", ["X", [langFont.Font_ESXItems[1]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180379", ["01", [langFont.Font_ESOuterItems[9]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180379", ["X", [langFont.Font_ESXItems[2]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180380", ["01", [langFont.Font_ESOuterItems[12]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180380", ["X", [langFont.Font_ESXItems[3]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180371", ["01", [langFont.Font_ESOuterItems[15]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180371", ["X", [langFont.Font_ESXItems[4]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180372", ["01", [langFont.Font_ESOuterItems[18]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180372", ["X", [langFont.Font_ESXItems[5]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180373", ["01", [langFont.Font_ESOuterItems[21]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180373", ["X", [langFont.Font_ESXItems[6]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180374", ["01", [langFont.Font_ESOuterItems[24]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180374", ["X", [langFont.Font_ESXItems[7]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180375", ["01", [langFont.Font_ESOuterItems[27]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180375", ["X", [langFont.Font_ESXItems[8]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180376", ["01", [langFont.Font_ESOuterItems[30]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180376", ["X", [langFont.Font_ESXItems[9]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180377", ["01", [langFont.Font_ESOuterItems[33]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180377", ["X", [langFont.Font_ESXItems[10]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180383", ["01", [langFont.Font_ESOuterItems[37]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180383", ["X", [langFont.Font_ESXItems[11]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180384", ["X", [langFont.Font_ESXItems[12]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180385", ["01", [langFont.Font_ESOuterItems[40]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180385", ["X", [langFont.Font_ESXItems[13]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180386", ["01", [langFont.Font_ESOuterItems[41]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180386", ["X", [langFont.Font_ESXItems[14]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["180391", ["*", [langFont.Font_ESOuterItems[36]]], [[langFont.Font_MoreThan + " pk", "1"], [langFont.Font_LessThan + " pk", "2"]]]], [langFont.Font_ESKillHeroItems[2], ["180305", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180306", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180308", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyTowerItems[2], ["180309", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180310", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180312", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyCrystalItems[2], ["180313", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180314", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180316", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyBarrackItems[2], ["180317", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180318", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180320", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillSmallDragonItems[2], ["180321", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180322", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180324", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillBigDragonItems[2], ["180325", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180326", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180328", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillMagicDragonItems[2], ["180329", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180330", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180332", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillCaesarItems[2], ["180333", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180334", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180336", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillTyrantItems[2], ["180337", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180338", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180340", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDominateItems[2], ["180341", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180342", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180344", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDevilItems[2], ["180345", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180346", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180348", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESRoundItems[2], ["180349", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180350", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180352", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESScoreItems[2], ["180353", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180354", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180356", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESGameItems[3], [[["180401", ["01", [langFont.Font_ESGameItems[3]]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180481", ["01", [langFont.Font_ESOuterItems[1]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180482", ["X", [langFont.Font_ESXItems[0]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180478", ["01", [langFont.Font_ESOuterItems[6]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180478", ["X", [langFont.Font_ESXItems[1]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180479", ["01", [langFont.Font_ESOuterItems[9]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180479", ["X", [langFont.Font_ESXItems[2]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180480", ["01", [langFont.Font_ESOuterItems[12]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180480", ["X", [langFont.Font_ESXItems[3]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180471", ["01", [langFont.Font_ESOuterItems[15]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180471", ["X", [langFont.Font_ESXItems[4]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180472", ["01", [langFont.Font_ESOuterItems[18]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180472", ["X", [langFont.Font_ESXItems[5]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180473", ["01", [langFont.Font_ESOuterItems[21]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180473", ["X", [langFont.Font_ESXItems[6]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180474", ["01", [langFont.Font_ESOuterItems[24]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180474", ["X", [langFont.Font_ESXItems[7]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180475", ["01", [langFont.Font_ESOuterItems[27]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180475", ["X", [langFont.Font_ESXItems[8]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180476", ["01", [langFont.Font_ESOuterItems[30]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180476", ["X", [langFont.Font_ESXItems[9]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180477", ["01", [langFont.Font_ESOuterItems[33]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180477", ["X", [langFont.Font_ESXItems[10]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180483", ["01", [langFont.Font_ESOuterItems[37]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180483", ["X", [langFont.Font_ESXItems[11]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180484", ["X", [langFont.Font_ESXItems[12]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180485", ["01", [langFont.Font_ESOuterItems[40]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180485", ["X", [langFont.Font_ESXItems[13]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180486", ["01", [langFont.Font_ESOuterItems[41]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180486", ["X", [langFont.Font_ESXItems[14]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["180491", ["*", [langFont.Font_ESOuterItems[36]]], [[langFont.Font_MoreThan + " pk", "1"], [langFont.Font_LessThan + " pk", "2"]]]], [langFont.Font_ESKillHeroItems[3], ["180405", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180406", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180408", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyTowerItems[3], ["180409", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180410", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180412", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyCrystalItems[3], ["180413", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180414", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180416", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyBarrackItems[3], ["180417", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180418", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180420", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillSmallDragonItems[3], ["180421", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180422", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180424", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillBigDragonItems[3], ["180425", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180426", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180428", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillMagicDragonItems[3], ["180429", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180430", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180432", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillCaesarItems[3], ["180433", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180434", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180436", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillTyrantItems[3], ["180437", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180438", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180440", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDominateItems[3], ["180441", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180442", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180444", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDevilItems[3], ["180445", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180446", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180448", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESRoundItems[3], ["180449", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180450", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180452", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESScoreItems[3], ["180453", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180454", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180456", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESGameItems[4], [[["180501", ["01", [langFont.Font_ESGameItems[4]]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180581", ["01", [langFont.Font_ESOuterItems[1]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180582", ["X", [langFont.Font_ESXItems[0]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180578", ["01", [langFont.Font_ESOuterItems[6]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180578", ["X", [langFont.Font_ESXItems[1]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180579", ["01", [langFont.Font_ESOuterItems[9]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180579", ["X", [langFont.Font_ESXItems[2]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180580", ["01", [langFont.Font_ESOuterItems[12]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180580", ["X", [langFont.Font_ESXItems[3]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180571", ["01", [langFont.Font_ESOuterItems[15]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180571", ["X", [langFont.Font_ESXItems[4]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180572", ["01", [langFont.Font_ESOuterItems[18]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180572", ["X", [langFont.Font_ESXItems[5]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180573", ["01", [langFont.Font_ESOuterItems[21]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180573", ["X", [langFont.Font_ESXItems[6]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180574", ["01", [langFont.Font_ESOuterItems[24]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180574", ["X", [langFont.Font_ESXItems[7]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180575", ["01", [langFont.Font_ESOuterItems[27]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180575", ["X", [langFont.Font_ESXItems[8]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180576", ["01", [langFont.Font_ESOuterItems[30]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180576", ["X", [langFont.Font_ESXItems[9]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180577", ["01", [langFont.Font_ESOuterItems[33]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180577", ["X", [langFont.Font_ESXItems[10]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180583", ["01", [langFont.Font_ESOuterItems[37]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180583", ["X", [langFont.Font_ESXItems[11]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180584", ["X", [langFont.Font_ESXItems[12]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180585", ["01", [langFont.Font_ESOuterItems[40]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180585", ["X", [langFont.Font_ESXItems[13]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180586", ["01", [langFont.Font_ESOuterItems[41]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180586", ["X", [langFont.Font_ESXItems[14]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["180591", ["*", [langFont.Font_ESOuterItems[36]]], [[langFont.Font_MoreThan + " pk", "1"], [langFont.Font_LessThan + " pk", "2"]]]], [langFont.Font_ESKillHeroItems[4], ["180505", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180506", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180508", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyTowerItems[4], ["180509", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180510", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180512", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyCrystalItems[4], ["180513", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180514", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180516", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyBarrackItems[4], ["180517", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180518", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180520", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillSmallDragonItems[4], ["180521", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180522", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180524", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillBigDragonItems[4], ["180525", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180526", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180528", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillMagicDragonItems[4], ["180529", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180530", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180532", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillCaesarItems[4], ["180533", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180534", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180536", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillTyrantItems[4], ["180537", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180538", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180540", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDominateItems[4], ["180541", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180542", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180544", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDevilItems[4], ["180545", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180546", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180548", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESRoundItems[4], ["180549", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180550", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180552", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESScoreItems[4], ["180553", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180554", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180556", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESGameItems[5], [[["180601", ["01", [langFont.Font_ESGameItems[5]]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180681", ["01", [langFont.Font_ESOuterItems[1]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180682", ["X", [langFont.Font_ESXItems[0]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180678", ["01", [langFont.Font_ESOuterItems[6]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180678", ["X", [langFont.Font_ESXItems[1]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180679", ["01", [langFont.Font_ESOuterItems[9]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180679", ["X", [langFont.Font_ESXItems[2]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180680", ["01", [langFont.Font_ESOuterItems[12]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180680", ["X", [langFont.Font_ESXItems[3]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180671", ["01", [langFont.Font_ESOuterItems[15]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180671", ["X", [langFont.Font_ESXItems[4]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180672", ["01", [langFont.Font_ESOuterItems[18]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180672", ["X", [langFont.Font_ESXItems[5]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180673", ["01", [langFont.Font_ESOuterItems[21]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180673", ["X", [langFont.Font_ESXItems[6]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180674", ["01", [langFont.Font_ESOuterItems[24]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180674", ["X", [langFont.Font_ESXItems[7]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180675", ["01", [langFont.Font_ESOuterItems[27]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180675", ["X", [langFont.Font_ESXItems[8]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180676", ["01", [langFont.Font_ESOuterItems[30]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180676", ["X", [langFont.Font_ESXItems[9]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180677", ["01", [langFont.Font_ESOuterItems[33]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180677", ["X", [langFont.Font_ESXItems[10]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180683", ["01", [langFont.Font_ESOuterItems[37]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180683", ["X", [langFont.Font_ESXItems[11]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180684", ["X", [langFont.Font_ESXItems[12]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180685", ["01", [langFont.Font_ESOuterItems[40]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180685", ["X", [langFont.Font_ESXItems[13]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180686", ["01", [langFont.Font_ESOuterItems[41]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180686", ["X", [langFont.Font_ESXItems[14]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["180691", ["*", [langFont.Font_ESOuterItems[36]]], [[langFont.Font_MoreThan + " pk", "1"], [langFont.Font_LessThan + " pk", "2"]]]], [langFont.Font_ESKillHeroItems[5], ["180605", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180606", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180608", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyTowerItems[5], ["180609", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180610", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180612", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyCrystalItems[5], ["180613", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180614", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180616", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyBarrackItems[5], ["180617", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180618", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180620", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillSmallDragonItems[5], ["180621", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180622", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180624", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillBigDragonItems[5], ["180625", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180626", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180628", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillMagicDragonItems[5], ["180629", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180630", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180632", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillCaesarItems[5], ["180633", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180634", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180636", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillTyrantItems[5], ["180637", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180638", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180640", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDominateItems[5], ["180641", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180642", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180644", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDevilItems[5], ["180645", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180646", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180648", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESRoundItems[5], ["180649", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180650", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180652", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESScoreItems[5], ["180653", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180654", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180656", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESGameItems[6], [[["180701", ["01", [langFont.Font_ESGameItems[6]]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["180781", ["01", [langFont.Font_ESOuterItems[1]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180782", ["X", [langFont.Font_ESXItems[0]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180778", ["01", [langFont.Font_ESOuterItems[6]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180778", ["X", [langFont.Font_ESXItems[1]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180779", ["01", [langFont.Font_ESOuterItems[9]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180779", ["X", [langFont.Font_ESXItems[2]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180780", ["01", [langFont.Font_ESOuterItems[12]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180780", ["X", [langFont.Font_ESXItems[3]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180771", ["01", [langFont.Font_ESOuterItems[15]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180771", ["X", [langFont.Font_ESXItems[4]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180772", ["01", [langFont.Font_ESOuterItems[18]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180772", ["X", [langFont.Font_ESXItems[5]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180773", ["01", [langFont.Font_ESOuterItems[21]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180773", ["X", [langFont.Font_ESXItems[6]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180774", ["01", [langFont.Font_ESOuterItems[24]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180774", ["X", [langFont.Font_ESXItems[7]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180775", ["01", [langFont.Font_ESOuterItems[27]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180775", ["X", [langFont.Font_ESXItems[8]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180776", ["01", [langFont.Font_ESOuterItems[30]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180776", ["X", [langFont.Font_ESXItems[9]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180777", ["01", [langFont.Font_ESOuterItems[33]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180777", ["X", [langFont.Font_ESXItems[10]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180783", ["01", [langFont.Font_ESOuterItems[37]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180783", ["X", [langFont.Font_ESXItems[11]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180784", ["X", [langFont.Font_ESXItems[12]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180785", ["01", [langFont.Font_ESOuterItems[40]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180785", ["X", [langFont.Font_ESXItems[13]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["180786", ["01", [langFont.Font_ESOuterItems[41]]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["180786", ["X", [langFont.Font_ESXItems[14]]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null], ["180791", ["*", [langFont.Font_ESOuterItems[36]]], [[langFont.Font_MoreThan + " pk", "1"], [langFont.Font_LessThan + " pk", "2"]]]], [langFont.Font_ESKillHeroItems[6], ["180705", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180706", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180708", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyTowerItems[6], ["180709", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180710", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180712", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyCrystalItems[6], ["180713", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180714", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180716", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESDestroyBarrackItems[6], ["180717", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180718", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180720", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillSmallDragonItems[6], ["180721", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180722", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180724", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillBigDragonItems[6], ["180725", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180726", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180728", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillMagicDragonItems[6], ["180729", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180730", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180732", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillCaesarItems[6], ["180733", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180734", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180736", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillTyrantItems[6], ["180737", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180738", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180740", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDominateItems[6], ["180741", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180742", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180744", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESKillDevilItems[6], ["180745", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180746", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180748", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESRoundItems[6], ["180749", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180750", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180752", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ESScoreItems[6], ["180753", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180754", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180756", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[7], ["180853", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180854", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180856", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[8], ["180953", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["180954", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["180956", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[9], ["181053", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["181054", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["181056", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[10], ["181153", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["181154", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["181156", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[11], ["181253", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["181254", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["181256", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[12], ["181353", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["181354", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["181356", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[13], ["181453", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["181454", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["181456", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ESScoreItems[14], ["181553", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["181554", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["181556", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]]],
            af: [[[langFont.Font_FT, ["19001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["19002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_1stHalf, ["19101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["19102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_2ndHalf, ["19201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["19202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_AFQuarters[0], ["19301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["19302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFQuarters[1], ["19401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["19402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19403", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFQuarters[2], ["19501", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["19502", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19503", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19504", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFQuarters[3], ["19601", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["19602", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19603", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19604", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_FirstLastPoint, ["19051", ["*", [langFont.Font_FTFirstPoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19052", ["*", [langFont.Font_FTLastPoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_MostPointsInOneQuarter, ["19053", ["*", [langFont.Font_AFFTMostPointsInOneQuarter]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], [langFont.Font_PriorityGet, ["19074", ["10", [langFont.Font_AFPriorityGetPointItems[0]]], [[langFont.Font_Home, "101"], [langFont.Font_Guest, "102"]]], ["19074", ["15", [langFont.Font_AFPriorityGetPointItems[1]]], [[langFont.Font_Home, "151"], [langFont.Font_Guest, "152"]]], ["19074", ["20", [langFont.Font_AFPriorityGetPointItems[2]]], [[langFont.Font_Home, "201"], [langFont.Font_Guest, "202"]]]], [langFont.Font_AFTotalScoreItems[0], [o ? "19005" : "19007", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19006" : "19008", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "19007" : "19005", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19008" : "19006", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalScoreItems[1], [o ? "19105" : "19107", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19106" : "19108", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "19107" : "19105", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19108" : "19106", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalScoreItems[2], [o ? "19205" : "19207", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19206" : "19208", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "19207" : "19205", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19208" : "19206", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFFTTeamTouchDown, [o ? "19025" : "19027", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19026" : "19028", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "19027" : "19025", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19028" : "19026", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFFTTeamThreePoint, [o ? "19015" : "19017", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19016" : "19018", ["*", [langFont.Font_HomeTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]], [o ? "19017" : "19015", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19018" : "19016", ["*", [langFont.Font_AwayTeam + langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalTouchDown[1], ["19022", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19024", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalTouchDown[2], ["19122", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19124", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalTouchDown[3], ["19222", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19224", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalThreePoint[1], ["19012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalThreePoint[2], ["19112", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19114", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_AFTotalThreePoint[3], ["19212", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["19214", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_ElsePlayMode, [[["19071", ["01", [langFont.Font_AFFTFirstThreePoint]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["19071", ["X", [langFont.Font_AFFTXThreePoint]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["19071", ["99", [langFont.Font_AFFTLastThreePoint]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["19072", ["01", [langFont.Font_AFFTFirstTouchDown]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["19072", ["X", [langFont.Font_AFFTXTouchDown]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["19072", ["99", [langFont.Font_AFFTLastTouchDown]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["19073", ["01", [langFont.Font_AFFTFirstMistake]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["19073", ["X", [langFont.Font_AFFTXMistake]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["19073", ["99", [langFont.Font_AFFTLastMistake]], [[langFont.Font_Home, "991"], [langFont.Font_Guest, "992"]]], ["19054", ["*", [langFont.Font_AFFTShortThreePoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19055", ["*", [langFont.Font_AFFTLongThreePoint]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19056", ["*", [langFont.Font_AFFTShortTouchDown]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19057", ["*", [langFont.Font_AFFTLongTouchDown]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["19058", ["*", [langFont.Font_AFFTMostDiscardKick]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]]], ["*", []], null], [[["19092", ["*", []], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], ["*", [langFont.Font_AFFTTouchDownYard]], 1], [[["19091", ["*", []], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], ["*", [langFont.Font_AFFTThreePointYard]], 1], [[["19093", ["*", []], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], ["*", [langFont.Font_AFFTTotalRunYard]], 1], [[["19094", ["*", []], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], ["*", [langFont.Font_AFFTTotalPassYard]], 1]]], [[langFont.Font_AFTotalScoreItems[0], [o ? "19005" : "19007", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19007" : "19005", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_AFTotalScoreItems[1], [o ? "19105" : "19107", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19107" : "19105", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_AFTotalScoreItems[2], [o ? "19205" : "19207", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19207" : "19205", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_AFTotalScoreItems[3], [o ? "19305" : "19307", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19307" : "19305", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_AFTotalScoreItems[4], [o ? "19405" : "19407", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19407" : "19405", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_AFTotalScoreItems[5], [o ? "19505" : "19507", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19507" : "19505", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]], [langFont.Font_AFTotalScoreItems[6], [o ? "19605" : "19607", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "19607" : "19605", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            pb: [[[langFont.Font_PBGamesWinner, ["20001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_PBGameWinnerItems[0], ["20101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[1], ["20111", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20112", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20113", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20114", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[2], ["20121", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20122", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20123", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20124", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[3], ["20131", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20132", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20133", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20134", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[4], ["20141", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20142", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20143", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20144", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[5], ["20151", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20152", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20153", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20154", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[6], ["20161", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20162", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20163", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20164", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[7], ["20171", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20172", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20173", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20174", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[8], ["20181", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20182", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20183", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20184", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[9], ["20191", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20192", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20193", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20194", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[10], ["20201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[11], ["20211", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20212", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20213", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20214", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[12], ["20221", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20222", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20223", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20224", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[13], ["20231", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20232", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20233", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20234", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[14], ["20241", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20242", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20243", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20244", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[15], ["20251", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20252", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20253", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20254", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[16], ["20261", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20262", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20263", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20264", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[17], ["20271", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20272", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20273", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20274", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[18], ["20281", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20282", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20283", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20284", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[19], ["20291", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20292", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20293", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20294", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[20], ["20301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[21], ["20311", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20312", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20313", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20314", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[22], ["20321", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20322", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20323", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20324", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[23], ["20331", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20332", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20333", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20334", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[24], ["20341", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20342", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20343", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20344", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[25], ["20351", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20352", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20353", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20354", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[26], ["20361", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20362", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20363", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20364", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[27], ["20371", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20372", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20373", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20374", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[28], ["20381", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20382", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20383", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20384", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[29], ["20391", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20392", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20393", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20394", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[30], ["20401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20403", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[31], ["20411", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20412", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20413", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20414", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[32], ["20421", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20422", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20423", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20424", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[33], ["20431", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20432", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20433", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20434", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_PBGameWinnerItems[34], ["20441", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["20442", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["20443", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["20444", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_ElsePlayMode, [[["20902", ["01", [langFont.Font_PBMostPointsInFirstGame]], [[langFont.Font_Home, "011"], [langFont.Font_Guest, "012"]]], ["20902", ["X", [langFont.Font_PBMostPointsInXGame]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]], ["20901", ["X", [langFont.Font_PBPriorityXGameWinner]], [[langFont.Font_Home, "X1"], [langFont.Font_Guest, "X2"]]]], ["*", []], null]]]],
            tt: [[[langFont.Font_TTGamesWinner, ["21001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TotalWinner, ["21011", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21012", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21013", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21014", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_TTGameWinnerItems[0], ["21101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_TTGameWinnerItems[0], ["21101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TTGameWinnerItems[1], ["21201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TTGameWinnerItems[2], ["21301", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21302", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21303", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21304", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TTGameWinnerItems[3], ["21401", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21402", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21403", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21404", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TTGameWinnerItems[4], ["21501", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21502", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21503", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21504", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TTGameWinnerItems[5], ["21601", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21602", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21603", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21604", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_TTGameWinnerItems[6], ["21701", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["21702", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["21703", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["21704", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_SingleTeamTotalScore, [o ? "21015" : "21016", ["*", [langFont.Font_HomeTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], [o ? "21016" : "21015", ["*", [langFont.Font_AwayTeam + langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]]]]],
            hb: [[[langFont.Font_FT, ["22001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["22002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["22003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["22004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_1stHalf, ["22101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["22102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["22103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["22104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]], [langFont.Font_2ndHalf, ["22201", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["22202", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["22203", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["22204", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]]],
            wp: [[[langFont.Font_FT, ["23001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["23002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["23003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["23004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]], [[langFont.Font_1stHalf, ["23101", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["23102", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["23103", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["23104", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]]],
            op: [[[langFont.Font_FT, ["24001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["24002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["24003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["24004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]]],
            ot: [[[langFont.Font_FT, ["24001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["24002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["24003", ["*", [langFont.Font_WinInner]], [[langFont.Font_Home, "1"], [langFont.Font_Guest, "2"]]], ["24004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]]],
            bx: [[[langFont.Font_FT, ["28001", ["*", [langFont.Font_HandicapNotAll]], [[langFont.Font_Home + " -pk", "1"], [langFont.Font_Guest + " +pk", "2"]]], ["28002", ["*", [langFont.Font_OU]], [[langFont.Font_Big + " pk", "1"], [langFont.Font_Small + " pk", "2"]]], ["28004", ["*", [langFont.Font_OddAndEven]], [[langFont.Font_Single, "1"], [langFont.Font_Pair, "2"]]]]]]
        };
        return o[n = Tool.IsSC(n) && !Tool.IsEUorWD(n) ? Ball.sc.key : n][t] || []
    }
};
!function(n) {
    n = n.getElementById("main.min.js");
    n && (n.className = "success")
}(this.document || this);

