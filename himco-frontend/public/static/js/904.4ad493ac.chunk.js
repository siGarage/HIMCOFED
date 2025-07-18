"use strict";
(self.webpackChunkmyapp = self.webpackChunkmyapp || []).push([
  [904],
  {
    1904: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n(4165),
        i = n(5861),
        a = n(9439),
        c = n(2791),
        o = n(184);
      var l = function (e) {
        var t = (0, c.useState)([]),
          n = (0, a.Z)(t, 2),
          l = n[0],
          s = n[1];
        return (
          (0, c.useEffect)(function () {
            var e = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e() {
                  var t, n;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "".concat(
                                "https://admin.himcofed.com",
                                "/api/annual-reports?populate=*"
                              )
                            )
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          (n = e.sent),
                            s(
                              n.data[0].attributes.Report.data[0].attributes.url
                            );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []),
          (0, o.jsx)(o.Fragment, {
            children:
              0 !== l.length
                ? (0, o.jsxs)("div", {
                    style: {
                      margin: "90px 10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: [
                      (0, o.jsx)("div", {
                        className: "Annual_report",
                        style: {
                          textAlign: "center",
                          fontFamily: "Domine",
                          display: "flex",
                          backgroundColor: "#B80000",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          color: "white",
                        },
                        children: "Annual Report",
                      }),
                      (0, o.jsx)("a", {
                        href: "".concat("https://admin.himcofed.com").concat(l),
                        style: {
                          color: "white",
                          fontFamily: "Domine",
                          fontSize: "20px",
                        },
                        children: (0, o.jsx)("button", {
                          style: {
                            padding: "0px 10px",
                            margin: "40px",
                            backgroundColor: "#0033B8",
                            color: "white",
                            fontFamily: "Domine",
                            fontSize: "20px",
                          },
                          children: "Show",
                        }),
                      }),
                    ],
                  })
                : (0, o.jsx)("div", {
                    style: {
                      margin: "90px 10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: (0, o.jsx)("div", {
                      className: "Annual_report",
                      style: {
                        textAlign: "center",
                        fontFamily: "Domine",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        color: "black",
                      },
                      children: "Server Side Error",
                    }),
                  }),
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=904.4ad493ac.chunk.js.map
