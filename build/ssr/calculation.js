import { ssr, ssrHydrationKey, escape, createComponent } from "solid-js/web";
import { M as Member, a as Money, R as Result } from "./assets/result-c15f5c37.js";
import { Switch, Match } from "solid-js";
import { c as currentTab, T as TabMenu } from "./assets/signal-1623ee26.js";
/* empty css                        */import "./assets/alert-2b4bdc3f.js";
import "axios";
import "./assets/paymentItem-c160847c.js";
import "./assets/calculate-3ddee196.js";
import "solid-js/store";
const _tmpl$ = ["<main", ">", "</main>"];
function Calculation() {
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Switch, {
    get children() {
      return [createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.MEMBER;
        },
        get children() {
          return createComponent(Member, {});
        }
      }), createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.MONEY;
        },
        get children() {
          return createComponent(Money, {});
        }
      }), createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.RESULT;
        },
        get children() {
          return createComponent(Result, {});
        }
      })];
    }
  })));
}
export {
  Calculation as default
};
