import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { c as currentTab, T as TabMenu, M as Member, a as Money, R as Result } from '../nitro/node-server.mjs';
import { Switch, Match } from 'solid-js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'seroval';
import 'seroval-plugins/web';
import 'solid-js/web/storage';
import 'solid-js/store';

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

export { Calculation as default };
//# sourceMappingURL=calculation.mjs.map
