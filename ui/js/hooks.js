var n,t,r,u,o=require("preact"),i=0,f=[],c=[],e=o.options.__b,a=o.options.__r,v=o.options.diffed,s=o.options.__c,l=o.options.unmount;function p(n,r){o.options.__h&&o.options.__h(t,n,i||r),i=0;var u=t.__H||(t.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function x(n){return i=1,d(P,n)}function d(r,u,o){var i=p(n++,2);if(i.t=r,!i.__c&&(i.__=[o?o(u):P(void 0,u),function(n){var t=i.__N?i.__N[0]:i.__[0],r=i.t(t,n);t!==r&&(i.__N=[r,i.__[1]],i.__c.setState({}))}],i.__c=t,!t.u)){var f=function(n,t,r){if(!i.__c.__H)return!0;var u=i.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var o=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(o=!0)}}),!(!o&&i.__c.props===n)&&(!c||c.call(this,n,t,r))};t.u=!0;var c=t.shouldComponentUpdate,e=t.componentWillUpdate;t.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},t.shouldComponentUpdate=f}return i.__N||i.__}function m(r,u){var i=p(n++,4);!o.options.__s&&T(i.__H,u)&&(i.__=r,i.o=u,t.__h.push(i))}function h(t,r){var u=p(n++,7);return T(u.__H,r)?(u.__V=t(),u.o=r,u.__h=t,u.__V):u.__}function y(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],o.options.__e(t,n.__v)}}o.options.__b=function(n){t=null,e&&e(n)},o.options.__r=function(u){a&&a(u),n=0;var o=(t=u.__c).__H;o&&(r===t?(o.__h=[],t.__h=[],o.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.o=void 0})):(o.__h.forEach(A),o.__h.forEach(F),o.__h=[])),r=t},o.options.diffed=function(n){v&&v(n);var i=n.__c;i&&i.__H&&(i.__H.__h.length&&(1!==f.push(i)&&u===o.options.requestAnimationFrame||((u=o.options.requestAnimationFrame)||q)(y)),i.__H.__.forEach(function(n){n.o&&(n.__H=n.o),n.__V!==c&&(n.__=n.__V),n.o=void 0,n.__V=c})),r=t=null},o.options.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],o.options.__e(r,n.__v)}}),s&&s(n,t)},o.options.unmount=function(n){l&&l(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),r.__H=void 0,t&&o.options.__e(t,r.__v))};var _="function"==typeof requestAnimationFrame;function q(n){var t,r=function(){clearTimeout(u),_&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);_&&(t=requestAnimationFrame(r))}function A(n){var r=t,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),t=r}function F(n){var r=t;n.__c=n.__(),t=r}function T(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function P(n,t){return"function"==typeof t?t(n):t}exports.useCallback=function(n,t){return i=8,h(function(){return n},t)},exports.useContext=function(r){var u=t.context[r.__c],o=p(n++,9);return o.c=r,u?(null==o.__&&(o.__=!0,u.sub(t)),u.props.value):r.__},exports.useDebugValue=function(n,t){o.options.useDebugValue&&o.options.useDebugValue(t?t(n):n)},exports.useEffect=function(r,u){var i=p(n++,3);!o.options.__s&&T(i.__H,u)&&(i.__=r,i.o=u,t.__H.__h.push(i))},exports.useErrorBoundary=function(r){var u=p(n++,10),o=x();return u.__=r,t.componentDidCatch||(t.componentDidCatch=function(n,t){u.__&&u.__(n,t),o[1](n)}),[o[0],function(){o[1](void 0)}]},exports.useId=function(){var r=p(n++,11);if(!r.__){for(var u=t.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var o=u.__m||(u.__m=[0,0]);r.__="P"+o[0]+"-"+o[1]++}return r.__},exports.useImperativeHandle=function(n,t,r){i=6,m(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))},exports.useLayoutEffect=m,exports.useMemo=h,exports.useReducer=d,exports.useRef=function(n){return i=5,h(function(){return{current:n}},[])},exports.useState=x;
//# sourceMappingURL=hooks.js.map