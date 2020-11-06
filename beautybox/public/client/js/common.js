(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/gOucKAl":
/*!*********************************************************!*\
  !*** ./resources/js/_frontend/core/components/Input.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "I9E99BnR");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/**
 * BB.Components.Input.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Core.Input');

window.Inputmask = inputmask__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (BB.Core.Input = function () {
  function _init() {
    _initMask();

    _initInputSearch();

    _addEventListener();

    _initFocus(); // if (NODE_ENV == 'development') {
    //     console.log('--- INIT CORE INPUT');
    // }

  } //Masked inputmask https://github.com/RobinHerbots/Inputmask


  function _initMask() {
    var phoneMask = new inputmask__WEBPACK_IMPORTED_MODULE_0___default.a('+7 (999) 999-99-99');
    var inputPhone = document.querySelectorAll('.js-phone-mask');

    if (inputPhone) {
      for (var i = 0; i < inputPhone.length; i++) {
        phoneMask.mask(inputPhone[i]);
      }
    }

    var bormMask = new inputmask__WEBPACK_IMPORTED_MODULE_0___default.a('99.99.9999');
    var inputMask = document.querySelectorAll('.js-born-mask');

    if (inputMask) {
      for (var _i = 0; _i < inputMask.length; _i++) {
        bormMask.mask(inputMask[_i]);
      }
    }
  }

  function _initInputSearch() {
    var $inputSearch = $(document).find('.js-input');

    if ($inputSearch.length) {
      var _clearInput = function _clearInput() {
        var $parent = $(this).closest('.js-search, .bb-input');
        $(this).hide();
        $parent.find('.js-input').val('');
        $parent.find('.search__hint').css('display', 'none');
        $parent.find('.bb-input__icon').not('.js-input--clear').show();
      };

      $inputSearch.each(function () {
        var $inputBox = $(this).closest('.js-input-box, .bb-input');
        var $btnReset = $inputBox.find('.js-input--clear');
        var $btnSearch = $inputBox.find('.bb-input__icon-search, .search__ico');
        var $inputVal;
        $(this).off();
        $(this).on('keyup', function () {
          var $parent = $(this).closest('.js-input-block');
          var $btn = $parent.find('.js-user-link');
          var $btnData = $(this).data('clipboard-text');
          $inputVal = $(this).val();
          $btn.attr('data-clipboard-text', $btnData + $inputVal);

          _toggleInputBtn($inputVal);
        }).on('blur', function () {
          $inputVal = $(this).val();

          _toggleInputBtn($inputVal);
        });

        function _toggleInputBtn(value) {
          if (value != '') {
            $btnReset.show();
            $btnSearch.hide();
          } else {
            $btnReset.hide();
            $btnSearch.show();
          }
        }
      });
      $('.js-input--clear').off('click', _clearInput);
      $('.js-input--clear').on('click', _clearInput);
    }
  }

  function _addEventListener() {
    var $bbInput = $(document).find('.js-bb-input');

    if ($bbInput.length) {
      $bbInput.each(function () {
        var $parent = $(this).parent('.bb-input, .bb-text');
        $(this).on('focus', function () {
          $parent.addClass('is-focus');
        }).on('blur', function () {
          if ($(this).val() === '') {
            $parent.removeClass('is-focus');
          }
        });

        if ($(this).val() !== '') {
          $parent.addClass('is-focus');
        } else {
          $parent.removeClass('is-focus');
        }
      });
    }

    $('.js-input--copy').on('click', function () {
      var input = $(this).parent().find('input');
      input.select();
      document.execCommand('Copy');
    });
    $('.js-copy-text').on('click', function () {
      var input = $(this).parent().find('.user-share__link');
      input.text();
      document.execCommand('Copy');
    }); //Click input select value

    $('.js-input-focus--copy').on('focus', function () {
      $(this).select();
    }); //Show Password

    $('.js-bb-input-password--show').on('click', function () {
      $(this).css('display', 'none');
      $(this).next().css('display', 'block');
      $(this).parent().find('input[type="password"]').attr('type', 'text');
    }); //Hide Password

    $('.js-bb-input-password--hide').on('click', function () {
      $(this).css('display', 'none');
      $(this).prev().css('display', 'block');
      $(this).parent().find('input[type="text"]').attr('type', 'password');
    });
    $(document).on('click', '.js-bb-input-tip', function () {
      if ($(this).hasClass('no-close')) {
        return;
      }

      $(this).parent().removeClass('is-info is-error is-invalid').end().hide();
    });
  }

  function _initFocus() {
    var input = '.js-input-focus';
    var $input = $(input);

    if ($input.length) {
      $input.on('focus', function () {
        $(this).parent().addClass('is-focus has-focus');
      }).on('blur', function () {
        $(this).parent().removeClass('has-focus');

        if ($(this).val() === '') {
          $(this).parent().removeClass('is-focus');
        }
      }).on('keyup', function () {
        if ($(this).val() > 0) {
          $(this).parent().next().children('input').focus();
        }
      }).on('keydown', function (e) {
        var key = e.keyCode || e.charCode;

        if (key == 8 || key == 46) {
          $(this).val('').parent().prev().children('input').focus();
        }
      });
    }
  }

  return {
    init: _init,
    initMask: _initMask,
    initInputSearch: _initInputSearch
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "0KcQO4h0":
/*!*****************************************************!*\
  !*** ./resources/js/_frontend/components/PushUp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pushUp; });
/* html example PushUp
<button
	data-push
	data-push-delay="2500"
	data-push-message-error="{{ messageError }}"
	data-push-message-success="{{ messageSuccess }}"
	data-push-status="{{ messageStatus | escape }}"
>
</button>
*/
function pushUp(options) {
  var text = options.text || 'Вам новая заявка';
  var status = options.status || 'success';
  var timeOut = options.timeOut || 1500;
  var $pushContainer = $('<div>').addClass('push-up push-up--center push-up--transparent');
  var $pushIconSuccess = $("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        width=\"611.994px\" height=\"611.994px\" viewBox=\"0 0 611.994 611.994\"\n        xml:space=\"preserve\" class=\"push-up__icon\">\n            <path d=\"M248.172,423.918l-89.545-89.534c-5.637-5.637-5.637-14.778,0-20.416c5.643-5.644,14.78-5.644,20.417,0l69.128,69.122\n                l184.796-184.802c5.644-5.643,14.78-5.643,20.417,0c5.644,5.637,5.644,14.78,0,20.417L248.172,423.918z\"/>\n                <path d=\"M306.031,611.994v-14.438l-0.022,14.438C137.286,611.994,0.012,474.726,0,306.003C0,137.274,137.274,0,305.997,0\n                    c168.729,0,305.997,137.274,305.997,305.997C612,474.726,474.743,611.994,306.031,611.994z M305.997,28.878\n                    c-152.805,0-277.119,124.314-277.119,277.119C28.89,458.796,153.209,583.11,306.009,583.11h0.022\n                    c152.788,0,277.091-124.314,277.091-277.113C583.122,153.192,458.802,28.878,305.997,28.878z\"/>\n        </svg>");
  var $pushIconError = $("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            viewBox=\"0 0 78.561 78.561\" xml:space=\"preserve\" class=\"push-up__icon\">\n            <circle cx=\"39.28\" cy=\"57.772\" r=\"3.632\"/>\n            <path d=\"M38.792,48.347c1.104,0,2-0.896,2-2v-19c0-1.104-0.896-2-2-2s-2,0.896-2,2v19C36.792,47.451,37.688,48.347,38.792,48.347z\n                \"/>\n            <path d=\"M46.57,11.542l-0.091-0.141c-1.852-2.854-3.766-5.806-7.199-5.806c-3.578,0-5.45,2.994-7.26,5.891\n                c-0.009,0.014-0.065,0.104-0.074,0.119L0.278,65.266C0.096,65.574,0,65.735,0,66.092c0,3.896,3.135,6.874,6.988,6.874h64.585\n                c3.854,0,6.988-2.979,6.988-6.874c0-0.357-0.096-0.614-0.277-0.921L46.57,11.542z M71.573,68.966H6.988\n                c-1.461,0-2.717-0.951-2.95-2.394l31.374-53.061c1.554-2.487,2.572-3.963,3.868-3.963c1.261,0,2.457,1.87,3.843,4.006\n                l31.399,53.007C74.29,68.003,73.034,68.966,71.573,68.966z\"/>\n        </svg>\n");
  $pushContainer.text(text).appendTo($('body'));

  if (status === 'error') {
    $pushContainer.addClass('is-error');
    $pushIconError.prependTo($pushContainer);
  } else {
    $pushContainer.addClass('is-success');
    $pushIconSuccess.prependTo($pushContainer);
  }

  _poshPos();

  window.requestAnimationFrame(function () {
    $pushContainer.addClass('is-active');
  });
  setTimeout(function () {
    $pushContainer.removeClass('is-active');

    _poshPos();
  }, timeOut);
  setTimeout(function () {
    $pushContainer.remove();

    _poshPos();
  }, timeOut + 500);
  $(document).on('click', '.js-push-up--close', function () {
    var $parent = $(this).closest('.push-up');
    $parent.removeClass('is-active');
    setTimeout(function () {
      $parent.remove();
    }, 300);

    _poshPos();
  });

  function _poshPos() {
    $('.push-up').each(function (e) {
      var height = $('.push-up').outerHeight(true);
      $(this).css('top', height * e + 10 + e);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "1kjfg+4x":
/*!****************************************************************!*\
  !*** ./resources/libs/calendar/ext/dhtmlxscheduler_tooltip.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
@license
dhtmlxScheduler v.5.0.0 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function (e) {
  !function () {
    var t = e.dhtmlXTooltip = e.tooltip = {};
    t.config = {
      className: "dhtmlXTooltip tooltip",
      timeout_to_display: 50,
      timeout_to_hide: 50,
      delta_x: 15,
      delta_y: -20
    }, t.tooltip = document.createElement("div"), t.tooltip.className = t.config.className, e._waiAria.tooltipAttr(t.tooltip), t.show = function (a, i) {
      if (!this._mobile || e.config.touch_tooltip) {
        var n = t,
            r = this.tooltip,
            s = r.style;
        n.tooltip.className = n.config.className;
        var o = this.position(a),
            d = a.target || a.srcElement;

        if (!this.isTooltip(d)) {
          var _ = o.x + (n.config.delta_x || 0),
              l = o.y - (n.config.delta_y || 0);

          s.visibility = "hidden", s.removeAttribute ? (s.removeAttribute("right"), s.removeAttribute("bottom")) : (s.removeProperty("right"), s.removeProperty("bottom")), s.left = "0", s.top = "0", this.tooltip.innerHTML = i, document.body.appendChild(this.tooltip);
          var c = this.tooltip.offsetWidth,
              h = this.tooltip.offsetHeight;
          document.documentElement.clientWidth - _ - c < 0 ? (s.removeAttribute ? s.removeAttribute("left") : s.removeProperty("left"), s.right = document.documentElement.clientWidth - _ + 2 * (n.config.delta_x || 0) + "px") : 0 > _ ? s.left = o.x + Math.abs(n.config.delta_x || 0) + "px" : s.left = _ + "px", document.documentElement.clientHeight - l - h < 0 ? (s.removeAttribute ? s.removeAttribute("top") : s.removeProperty("top"), s.bottom = document.documentElement.clientHeight - l - 2 * (n.config.delta_y || 0) + "px") : 0 > l ? s.top = o.y + Math.abs(n.config.delta_y || 0) + "px" : s.top = l + "px", e._waiAria.tooltipVisibleAttr(this.tooltip), s.visibility = "visible", this.tooltip.onmouseleave = function (t) {
            t = t || window.event;

            for (var a = e.dhtmlXTooltip, i = t.relatedTarget; i != e._obj && i;) {
              i = i.parentNode;
            }

            i != e._obj && a.delay(a.hide, a, [], a.config.timeout_to_hide);
          }, e.callEvent("onTooltipDisplayed", [this.tooltip, this.tooltip.event_id]);
        }
      }
    }, t._clearTimeout = function () {
      this.tooltip._timeout_id && window.clearTimeout(this.tooltip._timeout_id);
    }, t.hide = function () {
      if (this.tooltip.parentNode) {
        e._waiAria.tooltipHiddenAttr(this.tooltip);

        var t = this.tooltip.event_id;
        this.tooltip.event_id = null, this.tooltip.onmouseleave = null, this.tooltip.parentNode.removeChild(this.tooltip), e.callEvent("onAfterTooltip", [t]);
      }

      this._clearTimeout();
    }, t.delay = function (e, t, a, i) {
      this._clearTimeout(), this.tooltip._timeout_id = setTimeout(function () {
        var i = e.apply(t, a);
        return e = t = a = null, i;
      }, i || this.config.timeout_to_display);
    }, t.isTooltip = function (e) {
      for (var t = !1; e && !t;) {
        t = e.className == this.tooltip.className, e = e.parentNode;
      }

      return t;
    }, t.position = function (e) {
      return e = e || window.event, {
        x: e.clientX,
        y: e.clientY
      };
    }, e.attachEvent("onMouseMove", function (a, i) {
      var n = window.event || i,
          r = n.target || n.srcElement,
          s = t,
          o = s.isTooltip(r),
          d = s.isTooltipTarget && s.isTooltipTarget(r);

      if (a && e.getState().editor_id != a || o || d) {
        var _;

        if (a || s.tooltip.event_id) {
          var l = e.getEvent(a) || e.getEvent(s.tooltip.event_id);
          if (!l) return;
          if (s.tooltip.event_id = l.id, _ = e.templates.tooltip_text(l.start_date, l.end_date, l), !_) return s.hide();
        }

        d && (_ = "");
        var c;

        if (_isIE) {
          c = {
            pageX: void 0,
            pageY: void 0,
            clientX: void 0,
            clientY: void 0,
            target: void 0,
            srcElement: void 0
          };

          for (var h in c) {
            c[h] = n[h];
          }
        }

        if (!e.callEvent("onBeforeTooltip", [a]) || !_) return;
        s.delay(s.show, s, [c || n, _]);
      } else s.delay(s.hide, s, [], s.config.timeout_to_hide);
    }), e.attachEvent("onBeforeDrag", function () {
      return t.hide(), !0;
    }), e.attachEvent("onEventDeleted", function () {
      return t.hide(), !0;
    });
  }();
});

/***/ }),

/***/ "2fWhwd3G":
/*!**************************************************************!*\
  !*** ./resources/libs/calendar/ext/dhtmlxscheduler_limit.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/*
@license
dhtmlxScheduler v.5.0.0 Stardard

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/


scheduler.config.limit_start = null;
scheduler.config.limit_end = null;
scheduler.config.limit_view = false;
scheduler.config.check_limits = true;
scheduler.config.mark_now = true;
scheduler.config.display_marked_timespans = true;

scheduler._temp_limit_scope = function () {
  var before = null;
  var dhx_time_block = "dhx_time_block";
  var default_timespan_type = "default";

  var fix_options = function fix_options(options, days, zones) {
    if (days instanceof Date && zones instanceof Date) {
      options.start_date = days;
      options.end_date = zones;
    } else {
      options.days = days;
      options.zones = zones;
    }

    return options;
  };

  var get_resulting_options = function get_resulting_options(days, zones, sections) {
    var options = _typeof(days) == "object" ? days : {
      days: days
    };
    options.type = dhx_time_block;
    options.css = "";

    if (zones) {
      if (sections) options.sections = sections;
      options = fix_options(options, days, zones);
    }

    return options;
  };

  scheduler.blockTime = function (days, zones, sections) {
    var options = get_resulting_options(days, zones, sections);
    return scheduler.addMarkedTimespan(options);
  };

  scheduler.unblockTime = function (days, zones, sections) {
    zones = zones || "fullday";
    var options = get_resulting_options(days, zones, sections);
    return scheduler.deleteMarkedTimespan(options);
  };

  scheduler.attachEvent("onBeforeViewChange", function (om, od, nm, nd) {
    function isBlocked(date, mode) {
      var limit_start = scheduler.config.limit_start,
          limit_end = scheduler.config.limit_end,
          date_end = scheduler.date.add(date, 1, mode);
      return date.valueOf() > limit_end.valueOf() || date_end <= limit_start.valueOf();
    }

    if (scheduler.config.limit_view) {
      nd = nd || od;
      nm = nm || om;

      if (isBlocked(nd, nm) && !(od.valueOf() == nd.valueOf())) {
        setTimeout(function () {
          var resetDate = !isBlocked(od, nm) ? od : scheduler.config.limit_start;
          scheduler.setCurrentView(!isBlocked(resetDate, nm) ? resetDate : null, nm);
        }, 1);
        return false;
      }
    }

    return true;
  });

  scheduler.checkInMarkedTimespan = function (ev, timespan_type, on_overlap) {
    timespan_type = timespan_type || default_timespan_type;
    var res = true;
    var temp_start_date = new Date(ev.start_date.valueOf());
    var temp_end_date = scheduler.date.add(temp_start_date, 1, "day");
    var timespans = scheduler._marked_timespans;

    for (; temp_start_date < ev.end_date; temp_start_date = scheduler.date.date_part(temp_end_date), temp_end_date = scheduler.date.add(temp_start_date, 1, "day")) {
      var day_value = +scheduler.date.date_part(new Date(temp_start_date)); // the first part of event not necessarily contains only date part

      var day_index = temp_start_date.getDay();
      var zones = getZones(ev, timespans, day_index, day_value, timespan_type);

      if (zones) {
        for (var i = 0; i < zones.length; i += 2) {
          // they may change for new event if it passes limit zone
          var sm = scheduler._get_zone_minutes(temp_start_date);

          var em = ev.end_date > temp_end_date || ev.end_date.getDate() != temp_start_date.getDate() ? 1440 : scheduler._get_zone_minutes(ev.end_date);
          var sz = zones[i];
          var ez = zones[i + 1];

          if (sz < em && ez > sm) {
            if (typeof on_overlap == "function") {
              //handler allows to cancel overlapping
              //actually needed only to keep default behavior of limits
              res = on_overlap(ev, sm, em, sz, ez); //event object, event start/end minutes in 'zones' format, zone start/end minutes
            } else {
              res = false;
            }

            if (!res) break;
          }
        }
      }
    }

    return !res;
  };

  var blocker = scheduler.checkLimitViolation = function (event) {
    if (!event) return true;
    if (!scheduler.config.check_limits) return true;
    var s = scheduler;
    var c = s.config;
    var evs = [];

    if (event.rec_type) {
      var dates = scheduler.getRecDates(event);

      for (var i = 0; i < dates.length; i++) {
        var ev = scheduler._copy_event(event);

        scheduler._lame_copy(ev, dates[i]);

        evs.push(ev);
      }
    } else {
      evs = [event];
    }

    var complete_res = true;

    for (var p = 0; p < evs.length; p++) {
      var res = true;
      var ev = evs[p]; // Event could have old _timed property (e.g. we are creating event with DND on timeline view and crossed day)

      ev._timed = scheduler.isOneDayEvent(ev);
      res = c.limit_start && c.limit_end ? ev.start_date.valueOf() >= c.limit_start.valueOf() && ev.end_date.valueOf() <= c.limit_end.valueOf() : true;

      if (res) {
        res = !scheduler.checkInMarkedTimespan(ev, dhx_time_block, function (ev, sm, em, sz, ez) {
          //try crop event to allow placing
          var allow = true;

          if (sm <= ez && sm >= sz) {
            if (ez == 24 * 60 || em < ez) {
              allow = false;
            }

            if (ev._timed && s._drag_id && s._drag_mode == "new-size") {
              ev.start_date.setHours(0);
              ev.start_date.setMinutes(ez);
            } else {
              allow = false;
            }
          }

          if (em >= sz && em < ez || sm < sz && em > ez) {
            if (ev._timed && s._drag_id && s._drag_mode == "new-size") {
              ev.end_date.setHours(0);
              ev.end_date.setMinutes(sz);
            } else {
              allow = false;
            }
          }

          return allow;
        });
      }

      if (!res) {
        res = s.checkEvent("onLimitViolation") ? s.callEvent("onLimitViolation", [ev.id, ev]) : res;
      }

      complete_res = complete_res && res;
    }

    if (!complete_res) {
      s._drag_id = null;
      s._drag_mode = null;
    }

    return complete_res;
  };

  scheduler._get_blocked_zones = function (timespans, property, day_index, day_value, timespan_type) {
    var zones = [];

    if (timespans && timespans[property]) {
      var timeline_zones = timespans[property];

      var blocked_timeline_zones = this._get_relevant_blocked_zones(day_index, day_value, timeline_zones, timespan_type);

      for (var i = 0; i < blocked_timeline_zones.length; i++) {
        zones = this._add_timespan_zones(zones, blocked_timeline_zones[i].zones);
      }
    }

    return zones;
  };

  scheduler._get_relevant_blocked_zones = function (day_index, day_value, zones, timespan_type) {
    var relevant_zones = zones[day_value] && zones[day_value][timespan_type] ? zones[day_value][timespan_type] : zones[day_index] && zones[day_index][timespan_type] ? zones[day_index][timespan_type] : [];
    return relevant_zones;
  };

  function getZones(ev, timespans, day_index, day_value, timespan_type) {
    var s = scheduler; //containers for 'unit' and 'timeline' views, and related 'section_id' properties

    var zones = [];
    var containers = {
      '_props': 'map_to',
      'matrix': 'y_property'
    }; //check blocked sections in all units and timelines

    for (var container in containers) {
      var property = containers[container];

      if (s[container]) {
        for (var view in s[container]) {
          var view_config = s[container][view];
          var linker = view_config[property];
          if (!ev[linker]) continue;
          zones = s._add_timespan_zones(zones, scheduler._get_blocked_zones(timespans[view], ev[linker], day_index, day_value, timespan_type));
        }
      }
    } // now need to add day blocks


    zones = s._add_timespan_zones(zones, scheduler._get_blocked_zones(timespans, 'global', day_index, day_value, timespan_type));
    return zones;
  }

  scheduler.attachEvent("onMouseDown", function (classname) {
    return !(classname == dhx_time_block);
  });
  scheduler.attachEvent("onBeforeDrag", function (id) {
    if (!id) return true;
    return blocker(scheduler.getEvent(id));
  });
  scheduler.attachEvent("onClick", function (event_id, native_event_object) {
    return blocker(scheduler.getEvent(event_id));
  });
  scheduler.attachEvent("onBeforeLightbox", function (id) {
    var ev = scheduler.getEvent(id);
    before = [ev.start_date, ev.end_date];
    return blocker(ev);
  });
  scheduler.attachEvent("onEventSave", function (id, data, is_new_event) {
    //lightbox may not have 'time' section
    if (!(data.start_date && data.end_date)) {
      var ev = scheduler.getEvent(id);
      data.start_date = new Date(ev.start_date);
      data.end_date = new Date(ev.end_date);
    }

    if (data.rec_type) {
      //_roll_back_dates modifies start_date of recurring event, need to check limits after modification
      // use a copy to keep original event unchanged
      var data_copy = scheduler._lame_clone(data);

      scheduler._roll_back_dates(data_copy);

      return blocker(data_copy);
    }

    return blocker(data);
  });
  scheduler.attachEvent("onEventAdded", function (id) {
    if (!id) return true;
    var ev = scheduler.getEvent(id);

    if (!blocker(ev) && scheduler.config.limit_start && scheduler.config.limit_end) {
      //if newly created event is outside of limited time - crop it, leaving only allowed time
      if (ev.start_date < scheduler.config.limit_start) {
        ev.start_date = new Date(scheduler.config.limit_start);
      }

      if (ev.start_date.valueOf() >= scheduler.config.limit_end.valueOf()) {
        ev.start_date = this.date.add(scheduler.config.limit_end, -1, "day");
      }

      if (ev.end_date < scheduler.config.limit_start) {
        ev.end_date = new Date(scheduler.config.limit_start);
      }

      if (ev.end_date.valueOf() >= scheduler.config.limit_end.valueOf()) {
        ev.end_date = this.date.add(scheduler.config.limit_end, -1, "day");
      }

      if (ev.start_date.valueOf() >= ev.end_date.valueOf()) {
        ev.end_date = this.date.add(ev.start_date, this.config.event_duration || this.config.time_step, "minute");
      }

      ev._timed = this.isOneDayEvent(ev);
    }

    return true;
  });
  scheduler.attachEvent("onEventChanged", function (id) {
    if (!id) return true;
    var ev = scheduler.getEvent(id);

    if (!blocker(ev)) {
      if (!before) return false;
      ev.start_date = before[0];
      ev.end_date = before[1];
      ev._timed = this.isOneDayEvent(ev);
    }

    return true;
  });
  scheduler.attachEvent("onBeforeEventChanged", function (ev, native_object, is_new) {
    return blocker(ev);
  });
  scheduler.attachEvent("onBeforeEventCreated", function (ev) {
    // native event
    var start_date = scheduler.getActionData(ev).date;
    var event = {
      _timed: true,
      start_date: start_date,
      end_date: scheduler.date.add(start_date, scheduler.config.time_step, "minute")
    };
    return blocker(event);
  });
  scheduler.attachEvent("onViewChange", function () {
    scheduler._mark_now(scheduler.config.mark_now);
  });
  scheduler.attachEvent("onSchedulerResize", function () {
    window.setTimeout(function () {
      scheduler._mark_now();
    }, 1);
    return true;
  });
  scheduler.attachEvent("onTemplatesReady", function () {
    scheduler._mark_now_timer = window.setInterval(function () {
      if (!scheduler._is_initialized()) return;

      scheduler._mark_now();
    }, 60000);
  });

  scheduler._mark_now = function () {
    var utc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null; // day, week, units views

    var dhx_now_time = 'dhx_now_time';

    if (!this._els[dhx_now_time]) {
      this._els[dhx_now_time] = [];
    }

    var now = scheduler._get_time_utc(utc);

    var cfg = this.config;

    scheduler._remove_mark_now(); // delete previous marks if they exist


    if (utc !== null && cfg.mark_now && now < this._max_date && now > this._min_date && now.getHours() >= cfg.first_hour && now.getHours() < cfg.last_hour) {
      var day_index = this.locate_holder_day(now);
      this._els[dhx_now_time] = scheduler._append_mark_now(day_index, now);
    }
  };

  scheduler._get_time_utc = function (offset) {
    var d, utc, nd;
    d = new Date();
    utc = d.getTime() + d.getTimezoneOffset() * 60000;
    nd = new Date(utc + 3600000 * offset);
    return nd;
  };

  scheduler._append_mark_now = function (day_index, now) {
    var dhx_now_time = 'dhx_now_time';

    var zone_start = scheduler._get_zone_minutes(now);

    var options = {
      zones: [zone_start, zone_start + 1],
      css: dhx_now_time,
      type: dhx_now_time
    };

    if (!this._table_view) {
      if (this._props && this._props[this._mode]) {
        // units view
        var start_index, end_index;
        var view = this._props[this._mode];
        var units_l = view.size || view.options.length;

        if (view.days > 1) {
          start_index = day_index;
          end_index = day_index + units_l;
        } else {
          start_index = 0;
          end_index = start_index + units_l;
        }

        var r_divs = [];

        for (var i = start_index; i < end_index; i++) {
          var t_day = i; // as each unit is actually considered +1 day

          options.days = t_day;

          var t_div = scheduler._render_marked_timespan(options, null, t_day)[0];

          r_divs.push(t_div);
        }

        return r_divs;
      } else {
        // day/week views
        options.days = day_index;
        return scheduler._render_marked_timespan(options, null, day_index);
      }
    } else {
      if (this._mode == "month") {
        options.days = +scheduler.date.date_part(now);
        return scheduler._render_marked_timespan(options, null, null);
      }
    }
  };

  scheduler._remove_mark_now = function () {
    var dhx_now_time = 'dhx_now_time';
    var els = this._els[dhx_now_time];

    for (var i = 0; i < els.length; i++) {
      var div = els[i];
      var parent = div.parentNode;

      if (parent) {
        parent.removeChild(div);
      }
    }

    this._els[dhx_now_time] = [];
  };
  /*
  scheduler._marked_timespans = {
  	"global": {
  		"0": {
  			"default": [
  				{  // sunday
  					zones: [0, 100, 500, 600],
  					css: "yellow_box",
  					type: "default",
  					view: "global",
  					day: 0
  				}
  			]
  		}
  		"112121312": {
  			"my_special_type": [
  				{
  					zones: [600, 900],
  					type: "block",
  					css: "some_class",
  					view: "global",
  					day: 112121312
  				},
  				{}
  			]
  		}
  	},
  	"units": {
  		"5_id": {
  			"3": {
  				"special_type": [ {}, {}, {} ],
  				"another_type": [ {} ]
  			}
  		},
  		"6_id": {
  			"11212127": {
  				...
  			}
  		}
  	}
  }
  */


  scheduler._marked_timespans = {
    global: {}
  };

  scheduler._get_zone_minutes = function (date) {
    return date.getHours() * 60 + date.getMinutes();
  };

  scheduler._prepare_timespan_options = function (config) {
    // receives 1 option, returns array of options
    var r_configs = []; // resulting configs

    var temp_configs = [];
    if (config.days == "fullweek") config.days = [0, 1, 2, 3, 4, 5, 6];

    if (config.days instanceof Array) {
      var t_days = config.days.slice();

      for (var i = 0; i < t_days.length; i++) {
        var cloned_config = scheduler._lame_clone(config);

        cloned_config.days = t_days[i];
        r_configs.push.apply(r_configs, scheduler._prepare_timespan_options(cloned_config));
      }

      return r_configs;
    }

    if (!config || !(config.start_date && config.end_date && config.end_date > config.start_date || config.days !== undefined && config.zones) && !config.type) return r_configs; // incorrect config was provided

    var min = 0;
    var max = 24 * 60;
    if (config.zones == "fullday") config.zones = [min, max];

    if (config.zones && config.invert_zones) {
      config.zones = scheduler.invertZones(config.zones);
    }

    config.id = scheduler.uid();
    config.css = config.css || "";
    config.type = config.type || default_timespan_type;
    var sections = config.sections;

    if (sections) {
      for (var view_key in sections) {
        if (sections.hasOwnProperty(view_key)) {
          var ids = sections[view_key];
          if (!(ids instanceof Array)) ids = [ids];

          for (var i = 0; i < ids.length; i++) {
            var t_config = scheduler._lame_copy({}, config);

            t_config.sections = {};
            t_config.sections[view_key] = ids[i];
            temp_configs.push(t_config);
          }
        }
      }
    } else {
      temp_configs.push(config);
    }

    for (var k = 0; k < temp_configs.length; k++) {
      var c_config = temp_configs[k]; // config to be checked

      var start_date = c_config.start_date;
      var end_date = c_config.end_date;

      if (start_date && end_date) {
        var t_sd = scheduler.date.date_part(new Date(start_date)); // e.g. 05 october

        var t_ed = scheduler.date.add(t_sd, 1, "day"); // 06 october, will both be incremented in the loop

        while (t_sd < end_date) {
          var t_config = scheduler._lame_copy({}, c_config);

          delete t_config.start_date;
          delete t_config.end_date;
          t_config.days = t_sd.valueOf();
          var zone_start = start_date > t_sd ? scheduler._get_zone_minutes(start_date) : min;
          var zone_end = end_date > t_ed || end_date.getDate() != t_sd.getDate() ? max : scheduler._get_zone_minutes(end_date);
          t_config.zones = [zone_start, zone_end];
          r_configs.push(t_config);
          t_sd = t_ed;
          t_ed = scheduler.date.add(t_ed, 1, "day");
        }
      } else {
        if (c_config.days instanceof Date) c_config.days = scheduler.date.date_part(c_config.days).valueOf();
        c_config.zones = config.zones.slice();
        r_configs.push(c_config);
      }
    }

    return r_configs;
  };

  scheduler._get_dates_by_index = function (index, start, end) {
    var dates = [];
    start = scheduler.date.date_part(new Date(start || scheduler._min_date));
    end = new Date(end || scheduler._max_date);
    var start_day = start.getDay();
    var delta = index - start_day >= 0 ? index - start_day : 7 - start.getDay() + index;
    var t_date = scheduler.date.add(start, delta, "day");

    for (; t_date < end; t_date = scheduler.date.add(t_date, 1, "week")) {
      dates.push(t_date);
    }

    return dates;
  };

  scheduler._get_css_classes_by_config = function (config) {
    var css_classes = [];

    if (config.type == dhx_time_block) {
      css_classes.push(dhx_time_block);
      if (config.css) css_classes.push(dhx_time_block + "_reset");
    }

    css_classes.push("dhx_marked_timespan", config.css);
    return css_classes.join(" ");
  };

  scheduler._get_block_by_config = function (config) {
    var block = document.createElement("div");

    if (config.html) {
      if (typeof config.html == "string") block.innerHTML = config.html;else block.appendChild(config.html);
    }

    return block;
  };

  scheduler._render_marked_timespan = function (options, area, day) {
    var blocks = []; // resulting block which will be rendered and returned

    var c = scheduler.config;
    var min_date = this._min_date;
    var max_date = this._max_date;
    var day_value = false; // if timespan for specific date should be displayed

    if (!c.display_marked_timespans) return blocks; // in case of markTimespan

    if (!day && day !== 0) {
      if (options.days < 7) day = options.days;else {
        var date_to_display = new Date(options.days);
        day_value = +date_to_display; // in case of markTimespan date could be not in the viewing range, need to return

        if (!(+max_date > +date_to_display && +min_date <= +date_to_display)) return blocks;
        day = date_to_display.getDay();
      } // convert day default index (Sun - 0, Sat - 6) to index of hourscales (depends on week_start and config.start_on_monday)

      var min_day = min_date.getDay();

      if (min_day > day) {
        day = 7 - (min_day - day);
      } else {
        day = day - min_day;
      }
    }

    var zones = options.zones;

    var css_classes = scheduler._get_css_classes_by_config(options);

    if (scheduler._table_view && scheduler._mode == "month") {
      var areas = [];
      var days = [];

      if (!area) {
        days = day_value ? [day_value] : scheduler._get_dates_by_index(day);

        for (var i = 0; i < days.length; i++) {
          areas.push(this._scales[days[i]]);
        }
      } else {
        areas.push(area);
        days.push(day);
      }

      for (var i = 0; i < areas.length; i++) {
        area = areas[i];
        day = days[i];

        var sweek = Math.floor((this._correct_shift(day, 1) - min_date.valueOf()) / (60 * 60 * 1000 * 24 * this._cols.length)),
            sday = this.locate_holder_day(day, false) % this._cols.length;

        if (this._ignores[sday]) continue;

        var block_proto = scheduler._get_block_by_config(options),
            height = Math.max(area.offsetHeight - 1, 0),
            // 1 for bottom border
        width = Math.max(area.offsetWidth - 1, 0),
            // 1 for left border
        left = this._colsS[sday],
            top = this._colsS.heights[sweek] + (this._colsS.height ? this.xy.month_scale_height + 2 : 2) - 1;

        block_proto.className = css_classes;
        block_proto.style.top = top + "px";
        block_proto.style.lineHeight = block_proto.style.height = height + "px";

        for (var k = 0; k < zones.length; k += 2) {
          var start = zones[i];
          var end = zones[i + 1];
          if (end <= start) return [];
          var block = block_proto.cloneNode(true);
          block.style.left = left + Math.round(start / (24 * 60) * width) + "px";
          block.style.width = Math.round((end - start) / (24 * 60) * width) + "px";
          area.appendChild(block);
          blocks.push(block);
        }
      }
    } else {
      var index = day;
      if (this._ignores[this.locate_holder_day(day, false)]) return blocks;

      if (this._props && this._props[this._mode] && options.sections && options.sections[this._mode]) {
        var view = this._props[this._mode];
        index = view.order[options.sections[this._mode]];
        var inner_index = view.order[options.sections[this._mode]];

        if (!(view.days > 1)) {
          index = inner_index;

          if (view.size && index > view.position + view.size) {
            index = 0;
          }
        } else {
          var units_l = view.size || view.options.length;
          index = index * units_l + inner_index;
        }
      }

      area = area ? area : scheduler.locate_holder(index);

      for (var i = 0; i < zones.length; i += 2) {
        var start = Math.max(zones[i], c.first_hour * 60);
        var end = Math.min(zones[i + 1], c.last_hour * 60);

        if (end <= start) {
          if (i + 2 < zones.length) continue;else return [];
        }

        var block = scheduler._get_block_by_config(options);

        block.className = css_classes; // +1 for working with section which really takes up whole height (as % would be == 0)

        var all_hours_height = this.config.hour_size_px * 24 + 1;
        var hour_ms = 60 * 60 * 1000;
        block.style.top = Math.round((start * 60 * 1000 - this.config.first_hour * hour_ms) * this.config.hour_size_px / hour_ms) % all_hours_height + "px";
        block.style.lineHeight = block.style.height = Math.max(Math.round((end - start) * 60 * 1000 * this.config.hour_size_px / hour_ms) % all_hours_height, 1) + "px";
        area.appendChild(block);
        blocks.push(block);
      }
    }

    return blocks;
  };

  scheduler._mark_timespans = function () {
    var data = this._els["dhx_cal_data"][0];
    var divs = [];

    if (scheduler._table_view && scheduler._mode == "month") {
      for (var day in this._scales) {
        var date = new Date(+day);
        divs.push.apply(divs, scheduler._on_scale_add_marker(this._scales[day], date));
      }
    } else {
      //manually trigger rendering of configs for each column
      var date = new Date(scheduler._min_date);

      for (var i = 0, len = data.childNodes.length; i < len; i++) {
        var area = data.childNodes[i];

        if (area.firstChild && scheduler._getClassName(area.firstChild).indexOf("dhx_scale_hour") > -1) {
          continue;
        }

        divs.push.apply(divs, scheduler._on_scale_add_marker(area, date));
        date = scheduler.date.add(date, 1, "day");
      }
    }

    return divs;
  }; // just marks timespan, will be cleaned after refresh


  scheduler.markTimespan = function (configuration) {
    var rebuild_els = false;

    if (!this._els["dhx_cal_data"]) {
      scheduler.get_elements();
      rebuild_els = true;
    } // backup regular marked timespans


    var timespans_ids = scheduler._marked_timespans_ids,
        timespan_types = scheduler._marked_timespans_types,
        timespans = scheduler._marked_timespans;
    scheduler.deleteMarkedTimespan(); //add block to configs

    scheduler.addMarkedTimespan(configuration);

    var divs = scheduler._mark_timespans();

    if (rebuild_els) scheduler._els = []; // restore timespan config

    scheduler._marked_timespans_ids = timespans_ids;
    scheduler._marked_timespans_types = timespan_types;
    scheduler._marked_timespans = timespans;
    return divs;
  };

  scheduler.unmarkTimespan = function (divs) {
    if (!divs) return;

    for (var i = 0; i < divs.length; i++) {
      var div = divs[i]; // parent may no longer be present if we switched views, navigated

      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }
  };

  scheduler._addMarkerTimespanConfig = function (config) {
    var global = "global";
    var timespans = scheduler._marked_timespans;
    var id = config.id;
    var ids = scheduler._marked_timespans_ids;
    if (!ids[id]) ids[id] = [];
    var day = config.days;
    var sections = config.sections;
    var type = config.type; // default or specified

    config.id = id;

    if (sections) {
      for (var view_key in sections) {
        if (sections.hasOwnProperty(view_key)) {
          if (!timespans[view_key]) timespans[view_key] = {};
          var unit_id = sections[view_key];
          var timespans_view = timespans[view_key];
          if (!timespans_view[unit_id]) timespans_view[unit_id] = {};
          if (!timespans_view[unit_id][day]) timespans_view[unit_id][day] = {};

          if (!timespans_view[unit_id][day][type]) {
            timespans_view[unit_id][day][type] = [];
            if (!scheduler._marked_timespans_types) scheduler._marked_timespans_types = {};
            if (!scheduler._marked_timespans_types[type]) scheduler._marked_timespans_types[type] = true;
          }

          var day_configs = timespans_view[unit_id][day][type];
          config._array = day_configs;
          day_configs.push(config);
          ids[id].push(config);
        }
      }
    } else {
      if (!timespans[global][day]) timespans[global][day] = {};
      if (!timespans[global][day][type]) timespans[global][day][type] = [];
      if (!scheduler._marked_timespans_types) scheduler._marked_timespans_types = {};
      if (!scheduler._marked_timespans_types[type]) scheduler._marked_timespans_types[type] = true;
      var day_configs = timespans[global][day][type];
      config._array = day_configs;
      day_configs.push(config);
      ids[id].push(config);
    }
  };

  scheduler._marked_timespans_ids = {}; // adds marked timespan to collections, persistent

  scheduler.addMarkedTimespan = function (configuration) {
    var configs = scheduler._prepare_timespan_options(configuration);

    if (!configs.length) return; // options are incorrect, nothing to mark

    var id = configs[0].id;

    for (var i = 0; i < configs.length; i++) {
      scheduler._addMarkerTimespanConfig(configs[i]);
    }

    return id;
  }; // not used for now


  scheduler._add_timespan_zones = function (current_zones, zones) {
    var resulting_zones = current_zones.slice();
    zones = zones.slice();
    if (!resulting_zones.length) return zones;

    for (var i = 0; i < resulting_zones.length; i += 2) {
      var c_zone_start = resulting_zones[i];
      var c_zone_end = resulting_zones[i + 1];
      var isLast = i + 2 == resulting_zones.length;

      for (var k = 0; k < zones.length; k += 2) {
        var zone_start = zones[k];
        var zone_end = zones[k + 1];

        if (zone_end > c_zone_end && zone_start <= c_zone_end || zone_start < c_zone_start && zone_end >= c_zone_start) {
          resulting_zones[i] = Math.min(c_zone_start, zone_start);
          resulting_zones[i + 1] = Math.max(c_zone_end, zone_end);
          i -= 2;
        } else {
          if (!isLast) // do nothing, maybe next current zone will match or will be last
            continue;
          var offset = c_zone_start > zone_start ? 0 : 2;
          resulting_zones.splice(i + offset, 0, zone_start, zone_end); // last current zone, need to add another
        }

        zones.splice(k--, 2); // zone was merged or added, need to exclude it

        break;
      }
    }

    return resulting_zones;
  };

  scheduler._subtract_timespan_zones = function (current_zones, zones) {
    var resulting_zones = current_zones.slice();

    for (var i = 0; i < resulting_zones.length; i += 2) {
      var c_zone_start = resulting_zones[i]; // current_zone_start

      var c_zone_end = resulting_zones[i + 1];

      for (var k = 0; k < zones.length; k += 2) {
        var zone_start = zones[k];
        var zone_end = zones[k + 1];

        if (zone_end > c_zone_start && zone_start < c_zone_end) {
          var is_modified = false;

          if (c_zone_start >= zone_start && c_zone_end <= zone_end) {
            resulting_zones.splice(i, 2);
          }

          if (c_zone_start < zone_start) {
            resulting_zones.splice(i, 2, c_zone_start, zone_start);
            is_modified = true;
          }

          if (c_zone_end > zone_end) {
            resulting_zones.splice(is_modified ? i + 2 : i, is_modified ? 0 : 2, zone_end, c_zone_end);
          }

          i -= 2;
          break;
        } else {
          continue;
        }
      }
    }

    return resulting_zones;
  };

  scheduler.invertZones = function (zones) {
    return scheduler._subtract_timespan_zones([0, 1440], zones.slice());
  };

  scheduler._delete_marked_timespan_by_id = function (id) {
    var configs = scheduler._marked_timespans_ids[id];

    if (configs) {
      for (var i = 0; i < configs.length; i++) {
        var config = configs[i];
        var parent_array = config._array;

        for (var k = 0; k < parent_array.length; k++) {
          if (parent_array[k] == config) {
            parent_array.splice(k, 1);
            break;
          }
        }
      }
    }
  };

  scheduler._delete_marked_timespan_by_config = function (config) {
    var timespans = scheduler._marked_timespans;
    var sections = config.sections;
    var day = config.days;
    var type = config.type || default_timespan_type;
    var viewspans;

    if (sections) {
      for (var view_key in sections) {
        if (sections.hasOwnProperty(view_key) && timespans[view_key]) {
          var unit_id = sections[view_key];

          if (timespans[view_key][unit_id]) {
            viewspans = timespans[view_key][unit_id];
          }
        }
      }
    } else {
      viewspans = timespans.global;
    }

    if (viewspans) {
      if (day !== undefined) {
        if (viewspans[day] && viewspans[day][type]) {
          scheduler._addMarkerTimespanConfig(config); // register config in order to be able to delete recurring timespan from a specific day


          scheduler._delete_marked_timespans_list(viewspans[day][type], config);
        }
      } else {
        for (var d in viewspans) {
          if (viewspans[d][type]) {
            var dayConfig = scheduler._lame_clone(config);

            config.days = d;

            scheduler._addMarkerTimespanConfig(dayConfig); // register config in order to be able to delete recurring timespan from a specific day


            scheduler._delete_marked_timespans_list(viewspans[d][type], config);
          }
        }
      }
    }
  };

  scheduler._delete_marked_timespans_list = function (day_timespans, config) {
    for (var i = 0; i < day_timespans.length; i++) {
      var d_t = day_timespans[i];

      var zones = scheduler._subtract_timespan_zones(d_t.zones, config.zones);

      if (zones.length) d_t.zones = zones;else {
        day_timespans.splice(i, 1);
        i--; // need to update ids collection

        var related_zones = scheduler._marked_timespans_ids[d_t.id];

        for (var k = 0; k < related_zones.length; k++) {
          if (related_zones[k] == d_t) {
            related_zones.splice(k, 1);
            break;
          }
        }
      }
    }
  };

  scheduler.deleteMarkedTimespan = function (configuration) {
    // delete everything
    if (!arguments.length) {
      scheduler._marked_timespans = {
        global: {}
      };
      scheduler._marked_timespans_ids = {};
      scheduler._marked_timespans_types = {};
    }

    if (_typeof(configuration) != "object") {
      // id was passed
      scheduler._delete_marked_timespan_by_id(configuration);
    } else {
      // normal configuration was passed
      if (!(configuration.start_date && configuration.end_date)) {
        if (configuration.days === undefined && !configuration.type) configuration.days = "fullweek";
        if (!configuration.zones) configuration.zones = "fullday";
      }

      var types = [];

      if (!configuration.type) {
        //if type not specified - delete timespans of all types
        for (var type in scheduler._marked_timespans_types) {
          types.push(type);
        }
      } else {
        types.push(configuration.type);
      }

      var configs = scheduler._prepare_timespan_options(configuration);

      for (var i = 0; i < configs.length; i++) {
        var config = configs[i];

        for (var t = 0; t < types.length; t++) {
          var typedConfig = scheduler._lame_clone(config);

          typedConfig.type = types[t];

          scheduler._delete_marked_timespan_by_config(typedConfig);
        }
      }
    }
  };

  scheduler._get_types_to_render = function (common, specific) {
    var types_to_render = common ? scheduler._lame_copy({}, common) : {};

    for (var type in specific || {}) {
      if (specific.hasOwnProperty(type)) {
        types_to_render[type] = specific[type];
      }
    }

    return types_to_render;
  };

  scheduler._get_configs_to_render = function (types) {
    var configs = [];

    for (var type in types) {
      if (types.hasOwnProperty(type)) {
        configs.push.apply(configs, types[type]);
      }
    }

    return configs;
  };

  scheduler._on_scale_add_marker = function (area, day) {
    if (scheduler._table_view && scheduler._mode != "month") return;
    var day_index = day.getDay();
    var day_value = day.valueOf();
    var mode = this._mode;
    var timespans = scheduler._marked_timespans;
    var r_configs = [];
    var divs = [];

    if (this._props && this._props[mode]) {
      // we are in the units view and need to draw it's sections as well
      var view = this._props[mode]; // units view object

      var units = view.options;

      var index = scheduler._get_unit_index(view, day);

      var unit = units[index]; // key, label

      if (!(view.days > 1)) {
        day = scheduler.date.date_part(new Date(this._date)); // for units view actually only 1 day is displayed yet the day variable will change, need to use this._date for all calls
      } else {
        var dx = 24 * 60 * 60 * 1000;
        var day_ind = Math.round((day - scheduler._min_date) / dx);
        day = scheduler.date.add(scheduler._min_date, Math.floor(day_ind / units.length), "day"); // to the "same" day for all sections

        day = scheduler.date.date_part(day);
      }

      day_index = day.getDay();
      day_value = day.valueOf();

      if (timespans[mode] && timespans[mode][unit.key]) {
        var unit_zones = timespans[mode][unit.key];

        var unit_types = scheduler._get_types_to_render(unit_zones[day_index], unit_zones[day_value]);

        r_configs.push.apply(r_configs, scheduler._get_configs_to_render(unit_types));
      }
    }

    var global_data = timespans["global"];
    var day_types = global_data[day_value] || global_data[day_index];
    r_configs.push.apply(r_configs, scheduler._get_configs_to_render(day_types));

    for (var i = 0; i < r_configs.length; i++) {
      divs.push.apply(divs, scheduler._render_marked_timespan(r_configs[i], area, day));
    }

    return divs;
  };

  scheduler.attachEvent("onScaleAdd", function () {
    scheduler._on_scale_add_marker.apply(scheduler, arguments);
  });

  scheduler.dblclick_dhx_marked_timespan = function (e, src) {
    scheduler.callEvent("onScaleDblClick", [scheduler.getActionData(e).date, src, e]);

    if (scheduler.config.dblclick_create) {
      scheduler.addEventNow(scheduler.getActionData(e).date, null, e);
    }
  };
};

scheduler._temp_limit_scope();

/***/ }),

/***/ "4DyJSCms":
/*!**********************************************************!*\
  !*** ./resources/js/_frontend/core/components/Button.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "Kdr+IcO5");
/* harmony import */ var _js_frontend_components_PushUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/_frontend/components/PushUp */ "0KcQO4h0");
/**
 * BB.Components.Button.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Core.Button');


window.pushUp = _js_frontend_components_PushUp__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (BB.Core.Button = function () {
  function _init() {
    _initPushUp();

    _initExpanded();

    _initHoverAnimate();

    _initFloating();

    _initStatusAnimate(); // _initToggle();


    _initSelect();

    _initGoTop();

    _initGoTo(); // if (NODE_ENV == 'development') {
    //     console.log('--- INIT CORE BUTTONS');
    // }

  }

  function _initPushUp() {
    $(document).on('click', '[data-push]', function () {
      var _this = this;

      var messageSuccess = $(this).attr('data-push-message-success');
      var messageError = $(this).attr('data-push-message-error');
      var delay = $(this).attr('data-push-delay') || 300;
      var timeOut = $(this).attr('data-push-timeout') || 1500;
      var status;
      setTimeout(function () {
        status = $(_this).attr('data-push-status') || 'success';
      }, 100);
      setTimeout(function () {
        if (status === 'error') {
          Object(_js_frontend_components_PushUp__WEBPACK_IMPORTED_MODULE_1__["default"])({
            text: messageError,
            status: status,
            timeOut: timeOut
          });
          $(_this).addClass('is-error');
        } else {
          Object(_js_frontend_components_PushUp__WEBPACK_IMPORTED_MODULE_1__["default"])({
            text: messageSuccess,
            status: status,
            timeOut: timeOut
          });
          $(_this).addClass('is-success');
        }
      }, delay);
    });
  } //btn expanded


  function _initExpanded() {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].toggleClassAtBlockClickOutside('.js-btn-expanded', 'is-active');
  } //btn animate on hover


  function _initHoverAnimate() {
    $(document).on('mouseenter', '.js-btn-animate', function (e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('.button-animate__hover').css({
        top: relY,
        left: relX
      });
    }).on('mouseout', '.js-btn-animate', function (e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('.button-animate__hover').css({
        top: relY,
        left: relX
      });
    });
  } //floating btn animatin


  function _initFloating() {
    var $btn = $(document).find('.js-btn-floating');
    var run = true;

    if (!$btn.find('.btn-floating__list').length) {
      $btn.find('.btn-floating__link').css('pointer-events', 'auto');
    } //Обработчик добавляет классы затем отписыватеся от события


    var hendler = function hendler() {
      var _this2 = this;

      $(this).removeClass('fa-enter-active').addClass('fa-leave-active');
      $btn.off('transitionend webkitTransitionEnd oTransitionEnd', hendler);
      setTimeout(function () {
        $(_this2).removeClass('fa-leave-active');
      }, 1000);
    }; //Анимация закрытия


    function _removeAnimation(el) {
      el.on('transitionend webkitTransitionEnd oTransitionEnd', hendler);
      setTimeout(function () {
        el.removeClass('fa-leave-active');
      }, 1000);
    }

    if ($(window).width() > 768) {
      if (!run) {
        return;
      }

      $(document).on('mouseenter', '.js-btn-floating', function () {
        run = false;
        $(this).addClass('fa-enter-active');
      }).on('mouseleave', '.js-btn-floating', hendler);
    } else {
      $(document).on('click', '.js-btn-floating', function () {
        if ($(this).find('.btn-floating__list').length) {
          $(this).addClass('fa-enter-active').css('z-index', 1000);
          $('.js-overlay').addClass('is-visible').addClass('overlay--btn-floating');
        } else {
          var btnId = $(this).find('.btn-floating__link').not('.md-hide');
          btnId.trigger('click');
        }
      });
      $(document).on('click', '.js-btn-floating .btn-floating__link', function (e) {
        $btn.removeClass('fa-enter-active').removeAttr('style');

        _removeAnimation($(this));

        $('.js-overlay').removeClass('is-visible overlay--btn-floating');
        e.stopPropagation();
      }); //Клик в не кнопки скрывает оверлей и кнопки

      $(document).on('click touchstart', '.overlay--btn-floating', function (e) {
        $btn.removeClass('fa-enter-active').addClass('fa-leave-active');
        setTimeout(function () {
          $('.js-overlay').removeClass('is-visible').removeClass('overlay--btn-floating');
        }, 100);
        setTimeout(function () {
          $btn.removeClass('fa-leave-active');
        }, 1500);
      });
    } //Если ссылка открывает модалку, то по открытию модалки скрывает кнопки


    $('.modal').on('show.bs.modal', function () {
      $btn.removeClass('fa-enter-active').addClass('fa-leave-active');
      $('.js-overlay').removeAttr('style');
      setTimeout(function () {
        $btn.removeClass('fa-leave-active');
      }, 1500);
    });
  } //btn status animate


  function _initStatusAnimate() {
    var run = true;
    $(document).on('click', '.btn-animate', function (e) {
      var _this3 = this;

      if (run) {
        run = false;
        $(this).addClass('is-animate is-ready');
        setTimeout(function () {
          $(_this3).removeClass('is-animate is-ready');
          run = true;
        }, 2500);
        setTimeout(function () {
          $(_this3).addClass('is-ready');
        }, 5000);
      }

      e.preventDefault();
    });
  } // function _initToggle() {
  //     let $btnToggle = $(document).find('.js-view-toggle');
  //     $btnToggle.on('click', function(e) {
  //         let $target = $(e.target);
  //         let $last = $(this)
  //             .children()
  //             .last();
  //         if ($target.is($last)) {
  //             $(this).addClass('is-active');
  //         } else {
  //             $(this).removeClass('is-active');
  //         }
  //     });
  // }


  function _initSelect() {
    var $btn = $(document).find('.js-btn-select');
    var ACTIVE_CLASS = 'is-active';
    $btn.on('click', function (e) {
      if ($(this).find('.btn-select__list').length) {
        if ($(this).hasClass(ACTIVE_CLASS)) {
          $(this).removeClass(ACTIVE_CLASS);
        } else {
          $(this).addClass(ACTIVE_CLASS);
        }
      }
    });
  } //btn scroll to top


  function _initGoTop() {
    $('.js-go-top').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  } //btn scroll to element


  function _initGoTo() {
    //Click event to scroll to section whith id like href
    $('.js-goto').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var elementClick = $(this).attr('href');
      var destination = $(elementClick).offset().top;
      var wrapScroll = $('.wrapper__inner').scrollTop();
      var offset;

      if ($(window).width() > 480) {
        offset = 90;
      } else {
        offset = 60;
      }

      $('html, body').animate({
        scrollTop: destination - offset + 'px'
      });
    });
  }

  return {
    init: _init,
    initPushUp: _initPushUp,
    initExpanded: _initExpanded,
    initHoverAnimate: _initHoverAnimate,
    initFloating: _initFloating,
    initStatusAnimate: _initStatusAnimate,
    // initToggle: _initToggle,
    initSelect: _initSelect,
    initGoTop: _initGoTop,
    initGoTo: _initGoTo
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "7ARmJ1/n":
/*!************************************************!*\
  !*** ./resources/js/_frontend/modules/Menu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * BB.Modules.Menu.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Modules.Menu');
/* harmony default export */ __webpack_exports__["default"] = (BB.Modules.Menu = function () {
  var hamburger = '.js-main-nav-btn';
  var hamburgerCrm = '.js-hamburger';
  var ACTIVE_CLASS = 'is-active';
  var DROPDOWN_ACTIVE_CLASS = 'menu-dropdown--open';
  var $html, $wrapper, $overlay, $menu, $menuItem, $menuOvelay, $menuItemDropdown, $btnFloat;

  function _init() {
    _getElements();

    setTimeout(function () {
      _addEventListener();
    }, 0); //Для безпроблемной трансформации меню при перевороте телефона

    if (document.querySelector(hamburger)) {
      $(window).on('resize', _closeMobileMenu);
    }
  }

  function _getElements() {
    $html = $('html');
    $wrapper = $('.wrapper');
    $overlay = $('.js-overlay'); // $hamburger = $(hamburger);
    // $hamburgerCrm = $(hamburgerCrm);

    $menu = $('.js-menu');
    $menuItem = $menu.find('.menu__item');
    $menuOvelay = $('.js-menu-overlay');
    $menuItemDropdown = $(document).find('.js-menu-item-dropdown');
    $btnFloat = $(document).find('.js-btn-floating');
  }

  function _addEventListener() {
    // Управление боковым меню клиента
    document.querySelectorAll(hamburger).forEach(function (item) {
      item.removeEventListener('click', _toggleSideMenu);
      item.addEventListener('click', _toggleSideMenu);
    });

    function _toggleSideMenu(e) {
      console.log('-- click');

      if (e.target.closest(hamburger).classList.contains('on')) {
        _closeMobileMenu(e);
      } else {
        _openMobileMenu(e);
      }
    }

    var mobileNavMenuOverlay = document.querySelector('.mobile-nav__overlay');

    if (mobileNavMenuOverlay) {
      mobileNavMenuOverlay.removeEventListener('click', _closeMobileMenu);
      mobileNavMenuOverlay.addEventListener('click', _closeMobileMenu);
    } // Управление боковым меню в CRM


    var NavMenu = document.querySelector('.page-cabinet ' + hamburgerCrm);

    if (NavMenu) {
      NavMenu.removeEventListener('click', _toggleNavMenu);
      NavMenu.addEventListener('click', _toggleNavMenu);
    }

    function _toggleNavMenu(e) {
      if (e.target.closest(hamburgerCrm).classList.contains('on')) {
        _closeNavMenu(e);
      } else {
        _openNavMenu(e);
      }
    }

    $menuItem.on('click', function (e) {
      var $target = $(e.target); //Если нет вложенного меню

      if (!$(this).hasClass('js-menu-item-dropdown')) {
        $menuItem.removeClass(ACTIVE_CLASS).removeClass(DROPDOWN_ACTIVE_CLASS);
        $(this).addClass(ACTIVE_CLASS); // e.stopPropagation();
      } else {
        //Если есть вложенное меню
        //Если таргет ссылка но не кнока Отменить
        if ($target.hasClass('menu-dropdown__link') && !$target.hasClass('menu-dropdown__link--abort')) {
          var $parent = $target.parent('.menu-dropdown__item'); //Переключаем активный класс у главной ссылки меню и открываем вложенное меню

          $menuItem.removeClass(activeClass);
          $(this).addClass(DROPDOWN_ACTIVE_CLASS).addClass(activeClass); //Переключаем активный класс у вложенных li

          $('.menu-dropdown__item').removeClass(activeClass);
          $parent.addClass(activeClass);

          if ($(window).width() > 480) {
            //Сдвигаем контент
            $wrapper.addClass('menu-open');
          } else {
            _close(e);
          } // e.stopPropagation();

        } else if ( //Если таргет кнока Отменить просто закрываем меню
        $target.hasClass('menu-dropdown__link') && $target.hasClass('menu-dropdown__link--abort')) {
          _close(e); // e.stopPropagation();

        } else {
          //Если таргет НЕ ссылка, проверяем на наличие активного класса у дропдауна
          if ($(this).hasClass(DROPDOWN_ACTIVE_CLASS)) {
            $(this).removeClass(DROPDOWN_ACTIVE_CLASS);
            $wrapper.removeClass('menu-open');
          } else {
            $menuItemDropdown.removeClass(DROPDOWN_ACTIVE_CLASS);
            $(this).addClass(DROPDOWN_ACTIVE_CLASS);

            if ($(window).width() > 480) {
              $wrapper.addClass('menu-open');
            } else {
              $btnFloat.fadeOut();
              $menuOvelay.addClass('is-visible');
            }
          }
        }
      }

      if (!$(this).hasClass(ACTIVE_CLASS)) {
        $menuItem.removeClass(ACTIVE_CLASS);
        $(this).addClass(ACTIVE_CLASS);
      }
    });
    document.querySelectorAll('.js-mobile-nav--close').forEach(function (item) {
      item.removeEventListener('click', _closeMobileMenu);
      item.addEventListener('click', _closeMobileMenu);
    }); //Ивент клика по аакодеону внутри меню

    document.querySelectorAll('.js-mobile-nav .mobile-nav__item').forEach(function (item) {
      if (!item.classList.contains('bb-accordeon__item')) {
        item.removeEventListener('click', _closeMobileMenu);
        item.addEventListener('click', _closeMobileMenu);
      }
    });
    document.querySelectorAll('.bb-accordeon__content a').forEach(function (item) {
      item.removeEventListener('click', _closeMobileMenu);
      item.addEventListener('click', _closeMobileMenu);
    });
    $(document).on('click', '.js-menu-item-dropdown', function (e) {
      if ($(this).hasClass(DROPDOWN_ACTIVE_CLASS)) {
        $menuItemDropdown.removeClass(DROPDOWN_ACTIVE_CLASS);
        $(this).addClass(DROPDOWN_ACTIVE_CLASS);
      } else {
        $(this).removeClass(DROPDOWN_ACTIVE_CLASS);
      }

      e.stopPropagation();
    });
    $(document).on('click', '.js-menu-item-dropdown .menu__link', function (e) {
      e.preventDefault();
    });
  } // Функция открытия бокового мобильного меню


  function _openMobileMenu(e) {
    _documentBlock('block');

    e.target.closest(hamburger).classList.add('on');
    $wrapper.addClass('mobile-nav--open');
  } // Функция закрытия бокового мобильного меню


  function _closeMobileMenu(e) {
    _documentBlock('unblock');

    document.querySelector(hamburger).classList.remove('on');
    var navWrapper = document.querySelector('.mobile-nav__wrap');
    navWrapper.classList.add('is-close');
    setTimeout(function () {
      $wrapper.removeClass('mobile-nav--open');
      navWrapper.classList.remove('is-close');
    }, 400);
  } // Функция открытия бокового меню в CRM


  function _openNavMenu(e) {
    var target = e.target;
    document.querySelector('.wrapper').classList.add('menu-open');
    document.querySelector('.header').classList.add('is-moving');
    target.closest(hamburgerCrm).classList.add('on');
    target.closest('.js-menu').classList.add('is-open');
  } // Функция закрытия бокового меню в CRM


  function _closeNavMenu(e) {
    var target = e.target;
    document.querySelector('.wrapper').classList.remove('menu-open');
    document.querySelector('.header').classList.remove('is-moving');
    target.closest(hamburgerCrm).classList.remove('on');
    target.closest('.js-menu').classList.remove('is-open');
  }

  function _documentBlock(state) {
    if (state == 'block') {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      if (state == 'unblock') {
        document.documentElement.removeAttribute('style');
        document.body.removeAttribute('style');
      }
    }
  }

  return {
    init: _init
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "BjXyzBxv":
/*!**********************************************!*\
  !*** ./app/Modules/Common/Assets/js/Maps.js ***!
  \**********************************************/
/*! exports provided: bus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bus", function() { return bus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Maps; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "oCYnbi0F");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}


var bus = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]();

var Maps =
/*#__PURE__*/
function () {
  function Maps() {
    _classCallCheck(this, Maps);
  }

  _createClass(Maps, [{
    key: "initCardMap",
    value: function initCardMap(className, coordX, coordY) {
      var myMap;
      var myPlaceMark;
      var balloon;
      var ymaps = global.ymaps;
      ymaps.ready(function () {
        myMap = new ymaps.Map(className, {
          center: [coordX, coordY],
          zoom: 17
        });
        balloon = {
          iconLayout: 'default#image',
          iconImageHref: '/client/files/icons/svg/map-pin.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        };
        myPlaceMark = new ymaps.Placemark([coordX, coordY], {}, balloon);
        myMap.controls.remove('typeSelector');
        myMap.controls.add('zoomControl', {
          size: 'small'
        });
        myMap.geoObjects.add(myPlaceMark);
      });
    }
  }]);

  return Maps;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "yLpjYHve")))

/***/ }),

/***/ "DLGeotdn":
/*!**********************************************************!*\
  !*** ./resources/js/_frontend/core/components/Slider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "QdZyi3Ey");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "Zej/1uf2");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Base.Components.Slider.js
 * !В этом файле добавлять только те слайдеры
 * !Которые будут инициализироваться в нескольких местах
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Core.Slider');


/* harmony default export */ __webpack_exports__["default"] = (BB.Core.Slider = function () {
  function _init() {
    _initSlick();

    _initSwiperSlider();

    _initPreviewSwiperSlider();

    _initPreviewSlider();

    _initTriumphSlider();

    _initCatalogItemSlider(); // if (NODE_ENV == 'development') {
    //     console.log('--- INIT CORE SLIDER');
    // }

  }

  function _initSlick() {
    var $slider = $('.js-bb-slider');

    if ($slider.length) {
      $slider.each(function () {
        var $slids = $(this).find('.bb-slider__slides');
        var $slide = $(this).find('.bb-slider__slide');
        var $prevArrow = $(this).find('.bb-slider__arrow--prev');
        var $nextArrow = $(this).find('.bb-slider__arrow--next'); //Set settings from html

        var slidesToShow = $(this).data('slider-slides-show');
        var slidesToScroll = $(this).data('slider-slides-scroll');
        var autoplay = $(this).data('slider-autoplay');
        var autoplaySpeed = $(this).data('slider-autoplay-speed');
        var speed = $(this).data('slider-speed');
        var loop = $(this).data('slider-loop');
        var dots = $(this).data('slider-dots');
        var settings = {
          arrows: true,
          prevArrow: $prevArrow,
          nextArrow: $nextArrow,
          autoplay: autoplay ? true : false,
          autoplaySpeed: autoplaySpeed ? autoplaySpeed : 2000,
          speed: speed ? speed : 800,
          slidesToShow: slidesToShow ? slidesToShow : 3,
          slidesToScroll: slidesToScroll ? slidesToScroll : 1,
          dots: dots ? true : false,
          infinite: loop ? true : false,
          responsive: [{
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: false
            }
          }]
        };

        if ($slide.length > 1) {
          $slids.not('.slick-initialized').slick(settings);
        }
      });
    }
  }

  function _initSwiperSlider() {
    var slider = '.js-swiper-slider';
    var $slider = $(slider);

    if ($slider.length) {
      $slider.each(function () {
        var slides = $(this).data('slider-slides');
        var slidesMd = $(this).data('slider-slides-md');
        var slidesSm = $(this).data('slider-slides-sm');
        var slidesXs = $(this).data('slider-slides-xs');
        var offset = $(this).data('slider-offset');
        var freeMode = $(this).data('slider-free-mode');
        var mouseWheel = $(this).data('slider-mouse-wheel');
        var center = $(this).data('slider-center');
        var lazy = $(this).data('slider-lazy');
        var loop = $(this).data('slider-loop');
        var speed = $(this).data('slider-speed');
        var $pagination = $(this).find('.swiper-pagination');
        var $nextArrow = $(this).find('.swiper-button-next');
        var $prevArrow = $(this).find('.swiper-button-prev');
        var $sliderContainer;

        if ($(this).hasClass('swiper-container')) {
          $sliderContainer = $(this);
        } else {
          $sliderContainer = $(this).find('.swiper-container');
        }

        var settings = {
          slidesPerView: slides ? slides : 1,
          spaceBetween: offset ? offset : 0,
          speed: speed ? speed : 300,
          centerInsufficientSlides: !!center,
          freeMode: !!freeMode,
          mousewheel: !!mouseWheel,
          loop: !!loop,
          preloadImages: !!lazy,
          lazy: !!lazy,
          pagination: {
            el: $pagination,
            clickable: false
          },
          navigation: {
            nextEl: $nextArrow,
            prevEl: $prevArrow
          },
          breakpoints: {
            480: {
              slidesPerView: slidesXs ? slidesXs : 1
            },
            768: {
              slidesPerView: slidesSm ? slidesSm : 1
            },
            1024: {
              slidesPerView: slidesMd ? slidesMd : 1
            }
          }
        };
        new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($sliderContainer, settings);
      });
    }
  }

  function _initPreviewSwiperSlider() {
    var slider = '.js-swiper-slider--preview';
    var $slider = $(slider);

    if ($slider.length && $(window).width() > 480) {
      var settings = {
        touchRatio: 0.5,
        touchAngle: 30,
        slidesPerView: 4.75,
        spaceBetween: 2,
        freeMode: true,
        mousewheel: true,
        lazy: true,
        breakpoints: {
          320: {
            slidesPerView: 1.5
          },
          480: {
            slidesPerView: 2.5
          },
          1024: {
            slidesPerView: 4.5
          }
        }
      };
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, settings);
    }
  }

  function _initTriumphSlider() {
    var $slider = $('.js-bb-slider--triumph');

    if ($slider.length) {
      $slider.each(function () {
        var $this = $(this);
        var $parent = $this.closest('.triumph');
        var $slides = $this.find('.bb-slider__slides');
        var $slide = $this.find('.bb-slider__slide');
        var $btnNext = $parent.find('.js-bb-slider-btn--next');
        var settings = {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          touchMove: false,
          infinite: false
        };
        if ($slide.length) $slides.slick(settings);
        $this.on('afterChange', function (event, slick, currentSlide, nextSlide) {
          if (currentSlide + 1 === slick.slideCount) {
            $btnNext.text('Понятно').attr('data-dismiss', 'modal');
          }
        });
        $btnNext.on('click', function () {
          if (this.hasAttribute('data-dismiss')) {
            $this.removeClass('is-visible');
          } else {
            $slides.slick('slickNext');
          }
        }); //Disable change slide on click dots

        $slider.find('.slick-dots li button').on('click', function (e) {
          e.stopPropagation();
        }); //Show slider when modal open

        $('.modal').on('shown.bs.modal', function () {
          var $slider = $(this).find('.bb-slider__slides').filter('.slick-initialized');

          if ($slider.length) {
            $slider[0].slick.setPosition();
            $slider.addClass('is-visible');
          }
        });
      });
    }
  }

  function _initCatalogItemSlider() {
    var $catalogItemSlider = $(document).find('.js-catalog-item-slider');

    if ($catalogItemSlider.length) {
      $catalogItemSlider.each(function () {
        var _this = $(this);

        var $slides = $(this).find('.bb-slider__slides');
        var $slide = $(this).find('.bb-slider__slide');
        var $sliderDots = $(this).find('.bb-slider__dots');
        $sliderDots.hide();

        _this.on('init', function (event, slick) {
          $sliderDots.prepend("<span class='bb-slider__pager bb-slider__pager--now'>1</span>" + '/');
          $sliderDots.append("<span class='bb-slider__pager bb-slider__pager--total'>" + slick.slideCount + '</span>');
        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;

          _this.find('.bb-slider__pager--now').html(i);
        });

        if ($slide.length > 1) {
          $sliderDots.show();
          $slides.not('.slick-initialized').slick({
            lazyLoad: 'ondemand',
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            dots: false,
            responsive: [{
              breakpoint: 481,
              settings: {
                arrows: false
              }
            }]
          });
        }
      });

      if ($(window).width() > 480) {
        $('.js-catalog-item').find('.bb-slider__slides').on('click', function (e) {
          if ($(this).hasClass('slick-initialized')) {
            e.stopPropagation();
            e.preventDefault();
          }
        });
      }
    }
  }

  function _initPreviewSlider() {
    var $previewSlider = $('.js-card-slider');

    if ($previewSlider.length) {
      $previewSlider.each(function () {
        var _this = $(this);

        var $slides = _this.find('.bb-slider__slides');

        var $sliderDots = $(this).find('.bb-slider__dots').hide();
        var settings = {
          nextArrow: '.bb-slider__arrow--next',
          prevArrow: '.bb-slider__arrow--prev',
          speed: 400,
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          lazyLoad: 'ondemand',
          responsive: [{
            breakpoint: 1201,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        };

        if ($(window).width() <= 480) {
          $sliderDots.show();

          _this.on('init', function (event, slick) {
            $sliderDots.prepend("<span class='bb-slider__pager bb-slider__pager--now'>1</span>" + '/');
            $sliderDots.append("<span class='bb-slider__pager bb-slider__pager--total'>" + slick.slideCount + '</span>');
          }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;

            _this.find('.bb-slider__pager--now').html(i);
          });
        }

        $slides.not('.slick-initialized').slick(settings);
      });
    }
  }

  return {
    init: _init,
    initSlick: _initSlick,
    initSwiperSlider: _initSwiperSlider,
    initPreviewSwiperSlider: _initPreviewSwiperSlider,
    initPreviewSlider: _initPreviewSlider,
    initTriumphSlider: _initTriumphSlider,
    initCatalogItemSlider: _initCatalogItemSlider
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "F9oNhdPK":
/*!*****************************************************!*\
  !*** ./resources/libs/calendar/locale/locale_ru.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
@license
dhtmlxScheduler v.5.0.0 Stardard

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
scheduler.locale = {
  date: {
    month_full: ["Январь", "Февраль", "Март", "Апрель", "Maй", "Июнь", "Июль", "Август", "Сентябрь", "Oктябрь", "Ноябрь", "Декабрь"],
    month_short: ["Янв", "Фев", "Maр", "Aпр", "Maй", "Июн", "Июл", "Aвг", "Сен", "Окт", "Ноя", "Дек"],
    day_full: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    day_short: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
  },
  labels: {
    dhx_cal_today_button: "Сегодня",
    day_tab: "День",
    week_tab: "Неделя",
    month_tab: "Месяц",
    new_event: "Новое событие",
    icon_save: "Сохранить",
    icon_cancel: "Отменить",
    icon_details: "Детали",
    icon_edit: "Изменить",
    icon_delete: "Удалить",
    confirm_closing: "",
    confirm_deleting: "Событие будет удалено безвозвратно, продолжить?",
    section_description: "Описание",
    section_time: "Период времени",
    full_day: "Весь день",
    confirm_recurring: "Вы хотите изменить всю серию повторяющихся событий?",
    section_recurring: "Повторение",
    button_recurring: "Отключено",
    button_recurring_open: "Включено",
    button_edit_series: "Редактировать серию",
    button_edit_occurrence: "Редактировать экземпляр",
    agenda_tab: "Список",
    date: "Дата",
    description: "Описание",
    year_tab: "Год",
    week_agenda_tab: "Список",
    grid_tab: "Таблица",
    drag_to_create: "Drag to create",
    drag_to_move: "Drag to move",
    message_ok: "OK",
    message_cancel: "Cancel",
    next: "Next",
    prev: "Previous",
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    minute: "Minute"
  }
};

/***/ }),

/***/ "I6OyOeXw":
/*!******************************************************!*\
  !*** ./resources/js/_frontend/components/AddForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddForm; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var AddForm =
/*#__PURE__*/
function () {
  function AddForm(args) {
    _classCallCheck(this, AddForm);

    this.selector = args.selector;
    this.forms = document.querySelectorAll('.' + this.selector);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _createClass(AddForm, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < this.forms.length; i++) {
        this._setProps(this.forms[i]);
      }

      this._removeEventListener();

      this._addEventListener(); // this.initSorting();

    }
  }, {
    key: "_addEventListener",
    value: function _addEventListener() {
      document.addEventListener('submit', this._onSubmit);
    }
  }, {
    key: "_removeEventListener",
    value: function _removeEventListener() {
      document.removeEventListener('submit', this._onSubmit);
    } //Обработчик события на Submit

  }, {
    key: "_onSubmit",
    value: function _onSubmit(e) {
      var target = e.target;

      if (target.classList.contains(this.selector)) {
        this._setValue(target);
      }

      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: "_setValue",
    value: function _setValue(element) {
      var input = element.querySelector('input');
      var value = input.value;

      if (value) {
        this._addProp(element, value);

        input.value = '';
      }
    }
  }, {
    key: "_setProps",
    value: function _setProps(element) {
      var checked = element.previousElementSibling.getAttribute('data-checked');

      if (checked != null) {
        var arrayProps = checked.split(', ');

        for (var t = 0; t < arrayProps.length; t++) {
          this._addProp(element, arrayProps[t]);
        }
      }
    }
  }, {
    key: "_addProp",
    value: function _addProp(element, value) {
      var props = element.previousElementSibling;
      var checked = props.getAttribute('data-checked');
      var child = props.childNodes;
      var arrayProps;

      if (checked == null) {
        arrayProps = [];
      } else {
        arrayProps = props.getAttribute('data-checked').split(', ');
      }

      if (child.length === arrayProps.length) {
        var index = arrayProps.indexOf(value);

        if (index == -1) {
          arrayProps.push(value);
        }

        props.setAttribute('data-checked', arrayProps.join(', '));
        props.appendChild(this._createProp(value, props));
      } else {
        var _arrayProps = [];

        var _index = _arrayProps.indexOf(value);

        if (_index == -1) {
          _arrayProps.push(value);
        }

        props.setAttribute('data-checked', _arrayProps.join(', '));
        props.appendChild(this._createProp(value, props));
      }
    }
  }, {
    key: "_deleteProp",
    value: function _deleteProp(element, value) {
      var arrayProps = element.getAttribute('data-checked').split(', ');
      var index = arrayProps.indexOf(value);

      if (index != -1) {
        arrayProps.splice(index, 1);
      }

      element.setAttribute('data-checked', arrayProps.join(', '));
    }
  }, {
    key: "_createProp",
    value: function _createProp(value, element) {
      var _this = this;

      var div = document.createElement('div');
      var spanValue = document.createElement('span');
      var btnReset = document.createElement('button');
      var closeIcon = "<span><svg class=\"icon icon-close--bold\">\n                            <use xlink:href=\"files/sprite.svg#close--bold\"></use>\n                        </svg></span>";
      var closeDrag = "<span class=\"add-form__drag-icon icon--drag\" title=\"\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C\"><svg class=\"icon icon-hamburger\" role=\"img\">\n                            <use xlink:href=\"files/sprite.svg#hamburger\"></use>\n                        </svg></span>";
      btnReset.classList.add('btn-reset');
      btnReset.innerHTML = closeIcon;
      spanValue.classList.add('add-form__value');
      spanValue.innerText = value;
      div.classList.add('add-form__prop');
      div.insertAdjacentHTML('afterbegin', closeDrag);
      div.setAttribute('data-copy-remove', '');
      div.appendChild(spanValue);
      div.appendChild(btnReset);
      btnReset.addEventListener('click', function () {
        _this._deleteProp(element, value);

        element.removeChild(btnReset.parentElement);
      });
      return div;
    } //Инициализация сортировки свойств

  }, {
    key: "initSorting",
    value: function initSorting() {
      var sortableList = document.querySelectorAll('.js-sortable-add-form-props');

      if (sortableList) {
        for (var i = 0; i < sortableList.length; i++) {
          Sortable.create(sortableList[i], {
            handle: '.icon--drag',
            animation: 150
          });
        }
      }
    }
  }]);

  return AddForm;
}();



/***/ }),

/***/ "JyK8v35W":
/*!**********************************************************!*\
  !*** ./resources/js/_frontend/components/VideoLoader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoLoader; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/* <div class="video__wrap">
<div class="video">
    <a class="video__link" href="https://youtu.be/vU3dN_qcLLo">
        <picture>
            <source
                srcset="https://i.ytimg.com/vi_webp/vU3dN_qcLLo/maxresdefault.webp"
                type="image/webp"
            />            <img
                class="video__media"
                src="https://i.ytimg.com/vi/vU3dN_qcLLo/maxresdefault.jpg"
                alt="Ведущая Татьяна Скоцкая"
            />
        </picture>
    </a>
    <button
        class="video__button"
        type="button"
        aria-label="Запустить видео"
    >
        <svg width="68" height="48" viewBox="0 0 68 48">
            <path
                class="video__button-shape"
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            ></path>
            <path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
        </svg>
    </button>
</div>
</div> */
// .video {
//     position: relative;
//     width: 100%;
//     height: 0;
//     padding-bottom: 56.25%;
//     background-color: #000000;
//     &--enabled {
//         cursor: pointer;
//         & .video__button {
//             display: block;
//         }
//     }
//     &__link {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//     }
//     &__media {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         border: none;
//     }
//     &__button {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         z-index: 1;
//         display: none;
//         padding: 0;
//         width: 68px;
//         height: 48px;
//         border: none;
//         background-color: transparent;
//         transform: translate(-50%, -50%);
//         cursor: pointer;
//         &:focus {
//             outline: none;
//         }
//     }
//     &__button-shape {
//         fill: #212121;
//         fill-opacity: 0.8;
//     }
//     &__button-icon {
//         fill: #ffffff;
//     }
//     &__wrap {
//         margin: 100px auto;
//         width: 50vw;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         @include xs-block {
//             width: 90vw;
//         }
//     }
//     .video:hover .video__button-shape,
//     .video__button:focus .video__button-shape {
//         fill: #ff0000;
//         fill-opacity: 1;
//     }
// }


var VideoLoader =
/*#__PURE__*/
function () {
  function VideoLoader() {
    _classCallCheck(this, VideoLoader);

    this.videos = document.querySelectorAll('.video');
  }

  _createClass(VideoLoader, [{
    key: "init",
    value: function init() {
      if (this.videos.length) this.findVideos();
    }
  }, {
    key: "findVideos",
    value: function findVideos() {
      for (var i = 0; i < this.videos.length; i++) {
        this.setupVideo(this.videos[i]);
      }
    }
  }, {
    key: "setupVideo",
    value: function setupVideo(video) {
      var _this = this;

      var link = video.querySelector('.video__link');
      var media = video.querySelector('.video__media');
      var button = video.querySelector('.video__button');
      var id = this.parseMediaURL(media);
      video.addEventListener('click', function () {
        var iframe = _this.createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
      });
      link.removeAttribute('href');
      video.classList.add('video--enabled');
    }
  }, {
    key: "parseMediaURL",
    value: function parseMediaURL(media) {
      var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
      var url = media.src;
      var match = url.match(regexp);
      return match[1];
    }
  }, {
    key: "createIframe",
    value: function createIframe(id) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', this.generateURL(id));
      iframe.classList.add('video__media');
      return iframe;
    }
  }, {
    key: "generateURL",
    value: function generateURL(id) {
      var query = '?rel=0&showinfo=0&autoplay=1';
      return 'https://www.youtube.com/embed/' + id + query;
    }
  }]);

  return VideoLoader;
}();



/***/ }),

/***/ "KAFnV68P":
/*!**********************************************!*\
  !*** ./resources/js/_frontend/core/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, __webpack_provided_window_dot_jQuery) {/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "Mj6VC0+x");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs */ "urRORpeV");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sortablejs */ "qkdHQ+9s");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foHLjP/");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clipboard_dist_clipboard_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard/dist/clipboard.min */ "aYGkcTBr");
/* harmony import */ var clipboard_dist_clipboard_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard_dist_clipboard_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar */ "pvl8Toe/");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flatpickr */ "zwY0o+e6");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flatpickr/dist/l10n/ru */ "b/zg/m42");
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_7__);
/**
 * Core (патерн модуль)
 * Создаем глобальный обьект BB в контексте window для того чтобы был доступ к методам из вне
 * Define function - для безопасного добавления пространства имен к глобальному обьекту BB
 * Определяем пространства емен Core с помощью функции define
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */







 //Save plugins in global

__webpack_provided_window_dot_jQuery = $;
window.$ = $;
window.NProgress = nprogress__WEBPACK_IMPORTED_MODULE_0__;
window.noUiSlider = nouislider__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Sortable = sortablejs__WEBPACK_IMPORTED_MODULE_2__["default"];
window.Cropper = cropperjs__WEBPACK_IMPORTED_MODULE_1___default.a;
window.BB = BB || {};
var BB = window.BB;

BB.define = function (namespace) {
  var parts = namespace.split('.'),
      parent = BB,
      i; //Убрать  начальный префикс если это являетсся глобальной переменной

  if (parts[0] === 'BB') {
    parts = parts.slice(1);
  } //Если в глобальном объекте  нет  свойства  - создать  его.


  for (var _i = 0; _i < parts.length; _i++) {
    if (typeof parent[parts[_i]] === 'undefined') {
      parent[parts[_i]] = {};
    }

    parent = parent[parts[_i]];
  }

  return parent;
};

BB.define('Core');
/* harmony default export */ __webpack_exports__["default"] = (BB.Core = function () {
  function _init() {
    _removePreloader();

    _checkViewPort();

    _addEventListeners();

    _removeElements();

    _changeModalBackdropZindex();

    _initMobileSearch();

    _initListToggle();

    _initCopyText();

    _initTogglePhone();

    _initCitySelect(); // _initOffsets();
    // Проверка на touch устройство
    // if ("ontouchstart" in document.documentElement) {
    //     alert("It a touch screen device.");
    // } else {
    //     alert("Others devices");
    // }
    // После полной загрузки страницы регистрируем service worker
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', _registerServiceWorker);
    // }
    // if (NODE_ENV == 'development') {
    //     console.log('--- INIT CORE');
    // }

  }

  function _registerServiceWorker() {
    // файл подключается из корня сайта, а значит
    // сможет обрабатывать запросы на все подразделы
    navigator.serviceWorker.register('/service-worker.js').then(function (reg) {
      return console.log('SW registered!', reg);
    }).catch(function (err) {
      return console.error('SW has error', err);
    });
  }

  function _addEventListeners() {
    window.addEventListener('resize', _checkViewPort);
  }

  function _checkViewPort() {
    if (window.innerWidth < 480) {
      window.isMobile = true;
    } else {
      window.isMobile = false;
    }
  }

  function _removePreloader() {
    setTimeout(function () {
      document.querySelector('body').classList.remove('loading', 'is-loading', 'loading-animation');
      document.querySelectorAll('._loading').forEach(function (item) {
        item.classList.remove('_loading');
      });
    }, 500);
  }

  function _removeElements() {
    //SimpleBar https://github.com/Grsmto/simplebar
    if (window.innerWidth < 768) {
      var scrollBars = document.querySelectorAll('[data-simplebar]');
      setTimeout(function () {
        scrollBars.forEach(function (item) {
          item.removeAttribute('data-simplebar');
        });
      }, 500);
    }
  } // function _initOffsets() {
  //     if ($('.header').hasClass('header--fixed')) {
  //         const headerHeight = $('.header').outerHeight(true);
  //         $('body').css('margin-top', headerHeight);
  //     }
  // }
  //Mobile Search Btn open/close


  function _initMobileSearch() {
    var searchBtn = document.querySelectorAll('.js-mobile-search-btn');
    searchBtn.forEach(function (item) {
      item.removeEventListener('click', _toggleSearch);
      item.addEventListener('click', _toggleSearch);
    });

    function _toggleSearch() {
      var wrapper = document.querySelector('.wrapper');

      if (wrapper.classList.contains('mobile-search--open')) {
        wrapper.classList.remove('mobile-search--open');
        return false;
      } else {
        wrapper.classList.add('mobile-search--open');
        return false;
      }
    }
  }

  function _initListToggle() {
    var $list = $('.js-list');
    var $checkbox = $list.find('.js-bb-checkbox');
    var $workList = $list.find('.js-list-toggle');

    if ($list.length) {
      if ($list.attr('data-reverse') === 'true') {
        if (!$checkbox.hasClass('is-checked')) {
          $workList.hide();
        }

        $checkbox.on('click', function () {
          if ($checkbox.hasClass('is-checked')) {
            $workList.show();
          } else {
            $workList.hide();
          }
        });
      } else {
        $checkbox.on('click', function () {
          if ($checkbox.hasClass('is-checked')) {
            $workList.hide();
          } else {
            $workList.show();
          }
        });
      }
    }
  } //Copy text click link


  function _initCopyText() {
    if (document.querySelector('.js-user-link')) {
      var cb = new clipboard_dist_clipboard_min__WEBPACK_IMPORTED_MODULE_4___default.a('.js-user-link'); //if has input then copy input value in data attr
      // Base.Components.Input.initInputSearch();
    }
  } //Show phone number


  function _initTogglePhone() {
    $('.js-user-phone').each(function () {
      $(this).attr('href', 'javascript:void(0);').text($(this).data('phone-hiden'));
    });
    $(document).on('click', '.js-user-phone--show', function () {
      var userPhone = $(this).parent().find('.js-user-phone');
      var phone = userPhone.data('phone');
      userPhone.removeAttr('style').attr('href', 'tel:' + phone).text(phone);
      $(this).css('display', 'none');
    });
  }

  function _initPhoneConfirmTimer() {
    var $timer = $(document).find('.js-timer');

    if ($timer.length) {
      $timer.each(function () {
        var $timerBtnRepeat = $(this).find('.js-timer-bnt--repeat');
        var $timerBtnSkip = $(this).find('.js-timer-bnt--skip');
        var $text = $(this).find('.js-timer-text');
        var $time = $(this).find('[data-timer-time]');

        var timer = function timer() {
          setTimeout(function () {
            var time = $time.data('timer-time');
            $time.text(time);
            var int = setInterval(function () {
              time--;

              if (time == -1) {
                clearInterval(int);
                $text.css('display', 'none');
                $timerBtnRepeat.removeAttr('style');
                $timerBtnSkip.removeAttr('style');
              } else {
                $time.text(time);
              }
            }, 1000);
            $timerBtnRepeat.on('click', function (e) {
              clearInterval(int);
              timer();
            });
          });
        };

        timer();
      });
      $('.js-timer-bnt--repeat').on('click', function (e) {
        $(this).css('display', 'none').closest('.js-timer').find('.js-timer-text').removeAttr('style');
        phoneConfirmTimer();
      });
      $('.js-input-focus:last').on('keyup', function () {
        $(this).blur();
      });
    }
  } //City select


  function _initCitySelect() {
    var $changeCity = $('.js-city-select');
    var $changeCityTitle = $changeCity.find('.city-select__title span');
    var $input = $changeCity.find('input');
    $input.on('click focus', function (e) {
      e.stopPropagation();
    });
    $changeCity.find('.city-select__item').on('click', function () {
      $changeCityTitle.text($(this).text());
    });
  }

  function _initCheckServiceItem() {
    var $beautyLink = $(document).find('#beautylink');
    var $cardServicesItem = $(document).find('.js-card-services-item');
    var ACTIVE_CLASS = 'is-booked';
    $cardServicesItem.on('click', function (e) {
      var conditions = '.card-services-item__middle, .card-services-item__info-block, .card-services-item__bottom';

      if ($(e.target).closest(conditions).length) {
        return;
      } else {
        _checkItem.call($(this));
      }
    });

    function _checkBooked() {
      if ($beautyLink.length) {
        if ($cardServicesItem.hasClass(ACTIVE_CLASS)) {
          $beautyLink.addClass(ACTIVE_CLASS);
        } else {
          $beautyLink.removeClass(ACTIVE_CLASS);
        }
      }
    }

    _checkBooked();

    function _checkItem() {
      // let add = $(this).find('.card-services-item__action_add');
      var done = $(this).find('.card-services-item__action_done');
      var del = $(this).find('.card-services-item__action_del');

      if ($(this).hasClass('is-booked')) {
        $(this).removeClass('is-booked');
        done.removeAttr('style'); // add.removeAttr('style');
      } else {
        $(this).addClass('is-booked');
        done.css('display', 'flex'); // add.css('display', 'none');
      }

      _checkBooked();
    }
  }

  function _changeModalBackdropZindex() {
    $(document).delegate("[data-toggle='modal']", 'click', function () {
      var modalBackdrop = $(document).find('.modal-backdrop');
      if (modalBackdrop.length <= 3) for (var i = 0; i < modalBackdrop.length; i++) {
        var index = parseInt($(modalBackdrop[i]).css('z-index'));
        index += parseInt(i + 1);
        $(modalBackdrop[i + 1]).css('z-index', index);
      }
    });
  }

  return {
    init: _init,
    removePreloader: _removePreloader,
    initCopyText: _initCopyText,
    initListToggle: _initListToggle,
    initCheckServiceItem: _initCheckServiceItem,
    initPhoneConfirmTimer: _initPhoneConfirmTimer,
    changeModalBackdropZindex: _changeModalBackdropZindex
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ"), __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "Kdr+IcO5":
/*!**********************************************!*\
  !*** ./resources/js/_frontend/core/utils.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Utils.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Utils');
/* harmony default export */ __webpack_exports__["default"] = (BB.Utils = function () {
  function _init() {
    window.addEventListener('load', function () {
      _detectBrowserType();

      _removeHoverEffect();

      _toggleVisibleText();

      _initLazyLoadImage();

      _cloneBlockShow();

      _toggleVisibleOnScroll();
    }); // if (NODE_ENV == 'development') {
    //     console.log('--- INIT UTILS');
    // }
  } //Проверка типа браузера


  function _detectBrowserType() {
    window.addEventListener('load', function () {
      var html = document.querySelector('html');
      var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      var isChrome = !!window.chrome && !isOpera;
      var isExplorer = typeof document !== 'undefined' && !!document.documentMode && !isEdge;
      var isFirefox = typeof window.InstallTrigger !== 'undefined';
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var userAgent = navigator.userAgent || navigator.vendor || window.opera; // if (/windows phone/i.test(userAgent)) {
      //     html.classList.add('is-windows');
      // }

      if (/android/i.test(userAgent)) {
        html.classList.add('is-android');
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        html.classList.add('is-ios');
      }

      if (isChrome) {
        html.classList.add('is-chrome');
      } else if (isSafari) {
        html.classList.add('is-safari');
      } else if (isFirefox) {
        html.classList.add('is-firefox');
      }
    });
  } //Проверка скорости соединения


  function _testSlowConnection() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    var slowSpeed;

    if (typeof connection !== 'undefined' && connection.effectiveType === '3g') {
      slowSpeed = true;
    } else {
      slowSpeed = false;
      var loadTime = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000;

      if (loadTime > 4) {
        slowSpeed = true;
      }
    }

    return slowSpeed;
  }
  /**
   * @param  {HTMLElement} element
   * @param  {Object} settings
   * render: true - if u need render img without inresectionRatio
   */


  function _initLazyLoadImage(element, settings) {
    var images;
    var s = settings || {};

    if (element !== undefined) {
      if (typeof element === 'string') {
        images = document.querySelector(element).querySelectorAll('img');
      } else {
        images = element.querySelectorAll('img');
      }
    } else {
      images = document.querySelectorAll('img');
    }

    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    function __handleImg(myImg, observer) {
      myImg.forEach(function (myImgSingle) {
        if (myImgSingle.intersectionRatio > 0 || s.render) {
          __loadImage(myImgSingle.target);
        }
      });
    }

    function __loadImage(image) {
      var src = image.getAttribute('src');
      var dataSrc = image.getAttribute('data-src');

      if (dataSrc && src !== dataSrc) {
        image.src = dataSrc;
      }
    }

    var observer = new IntersectionObserver(__handleImg, options);
    images.forEach(function (img) {
      observer.observe(img);
    });
  }

  function _slideUp() {
    $(this).closest('[data-container]').slideUp();
  }

  function _slideToggle() {
    var OPEN_CLASS = 'is-open';
    var $container = $(this).closest('[data-container]');
    var $content = $container.find('[data-content]');

    if ($(this).hasClass('no-slide') || $(this).closest('.no-slide').length) {
      return;
    }

    if (!$container.hasClass(OPEN_CLASS)) {
      $content.slideDown();
      $container.addClass(OPEN_CLASS);
    } else {
      $content.slideUp();
      $container.removeClass(OPEN_CLASS);
    }
  }

  function _copyBox() {
    $(this).closest('[data-copy-box]').clone().insertAfter($(this));
  } //Убираем класс .has-hover после того как уберем мышь


  function _removeHoverEffect() {
    var $blockWithHover = $(document).find('.has-hover');
    $blockWithHover.on('mouseleave', function (e) {
      $(this).removeClass('has-hover');
    });
  }

  function _animateWidth() {
    var _this2 = this;

    var width = $(this).data('width');
    setTimeout(function () {
      $(_this2).animate({
        width: width
      }, 600);
    }, 300);
  } //Функция скрывающая или показывающая один блок пока второй вне зоны видимости


  function _toggleVisibleOnScroll() {
    var VISIBLE_CLASS = 'is-visible';
    var relativeBlock = document.querySelectorAll('[data-block-scroll-relative]');
    relativeBlock.forEach(function (block) {
      var nameOfRelativeBlcok = block.getAttribute('data-block-scroll-relative');
      var fixedBlock = document.querySelector("[data-block-scroll-fixed=\"".concat(nameOfRelativeBlcok, "\"]"));
      var position = block.getBoundingClientRect();
      window.addEventListener('scroll', function () {
        var scroll = this.pageYOffset;
        position = block.getBoundingClientRect();

        _toggleVisible(fixedBlock, scroll, position.bottom * 7);
      });

      _toggleVisible(fixedBlock, 0, position.bottom);
    });
    /**
     * @param  {HTMLElement} el
     * @param  {Number} scroll
     * @param  {Number} pos
     */

    function _toggleVisible(el, scroll, pos) {
      if (scroll > pos) {
        el.classList.add(VISIBLE_CLASS);
        if ($(el).closest('.card-top-line').length) $(el).closest('.card-top-line').css('border-bottom', '1px solid #eee'); //ничего умнее не придумал
      } else {
        el.classList.remove(VISIBLE_CLASS);
        if ($(el).closest('.card-top-line').length) $(el).closest('.card-top-line').css('border-bottom', 'none'); //ничего умнее не придумал
      }
    }
  } //Функция скрывающая или показывающая один блок пока второй вне зоны видимости


  function _cloneBlockShow() {
    var $fixBlock = $('.js-fixed-block');
    var $relBlock = $('.js-relative-block');

    if ($fixBlock.length && $relBlock.length) {
      var fixBlockHeight = $fixBlock.outerHeight(true);
      var relBlockHeight = $relBlock.outerHeight(true);
      var relBlockOffsetTop = $relBlock.offset().top;
      var wHeight = $(window).height();

      if ($fixBlock.hasClass('card-top-line')) {
        $(window).on('scroll', function () {
          var scroll = $(this).scrollTop();

          if (scroll > relBlockHeight + relBlockOffsetTop) {
            $fixBlock.addClass('is-visible');
          } else {
            $fixBlock.removeClass('is-visible');
          }
        });
      } else {
        $(window).on('scroll', function () {
          var scroll = $(this).scrollTop();
          var calcScroll = scroll + wHeight - fixBlockHeight;

          if (calcScroll <= relBlockOffsetTop) {
            $fixBlock.removeClass('is-hide');
          } else {
            $fixBlock.addClass('is-hide');
          }
        });
      }
    }
  }

  function _setFixedBlock(element) {
    var height = element.outerHeight(true);
    var elementOffsetTop = element.offset().top;
    var $clone = $('<div class="clone">');
    $clone.insertAfter(element).css('height', height).hide(); //for fixed top block with width 50px

    if ($(window).width() <= 768) {
      elementOffsetTop = element.offset().top - 50;
    }

    $(window).scroll(function () {
      var scroll = $(this).scrollTop();

      if (scroll >= elementOffsetTop) {
        element.addClass('is-fixed');
        $clone.show();
      } else if (scroll < elementOffsetTop) {
        element.removeClass('is-fixed');
        $clone.hide();
      }
    });
  }

  function _toggleSuccess(block, successClass) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;
    /**
     * @param block - .string with dot
     * @param  successClass - string without dot
     * You need use call when u want use this function for save context
     */

    var $block = $(this).closest(block);
    setTimeout(function () {
      if (!$block.hasClass(successClass)) {
        $block.addClass(successClass);
      } else {
        $block.removeClass(successClass);
      }
    }, delay);
  }

  function _toggleClassAtBlock(block, cl) {
    $(block + '--open').on('click', function () {
      $(block).addClass(cl);
    });
    $(block + '--close').on('click', function () {
      $(block).removeClass(cl);
    });
  }

  function _toggleClassAtBlockClickOutside(block, cl) {
    $(block).on('click', function () {
      $(this).toggleClass(cl);
    });
    $(document).on('click touchstart', function (e) {
      if ($(e.target).closest(block).length) return;
      $(block).removeClass(cl);
      e.stopPropagation();
    });
  } //Toggle show/visible block text on click button


  function _toggleVisibleText() {
    var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 145;
    var $textContainer = $(document).find('[data-text-container]');
    var OPEN_CLASS = 'is-open';
    $textContainer.each(function () {
      var height = height || $(this).data('text-container');

      if (!$(this).hasClass(OPEN_CLASS)) {
        $(this).css({
          height: height
        });
      }
    });
    $(document).on('click', '[data-text-container-btn]', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $textContainer = $(this).parent('[data-text-container]');
      var height = height || $textContainer.data('text-container');

      if (!$textContainer.hasClass(OPEN_CLASS)) {
        $textContainer.animate({
          height: '100%'
        }, 0);
        var fullHeight = $textContainer.height();
        $textContainer.animate({
          height: height
        }, 1).animate({
          height: fullHeight
        }).addClass(OPEN_CLASS);
        $(this).attr('title', 'Скрыть');
      } else {
        $textContainer.animate({
          height: height
        }).removeClass(OPEN_CLASS);
        $(this).attr('title', 'Показать полностью');
      }
    });
  }

  function _setEqualTableCellHeight() {
    var $table = $(document).find('.js-graph-table');

    if ($table.length) {
      var _setHeight = function _setHeight() {
        $table.each(function () {
          var $tableWorker = $(this).find('.graph-table__static');
          var $tableWorkerTr = $tableWorker.find('tr').not(':first');
          var $tableHours = $(this).find('.graph-table__move');
          var $tableHoursTr = $tableHours.find('tr').not(':first');
          $tableHoursTr.each(function (i) {
            var currentHoursItem = $(this).closest('.js-graph-table').find('.graph-table__static').find('tr').not(':first').eq(i);

            _maxHeight($(this), currentHoursItem);
          });
          $tableWorkerTr.each(function (i) {
            var currentWorkerItem = $(this).closest('.js-graph-table').find('.graph-table__move').find('tr').not(':first').eq(i);

            _maxHeight($(this), currentWorkerItem);
          });

          function _maxHeight(_this, elem) {
            var maxHeight = 0;

            var currentHeight = _this.outerHeight();

            if (currentHeight > maxHeight) maxHeight = currentHeight;
            if (currentHeight > elem.outerHeight()) elem.css('height', maxHeight);
          }
        });
      };

      setTimeout(function () {
        _setHeight();
      }, 1500);
      $(window).on('resize', function () {
        _setHeight();
      });
    }
  }

  var _ArrayActiveBlock = []; // функция блокировки/разблокировки документа в зависимости от открытых всмлывающих окон

  function _documentBlockControl(status, dataTarget, dataBtn) {
    var counter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var callback = arguments.length > 4 ? arguments[4] : undefined;
    var wrapper = document.querySelector('.wrapper');
    var body = document.body;
    var html = document.documentElement;
    var targetBlock, dataOldBlock, oldBlock;

    if (!dataBtn) {} // status - параметр содержащий boolean значение true/false
    // нужен для определения открывается ли новый блок или закрывается старый
    // true - открыт новый блок
    // false - закрыт старый
    // Уникальный id  - Параметр содержащий в себе
    // атрибут со значением для открытия окна
    // нужен для возврата фокуса обратно на элемент после закрытия всплывающего окна
    // Изменения счетчитка открытых модалок


    if (status === 'open') {
      if (BB.Utils.ArrayActiveBlock.length) {
        dataOldBlock = BB.Utils.ArrayActiveBlock[BB.Utils.ArrayActiveBlock.length - 1].block;
        oldBlock = document.querySelector("".concat(dataOldBlock));
        oldBlock.setAttribute('inert', '');
        oldBlock.setAttribute('tabindex', '-1'); // oldBlock.classList.remove('is-open');
      }

      targetBlock = document.querySelector("".concat(dataTarget));

      if (dataBtn) {
        dataBtn.setAttribute('inert', '');
        dataBtn.setAttribute('tabindex', '-1');
      }

      targetBlock.removeAttribute('inert');
      targetBlock.removeAttribute('tabindex');
      targetBlock.classList.add('is-open');
      BB.Utils.ArrayActiveBlock.push({
        block: dataTarget,
        btn: dataBtn
      });
    } else {
      if (status === 'close') {
        for (var i = 0; i < counter; i++) {
          var ArrayLength = BB.Utils.ArrayActiveBlock.length;
          dataTarget = BB.Utils.ArrayActiveBlock[ArrayLength - 1].block;
          dataBtn = BB.Utils.ArrayActiveBlock[ArrayLength - 1].btn;
          targetBlock = document.querySelector("".concat(dataTarget));
          targetBlock.setAttribute('inert', '');
          targetBlock.setAttribute('tabindex', '-1');
          targetBlock.classList.remove('is-open');
          targetBlock.classList.remove('is-close');

          if (dataBtn) {
            dataBtn.removeAttribute('inert');
            dataBtn.removeAttribute('tabindex');
          }

          if (ArrayLength > 1) {
            dataOldBlock = BB.Utils.ArrayActiveBlock[ArrayLength - 2].block;
            oldBlock = document.querySelector("".concat(dataOldBlock));
            oldBlock.removeAttribute('inert');
            oldBlock.removeAttribute('tabindex');
            oldBlock.classList.add('is-open');
          }

          BB.Utils.ArrayActiveBlock.length = ArrayLength - 1;
        }
      } else {
        return false;
      }
    }

    if (BB.Utils.ArrayActiveBlock.length) {
      wrapper.setAttribute('inert', '');
      wrapper.setAttribute('tabindex', '-1');
      body.setAttribute('style', 'overflow-y: hidden; position: relative;');
      html.setAttribute('style', 'overflow-y: hidden; position: relative;');
    } else {
      wrapper.removeAttribute('inert');
      wrapper.removeAttribute('tabindex');
      body.removeAttribute('style');
      html.removeAttribute('style');
      document.querySelectorAll('.overlay').forEach(function (item) {
        item.classList.remove('is-visible');
      });
    }

    if (true) {
      console.log(BB.Utils.ArrayActiveBlock);
      console.info("\u0421\u0435\u0439\u0447\u0430\u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u043E ".concat(BB.Utils.ArrayActiveBlock.length, " \u043E\u043A\u043E\u043D"));
    }

    if (typeof callback == 'function') callback();
  } // функция замены src картинки если она не загрузилась
  // function _testImgLoad() {
  //     document.querySelectorAll('img').forEach(item => {
  //         item.removeEventListener('error', swapImg);
  //         item.addEventListener('error', swapImg);
  //         function swapImg(e) {
  //             e.target.setAttribute('data-test', '');
  //             e.target.setAttribute('src', '/client/files/assets/empty.png');
  //         }
  //     });
  // }
  // function _bootstrapModalControl() {
  //     $(document).on('show.bs.modal', '.modal', function(e) {
  //         _documentBlockControl('open', `#${e.target.id}`, null)
  //     })
  //     $(document).on('hide.bs.modal', '.modal', function(e) {
  //         _documentBlockControl('close')
  //     })
  // }


  return {
    init: _init,
    initLazyLoadImage: _initLazyLoadImage,
    slideUp: _slideUp,
    slideToggle: _slideToggle,
    copyBox: _copyBox,
    toggleVisibleOnScroll: _toggleVisibleOnScroll,
    cloneBlockShow: _cloneBlockShow,
    removeHoverEffect: _removeHoverEffect,
    animateWidth: _animateWidth,
    toggleClassAtBlock: _toggleClassAtBlock,
    toggleSuccess: _toggleSuccess,
    toggleClassAtBlockClickOutside: _toggleClassAtBlockClickOutside,
    testSlowConnection: _testSlowConnection,
    toggleVisibleText: _toggleVisibleText,
    setEqualTableCellHeight: _setEqualTableCellHeight,
    documentBlockControl: _documentBlockControl,
    ArrayActiveBlock: _ArrayActiveBlock // testImgLoad: _testImgLoad,
    // bootstrapModalControl: _bootstrapModalControl,

  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "LY33D3Ob":
/*!*******************************************************!*\
  !*** ./resources/js/_frontend/components/BoxColor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxColor; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/* html example box color
    <div data-color="#a5dff8"></div>
*/


var BoxColor =
/*#__PURE__*/
function () {
  function BoxColor() {
    _classCallCheck(this, BoxColor);

    this.element = $('[data-color]');
    this.color;
    this.init();
  }

  _createClass(BoxColor, [{
    key: "init",
    value: function init() {
      this.element.each(function () {
        var _this = $(this);

        var color = $(this).attr('data-color');
        var colorItem = $(this).find('[data-color-item]'); //Создаем блок с цветом категории

        var $colorBlock = $('<span>').addClass('color-line').css('background-color', color);

        if (colorItem.length) {
          if (!colorItem.find('.color-line').length) {
            $colorBlock.prependTo(colorItem);
          }
        } else {
          if (!colorItem.find('.color-line').length) {
            $colorBlock.prependTo(_this);
          }
        }
      });
    }
  }]);

  return BoxColor;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "NZ1UjQKk":
/*!***********************************!*\
  !*** ./resources/js/functions.js ***!
  \***********************************/
/*! exports provided: add, addBidsToContent, addCategory, addClientsToContent, addClientsToContentBidsNew, addFixedNoTouch, addInstagramPhoto, addRequestItemScroll, ajaxAddBidsToContent, ajaxAddContentClient, ajaxAddContentClientBidNew, ajaxAddContentClientMobile, ajaxAddPhotoInstagram, ajaxCrmInsertContent, ajaxProgress, attachOrder, bidsForClientsBlock, bidClickOnCalendarDay, bodyFixed, buttonOff, buttonOn, changeActiveMenu, changeParameterActive, changeUrl, changeBlockAddNew, checkNumberMasters, checkTime, checkVisibilityCrm, checkVisibilityCrmBidNew, checkVisibilityCrmClientBids, checkVisibilityCrmMobile, checkVisibilityCrmMobileEl, checkVisibilityCrmMobilePhoto, closeAndRemoveBlock, clearClients, clearInput, clearImgAtCropper, closeOverlay, closeSlideBlock, countBidsForLeftMenu, createCustomService, crmBlockClose, crmBidsDragAndDrop, cropperCall, cropperReInit, cropParams, dayOfTheWeek, dataFormat, deleteCategory, disabledButton, disableCategory, emptyPopupBlock, enabledButton, geoMap, getDayBid, getRightWeekText, getWeekSchedule, hideErrorForField, ifJsSlideBlockThree, initMap, initCabinetMap, insertRoleType, instagramInvolvement, instagramFollowerDynamic, isEnglish, isInvalid, isNumber, maximumNumberOfSymbols, maxLenForInputEmail, maxLenForInputName, maxLenForInputServiceName, maxLenForInputUser, maxLenForPrice, maxLenForTextArea, mobileBidsCheckEmpty, mobileBidsEmpty, onlyNumberInput, openOverlay, parseInputText, phoneConfirmTimer, popupTriumph, remove, removeFixedNoTouch, removeMobileTopMenu, removeNavMenu, scheduleClickOnCalendarDay, scheduleGenerateCalendar, scrollAddContent, scrollToTop, selectBidNewDay, selectWeekDay, setPageTitle, showErrorForField, startTime, uniqueForm, uniqueFormPhone, updateAttrBidBlock, updateBidSum, updadeBidsOnDashboard, updateCountBids, updateCrmData, updateCrmImage, updateCustomService, updateDataBids, updateDataBid, updateDataSchedule, updateImage, updateMobileBidSum, updatePageTitle, updateService, updateStatusService, updateStatusCustomService, updateValBid, updateValSchedule, userUniqueFormPhone, validateBidsSaveMobile, validateEmail, validateInputPhone, massegesSwiper, calendarClickOnCalendarDay, replaceStudioMasterReqWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBidsToContent", function() { return addBidsToContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategory", function() { return addCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClientsToContent", function() { return addClientsToContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClientsToContentBidsNew", function() { return addClientsToContentBidsNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFixedNoTouch", function() { return addFixedNoTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstagramPhoto", function() { return addInstagramPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRequestItemScroll", function() { return addRequestItemScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxAddBidsToContent", function() { return ajaxAddBidsToContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxAddContentClient", function() { return ajaxAddContentClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxAddContentClientBidNew", function() { return ajaxAddContentClientBidNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxAddContentClientMobile", function() { return ajaxAddContentClientMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxAddPhotoInstagram", function() { return ajaxAddPhotoInstagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxCrmInsertContent", function() { return ajaxCrmInsertContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxProgress", function() { return ajaxProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachOrder", function() { return attachOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidsForClientsBlock", function() { return bidsForClientsBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidClickOnCalendarDay", function() { return bidClickOnCalendarDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyFixed", function() { return bodyFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonOff", function() { return buttonOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonOn", function() { return buttonOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeActiveMenu", function() { return changeActiveMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeParameterActive", function() { return changeParameterActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUrl", function() { return changeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBlockAddNew", function() { return changeBlockAddNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNumberMasters", function() { return checkNumberMasters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTime", function() { return checkTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkVisibilityCrm", function() { return checkVisibilityCrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkVisibilityCrmBidNew", function() { return checkVisibilityCrmBidNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkVisibilityCrmClientBids", function() { return checkVisibilityCrmClientBids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkVisibilityCrmMobile", function() { return checkVisibilityCrmMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkVisibilityCrmMobileEl", function() { return checkVisibilityCrmMobileEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkVisibilityCrmMobilePhoto", function() { return checkVisibilityCrmMobilePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAndRemoveBlock", function() { return closeAndRemoveBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearClients", function() { return clearClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInput", function() { return clearInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImgAtCropper", function() { return clearImgAtCropper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeOverlay", function() { return closeOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSlideBlock", function() { return closeSlideBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBidsForLeftMenu", function() { return countBidsForLeftMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomService", function() { return createCustomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crmBlockClose", function() { return crmBlockClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crmBidsDragAndDrop", function() { return crmBidsDragAndDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cropperCall", function() { return cropperCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cropperReInit", function() { return cropperReInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cropParams", function() { return cropParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfTheWeek", function() { return dayOfTheWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFormat", function() { return dataFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledButton", function() { return disabledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableCategory", function() { return disableCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyPopupBlock", function() { return emptyPopupBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enabledButton", function() { return enabledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoMap", function() { return geoMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayBid", function() { return getDayBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRightWeekText", function() { return getRightWeekText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekSchedule", function() { return getWeekSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideErrorForField", function() { return hideErrorForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifJsSlideBlockThree", function() { return ifJsSlideBlockThree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCabinetMap", function() { return initCabinetMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertRoleType", function() { return insertRoleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instagramInvolvement", function() { return instagramInvolvement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instagramFollowerDynamic", function() { return instagramFollowerDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnglish", function() { return isEnglish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInvalid", function() { return isInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumNumberOfSymbols", function() { return maximumNumberOfSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLenForInputEmail", function() { return maxLenForInputEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLenForInputName", function() { return maxLenForInputName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLenForInputServiceName", function() { return maxLenForInputServiceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLenForInputUser", function() { return maxLenForInputUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLenForPrice", function() { return maxLenForPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLenForTextArea", function() { return maxLenForTextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileBidsCheckEmpty", function() { return mobileBidsCheckEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileBidsEmpty", function() { return mobileBidsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumberInput", function() { return onlyNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openOverlay", function() { return openOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseInputText", function() { return parseInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneConfirmTimer", function() { return phoneConfirmTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupTriumph", function() { return popupTriumph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFixedNoTouch", function() { return removeFixedNoTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMobileTopMenu", function() { return removeMobileTopMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNavMenu", function() { return removeNavMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleClickOnCalendarDay", function() { return scheduleClickOnCalendarDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleGenerateCalendar", function() { return scheduleGenerateCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollAddContent", function() { return scrollAddContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBidNewDay", function() { return selectBidNewDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWeekDay", function() { return selectWeekDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPageTitle", function() { return setPageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorForField", function() { return showErrorForField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTime", function() { return startTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueForm", function() { return uniqueForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueFormPhone", function() { return uniqueFormPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttrBidBlock", function() { return updateAttrBidBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBidSum", function() { return updateBidSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updadeBidsOnDashboard", function() { return updadeBidsOnDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCountBids", function() { return updateCountBids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCrmData", function() { return updateCrmData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCrmImage", function() { return updateCrmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCustomService", function() { return updateCustomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataBids", function() { return updateDataBids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataBid", function() { return updateDataBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataSchedule", function() { return updateDataSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateImage", function() { return updateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMobileBidSum", function() { return updateMobileBidSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePageTitle", function() { return updatePageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return updateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatusService", function() { return updateStatusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatusCustomService", function() { return updateStatusCustomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateValBid", function() { return updateValBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateValSchedule", function() { return updateValSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userUniqueFormPhone", function() { return userUniqueFormPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBidsSaveMobile", function() { return validateBidsSaveMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateInputPhone", function() { return validateInputPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "massegesSwiper", function() { return massegesSwiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarClickOnCalendarDay", function() { return calendarClickOnCalendarDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceStudioMasterReqWidget", function() { return replaceStudioMasterReqWidget; });
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "eUt6X1Ue");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_crm_modules_Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/crm/modules/Calendar */ "VZ0YckBr");


var Calendar = new _js_crm_modules_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"](); // Variables

var $overlay = $('.js-overlay');
var $crmMainContentBlock = $('.jsCrmMainContentBlock');
var OPEN_CLASS = 'is-open';
var VISIBLE_CLASS = 'is-visible';
var FIXED_CLASS = 'is-fixed';
var NO_TOUCH_CLASS = 'no-touch-events';
var FIXED_NO_TOUCH = FIXED_CLASS + ' ' + NO_TOUCH_CLASS;
var alertBids = 0;
var balloon = {
  iconLayout: 'default#image',
  iconImageHref: '/client/files/icons/svg/map-pin.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-3, -42]
}; // Set crop

var cropParams = {};
cropParams['x'] = 0;
cropParams['y'] = 0;
cropParams['width'] = 0;
cropParams['height'] = 0; // export {cropParams};

function calendarClickOnCalendarDay(date, view, offset, whereSide) {
  var curr = new Date(date);
  var year = curr.getFullYear();
  var month = curr.getMonth() + 1;
  var day = curr.getDate();
  var userID = 0;

  if ($(window).width() > 480) {
    userID = $('.jsCrmCalendarEmployeesSelect').val();
  } else {
    userID = $('.jsCrmCalendarEmployeesSelectMobileBlock').find('.jsCrmCalendarEmployeesSelect').val();
  }

  var allDate = year + '-' + month + '-' + day;
  var dates = getWeekSchedule(curr);
  var singleAddress = $('.jsCrmCalendarAddressesSelect').attr('data-single-address');
  var widthScreen = '';
  var offsetFilter = '';

  if ($(window).width() > 480) {
    widthScreen = 'desktop';
    var addressID = $('.jsCrmCalendarAddressesSelect').val();
  } else {
    widthScreen = 'mobile';
    var addressID = $('.jsCrmCalendarAddressesSelectMobile').val();
  }

  var buttonPrev = $('.jsCrmCalendarButtonPrev');

  if (buttonPrev.length) {
    offsetFilter = buttonPrev.data('count');
  } else {
    offsetFilter = 0;
  }

  if (offsetFilter === 1) {
    offsetFilter = null;
  }

  console.log('buttonPrev', offsetFilter, offset, whereSide);
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmCalendarGetDataToCalendar',
    data: {
      date: allDate,
      addressID: addressID,
      userID: userID,
      widthScreen: widthScreen,
      offset: offset,
      offsetFilter: offsetFilter,
      whereSide: whereSide,
      singleAddress: singleAddress,
      monday: dates.get('mondayDate'),
      sunday: dates.get('sundayDate'),
      view: view,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      var buttonPrev = response.prev;
      var buttonNext = response.next;
      var mastersCount = response.mastersCount;
      var schedule = response.schedule;
      var utc = response.utc;
      var minStartCalendarHour = response.minStartCalendarHour;
      checkNumberMasters(mastersCount, schedule); // console.log(JSON.stringify(response.users), $('.jsCrmCalendarEmployeesSelect'));
      // console.log(JSON.stringify(response.users), response.usersTwo);

      console.log(view);

      if (view == 'week') {
        var option = '';
      } else {
        var option = '<option value="0">Все сотрудники</option>';
      }

      for (var prop in response.arrUsersForFilter) {
        option += '<option value="' + prop + '">' + response.arrUsersForFilter[prop] + '</option>';
      }

      $('.jsCrmCalendarEmployeesSelect').html(option).trigger('change.select2');

      if (response.selectUser === true) {
        $('.jsCrmCalendarEmployeesSelect').val(response.selectUserID).trigger('change.select2');
      } // else {
      //     console.log($('.jsCrmCalendarEmployeesSelect').val());
      //     $('.jsCrmCalendarEmployeesSelect').val(0)
      //         .trigger('change.select2');
      // }


      Calendar.generateCalendar(response.html, allDate, view, minStartCalendarHour, buttonPrev, buttonNext, mastersCount, schedule, utc);
    }
  });
}

function addFixedNoTouch() {
  $('html').addClass(FIXED_NO_TOUCH);
}

function removeFixedNoTouch() {
  $('html').removeClass(FIXED_NO_TOUCH);
}

function countBidsForLeftMenu() {
  $('.jsCrmMenuBidsCount');
}

function initCabinetMap() {
  var myMap;
  var myPlaceMark;
  var coordXInput = $('#coordX');
  var coordYInput = $('#coordY');
  var coordX;
  var coordY;

  if (coordXInput.val() === '' && coordYInput.val() === '') {
    coordX = 55.742909;
    coordY = 37.6275;
  } else {
    coordX = coordXInput.val();
    coordY = coordYInput.val();
  }

  myMap = new ymaps.Map('cabinet-map', {
    center: [coordX, coordY],
    zoom: 17
  });
  myPlaceMark = new ymaps.Placemark([coordX, coordY], {}, balloon);
  myMap.events.add('click', function (e) {
    var coords = e.get('coords');
    coordXInput.val(coords[0]);
    coordYInput.val(coords[1]);
    myMap.geoObjects.remove(myPlaceMark);
    myPlaceMark = new ymaps.Placemark([coords[0], coords[1]], {}, balloon);
    myMap.geoObjects.add(myPlaceMark);
  }); // myMap.behaviors.disable(['scrollZoom']);

  myMap.controls.remove('typeSelector');
  myMap.geoObjects.add(myPlaceMark);
  $('.jsCrmStepTwoCitySelect').on('change', function () {
    var cityID = $(this).val();
    $.ajax({
      method: 'POST',
      url: '/ajaxCrmGetMetroOrDistrict',
      data: {
        cityID: cityID,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        var type = response.type;
        var select;

        if (type === 'metro') {
          $('.jsCrmStepTwoMetroSelectBlock').removeClass('is-hidden');
          $('.jsCrmStepTwoDistrictSelectBlock').addClass('is-hidden');
          select = $('.jsCrmStepTwoMetroSelect');
        }

        if (type === 'district') {
          $('.jsCrmStepTwoDistrictSelectBlock').removeClass('is-hidden');
          $('.jsCrmStepTwoMetroSelectBlock').addClass('is-hidden');
          select = $('.jsCrmStepTwoDistrictSelect');
        }

        if (type === '') {
          $('.jsCrmStepTwoDistrictSelectBlock').addClass('is-hidden');
          $('.jsCrmStepTwoMetroSelectBlock').addClass('is-hidden');
        } else {
          var data = JSON.parse(response.html);
          var arrData = [{
            id: 0,
            text: 'Не выбран'
          }];
          $.each(data, function (key, name) {
            arrData.push({
              id: key,
              text: name
            });
          });
          select.html('').select2({
            data: arrData
          });
        }

        var street = $('.jsCrmStepTwoStreetInput').val();
        var number = $('.jsCrmStepTwoHouseInput').val();

        if (street === '') {
          street = null;
        }

        if (number === '') {
          number = null;
        }

        geoMap(response.cityName, street, number);
      }
    });
    return false;
  });
  $('.jsCrmBranchesCitySelect').on('change', function () {
    var cityID = $(this).val();
    $(this).parent().removeClass('is-invalid');
    $.ajax({
      method: 'POST',
      url: '/ajaxCrmGetMetroOrDistrict',
      data: {
        cityID: cityID,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        var type = response.type;
        var select;

        if (type === 'metro') {
          $('.jsCrmBranchesMetroSelectBlock').removeClass('is-hidden');
          $('.jsCrmBranchesDistrictSelectBlock').addClass('is-hidden');
          select = $('.jsCrmBranchesMetroSelect');
        }

        if (type === 'district') {
          $('.jsCrmBranchesDistrictSelectBlock').removeClass('is-hidden');
          $('.jsCrmBranchesMetroSelectBlock').addClass('is-hidden');
          select = $('.jsCrmDistrictSelect');
        }

        if (type === '') {
          $('.jsCrmBranchesDistrictSelectBlock').addClass('is-hidden');
          $('.jsCrmBranchesMetroSelectBlock').addClass('is-hidden');
        } else {
          select.html(response.html).select2();
        }

        var street = $('.jsCrmBranchesStreetInput').val();
        var number = $('.jsCrmBranchesHouseInput').val();

        if (street === '') {
          street = null;
        }

        if (number === '') {
          number = null;
        }

        geoMap(response.cityName, street, number);
      }
    });
    return false;
  });
}

function geoMap(city, street, number) {
  var myGeocoder = '';

  if (city !== null && street !== null && number !== null) {
    myGeocoder = ymaps.geocode(city + ', ' + street + ', ' + number);
  } else if (city !== null && street !== null) {
    myGeocoder = ymaps.geocode(city + ', ' + street);
  } else if (city !== null) {
    myGeocoder = ymaps.geocode(city);
  } else {
    myGeocoder = ymaps.geocode('Москва');
  }

  var myMap;
  var myPlaceMark;
  var coordX;
  var coordY;
  myGeocoder.then(function (res) {
    var coords = res.geoObjects.get(0).geometry.getCoordinates();
    myGeocoder.then(function (res) {
      $('#cabinet-map').html('');
      coordX = coords[0];
      coordY = coords[1];
      myMap = new ymaps.Map('cabinet-map', {
        center: [coordX, coordY],
        zoom: 17
      });
      $('#coordX').attr('value', coordX);
      $('#coordY').attr('value', coordY);
      myPlaceMark = new ymaps.Placemark([coordX, coordY], {}, balloon);
      myMap.geoObjects.add(myPlaceMark);
      myMap.events.add('click', function (e) {
        var coords = e.get('coords');
        $('#coordX').attr('value', coords[0]);
        $('#coordY').attr('value', coords[1]);
        myMap.geoObjects.remove(myPlaceMark);
        myPlaceMark = new ymaps.Placemark([coords[0], coords[1]], {}, balloon);
        myMap.geoObjects.add(myPlaceMark);
      });
    });
  });
}

function updateService(serviceID, templateID, price, time, status) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmStepsServices',
    data: {
      serviceID: serviceID,
      templateID: templateID,
      price: price,
      time: time,
      status: status,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      var savedBlock = $('.jsCrmServiceSuccessIcon-' + serviceID);
      savedBlock.show();
      setTimeout(function () {
        savedBlock.hide();
      }, 2000);
    }
  });
}

function createCustomService(templateID, title, price, time, materials, category, type, status) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmCreateCustomServices',
    data: {
      templateID: templateID,
      title: title,
      price: price,
      time: time,
      materials: materials,
      category: category,
      status: status,
      type: type,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      if (type === 1) {
        $('.jsCrmAddService-' + templateID + '-' + category).find('.jsCrmCustomMaterialsService').prepend('<option value="' + response.itemID + '">' + response.name + '</option>');
      }

      $('.jsCrmAddService-' + templateID + '-' + response.catServicesID).after(response.html);
      $('.jsCrmServiceCustomSelectTimeItem').select2({
        minimumResultsForSearch: -1
      });
      $('.jsCrmCustomTitleService').val('');
      $('.jsCrmCustomPriceService').val('');
      $('.jsCrmCustomTimeService').select2().val('45').trigger('change');
      $('.jsCrmCustomMaterialsService').select2().val([]).trigger('change');
    }
  });
}

function updateCustomService(itemID, templateID, price, time) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmCustomServices',
    data: {
      itemID: itemID,
      templateID: templateID,
      price: price,
      time: time,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      var savedBlock = $('.jsCrmCustomServiceSuccessIcon-' + itemID);
      savedBlock.show();
      setTimeout(function () {
        savedBlock.hide();
      }, 2000);
    }
  });
}

function updateStatusService(serviceID, templateID, status) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmStepsServicesStatus',
    data: {
      serviceID: serviceID,
      templateID: templateID,
      status: status,
      _token: token
    }
  });
}

function updateStatusCustomService(itemID, templateID, status) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmCustomServicesStatus',
    data: {
      itemID: itemID,
      templateID: templateID,
      status: status,
      _token: token
    }
  });
}

function ajaxProgress() {
  var body = document.querySelector('body');
  var pageCabinet = document.querySelector('.page-cabinet');
  var userHasScrolled = false;
  $(window).one('scroll', function () {
    userHasScrolled = true;
  });
  $(document).ajaxStart(function () {
    if (!userHasScrolled && pageCabinet) {// body.classList.add('is-loading');
    }

    NProgress.start();
  });
  $(document).ajaxStop(function () {
    if (!userHasScrolled && pageCabinet) {} // body.classList.remove('is-loading');
    //remove skeleton


    document.querySelectorAll('._loading').forEach(function (item) {
      return item.classList.remove('_loading');
    });
    NProgress.done();
  });
}

function changeActiveMenu(element) {
  var crmMainWrapperBlock = $('.jsCrmMainWrapperBlock');
  var crmMainHeaderBlock = $('.jsCrmMainHeaderBlock');
  var crmMainMenuNav = $('.jsCrmMainMenuNav');
  var crmMainMenuCloseButton = $('.jsCrmMainMenuCloseButton');
  var crmMainLeftMenuItem = $('.jsCrmMainLeftMenuItem');
  var crmLeftMenuDropDownBlock = $('.jsCrmLeftMenuDropDownBlock');
  var crmMainMenuLeftMobile = $('.jsCrmMainMenuLeftMobileActive');
  var crmMenuItemDropdown = $('.jsCrmMenuItemDropdown');
  var crmMainMenuLeftMobileDropdown = $('.jsCrmMainMenuLeftMobileDropdownActive'); // bottom menu

  if (!element.hasClass('jsStayDropdownMenu')) {
    crmMenuItemDropdown.removeClass('is-active');
    crmMainLeftMenuItem.parent().removeClass('is-active');
    crmMainMenuLeftMobile.parent().removeClass('is-active');
    element.parent().addClass('is-active');
  } // bottom menu with dropdown


  if ($(window).width() >= 480) {
    if (element.hasClass('jsCrmMainMenuBottomMobileDropdownActive')) {
      crmMenuItemDropdown.removeClass('is-active');
      crmMainMenuLeftMobile.parent().removeClass('is-active');
      element.parent().parent().parent().parent().addClass('is-active');
    } // left menu


    if (element.hasClass('jsCrmMainMenuLeftMobileActive')) {
      crmMainMenuLeftMobile.parent().removeClass('is-active');
      crmLeftMenuDropDownBlock.removeClass('is-active');
      element.parent().addClass('is-active');
    } // left menu with dropdown


    if (element.hasClass('jsCrmMainMenuLeftMobileDropdownActive')) {
      crmMainMenuLeftMobile.parent().removeClass('is-active');
      crmLeftMenuDropDownBlock.removeClass('is-active');
      element.parent().parent().addClass('is-active');
    }
  } // if (crmMainWrapperBlock.hasClass('menu-open')) {
  //     crmMainWrapperBlock.removeClass('menu-open');
  // }


  if (crmMainWrapperBlock.hasClass('mobile-nav--open')) {
    crmMainWrapperBlock.removeClass('mobile-nav--open');
  } // if (element.hasClass('jsCrmContentServicesHref')) {
  //     if (crmMainWrapperBlock.hasClass('menu-open')) {
  //         crmMainWrapperBlock.removeClass('menu-open');
  //     }
  // }
  // if (crmMainHeaderBlock.hasClass('is-moving')) {
  //     crmMainHeaderBlock.removeClass('is-moving')
  // }
  // if (crmMainMenuNav.hasClass(OPEN_CLASS)) {
  //     crmMainMenuNav.removeClass(OPEN_CLASS);
  // }
  // if (crmMainMenuCloseButton.hasClass('on')) {
  //     crmMainMenuCloseButton.removeClass('on');
  // }
  // if (element.hasClass('menu__link')) {
  //     crmMainWrapperBlock.removeClass('menu-open');
  // }


  if (crmLeftMenuDropDownBlock.hasClass('dropdown-active')) {
    crmLeftMenuDropDownBlock.removeClass('dropdown-active');
  }
} // function reInitPlugins() {
//     setPageTitle();
//     initMap();
//     BB.Core.Input.initMask();
//     BB.Core.Select.init();
//     BB.Core.Input.initInputSearch();
//     BB.Core.Component.initSlideLine();
//     BB.Core.Component.initControlBox();
//     BB.Component.PageSwiper.init();
//     BB.Component.Dropdown.init();
//     BB.Utils.setEqualTableCellHeight();
//     BB.Crm.Module.Request.init();
//     BB.Crm.Module.Aplication.init();
//     selectWeekDay();
//     updateDataBids();
//     changeBlockAddNew();
//     initAnalytics();
//     if (crmBidItemStatusBlock.length) {
//         // drag and drop status bids
//         crmBidsDragAndDrop();
//     }
//     // swiper for dashboard
//     if ($(window).width() > 480) {
//         if ($('.jsSwiperBlock').length) {
//             $('.jsSwiperBlock').remove();
//         }
//     }
//     // Dashboard messages
//     var crmDashboardPage = $('.jsCrmDashboardPage');
//     if (crmDashboardPage.length > 0) {
//         massegesSwiper();
//     }
//     // main schedule
//     if ($(document).find('.jsCrmSchedule').length) {
//         $crmMainContentBlock.addClass('graph');
//     } else {
//         $crmMainContentBlock.removeClass('graph');
//     }
//     // Main block edit edit
//     // Tabs instagram
//     // const crmContentTabs = $('.jsCrmContentTabs');
//     // if (crmContentTabs.length) {
//     //     crmContentTabs.tabs();
//     // }
//     // Services sotable
//     if ($('.jsCrmServiceInfo').length) {
//         BB.Core.Component.initBoxColor();
//         BB.Component.PopupSelectBlock.init();
//         // CrmServices2.sorting();
//         BB.Component.Dropdown.init(
//             document.querySelector('.jsCrmMainContentBlock')
//         );
//         BB.Crm.Module.Services.initSorting();
//     }
//     // main calendar
//     const crmMainCalendar = $(document).find('.jsCrmCalendar');
//     const crmMainContentBlock = $(document).find('.jsCrmMainContentBlock');
//     if (crmMainCalendar.length) {
//         crmMainContentBlock.addClass('calendar');
//     } else {
//         crmMainContentBlock.removeClass('calendar');
//     }
//     // Calendar block
//     var crmCalendarInitBlock = $('.jsCrmCalendarInitBlock');
//     var crmCalendarAddressesSelect = $('.js-select--color');
//     var crmCalendarEmployeesSelect = $('.jsCrmCalendarEmployeesSelect');
//     if (crmCalendarInitBlock.length) {
//         $('.jsCrmMainContentBlock').addClass('calendar');
//         firstLoadCalendar();
//         // crmCalendarAddressesSelect.select2({minimumResultsForSearch: -1});
//         // crmCalendarAddressesSelect.select2({minimumResultsForSearch: -1});
//         // crmCalendarEmployeesSelect.select2({minimumResultsForSearch: -1});
//         // if ($(window).width() > 480) {
//         // crmCalendarAddressesSelect.addClass('js-select--color search-enabled');
//         // crmCalendarEmployeesSelect.addClass('js-select no-search').select2();
//         // BB.Core.Select.initColor();
//         // setTimeout(function () {
//         //     BB.Core.Select.initNative();
//         // }, 100);
//         // } else {
//         // crmCalendarAddressesSelect.addClass('js-select-native');
//         // crmCalendarEmployeesSelect.addClass('js-select-native');
//         // setTimeout(function () {
//         //     BB.Core.Select.initNative();
//         // }, 100);
//         // $('.js-control-box').css('display', 'none');
//         // }
//     } else {
//         $('.jsCrmMainContentBlock').removeClass('calendar');
//     }
//     // Services manual system
//     // const crmServiceAddressesSelect = $('.jsCrmServiceAddressesSelect');
//     // if (crmServiceAddressesSelect.length) {
//     //     crmServiceAddressesSelect.select2();
//     // }
//     // Instagram
//     // const crmComplite = $('#jsComplite');
//     // if (crmComplite.length) {
//     //     BB.Core.initCopyText();
//     // }
//     const crmInfoBlockInputCount = $('.jsCrmInfoBlockInputCount');
//     if (crmInfoBlockInputCount.length) {
//         var maxLenForTextAreaAbout = 30;
//         $.each(crmInfoBlockInputCount, function(index, value) {
//             $('.jsCrmInfoBlockTitleCount-' + value.dataset.address).html(
//                 maxLenForTextAreaAbout - value.value.length
//             );
//         });
//     }
//     const crmInfoBlockTextAreaCount = $('.jsCrmInfoBlockTextAreaCount');
//     if (crmInfoBlockTextAreaCount.length) {
//         var maxLenForTextAreaAbout = 30;
//         $.each(crmInfoBlockTextAreaCount, function(index, value) {
//             $('.jsCrmInfoBlockDescCount-' + value.dataset.address).html(
//                 maxLenForTextAreaAbout - value.value.length
//             );
//         });
//     }
//     // Instagram analysis
//     const analysisInstagramInvolvement = $('.analysisInstagramInvolvement');
//     if (analysisInstagramInvolvement.length) {
//         instagramInvolvement();
//         instagramFollowerDynamic();
//     }
//     // Popups
//     const crmRemoveModal = $('.jsRemoveModal');
//     if (crmRemoveModal.length) {
//         crmRemoveModal.remove();
//     }
//     // Tabs about
//     const crmBranchesCountrySelect = $('.jsCrmBranchesCountrySelect');
//     const crmBranchesRegionSelect = $('.jsCrmBranchesRegionSelect');
//     const crmBranchesCitySelect = $('.jsCrmBranchesCitySelect');
//     const crmBranchesAddressSelect = $('.jsCrmBranchesAddressSelectReInit ');
//     const crmBranchesColorSelect = $('.jsCrmBranchesColorSelect');
//     // if (crmBranchesCountrySelect.length) {
//     //     crmBranchesCountrySelect.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesRegionSelect.select2();
//     //     crmBranchesCitySelect.select2();
//     // }
//     // if (crmBranchesAddressSelect.length) {
//     // crmBranchesAddressSelect.select2({ minimumResultsForSearch: -1 });
//     // }
//     var crmBranchesTimeMondayFrom = $('.jsCrmTimeMondayFrom');
//     var crmBranchesTimeMondayTo = $('.jsCrmTimeMondayTo');
//     var crmBranchesTimeTuesdayFrom = $('.jsCrmTimeTuesdayFrom');
//     var crmBranchesTimeTuesdayTo = $('.jsCrmTimeTuesdayTo');
//     var crmBranchesTimeWednesdayFrom = $('.jsCrmTimeWednesdayFrom');
//     var crmBranchesTimeWednesdayTo = $('.jsCrmTimeWednesdayTo');
//     var crmBranchesTimeThursdayFrom = $('.jsCrmTimeThursdayFrom');
//     var crmBranchesTimeThursdayTo = $('.jsCrmTimeThursdayTo');
//     var crmBranchesTimeFridayFrom = $('.jsCrmTimeFridayFrom');
//     var crmBranchesTimeFridayTo = $('.jsCrmTimeFridayTo');
//     var crmBranchesTimeSaturdayFrom = $('.jsCrmTimeSaturdayFrom');
//     var crmBranchesTimeSaturdayTo = $('.jsCrmTimeSaturdayTo');
//     var crmBranchesTimeSundayFrom = $('.jsCrmTimeSundayFrom');
//     var crmBranchesTimeSundayTo = $('.jsCrmTimeSundayTo');
//     var crmBirthDataDay = $('.jsCrmBirthDataDay');
//     var crmBirthDataMonth = $('.jsCrmBirthDataMonth');
//     var crmBirthDataYear = $('.jsCrmBirthDataYear');
//     var crmSliderSlick = $('.bb-slider__slides');
//     var crmStepTwoMetroSelect = $('.jsCrmStepTwoMetroSelect');
//     var crmDistrictSelect = $('.jsCrmDistrictSelect');
//     // if (crmBranchesTimeMondayFrom.length) {
//     //     crmBranchesTimeMondayFrom.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeMondayTo.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeTuesdayFrom.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeTuesdayTo.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeWednesdayFrom.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeWednesdayTo.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeThursdayFrom.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeThursdayTo.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeFridayFrom.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeFridayTo.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeSaturdayFrom.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeSaturdayTo.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeSundayFrom.select2({ minimumResultsForSearch: -1 });
//     //     crmBranchesTimeSundayTo.select2({ minimumResultsForSearch: -1 });
//     //     crmBirthDataDay.select2({ minimumResultsForSearch: -1 });
//     //     crmBirthDataMonth.select2({ minimumResultsForSearch: -1 });
//     //     crmBirthDataYear.select2({ minimumResultsForSearch: -1 });
//     //     crmStepTwoMetroSelect.select2({ minimumResultsForSearch: -1 });
//     //     crmDistrictSelect.select2({ minimumResultsForSearch: -1 });
//     // }
//     // if (crmSliderSlick.length) {
//     //
//     //     var catalogItemSlider = $('.js-catalog-item-slider');
//     //
//     //     catalogItemSlider.each(function () {
//     //         var _this = $(this);
//     //         var slides = $(this).find('.bb-slider__slides');
//     //         var slide = $(this).find('.bb-slider__slide');
//     //         var sliderDots = $(this).find('.bb-slider__dots');
//     //         sliderDots.hide();
//     //
//     //         _this.on('init', function (event, slick) {
//     //             sliderDots.prepend("<span class='bb-slider__pager bb-slider__pager--now'>1</span>" + '/');
//     //             sliderDots.append("<span class='bb-slider__pager bb-slider__pager--total'>" + slick.slideCount + '</span>');
//     //         }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     //             var i = (currentSlide ? currentSlide : 0) + 1;
//     //             _this.find('.bb-slider__pager--now').html(i);
//     //         });
//     //
//     //         if (slide.length > 1) {
//     //             sliderDots.show();
//     //
//     //             slides.slick({
//     //                 lazyLoad: 'ondemand',
//     //                 speed: 400,
//     //                 slidesToShow: 1,
//     //                 slidesToScroll: 1,
//     //                 arrows: true,
//     //                 infinite: false,
//     //                 dots: false,
//     //
//     //                 responsive: [{
//     //                     breakpoint: 481,
//     //                     settings: {
//     //                         dots: true,
//     //                         arrows: false
//     //                     }
//     //                 }]
//     //             });
//     //         }
//     //     });
//     //
//     //     //Stop Propagination click catalog item if slick initialized
//     //     $('.js-catalog-item').find('.bb-slider__slides').on('click', function (e) {
//     //         if ($(this).hasClass('slick-initialized')) {
//     //             e.stopPropagation();
//     //             e.preventDefault();
//     //         }
//     //     });
//     //
//     // }
//     var crmServiceSelectTime = $('.jsCrmServiceSelectTimeItem');
//     // if (crmServiceSelectTime.length) {
//     //     crmServiceSelectTime.select2({ minimumResultsForSearch: -1 });
//     // }
//     var crmServiceCustomSelectTimeItem = $('.jsCrmServiceCustomSelectTimeItem');
//     // if (crmServiceCustomSelectTimeItem.length) {
//     //     crmServiceCustomSelectTimeItem.select2({ minimumResultsForSearch: -1 });
//     // }
//     var crmBranchesAlbumCategoriesSelect = $(
//         '.jsCrmBranchesAlbumCategoriesSelect'
//     );
//     var crmBranchesAlbumServicesSelect = $('.jsCrmBranchesAlbumServicesSelect');
//     // if (crmBranchesAlbumCategoriesSelect.length) {
//     //     crmBranchesAlbumCategoriesSelect.select2();
//     //     crmBranchesAlbumServicesSelect.select2();
//     // }
//     var crmFirstTimeOff = '.jsCrmFirstTimeOff';
//     var crmFirstTimeTo = '.jsCrmFirstTimeTo';
//     if (crmFirstTimeOff.length) {
//         var crmTimeOff = $('.jsCrmTimeOff');
//         $(crmFirstTimeOff).on('change', function() {
//             crmTimeOff.val($(this).val());
//             // crmTimeOff.select2();
//         });
//     }
//     if (crmFirstTimeOff.length) {
//         var crmTimeTo = $('.jsCrmTimeTo');
//         $(crmFirstTimeTo).on('change', function() {
//             crmTimeTo.val($(this).val());
//             // crmTimeTo.select2();
//         });
//     }
//     // Employees
//     var crmEmployeesSearchNameInput = $('.jsCrmEmployeesSearchNameInput');
//     var crmEmployeesSearchPhoneInput = $('.jsCrmEmployeesSearchPhoneInput');
//     var crmEmployeesSearchCategorySelect = $(
//         '.jsCrmEmployeesSearchCategorySelect'
//     );
//     var crmEmployeesSearchRoleSelect = $('.jsCrmEmployeesSearchRoleSelect');
//     if (crmEmployeesSearchNameInput.length) {
//         BB.Core.initCopyText();
//     }
//     var crmClientsSearchNameInput = $('.jsCrmClientsSearchNameInput');
//     var crmClientsSearchTypeSelect = $('.jsCrmClientsSearchTypeSelect');
//     if (crmClientsSearchNameInput.length) {
//         if ($(window).width() > 480) {
//             crmClientsSearchTypeSelect.addClass('js-select no-search');
//             // .select2();
//         } else {
//             crmClientsSearchTypeSelect.addClass('js-select-native');
//             setTimeout(function() {
//                 BB.Core.Select.initNative();
//             }, 100);
//             $('.js-control-box').css('display', 'none');
//         }
//     }
//     var crmBranchesFreeHoursCheckbox = $('.jsCrmBranchesFreeHoursCheckbox');
//     var crmStepThreeWorkingHoursBlock = $('.jsCrmStepThreeWorkingHoursBlock');
//     if (crmBranchesFreeHoursCheckbox.length) {
//         if (crmBranchesFreeHoursCheckbox.hasClass('is-checked')) {
//             crmStepThreeWorkingHoursBlock.css('display', 'none');
//         }
//     }
//     // var crmBranchesWorkExperience = $('.jsCrmBranchesWorkExperience ');
//     // if (crmBranchesWorkExperience.length) {
//     //     crmBranchesWorkExperience.select2();
//     // }
//     var crmBranchesTextAreaAbout = $('.jsBranchesTextAreaAbout');
//     var crmBranchesCountTextArea = $('.jsCrmBranchesCountTextArea');
//     if (crmBranchesTextAreaAbout.length) {
//         var maxLenForTextAreaAbout = maxLenForTextArea();
//         crmBranchesCountTextArea.html(
//             maxLenForTextAreaAbout - crmBranchesTextAreaAbout.val().length
//         );
//     }
//     var crmBranchesTextAreaEducation = $('.jsBranchesTextAreaEducation');
//     var crmBranchesCountTextAreaEducation = $(
//         '.jsBranchesCountTextAreaEducation'
//     );
//     if (crmBranchesTextAreaEducation.length) {
//         var maxLenForTextAreaAbout = maxLenForTextArea();
//         crmBranchesCountTextAreaEducation.html(
//             maxLenForTextAreaAbout - crmBranchesTextAreaEducation.val().length
//         );
//     }
//     // Crm Settings
//     function crmUploadAvatarImg() {
//         var crmUploadAvatarImg = $('.jsCrmSettingsAvatarImg');
//         if (crmUploadAvatarImg.length) {
//             crmUploadAvatarImg.each(function(val, key) {
//                 updateImage(key);
//             });
//         }
//     }
//     var cmCustomTimeService = $('.jsCrmCustomTimeService');
//     var crmCustomMaterialsService = $('.jsCrmCustomMaterialsService');
//     // if (cmCustomTimeService.length) {
//     //     cmCustomTimeService.select2({ minimumResultsForSearch: -1 });
//     // }
//     // if (crmCustomMaterialsService.length) {
//     //     crmCustomMaterialsService.select2({ minimumResultsForSearch: -1 });
//     // }
//     var crmServicesInner = $('.services__inner');
//     if (crmServicesInner.length) {
//         var Services = crmServicesInner
//             .children('.js-bb-accordeon')
//             .children('.bb-accordeon__item');
//         // var countServices = Services.length;
//         Services.filter(':first').addClass(OPEN_CLASS);
//         Services.filter(':first')
//             .find('.bb-accordeon__content')
//             .removeAttr('style');
//     }
//     // Schedule block
//     var crmScheduleMainBlock = $(document).find('.jsCrmScheduleMainBlock');
//     if (crmScheduleMainBlock.length) {
//         var cmScheduleSearchByAddressSelect = $(document).find(
//             '.jsCrmScheduleSearchByAddressSelect'
//         );
//         var cmScheduleSearchByAssociateSelect = $(document).find(
//             '.jsCrmScheduleSearchByAssociateSelect'
//         );
//         var $parent = cmScheduleSearchByAddressSelect.closest('.select-color');
//         if ($(window).width() > 480) {
//             cmScheduleSearchByAddressSelect.addClass(
//                 'js-select--color search-enabled'
//             );
//             cmScheduleSearchByAssociateSelect.addClass('js-select no-search');
//             // .select2();
//             BB.Core.Select.initColor();
//             setTimeout(function() {
//                 BB.Core.Select.initNative();
//             }, 100);
//         } else {
//             cmScheduleSearchByAddressSelect.addClass('js-select-native');
//             cmScheduleSearchByAssociateSelect.addClass('js-select-native');
//             setTimeout(function() {
//                 BB.Core.Select.initNative();
//             }, 100);
//             $('.js-control-box').css('display', 'none');
//         }
//         // $(document)
//         //     .find('.js-slide-block--close')
//         //     .add('.js-slide-block-overlay')
//         //     .on('click', function() {
//         //         closeSlideBlock('.jsCrmScheduleAddDateCalendarPopup');
//         //     });
//         //
//         // $(document).on('keyup', function(e) {
//         //     if (e.keyCode == 27) {
//         //         closeSlideBlock('.jsCrmScheduleAddDateCalendarPopup');
//         //     }
//         // });
//         updateDataSchedule();
//         BB.Utils.setEqualTableCellHeight();
//     }
//     var crmClientsListTableTitlesBlock = $('.jsCrmClientsListTableTitlesBlock');
//     if (crmClientsListTableTitlesBlock.length) {
//         var countItems = 0;
//         var endBlock = $('#jsCrmClientsAddContent');
//         var alert = 0;
//         addClientsToContent(countItems, alert, endBlock);
//     }
//     // Bid block init
//     var crmBidInitBlock = $('.jsCrmBidInitBlock');
//     if (crmBidInitBlock.length) {
//         var crmBidsSearchTypeSalon = $('.jsCrmBidsSearchTypeSalonSelect');
//         var crmBidsSearchTypeMasters = $('.jsCrmBidsSearchTypeMastersSelect');
//         var crmBidsSearchTypeAdmin = $('.jsCrmBidsSearchTypeAdminSelect');
//         var crmBidsSearchData = $('.crmBidsSearchData');
//         var $parent = crmBidsSearchTypeSalon.closest('.select-color');
//         if ($(window).width() > 480) {
//             crmBidsSearchTypeSalon.addClass('js-select--color search-enabled');
//             // crmBidsSearchTypeMasters.addClass('js-select no-search').select2();
//             // crmBidsSearchTypeAdmin.addClass('js-select no-search').select2();
//             BB.Core.Select.initColor();
//             setTimeout(function() {
//                 BB.Core.Select.initNative();
//             }, 100);
//         } else {
//             crmBidsSearchTypeSalon.addClass('js-select-native');
//             crmBidsSearchTypeMasters.addClass('js-select-native');
//             crmBidsSearchTypeAdmin.addClass('js-select-native');
//             setTimeout(function() {
//                 BB.Core.Select.initNative();
//             }, 100);
//             $('.js-control-box').css('display', 'none');
//         }
//         updateDataBid();
//     }
//     var crmSelectPhotos = $('.jsCrmPhotosPagesTrue');
//     if (crmSelectPhotos.length) {
//         $crmMainContentBlock.addClass('full-screen jsCrmPhotosPage');
//     } else {
//         $crmMainContentBlock.removeClass('full-screen jsCrmPhotosPage');
//     }
// }


function setPageTitle() {
  var crmPageTitle = $('.jsCrmPageTitle');
  var crmPageTitleHeader = $('.jsCrmPageTitleHeader');
  crmPageTitleHeader.text(crmPageTitle.children('span').text());
  crmPageTitle.addClass('is-hidden');
}

function updatePageTitle(newTitle) {
  var crmPageTitle = $('.jsCrmPageTitle');
  var crmPageTitleHeader = $('.jsCrmPageTitleHeader');
  crmPageTitle.children('span').text(newTitle);
  crmPageTitleHeader.text(newTitle);
}

function initMap() {
  // Init map
  if ($('#cabinet-map').length) {
    ymaps.ready(initCabinetMap);
  }
}

function replaceStudioMasterReqWidget() {
  if ($(document).find('.jsStudioMasterOnlineReqWidgetBlock').length) {
    if (window.screen.width < 480) {
      var $studioMasterReqWidgetBlock = $(document).find('.jsStudioMasterOnlineReqWidgetBlock');
      $(document).find('.jsStudioMasterOnlineReqWidgetBlock').remove();
      $(document).find('.jsBidsBlock').before($studioMasterReqWidgetBlock);
    }
  }
}

function scrollToTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
}

function changeUrl(linkRoute) {
  window.history.pushState('url', '', linkRoute);
}

function buttonOn(entity) {
  entity.removeClass('is-loading is-disabled').removeAttr('disabled');
}

function buttonOff(entity) {
  entity.addClass('is-loading').attr('disabled', '');
}

function disabledButton(button, e) {
  $(e.target).closest(button).attr('inert', '');
  $(e.target).closest(button).attr('tabindex', '-1');
}

function updateCrmData(crmData, token) {
  crmData.forEach(function (val, key) {
    crmData.delete(key);
  });
  crmData.append('_token', token);
}

function uniqueForm(alias, addressID, _this, onePage) {
  $.ajax({
    method: 'POST',
    url: '/ajaxValidateNickname',
    data: {
      alias: alias,
      addressID: addressID,
      onePage: onePage,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      _this.parent().removeClass('is-invalid');

      _this.css('border', '1px solid #E3E3E3');

      _this.parent().addClass('is-complite');

      var $inputSite = $(document).find('.jsSiteLinkData');
      var $inputOnlineReq = $(document).find('.jsOnlineRequestLinkData');
      $inputSite.val("".concat($inputSite.attr('data-domain'), "/box/").concat(response.alias));
      $inputOnlineReq.val("".concat($inputOnlineReq.attr('data-domain'), "/online/").concat(response.alias)); // var parentBlock = _this.parent(':parent').parent(':parent');
      // parentBlock
      //     .find('button')
      //     .attr(
      //         'data-clipboard-text',
      //         `${response.url}/box/${response.alias}`
      //     );
      // parentBlock
      //     .find('a')
      //     .attr('href', `${response.url}/box/${response.alias}`);
      //
      // if ($('.jsCrmMoreBlockSetupBeautylinkHref').length) {
      //     $('.jsCrmMoreBlockSetupBeautylinkHref').attr(
      //         'href',
      //         `${response.url}/box/${response.alias}`
      //     );
      // }
    }

    if (response.success === false) {
      _this.parent().addClass('is-invalid');

      _this.parent().find('.js-bb-input-tip').removeAttr('style');

      _this.parent().find('.bb-input-tip__text').text('Никнейм не уникальный');

      _this.parent().removeClass('is-complite');

      _this.css('border', '1px solid #c9302c');
    }
  });
}

function uniqueFormPhone(phone, addressID) {
  $.ajax({
    method: 'POST',
    url: '/ajaxPhonesValidate',
    data: {
      phone: phone.val(),
      addressID: addressID,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      phone.next().css('display', 'block');
      phone.next().css('color', 'rgb(112, 176, 87)');
      phone.next().text('Сохранено');
      phone.css('border', '1px solid rgb(112, 176, 87)');
    }
  });
}

function changeParameterActive(addressID, active) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmChangeParameterActive',
    data: {
      active: active,
      addressID: addressID,
      _token: token
    }
  });
}

function phoneConfirmTimer() {
  var timer = $('.js-timer');

  var tim = function tim() {
    setTimeout(function () {
      var t = timer.data('timer');
      timer.text(t);
      var int = setInterval(function () {
        t--;

        if (t == -1) {
          clearInterval(int);
          timer.parent().css('display', 'none');
          $('.js-cabinet-phone-confirm').removeAttr('style');
        } else {
          timer.text(t);
        }
      }, 1000);
      $('.js-cabinet-phone-confirm').on('click', function (e) {
        clearInterval(int);
        tim();
      });
    });
  };

  tim();
}

function updateCrmImage(image) {
  var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (src === true) {
    image.attr('src', image.attr('src') + '?' + new Date().getTime());
  } else {
    image.attr('src', image.attr('src').split('?')[0] + '?' + new Date().getTime());
  }
}

function userUniqueFormPhone(phone, userID, type) {
  var crmProfileEditor = $('.jsProfileEditor');
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmUserSetting',
    data: {
      phone: phone.val(),
      userID: userID,
      type: type,
      _token: token
    }
  }).done(function (response) {
    if (response.success === false) {
      crmProfileEditor.removeClass('is-confirm');
      crmProfileEditor.addClass('is-invalid');
      crmProfileEditor.addClass('is-error');
      phone.next().css('color', '#c9302c');
      phone.css('border', '1px solid #c9302c');
      phone.next().css('display', 'block');
      $('#jsCrmUserPhone').next('.profile-editor__error').html(response.error);
    }

    if (response.success === true) {
      if (response.phoneActive == false) {
        crmProfileEditor.removeClass('is-confirm');
        $('.profile-editor__confirm').removeClass('is-hidden');
        crmProfileEditor.addClass('is-error');
        crmProfileEditor.addClass('is-invalid');
        phone.next().css('display', 'block');
        phone.next().css('color', 'rgb(112, 176, 87)');
        phone.next().text('Сохранено');
        phone.css('border', '1px solid rgb(112, 176, 87)');
        setTimeout(function () {
          phone.css('border-color', '#adadad');
          phone.next().css('display', 'none');
          crmProfileEditor.removeClass('is-error');
          crmProfileEditor.removeClass('is-invalid');
        }, 5000);
      } else {
        crmProfileEditor.removeClass('is-error');
        crmProfileEditor.removeClass('is-invalid');
        crmProfileEditor.addClass('is-confirm');
        phone.next().css('display', 'block');
        phone.next().css('color', 'rgb(112, 176, 87)');
        phone.next().text('Сохранено');
        phone.css('border', '1px solid rgb(112, 176, 87)');
      }
    }
  });
}

function addCategory(template, catID) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmCategories',
    data: {
      templateID: template,
      catID: catID,
      type: 'add',
      _token: token
    }
  });
}

function deleteCategory(template, catID) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmCategories',
    data: {
      templateID: template,
      catID: catID,
      type: 'delete',
      _token: token
    }
  });
}

function popupTriumph(userID) {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmPopupTriumph',
    data: {
      userID: userID,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      setTimeout(function () {
        $('#triumph-registration').modal('show');
      }, 500);
    }
  });
}

function attachOrder(userID) {
  $.ajax({
    method: 'POST',
    url: '/ajaxAttachOrder',
    data: {
      userID: userID,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      console.log('товар успешно привязан');
    }
  });
}

function scheduleClickOnCalendarDay(date) {
  var curr = new Date(date);
  var year = curr.getFullYear();
  var month = curr.getMonth();
  var day = curr.getDate();
  var addressID = $('.jsCrmScheduleSearchByAddressSelect').val();
  var userID = $('.jsCrmScheduleSearchByAssociateSelect').val();
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmScheduleSelectDayInCalendar',
    data: {
      year: year,
      month: month,
      day: day,
      addressID: addressID,
      userID: userID,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      var crmScheduleTableBlock = $('.jsCrmScheduleTableBlock');
      crmScheduleTableBlock.empty();
      crmScheduleTableBlock.prepend(response.html);
    }
  });
}

function updateDataSchedule() {
  var date = new Date();
  var crmScheduleInputCalendarTop = $('.jsCrmScheduleInputCalendarTop');
  var ruDates = getWeekSchedule(date);
  updateValSchedule(ruDates);
  crmScheduleInputCalendarTop.datepicker({
    autoClose: true,
    toggleSelected: false,
    minDate: false,
    onSelect: function onSelect(formattedDate, date) {
      var ruDates = getWeekSchedule(date);
      updateValSchedule(ruDates);
      scheduleClickOnCalendarDay(date);
    }
  }).data('datepicker').selectDate(new Date(ruDates.get('currDate')));
}

function updateValSchedule(value) {
  var crmScheduleDateFieldTop = $('.jsCrmScheduleDateFieldTop');
  crmScheduleDateFieldTop.text(value.get('text'));
}

function getWeekSchedule(date) {
  var curr = new Date(date);
  var currDay = curr.getDay();
  var currMonth = curr.getMonth();
  var monday;
  var sunday;

  if (currDay === 0) {
    monday = curr.getDate() - 6;
    sunday = curr.getDate();
  } else {
    monday = curr.getDate() - curr.getDay() + 1;
    sunday = monday + 6;
  }

  return getRightWeekText(curr, monday, sunday, currMonth);
}

function getRightWeekText(currDate, monday, sunday, month) {
  var firstDay;
  var lastDay;
  var params = {
    month: 'short'
  };
  var oDayF;
  var oDayL;
  var oMonthF;
  var oMonthL;
  var monthNumberF;
  var monthNumberL;
  var oYearF;
  var oYearL;
  var arrData = new FormData();
  var temp;
  arrData.append('currDate', currDate);

  if (sunday > monday && (monday === 0 || monday < 0)) {
    var newMonth = new Date(currDate.getFullYear(), month, 1);
    firstDay = new Date(currDate.setDate(monday));
    oDayF = firstDay.getDate();
    monthNumberF = firstDay.getMonth() + 1;
    oYearF = firstDay.getFullYear();
    firstDay = firstDay.toLocaleString('ru', params);
    oMonthF = firstDay.replace('.', '');
    lastDay = new Date(newMonth.setDate(sunday));
    oDayL = lastDay.getDate();
    monthNumberL = lastDay.getMonth() + 1;
    oYearL = lastDay.getFullYear();
    lastDay = lastDay.toLocaleString('ru', params);
    oMonthL = lastDay.replace('.', '');

    if (oYearF === oYearL) {
      temp = oDayF + ' ' + oMonthF + ' - ' + oDayL + ' ' + oMonthL + ', ' + oYearF;
    } else {
      temp = oDayF + ' ' + oMonthF + ', ' + oYearF + ' - ' + oDayL + ' ' + oMonthL + ', ' + oYearL;
    }

    arrData.append('text', temp);
  } else {
    firstDay = new Date(currDate.setDate(monday));
    oDayF = firstDay.getDate();
    monthNumberF = firstDay.getMonth() + 1;
    oYearF = firstDay.getFullYear();
    firstDay = firstDay.toLocaleString('ru', params);
    oMonthF = firstDay.replace('.', '');
    lastDay = new Date(currDate.setDate(sunday));
    oDayL = lastDay.getDate();
    monthNumberL = lastDay.getMonth() + 1;
    oYearL = lastDay.getFullYear();
    lastDay = lastDay.toLocaleString('ru', params);
    oMonthL = lastDay.replace('.', '');

    if (oMonthL === oMonthF) {
      temp = oDayF + ' - ' + oDayL + ' ' + oMonthF + ', ' + oYearF;
      arrData.append('text', temp);
    } else {
      if (oYearF === oYearL) {
        temp = oDayF + ' ' + oMonthF + ' - ' + oDayL + ' ' + oMonthL + ', ' + oYearF;
      } else {
        temp = oDayF + ' ' + oMonthF + ', ' + oYearF + ' - ' + oDayL + ' ' + oMonthL + ', ' + oYearL;
      }

      arrData.append('text', temp);
    }
  }

  arrData.append('mondayDate', oYearF + '-' + monthNumberF + '-' + oDayF);
  arrData.append('sundayDate', oYearL + '-' + monthNumberL + '-' + oDayL);
  return arrData;
}

function scheduleGenerateCalendar(response, cDate) {
  var crmSchedulePopupCalendar = $('.jsCrmSchedulePopupCalendar');
  var eventDates = response.arrDates;
  crmSchedulePopupCalendar.datepicker({
    multipleDates: true,
    inline: true,
    startDate: new Date(cDate),
    moveToOtherMonthsOnSelect: false,
    onRenderCell: function onRenderCell(date, cellType) {
      var year = date.getFullYear();
      var month = date.getMonth();
      month = month + 1;

      if (month === 1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9) {
        month = '0' + month;
      }

      var day1 = date.getDate();
      var day = date.getDate();

      if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6 || day === 7 || day === 8 || day === 9) {
        day = '0' + day;
      }

      var currentDate = year + '-' + month + '-' + day;

      if (cellType == 'day' && eventDates.indexOf(currentDate) != -1) {
        return {
          classes: 'is-checked',
          html: day1
        };
      }

      $('.datepicker--nav-title').addClass('-disabled-');
    },
    onChangeMonth: function onChangeMonth(month, year) {
      $('.datepicker--nav-title').addClass('-disabled-');
    }
  }).data('datepicker').selectDate(new Date(cDate));
} // Datepicker http://t1m0n.name/air-datepicker/docs/index-ru.html


function selectWeekDay() {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  if ($('.jsCrmBidsSearchDataTomorrow').length) {
    var dateBids = $('.jsCrmBidsSearchDataTomorrow').val();
    var date = new Date(dateBids);
  } else {
    var date = new Date();
  }

  var crmBidsSearchData = $('.crmBidsSearchData');
  var crmClientSearchBids = $('.jsCrmClientSearchBids');
  var jsProfileID = $('#jsProfileID');
  var profileID = jsProfileID.attr('data-profile-id');

  if (crmBidsSearchData.length) {
    $(crmBidsSearchData).datepicker({
      dateFormat: 'dd.mm.yy',
      minDate: false,
      autoClose: true,
      onShow: function onShow(dp, animationCompleted) {},
      onHide: function onHide(dp, animationCompleted) {
        if (animationCompleted) {
          // Search by bids date
          var date = $('.crmBidsSearchData').val();
          var crmBidItem = $('.jsCrmBidsItem');
          var masterID = $('.jsCrmBidsSearchTypeMastersSelect').val();
          var adminID = $('.jsCrmBidsSearchTypeAdminSelect').val();
          var addressID = $('.jsCrmBidsSearchTypeSalonSelect').val();
          var html = '';
          var dataTime = date.split('-'); // crmBidDisabledFilters();

          $.ajax({
            method: 'POST',
            url: '/ajaxCrmBidsSearch',
            data: {
              dateTime: dataTime,
              profileID: profileID,
              masterID: masterID,
              addressID: addressID,
              adminID: adminID,
              _token: token
            }
          }).done(function (response) {
            if (response.success === true) {
              html = response.html;
              crmBidItem.remove();
              $(html).insertAfter(jsProfileID);
              updateDataBids();
              mobileBidsCheckEmpty();
              BB.Crm.Module.Request.init();

              if (!$('.jsCrmBidInitBlock').hasClass('is-client')) {
                crmBidsDragAndDrop();
              }
            }
          });
        }
      }
    }).data('datepicker').selectDate([date]);
  }

  if (crmClientSearchBids.length) {
    crmClientSearchBids.datepicker({
      dateFormat: 'dd.mm.yy',
      minDate: false,
      autoClose: true,
      onShow: function onShow(dp, animationCompleted) {},
      onHide: function onHide(dp, animationCompleted) {
        if (animationCompleted) {
          var dateFrom = $('.jsCrmClientFromDateBids').val();
          var dateBefore = $('.jsCrmClienBeforeDateBids').val(); // crmBidDisabledFilters();

          $.ajax({
            method: 'POST',
            url: '/ajaxCrmClientSearchBids',
            data: {
              dateFrom: dateFrom,
              dateBefore: dateBefore,
              clientID: $('.jsCrmClientsPopupEditButton').attr('data-id'),
              _token: token
            }
          }).done(function (response) {
            if (response.success === true) {
              $('.jsCrmClientBidsContent').scrollTop(0);
              $('.jsCrmClientBidsContent').attr('onscroll', 'bidsForClientsBlock(' + response.allBidsCount + ')').html(response.html); // crmBidActiveFilters();
              // var alertBids = 0;
            }
          });
        }
      }
    });
  }

  $('.jsInputIconTo').click(function (event) {
    event.preventDefault();
    $(this).prev().focus();
  });
}

selectWeekDay(); // BID

function updateDataBid() {
  if ($('.jsCrmBidsSearchDataTomorrow').length) {
    var dateBids = $('.jsCrmBidsSearchDataTomorrow').val();
    var date = new Date(dateBids);
  } else {
    var date = new Date();
  }

  var crmBidsInputCalendarTop = $('.jsCrmBidsInputCalendarTop');
  var ruDates = getDayBid(date);
  updateValBid(ruDates);
  crmBidsInputCalendarTop.datepicker({
    autoClose: true,
    toggleSelected: false,
    minDate: false,
    onSelect: function onSelect(formattedDate, date) {
      var ruDates = getDayBid(date);
      updateValBid(ruDates);
      bidClickOnCalendarDay(date);
    }
  }).data('datepicker').selectDate(new Date(ruDates.get('currDate')));
}

function getDayBid(date) {
  var curr = new Date(date);
  var paramsMonth = {
    month: 'short'
  };
  var paramsWeek = {
    weekday: 'short'
  };
  var arrData = new FormData();
  var temp;
  var currWeek = curr.toLocaleString('ru', paramsWeek);
  var curDay = curr.getDate();
  var curYear = curr.getFullYear();
  var curMonth = curr.toLocaleString('ru', paramsMonth).replace('.', '');
  temp = currWeek + ' ' + curDay + ' ' + curMonth + ', ' + curYear;
  arrData.append('currDate', curr);
  arrData.append('text', temp);
  return arrData;
}

function updateValBid(value) {
  var crmBidsDateFieldTop = $('.jsCrmBidsDateFieldTop');
  crmBidsDateFieldTop.text(value.get('text'));
} // error two loads bids modules


function bidClickOnCalendarDay(date) {
  var curr = new Date(date);
  var year = curr.getFullYear();
  var month = curr.getMonth();
  var day = curr.getDate();
  var dateTime = [year, month + 1, day];
  var adminID = $('.jsCrmBidsSearchTypeAdminSelect').val();
  var crmBidItem = $('.jsCrmBidsItem');
  var addressID = $('.jsCrmBidsSearchTypeSalonSelect').val();
  var masterID = $('.jsCrmBidsSearchTypeMastersSelect').val();
  var html = '';
  var jsProfileID = $('#jsProfileID');

  if ($(window).width() <= 480) {
    var mobileStatus = $('.jsCrmBidsStatusSelect').val();
  } else {
    var mobileStatus = null;
  } // crmBidDisabledFilters();


  $.ajax({
    method: 'POST',
    url: '/ajaxCrmBidsSearch',
    data: {
      masterID: masterID,
      adminID: adminID,
      addressID: addressID,
      dateTime: dateTime,
      mobileStatus: mobileStatus,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      html = response.html;
      crmBidItem.remove();
      $(html).insertAfter(jsProfileID);
      BB.Crm.Module.Request.init();

      if (!$('.jsCrmBidInitBlock').hasClass('is-client')) {
        crmBidsDragAndDrop();
      }

      updateDataBids();
      mobileBidsCheckEmpty();
    }
  });
} // New bids datepicker


function selectBidNewDay(date) {
  var crmBidsSearchDataDay = $('.crmBidsSearchDataDay');
  var crmBidsNewDateField = $('.jsCrmBidNewDateField');
  var crmBidsSearchDataDayFormatCarbon = $('.jsCrmBidsSearchDataDayFormatCarbon');
  var crmBidsInputIconNewBid = $('.jsInputIconNewBid');
  var valueDateBidNew = null;
  var arrValueDateBidNew = null;

  if (date === null) {
    if (crmBidsSearchDataDay.length) {
      crmBidsSearchDataDay.datepicker({
        dateFormat: 'dd.mm.yy',
        minDate: false,
        autoClose: true,
        onHide: function onHide(dp, animationCompleted) {
          if (animationCompleted) {
            valueDateBidNew = crmBidsSearchDataDay.val();
            arrValueDateBidNew = valueDateBidNew.split('/');
            crmBidsNewDateField.text(arrValueDateBidNew[0]);
            crmBidsSearchDataDayFormatCarbon.val(arrValueDateBidNew[1]);
          }
        }
      }).data('datepicker').selectDate(new Date());
      valueDateBidNew = crmBidsSearchDataDay.val();
      arrValueDateBidNew = valueDateBidNew.split('/');
      crmBidsNewDateField.text(arrValueDateBidNew[0]);
      crmBidsSearchDataDayFormatCarbon.val(arrValueDateBidNew[1]);
    }
  } else {
    if (crmBidsSearchDataDay.length) {
      crmBidsSearchDataDay.datepicker({
        dateFormat: 'dd.mm.yy',
        minDate: false,
        autoClose: true,
        onHide: function onHide(dp, animationCompleted) {
          if (animationCompleted) {
            valueDateBidNew = crmBidsSearchDataDay.val();
            arrValueDateBidNew = valueDateBidNew.split('/');
            crmBidsNewDateField.text(arrValueDateBidNew[0]);
            crmBidsSearchDataDayFormatCarbon.val(arrValueDateBidNew[1]);
          }
        }
      }).data('datepicker').selectDate(new Date(date));
      valueDateBidNew = crmBidsSearchDataDay.val();
      arrValueDateBidNew = valueDateBidNew.split('/');
      crmBidsNewDateField.text(arrValueDateBidNew[0]);
      crmBidsSearchDataDayFormatCarbon.val(arrValueDateBidNew[1]);
    }
  }

  crmBidsInputIconNewBid.click(function (event) {
    event.preventDefault();
    $(this).prev().prev().focus();
  });
  crmBidsNewDateField.click(function (event) {
    event.preventDefault();
    $(this).prev().focus();
  });
}

selectBidNewDay(); // update card all

function updateBidSum() {
  var totalAmount = null;
  var crmBidNewCard = $($(document)).find('.jsCrmBidNewCard');
  crmBidNewCard.each(function () {
    var _this = $(this);

    var crmBidsNewLastBlock = _this.hasClass('jsCrmBidsNewLastBlock');

    if (!crmBidsNewLastBlock) {
      var price = parseInt(_this.find('.jsCrmBidsNewPrice').find(':selected').data('price'));
      var priceEdit = parseInt(_this.find('.jsCrmBidNewPriceEdit').val());

      if (isNumber(priceEdit)) {
        totalAmount += priceEdit;
      } else {
        if (isNumber(price)) {
          totalAmount += price;
        }
      }
    }
  });

  if (!isNumber(totalAmount)) {
    totalAmount = 0;
  }

  $('.jsCrmBidsCountAllService').text(totalAmount);
} // update mobile card all


function updateMobileBidSum() {
  var totalAmount = null;
  var crmBidNewCard = $($(document)).find('.jsCrmBidServiceBlockEditMobile');
  crmBidNewCard.each(function () {
    var _this = $(this);

    var price = parseInt(_this.find('.jsCrmBidEditPrice').text());

    if (isNumber(price)) {
      totalAmount += price;
    }
  });

  if (!isNumber(totalAmount)) {
    totalAmount = 0;
  }

  $('.jsCrmBidsCountAllService').text(totalAmount);
}

function updateCountBids() {
  var crmBidCount = $($(document)).find('.jsCrmBidCount');
  crmBidCount.each(function () {
    var _this = $(this); // status read


    if (_this.data('status') === 1) {
      var crmBidCountItems = _this.find('.jsCrmBidCountItems');

      _this.find('.jsCrmCountBidBlock').text(crmBidCountItems.length);
    }

    if (_this.data('status') === 2) {
      var crmBidCountItems = _this.find('.jsCrmBidCountItems');

      _this.find('.jsCrmCountBidBlock').text(crmBidCountItems.length);
    } // status working


    if (_this.data('status') === 3) {
      var crmBidCountItems = _this.find('.jsCrmBidCountItems');

      _this.find('.jsCrmCountBidBlock').text(crmBidCountItems.length);
    } // status done


    if (_this.data('status') === 4) {
      var crmBidCountItems = _this.find('.jsCrmBidCountItems');

      _this.find('.jsCrmCountBidBlock').text(crmBidCountItems.length);
    } // status canceled


    if (_this.data('status') === 5) {
      var crmBidCountItems = _this.find('.jsCrmBidCountItems');

      _this.find('.jsCrmCountBidBlock').text(crmBidCountItems.length);
    }
  });
}

if ($(document).find('.js-sortable').length) {
  // drag and drop status bids
  crmBidsDragAndDrop();
}

function crmBidsDragAndDrop() {
  if ($(window).width() > 480) {
    _sortable();
  }

  function _sortable() {
    var sortable = '.js-sortable-request';
    var HIDDEN_CLASS = 'is-hidden';

    if ($(sortable).length) {
      //Replace icon when drag item
      var widgetReplaceIcon = function widgetReplaceIcon(el) {
        var widget = el.closest('.request__widget');
        var iconNew = 'is-new';
        var iconWork = 'is-work';
        var iconDone = 'is-done';
        var iconAbort = 'is-abort';
        el.removeClass("".concat(iconNew, " ").concat(iconWork, " ").concat(iconDone, " ").concat(iconAbort));

        if (widget.hasClass('request__widget--new')) {
          el.addClass("".concat(iconNew));
          updateBidStatus(el.data('bid'), 1);
        } else if (widget.hasClass('request__widget--work')) {
          el.addClass("".concat(iconWork));
          updateBidStatus(el.data('bid'), 3);
        } else if (widget.hasClass('request__widget--done')) {
          el.addClass("".concat(iconDone));
          updateBidStatus(el.data('bid'), 4);
        } else if (widget.hasClass('request__widget--abort')) {
          el.addClass("".concat(iconAbort));
          updateBidStatus(el.data('bid'), 5);
        }

        updateCountBids();
      }; // Update bid status


      var updateBidStatus = function updateBidStatus(bidID, status) {
        $.ajax({
          method: 'POST',
          url: '/ajaxCrmBidDragAndDropBids',
          data: {
            bidID: bidID,
            status: status,
            _token: token
          }
        });
      };

      $(sortable).each(function () {
        var $emptyBlock = $(this).find('.empty');
        var $requestItem = $(this).find('.request-item');

        if ($requestItem.length <= 0) {
          $emptyBlock.removeClass(HIDDEN_CLASS);
        }

        Sortable.create($(this)[0], {
          // Библиотека требует HTMLElement, который получается через jQueryObject[0]
          group: 'nested',
          filter: '.empty, .widget__header',
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          onEnd: function onEnd(e) {
            var item = $(e.item);
            var $widgetTo = $(e.to).closest('.widget');
            var $widgetFrom = $(e.from).closest('.widget');
            var $counterFtom = $widgetFrom.find('.request-item').length;
            var $counterTo = $widgetTo.find('.request-item').length;
            var $emptyBlockFrom = $widgetFrom.find('.empty');
            var $emptyBlockTo = $widgetTo.find('.empty');

            if ($counterFtom <= 0) {
              $emptyBlockFrom.removeClass(HIDDEN_CLASS);
            } else {
              $emptyBlockFrom.addClass(HIDDEN_CLASS);
            }

            if ($counterTo > 0) {
              $emptyBlockTo.addClass(HIDDEN_CLASS);
            } else {
              $emptyBlockTo.removeClass(HIDDEN_CLASS);
            }

            widgetReplaceIcon(item);
          }
        });
      });
    }
  }
}

function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

function isEnglish(n) {
  return /-?[А-Яа-яйё]/.test(n);
}

function updateImage(image) {
  image[0].src = image[0].src.split('?')[0] + '?' + new Date().getTime();
}

function add(el) {
  el.find('.list--icon').addClass('list-color--success').find('.list__icon').removeClass('fal').addClass('fas');
}

function remove(el) {
  el.find('.list--icon').removeClass('list-color--success').find('.list__icon').removeClass('fas').addClass('fal');
} // function crmBidBlocksAppend () {
//     $(document).find('.jsCrmBidBlocksAppend').appendTo('.jsCrmMainPopupBlock');
// }crmBidBlocksAppend();
// UTC timing


function startTime(utc) {
  var today = new Date();
  var h = today.getUTCHours();
  var m = today.getUTCMinutes();
  var s = today.getUTCSeconds();
  h = h + utc;

  if (h > 24) {
    h = h - 24;
  }

  if (h < 0) {
    h = h + 24;
  }

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  var t = setTimeout(function () {
    startTime(utc);
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }

  return i;
} // var Calendar = (function() {
//     var calendar = {};
//     calendar.generateCalendar = function(
//         arrData,
//         allDate,
//         view,
//         minStartCalendarHour,
//         buttonPrev,
//         buttonNext,
//         mastersCount,
//         schedule = null
//     ) {
//         if ($('#calendar').length) {
//             this.heights();
//             this.timeStep();
//             var arrEmployees = [];
//             var currentDate = allDate;
//             var userRole = $('.jsCrmCalendarHoverBlock').data('role');
//             arrData = JSON.parse(arrData);
//             if (view === 'week') {
//                 $.each(arrData, function(key, data) {
//                     $(document)
//                         .find('.jsCrmCalendarButtonPrev')
//                         .addClass('is-hidden');
//                     $(document)
//                         .find('.jsCrmCalendarButtonNext')
//                         .addClass('is-hidden');
//                     scheduler.deleteMarkedTimespan();
//                     $.each(data.workFrom, function(tKey, tData) {
//                         var initDateFrom = tData;
//                         initDateFrom = initDateFrom.split('-');
//                         var initDateFrom3 = initDateFrom[2].split(' ');
//                         var initTimeFrom = initDateFrom3[1].split(':');
//                         var initDateTo = data.workTo[tKey];
//                         initDateTo = initDateTo.split('-');
//                         var initDateTo3 = initDateTo[2].split(' ');
//                         var initTimeTo = initDateTo3[1].split(':');
//                         scheduler.addMarkedTimespan({
//                             start_date: new Date(
//                                 initDateFrom[0],
//                                 initDateFrom[1] - 1,
//                                 initDateFrom3[0],
//                                 initTimeFrom[0],
//                                 initTimeFrom[1]
//                             ),
//                             end_date: new Date(
//                                 initDateTo[0],
//                                 initDateTo[1] - 1,
//                                 initDateTo3[0],
//                                 initTimeTo[0],
//                                 initTimeTo[1]
//                             ),
//                             css: 'dhx_time_reserved',
//                         });
//                     });
//                     $.each(data.workBreakFrom, function(tKey, tData) {
//                         if (typeof tData !== 'undefined') {
//                             if (tData !== 0) {
//                                 var initDateBreakFrom = tData;
//                                 initDateBreakFrom = initDateBreakFrom.split(
//                                     '-'
//                                 );
//                                 var initDateBreakFrom3 = initDateBreakFrom[2].split(
//                                     ' '
//                                 );
//                                 var initTimeBreakFrom = initDateBreakFrom3[1].split(
//                                     ':'
//                                 );
//                                 var initDateBreakTo = data.workBreakTo[tKey];
//                                 initDateBreakTo = initDateBreakTo.split('-');
//                                 var initDateBreakTo3 = initDateBreakTo[2].split(
//                                     ' '
//                                 );
//                                 var initTimeBreakTo = initDateBreakTo3[1].split(
//                                     ':'
//                                 );
//                                 scheduler.addMarkedTimespan({
//                                     start_date: new Date(
//                                         initDateBreakFrom[0],
//                                         initDateBreakFrom[1] - 1,
//                                         initDateBreakFrom3[0],
//                                         initTimeBreakFrom[0],
//                                         initTimeBreakFrom[1]
//                                     ),
//                                     end_date: new Date(
//                                         initDateBreakTo[0],
//                                         initDateBreakTo[1] - 1,
//                                         initDateBreakTo3[0],
//                                         initTimeBreakTo[0],
//                                         initTimeBreakTo[1]
//                                     ),
//                                     css: 'dhx_time_reserved',
//                                 });
//                             }
//                         }
//                     });
//                 });
//             } else {
//                 scheduler.deleteMarkedTimespan();
//                 // удаляем заглушку в календаре елси нет графика работы
//                 if (arrData == null) {
//                     return false;
//                 } else {
//                     checkNumberMasters(mastersCount, schedule);
//                 }
//                 var countUser = Object.keys(arrData).length;
//                 if (countUser >= 1) {
//                     if (buttonPrev == 1 || buttonPrev == null) {
//                         $(document)
//                             .find('.jsCrmCalendarButtonPrev')
//                             .addClass('is-hidden')
//                             .data('count', buttonPrev);
//                     } else {
//                         $(document)
//                             .find('.jsCrmCalendarButtonPrev')
//                             .removeClass('is-hidden')
//                             .data('count', buttonPrev);
//                     }
//                     if (buttonNext >= mastersCount) {
//                         $(document)
//                             .find('.jsCrmCalendarButtonNext')
//                             .addClass('is-hidden')
//                             .data('count', buttonNext);
//                     } else {
//                         $(document)
//                             .find('.jsCrmCalendarButtonNext')
//                             .removeClass('is-hidden')
//                             .data('count', buttonNext);
//                     }
//                 } else {
//                     $(document)
//                         .find('.jsCrmCalendarButtonPrev')
//                         .addClass('is-hidden');
//                     $(document)
//                         .find('.jsCrmCalendarButtonNext')
//                         .addClass('is-hidden');
//                 }
//                 $.each(arrData, function(key, data) {
//                     arrEmployees.push({
//                         key: key,
//                         label:
//                             '<div class="user user--small" data-id="' +
//                             data.userID +
//                             '"><div class="user__img">' +
//                             data.avatar +
//                             '</div><div class="user__name">' +
//                             data.name +
//                             '</div></div>',
//                     });
//                     if (typeof data.workFrom !== 'undefined') {
//                         var initDateFrom = data.workFrom;
//                         initDateFrom = initDateFrom[0].split('-');
//                         var initDateFrom3 = initDateFrom[2].split(' ');
//                         var initTimeFrom = initDateFrom3[1].split(':');
//                         var initDateTo = data.workTo;
//                         initDateTo = initDateTo[0].split('-');
//                         var initDateTo3 = initDateTo[2].split(' ');
//                         var initTimeTo = initDateTo3[1].split(':');
//                         scheduler.addMarkedTimespan({
//                             start_date: new Date(
//                                 initDateFrom[0],
//                                 initDateFrom[1] - 1,
//                                 initDateFrom3[0],
//                                 initTimeFrom[0],
//                                 initTimeFrom[1]
//                             ),
//                             end_date: new Date(
//                                 initDateTo[0],
//                                 initDateTo[1] - 1,
//                                 initDateTo3[0],
//                                 initTimeTo[0],
//                                 initTimeTo[1]
//                             ),
//                             css: 'dhx_time_reserved',
//                             sections: {
//                                 unit: key,
//                             },
//                         });
//                     }
//                     if (typeof data.workBreakFrom !== 'undefined') {
//                         var initDateBreakFrom = data.workBreakFrom;
//                         initDateBreakFrom = initDateBreakFrom[0].split('-');
//                         var initDateBreakFrom3 = initDateBreakFrom[2].split(
//                             ' '
//                         );
//                         var initTimeBreakFrom = initDateBreakFrom3[1].split(
//                             ':'
//                         );
//                         var initDateBreakTo = data.workBreakTo;
//                         initDateBreakTo = initDateBreakTo[0].split('-');
//                         var initDateBreakTo3 = initDateBreakTo[2].split(' ');
//                         var initTimeBreakTo = initDateBreakTo3[1].split(':');
//                         scheduler.addMarkedTimespan({
//                             start_date: new Date(
//                                 initDateBreakFrom[0],
//                                 initDateBreakFrom[1] - 1,
//                                 initDateBreakFrom3[0],
//                                 initTimeBreakFrom[0],
//                                 initTimeBreakFrom[1]
//                             ),
//                             end_date: new Date(
//                                 initDateBreakTo[0],
//                                 initDateBreakTo[1] - 1,
//                                 initDateBreakTo3[0],
//                                 initTimeBreakTo[0],
//                                 initTimeBreakTo[1]
//                             ),
//                             css: 'dhx_time_reserved',
//                             sections: {
//                                 unit: key,
//                             },
//                         });
//                     }
//                 });
//                 scheduler.createUnitsView({
//                     name: 'unit',
//                     property: 'section_id',
//                     list: arrEmployees,
//                 });
//             }
//             scheduler.config.xml_date = '%Y-%m-%d %H:%i';
//             scheduler.config.mark_now = true;
//             scheduler.config.multi_day = true;
//             scheduler.locale.labels.unit_tab = 'Unit';
//             scheduler.locale.labels.section_custom = 'Section';
//             scheduler.config.first_hour = minStartCalendarHour;
//             scheduler.config.time_step = 15;
//             scheduler.config.limit_time_select = true;
//             scheduler.config.dblclick_create = false;
//             scheduler.config.quick_info_detached = false;
//             scheduler.config.drag_create = false;
//             if (userRole === 'sm') {
//                 scheduler.config.drag_move = false;
//                 scheduler.config.drag_resize = false;
//             }
//             scheduler.locale.labels.section_evType = 'Event type';
//             if (view === 'week') {
//                 scheduler.xy.scale_height = 40;
//                 scheduler.xy.nav_height = 0;
//                 var initDate = currentDate.split('-');
//                 scheduler.init(
//                     'calendar',
//                     new Date(initDate[0], initDate[1] - 1, initDate[2]),
//                     'week'
//                 );
//                 if ($(window).width() <= 480) {
//                     this.parseWeekDays();
//                 }
//             } else {
//                 if ($(window).width() <= 480) {
//                     scheduler.xy.scale_height = 90;
//                 } else {
//                     scheduler.xy.scale_height = 80;
//                 }
//                 scheduler.xy.nav_height = 0;
//                 var initDate = currentDate.split('-');
//                 scheduler.init(
//                     'calendar',
//                     new Date(initDate[0], initDate[1] - 1, initDate[2]),
//                     'unit'
//                 );
//                 if ($(document).find('.dhx_scale_holder').length) {
//                     let dhxScale = $(document)
//                         .find('.dhx_scale_holder')
//                     dhxScale.addClass('jsCrmCalendarScaleHolder');
//                     if(document.documentElement.offsetWidth >= 480) {
//                         dhxScale.attr('data-move-block-target','request-desktop');
//                     } else {
//                         dhxScale.attr('data-move-block-target','request');
//                     }
//                 }
//                 if ($(document).find('.dhx_scale_holder_now').length) {
//                     let dhxScale = $(document)
//                         .find('.dhx_scale_holder_now')
//                     dhxScale.addClass('jsCrmCalendarScaleHolder');
//                     if(document.documentElement.offsetWidth >= 480) {
//                         dhxScale.attr('data-move-block-target','request-desktop');
//                     } else {
//                         dhxScale.attr('data-move-block-target','request');
//                     }
//                 }
//             }
//             if (userRole !== 'sm') {
//                 setTimeout(function() {
//                     var $request;
//                     var $requestEdit;
//                     if ($(window).width() > 480) {
//                         $request = 'request-desktop';
//                         $requestEdit = 'request-desktop-edit';
//                     } else {
//                         $request = 'request';
//                         $requestEdit = 'request';
//                     }
//                     var list = document.getElementsByClassName('dhx_cal_event');
//                     for (var i = 0; i < list.length; i++) {
//                         list[i].setAttribute(
//                             'data-move-block-target',
//                             $requestEdit
//                         );
//                     }
//                     var marked = document.getElementsByClassName(
//                         'dhx_marked_timespan'
//                     );
//                     for (var i = 0; i < marked.length; i++) {
//                         marked[i].setAttribute(
//                             'data-move-block-target',
//                             $request
//                         );
//                     }
//                 });
//                 // Edit bid
//                 this.editBid();
//                 // Drag and drop single bid
//                 this.dragBid();
//                 // Create a new bud (click on empty place)
//                 this.createBid();
//             }
//             // Put bids on calendar
//             this.generateBids(arrData);
//             // Show time on calendar in every block
//             if ($(window).width() > 480) {
//                 this.showTime();
//             }
//             // scheduler.hideQuickInfo();
//         }
//     };
//     calendar.parseWeekDays = function() {
//         var dateBlock = $('.dhx_scale_bar');
//         if (dateBlock.length) {
//             dateBlock.each(function() {
//                 var temp = $(this).attr('aria-label');
//                 temp = temp.split(',');
//                 var newDate = temp[1].split(' ');
//                 newDate =
//                     '<div style="font-size:19px; width: 40%;">' +
//                     newDate[2] +
//                     '</div><div style="font-size:11px;" >' +
//                     temp[0] +
//                     '</div>';
//                 $(this).html(newDate);
//             });
//         }
//     };
//     calendar.showTime = function() {
//         if (!scheduler._onMouseMove) {
//             var marked_date = null;
//             var marked = null;
//             var event_step = 15;
//             scheduler.attachEvent('onMouseMove', function(
//                 event_id,
//                 native_event
//             ) {
//                 var date = scheduler.getActionData(native_event).date;
//                 var fixed_date = new Date(date);
//                 scheduler.unmarkTimespan(marked);
//                 marked_date = fixed_date;
//                 var minutes = fixed_date.getMinutes();
//                 if (minutes == 0) {
//                     minutes = minutes + '0';
//                 }
//                 marked = scheduler.markTimespan({
//                     start_date: fixed_date,
//                     end_date: scheduler.date.add(
//                         fixed_date,
//                         event_step,
//                         'minute'
//                     ),
//                     css: 'c-calendar__timespan',
//                     html:
//                         '<span>' +
//                         fixed_date.getHours() +
//                         ':' +
//                         minutes +
//                         '</span>',
//                 });
//                 marked.forEach(item => {
//                     if(document.documentElement.offsetWidth >= 480) {
//                         item.setAttribute(
//                             'data-move-block-target',
//                             'request-desktop'
//                         );
//                     } else {
//                         item.setAttribute(
//                             'data-move-block-target',
//                             'request'
//                         );
//                     }
//                 });
//             });
//         }
//     };
//     calendar.createBid = function() {
//         if (!scheduler._onEmptyClick) {
//             scheduler._onEmptyClick = scheduler.attachEvent(
//                 'onEmptyClick',
//                 function(date, e) {
//                     if ($('.jsCrmCalendarWeekView').hasClass('is-checked')) {
//                         var masterID = $('.jsCrmCalendarEmployeesSelect').val();
//                     } else {
//                         var clickBlock = $(e.target);
//                         var index = clickBlock
//                             .closest('.jsCrmCalendarScaleHolder')
//                             .index();
//                         var userBlock = $('.dhx_scale_bar').eq(index);
//                         var masterID = userBlock
//                             .find('.user--small')
//                             .data('id');
//                     }
//                     if ($(window).width() > 480) {
//                         var addressID = $(
//                             '.jsCrmCalendarAddressesSelect'
//                         ).val();
//                     } else {
//                         var addressID = $(
//                             '.jsCrmCalendarAddressesSelectMobile'
//                         ).val();
//                     }
//                     if ($(window).width() > 768) {
//                         $.ajax({
//                             method: 'POST',
//                             url: '/ajaxCrmBidCreateNewBlock',
//                             data: {
//                                 masterID: masterID,
//                                 addressID: addressID,
//                                 date: calendar.getTimeStart(date),
//                                 _token: token,
//                             },
//                         }).done(function(response) {
//                             if (response.success === true) {
//                                 ajaxCrmInsertContent(response.html, e, 'move');
//                                 setTimeout(function() {
//                                     BB.Core.Component.initTab();
//                                     BB.Core.Select.init();
//                                     BB.Crm.Module.Aplication.init();
//                                     BB.Core.Component.initTab();
//                                     selectBidNewDay(date);
//                                     BB.Core.Component.initFieldEdit();
//                                 }, 300);
//                                 $('.aplication-item__counter')
//                                     .first()
//                                     .text('1');
//                                 updateBidSum();
//                             }
//                         });
//                     } else {
//                         var data = null;
//                         var crmCalendarInputCalendarTop = $(
//                             '.jsCrmCalendarInputCalendarTop'
//                         );
//                         if (crmCalendarInputCalendarTop.length > 0) {
//                             data = crmCalendarInputCalendarTop.val();
//                         }
//                         $.ajax({
//                             method: 'POST',
//                             url: '/ajaxCrmBidCreateNewBlockMobile',
//                             data: {
//                                 masterID: masterID,
//                                 addressID: addressID,
//                                 time: calendar.getTimeStart(date),
//                                 date: data,
//                                 _token: token,
//                             },
//                         }).done(function(response) {
//                             if (response.success === true) {
//                                 console.log(e.target);
//                                 ajaxCrmInsertContent(response.html, e, 'move');
//                                 setTimeout(function() {
//                                     BB.Core.Component.initTab();
//                                     BB.Core.Select.init();
//                                     BB.Crm.Module.Aplication.init();
//                                     BB.Core.Component.initTab();
//                                     selectBidNewDay(date);
//                                     // $(document).find('[data-move-block]').addClass(OPEN_CLASS);
//                                 }, 100);
//                                 updateMobileBidSum();
//                             }
//                         });
//                     }
//                 }
//             );
//         }
//     };
//     calendar.generateBids = function(arrData) {
//         // Clear old data from calendar
//         scheduler.clearAll();
//         // Add bids to calendar
//         var arrBids = [];
//         $.each(arrData, function(key, userData) {
//             if (typeof userData.bids !== 'undefined') {
//                 $.each(userData.bids, function(bidKey, bidData) {
//                     var i = 0;
//                     arrBids.push({
//                         id: i,
//                         start_date: bidData.date + ' ' + bidData.timeFrom,
//                         end_date: bidData.date + ' ' + bidData.timeTo,
//                         text: bidData.service,
//                         section_id: key,
//                         class: bidData.class,
//                         masterName: bidData.masterName,
//                         clientName: bidData.clientName,
//                         clientPhone: bidData.clientPhone,
//                         clientID: bidData.clientID,
//                         comment: bidData.comment,
//                         price: bidData.price,
//                         statusTitle: bidData.statusTitle,
//                         bidID: bidData.bidID,
//                     });
//                     i++;
//                     scheduler.templates.event_class = function(
//                         start,
//                         end,
//                         event
//                     ) {
//                         return event.class;
//                     };
//                     if ($(window).width() >= 768) {
//                         calendar.tooltip();
//                     }
//                 });
//             }
//         });
//         scheduler.parse(arrBids, 'json');
//     };
//     calendar.dragBid = function() {
//         if (!scheduler._onDragEnd) {
//             scheduler._onDragEnd = scheduler.attachEvent('onDragEnd', function(
//                 id,
//                 as,
//                 ff
//             ) {
//                 var newPosition = scheduler.getEvent(id);
//                 var arrData = calendar.getParams(newPosition);
//                 var eventBlock = $('div[event_id=' + id + ']');
//                 var eventBlockIndex = eventBlock.parent().index();
//                 var userBlock = $('.dhx_scale_bar').eq(eventBlockIndex);
//                 var userID = userBlock.find('.user--small').data('id');
//                 $.ajax({
//                     method: 'POST',
//                     url: '/ajaxCrmCalendarDragAndDropSingleBid',
//                     data: {
//                         bidID: newPosition.bidID,
//                         startDate: arrData['startDate'],
//                         endDate: arrData['endDate'],
//                         date: arrData['date'],
//                         dateTime: arrData['dateTime'],
//                         userID: userID,
//                         _token: token,
//                     },
//                 }).done(function(response) {
//                     if (response.success === true) {
//                         // pushUp({
//                         //     text: 'Заявка обновлена',
//                         //     status: 'success'
//                         // });
//                     }
//                 });
//             });
//         }
//     };
//     calendar.editBid = function() {
//         if (!scheduler._onClick) {
//             scheduler._onClick = scheduler.attachEvent('onClick', function(
//                 id,
//                 e
//             ) {
//                 $('.dhx_cal_quick_info').remove();
//                 var event = scheduler.getEvent(id);
//                 var bidID = event.bidID;
//                 var clientID = event.clientID;
//                 if ($(window).width() > 768) {
//                     $.ajax({
//                         method: 'POST',
//                         url: '/ajaxCrmBidOpenBlockEdit',
//                         data: {
//                             bidID: bidID,
//                             clientID: clientID,
//                             _token: token,
//                         },
//                     }).done(function(response) {
//                         if (response.success === true) {
//                             ajaxCrmInsertContent(response.html, e, 'move');
//                             BB.Core.Select.init();
//                             BB.Core.Component.initTab();
//                             BB.Core.Component.initTab();
//                             selectBidNewDay();
//                         }
//                     });
//                 } else {
//                     var date = null;
//                     var crmCalendarInputCalendarTop = $(
//                         '.jsCrmCalendarInputCalendarTop'
//                     );
//                     if (crmCalendarInputCalendarTop.length) {
//                         date = crmCalendarInputCalendarTop.val();
//                     }
//                     $.ajax({
//                         method: 'POST',
//                         url: '/ajaxCrmBidCreateNewBlockMobile',
//                         data: {
//                             date: date,
//                             bid: bidID,
//                             _token: token,
//                         },
//                     }).done(function(response) {
//                         if (response.success === true) {
//                             ajaxCrmInsertContent(response.html, e, 'move');
//                             setTimeout(function() {
//                                 BB.Core.Select.init();
//                                 BB.Core.Component.initTab();
//                                 selectBidNewDay(date);
//                                 // $(document).find('[data-move-block]').addClass(OPEN_CLASS);
//                             }, 100);
//                             updateMobileBidSum();
//                         }
//                     });
//                 }
//             });
//         }
//     };
//     calendar.tooltip = function() {
//         var tooltip = scheduler.dhtmlXTooltip;
//         tooltip.config.className = 'dhtmlXTooltip tooltip c-calendar-tooltip';
//         var format = scheduler.date.date_to_str('%H:%i');
//         scheduler.templates.tooltip_text = function(start, end, event) {
//             var clientPhone = false;
//             var clientComment = false;
//             if (event.clientPhone !== 'undefined') {
//                 clientPhone = event.clientPhone;
//             }
//             if (event.comment !== 'undefined' || event.comment !== null) {
//                 clientComment = event.comment;
//             }
//             var html =
//                 '<span class="c-calendar-tooltip__header ' +
//                 event.class +
//                 '">' +
//                 event.statusTitle +
//                 '</span>';
//             html +=
//                 '<div class="c-calendar-tooltip__body ' + event.class + '">';
//             html +=
//                 '<span class="c-calendar-tooltip__user">' +
//                 event.clientName +
//                 '</span>';
//             if (clientPhone) {
//                 html +=
//                     '<span class="c-calendar-tooltip__phone">' +
//                     clientPhone +
//                     '</span>';
//             }
//             html +=
//                 '<span class="c-calendar-tooltip__service">' +
//                 event.text +
//                 '</span>';
//             html +=
//                 '<span class="c-calendar-tooltip__time">' +
//                 format(start) +
//                 ' - ' +
//                 format(end) +
//                 '</span>';
//             html +=
//                 '<span class="c-calendar-tooltip__price">' +
//                 event.price +
//                 ' <i class="far fa-ruble-sign"></i></span>';
//             html +=
//                 '<span class="c-calendar-tooltip__master">' +
//                 event.masterName +
//                 '</span>';
//             if (clientComment) {
//                 html +=
//                     '<span class="c-calendar-tooltip__comment">Комментарий: ' +
//                     clientComment +
//                     '</span>';
//             }
//             html += '</div>';
//             return html;
//         };
//     };
//     calendar.timeStep = function() {
//         var step = 15;
//         var format = scheduler.date.date_to_str('%H:%i');
//         scheduler.config.hour_size_px = (60 / step) * 22;
//         scheduler.templates.hour_scale = function(date) {
//             var html = '';
//             for (var i = 0; i < 60 / step; i++) {
//                 html +=
//                     "<div style='height:22px;line-height:22px;'>" +
//                     format(date) +
//                     '</div>';
//                 date = scheduler.date.add(date, step, 'minute');
//             }
//             return html;
//         };
//     };
//     calendar.heights = function() {
//         var height = $(document).height();
//         var headerHeight = $('.header').outerHeight(true);
//         var topLineHeight = $('.calendar__top-line').outerHeight(true);
//         let calcCalendarHeith = height - (headerHeight + topLineHeight);
//         $('.c-calendar').css('height', calcCalendarHeith);
//     };
//     calendar.getParams = function(data) {
//         var arrData = [];
//         var minutes = new Date(data.start_date).getMinutes();
//         if (minutes == 0 || minutes == 5) {
//             minutes = '0' + minutes;
//         }
//         arrData['startDate'] =
//             new Date(data.start_date).getHours() + ':' + minutes;
//         minutes = new Date(data.end_date).getMinutes();
//         if (minutes == 0 || minutes == 5) {
//             minutes = '0' + minutes;
//         }
//         arrData['endDate'] = new Date(data.end_date).getHours() + ':' + minutes;
//         var day = new Date(data.end_date).getDate();
//         if (
//             day == 1 ||
//             day == 2 ||
//             day == 3 ||
//             day == 4 ||
//             day == 5 ||
//             day == 6 ||
//             day == 7 ||
//             day == 8 ||
//             day == 9
//         ) {
//             day = '0' + day;
//         }
//         arrData['date'] =
//             new Date(data.end_date).getFullYear() +
//             '-' +
//             (new Date(data.end_date).getMonth() + 1) +
//             '-' +
//             day;
//         arrData['dateTime'] = arrData['date'] + ' ' + arrData['startDate'];
//         return arrData;
//     };
//     calendar.getTimeStart = function(date) {
//         var minutes = new Date(date).getMinutes();
//         if (minutes == 0 || minutes == 5) {
//             minutes = '0' + minutes;
//         }
//         var hours = new Date(date).getHours();
//         if (
//             hours == 1 ||
//             hours == 2 ||
//             hours == 3 ||
//             hours == 4 ||
//             hours == 5 ||
//             hours == 6 ||
//             hours == 7 ||
//             hours == 8 ||
//             hours == 9
//         ) {
//             hours = '0' + hours;
//         }
//         return hours + ':' + minutes;
//     };
//     return calendar;
// })();


function addClientsToContent(countItems, alert, endBlock) {
  var el;

  if ($('.jsCrmClientsPopup').length) {
    el = $('.jsCrmClientsPopup').find('.l-slide-block__inner');
  } else {
    el = $(document);
  }

  el.on('scroll', function () {
    if (!checkVisibilityCrm(endBlock)) {
      alert = 0;
    }

    if (alert === 0) {
      var allCountMasters = $(document).find('.jsCrmClientsListTableTitlesBlock').attr('data-count');

      if (checkVisibilityCrm(endBlock) && allCountMasters > 15) {
        alert = 1;
        ajaxAddContentClient(countItems, allCountMasters);
      } else {
        alert = 0;
      }
    }
  });

  if ($(document).find('.jsCrmBidClientsListMobile').length) {
    var el = scrollAddContent('.jsCrmBidClientsListMobile');
    $(el).scroll(function () {
      if (!checkVisibilityCrmMobile(endBlock)) {
        alert = 0;
      }

      if (alert === 0) {
        var allCountMasters = $(document).find('.jsCrmBidClientsListMobile').attr('data-count');

        if (checkVisibilityCrmMobile(endBlock) && allCountMasters > 15) {
          alert = 1;
          ajaxAddContentClientMobile(countItems, allCountMasters);
        } else {
          alert = 0;
        }
      }
    });
  }
}

function addClientsToContentBidsNew(countItems, alert, endBlock) {
  $('.jsCrmClientsListTableTitlesBlock').scroll(function () {
    if (checkVisibilityCrmBidNew(endBlock)) {
      alert = 0;
    }

    if (alert === 0) {
      var allCountMasters = $(document).find('.jsCrmClientsListTableTitlesBlock').attr('data-count');

      if (allCountMasters > 15) {
        alert = 1;
        ajaxAddContentClientBidNew(countItems, allCountMasters);
      } else {
        alert = 0;
      }
    }
  });
}

function bidsForClientsBlock(allCount) {
  var endBlock = $('#jsCrmClientAddBids');
  addBidsToContent(endBlock, allCount);
}

function addBidsToContent(endBlock, allCountMasters) {
  var skip = $('.jsCrmBidClientCount').length;

  if (alertBids === 0) {
    if (checkVisibilityCrmClientBids(endBlock) && allCountMasters > skip) {
      alertBids = 1;
      ajaxAddBidsToContent(allCountMasters);
    } else {
      alertBids = 0;
    }
  }
}

function ajaxAddBidsToContent(allCountMasters) {
  if ($('#jsCrmClientAddBids').length) {
    var dateFrom = $('.jsCrmClientFromDateBids').val(),
        dateBefore = $('.jsCrmClienBeforeDateBids').val();
    $.ajax({
      method: 'POST',
      url: '/ajaxAddClientBidsToContent',
      data: {
        clientID: $('.jsCrmClientsPopupEditButton').attr('data-id'),
        dateFrom: dateFrom,
        dateBefore: dateBefore,
        skip: $('.jsCrmBidClientCount').length,
        allCountMasters: allCountMasters,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        var html = response.html;
        $('#jsCrmClientAddBids').before(html);

        if (response.alert === false) {
          var alertBids = 1;
        } else {
          var alertBids = 0;
        }
      }
    });
  } else {
    $('.js-loader__scroll').css('display', 'none');
    var alertBids = 1;
  }
}

function ajaxAddContentClient(countItems, allCountMasters) {
  $('.jsCrmClientsClientItem').each(function () {
    countItems++;
  });
  var countUsers = $('.js-catalog-count-masters').data('count');
  var name = $(document).find('.jsCrmClientsSearchNameInput').val();
  var clientType = $(document).find('.jsCrmClientsSearchTypeSelect ').val();

  if (countItems !== countUsers && $('#jsCrmClientsAddContent').length) {
    $.ajax({
      method: 'POST',
      url: '/ajaxAddClient',
      data: {
        categoryID: $('.jsCrmClientsSearchTypeSelect').val(),
        skip: countItems,
        name: name,
        clientType: clientType,
        allCountMasters: allCountMasters,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        $('#jsCrmClientsAddContent').before(response.html);
        var alert = 0;
      }
    });
  } else {
    $('.js-loader__scroll').css('display', 'none');
  }
}

function ajaxAddContentClientMobile(countItems, allCountMasters) {
  $('.jsCrmBidClientOpenMobile').each(function () {
    countItems++;
  });
  var countUsers = $('.jsCrmBidClientsListMobile').attr('data-count');
  var name = $(document).find('.jsCrmBidSearchNameInputMobile').val();

  if (countItems !== countUsers && $('#jsCrmClientsAddContent').length) {
    $.ajax({
      method: 'POST',
      url: '/ajaxAddClientMobile',
      data: {
        skip: countItems,
        name: name,
        allCountMasters: allCountMasters,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        $('#jsCrmClientsAddContent').before(response.html);
        var alert = 0;
      }
    });
  } else {
    $('.js-loader__scroll').css('display', 'none');
  }
}

function ajaxAddContentClientBidNew(countItems, allCountMasters) {
  $('.jsCrmClientsClientItemBidNew').each(function () {
    countItems++;
  });

  if ($('#jsCrmClientsAddContent').length) {
    $.ajax({
      method: 'POST',
      url: '/ajaxAddClientBidNew',
      data: {
        skip: countItems,
        allCountMasters: allCountMasters,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        var html = response.html;
        $('.jsCrmClientsListTableTitlesBlock').append(html);
        $('.jsCrmClientsClientItemBidNew').addClass('animated fadeInLeft').css('display', 'block');
        var alert = 0;
      }
    });
  } else {
    $('.js-loader__scroll').css('display', 'none');
  }
} // function crmBidDisabledFilters() {
//     $('.jsCrmBidsStatusSelect').prop('disabled', true);
//     $('.jsCrmBidsSearchTypeAdminSelect').prop('disabled', true);
//     $('.jsCrmBidsSearchTypeMastersSelect').prop('disabled', true);
//     $('.jsCrmBidsSearchTypeSalonSelect').prop('disabled', true);
//     $('.crmBidsSearchData').prop('disabled', true);
// }
// function crmBidActiveFilters() {
//     $('.jsCrmBidsStatusSelect').prop('disabled', false);
//     $('.jsCrmBidsSearchTypeAdminSelect').prop('disabled', false);
//     $('.jsCrmBidsSearchTypeMastersSelect').prop('disabled', false);
//     $('.jsCrmBidsSearchTypeSalonSelect').prop('disabled', false);
//     $('.crmBidsSearchData').prop('disabled', false);
// }


function checkVisibilityCrm(el) {
  var dTop = $(window).scrollTop(),
      dBot = dTop + $(window).height(),
      elTop = $(el).offset().top - 350;
  return elTop <= dBot && elTop >= dTop;
}

function checkVisibilityCrmMobile(el) {
  var dTop = $(document).find('.jsCrmBidClientsListMobile').scrollTop(),
      dBot = dTop + $(document).find('.jsCrmBidClientsListMobile').height(),
      elTop = $(el).offset().top - 10;
  return elTop <= dBot && elTop >= dTop;
}

function checkVisibilityCrmClientBids(el) {
  var dBot = $(document).find('.jsCrmClientBidsContent').height() + 450,
      elTop = $(el).position().top;
  return elTop <= dBot;
}

function checkVisibilityCrmMobileEl(el, block) {
  var dTop = block.scrollTop(),
      dBot = dTop + block.height(),
      elTop = $(el).offset().top - 10; // console.log(((elTop <= dBot) && (elTop >= dTop)));

  return elTop <= dBot && elTop >= dTop;
}

function validateBidsSaveMobile(_this) {
  var errors = 0;
  var crmBidNewCard = $('.jsCrmBidServiceBlockEditMobile');
  var crmBidIsOnlineMobile = $('.jsCrmBidServiceBlockOpenMobileOnline');
  var crmBidServiceBlockOpenMobile = $('.jsCrmBidServiceBlockOpenMobile');

  if ($('.jsCrmBidMobileClientTrue ').length < 1) {
    $('.jsCrmBidSelectClientAppend').addClass('is-error').parent().addClass('is-error');
    errors++;
  } else {
    $('.jsCrmBidMobileClientTrue ').removeClass('is-error');
  }

  if (crmBidIsOnlineMobile.length) {
    crmBidIsOnlineMobile.addClass('is-error');
    errors++;
  } else {
    if (crmBidNewCard.length < 1) {
      crmBidServiceBlockOpenMobile.addClass('is-error');
      errors++;
    } else {
      crmBidServiceBlockOpenMobile.removeClass('is-error');
    }
  }

  if (errors) {
    buttonOn(_this);
    $(document).find('.jsCrmBidMobileBlockRequest').addClass('is-invalid');
    return false;
  } else {
    $(document).find('.jsCrmBidMobileBlockRequest').removeClass('is-invalid');
    return true;
  }
}

function updateDataBids() {
  var $btn = $(document).find('.jsCrmBidMoveBlockShowEdit');
  var $btnOnline = $(document).find('.jsCrmBidMoveOnlineBlockShowEdit');
  var $btnAdd = $(document).find('.jsCrmBidMoveBlockShow');
  $btn.each(function () {
    updateAttrBidBlock($(this));
  });
  $btnOnline.each(function () {
    updateAttrBidBlock($(this));
  });
  $btnAdd.each(function () {
    updateAttrBidBlock($(this));
  });
}

function updateAttrBidBlock($this) {
  if ($(window).width() <= 480) {
    $this.attr('data-move-block-target', 'request');

    if ($this.hasClass('jsCrmBidMoveBlockShow')) {
      $this.removeClass('jsCrmBidMoveBlockShow');
      $this.addClass('jsCrmBidMoveBlockShowMobile');
    }
  }
}

function checkVisibilityCrmBidNew(el) {
  var scroll = $('.jsCrmClientsListTableTitlesBlock').scrollTop(),
      heightBlockAndScroll = scroll + $('.jsCrmClientsListTableTitlesBlock').height(),
      heightBlock = $(el).position().prev();
  return heightBlock <= heightBlockAndScroll && heightBlock >= scroll;
} // Close the slide block by name


function closeSlideBlock(name) {
  $(name).removeClass(OPEN_CLASS); // SlideBlock.close();

  setTimeout(function () {
    $('.jsCrmMainPopupBlock').empty();
  }, 400);
  $('body').removeClass(FIXED_CLASS).css('position', 'inherit');
}

function crmBlockClose(e) {
  $(e).closest('.jsCrmBlock').removeClass(OPEN_CLASS);
  $('html').removeClass('is-fixed no-touch-events');
  setTimeout(function () {
    $(e).closest('.jsCrmBlock').remove();
  }, 500);
} // Cleaning the input field


function clearInput(name) {
  $(name).keydown().val('');
} // Cropper init


function cropperCall(name) {
  var image2 = document.getElementById(name);
  BB.define('Modules.CropImage');
  BB.Modules.CropImage = new Cropper(image2, {
    aspectRatio: 1,
    crop: function crop(event) {
      getCropParams(event);
    }
  });
}

function cropperReInit(name) {
  var image2 = document.getElementById(name);
  createCropParams();
  BB.Modules.CropImage.destroy();
  BB.Modules.CropImage = new Cropper(image2, {
    aspectRatio: 1,
    data: {
      x: BB.Modules.CropParams.x,
      y: BB.Modules.CropParams.y,
      width: BB.Modules.CropParams.width,
      height: BB.Modules.CropParams.height
    },
    crop: function crop(event) {
      getCropParams(event);
    }
  });
}

function createCropParams() {
  BB.define('Modules.CropParams');
  BB.Modules.CropParams = {
    x: BB.Modules.CropImage.getCropBoxData().top,
    y: BB.Modules.CropImage.getCropBoxData().left,
    width: BB.Modules.CropImage.getCropBoxData().width,
    height: BB.Modules.CropImage.getCropBoxData().height
  };
}

function getCropParams(event) {
  cropParams['x'] = event.detail.x;
  cropParams['y'] = event.detail.y;
  cropParams['width'] = event.detail.width;
  cropParams['height'] = event.detail.height;
} // Clear block cropper for img


function clearImgAtCropper() {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var crmAddAvatar = $('.jsCrmAddAvatar'),
      crmUploadInner = $('.jsCrmUploadInner'),
      img = $(document).find('.js-upload-avatar__cropper');

  if (display === true) {
    crmAddAvatar.addClass('is-hidden');
    crmUploadInner.removeClass('is-hidden');
    $(document).find('.js-upload-avatar__block').show();
  } else {
    crmAddAvatar.removeClass('is-hidden');
    crmUploadInner.addClass('is-hidden');
    $(document).find('.js-upload-avatar__block').hide();
  }

  img.attr('src', src);
  img.attr('data-name', name);
} // Check on the number of masters


function checkNumberMasters(mastersCount, schedule) {
  if (schedule == true) {
    $('.jsCrmCalendarInitBlock').addClass('is-hidden');
    $('.jsCrmCalendarEmptyScheduleBlock').removeClass('is-hidden');
  } else {
    if (mastersCount < 1) {
      $('.jsCrmCalendarEmptyBlock').removeClass('is-hidden');
      $('.jsCrmCalendarInitBlock').addClass('is-hidden');
      $('.jsCrmCalendarEmptyScheduleBlock').addClass('is-hidden');
    } else {
      $('.jsCrmCalendarEmptyBlock').addClass('is-hidden');
      $('.jsCrmCalendarInitBlock').removeClass('is-hidden');
      $('.jsCrmCalendarEmptyScheduleBlock').addClass('is-hidden');
    }
  }
} // Max length email
// function maxLenForInputEmail() {
//     return 50;
// }
// Click checkbox


function disableCategory() {
  var disabledCategory = '.js-disable-category';
  $(document).on('click', disabledCategory, function () {
    if ($(this).hasClass('is-checked')) {
      $(this).removeClass('is-checked');
    } else {
      $(this).addClass('is-checked');
    }
  });
}

disableCategory(); // Max length name user

function maxLenForInputUser() {
  return 50;
} // Max length name salon


function maxLenForInputName() {
  return 30;
} // Max length name services


function maxLenForInputServiceName() {
  return 45;
} // Max length email


function maxLenForInputEmail() {
  return 75;
} // Max length about 500


function maxLenForTextArea() {
  return 500;
} // remove mobile menu for page more


function removeMobileTopMenu() {
  var crmWrapperBlock = $('.jsCrmMainWrapperBlock');
  var $menu = $(document).find('.mobile-nav').hasClass('pageMenu');

  if ($menu) {
    crmWrapperBlock.addClass('page-menu');
  } else {
    crmWrapperBlock.removeClass('page-menu');
  }
} // Max length for price 6


function maxLenForPrice() {
  return 6;
}

function openOverlay() {// $('html').addClass(FIXED_CLASS);
  // $overlay.addClass(VISIBLE_CLASS);
}

function closeOverlay() {
  $('html').removeClass(FIXED_CLASS);
  $overlay.removeClass(VISIBLE_CLASS);
} // Field check


function isInvalid(e) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (action === false) {
    $(e).closest('.bb-input').addClass('is-invalid');
    $(e).closest('.bb-input').find('.js-bb-input-tip').removeAttr('style');

    if (text !== false) {
      $(e).closest('.bb-input').find('.bb-input-tip__text').text(text);
    }
  } else {
    $(e).closest('.bb-input').removeClass('is-invalid');
  }
}

function maximumNumberOfSymbols(input) {
  var maxLenght = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var countText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var _this = $(input);

  if (_this.val().length > maxLenght) {
    _this.val(_this.val().substr(0, maxLenght));
  }

  if (countText === true) {
    var number = _this.val().length;

    number = maxLenght - number;
    $(countText).html(+number);
  }
}

function onlyNumberInput(e) {
  $(e).val(function (index, value) {
    return value.replace(/[^0-9\.]/g, '');
  });
} // var CrmServices2 = (function() {
//     var service = {},
//         headerTitle = void 0,
//         pickerOpen = false;
//     service.init = function() {
//         this.sorting();
//         this.clickEvents();
//         this.toggle();
//     };
//     //Сотировка услуг
//     service.sorting = function() {
//         var sortableList = document.querySelectorAll('.js-services-sortable');
//         if (sortableList) {
//             for (var i = 0; i < sortableList.length; i++) {
//                 Sortable.create(sortableList[i], {
//                     group: { name: 'nested', put: false },
//                     handle: '.icon--drag',
//                     animation: 150,
//                     fallbackOnBody: true,
//                     swapThreshold: 0.65,
//                     store: {
//                         set: function(sortable) {
//                             var order = sortable.toArray();
//                             if (order[0].split('-').length > 1) {
//                                 // id для услуг имеют вид customService-<id> либо catService-<id>,
//                                 $.ajax({
//                                     // а для категорий просто <id>, поэтому разбиение строки по "-"
//                                     url: '/ajaxSortableCategoryServices', // в одном случае будет содержать два элемента, в другом - один
//                                     method: 'POST', // Используя это, можно отправлять запросы по разным путям в зависимости
//                                     data: {
//                                         // от id
//                                         _token: token,
//                                         arrData: order,
//                                     },
//                                 });
//                             } else {
//                                 $.ajax({
//                                     url: '/ajaxSortableServiceCategories',
//                                     method: 'POST',
//                                     data: {
//                                         _token: token,
//                                         arrData: order,
//                                     },
//                                 });
//                             }
//                         },
//                     },
//                 });
//             }
//         }
//     };
//     service.clickEvents = function() {
//         $(document)
//             .find('.js-services-item')
//             .each(function() {
//                 var $title = $(this).find('.item-services__title');
//                 var $iconDrag = $(this).find('.icon--drag');
//                 $title.on('click', function(e) {
//                     e.stopPropagation();
//                 });
//                 $iconDrag.on('click', function(e) {
//                     e.stopPropagation();
//                 });
//             });
//     };
//     //Переключалка с дефолтной услуги на комбо
//     service.toggle = function() {
//         $(document)
//             .find('[data-move-block]')
//             .each(function() {
//                 var $serviceToggleDefault = $(this).find(
//                     '.view-toggle__item--default'
//                 );
//                 var $serviceToggleCombo = $(this).find(
//                     '.view-toggle__item--combo'
//                 );
//                 var $serviceBoxDefault = $(this).find('.js-service--default');
//                 var $serviceBoxCombo = $(this)
//                     .find('.js-service--combo')
//                     .hide();
//                 var $validateMessage = $(this)
//                     .find('.validate-message')
//                     .hide();
//                 $serviceToggleDefault.on('click', function() {
//                     $serviceBoxDefault.show();
//                     $serviceBoxCombo.hide();
//                     $validateMessage.hide();
//                 });
//                 $serviceToggleCombo.on('click', function() {
//                     $serviceBoxCombo.show();
//                     $validateMessage.show();
//                     $serviceBoxDefault.hide();
//                 });
//             });
//     };
//     //Переключение на выбор категории
//     service.pickerToggle = function() {
//         var $parent = $(this).closest('[data-move-block]');
//         var $btnBack = $parent.find('.move-block__back');
//         var $btnClose = $parent.find('.move-block__close');
//         var $titleHeader = $parent.find('.move-block__header_title');
//         var itemTitle = $(this).data('title');
//         if ($parent.data('move-block')) {
//             if (!pickerOpen) {
//                 $parent.addClass('has-category');
//                 $btnBack.show();
//                 $btnClose.hide();
//                 //Если категория не выбрана то запоминаем заголовок
//                 headerTitle = $titleHeader.text();
//                 if (itemTitle !== 'undefined') {
//                     $titleHeader.text(itemTitle);
//                 }
//                 pickerOpen = true;
//             } else {
//                 $parent.removeClass('has-category');
//                 $btnBack.hide();
//                 $btnClose.show();
//                 $titleHeader.text(headerTitle);
//                 pickerOpen = false;
//             }
//         }
//     };
//     return service;
// })();


function addInstagramPhoto() {
  var jsInstagramMore = $(document).find('.jsInstagramMoreScroll');

  if (jsInstagramMore.length) {
    var CurrentScroll = 0;
    jsInstagramMore.on('scroll', function () {
      var endBlock = $(document).find('.jsCrmInstagramAddPhoto');
      var NextScroll = $(this).scrollTop();
      var alert = 0;

      if (!checkVisibilityCrmMobilePhoto(endBlock)) {
        alert = 0;
      }

      if (alert === 0) {
        if (checkVisibilityCrmMobilePhoto(endBlock)) {
          alert = 1;

          if (NextScroll > CurrentScroll) {
            ajaxAddPhotoInstagram();
          } else {
            console.log('up');
          }

          CurrentScroll = NextScroll; //Updates current scroll position
          // подгрузка плохо работает, надо думать почему ajax срабатывает подрят несколь раз

          endBlock.removeClass('jsCrmInstagramAddPhoto');
          setTimeout(function () {
            endBlock.addClass('jsCrmInstagramAddPhoto');
          }, 2000);
        } else {
          alert = 0;
        }
      }
    });
  }
}

function checkVisibilityCrmMobilePhoto(el) {
  var dTop = $(document).find('.jsInstagramMore').scrollTop(),
      dBot = dTop + $(document).find('.jsInstagramMore').height(),
      elTop = $(el).offset().top - 10;
  return elTop <= dBot && elTop >= dTop;
}

function ajaxAddPhotoInstagram() {
  var maxID = $(document).find('.jsMaxID').last().data('max-id');
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmMoreSaveAddPhotoInstagramMoreScroll',
    data: {
      maxID: maxID,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      $('.jsCrmInstBeforePhoto').before(response.html);
      BB.Core.Component.initCheckBox();
      var alert = 0;
    }
  });
}

function closeAndRemoveBlock(event) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'slide';
  var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (type === 'slide') {
    if (all) {
      BB.Component.SlideBlock.closeAll(event);
    } else {
      BB.Component.SlideBlock.close(event, function () {
        var closestBlock = event.target.closest('.l-slide-block');

        if (closestBlock) {
          closestBlock.remove();
        }
      });
    }
  } else if (type === 'move') {
    if (all) {
      BB.Component.MoveBlock.closeAll(event);
    } else {
      console.log('--- Closing MoveBlock', event.target);
      console.log('--- Closest MoveBlock is', event.target.closest('.move-block'));
      BB.Component.MoveBlock.close(event, function () {
        var closestBlock = event.target.closest('.move-block');

        if (closestBlock) {
          closestBlock.remove();
        }
      });
    }
  }
}

function ajaxCrmInsertContent(html) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'slide';
  var block = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null; // console.log(html, event, type, block);
  // Может быть ситуация когда нет html но нужно сделать иницилизацию счетчика

  if (html !== null) {
    if (block == null) {
      // debugger;
      $(document).find('.jsCrmMainPopupBlock').append(html);
    } else {
      $(document).find(block).html(html);
    }
  } // если нет события, не делаем иницилизацию счетчика (для модалок)


  if (event == null) {
    return false;
  } // Разделение блоков на слайд и мув


  if (type === 'slide') {
    var $el = $('.l-slide-block');
    $el.find('.jsCrmSlideBlockClose').off('click');
    $el.find('.jsCrmSlideBlockClose').on('click', function (event) {
      closeAndRemoveBlock(event, 'slide');
    });
    /**
     * В ситуациях, когда нужно закрыть все блоки
     */

    var closeAllBtn = document.querySelector('.jsCrmCloseAllSlideBlocks');

    if (closeAllBtn) {
      closeAllBtn.addEventListener('click', function (event) {
        closeAndRemoveBlock(event, 'slide', true);
      });
    }

    setTimeout(function () {
      console.log('--- SlideBlock init');
      BB.Component.SlideBlock.init($el[0]);
      BB.Component.SlideBlock.open(event);
    }, 100);
  } else if (type === 'move') {
    var $el = $('.move-block');
    $el.find('.jsCrmMoveBlockClose').off('click').on('click', function (event) {
      closeAndRemoveBlock(event, 'move');
    });
    /**
     * В ситуациях, когда нужно закрыть все блоки
     */

    var _closeAllBtn = document.querySelector('.jsCrmCloseAllMoveBlocks');

    if (_closeAllBtn) {
      _closeAllBtn.addEventListener('click', function (event) {
        closeAndRemoveBlock(event, 'move', true);
      });
    }

    setTimeout(function () {
      console.log('--- MoveBlock init');
      BB.Component.MoveBlock.init($el[0]);
      BB.Component.MoveBlock.open(event);
    }, 300);
  }
}

$(document).on('click', '.jsCrmEditServiceTab', function (event) {
  var target = $(event.target).data('move-block-target');

  if (!target) {
    target = $(event.target).parent().data('move-block-target');
  }

  if ($(window).width() <= 480) {
    BB.Component.MoveBlock.init(document.querySelector("[data-move-block=\"".concat(target, "\"]")));
  }
});

function enabledButton(button, e) {
  e.target.closest(button).removeAttribute('inert', '');
  e.target.closest(button).removeAttribute('tabindex', '-1');
}

function emptyPopupBlock(el) {
  el.empty();
}

function removeNavMenu() {
  var crmHeaderSubBlock = $(document).find('.jsSubNav');
  var crmHeaderSwiperNavBlock = $(document).find('.js-swiper-nav');
  var crmMainWrapperBlock = $(document).find('.jsCrmMainWrapperBlock');

  if (!crmHeaderSwiperNavBlock.length) {
    crmHeaderSubBlock.remove();
    crmMainWrapperBlock.removeClass('has-subnav header--hidden');
  }
} // removeNavMenu();


function mobileBidsEmpty() {
  var crmBidsEmpty = $(document).find('.jsCrmBidsEmpty'),
      crmBidCountItems = $(document).find('.jsCrmBidCountItems');

  if ($(window).width() <= 480) {
    if (crmBidsEmpty.length) {
      $.each(crmBidsEmpty, function (index, value) {
        if (index !== 0 || crmBidCountItems.length) {
          $(this).css('display', 'none');
        }
      });
    }
  }
}

function mobileBidsCheckEmpty() {
  if ($(window).width() <= 480) {
    var crmBidCount = $(document).find('.jsCrmBidsEmpty');

    if (crmBidCount.length == 4) {
      $('.jsCrmBidCount').filter(':first').removeClass('xs-hide');
      $('.jsCrmBidsEmptyMobile').filter(':first').removeClass('is-hidden');
    }
  }
}
/*******************
 * Other functions *
 ******************/
// validation input text


function parseInputText(oldString) {
  // валидация входящих текстов на запрещенные символы типа ♥
  if (oldString) {
    var newString = '';
    var lengthOldString = oldString.length;

    if (oldString) {
      for (var i = 0; i < lengthOldString; i++) {
        var codeChar = oldString.charCodeAt(i);

        if (codeChar === 10 || codeChar === 13 || codeChar > 31 && codeChar < 127 || codeChar === 1025 || codeChar > 1039 && codeChar < 1104 || codeChar === 1105) {
          newString += oldString[i];
        }
      }

      if (!(newString.trim() === '')) {
        return newString;
      }
    }
  }

  return null;
}

function validateInputPhone(QueryObject, textError) {
  // валидация телефона - что бы было строго 10 цифр
  var phone = QueryObject.val();
  var phoneLength = phone.length;

  for (var i = 0; i < phoneLength; i++) {
    if (phone[i] === '_') {
      showErrorForField(QueryObject, textError);
      return true;
    }
  }
}

function showErrorForField(QueryObject, textError) {
  // показывает ошибку для данного поля
  $('.bb-input--title').removeClass('is-invalid');
  QueryObject.parent(':first').addClass('is-invalid');
  QueryObject.parent(':first').find('.bb-input-tip__text').text(textError);
  QueryObject.parent(':first').find('.bb-input-tip').removeAttr('style');
  return false;
}

function hideErrorForField(QueryObject) {
  // скрывает ошибку для данного поля
  QueryObject.parent(':first').removeClass('is-invalid');
}

function ifJsSlideBlockThree(event) {
  if (document.querySelector('[data-slide-block="add-addresses"]').getAttribute('inert') === '') {
    console.log('Add addresses is inert');
    BB.Component.SlideBlock.close(event);
    BB.Component.SlideBlock.open(event);
  } else {
    console.log('Add addresses is not inert');
  }
}

function dayOfTheWeek(day) {
  var data = [];
  var jsCrmStepThreeCheckbox = $('.jsCrmStepThree' + day + 'Checkbox:checked');
  var jsCrmStepThreeTimeOff = $('.jsCrmStepThree' + day + 'TimeOff');
  var jsCrmStepThreeTimeTo = $('.jsCrmStepThree' + day + 'TimeTo');

  if (jsCrmStepThreeCheckbox.length) {
    data.push(1);
  }

  data.push(jsCrmStepThreeTimeOff.val());
  data.push(jsCrmStepThreeTimeTo.val());
  return data;
}

function dataFormat(dataKey) {
  var dateAttr = dataKey.split(',');
  var date = '';

  if (dateAttr[0] === 'Сегодня') {
    var data = new Date(new Date().getTime() + 60 * 60 * 1000);
    var month = data.getMonth() + 1;
  } else {
    var data = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var month = data.getMonth() + 1;
  }

  if (month < 10) {
    month = 0 + '' + month;
  }

  if (data.getDate() < 10) {
    var day = 0 + '' + data.getDate();
  } else {
    var day = data.getDate();
  }

  return data.getFullYear() + '-' + month + '-' + day;
}

function updadeBidsOnDashboard() {
  var crmDashboardTodayAndTomorrow = $('.jsCrmDashboardTodayAndTomorrow'); // $('html').removeClass('is-fixed no-touch-events');
  // $('.js-overlay').removeClass('is-visible');

  if (crmDashboardTodayAndTomorrow.length) {
    if ($(window).width() <= 480) {
      var dashboard = $("[data-name-route*='dashboard']");
      dashboard.trigger('click');
    } else {
      $(document).find('.jsCrmDasboard').trigger('click');
    }
  }
}

function clearClients() {
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmClientsSearchClient',
    data: {
      name: '',
      clientType: 0,
      profileID: $('.jsCrmMainHeaderBlock').attr('data-profile-id'),
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      var html = response.html,
          crmClientsClientItem = $('.jsCrmClientsClientItem '),
          crmClientsSearchEmptyBlock = $('.jsCrmClientsSearchEmptyBlock'),
          crmClientsListTableTitles = $('.jsCrmClientsListTableTitles'),
          crmClientsListTableTitlesBlock = $('.jsCrmClientsListTableTitlesBlock');
      $(document).find('.jsCrmClientsSearchNameInput').val('');
      $(document).find('.jsCrmClientsSearchTypeSelect').val(0);

      if (html === '') {
        crmClientsMainBlock.addClass('search-empty');
        crmClientsSearchEmptyBlock.removeClass('is-hidden');
        crmClientsListTableTitles.addClass('is-hidden');
      } else {
        crmClientsSearchEmptyBlock.addClass('is-hidden');
        crmClientsListTableTitles.removeClass('is-hidden');
      }

      crmClientsListTableTitlesBlock.attr('data-count', response.clients);
      crmClientsClientItem.remove();
      $(html).insertAfter(crmClientsListTableTitles);
    }
  });
}

function scrollAddContent(scroll) {
  var el;

  if ($(window).width() > 480) {
    el = document;
  } else {
    if (typeof scroll !== 'undefined') {
      el = scroll;
    } else {
      el = '.wrapper__inner';
    }
  }

  return el;
}

function changeBlockAddNew() {
  var jsClearBlockAdd = $(document).find('.jsClearBlockAdd');
  jsClearBlockAdd.remove();
  var jsBlockAddNew = $(document).find('.jsBlockAddNew');
  jsBlockAddNew.addClass('jsClearBlockAdd');
  var main = $(document).find('.wrapper__inner');
  jsBlockAddNew.prependTo(main);
}

changeBlockAddNew();

function bodyFixed() {
  if (!$(document).find('.js-move-block').hasClass(OPEN_CLASS)) {
    $('body').removeClass(FIXED_CLASS).css('position', 'relative');
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function insertRoleType(url) {
  try {
    return url.match(/\?role=[a-z_]{6,13}\&id=[0-9]{1,7}/)[0];
  } catch (e) {
    return '';
  }
}

$(document).on('click', '.jsStopPropagation', function (e) {
  e.stopPropagation();
});

function instagramInvolvement() {
  var crmAnalysisInstagramInvolvement = $('.jsCrmAnalysisInstagramInvolvement'),
      data = [],
      labels = [],
      users = JSON.parse(crmAnalysisInstagramInvolvement.attr('data-users')),
      date = JSON.parse(crmAnalysisInstagramInvolvement.attr('data-date'));

  if (users.length === date.length) {
    for (var i = 0; i < users.length; i++) {
      labels.push(date[i]);
      data.push(parseInt(users[i]));
    }
  }

  var dataChartAudienceInvolvement = {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: '#ff8272'
    }]
  };
  BB.Crm.Main.initGraphic('.jsCrmAnalysisInstagramInvolvement', {
    data: dataChartAudienceInvolvement
  });
}

function instagramFollowerDynamic() {
  var crmAnalysisInstagramFollowerDynamic = $('.jsCrmAnalysisInstagramFollowerDynamic'),
      data = [],
      labels = [],
      users = JSON.parse(crmAnalysisInstagramFollowerDynamic.attr('data-users')),
      date = JSON.parse(crmAnalysisInstagramFollowerDynamic.attr('data-date'));

  if (users.length === date.length) {
    for (var i = 0; i < users.length; i++) {
      labels.push(date[i]);
      data.push(parseInt(users[i]));
    }
  }

  var dataChartAudienceInvolvement = {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: '#ff8272'
    }]
  };
  BB.Crm.Main.initGraphic('.jsCrmAnalysisInstagramFollowerDynamic', {
    data: dataChartAudienceInvolvement
  });
} // $(document).on("click", function(){
//     if ($('.jsCrmMainPopupBlock').length) {
//         setTimeout(function () {
//             if ($('div').is('.l-slide-block')) {
//                 console.log(true);
//             } else {
//                 console.log(false);
//                 $('html').removeClass('no-touch-events');
//                 $('html').removeAttr('style');
//                 $('body').removeAttr('style');
//                 $('.wrapper').removeAttr('inert').removeAttr('tabindex');
//             }
//         }, 1500);
//     }
// });


var disable = false;

function addRequestItemScroll(count, alert, endBlock) {
  disable = false;
  var block = $(document).find('.jsCrmPushBidsBlockItems');
  block.on('scroll', function () {
    var scroll = block.scrollTop(),
        heightBlockAndScroll = scroll + block.height(),
        heightBlock = $(endBlock).position().top;
    var checkVisibility = heightBlock <= heightBlockAndScroll;

    if (checkVisibility == true) {
      alert = 0;
    }

    if (alert === 0 && disable == false) {
      disable = true;
      var allCountItems = parseInt($(document).find('.jsCrmPushBidsBlockItems').attr('data-count'));
      count = $('.jsCrmRequestInfoItem').length; // console.log(count, allCountItems);

      if (checkVisibility && allCountItems > count) {
        disable = true;
        ajaxAddContentPush(count, allCountItems, endBlock, $(this));
      } else {
        disable = false;
        alert = 0;
      }
    }
  });
}

function ajaxAddContentPush(countItems, allCountMasters, endBlock, block) {
  var lastDate = $('.jsCrmRequestInfoItem:last').attr('data-item');

  if (countItems < allCountMasters && endBlock.length) {
    $.ajax({
      method: 'POST',
      url: '/ajaxAddItemPush',
      data: {
        skip: countItems,
        allCountMasters: allCountMasters,
        lastDate: lastDate,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        block.find('#jsCrmPushBids').before(response.html);
        updateDataBids();
        var alert = 0;
        disable = false;
      }
    });
  } else {
    $('.js-loader__scroll').css('display', 'none');
  }
}

function massegesSwiper() {
  var $firstLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  $.ajax({
    method: 'POST',
    url: '/ajaxCrmMassegesSwinerBlock',
    data: {
      firstLoad: $firstLoad,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      $(document).find('.jsSwiperBlock').children().empty().append(response.html);
      BB.Core.Button.init();
      var count = $('.jsCrmRequestInfoItem').length;
      var endBlock = $('#jsCrmPushBids');
      var alert = 0;
      addRequestItemScroll(count, alert, endBlock); // console.log($firstLoad );

      if ($firstLoad !== true) {
        console.log($firstLoad);
        var crmDashboardMessagesBlock = $(document).find('.jsCrmDashboardMessagesBlock');
        crmDashboardMessagesBlock.addClass('is-hidden');
        crmDashboardMessagesBlock.text(0);
      }

      updateDataBids();
    }
  });
}

 // import { initAnalytics, updateWidgets } from './blocks/analytics'; //reinit plugins
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "Qx9plHsn":
/*!**********************************************************!*\
  !*** ./resources/js/_frontend/core/components/Select.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! select2 */ "DjPgibsv");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Base.Components.Select.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 * Custom Select https://select2.org/
 */
BB.define('Core.Select');
 // import 'select2/dist/js/i18n/ru.js';

/* harmony default export */ __webpack_exports__["default"] = (BB.Core.Select = function () {
  function _init() {
    //потому что русификация не работает! в т.ч. $.fn.select2.defaults.set('language','ru')
    $.fn.select2.defaults.defaults.language.noResults = function () {
      return 'Нет результатов';
    };

    $('.js-select--multiple').select2({
      language: 'ru',
      tags: true
    });
    $('.js-select.bb-select--metro').select2({
      language: 'ru',
      templateResult: addUserPic
    });
    $('.js-select.no-search').select2({
      language: 'ru',
      minimumResultsForSearch: -1
    }); //Добавляем иконку метро в селект

    function addUserPic(opt) {
      if (!opt.id) {
        return opt.text;
      }

      var optimage = $(opt.element).data('image');

      if (!optimage) {
        return opt.text;
      } else {
        var $opt = $('<span class="metro-icon metro-icon--' + optimage + '">' + $(opt.element).text() + '</span>');
        return $opt;
      }
    }

    _initBase();

    _initServices();

    _initNative();

    _initMultiple();

    _initColor();

    _initIcon();

    _initBorn();

    _initShowYear();

    _initHideYear();

    _initPhoneCode();

    _initMobile();

    _initAddEventListener();

    _initInputCounter();

    _initInputCounterControl();

    _initSelectColor();

    _initSelectStatus(); // if (NODE_ENV == 'development') {
    //     console.log('--- INIT CORE SELECT');
    // }

  }

  function _initBase() {
    var $select = $('.js-select');
    $select.each(function () {
      var $parent = $(this).closest('.bb-input--select');
      $(this).select2({
        language: 'ru',
        dropdownParent: $parent
      });
    });
  }

  function _initServices() {
    var $selectServices = $('.js-select--services');
    $selectServices.each(function () {
      var $parent = $(this).closest('.bb-input--select');
      $(this).select2({
        language: 'ru',
        dropdownParent: $parent,
        templateSelection: timeAndPrice,
        templateResult: timeAndPrice
      });
    }); //Select Add Price Time & Price

    function timeAndPrice(opt) {
      var originalTime = $(opt.element).data('time');
      var originalPrice = $(opt.element).data('price');
      return $('<div class=custom-select__results>' + '<span>' + opt.text + '</span>' + '<span>' + originalTime + '</span>' + '<span>' + originalPrice + '</span>' + '</div>');
    }
  }

  function _initNative() {
    var $selectNative = $(document).find('.js-select-native');

    if ($selectNative.length) {
      if ($(window).width() > 480) {
        $selectNative.each(function () {
          if (!$(this).hasClass('select2-hidden-accessible')) {
            var $parent = $(this).closest('.bb-input--select, .profile-editor__select');
            $(this).select2({
              language: 'ru',
              minimumResultsForSearch: -1,
              dropdownParent: $parent
            });
          }
        });
      } else {
        $selectNative.each(function () {
          if ($(this).hasClass('select2-hidden-accessible')) {
            $(this).select2('destroy');
          }

          var _this = $(this);

          var $parent = _this.closest('.bb-input');

          var $title = $parent.find('.bb-input__title');
          var titleText = $title.text();

          var placeholder = _this.data('placeholder');

          var $firstOption = _this.find('option:first-child');

          var $newOption = $('<option>').attr({
            disabled: 'disabled',
            selected: 'selected'
          });
          var type = $parent.data('type');
          var text;

          if (titleText !== '' || titleText !== 'undefined') {
            text = titleText;
          } else if (placeholder !== '' || placeholder !== 'undefined') {
            text = placeholder;
          } else {
            return;
          }

          if ($parent.hasClass('bb-input--transform')) {
            if ($firstOption.is(':empty')) {
              if (type === 'selected') {
                $firstOption.remove();
                $parent.addClass('is-focus');
              } else {
                $firstOption.remove();

                _this.removeAttr('data-placeholder').val(text);

                _addResetBtn(_this);
              } //firstOption not empty

            } else {
              if (type === 'selected') {
                $parent.addClass('is-focus');
              } else {
                $newOption.prependTo(_this);

                _addResetBtn(_this);
              }
            }
          } else {
            if ($firstOption.is(':empty')) {
              $firstOption.val(placeholder).text(placeholder).attr({
                selected: 'selected',
                disabled: 'disabled'
              });

              _this.addClass('has-placeholder').removeAttr('data-placeholder').val(placeholder);
            }

            _addResetBtn(_this);
          }

          $(this).on('change', function () {
            if ($(this).hasClass('has-placeholder')) {
              $(this).removeClass('has-placeholder');
            }

            var $firstOption = _this.find('option:first-child');

            if ($(this).val() !== '') {
              $parent.addClass('is-focus');

              if ($firstOption.is(':empty')) {
                $firstOption.remove();
              }
            } else {
              $parent.removeClass('is-focus');
            }
          });
          $(this).wrap('<label class="bb-select">');
        });
      }
    }
  }

  function _initMultiple() {
    var $selectMultiple = $(document).find('.js-select--multiple');

    if ($selectMultiple.length) {
      if ($(window).width() > 480) {
        $selectMultiple.each(function () {
          var _this = $(this);

          var $parent = _this.closest('.bb-input');

          _this.select2({
            language: 'ru',
            tags: true,
            minimumResultsForSearch: 2,
            dropdownParent: $parent
          });
        });
      } else {
        $selectMultiple.each(function () {
          var _this = $(this);

          var $parent = _this.closest('.bb-input');

          var $select2Input = $parent.find('input');
          var placeholder = $select2Input.attr('placeholder');

          _this.children().addClass('needsclick');

          _this.select2({
            language: 'ru',
            tags: true,
            minimumResultsForSearch: 2,
            dropdownParent: $parent
          });

          if ($parent.hasClass('bb-input--transform')) {
            $select2Input.attr('placeholder', '');
          } // откат тайтла


          $(this).on('select2:open', function () {
            if ($(this).hasClass('has-placeholder')) {
              $(this).removeClass('has-placeholder');
              $('.select2-search__field').attr('readonly', true);
            }

            if ($(this).val() !== '') {
              $parent.addClass('is-focus');
              $select2Input.attr('placeholder', placeholder);
            } else {
              $parent.removeClass('is-focus');
            }
          }).on('select2:close', function () {
            if ($(this).val() == '') {
              $parent.removeClass('is-focus');
              $select2Input.removeAttr('placeholder').blur();
            } else {
              $parent.addClass('is-focus');
            }
          });
        });
      }
    }
  }

  function _initAddEventListener() {
    $(document).on('focus', '.select2-search__field', function (e) {
      e.stopPropagation();
    });
    var $icon = $(document).find('.js-icon-toggle');
    $icon.each(function () {
      var _this = $(this);

      var $select = _this.find('.js-select-native');

      var $optionSelected = _this.find('.js-select-native :selected').data('icon');

      var $icon = _this.find('.icon');

      $icon.each(function () {
        var $dataInIcon = $(this).data('icon');

        if ($dataInIcon != $optionSelected) {
          $(this).hide();
        }
      });
      $select.on('change', function () {
        var $selectChange = _this.find('.js-select-native :selected').data('icon');

        $icon.each(function () {
          var $dataInIcon = $(this).data('icon');

          if ($dataInIcon != $selectChange) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });
      });
    });
  }

  function _initIcon() {
    var $iconSelect = $(document).find('.js-select--icon');
    $iconSelect.each(function () {
      var $parent = $(this).closest('.bb-input--select');
      $(this).select2({
        language: 'ru',
        templateSelection: iformat,
        templateResult: iformat,
        dropdownParent: $parent,
        minimumResultsForSearch: -1
      });
    }); //Icon fontawesome inside select

    function iformat(icon) {
      var originalOption = icon.element;
      return $('<span><i class="select2__icon' + ' ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</span>');
    }
  }

  function _initColor() {
    var $colorSelect = $(document).find('.js-select--color');

    if ($colorSelect.length) {
      $colorSelect.each(function () {
        colorCustom(this);
      });
    }

    function colorNative(elem) {
      var _this = $(elem);

      var $parent = _this.closest('.bb-input');

      var $title = $parent.find('.bb-input__title');
      var titleText = $title.text();

      var placeholder = _this.data('placeholder');

      var $firstOption = _this.find('option:first-child');

      var $newOption = $('<option>').attr({
        disabled: 'disabled',
        selected: 'selected'
      });
      var type = $parent.data('type');
      var text;

      if (titleText !== '' || typeof titleText !== 'undefined') {
        text = titleText;
      } else if (placeholder !== '' || typeof placeholder !== 'undefined') {
        text = placeholder;
      } else {
        return;
      }

      if ($parent.hasClass('bb-input--transform')) {
        if ($firstOption.is(':empty')) {
          if (type === 'selected') {
            $firstOption.remove();
            $parent.addClass('is-focus');
          } else {
            $firstOption.remove();

            _this.removeAttr('data-placeholder').val(text);

            _addResetBtn(_this);
          } //firstOption not empty

        } else {
          if (type === 'selected') {
            $parent.addClass('is-focus');
          } else {
            $newOption.prependTo(_this);

            _addResetBtn(_this);
          }
        }
      } else {
        if ($firstOption.is(':empty')) {
          $firstOption.val(placeholder).text(placeholder).attr({
            selected: 'selected',
            disabled: 'disabled'
          });

          _this.addClass('has-placeholder').removeAttr('data-placeholder').val(placeholder);
        }
      }

      $(elem).on('change', function () {
        if ($(elem).hasClass('has-placeholder')) {
          $(elem).removeClass('has-placeholder');
        }

        var $firstOption = _this.find('option:first-child');

        if ($(elem).val() !== '') {
          $parent.addClass('is-focus');

          if ($firstOption.is(':empty')) {
            $firstOption.remove();
          }
        } else {
          $parent.removeClass('is-focus');
        }
      });
      $(elem).wrap('<label class="bb-select">');
    }

    function colorCustom(elem) {
      var $parent = $(elem).closest('.select-color');

      if ($(window).width() > 480 || $(elem).hasClass('show-always')) {
        if ($(elem).hasClass('search-enabled')) {
          $(elem).select2({
            language: 'ru',
            templateSelection: iBall,
            templateResult: iBall,
            dropdownParent: $parent
          });
        } else {
          $(elem).select2({
            language: 'ru',
            minimumResultsForSearch: -1,
            templateSelection: iBall,
            templateResult: iBall,
            dropdownParent: $parent
          });
        }
      }
    }

    function iBall(color) {
      var $parent = $(color.element).closest('.select-color');
      var $originalOption = color.element;
      var colorBall = $($originalOption).data('color');

      if (typeof colorBall != 'undefined') {
        if (color.text.length) {
          $parent.removeClass('select-color--palette');
          return $("<div class=select-color__item> <span class=\"select-color__marker\" style=\"background-color: ".concat(colorBall, "\"></span><p> ").concat(color.text, " </p></div>"));
        } else {
          $parent.addClass('select-color--palette');
          return $("<div class=select-color__item> <span class=\"select-color__ball\" style=\"background-color: ".concat(colorBall, " \"> </span> </div>"));
        }
      } else {
        return $("<div class=select-color__item> ".concat(color.text, " </div>"));
      }
    }
  }

  function _initBorn() {
    var $bornSelect = $(document).find('.js-select-born');

    if ($bornSelect.length) {
      if ($(window).width() > 480) {
        $bornSelect.each(function () {
          if (!$(this).hasClass('select2-hidden-accessible')) {
            $(this).select2({
              language: 'ru',
              minimumResultsForSearch: -1,
              allowClear: true
            });
          }
        });
      } else {
        $bornSelect.each(function () {
          if ($(this).hasClass('select2-hidden-accessible')) {
            $(this).select2('destroy');
          }

          var $parent = $(this).closest('.bb-input--born');
          var $select = $(this).closest('.bb-input-born__select');
          var placeholder = $(this).data('placeholder');
          var $firstOption = $(this).find('option:first-child');

          if ($parent.hasClass('bb-input--transform')) {
            $parent.find('.bb-input__title').detach();
            $parent.find('.bb-input-born').addClass('bb-input-born--transform');
          }

          $firstOption.text(placeholder).val(placeholder).attr('disabled', 'disabled');
          $(this).removeAttr('data-placeholder');
          $(this).wrap('<label class="bb-select">');
          $(this).on('change', function () {
            if ($(this).val() !== '') {
              $select.addClass('is-focus');
            } else {
              $select.removeClass('is-focus');
            }
          }); // function checkFocus() {
          //     if ($(this).val() !== '') {
          //         $select.addClass('is-focus');
          //     } else {
          //         $select.removeClass('is-focus');
          //     }
          // }
          // checkFocus();

          _addResetBtn($(this));
        });
      }
    }
  }

  function _initShowYear() {
    $(document).on('click', '.js-set-year', function () {
      $(this).hide();
      $(this).prev().show();
    });
  }

  function _initHideYear() {
    var $yearSelect = $('.js-select-born--clear');
    $yearSelect.on('select2:unselecting', function () {
      $(this).on('select2:opening', function (e) {
        e.preventDefault();
      });
    }).on('select2:unselect', function () {
      var _this2 = this;

      setTimeout(function () {
        $(_this2).off('select2:opening');
      }, 100);
    }).on('change', function () {
      if ($(this).val() == '' && $(this).attr('data-born') === 'year') {
        $('.js-set-year').show();
        $('.js-set-year').prev().hide();
      }
    });
  }

  function _addResetBtn(el) {
    var renderIcon = true;
    var $select = el;
    var $parent = $select.closest('.bb-input');
    var resetBtn = "<button class=\"bb-select__reset js-select--reset\">\n                            <span>\n                                <svg viewBox=\"0 0 47.971 47.971\">\n                                <path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\n                                </svg>\n                            </span>\n                        </button>";
    var $newOption = $('<option>').attr({
      disabled: 'disabled',
      selected: 'selected'
    });
    $select.on('change', function () {
      var $parent = $(this).parent('.bb-select, .bb-input-born__select');

      if (renderIcon) {
        if ($(window).width() > 480) {
          $(this).parent().find('.select2-selection__clear').text('').append(resetBtn);
        } else {
          $parent.append(resetBtn);
        }

        renderIcon = false;
      }
    });
    $(document).on('click', '.js-select--reset', function (e) {
      var $parent, $select;

      if ($(this).siblings('.js-select-born').length) {
        $select = $(this).siblings('.js-select-born');
        $parent = $(this).closest('.bb-input-born__select');
      } else {
        $select = $(this).siblings('.js-select-native');
        $parent = $(this).closest('.bb-input');

        if ($parent.hasClass('bb-input--transform')) {
          $newOption.prependTo($select);
        }
      }

      $(this).closest('.js-select--reset').remove();
      $select.val($parent.find('option:first-child').val()).blur();
      $parent.removeClass('is-focus');

      if ($parent.hasClass('bb-input-born__select--year')) {
        $parent.next('.bb-input-born__btn').show();
        $parent.hide();
      }

      renderIcon = true;
      e.stopPropagation();
      e.preventDefault();
    });
  }

  function _initPhoneCode() {
    //Change select results to option value
    function selectCodeSelection(opt) {
      var optVal = $(opt.element).val();
      return $('<span class=custom-select__results>' + optVal + '</span>');
    } //Add city name to option


    function selectCodeResult(opt) {
      var country = $(opt.element).data('country'),
          optVal = $(opt.element).val();
      return $('<div class=custom-select__results>' + '<span>' + country + '</span>' + '<span>' + optVal + '</span>' + '</div>');
    }

    var $phoneCodeBox = $(document).find('.js-input-phone-code');

    if ($phoneCodeBox.length) {
      $phoneCodeBox.each(function () {
        var $select = $(this).find('.select-value');
        var $parent = $(this).parent();
        var $input = $(this).find('.bb-input__input');

        if ($(window).width() >= 768) {
          $select.select2({
            language: 'ru',
            templateResult: selectCodeResult,
            templateSelection: selectCodeSelection,
            dropdownParent: $(this)
          }).on('select2:select', function () {
            $(this).parent().parent().find('input').focus();
          });
        } else {
          $parent.addClass('bb-select').append('<div class="bb-input--select-value"></div>');
          var optionSelect = $parent.find('option');
          var selectValue = $parent.find('.bb-input--select-value');
          selectValue.text(optionSelect.eq(0).val());
          $select.change(function () {
            var counter = $(this)[0].selectedIndex;
            selectValue.text(optionSelect.eq(counter).val());
            $(this).parent().parent().find('input').focus();
          });
        }

        Inputmask('999-99-99').mask($input);
        $input.on('focus', addFocus).on('blur', removeFocus);
        $select.on('select2:open', addFocus).on('select2:close', removeFocus);

        function addFocus() {
          $(this).closest('.js-input-phone-code').addClass('is-focus');
        }

        function removeFocus() {
          if ($(this).val() == '') {
            $(this).closest('.js-input-phone-code').removeClass('is-focus');
          }
        }
      });
    }
  }

  function _initMobile() {
    var $popups = $(document).find('.popups');
    var $select = $(document).find('.js-move-select');
    $select.each(function () {
      var $inputSearch = $(this).find('input').not('.is-hidden');
      var $item = $(this).find('.move-select__result');
      var $btnClose = $(this).find('.js-move-select--close');
      var $btnClear = $(this).find('.js-move-select--clear');
      $(this).on('click', function (e) {
        $(this).addClass('is-active');
        $popups.addClass('move-select--open');
        $('html, body').animate({
          scrollTop: 0
        });
      });
      $item.on('click', function (e) {
        e.preventDefault();
        var $name = $(this).find('.user__name').text().trim();
        var $service = $(this).find('.item-info__title span').text().trim().split(' ').join(' + ');
        $inputSearch.val($name || $service);
        $(this).closest('.js-move-select').removeClass('is-active').addClass('is-selected');
        $(this).closest('.bb-input--transform').addClass('is-focus');
        $popups.removeClass('move-select--open');
      });
      $btnClose.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('.js-move-select').removeClass('is-active is-selected');
        $inputSearch.blur();
        $popups.removeClass('move-select--open');
      });
      $btnClear.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('.js-move-select').removeClass('is-active is-selected');
        $inputSearch.val('').blur();
      });
      $(document).on('click', '.move-select__result', function () {
        $item.removeClass('is-selected');
        $(this).addClass('is-selected');
      });
    });
  }

  function _initInputCounter() {
    var inputCustom = document.querySelectorAll('.js-bb-input-custom');
    var height = $(window).height();
    var centerHeight = height / 2;
    var defaultPosition;

    if (inputCustom.length) {
      var _loop = function _loop(i) {
        var inputValue = inputCustom[i].querySelector('.bb-input-custom__value');

        inputCustom[i].onclick = function (e) {
          e.preventDefault();
        };

        inputValue.onclick = function (event) {
          event.preventDefault();
          var target = event.target;

          if (!target.closest('.bb-input-custom').classList.contains('is-open')) {
            for (var j = 0; j < inputCustom.length; j++) {
              inputCustom[j].classList.remove('is-open');
            }

            inputCustom[i].classList.add('is-open');
            var list = $(document).find('.bb-input-custom__list:visible')[0];

            if (typeof list === 'undefined') {
              return;
            }

            var listPosition = list.getBoundingClientRect();
            defaultPosition = listPosition.top;

            if (list.classList.contains('bb-input-custom__list--full-border')) {
              list.classList.remove('bb-input-custom__list--full-border');
              list.classList.add('bb-input-custom__list');
            }

            $(list).css('top', '100%');
            var listHeight = $(list).height();
            var listOuterHeight = $(list).outerHeight();

            if (listPosition.top > centerHeight) {
              $(list).addClass('bb-input-custom__list--full-border');
              $(list).offset({
                top: $(this).offset().top - listHeight - (listOuterHeight - listHeight) / 2
              });
              $(list).append($($(list).children('li')).get().reverse());
            }
          } else {
            var _list = $(document).find('.bb-input-custom__list:visible')[0];

            if (defaultPosition > centerHeight) {
              $(_list).offset({
                top: '100%'
              });
              $(_list).append($($(_list).children('li')).get().reverse());
            }

            inputCustom[i].classList.remove('is-open');
          }
        };

        document.onclick = function (event) {
          var target = event.target;

          if (target.querySelectorAll('.js-bb-input-custom').length || !target.closest('.bb-input-custom__value')) {
            var list = $(target).parent().find('.bb-input-custom__list:visible')[0];

            if (defaultPosition > centerHeight) {
              $(list).append($($(list).children('li')).get().reverse());
            }

            for (var _i = 0; _i < inputCustom.length; _i++) {
              inputCustom[_i].classList.remove('is-open');
            }
          }
        };
      };

      for (var i = 0; i < inputCustom.length; i++) {
        _loop(i);
      }
    }
  }

  function _initInputCounterControl() {
    var inputCustom = document.querySelectorAll('.js-bb-input-custom');

    if (inputCustom.length) {
      var _loop2 = function _loop2(i) {
        var minus = inputCustom[i].querySelector('.bb-input-custom__minus');
        var plus = inputCustom[i].querySelector('.bb-input-custom__plus');
        var input = inputCustom[i].querySelector('.bb-input-custom__input');
        var item = inputCustom[i].querySelectorAll('.bb-input-custom__item');

        var _loop3 = function _loop3(_i2) {
          var offer = item[_i2].querySelector('.bb-input-custom__offer');

          if (offer != null) {
            item[_i2].onclick = function () {
              input.value = offer.innerHTML;
            };
          }
        };

        for (var _i2 = 0; _i2 < item.length; _i2++) {
          _loop3(_i2);
        }

        if (minus != null && plus != null) {
          minus.onclick = function (e) {
            var target = e.target;
            target.closest('.bb-input-custom').classList.remove('is-open');

            if (input.value > 1) {
              input.value--;
            } else {
              input.value = 1;
            } // e.preventDefault();
            // e.stopPropagation();

          };

          plus.onclick = function (e) {
            var target = e.target;
            target.closest('.bb-input-custom').classList.remove('is-open');
            input.value++; // e.preventDefault();
            // e.stopPropagation();
          };
        }
      };

      for (var i = 0; i < inputCustom.length; i++) {
        _loop2(i);
      }
    }
  }

  function _initSelectColor() {
    var inputCustom = document.querySelectorAll('.js-bb-input-custom');

    if (inputCustom.length) {
      var _loop4 = function _loop4(i) {
        var value = inputCustom[i].querySelector('.bb-input-custom__color');
        var title = inputCustom[i].querySelector('.bb-input-custom__title');

        if (value != null && title != null) {
          var item = inputCustom[i].querySelectorAll('.bb-input-custom__item');

          var _loop5 = function _loop5(_i3) {
            var color = item[_i3].querySelector('.bb-input-custom__color');

            var titlePick = item[_i3].querySelector('.bb-input-custom__title').innerHTML;

            var data = color.getAttribute('data-color-input');

            item[_i3].onclick = function () {
              title.innerHTML = titlePick;
              value.style.backgroundColor = data;
            };
          };

          for (var _i3 = 0; _i3 < item.length; _i3++) {
            _loop5(_i3);
          }
        }
      };

      for (var i = 0; i < inputCustom.length; i++) {
        _loop4(i);
      }
    }
  }

  function _initSelectStatus() {
    var select = document.querySelectorAll('.js-select-status');

    if (select.length) {
      var _loop6 = function _loop6(i) {
        var item = select[i];
        var bbSelectLable = item.closest('.bb-select');
        var dataOldStatus = void 0;
        var selectIndex = item.selectedIndex;
        var selectOption = item.options[selectIndex];
        var dataStatus = selectOption.getAttribute('data-status');
        bbSelectLable.classList.add(dataStatus);
        dataOldStatus = dataStatus;
        item.addEventListener('change', function (e) {
          var selectIndex = item.selectedIndex;
          var selectOption = item.options[selectIndex];
          var dataStatus = selectOption.getAttribute('data-status');
          bbSelectLable.classList.remove(dataOldStatus);
          bbSelectLable.classList.add(dataStatus);
          dataOldStatus = dataStatus;
        });
      };

      for (var i = 0; i < select.length; i++) {
        _loop6(i);
      }
    }
  }

  return {
    init: _init,
    initBase: _initBase,
    initServices: _initServices,
    initNative: _initNative,
    initMultiple: _initMultiple,
    initColor: _initColor,
    initIcon: _initIcon,
    initBorn: _initBorn,
    initShowYear: _initShowYear,
    initHideYear: _initHideYear,
    initPhoneCode: _initPhoneCode,
    initMobile: _initMobile,
    initAddEventListener: _initAddEventListener,
    initInputCounter: _initInputCounter,
    initInputCustomControl: _initInputCounterControl,
    initSelectColor: _initSelectColor
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "VZ0YckBr":
/*!**********************************************!*\
  !*** ./resources/js/crm/modules/Calendar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var _libs_calendar_dhtmlxscheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/calendar/dhtmlxscheduler */ "saoJp7xE");
/* harmony import */ var _libs_calendar_dhtmlxscheduler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_calendar_dhtmlxscheduler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_calendar_locale_locale_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/calendar/locale/locale_ru */ "F9oNhdPK");
/* harmony import */ var _libs_calendar_locale_locale_ru__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_calendar_locale_locale_ru__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_calendar_ext_dhtmlxscheduler_limit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/calendar/ext/dhtmlxscheduler_limit */ "2fWhwd3G");
/* harmony import */ var _libs_calendar_ext_dhtmlxscheduler_limit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_calendar_ext_dhtmlxscheduler_limit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_calendar_ext_dhtmlxscheduler_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/calendar/ext/dhtmlxscheduler_tooltip */ "1kjfg+4x");
/* harmony import */ var _libs_calendar_ext_dhtmlxscheduler_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_calendar_ext_dhtmlxscheduler_tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_calendar_ext_dhtmlxscheduler_units__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/calendar/ext/dhtmlxscheduler_units */ "vlsk3KQ4");
/* harmony import */ var _libs_calendar_ext_dhtmlxscheduler_units__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_calendar_ext_dhtmlxscheduler_units__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions */ "NZ1UjQKk");







function Calendar() {
  function _generateCalendar(arrData, allDate, view, minStartCalendarHour, buttonPrev, buttonNext, mastersCount) {
    var schedule = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var utc = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;

    if ($('#calendar').length) {
      _heights();

      _timeStep();

      var arrEmployees = [];
      var currentDate = allDate;
      var userRole = $('.jsCrmCalendarHoverBlock').data('role');
      arrData = JSON.parse(arrData);

      if (view === 'week') {
        $.each(arrData, function (key, data) {
          $(document).find('.jsCrmCalendarButtonPrev').addClass('is-hidden');
          $(document).find('.jsCrmCalendarButtonNext').addClass('is-hidden');
          scheduler.deleteMarkedTimespan();
          $.each(data.workFrom, function (tKey, tData) {
            var initDateFrom = tData;
            initDateFrom = initDateFrom.split('-');
            var initDateFrom3 = initDateFrom[2].split(' ');
            var initTimeFrom = initDateFrom3[1].split(':');
            var initDateTo = data.workTo[tKey];
            initDateTo = initDateTo.split('-');
            var initDateTo3 = initDateTo[2].split(' ');
            var initTimeTo = initDateTo3[1].split(':');
            scheduler.addMarkedTimespan({
              start_date: new Date(initDateFrom[0], initDateFrom[1] - 1, initDateFrom3[0], initTimeFrom[0], initTimeFrom[1]),
              end_date: new Date(initDateTo[0], initDateTo[1] - 1, initDateTo3[0], initTimeTo[0], initTimeTo[1]),
              css: 'dhx_time_reserved'
            });
          });
          $.each(data.workBreakFrom, function (tKey, tData) {
            if (typeof tData !== 'undefined') {
              if (tData !== 0) {
                var initDateBreakFrom = tData;
                initDateBreakFrom = initDateBreakFrom.split('-');
                var initDateBreakFrom3 = initDateBreakFrom[2].split(' ');
                var initTimeBreakFrom = initDateBreakFrom3[1].split(':');
                var initDateBreakTo = data.workBreakTo[tKey];
                initDateBreakTo = initDateBreakTo.split('-');
                var initDateBreakTo3 = initDateBreakTo[2].split(' ');
                var initTimeBreakTo = initDateBreakTo3[1].split(':');
                scheduler.addMarkedTimespan({
                  start_date: new Date(initDateBreakFrom[0], initDateBreakFrom[1] - 1, initDateBreakFrom3[0], initTimeBreakFrom[0], initTimeBreakFrom[1]),
                  end_date: new Date(initDateBreakTo[0], initDateBreakTo[1] - 1, initDateBreakTo3[0], initTimeBreakTo[0], initTimeBreakTo[1]),
                  css: 'dhx_time_reserved'
                });
              }
            }
          });

          if (typeof data.otherBids !== 'undefined') {
            data.otherBids.forEach(function (e) {
              var initDateFrom = e.timeFrom;
              initDateFrom = initDateFrom.split(' ');
              var startDate = initDateFrom[0].split('-');
              var startDateTime = initDateFrom[1].split(':');
              var initDateTo = e.timeTo;
              initDateTo = initDateTo.split(' ');
              var endDate = initDateTo[0].split('-');
              var endDateTime = initDateTo[1].split(':');
              scheduler.addMarkedTimespan({
                start_date: new Date(startDate[0], startDate[1] - 1, startDate[2], startDateTime[0], startDateTime[1]),
                end_date: new Date(endDate[0], endDate[1] - 1, endDate[2], endDateTime[0], endDateTime[1]),
                css: 'dhx_time_booked'
              });
            });
          }
        });
      } else {
        scheduler.deleteMarkedTimespan(); // удаляем заглушку в календаре елси нет графика работы

        if (arrData == null) {
          return false;
        } else {
          Object(_functions__WEBPACK_IMPORTED_MODULE_5__["checkNumberMasters"])(mastersCount, schedule);
        }

        var countUser = Object.keys(arrData).length;

        if (countUser >= 1) {
          if (buttonPrev == 1 || buttonPrev == null) {
            $(document).find('.jsCrmCalendarButtonPrev').addClass('is-hidden').data('count', buttonPrev);
          } else {
            $(document).find('.jsCrmCalendarButtonPrev').removeClass('is-hidden').data('count', buttonPrev);
          }

          if (buttonNext >= mastersCount) {
            $(document).find('.jsCrmCalendarButtonNext').addClass('is-hidden').data('count', buttonNext);
          } else {
            $(document).find('.jsCrmCalendarButtonNext').removeClass('is-hidden').data('count', buttonNext);
          }
        } else {
          $(document).find('.jsCrmCalendarButtonPrev').addClass('is-hidden');
          $(document).find('.jsCrmCalendarButtonNext').addClass('is-hidden');
        }

        $.each(arrData, function (key, data) {
          arrEmployees.push({
            key: key,
            label: '<div class="user user--small" data-id="' + data.userID + '"><div class="user__img">' + data.avatar + '</div><div class="user__name">' + data.name + '</div></div>'
          });

          if (typeof data.workFrom !== 'undefined') {
            var initDateFrom = data.workFrom;
            initDateFrom = initDateFrom[0].split('-');
            var initDateFrom3 = initDateFrom[2].split(' ');
            var initTimeFrom = initDateFrom3[1].split(':');
            var initDateTo = data.workTo;
            initDateTo = initDateTo[0].split('-');
            var initDateTo3 = initDateTo[2].split(' ');
            var initTimeTo = initDateTo3[1].split(':');
            scheduler.addMarkedTimespan({
              start_date: new Date(initDateFrom[0], initDateFrom[1] - 1, initDateFrom3[0], initTimeFrom[0], initTimeFrom[1]),
              end_date: new Date(initDateTo[0], initDateTo[1] - 1, initDateTo3[0], initTimeTo[0], initTimeTo[1]),
              css: 'dhx_time_reserved',
              sections: {
                unit: key
              }
            });
          }

          if (typeof data.workBreakFrom !== 'undefined') {
            var initDateBreakFrom = data.workBreakFrom;
            initDateBreakFrom = initDateBreakFrom[0].split('-');
            var initDateBreakFrom3 = initDateBreakFrom[2].split(' ');
            var initTimeBreakFrom = initDateBreakFrom3[1].split(':');
            var initDateBreakTo = data.workBreakTo;
            initDateBreakTo = initDateBreakTo[0].split('-');
            var initDateBreakTo3 = initDateBreakTo[2].split(' ');
            var initTimeBreakTo = initDateBreakTo3[1].split(':');
            scheduler.addMarkedTimespan({
              start_date: new Date(initDateBreakFrom[0], initDateBreakFrom[1] - 1, initDateBreakFrom3[0], initTimeBreakFrom[0], initTimeBreakFrom[1]),
              end_date: new Date(initDateBreakTo[0], initDateBreakTo[1] - 1, initDateBreakTo3[0], initTimeBreakTo[0], initTimeBreakTo[1]),
              css: 'dhx_time_reserved',
              sections: {
                unit: key
              }
            });
          }

          if (typeof data.otherBids !== 'undefined') {
            data.otherBids.forEach(function (e) {
              var initDateFrom = e.timeFrom;
              initDateFrom = initDateFrom.split(' ');
              var startDate = initDateFrom[0].split('-');
              var startDateTime = initDateFrom[1].split(':');
              var initDateTo = e.timeTo;
              initDateTo = initDateTo.split(' ');
              var endDate = initDateTo[0].split('-');
              var endDateTime = initDateTo[1].split(':');
              scheduler.addMarkedTimespan({
                start_date: new Date(startDate[0], startDate[1] - 1, startDate[2], startDateTime[0], startDateTime[1]),
                end_date: new Date(endDate[0], endDate[1] - 1, endDate[2], endDateTime[0], endDateTime[1]),
                css: 'dhx_time_booked',
                sections: {
                  unit: key
                }
              });
            });
          }
        });
        scheduler.createUnitsView({
          name: 'unit',
          property: 'section_id',
          list: arrEmployees
        });
      }

      scheduler.config.xml_date = '%Y-%m-%d %H:%i';
      scheduler.config.mark_now = utc;
      scheduler.config.multi_day = true;
      scheduler.locale.labels.unit_tab = 'Unit';
      scheduler.locale.labels.section_custom = 'Section';
      scheduler.config.first_hour = minStartCalendarHour;
      scheduler.config.time_step = 15;
      scheduler.config.limit_time_select = true;
      scheduler.config.dblclick_create = false;
      scheduler.config.quick_info_detached = false;
      scheduler.config.drag_create = false;

      if (userRole === 'sm') {
        scheduler.config.drag_move = false;
        scheduler.config.drag_resize = false;
      }

      scheduler.locale.labels.section_evType = 'Event type';

      if (view === 'week') {
        scheduler.xy.scale_height = 40;
        scheduler.xy.nav_height = 0;
        var initDate = currentDate.split('-');
        scheduler.init('calendar', new Date(initDate[0], initDate[1] - 1, initDate[2]), 'week');

        if ($(window).width() <= 480) {
          _parseWeekDays();
        }
      } else {
        if ($(window).width() <= 480) {
          scheduler.xy.scale_height = 90;
        } else {
          scheduler.xy.scale_height = 80;
        }

        scheduler.xy.nav_height = 0;
        var initDate = currentDate.split('-');
        scheduler.init('calendar', new Date(initDate[0], initDate[1] - 1, initDate[2]), 'unit');

        if ($(document).find('.dhx_scale_holder').length) {
          var dhxScale = $(document).find('.dhx_scale_holder');
          dhxScale.addClass('jsCrmCalendarScaleHolder');

          if (document.offsetWidth >= 480) {
            dhxScale.attr('data-move-block-target', 'request-desktop');
          } else {
            dhxScale.attr('data-move-block-target', 'request');
          }
        }

        if ($(document).find('.dhx_scale_holder_now').length) {
          var _dhxScale = $(document).find('.dhx_scale_holder_now');

          _dhxScale.addClass('jsCrmCalendarScaleHolder');

          if (document.documentElement.offsetWidth >= 480) {
            _dhxScale.attr('data-move-block-target', 'request-desktop');
          } else {
            _dhxScale.attr('data-move-block-target', 'request');
          }
        }
      }

      if (userRole !== 'sm') {
        setTimeout(function () {
          var $request;
          var $requestEdit;

          if ($(window).width() > 480) {
            $request = 'request-desktop';
            $requestEdit = 'request-desktop-edit';
          } else {
            $request = 'request';
            $requestEdit = 'request';
          }

          var list = document.getElementsByClassName('dhx_cal_event');

          for (var i = 0; i < list.length; i++) {
            list[i].setAttribute('data-move-block-target', $requestEdit);
          }

          var marked = document.getElementsByClassName('dhx_marked_timespan');

          for (var i = 0; i < marked.length; i++) {
            marked[i].setAttribute('data-move-block-target', $request);
          }
        }); // Edit bid

        _editBid(); // Drag and drop single bid


        _dragBid(); // Create a new bud (click on empty place)


        _createBid();
      } // Put bids on calendar


      _generateBids(arrData); // Show time on calendar in every block


      if ($(window).width() > 480) {
        _showTime();
      } // scheduler.hideQuickInfo();

    }
  }

  function _parseWeekDays() {
    var dateBlock = $('.dhx_scale_bar');

    if (dateBlock.length) {
      dateBlock.each(function () {
        var temp = $(this).attr('aria-label');
        temp = temp.split(',');
        var newDate = temp[1].split(' ');
        newDate = '<div style="font-size:19px; width: 40%;">' + newDate[2] + '</div><div style="font-size:11px;" >' + temp[0] + '</div>';
        $(this).html(newDate);
      });
    }
  }

  function _showTime() {
    if (!scheduler._onMouseMove) {
      var marked_date = null;
      var marked = null;
      var event_step = 15;
      scheduler.attachEvent('onMouseMove', function (event_id, native_event) {
        var date = scheduler.getActionData(native_event).date;
        var fixed_date = new Date(date);
        scheduler.unmarkTimespan(marked);
        marked_date = fixed_date;
        var minutes = fixed_date.getMinutes();

        if (minutes == 0) {
          minutes = minutes + '0';
        }

        marked = scheduler.markTimespan({
          start_date: fixed_date,
          end_date: scheduler.date.add(fixed_date, event_step, 'minute'),
          css: 'c-calendar__timespan',
          html: '<span>' + fixed_date.getHours() + ':' + minutes + '</span>'
        });
        marked.forEach(function (item) {
          if (document.documentElement.offsetWidth >= 480) {
            item.setAttribute('data-move-block-target', 'request-desktop');
          } else {
            item.setAttribute('data-move-block-target', 'request');
          }
        });
      });
    }
  }

  function _createBid() {
    if (!scheduler._onEmptyClick) {
      scheduler._onEmptyClick = scheduler.attachEvent('onEmptyClick', function (date, e) {
        if ($('.jsCrmCalendarWeekView').hasClass('is-checked')) {
          var masterID = $('.jsCrmCalendarEmployeesSelect').val();
        } else {
          var clickBlock = $(e.target);
          var index = clickBlock.closest('.jsCrmCalendarScaleHolder').index();
          var userBlock = $('.dhx_scale_bar').eq(index);
          var masterID = userBlock.find('.user--small').data('id');
        }

        if ($(window).width() > 480) {
          var addressID = $('.jsCrmCalendarAddressesSelect').val();
        } else {
          var addressID = $('.jsCrmCalendarAddressesSelectMobile').val();
        }

        if ($(window).width() > 768) {
          $.ajax({
            method: 'POST',
            url: '/ajaxCrmBidCreateNewBlock',
            data: {
              masterID: masterID,
              addressID: addressID,
              date: _getTimeStart(date),
              _token: token
            }
          }).done(function (response) {
            if (response.success === true) {
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["ajaxCrmInsertContent"])(response.html, e, 'move');
              setTimeout(function () {
                BB.Core.Component.initTab();
                BB.Core.Select.init();
                BB.Crm.Module.Aplication.init();
                BB.Core.Component.initTab();
                Object(_functions__WEBPACK_IMPORTED_MODULE_5__["selectBidNewDay"])(date);
                BB.Core.Component.initFieldEdit();
              }, 300);
              $('.aplication-item__counter').first().text('1');
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["updateBidSum"])();
            }
          });
        } else {
          var data = null;
          var crmCalendarInputCalendarTop = $('.jsCrmCalendarInputCalendarTop');

          if (crmCalendarInputCalendarTop.length > 0) {
            data = crmCalendarInputCalendarTop.val();
          }

          $.ajax({
            method: 'POST',
            url: '/ajaxCrmBidCreateNewBlockMobile',
            data: {
              masterID: masterID,
              addressID: addressID,
              time: _getTimeStart(date),
              date: data,
              _token: token
            }
          }).done(function (response) {
            if (response.success === true) {
              console.log(e.target);
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["ajaxCrmInsertContent"])(response.html, e, 'move');
              setTimeout(function () {
                BB.Core.Component.initTab();
                BB.Core.Select.init();
                BB.Component.Dropdown.init();
                BB.Core.Component.initTab();
                Object(_functions__WEBPACK_IMPORTED_MODULE_5__["selectBidNewDay"])(date); // $(document).find('[data-move-block]').addClass('is-open');
              }, 100);
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["updateMobileBidSum"])();
            }
          });
        }
      });
    }
  }

  function _generateBids(arrData) {
    // Clear old data from calendar
    scheduler.clearAll(); // Add bids to calendar

    var arrBids = [];
    $.each(arrData, function (key, userData) {
      if (typeof userData.bids !== 'undefined') {
        var textHtml = '<div class="request-item__status">' + '<span>онлайн-запись</span>' + '</div>';
        $.each(userData.bids, function (bidKey, bidData) {
          var i = 0;
          arrBids.push({
            id: i,
            start_date: bidData.date + ' ' + bidData.timeFrom,
            end_date: bidData.date + ' ' + bidData.timeTo,
            text: bidData.service,
            section_id: key,
            class: bidData.class,
            masterName: bidData.masterName,
            clientName: bidData.clientName,
            clientPhone: bidData.clientPhone,
            clientID: bidData.clientID,
            comment: bidData.comment,
            price: bidData.price,
            statusTitle: bidData.statusTitle,
            bidID: bidData.bidID,
            isOnline: bidData.isOnline,
            onlineVisible: bidData.onlineVisible,
            isChecked: bidData.isChecked
          });
          i++;

          scheduler.templates.event_text = function (start, end, event) {
            if (event.isOnline == 1 && event.onlineVisible != 0) {
              return event.text + ' (' + event.clientName + ') ' + textHtml;
            }

            return event.text + ' (' + event.clientName + ') ';
          };

          scheduler.templates.event_class = function (start, end, event) {
            if (event.isChecked == 1 && event.onlineVisible != 0) {
              return event.class + ' is-checked';
            }

            return event.class;
          };

          if ($(window).width() >= 768) {
            _tooltip();
          }
        });
      }
    });
    scheduler.parse(arrBids, 'json');
  }

  function _dragBid() {
    if (!scheduler._onDragEnd) {
      scheduler._onDragEnd = scheduler.attachEvent('onDragEnd', function (id, as, ff) {
        var newPosition = scheduler.getEvent(id);

        var arrData = _getParams(newPosition);

        var eventBlock = $('div[event_id=' + id + ']');
        var eventBlockIndex = eventBlock.parent().index();
        var userBlock = $('.dhx_scale_bar').eq(eventBlockIndex);
        var userID = userBlock.find('.user--small').data('id');
        var $offset = $(document).find('.jsCrmCalendarButtonPrev').data('count');

        if ($offset === 1) {
          $offset = null;
        } else {
          $offset = $offset - 1;
        }

        $.ajax({
          method: 'POST',
          url: '/ajaxCrmCalendarDragAndDropSingleBid',
          data: {
            bidID: newPosition.bidID,
            startDate: arrData['startDate'],
            endDate: arrData['endDate'],
            date: arrData['date'],
            dateTime: arrData['dateTime'],
            userID: userID,
            _token: token
          }
        }).done(function (response) {
          if (response.success === true) {
            var viewWeek = $(document).find('.jsCrmCalendarWeekView');
            var view = 'day';

            if (viewWeek.hasClass('is-checked')) {
              view = 'week';
            }

            var currentDate = $(document).find('.jsCrmCalendarInputCalendarTop');

            if (viewWeek.length > 0) {
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["calendarClickOnCalendarDay"])(currentDate.val(), view, $offset, 'right');
            }
          }
        });
      });
    }
  }

  function _editBid() {
    if (!scheduler._onClick) {
      scheduler._onClick = scheduler.attachEvent('onClick', function (id, e) {
        $('.dhx_cal_quick_info').remove();
        var event = scheduler.getEvent(id);
        var bidID = event.bidID;
        var clientID = event.clientID;

        if ($(window).width() > 768) {
          $.ajax({
            method: 'POST',
            url: '/ajaxCrmBidOpenBlockEdit',
            data: {
              bidID: bidID,
              clientID: clientID,
              _token: token
            }
          }).done(function (response) {
            if (response.success === true) {
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["ajaxCrmInsertContent"])(response.html, e, 'move');
              BB.Core.Select.init();
              BB.Core.Component.initTab();
              setTimeout(function () {
                BB.Component.Dropdown.init();
              }, 400);
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["selectBidNewDay"])();
            }
          });
        } else {
          var date = null;
          var crmCalendarInputCalendarTop = $('.jsCrmCalendarInputCalendarTop');

          if (crmCalendarInputCalendarTop.length) {
            date = crmCalendarInputCalendarTop.val();
          }

          $.ajax({
            method: 'POST',
            url: '/ajaxCrmBidCreateNewBlockMobile',
            data: {
              date: date,
              bid: bidID,
              _token: token
            }
          }).done(function (response) {
            if (response.success === true) {
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["ajaxCrmInsertContent"])(response.html, e, 'move');
              setTimeout(function () {
                BB.Core.Select.init();
                BB.Core.Component.initTab();
                Object(_functions__WEBPACK_IMPORTED_MODULE_5__["selectBidNewDay"])(date); // $(document).find('[data-move-block]').addClass('is-open');
              }, 100);
              Object(_functions__WEBPACK_IMPORTED_MODULE_5__["updateMobileBidSum"])();
            }
          });
        }
      });
    }
  }

  function _tooltip() {
    var tooltip = scheduler.dhtmlXTooltip;
    tooltip.config.className = 'dhtmlXTooltip tooltip c-calendar-tooltip';
    var format = scheduler.date.date_to_str('%H:%i');

    scheduler.templates.tooltip_text = function (start, end, event) {
      var clientPhone = false;
      var clientComment = false;

      if (event.clientPhone !== 'undefined') {
        clientPhone = event.clientPhone;
      }

      if (event.comment !== 'undefined' || event.comment !== null) {
        clientComment = event.comment;
      }

      var html = '<span class="c-calendar-tooltip__header ' + event.class + '">' + event.statusTitle + '</span>';
      html += '<div class="c-calendar-tooltip__body ' + event.class + '">';
      html += '<span class="c-calendar-tooltip__user">' + event.clientName + '</span>';

      if (clientPhone) {
        html += '<span class="c-calendar-tooltip__phone">' + clientPhone + '</span>';
      }

      html += '<span class="c-calendar-tooltip__service">' + event.text + '</span>';
      html += '<span class="c-calendar-tooltip__time">' + format(start) + ' - ' + format(end) + '</span>';
      html += '<span class="c-calendar-tooltip__price">' + event.price + ' <i class="far fa-ruble-sign"></i></span>';
      html += '<span class="c-calendar-tooltip__master">' + event.masterName + '</span>';

      if (clientComment) {
        html += '<span class="c-calendar-tooltip__comment">Комментарий: ' + clientComment + '</span>';
      }

      html += '</div>';
      return html;
    };
  }

  function _timeStep() {
    var step = 15;
    var format = scheduler.date.date_to_str('%H:%i');
    scheduler.config.hour_size_px = 60 / step * 22;

    scheduler.templates.hour_scale = function (date) {
      var html = '';

      for (var i = 0; i < 60 / step; i++) {
        html += "<div style='height:22px;line-height:22px;'>" + format(date) + '</div>';
        date = scheduler.date.add(date, step, 'minute');
      }

      return html;
    };
  }

  function _heights() {
    var height = $(document).height();
    var headerHeight = $('.header').outerHeight(true);
    var topLineHeight = $('.calendar__top-line').outerHeight(true);
    var menuHeight = $('.js-menu').outerHeight(true);
    var calcCalendarHeith;

    if ($(window).width() > 480) {
      calcCalendarHeith = height - (headerHeight + topLineHeight);
    } else {
      calcCalendarHeith = height - (headerHeight + topLineHeight + menuHeight);
    } // $('.c-calendar').css('height', calcCalendarHeith);


    $('.c-calendar').css('height', calcCalendarHeith);
  }

  function _getParams(data) {
    var arrData = [];
    var minutes = new Date(data.start_date).getMinutes();

    if (minutes == 0 || minutes == 5) {
      minutes = '0' + minutes;
    }

    arrData['startDate'] = new Date(data.start_date).getHours() + ':' + minutes;
    minutes = new Date(data.end_date).getMinutes();

    if (minutes == 0 || minutes == 5) {
      minutes = '0' + minutes;
    }

    arrData['endDate'] = new Date(data.end_date).getHours() + ':' + minutes;
    var day = new Date(data.end_date).getDate();

    if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9) {
      day = '0' + day;
    }

    arrData['date'] = new Date(data.end_date).getFullYear() + '-' + (new Date(data.end_date).getMonth() + 1) + '-' + day;
    arrData['dateTime'] = arrData['date'] + ' ' + arrData['startDate'];
    return arrData;
  }

  function _getTimeStart(date) {
    var minutes = new Date(date).getMinutes();

    if (minutes == 0 || minutes == 5) {
      minutes = '0' + minutes;
    }

    var hours = new Date(date).getHours();

    if (hours == 1 || hours == 2 || hours == 3 || hours == 4 || hours == 5 || hours == 6 || hours == 7 || hours == 8 || hours == 9) {
      hours = '0' + hours;
    }

    return hours + ':' + minutes;
  }

  return {
    generateCalendar: _generateCalendar
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "X6hby5Wj":
/*!*******************************************************!*\
  !*** ./resources/js/_frontend/components/CheckBox.js ***!
  \*******************************************************/
/*! exports provided: CheckBox, Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return CheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/* html example
<label class="bb-checkbox js-bb-checkbox">
    <input type="checkbox">
    <span class="bb-checkbox__box"></span>
    <span class="bb-checkbox__title">WhatsApp</span>
</label>
*/


var CheckBox =
/*#__PURE__*/
function () {
  function CheckBox(args) {
    _classCallCheck(this, CheckBox);

    this.selector = document.querySelectorAll(args.selector);
    this.element = typeof this.selector === 'string' ? document.querySelector(this.selector) : this.selector;
    if (!this.element) return;
    this.checkStatus();
    this.init();
  }

  _createClass(CheckBox, [{
    key: "init",
    value: function init() {
      var checkbox = this.selector;

      var _loop = function _loop(i) {
        var label = checkbox[i];
        var checkboxInput = label.querySelector('input[type="checkbox"]');
        label.addEventListener('click', function (e) {
          return e.stopImmediatePropagation();
        });

        if (checkboxInput) {
          checkboxInput.addEventListener('change', function (e) {
            var input = e.target;

            if (input.checked) {
              label.classList.add('is-checked');
              input.setAttribute('checked', 'checked');
            } else {
              label.classList.remove('is-checked');
              input.removeAttribute('checked');
              label.classList.remove('is-checked');
              input.removeAttribute('checked');
            }
          });
        } // checkbox[i].addEventListener('click', function(e) {
        //     let elem = this;
        //     let elementToggle = elem.querySelector(
        //         'input[type="checkbox"]'
        //     );
        //     if (elementToggle.checked) {
        //         elem.classList.remove('is-checked');
        //         elementToggle.checked = false;
        //         elementToggle.removeAttribute('checked');
        //     } else {
        //         elem.classList.add('is-checked');
        //         elementToggle.checked = true;
        //         elementToggle.setAttribute('checked', 'checked');
        //     }
        //     e.stopPropagation();
        //     // e.preventDefault();
        // });

      };

      for (var i = 0; i < checkbox.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "checkStatus",
    value: function checkStatus() {
      var check = [];
      var noCheck = [];
      var togCheck = [];
      var togNoCheck = [];
      var checkbox = this.selector;
      var i;
      var len;

      for (i = 0, len = checkbox.length; i < len; i++) {
        var elem = checkbox[i];
        var elementToggle = elem.querySelector('input[type="checkbox"]');

        if (elementToggle) {
          if (!elementToggle.checked) {
            noCheck.push(elem);
            togNoCheck.push(elementToggle);
          } else {
            check.push(elem);
            togCheck.push(elementToggle);
          }
        }
      }

      for (i = 0, len = check.length; i < len; i++) {
        check[i].classList.add('is-checked');
      }

      for (i = 0, len = noCheck.length; i < len; i++) {
        noCheck[i].classList.remove('is-checked');
      }

      for (i = 0, len = togNoCheck.length; i < len; i++) {
        togNoCheck[i].removeAttribute('checked');
        togNoCheck[i].checked = false;
      }

      for (i = 0, len = togCheck.length; i < len; i++) {
        togCheck[i].setAttribute('checked', 'checked');
        togCheck[i].checked = true;
      }
    }
  }]);

  return CheckBox;
}(); // html example
// <label class="bb-checkbox bb-checkbox--radio js-bb-radio">
//     <input name="role" type="radio">
//     <span class="bb-checkbox__box"></span>
//     <span class="bb-checkbox__title">Салон</span>
// </label>


var Radio =
/*#__PURE__*/
function () {
  function Radio(args) {
    _classCallCheck(this, Radio);

    this.selector = args.selector;
    this.element = typeof this.selector === 'string' ? document.querySelector(this.selector) : this.selector;
    if (!this.element) return;
    this.init();
  }

  _createClass(Radio, [{
    key: "init",
    value: function init() {
      var mainScope = this;
      $(this.selector).click(function (event) {
        var element = $(this),
            elementToggle = element.find('input[type="radio"]') || element.find('.bb-checkbox__toggle');
        var elementToggleName = elementToggle.attr('name');
        var allElements = $(mainScope.selector, '[name="' + elementToggleName + '"]').prevObject;

        for (var a = 0; a < allElements.length; a++) {
          if (allElements[a] != elementToggle[0]) {
            var otherRadio = $(mainScope._getClickElement(mainScope.selector.split('.')[1], allElements[a])),
                otherRadioToggle = otherRadio.find('input[type="radio"]');
            otherRadioToggle.removeAttr('checked');
            otherRadioToggle.prop('checked', false).trigger('change');
            otherRadio.removeClass('is-checked');
          }
        }

        if (!elementToggle.prop('checked')) {
          elementToggle.attr('checked', 'checked');
          elementToggle.prop('checked', true).trigger('change');
          element.addClass('is-checked');
        }
      });
    }
  }, {
    key: "_getClickElement",
    value: function _getClickElement(elementClass, newTarget) {
      var target = newTarget != undefined ? newTarget : event.target,
          body = document.querySelector('body');

      while (!target.classList.contains(elementClass) && target != body) {
        target = target.parentNode;
      }

      return target == body ? undefined : target;
    }
  }]);

  return Radio;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "YIMmNmdN":
/*!***************************************************!*\
  !*** ./resources/js/_frontend/core/components.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery_ui_ui_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-ui/ui/widget */ "MIQudTHI");
/* harmony import */ var jquery_ui_ui_widget__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widget__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_keycode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/keycode */ "vBzCeDN9");
/* harmony import */ var jquery_ui_ui_keycode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_keycode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_ui_ui_unique_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-ui/ui/unique-id */ "y6ec14Tn");
/* harmony import */ var jquery_ui_ui_unique_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_unique_id__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_ui_ui_widgets_mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-ui/ui/widgets/mouse */ "iGnlbJef");
/* harmony import */ var jquery_ui_ui_widgets_mouse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_mouse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_ui_ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-ui/ui/widgets/tabs */ "pVw5+XkD");
/* harmony import */ var jquery_ui_ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery-ui-touch-punch */ "3G7nzEva");
/* harmony import */ var jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_touch_punch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_frontend_lib_stickyBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/js/_frontend/_lib/stickyBlock */ "ptMOt6Wa");
/* harmony import */ var _js_frontend_lib_stickyBlock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_frontend_lib_stickyBlock__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_frontend_components_AddForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/js/_frontend/components/AddForm */ "I6OyOeXw");
/* harmony import */ var _js_frontend_components_Accordeon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/js/_frontend/components/Accordeon */ "aRTqku9E");
/* harmony import */ var _js_frontend_components_BoxColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/js/_frontend/components/BoxColor */ "LY33D3Ob");
/* harmony import */ var _js_frontend_components_CheckBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/js/_frontend/components/CheckBox */ "X6hby5Wj");
/* harmony import */ var _js_frontend_components_CopyBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/js/_frontend/components/CopyBox */ "f12II7tM");
/* harmony import */ var _js_frontend_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/js/_frontend/components/Dropdown */ "v3ZKScbb");
/* harmony import */ var _js_frontend_components_ParallaxBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/js/_frontend/components/ParallaxBlock */ "giEUlhd5");
/* harmony import */ var _js_frontend_components_SlideLine__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/js/_frontend/components/SlideLine */ "oCjWKTYn");
/* harmony import */ var _js_frontend_components_VideoLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/js/_frontend/components/VideoLoader */ "JyK8v35W");
/* harmony import */ var _js_frontend_components_Viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/js/_frontend/components/Viewer */ "nq/r7UAn");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Button */ "4DyJSCms");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Input */ "/gOucKAl");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Popup */ "bvfC994q");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Select */ "Qx9plHsn");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Slider */ "DLGeotdn");
/**
 * BB.Components.js
 * Здесь инициализируем те компоненты которые могуть быть использованы хотябы в 2-х точках входа
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Core.Component');
/* node_modules */

 //Need for tabs ui & touch-punch

 //Need for tabs ui

 //Need for tabs ui

 //Need for touch-punch


 // import ElementQueries from 'css-element-queries/src/ElementQueries';
// import StickySidebar from 'sticky-sidebar';
// import '@/js/_frontend/_lib/stickyBlockResizeSensor';


/* Our components */
















/* harmony default export */ __webpack_exports__["default"] = (BB.Core.Component = function () {
  function _init() {
    window.addEventListener('load', function () {
      _initCheckBox();

      _initCheckBoxSelectAll();

      _initTab();

      _initChanger();

      _initBoxColor();

      _initParallaxBlock();

      _initAccordeon();

      _initProgressLine();

      _initCopyBox();

      _initViewer();

      _initVideoLoader();

      _initSlideLine();

      _initStickyBlock();

      _initAddForm();

      _initFieldEdit();

      _initTimer();

      _initControlBox();
    });
    _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"].init();
    _js_frontend_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__["default"].init(document.body);
    _components_Input__WEBPACK_IMPORTED_MODULE_18__["default"].init();
    _components_Popup__WEBPACK_IMPORTED_MODULE_19__["default"].init();
    _components_Select__WEBPACK_IMPORTED_MODULE_20__["default"].init();
    _components_Slider__WEBPACK_IMPORTED_MODULE_21__["default"].init(); // ElementQueries.init();
    // _initServicesBtnInfo();
  }

  function _initCheckBox() {
    new _js_frontend_components_CheckBox__WEBPACK_IMPORTED_MODULE_10__["CheckBox"]({
      selector: '.js-bb-checkbox'
    });
    new _js_frontend_components_CheckBox__WEBPACK_IMPORTED_MODULE_10__["Radio"]({
      selector: '.js-bb-radio'
    });
  }

  function _initCheckBoxSelectAll() {
    var allChangeControl = $('.js-bb-checkbox--select-all');
    var changeControlInput = allChangeControl.find('input');
    var checkBox = allChangeControl.closest('div').find('.js-bb-checkbox').not('.js-bb-checkbox--select-all');
    changeControlInput.on('change', function () {
      var $this = $(this);
      var parentCheckAll = $this.closest('.js-bb-checkbox--select-all');

      if (this.checked) {
        parentCheckAll.addClass('is-checked');
        var $checkboxs = parentCheckAll.closest('div').find('.js-bb-checkbox');
        $checkboxs.each(function () {
          if (!$(this).hasClass('js-no-all-check')) {
            this.querySelector('input').checked = true;
            $(this).addClass('is-checked');
          }
        });
      } else {
        parentCheckAll.removeClass('is-checked');

        var _$checkboxs = parentCheckAll.closest('div').find('.js-bb-checkbox');

        _$checkboxs.each(function () {
          if (!$(this).hasClass('js-no-all-check')) {
            this.querySelector('input').checked = false;
            $(this).removeClass('is-checked');
          }
        });
      } // return false;

    });
    checkBox.on('change', function () {
      var thisChangeControl = $(this).closest('div').find('.js-bb-checkbox--select-all');
      thisChangeControl.removeClass('is-checked').find('input').prop('checked', false);
    });
  }

  function _initTab() {
    var $tabs = $('.js-bb-tab');

    if ($tabs.length) {
      $tabs.tabs();
    }
  }

  function _initChanger() {
    var $changer = $(document).find('.js-changer');
    var CHECKED_CLASS = 'is-checked';

    if ($changer.length) {
      $changer.each(function () {
        var $item = $(this).find('.changer__item');
        var $btnReset = $(this).find('.changer__reset');
        $item.on('click', function (e) {
          $item.not($(this)).removeClass(CHECKED_CLASS);
          $(this).addClass(CHECKED_CLASS); // e.stopPropagation(); Не раскоментировать
          // e.preventDefault(); Не раскоментировать
        });
        $btnReset.on('click', function (e) {
          var $parent = $(this).closest('.changer__item');
          $parent.removeClass(CHECKED_CLASS); // e.stopPropagation(); Не раскоментировать
        });
      });
    }
  }

  function _initBoxColor() {
    new _js_frontend_components_BoxColor__WEBPACK_IMPORTED_MODULE_9__["default"]();
  }

  function _initParallaxBlock() {
    var paralaxBlock = '.js-parallax';

    if (document.querySelectorAll(paralaxBlock) && window.innerWidth > 480) {
      new _js_frontend_components_ParallaxBlock__WEBPACK_IMPORTED_MODULE_13__["default"]({
        selector: paralaxBlock,
        transform: true
      }).init();
    }
  }

  function _initProgressLine() {
    var elements = document.querySelectorAll('[data-progress]');

    if (elements.length) {
      setTimeout(function () {
        elements.forEach(function (elem) {
          var data = elem.getAttribute('data-progress');
          if (data > 100) return;

          if (data < 90) {
            elem.style.width = parseInt(data) + 5 + '%';
            setTimeout(function () {
              elem.style.width = parseInt(data) + '%';
            }, 1000);
          } else {
            elem.style.width = parseInt(data) + '%';
          }
        });
      }, 1000);
    }
  }

  function _initAccordeon() {
    console.log(3333);
    var accordeon = '.js-bb-accordeon';

    if (document.querySelector(accordeon)) {
      new _js_frontend_components_Accordeon__WEBPACK_IMPORTED_MODULE_8__["default"]({
        selector: accordeon
      }).init();
    }
  }

  function _initCopyBox() {
    new _js_frontend_components_CopyBox__WEBPACK_IMPORTED_MODULE_11__["default"]({
      selector: '.js-copy-box'
    });
  }

  function _initViewer() {
    var vieverClass = '.js-viewer';

    if (document.querySelector(vieverClass)) {
      new _js_frontend_components_Viewer__WEBPACK_IMPORTED_MODULE_16__["default"]({
        selector: vieverClass
      }).init();
    }
  }

  function _initVideoLoader() {
    new _js_frontend_components_VideoLoader__WEBPACK_IMPORTED_MODULE_15__["default"]().init();
  }

  function _initStickyBlock() {
    var stickyBlock = '[data-sticky]';
    var $stickyBlock = $(stickyBlock);
    var stickyBlockContainer = '[data-sticky-container]';
    var stickyBlockInner = '[data-sticky-inner]';
    var maxWindowWidth = $stickyBlock.data('sticky-width') || 768;
    var stickyBlockTopSpasing = $stickyBlock.data('sticky-top-spacing') || 10;
    var stickyBlockBottomSpasing = $stickyBlock.data('sticky-bottom-spacing') || 10;

    if ($stickyBlock.length && $(window).width() > maxWindowWidth) {
      if (true) {
        console.log('--- init sticky block');
      }

      new _js_frontend_lib_stickyBlock__WEBPACK_IMPORTED_MODULE_6___default.a(stickyBlock, {
        topSpacing: stickyBlockTopSpasing,
        bottomSpacing: stickyBlockBottomSpasing,
        containerSelector: stickyBlockContainer,
        innerWrapperSelector: stickyBlockInner
      });
    }
  }

  function _initAddForm() {
    new _js_frontend_components_AddForm__WEBPACK_IMPORTED_MODULE_7__["default"]({
      selector: 'js-add-form'
    }).init();
  }

  function _initSlideLine() {
    var slideLine = document.querySelector('[data-slide-line]');

    if (slideLine) {
      new _js_frontend_components_SlideLine__WEBPACK_IMPORTED_MODULE_14__["default"]({
        selector: '[data-slide-line]'
      }).init();
    }
  }

  function _initFieldEdit() {
    var fieldEdit = '.js-field-edit';
    var $fieldEdit = $(document).find('.js-field-edit');

    if ($fieldEdit.length) {
      $fieldEdit.each(function () {
        var $fieldEditInput = $(this).find('.field-edit__input');
        var $fieldEditBtn = $(this).find('.field-edit__btn');
        $fieldEditBtn.on('click', function () {
          var $fieldEditInput = $(this).closest(fieldEdit).find('.field-edit__input');
          var $fieldEditText = $(this).closest(fieldEdit).find('.field-edit__text');
          var fieldEditText = $fieldEditText.text();
          $(this).hide();
          $fieldEditText.hide();
          $fieldEditInput.val(fieldEditText).show().select();
        });
        $fieldEditInput.blur(function () {
          var $fieldEditText = $(this).closest(fieldEdit).find('.field-edit__text');

          if ($.trim(this.value) == '') {
            this.value = this.defaultValue ? this.defaultValue : '';
          } else {
            $fieldEditText.html(this.value);
          }

          $(this).hide();
          $fieldEditBtn.show();
          $fieldEditText.show();
        }).keypress(function (event) {
          var $fieldEditText = $(this).closest(fieldEdit).find('.field-edit__text');

          if (event.keyCode == '13') {
            if ($.trim(this.value) == '') {
              this.value = this.defaultValue ? this.defaultValue : '';
            } else {
              $fieldEditText.html(this.value);
            }

            $(this).hide();
            $fieldEditBtn.removeAttr('style');
            $fieldEditText.show();
          }
        });
      });
      $(document).on('touchstart', function (e) {
        if ($(e.target).closest(fieldEdit).length) return;
        var $input = $fieldEdit.find('input');
        var $text = $fieldEdit.find('.field-edit__text');
        var $btn = $fieldEdit.find('.field-edit__btn');

        if ($.trim($input.value) == '') {
          $input.value = $input.defaultValue ? $input.defaultValue : '';
        } else {
          $text.html($input.value);
        }

        $fieldEdit.find('input').hide();
        $fieldEdit.find('.field-edit__text').show();
        $fieldEdit.find('.field-edit__btn').show();
      });
    }
  }

  function _initTimer() {
    $('.js-timer-bnt--repeat').on('click', function (e) {
      $(this).css('display', 'none').closest('.js-timer').find('.js-timer-text').removeAttr('style');
      phoneConfirmTimer();
    }); //Timer function

    function phoneConfirmTimer() {
      var $timer = $(document).find('.js-timer');
      $timer.each(function () {
        var $timerBtnRepeat = $(this).find('.js-timer-bnt--repeat');
        var $timerBtnSkip = $(this).find('.js-timer-bnt--skip');
        var $text = $(this).find('.js-timer-text');
        var $time = $(this).find('[data-timer-time]');

        var timer = function timer() {
          setTimeout(function () {
            var time = $time.data('timer-time');
            $time.text(time);
            var int = setInterval(function () {
              time--;

              if (time == -1) {
                clearInterval(int);
                $text.css('display', 'none');
                $timerBtnRepeat.removeAttr('style');
                $timerBtnSkip.removeAttr('style');
              } else {
                $time.text(time);
              }
            }, 1000);
            $timerBtnRepeat.on('click', function (e) {
              clearInterval(int);
              timer();
            });
          });
        };

        timer();
      });
    }

    phoneConfirmTimer();
  }

  function _initControlBox() {
    var controlBox = '.js-control-box';
    var controlContainer = '.js-control-box-container';
    var controlBtn = document.querySelectorAll('.js-control-box-btn');

    if (controlBtn) {
      var _controlBoxHendler = function _controlBoxHendler(e) {
        $(e.target).closest(controlContainer).find(controlBox).slideToggle();
        e.preventDefault();
        e.stopPropagation();
      };

      controlBtn.forEach(function (btn) {
        btn.removeEventListener('click', _controlBoxHendler);
        btn.addEventListener('click', _controlBoxHendler);
      });
    }
  }

  return {
    init: _init,
    initCheckBox: _initCheckBox,
    initCheckBoxSelectAll: _initCheckBoxSelectAll,
    initTab: _initTab,
    initChanger: _initChanger,
    initBoxColor: _initBoxColor,
    initParallaxBlock: _initParallaxBlock,
    initProgressLine: _initProgressLine,
    initAccordeon: _initAccordeon,
    initCopyBox: _initCopyBox,
    initSlideLine: _initSlideLine,
    initViewer: _initViewer,
    initVideoLoader: _initVideoLoader,
    initStickyBlock: _initStickyBlock,
    initAddForm: _initAddForm,
    initFieldEdit: _initFieldEdit,
    initTimer: _initTimer,
    initControlBox: _initControlBox
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "ZrUso6Ou":
/*!********************************************************!*\
  !*** ./resources/js/_frontend/components/MoveBlock.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/_frontend/core/utils */ "Kdr+IcO5");
/**
 * BB.Component.MoveBlock.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Component.MoveBlock');

/* harmony default export */ __webpack_exports__["default"] = (BB.Component.MoveBlock = function () {
  var moveBlock, overlay;
  var html = document.documentElement;
  var OPEN_CLASS = 'is-open';
  var SCROLL_CLASS = 'is-scrolled';
  var VISIBLE_CLASS = 'is-visible';
  var OVERHEAD_CLASS = 'is-overhead'; //Для перекрытия блоков что под вызываемым

  var width = html.offsetWidth; // let counter = 0; // счетчик открытых блоков

  function _init(element) {
    overlay = document.querySelector('.js-overlay');
    moveBlock = element.querySelectorAll('.js-move-block');

    _callAplicationMobileBlock(element);

    _addEventListener(element);

    for (var i = 0; i < moveBlock.length; i++) {
      if (!moveBlock[i].classList.contains('is-open')) {
        moveBlock[i].setAttribute('inert', '');
        moveBlock[i].setAttribute('tabindex', '-1');
      }
    }

    if (width <= 480) {
      var aplicationBlocks = element.querySelectorAll('.aplication');

      if (aplicationBlocks) {
        aplicationBlocks.forEach(function (aplication) {
          _scroll(aplication);
        });
      }
    }
  }

  function _scroll(aplication) {
    console.log('--- init scroll');
    var wrap = aplication.querySelector('.aplication__wrap') || aplication.querySelector('.tab__inner');

    if (wrap) {
      _moveBlockScroll(wrap, aplication);
    } //Toggle Class for show/hide move-block title


    function _moveBlockScroll(wrap, aplication) {
      wrap.addEventListener('scroll', function (e) {
        var scroll = e.target.scrollTop;
        console.log('--- scroll', scroll);

        _toggleScrolledClass(scroll, aplication);
      });
    }

    function _toggleScrolledClass(scroll, element) {
      if (scroll > 55) {
        element.classList.add(SCROLL_CLASS);
      } else {
        element.classList.remove(SCROLL_CLASS);
      }
    }
  }

  function _addEventListener(element) {
    var btnOpen = element.querySelectorAll('.js-move-block--show');
    var BtnClose = element.querySelectorAll('.js-move-block--close');

    for (var i = 0; i < btnOpen.length; i++) {
      btnOpen[i].removeEventListener('click', _open);
      btnOpen[i].addEventListener('click', _open);
    }

    for (var _i = 0; _i < BtnClose.length; _i++) {
      BtnClose[_i].removeEventListener('click', _close);

      BtnClose[_i].addEventListener('click', _close);
    }
  } //Show / Hide mobile aplication


  function _callAplicationMobileBlock() {
    var $btn = $(document).find('.js-move-block--show');
    $btn.each(function () {
      if ($(window).width() <= 768 && $(this).hasClass('request-item') && !$(this).hasClass('request-item--mobile')) {
        $(this).attr('data-move-block-target', 'request');
      }
    });
  } // метод закрытия окна


  function _close(e, callback) {
    var box = e.target.closest('.move-block__box') || e.target.closest('.aplication__wrap');
    var parent = e.target.closest('.move-block');

    if (box || parent) {
      if (box) {
        box.classList.add('is-close');
        box.classList.remove('is-open');
        setTimeout(function () {
          _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__["default"].documentBlockControl('close');
          box.classList.remove('is-close');
          box.classList.remove(OVERHEAD_CLASS);

          if (typeof callback === 'function') {
            setTimeout(function () {
              callback();
            }, 300);
          }
        }, 200);
      } else {
        parent.classList.add('is-close');
        parent.classList.remove('is-open');
        setTimeout(function () {
          _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__["default"].documentBlockControl('close');
          parent.classList.remove('is-close');
          parent.classList.remove(OVERHEAD_CLASS);

          if (typeof callback === 'function') {
            setTimeout(function () {
              callback();
            }, 300);
          }
        }, 200);
      }
    } else {
      _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__["default"].documentBlockControl('close');

      if (typeof callback === 'function') {
        setTimeout(function () {
          callback();
        }, 300);
      }
    }
  } // function _closeAll(e) {
  //     Utils.documentBlockControl(false, null, null, Utils.ArrayActiveBlock.length);
  // }


  function _open(e, callback) {
    var targetElement = e.target.closest('[data-move-block-target]');
    var btnId = targetElement.getAttribute('data-move-block-target');
    var type = targetElement.getAttribute('data-move-block-type');
    var overlayStatus = targetElement.getAttribute('data-overlay');
    var targetBlock = document.querySelector("[data-move-block=\"".concat(btnId, "\"]"));
    var targetBlockBody = targetBlock.querySelector('.move-block__body') || targetBlock.querySelector('.aplication__wrap');
    var slider = targetBlock.querySelector('.js-slider') || targetBlock.querySelector('.js-slider--preview'); // let $filteredBlock = $(targetBlock);
    // let $slider = $filteredBlock
    //     .find('.bb-slider__slides')
    //     .filter('.bb-slider__slides');
    //Проверяем тип блока если toggle то будем открывать this а остальные скрывать

    if (overlayStatus === 'overhead') {
      targetBlock.classList.add('is-overhead');
      overlay.classList.add('is-overhead');
    }

    _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__["default"].documentBlockControl('open', "[data-move-block=\"".concat(btnId, "\"]"), targetElement);
    targetBlockBody.focus();
    overlay.classList.add(VISIBLE_CLASS);

    if (slider) {
      var $slides = slider.querySelectorAll('.bb-slider__slides');
      var $preview = slider.querySelectorAll('.bb-slider__preview');
      setTimeout(function () {
        $($slides).slick('unslick');
        $($preview).slick('unslick');
        $($slides).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          asNavFor: $($preview),
          responsive: [{
            breakpoint: 481,
            settings: {
              fade: false
            }
          }]
        });
        $($preview).slick({
          slidesToShow: 7,
          slidesToScroll: 1,
          asNavFor: $($slides),
          dots: true,
          lazyLoad: 'ondemand',
          infinite: false,
          focusOnSelect: true
        }); // $slider[0].slick.setPosition();

        $($slides)[0].slick.setPosition();
      }, 300);
    }

    if (typeof callback === 'function') {
      setTimeout(function () {
        callback();
      }, 350);
    }
  }

  function _removeOverlay() {
    setTimeout(function () {
      overlay.classList.remove(VISIBLE_CLASS);
      overlay.classList.remove(OVERHEAD_CLASS);
    }, 100);
  } //Click request item
  // function _requestItemClick() {
  //     if (html.offsetWidth <= 768) {
  //         $(document).on('click', '.js-request-item', function(e) {
  //             $('.js-move-block-aplication').addClass(OPEN_CLASS);
  //             overlay.classList.add(VISIBLE_CLASS);
  //             e.preventDefault();
  //             e.stopPropagation();
  //         });
  //         $(document).on(
  //             'click',
  //             '.js-move-block-aplication--close',
  //             function() {
  //                 $('.js-move-block-aplication').removeClass(OPEN_CLASS);
  //                 html.removeClass(FIXED_CLASS);
  //                 _removeOverlay();
  //             }
  //         );
  //     }
  // }


  return {
    init: _init,
    close: _close,
    open: _open,
    scroll: _scroll
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "aRTqku9E":
/*!********************************************************!*\
  !*** ./resources/js/_frontend/components/Accordeon.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordeon; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/* html example Accordeon
<div class="bb-accordeon js-bb-accordeon">
	<div class="bb-accordeon__item">
		<div class="bb-accordeon__title"></div>
		<div class="bb-accordeon__content"></div>
    </div>
</div>
*/


var Accordeon =
/*#__PURE__*/
function () {
  function Accordeon(args) {
    _classCallCheck(this, Accordeon);

    this.selector = args.selector;
    this.title = $(this.selector).find('[data-accordeon-title]');
    this.content = $(this.selector).find('[data-accordeon-content]');
    this.item = $(this.selector).find('.bb-accordeon__item');
    this.run = true;
  }

  _createClass(Accordeon, [{
    key: "init",
    value: function init() {
      if (typeof this.selector !== 'undefined') {
        this.item.each(function () {
          var $content = $(this).find('.bb-accordeon__content');

          if ($(this).hasClass('is-open')) {
            $content.slideDown();
          } else {
            $content.slideUp();
          }
        });

        this._toggleDataAccordeon();

        this._removeEventListener();

        this._addIventListener();
      }
    } //Render arrow icon in accordeon title

  }, {
    key: "_renderIcon",
    value: function _renderIcon(insertInto) {
      var icon = '<svg class="icon icon-angle--bold " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.003 238.003"><path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"></path></svg>';
      $(icon).appendTo(insertInto);
    } //Инициализация аккордеона по дата атрибутам на разрешении < 480

  }, {
    key: "_initDataAccordeon",
    value: function _initDataAccordeon() {
      var mainScope = this;
      var $item = $(document).find('[data-accordeon-item]');
      $('[data-accordeon]').addClass('bb-accordeon js-bb-accordeon');
      $('[data-accordeon]').each(function () {
        var customClass = $(this).data('accordeon-class');
        $(this).addClass(customClass);
      });
      $('[data-accordeon-title]').addClass('bb-accordeon__title');
      $('[data-accordeon-title]').each(function () {
        mainScope._renderIcon($(this));
      });
      $('[data-accordeon-content]').addClass('bb-accordeon__content').hide();
      $item.addClass('bb-accordeon__item');
      $item.each(function () {
        if ($(this).attr('data-accordeon-item') === 'open') {
          $(this).addClass('is-open').find('[data-accordeon-content]').show();
        }
      });
    }
  }, {
    key: "_addIventListener",
    value: function _addIventListener() {
      var _this = this;

      $(document).on('click', '.js-bb-accordeon .bb-accordeon__title', function (e) {
        _this._toggle(e);
      });
      $(window).on('resize', this._toggleDataAccordeon());
    }
  }, {
    key: "_removeEventListener",
    value: function _removeEventListener() {
      var _this2 = this;

      $(document).off('click', '.js-bb-accordeon .bb-accordeon__title', function (e) {
        _this2._toggle(e);
      });
      $(window).off('resize', function () {
        _this2._toggleDataAccordeon();
      });
    }
  }, {
    key: "_toggle",
    value: function _toggle(e) {
      var _this3 = this;

      console.log(123);
      var $target = $(e.target);
      var $parent = $target.closest('.js-bb-accordeon');
      var $item = $target.closest('.bb-accordeon__item');
      var OPEN_CLASS = 'is-open';

      if (!$target.hasClass('jsCrmAddServicesToCategoryForCard')) {
        console.log('true');

        if (this.run) {
          this.run = false;

          if ($parent.data('accordeon') === 'collapse') {
            if ($item.hasClass(OPEN_CLASS)) {
              $item.removeClass(OPEN_CLASS).find('.bb-accordeon__content').slideUp();
            } else {
              $parent.find('.bb-accordeon__item').removeClass(OPEN_CLASS).find('.bb-accordeon__content').slideUp();
              $item.addClass(OPEN_CLASS).find('.bb-accordeon__content').slideDown();
            }
          } else {
            if ($item.hasClass(OPEN_CLASS)) {
              $item.removeClass(OPEN_CLASS).find('.bb-accordeon__content').slideUp();
            } else {
              $item.addClass(OPEN_CLASS).find('.bb-accordeon__content').slideDown();
            }
          }

          setTimeout(function () {
            _this3.run = true;
          }, 500);
        } else {
          console.log('false');
        }
      }

      e.stopPropagation();
      e.preventDefault();
    } //Init or destroy Accordeon on data attributes

  }, {
    key: "_toggleDataAccordeon",
    value: function _toggleDataAccordeon() {
      if ($(window).width() <= 480) {
        this._initDataAccordeon();
      } else {
        this._destroyDataAccordeon();
      }
    } //Destroy data-accordeon

  }, {
    key: "_destroyDataAccordeon",
    value: function _destroyDataAccordeon() {
      var $accord = $(document).find('[data-accordeon]');
      $accord.each(function () {
        var $this = $(this);
        $this.removeClass('bb-accordeon bb-accordeon--custom');
        $this.find('[data-accordeon-item]').removeClass('is-open').removeClass('bb-accordeon__item');
        $this.find('[data-accordeon-title]').removeClass('bb-accordeon__title').find('.icon').remove();
        $this.find('[data-accordeon-content]').removeClass('bb-accordeon__content').removeAttr('style');
      });
    }
  }]);

  return Accordeon;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "bvfC994q":
/*!*********************************************************!*\
  !*** ./resources/js/_frontend/core/components/Popup.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/util */ "WUlJU4li");
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "fCtrW3mm");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/fancybox */ "OWSxAOZQ");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_2__);
/**
 * BB.Components.Popup.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 *
 * Modal FancyBox 3 use for image preview https://fancyapps.com/fancybox/3/
 * For the rest bootstrap modal https://getbootstrap.com/docs/4.0/components/modal/
 */
BB.define('Core.Popup');



/* harmony default export */ __webpack_exports__["default"] = (BB.Core.Popup = function () {
  function _init() {
    _initFancyBox();

    _whoIs();

    _changeFormTitle(); // _reinit();
    // if (NODE_ENV == 'development') {
    //     console.log('--- INIT CORE POPUP');
    // }

  } //Modal FancyBox 3 https://fancyapps.com/fancybox/3/


  function _initFancyBox() {
    var $fancyImagePopup = $(document).find('[data-fancybox="images"]');

    if ($fancyImagePopup.length) {
      $fancyImagePopup.fancybox({
        baseClass: 'fancybox-container--image',
        toolbar: true,
        smallBtn: true,
        closeClickOutside: true,
        mobile: {
          clickContent: 'close',
          clickSlide: 'close'
        }
      });
    }
  } //Form Who Is?


  function _whoIs() {
    $('.js-whois').on('click', function () {
      var whois = $(this).data('whois');
      var form = $('#auth-form').find('.form');

      if (whois === 'master') {
        form.addClass('is-master');
      } else if (whois === 'studio') {
        form.addClass('is-studio');
      } else {
        form.addClass('is-client');
      }
    });
  } //Dunamicly change form title


  function _changeFormTitle() {
    var $formTitle = $(document).find('.js-form-title');
    $('.js-form-title').on('click', function () {
      var text = $(this).data('title');
      $formTitle.not($(this)).removeClass('is-active');
      $(this).addClass('is-active').closest('.form').find('.form__btn').text(text);
    });
  } //Reinit components when open modal window


  function _reinit() {// $(document).on('show.bs.modal', '.modal', function() {
    //     console.log(10);
    //     BB.Fronted.Main.initMapMarketDeliveryModal();
    // });
  }

  return {
    init: _init,
    initFancyBox: _initFancyBox,
    whoIs: _whoIs,
    changeFormTitle: _changeFormTitle,
    reinit: _reinit
  };
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "f12II7tM":
/*!******************************************************!*\
  !*** ./resources/js/_frontend/components/CopyBox.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CopyBox; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/*  html example
    <div class="js-copy-box">
        @content
        <button class="js-copy-box-btn"></button>
    </div>
*/


var CopyBox =
/*#__PURE__*/
function () {
  function CopyBox(args) {
    _classCallCheck(this, CopyBox);

    this.selector = args.selector;
    this.element = typeof this.selector === 'string' ? document.querySelector(this.selector) : this.selector;
    if (!this.element) return;
    this._onClick = this._onClick.bind(this);

    this._addEventListeners();
  }

  _createClass(CopyBox, [{
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this = this;

      document.addEventListener('click', function (e) {
        _this._onClick(e);

        _this._removeElement(e);
      });
    } //Копируем элемент очищая его поля инпутов, селектов и вставляем клон выше

  }, {
    key: "_onClick",
    value: function _onClick(e) {
      var $target = $(e.target);

      if ($target.closest(this.selector + '-btn--add').length) {
        var $parent = $target.closest(this.selector);
        var $clone;
        $clone = $parent.clone().addClass('is-cloned');
        $clone.find('input, select, textarea').val('');
        $clone.find('[data-copy-remove]').remove();
        $clone.insertBefore($parent);
      }
    }
  }, {
    key: "_removeElement",
    value: function _removeElement(e) {
      var $target = $(e.target);

      if ($target.closest(this.selector + '-btn--remove').length) {
        $target.closest(this.selector).remove();
      }
    }
  }]);

  return CopyBox;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "giEUlhd5":
/*!************************************************************!*\
  !*** ./resources/js/_frontend/components/ParallaxBlock.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallaxBlock; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var ParallaxBlock =
/*#__PURE__*/
function () {
  function ParallaxBlock(args) {
    _classCallCheck(this, ParallaxBlock);

    this.selector = document.querySelectorAll(args.selector);
    this.transform = args.transform;
  }

  _createClass(ParallaxBlock, [{
    key: "init",
    value: function init() {
      if (this.selector.length) {
        this._parallax();
      }
    }
  }, {
    key: "_parallax",
    value: function _parallax() {
      this.selector.forEach(function (elem) {
        var html = document.documentElement;
        var scroll = html.scrollTop;
        var initViewport = parseInt(elem.getAttribute('data-viewport-paralax-init')) || 0;
        var speed = parseInt(elem.getAttribute('data-parallax-speed')) || 15;

        if (initViewport <= html.offsetWidth) {
          var cords = scroll / speed;
          var transform = getComputedStyle(elem).transform;
          var matrix = transform.split('(')[1].split(')')[0].split(',').map(parseFloat);
          elem.style.transform = "matrix(".concat(matrix[0], ", ").concat(matrix[1], ", ").concat(matrix[2], ", ").concat(matrix[3], ", ").concat(matrix[4], ", -").concat(cords, ")");
          document.addEventListener('scroll', function (e) {
            scroll = html.scrollTop;
            cords = scroll / speed;
            transform = getComputedStyle(elem).transform;
            matrix = transform.split('(')[1].split(')')[0].split(',').map(parseFloat);
            elem.style.transform = "matrix(".concat(matrix[0], ", ").concat(matrix[1], ", ").concat(matrix[2], ", ").concat(matrix[3], ", ").concat(matrix[4], ", -").concat(cords, ")");
          });
        }
      });
    }
  }]);

  return ParallaxBlock;
}();



/***/ }),

/***/ "nq/r7UAn":
/*!*****************************************************!*\
  !*** ./resources/js/_frontend/components/Viewer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewer; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Viewer =
/*#__PURE__*/
function () {
  /**
   *
   * @param {args.selector}
   * Должен быть строкой
   */
  function Viewer(args) {
    _classCallCheck(this, Viewer);

    this.selector = document.querySelectorAll(args.selector);
  }
  /**
   * Метот инициальзации Viewer
   */


  _createClass(Viewer, [{
    key: "init",
    value: function init() {
      if (this.selector.length) {
        if (!Element.prototype.remove) {
          Element.prototype.remove = function remove() {
            if (this.parentNode) {
              this.parentNode.removeChild(this);
            }
          };
        }

        this.hide();
        this.addEventListenerBtnOutside();
      }
    }
    /**
     * Метод скрывающий блоки если их больше допустимого
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this = this;

      this.selector.forEach(function (item) {
        var elems = Array.prototype.slice.call(item.children);
        var startViewBlock = item.getAttribute('data-view-block') || 4;
        var children = elems.filter(function (item) {
          if (item.classList.contains('js-viewer-btn') || item.classList.contains('js-viewer-all-btn')) {
            return false;
          }

          return true;
        });

        if (children.length >= startViewBlock) {
          elems.forEach(function (item) {
            if (item.classList.contains('js-viewer-btn') || item.classList.contains('js-viewer-all-btn')) {
              _this._addEventListener(item);
            }
          });
          children.forEach(function (item, i) {
            if (i + 1 > startViewBlock) {
              item.style.display = 'none';
            }
          });
        } else {
          elems.forEach(function (item) {
            if (item.classList.contains('js-viewer-btn') || item.classList.contains('js-viewer-all-btn')) {
              item.remove();
            }
          });
        }
      });
    }
    /**
     * Метод инициализации кнопок контроля показа элементов
     * @param btn DOM элемент являющейся кнопкой контроля Viewer
     */

  }, {
    key: "_addEventListener",
    value: function _addEventListener(btn) {
      if (btn.classList.contains('js-viewer-btn')) {
        btn.removeEventListener('click', showNeighbors, false);
        btn.addEventListener('click', showNeighbors, false);
      }

      if (btn.classList.contains('js-viewer-all-btn')) {
        btn.removeEventListener('click', showAll, false);
        btn.addEventListener('click', showAll, false);
      } // функция показа только соседей


      function showNeighbors(e) {
        var viewerBtn = e.target.closest('.js-viewer-btn');
        var elems = Array.prototype.slice.call(viewerBtn.parentElement.children);
        elems.forEach(function (item) {
          item.removeAttribute('style');
        });
        viewerBtn.remove();
      } //функция показа всех дочерних элементов


      function showAll(e) {
        var viewerAllBtn = e.target.closest('.js-viewer-all-btn');
        var elems = viewerAllBtn.parentElement.querySelectorAll('[style="display: none;"]');
        elems.forEach(function (item) {
          item.removeAttribute('style');
        });
        viewerAllBtn.remove();
      }
    }
    /**
     * Метод инициализации события на кнопку, если она лежит на одном уровне с блоком js-viewer
     */

  }, {
    key: "addEventListenerBtnOutside",
    value: function addEventListenerBtnOutside() {
      var btn = document.querySelectorAll('.js-viewer-hermit-btn');

      if (btn.length) {
        btn.forEach(function (item) {
          item.removeEventListener('click', showAll);
          item.addEventListener('click', showAll);
        });
      }

      function showAll(e) {
        var btn = e.target.closest('.js-viewer-hermit-btn');
        var elems = Array.prototype.slice.call(btn.parentElement.querySelector('.js-viewer').children);
        elems.forEach(function (item) {
          return item.removeAttribute('style');
        });
        btn.remove();
      }
    }
  }]);

  return Viewer;
}();



/***/ }),

/***/ "oCjWKTYn":
/*!********************************************************!*\
  !*** ./resources/js/_frontend/components/SlideLine.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideLine; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/* html example
 ** selector can be any
 */


var SlideLine =
/*#__PURE__*/
function () {
  function SlideLine(args) {
    _classCallCheck(this, SlideLine);

    this.element = args.selector;
    this.link = document.querySelector(this.element);
    this.links = document.querySelectorAll(this.element);
    this.line = document.createElement('span');
    if (typeof this.element == 'undefined') return;
  }

  _createClass(SlideLine, [{
    key: "init",
    value: function init() {
      this._render();

      this.checkActive();
      this.addEventListener();
    }
  }, {
    key: "addEventListener",
    value: function addEventListener() {
      var mainScope = this;

      var hendlerClick = function hendlerClick() {
        var _this = this;

        var offsetLeft = this.offsetLeft;
        var width = this.offsetWidth;
        mainScope.line.style.left = offsetLeft + 'px';
        mainScope.line.style.width = width + 'px'; //Находим все активные элементы кроме того на который кликнули и убираем у него класс is-active

        var active = this.parentNode.querySelectorAll('.is-active');

        var _loop = function _loop(i) {
          setTimeout(function () {
            active[i].classList.remove('is-active');
          }, 100);
        };

        for (var i = 0; i < active.length; i++) {
          _loop(i);
        }

        setTimeout(function () {
          _this.classList.add('is-active');
        }, 100);
      };

      $(document).on('click', mainScope.element, hendlerClick);
    }
  }, {
    key: "checkActive",
    value: function checkActive() {
      for (var i = 0; i < this.links.length; i++) {
        if (this.links[i].classList.contains('is-active') || this.links[i].classList.contains('ui-tabs-active')) {
          this._setLine(i);
        }
      }
    }
  }, {
    key: "update",
    value: function update(index) {
      $(this.element).eq(index).trigger('click');
    } //При загрузке выставляем line в начальное положение

  }, {
    key: "_setLine",
    value: function _setLine(index) {
      var offsetLeft = this.links[index].offsetLeft;
      var width = this.links[index].offsetWidth;
      this.line.style.left = offsetLeft + 'px';
      this.line.style.width = width + 'px';
    }
  }, {
    key: "_render",
    value: function _render() {
      this.line.classList.add('slide-line');
      this.link.parentNode.appendChild(this.line);
    }
  }]);

  return SlideLine;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "ptMOt6Wa":
/*!****************************************************!*\
  !*** ./resources/js/_frontend/_lib/stickyBlock.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  'use strict';

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports(x) {
    return x && x.__esModule ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var stickySidebar = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      if (false) {} else {
        factory(exports);
      }
    })(commonjsGlobal, function (exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      /**
       * Sticky Sidebar JavaScript Plugin.
       * @version 3.3.1
       * @author Ahmed Bouhuolia <a.bouhuolia@gmail.com>
       * @license The MIT License (MIT)
       */


      var StickySidebar = function () {
        // ---------------------------------
        // # Define Constants
        // ---------------------------------
        //
        var EVENT_KEY = '.stickySidebar';
        var DEFAULTS = {
          /**
           * Additional top spacing of the element when it becomes sticky.
           * @type {Numeric|Function}
           */
          topSpacing: 0,

          /**
           * Additional bottom spacing of the element when it becomes sticky.
           * @type {Numeric|Function}
           */
          bottomSpacing: 0,

          /**
           * Container sidebar selector to know what the beginning and end of sticky element.
           * @type {String|False}
           */
          containerSelector: false,

          /**
           * Inner wrapper selector.
           * @type {String}
           */
          innerWrapperSelector: '.inner-wrapper-sticky',

          /**
           * The name of CSS class to apply to elements when they have become stuck.
           * @type {String|False}
           */
          stickyClass: 'is-affixed',

          /**
           * Detect when sidebar and its container change height so re-calculate their dimensions.
           * @type {Boolean}
           */
          resizeSensor: true,

          /**
           * The sidebar returns to its normal position if its width below this value.
           * @type {Numeric}
           */
          minWidth: false
        }; // ---------------------------------
        // # Class Definition
        // ---------------------------------
        //

        /**
         * Sticky Sidebar Class.
         * @public
         */

        var StickySidebar = function () {
          /**
           * Sticky Sidebar Constructor.
           * @constructor
           * @param {HTMLElement|String} sidebar - The sidebar element or sidebar selector.
           * @param {Object} options - The options of sticky sidebar.
           */
          function StickySidebar(sidebar) {
            var _this = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, StickySidebar);

            this.options = StickySidebar.extend(DEFAULTS, options); // Sidebar element query if there's no one, throw error.

            this.sidebar = 'string' === typeof sidebar ? document.querySelector(sidebar) : sidebar;
            if ('undefined' === typeof this.sidebar) throw new Error('There is no specific sidebar element.');
            this.sidebarInner = false;
            this.container = this.sidebar.parentElement; // Current Affix Type of sidebar element.

            this.affixedType = 'STATIC';
            this.direction = 'down';
            this.support = {
              transform: false,
              transform3d: false
            };
            this._initialized = false;
            this._reStyle = false;
            this._breakpoint = false; // Dimensions of sidebar, container and screen viewport.

            this.dimensions = {
              translateY: 0,
              maxTranslateY: 0,
              topSpacing: 0,
              lastTopSpacing: 0,
              bottomSpacing: 0,
              lastBottomSpacing: 0,
              sidebarHeight: 0,
              sidebarWidth: 0,
              containerTop: 0,
              containerHeight: 0,
              viewportHeight: 0,
              viewportTop: 0,
              lastViewportTop: 0
            }; // Bind event handlers for referencability.

            ['handleEvent'].forEach(function (method) {
              _this[method] = _this[method].bind(_this);
            }); // Initialize sticky sidebar for first time.

            this.initialize();
          }
          /**
           * Initializes the sticky sidebar by adding inner wrapper, define its container,
           * min-width breakpoint, calculating dimensions, adding helper classes and inline style.
           * @private
           */


          _createClass(StickySidebar, [{
            key: 'initialize',
            value: function initialize() {
              var _this2 = this;

              this._setSupportFeatures(); // Get sticky sidebar inner wrapper, if not found, will create one.


              if (this.options.innerWrapperSelector) {
                this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector);
                if (null === this.sidebarInner) this.sidebarInner = false;
              }

              if (!this.sidebarInner) {
                var wrapper = document.createElement('div');
                wrapper.setAttribute('class', 'inner-wrapper-sticky');
                this.sidebar.appendChild(wrapper);

                while (this.sidebar.firstChild != wrapper) {
                  wrapper.appendChild(this.sidebar.firstChild);
                }

                this.sidebarInner = this.sidebar.querySelector('.inner-wrapper-sticky');
              } // Container wrapper of the sidebar.


              if (this.options.containerSelector) {
                var containers = document.querySelectorAll(this.options.containerSelector);
                containers = Array.prototype.slice.call(containers);
                containers.forEach(function (container, item) {
                  if (!container.contains(_this2.sidebar)) return;
                  _this2.container = container;
                });
                if (!containers.length) throw new Error('The container does not contains on the sidebar.');
              } // If top/bottom spacing is not function parse value to integer.


              if ('function' !== typeof this.options.topSpacing) this.options.topSpacing = parseInt(this.options.topSpacing) || 0;
              if ('function' !== typeof this.options.bottomSpacing) this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0; // Breakdown sticky sidebar if screen width below `options.minWidth`.

              this._widthBreakpoint(); // Calculate dimensions of sidebar, container and viewport.


              this.calcDimensions(); // Affix sidebar in proper position.

              this.stickyPosition(); // Bind all events.

              this.bindEvents(); // Inform other properties the sticky sidebar is initialized.

              this._initialized = true;
            }
          }, {
            key: 'bindEvents',
            value: function bindEvents() {
              window.addEventListener('resize', this, {
                passive: true,
                capture: false
              });
              window.addEventListener('scroll', this, {
                passive: true,
                capture: false
              });
              this.sidebar.addEventListener('update' + EVENT_KEY, this);

              if (this.options.resizeSensor && 'undefined' !== typeof ResizeSensor) {
                new ResizeSensor(this.sidebarInner, this.handleEvent);
                new ResizeSensor(this.container, this.handleEvent);
              }
            }
          }, {
            key: 'handleEvent',
            value: function handleEvent(event) {
              this.updateSticky(event);
            }
          }, {
            key: 'calcDimensions',
            value: function calcDimensions() {
              if (this._breakpoint) return;
              var dims = this.dimensions; // Container of sticky sidebar dimensions.

              dims.containerTop = StickySidebar.offsetRelative(this.container).top;
              dims.containerHeight = this.container.clientHeight;
              dims.containerBottom = dims.containerTop + dims.containerHeight; // Sidebar dimensions.

              dims.sidebarHeight = this.sidebarInner.offsetHeight;
              dims.sidebarWidth = this.sidebarInner.offsetWidth; // Screen viewport dimensions.

              dims.viewportHeight = window.innerHeight; // Maximum sidebar translate Y.

              dims.maxTranslateY = dims.containerHeight - dims.sidebarHeight;

              this._calcDimensionsWithScroll();
            }
          }, {
            key: '_calcDimensionsWithScroll',
            value: function _calcDimensionsWithScroll() {
              var dims = this.dimensions;
              dims.sidebarLeft = StickySidebar.offsetRelative(this.sidebar).left;
              dims.viewportTop = document.documentElement.scrollTop || document.body.scrollTop;
              dims.viewportBottom = dims.viewportTop + dims.viewportHeight;
              dims.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
              dims.topSpacing = this.options.topSpacing;
              dims.bottomSpacing = this.options.bottomSpacing;
              if ('function' === typeof dims.topSpacing) dims.topSpacing = parseInt(dims.topSpacing(this.sidebar)) || 0;
              if ('function' === typeof dims.bottomSpacing) dims.bottomSpacing = parseInt(dims.bottomSpacing(this.sidebar)) || 0;

              if ('VIEWPORT-TOP' === this.affixedType) {
                // Adjust translate Y in the case decrease top spacing value.
                if (dims.topSpacing < dims.lastTopSpacing) {
                  dims.translateY += dims.lastTopSpacing - dims.topSpacing;
                  this._reStyle = true;
                }
              } else if ('VIEWPORT-BOTTOM' === this.affixedType) {
                // Adjust translate Y in the case decrease bottom spacing value.
                if (dims.bottomSpacing < dims.lastBottomSpacing) {
                  dims.translateY += dims.lastBottomSpacing - dims.bottomSpacing;
                  this._reStyle = true;
                }
              }

              dims.lastTopSpacing = dims.topSpacing;
              dims.lastBottomSpacing = dims.bottomSpacing;
            }
          }, {
            key: 'isSidebarFitsViewport',
            value: function isSidebarFitsViewport() {
              return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
            }
          }, {
            key: 'observeScrollDir',
            value: function observeScrollDir() {
              var dims = this.dimensions;
              if (dims.lastViewportTop === dims.viewportTop) return;
              var furthest = 'down' === this.direction ? Math.min : Math.max; // If the browser is scrolling not in the same direction.

              if (dims.viewportTop === furthest(dims.viewportTop, dims.lastViewportTop)) this.direction = 'down' === this.direction ? 'up' : 'down';
            }
          }, {
            key: 'getAffixType',
            value: function getAffixType() {
              this._calcDimensionsWithScroll();

              var dims = this.dimensions;
              var colliderTop = dims.viewportTop + dims.topSpacing;
              var affixType = this.affixedType;

              if (colliderTop <= dims.containerTop || dims.containerHeight <= dims.sidebarHeight) {
                dims.translateY = 0;
                affixType = 'STATIC';
              } else {
                affixType = 'up' === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown();
              } // Make sure the translate Y is not bigger than container height.


              dims.translateY = Math.max(0, dims.translateY);
              dims.translateY = Math.min(dims.containerHeight, dims.translateY);
              dims.translateY = Math.round(dims.translateY);
              dims.lastViewportTop = dims.viewportTop;
              return affixType;
            }
          }, {
            key: '_getAffixTypeScrollingDown',
            value: function _getAffixTypeScrollingDown() {
              var dims = this.dimensions;
              var sidebarBottom = dims.sidebarHeight + dims.containerTop;
              var colliderTop = dims.viewportTop + dims.topSpacing;
              var colliderBottom = dims.viewportBottom - dims.bottomSpacing;
              var affixType = this.affixedType;

              if (this.isSidebarFitsViewport()) {
                if (dims.sidebarHeight + colliderTop >= dims.containerBottom) {
                  dims.translateY = dims.containerBottom - sidebarBottom;
                  affixType = 'CONTAINER-BOTTOM';
                } else if (colliderTop >= dims.containerTop) {
                  dims.translateY = colliderTop - dims.containerTop;
                  affixType = 'VIEWPORT-TOP';
                }
              } else {
                if (dims.containerBottom <= colliderBottom) {
                  dims.translateY = dims.containerBottom - sidebarBottom;
                  affixType = 'CONTAINER-BOTTOM';
                } else if (sidebarBottom + dims.translateY <= colliderBottom) {
                  dims.translateY = colliderBottom - sidebarBottom;
                  affixType = 'VIEWPORT-BOTTOM';
                } else if (dims.containerTop + dims.translateY <= colliderTop && 0 !== dims.translateY && dims.maxTranslateY !== dims.translateY) {
                  affixType = 'VIEWPORT-UNBOTTOM';
                }
              }

              return affixType;
            }
          }, {
            key: '_getAffixTypeScrollingUp',
            value: function _getAffixTypeScrollingUp() {
              var dims = this.dimensions;
              var sidebarBottom = dims.sidebarHeight + dims.containerTop;
              var colliderTop = dims.viewportTop + dims.topSpacing;
              var colliderBottom = dims.viewportBottom - dims.bottomSpacing;
              var affixType = this.affixedType;

              if (colliderTop <= dims.translateY + dims.containerTop) {
                dims.translateY = colliderTop - dims.containerTop;
                affixType = 'VIEWPORT-TOP';
              } else if (dims.containerBottom <= colliderBottom) {
                dims.translateY = dims.containerBottom - sidebarBottom;
                affixType = 'CONTAINER-BOTTOM';
              } else if (!this.isSidebarFitsViewport()) {
                if (dims.containerTop <= colliderTop && 0 !== dims.translateY && dims.maxTranslateY !== dims.translateY) {
                  affixType = 'VIEWPORT-UNBOTTOM';
                }
              }

              return affixType;
            }
          }, {
            key: '_getStyle',
            value: function _getStyle(affixType) {
              if ('undefined' === typeof affixType) return;
              var style = {
                inner: {},
                outer: {}
              };
              var dims = this.dimensions;

              switch (affixType) {
                case 'VIEWPORT-TOP':
                  style.inner = {
                    position: 'fixed',
                    top: dims.topSpacing,
                    left: dims.sidebarLeft - dims.viewportLeft,
                    width: dims.sidebarWidth
                  };
                  break;

                case 'VIEWPORT-BOTTOM':
                  style.inner = {
                    position: 'fixed',
                    top: 'auto',
                    left: dims.sidebarLeft,
                    bottom: dims.bottomSpacing,
                    width: dims.sidebarWidth
                  };
                  break;

                case 'CONTAINER-BOTTOM':
                case 'VIEWPORT-UNBOTTOM':
                  var translate = this._getTranslate(0, dims.translateY + 'px');

                  if (translate) style.inner = {
                    transform: translate
                  };else style.inner = {
                    position: 'absolute',
                    top: dims.translateY,
                    width: dims.sidebarWidth
                  };
                  break;
              }

              switch (affixType) {
                case 'VIEWPORT-TOP':
                case 'VIEWPORT-BOTTOM':
                case 'VIEWPORT-UNBOTTOM':
                case 'CONTAINER-BOTTOM':
                  style.outer = {
                    height: dims.sidebarHeight,
                    position: 'relative'
                  };
                  break;
              }

              style.outer = StickySidebar.extend({
                height: '',
                position: ''
              }, style.outer);
              style.inner = StickySidebar.extend({
                position: 'relative',
                top: '',
                left: '',
                bottom: '',
                width: '',
                transform: ''
              }, style.inner);
              return style;
            }
          }, {
            key: 'stickyPosition',
            value: function stickyPosition(force) {
              if (this._breakpoint) return;
              force = this._reStyle || force || false;
              var affixType = this.getAffixType();

              var style = this._getStyle(affixType);

              if ((this.affixedType != affixType || force) && affixType) {
                var affixEvent = 'affix.' + affixType.toLowerCase().replace('viewport-', '') + EVENT_KEY;
                StickySidebar.eventTrigger(this.sidebar, affixEvent);
                if ('STATIC' === affixType) StickySidebar.removeClass(this.sidebar, this.options.stickyClass);else StickySidebar.addClass(this.sidebar, this.options.stickyClass);

                for (var key in style.outer) {
                  var unit = 'number' === typeof style.outer[key] ? 'px' : '';
                  this.sidebar.style[key] = style.outer[key] + unit;
                }

                for (var _key in style.inner) {
                  var _unit = 'number' === typeof style.inner[_key] ? 'px' : '';

                  this.sidebarInner.style[_key] = style.inner[_key] + _unit;
                }

                var affixedEvent = 'affixed.' + affixType.toLowerCase().replace('viewport-', '') + EVENT_KEY;
                StickySidebar.eventTrigger(this.sidebar, affixedEvent);
              } else {
                if (this._initialized) this.sidebarInner.style.left = style.inner.left;
              }

              this.affixedType = affixType;
            }
          }, {
            key: '_widthBreakpoint',
            value: function _widthBreakpoint() {
              if (window.innerWidth <= this.options.minWidth) {
                this._breakpoint = true;
                this.affixedType = 'STATIC';
                this.sidebar.removeAttribute('style');
                StickySidebar.removeClass(this.sidebar, this.options.stickyClass);
                this.sidebarInner.removeAttribute('style');
              } else {
                this._breakpoint = false;
              }
            }
          }, {
            key: 'updateSticky',
            value: function updateSticky() {
              var _this3 = this;

              var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              if (this._running) return;
              this._running = true;

              (function (eventType) {
                requestAnimationFrame(function () {
                  switch (eventType) {
                    // When browser is scrolling and re-calculate just dimensions
                    // within scroll.
                    case 'scroll':
                      _this3._calcDimensionsWithScroll();

                      _this3.observeScrollDir();

                      _this3.stickyPosition();

                      break;
                    // When browser is resizing or there's no event, observe width
                    // breakpoint and re-calculate dimensions.

                    case 'resize':
                    default:
                      _this3._widthBreakpoint();

                      _this3.calcDimensions();

                      _this3.stickyPosition(true);

                      break;
                  }

                  _this3._running = false;
                });
              })(event.type);
            }
          }, {
            key: '_setSupportFeatures',
            value: function _setSupportFeatures() {
              var support = this.support;
              support.transform = StickySidebar.supportTransform();
              support.transform3d = StickySidebar.supportTransform(true);
            }
          }, {
            key: '_getTranslate',
            value: function _getTranslate() {
              var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              if (this.support.transform3d) return 'translate3d(' + y + ', ' + x + ', ' + z + ')';else if (this.support.translate) return 'translate(' + y + ', ' + x + ')';else return false;
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              window.removeEventListener('resize', this, {
                capture: false
              });
              window.removeEventListener('scroll', this, {
                capture: false
              });
              this.sidebar.classList.remove(this.options.stickyClass);
              this.sidebar.style.minHeight = '';
              this.sidebar.removeEventListener('update' + EVENT_KEY, this);
              var styleReset = {
                inner: {},
                outer: {}
              };
              styleReset.inner = {
                position: '',
                top: '',
                left: '',
                bottom: '',
                width: '',
                transform: ''
              };
              styleReset.outer = {
                height: '',
                position: ''
              };

              for (var key in styleReset.outer) {
                this.sidebar.style[key] = styleReset.outer[key];
              }

              for (var _key2 in styleReset.inner) {
                this.sidebarInner.style[_key2] = styleReset.inner[_key2];
              }

              if (this.options.resizeSensor && 'undefined' !== typeof ResizeSensor) {
                ResizeSensor.detach(this.sidebarInner, this.handleEvent);
                ResizeSensor.detach(this.container, this.handleEvent);
              }
            }
          }], [{
            key: 'supportTransform',
            value: function supportTransform(transform3d) {
              var result = false,
                  property = transform3d ? 'perspective' : 'transform',
                  upper = property.charAt(0).toUpperCase() + property.slice(1),
                  prefixes = ['Webkit', 'Moz', 'O', 'ms'],
                  support = document.createElement('support'),
                  style = support.style;
              (property + ' ' + prefixes.join(upper + ' ') + upper).split(' ').forEach(function (property, i) {
                if (style[property] !== undefined) {
                  result = property;
                  return false;
                }
              });
              return result;
            }
          }, {
            key: 'eventTrigger',
            value: function eventTrigger(element, eventName, data) {
              try {
                var event = new CustomEvent(eventName, {
                  detail: data
                });
              } catch (e) {
                var event = document.createEvent('CustomEvent');
                event.initCustomEvent(eventName, true, true, data);
              }

              element.dispatchEvent(event);
            }
          }, {
            key: 'extend',
            value: function extend(defaults, options) {
              var results = {};

              for (var key in defaults) {
                if ('undefined' !== typeof options[key]) results[key] = options[key];else results[key] = defaults[key];
              }

              return results;
            }
          }, {
            key: 'offsetRelative',
            value: function offsetRelative(element) {
              var result = {
                left: 0,
                top: 0
              };

              do {
                var offsetTop = element.offsetTop;
                var offsetLeft = element.offsetLeft;
                if (!isNaN(offsetTop)) result.top += offsetTop;
                if (!isNaN(offsetLeft)) result.left += offsetLeft;
                element = 'BODY' === element.tagName ? element.parentElement : element.offsetParent;
              } while (element);

              return result;
            }
          }, {
            key: 'addClass',
            value: function addClass(element, className) {
              if (!StickySidebar.hasClass(element, className)) {
                if (element.classList) element.classList.add(className);else element.className += ' ' + className;
              }
            }
          }, {
            key: 'removeClass',
            value: function removeClass(element, className) {
              if (StickySidebar.hasClass(element, className)) {
                if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
              }
            }
          }, {
            key: 'hasClass',
            value: function hasClass(element, className) {
              if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
            }
          }, {
            key: 'defaults',
            get: function get() {
              return DEFAULTS;
            }
          }]);

          return StickySidebar;
        }();

        return StickySidebar;
      }();

      exports.default = StickySidebar; // Global
      // -------------------------

      window.StickySidebar = StickySidebar;
    });
  });
  var stickySidebar$1 = unwrapExports(stickySidebar);
  exports['default'] = stickySidebar$1;
  exports.__moduleExports = stickySidebar;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "yLpjYHve")))

/***/ }),

/***/ "saoJp7xE":
/*!****************************************************!*\
  !*** ./resources/libs/calendar/dhtmlxscheduler.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery) {function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/*
@license
dhtmlxScheduler v.5.0.0 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/


function dtmlXMLLoaderObject(e, t, i, r) {
  return this.xmlDoc = "", "undefined" != typeof i ? this.async = i : this.async = !0, this.onloadAction = e || null, this.mainObject = t || null, this.waitCall = null, this.rSeed = r || !1, this;
}

function convertStringToBoolean(e) {
  switch ("string" == typeof e && (e = e.toLowerCase()), e) {
    case "1":
    case "true":
    case "yes":
    case "y":
    case 1:
    case !0:
      return !0;

    default:
      return !1;
  }
}

function getUrlSymbol(e) {
  return -1 != e.indexOf("?") ? "&" : "?";
}

function dhtmlDragAndDropObject() {
  return window.dhtmlDragAndDrop ? window.dhtmlDragAndDrop : (this.lastLanding = 0, this.dragNode = 0, this.dragStartNode = 0, this.dragStartObject = 0, this.tempDOMU = null, this.tempDOMM = null, this.waitDrag = 0, window.dhtmlDragAndDrop = this, this);
}

function _dhtmlxError(e, t, i) {
  return this.catches || (this.catches = []), this;
}

function dhtmlXHeir(e, t) {
  for (var i in t) {
    "function" == typeof t[i] && (e[i] = t[i]);
  }

  return e;
}

window.dhtmlXScheduler = window.scheduler = {
  version: "5.0.0"
}, window.dhtmlx || (dhtmlx = function (_dhtmlx) {
  function dhtmlx(_x) {
    return _dhtmlx.apply(this, arguments);
  }

  dhtmlx.toString = function () {
    return _dhtmlx.toString();
  };

  return dhtmlx;
}(function (e) {
  for (var t in e) {
    dhtmlx[t] = e[t];
  }

  return dhtmlx;
})), dhtmlx.extend_api = function (e, t, i) {
  var r = window[e];
  r && (window[e] = function (e) {
    var i;

    if (e && "object" == _typeof(e) && !e.tagName) {
      i = r.apply(this, t._init ? t._init(e) : arguments);

      for (var s in dhtmlx) {
        t[s] && this[t[s]](dhtmlx[s]);
      }

      for (var s in e) {
        t[s] ? this[t[s]](e[s]) : 0 === s.indexOf("on") && this.attachEvent(s, e[s]);
      }
    } else i = r.apply(this, arguments);

    return t._patch && t._patch(this), i || this;
  }, window[e].prototype = r.prototype, i && dhtmlXHeir(window[e].prototype, i));
}, dhtmlxAjax = {
  get: function get(e, t) {
    var i = new dtmlXMLLoaderObject(!0);
    return i.async = arguments.length < 3, i.waitCall = t, i.loadXML(e), i;
  },
  post: function post(e, t, i) {
    var r = new dtmlXMLLoaderObject(!0);
    return r.async = arguments.length < 4, r.waitCall = i, r.loadXML(e, !0, t), r;
  },
  getSync: function getSync(e) {
    return this.get(e, null, !0);
  },
  postSync: function postSync(e, t) {
    return this.post(e, t, null, !0);
  }
}, window.dtmlXMLLoaderObject = dtmlXMLLoaderObject, dtmlXMLLoaderObject.count = 0, dtmlXMLLoaderObject.prototype.waitLoadFunction = function (e) {
  var t = !0;
  return this.check = function () {
    if (e && e.onloadAction && (!e.xmlDoc.readyState || 4 == e.xmlDoc.readyState)) {
      if (!t) return;
      t = !1, dtmlXMLLoaderObject.count++, "function" == typeof e.onloadAction && e.onloadAction(e.mainObject, null, null, null, e), e.waitCall && (e.waitCall.call(this, e), e.waitCall = null);
    }
  }, this.check;
}, dtmlXMLLoaderObject.prototype.getXMLTopNode = function (e, t) {
  var i;

  if (this.xmlDoc.responseXML) {
    var r = this.xmlDoc.responseXML.getElementsByTagName(e);
    if (0 === r.length && -1 != e.indexOf(":")) var r = this.xmlDoc.responseXML.getElementsByTagName(e.split(":")[1]);
    i = r[0];
  } else i = this.xmlDoc.documentElement;

  if (i) return this._retry = !1, i;

  if (!this._retry && _isIE) {
    this._retry = !0;
    var t = this.xmlDoc;
    return this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/, ""), !0), this.getXMLTopNode(e, t);
  }

  return dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]), document.createElement("div");
}, dtmlXMLLoaderObject.prototype.loadXMLString = function (e, t) {
  if (_isIE) this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), this.xmlDoc.async = this.async, this.xmlDoc.onreadystatechange = function () {}, this.xmlDoc.loadXML(e);else {
    var i = new DOMParser();
    this.xmlDoc = i.parseFromString(e, "text/xml");
  }
  t || (this.onloadAction && this.onloadAction(this.mainObject, null, null, null, this), this.waitCall && (this.waitCall(), this.waitCall = null));
}, dtmlXMLLoaderObject.prototype.loadXML = function (e, t, i, r) {
  this.rSeed && (e += (-1 != e.indexOf("?") ? "&" : "?") + "a_dhx_rSeed=" + new Date().valueOf()), this.filePath = e, !_isIE && window.XMLHttpRequest ? this.xmlDoc = new XMLHttpRequest() : this.xmlDoc = new ActiveXObject("Microsoft.XMLHTTP"), this.async && (this.xmlDoc.onreadystatechange = new this.waitLoadFunction(this)), "string" == typeof t ? this.xmlDoc.open(t, e, this.async) : this.xmlDoc.open(t ? "POST" : "GET", e, this.async), r ? (this.xmlDoc.setRequestHeader("User-Agent", "dhtmlxRPC v0.1 (" + navigator.userAgent + ")"), this.xmlDoc.setRequestHeader("Content-type", "text/xml")) : t && this.xmlDoc.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), this.xmlDoc.setRequestHeader("X-Requested-With", "XMLHttpRequest"), this.xmlDoc.send(i), this.async || new this.waitLoadFunction(this)();
}, dtmlXMLLoaderObject.prototype.destructor = function () {
  return this._filterXPath = null, this._getAllNamedChilds = null, this._retry = null, this.async = null, this.rSeed = null, this.filePath = null, this.onloadAction = null, this.mainObject = null, this.xmlDoc = null, this.doXPath = null, this.doXPathOpera = null, this.doXSLTransToObject = null, this.doXSLTransToString = null, this.loadXML = null, this.loadXMLString = null, this.doSerialization = null, this.xmlNodeToJSON = null, this.getXMLTopNode = null, this.setXSLParamValue = null, null;
}, dtmlXMLLoaderObject.prototype.xmlNodeToJSON = function (e) {
  for (var t = {}, i = 0; i < e.attributes.length; i++) {
    t[e.attributes[i].name] = e.attributes[i].value;
  }

  t._tagvalue = e.firstChild ? e.firstChild.nodeValue : "";

  for (var i = 0; i < e.childNodes.length; i++) {
    var r = e.childNodes[i].tagName;
    r && (t[r] || (t[r] = []), t[r].push(this.xmlNodeToJSON(e.childNodes[i])));
  }

  return t;
}, window.dhtmlDragAndDropObject = dhtmlDragAndDropObject, dhtmlDragAndDropObject.prototype.removeDraggableItem = function (e) {
  e.onmousedown = null, e.dragStarter = null, e.dragLanding = null;
}, dhtmlDragAndDropObject.prototype.addDraggableItem = function (e, t) {
  e.onmousedown = this.preCreateDragCopy, e.dragStarter = t, this.addDragLanding(e, t);
}, dhtmlDragAndDropObject.prototype.addDragLanding = function (e, t) {
  e.dragLanding = t;
}, dhtmlDragAndDropObject.prototype.preCreateDragCopy = function (e) {
  return !e && !window.event || 2 != (e || event).button ? window.dhtmlDragAndDrop.waitDrag ? (window.dhtmlDragAndDrop.waitDrag = 0, document.body.onmouseup = window.dhtmlDragAndDrop.tempDOMU, document.body.onmousemove = window.dhtmlDragAndDrop.tempDOMM, !1) : (window.dhtmlDragAndDrop.dragNode && window.dhtmlDragAndDrop.stopDrag(e), window.dhtmlDragAndDrop.waitDrag = 1, window.dhtmlDragAndDrop.tempDOMU = document.body.onmouseup, window.dhtmlDragAndDrop.tempDOMM = document.body.onmousemove, window.dhtmlDragAndDrop.dragStartNode = this, window.dhtmlDragAndDrop.dragStartObject = this.dragStarter, document.body.onmouseup = window.dhtmlDragAndDrop.preCreateDragCopy, document.body.onmousemove = window.dhtmlDragAndDrop.callDrag, window.dhtmlDragAndDrop.downtime = new Date().valueOf(), e && e.preventDefault ? (e.preventDefault(), !1) : !1) : void 0;
}, dhtmlDragAndDropObject.prototype.callDrag = function (e) {
  e || (e = window.event);
  var t = window.dhtmlDragAndDrop;

  if (!(new Date().valueOf() - t.downtime < 100)) {
    if (!t.dragNode) {
      if (!t.waitDrag) return t.stopDrag(e, !0);
      if (t.dragNode = t.dragStartObject._createDragNode(t.dragStartNode, e), !t.dragNode) return t.stopDrag();
      t.dragNode.onselectstart = function () {
        return !1;
      }, t.gldragNode = t.dragNode, document.body.appendChild(t.dragNode), document.body.onmouseup = t.stopDrag, t.waitDrag = 0, t.dragNode.pWindow = window, t.initFrameRoute();
    }

    if (t.dragNode.parentNode != window.document.body && t.gldragNode) {
      var i = t.gldragNode;
      t.gldragNode.old && (i = t.gldragNode.old), i.parentNode.removeChild(i);
      var r = t.dragNode.pWindow;

      if (i.pWindow && i.pWindow.dhtmlDragAndDrop.lastLanding && i.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(i.pWindow.dhtmlDragAndDrop.lastLanding), _isIE) {
        var s = document.createElement("div");
        s.innerHTML = t.dragNode.outerHTML, t.dragNode = s.childNodes[0];
      } else t.dragNode = t.dragNode.cloneNode(!0);

      t.dragNode.pWindow = window, t.gldragNode.old = t.dragNode, document.body.appendChild(t.dragNode), r.dhtmlDragAndDrop.dragNode = t.dragNode;
    }

    t.dragNode.style.left = e.clientX + 15 + (t.fx ? -1 * t.fx : 0) + (document.body.scrollLeft || document.documentElement.scrollLeft) + "px", t.dragNode.style.top = e.clientY + 3 + (t.fy ? -1 * t.fy : 0) + (document.body.scrollTop || document.documentElement.scrollTop) + "px";
    var a;
    a = e.srcElement ? e.srcElement : e.target, t.checkLanding(a, e);
  }
}, dhtmlDragAndDropObject.prototype.calculateFramePosition = function (e) {
  if (window.name) {
    for (var t = parent.frames[window.name].frameElement.offsetParent, i = 0, r = 0; t;) {
      i += t.offsetLeft, r += t.offsetTop, t = t.offsetParent;
    }

    if (parent.dhtmlDragAndDrop) {
      var s = parent.dhtmlDragAndDrop.calculateFramePosition(1);
      i += 1 * s.split("_")[0], r += 1 * s.split("_")[1];
    }

    if (e) return i + "_" + r;
    this.fx = i, this.fy = r;
  }

  return "0_0";
}, dhtmlDragAndDropObject.prototype.checkLanding = function (e, t) {
  e && e.dragLanding ? (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding), this.lastLanding = e, this.lastLanding = this.lastLanding.dragLanding._dragIn(this.lastLanding, this.dragStartNode, t.clientX, t.clientY, t), this.lastLanding_scr = _isIE ? t.srcElement : t.target) : e && "BODY" != e.tagName ? this.checkLanding(e.parentNode, t) : (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding, t.clientX, t.clientY, t), this.lastLanding = 0, this._onNotFound && this._onNotFound());
}, dhtmlDragAndDropObject.prototype.stopDrag = function (e, t) {
  var i = window.dhtmlDragAndDrop;

  if (!t) {
    i.stopFrameRoute();
    var r = i.lastLanding;
    i.lastLanding = null, r && r.dragLanding._drag(i.dragStartNode, i.dragStartObject, r, _isIE ? event.srcElement : e.target);
  }

  i.lastLanding = null, i.dragNode && i.dragNode.parentNode == document.body && i.dragNode.parentNode.removeChild(i.dragNode), i.dragNode = 0, i.gldragNode = 0, i.fx = 0, i.fy = 0, i.dragStartNode = 0, i.dragStartObject = 0, document.body.onmouseup = i.tempDOMU, document.body.onmousemove = i.tempDOMM, i.tempDOMU = null, i.tempDOMM = null, i.waitDrag = 0;
}, dhtmlDragAndDropObject.prototype.stopFrameRoute = function (e) {
  e && window.dhtmlDragAndDrop.stopDrag(1, 1);

  for (var t = 0; t < window.frames.length; t++) {
    try {
      window.frames[t] != e && window.frames[t].dhtmlDragAndDrop && window.frames[t].dhtmlDragAndDrop.stopFrameRoute(window);
    } catch (i) {}
  }

  try {
    parent.dhtmlDragAndDrop && parent != window && parent != e && parent.dhtmlDragAndDrop.stopFrameRoute(window);
  } catch (i) {}
}, dhtmlDragAndDropObject.prototype.initFrameRoute = function (e, t) {
  e && (window.dhtmlDragAndDrop.preCreateDragCopy(), window.dhtmlDragAndDrop.dragStartNode = e.dhtmlDragAndDrop.dragStartNode, window.dhtmlDragAndDrop.dragStartObject = e.dhtmlDragAndDrop.dragStartObject, window.dhtmlDragAndDrop.dragNode = e.dhtmlDragAndDrop.dragNode, window.dhtmlDragAndDrop.gldragNode = e.dhtmlDragAndDrop.dragNode, window.document.body.onmouseup = window.dhtmlDragAndDrop.stopDrag, window.waitDrag = 0, !_isIE && t && (!_isFF || _FFrv < 1.8) && window.dhtmlDragAndDrop.calculateFramePosition());

  try {
    parent.dhtmlDragAndDrop && parent != window && parent != e && parent.dhtmlDragAndDrop.initFrameRoute(window);
  } catch (i) {}

  for (var r = 0; r < window.frames.length; r++) {
    try {
      window.frames[r] != e && window.frames[r].dhtmlDragAndDrop && window.frames[r].dhtmlDragAndDrop.initFrameRoute(window, !e || t ? 1 : 0);
    } catch (i) {}
  }
}, _isFF = !1, _isIE = !1, _isOpera = !1, _isKHTML = !1, _isMacOS = !1, _isChrome = !1, _FFrv = !1, _KHTMLrv = !1, _OperaRv = !1, -1 != navigator.userAgent.indexOf("Macintosh") && (_isMacOS = !0), navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && (_isChrome = !0), -1 != navigator.userAgent.indexOf("Safari") || -1 != navigator.userAgent.indexOf("Konqueror") ? (_KHTMLrv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari") + 7, 5)), _KHTMLrv > 525 ? (_isFF = !0, _FFrv = 1.9) : _isKHTML = !0) : -1 != navigator.userAgent.indexOf("Opera") ? (_isOpera = !0, _OperaRv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera") + 6, 3))) : -1 != navigator.appName.indexOf("Microsoft") ? (_isIE = !0, -1 == navigator.appVersion.indexOf("MSIE 8.0") && -1 == navigator.appVersion.indexOf("MSIE 9.0") && -1 == navigator.appVersion.indexOf("MSIE 10.0") || "BackCompat" == document.compatMode || (_isIE = 8)) : "Netscape" == navigator.appName && -1 != navigator.userAgent.indexOf("Trident") ? _isIE = 8 : (_isFF = !0, _FFrv = parseFloat(navigator.userAgent.split("rv:")[1])), dtmlXMLLoaderObject.prototype.doXPath = function (e, t, i, r) {
  if (_isKHTML || !_isIE && !window.XPathResult) return this.doXPathOpera(e, t);
  if (_isIE) return t || (t = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML), t || dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]), i && t.setProperty("SelectionNamespaces", "xmlns:xsl='" + i + "'"), "single" == r ? t.selectSingleNode(e) : t.selectNodes(e) || new Array(0);
  var s = t;
  t || (t = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML), t || dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]), -1 != t.nodeName.indexOf("document") ? s = t : (s = t, t = t.ownerDocument);
  var a = XPathResult.ANY_TYPE;
  "single" == r && (a = XPathResult.FIRST_ORDERED_NODE_TYPE);
  var n = [],
      d = t.evaluate(e, s, function (e) {
    return i;
  }, a, null);
  if (a == XPathResult.FIRST_ORDERED_NODE_TYPE) return d.singleNodeValue;

  for (var l = d.iterateNext(); l;) {
    n[n.length] = l, l = d.iterateNext();
  }

  return n;
}, _dhtmlxError.prototype.catchError = function (e, t) {
  this.catches[e] = t;
}, _dhtmlxError.prototype.throwError = function (e, t, i) {
  return this.catches[e] ? this.catches[e](e, t, i) : this.catches.ALL ? this.catches.ALL(e, t, i) : (window.alert("Error type: " + arguments[0] + "\nDescription: " + arguments[1]), null);
}, window.dhtmlxError = new _dhtmlxError(), dtmlXMLLoaderObject.prototype.doXPathOpera = function (e, t) {
  var i = e.replace(/[\/]+/gi, "/").split("/"),
      r = null,
      s = 1;
  if (!i.length) return [];
  if ("." == i[0]) r = [t];else {
    if ("" !== i[0]) return [];
    r = (this.xmlDoc.responseXML || this.xmlDoc).getElementsByTagName(i[s].replace(/\[[^\]]*\]/g, "")), s++;
  }

  for (s; s < i.length; s++) {
    r = this._getAllNamedChilds(r, i[s]);
  }

  return -1 != i[s - 1].indexOf("[") && (r = this._filterXPath(r, i[s - 1])), r;
}, dtmlXMLLoaderObject.prototype._filterXPath = function (e, t) {
  for (var i = [], t = t.replace(/[^\[]*\[\@/g, "").replace(/[\[\]\@]*/g, ""), r = 0; r < e.length; r++) {
    e[r].getAttribute(t) && (i[i.length] = e[r]);
  }

  return i;
}, dtmlXMLLoaderObject.prototype._getAllNamedChilds = function (e, t) {
  var i = [];
  _isKHTML && (t = t.toUpperCase());

  for (var r = 0; r < e.length; r++) {
    for (var s = 0; s < e[r].childNodes.length; s++) {
      _isKHTML ? e[r].childNodes[s].tagName && e[r].childNodes[s].tagName.toUpperCase() == t && (i[i.length] = e[r].childNodes[s]) : e[r].childNodes[s].tagName == t && (i[i.length] = e[r].childNodes[s]);
    }
  }

  return i;
}, "undefined" == typeof window.dhtmlxEvent && (window.dhtmlxEvent = function (e, t, i) {
  e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i);
}), dtmlXMLLoaderObject.prototype.xslDoc = null, dtmlXMLLoaderObject.prototype.setXSLParamValue = function (e, t, i) {
  i || (i = this.xslDoc), i.responseXML && (i = i.responseXML);
  var r = this.doXPath("/xsl:stylesheet/xsl:variable[@name='" + e + "']", i, "http://www.w3.org/1999/XSL/Transform", "single");
  r && (r.firstChild.nodeValue = t);
}, dtmlXMLLoaderObject.prototype.doXSLTransToObject = function (e, t) {
  e || (e = this.xslDoc), e.responseXML && (e = e.responseXML), t || (t = this.xmlDoc), t.responseXML && (t = t.responseXML);
  var i;

  if (_isIE) {
    i = new ActiveXObject("Msxml2.DOMDocument.3.0");

    try {
      t.transformNodeToObject(e, i);
    } catch (r) {
      i = t.transformNode(e);
    }
  } else this.XSLProcessor || (this.XSLProcessor = new XSLTProcessor(), this.XSLProcessor.importStylesheet(e)), i = this.XSLProcessor.transformToDocument(t);

  return i;
}, dtmlXMLLoaderObject.prototype.doXSLTransToString = function (e, t) {
  var i = this.doXSLTransToObject(e, t);
  return "string" == typeof i ? i : this.doSerialization(i);
}, dtmlXMLLoaderObject.prototype.doSerialization = function (e) {
  if (e || (e = this.xmlDoc), e.responseXML && (e = e.responseXML), _isIE) return e.xml;
  var t = new XMLSerializer();
  return t.serializeToString(e);
}, dhtmlxEventable = function dhtmlxEventable(obj) {
  obj.attachEvent = function (e, t, i) {
    return e = "ev_" + e.toLowerCase(), this[e] || (this[e] = new this.eventCatcher(i || this)), e + ":" + this[e].addEvent(t);
  }, obj.callEvent = function (e, t) {
    return e = "ev_" + e.toLowerCase(), this[e] ? this[e].apply(this, t) : !0;
  }, obj.checkEvent = function (e) {
    return !!this["ev_" + e.toLowerCase()];
  }, obj.eventCatcher = function (obj) {
    var dhx_catch = [],
        z = function z() {
      for (var e = !0, t = 0; t < dhx_catch.length; t++) {
        if (dhx_catch[t]) {
          var i = dhx_catch[t].apply(obj, arguments);
          e = e && i;
        }
      }

      return e;
    };

    return z.addEvent = function (ev) {
      return "function" != typeof ev && (ev = eval(ev)), ev ? dhx_catch.push(ev) - 1 : !1;
    }, z.removeEvent = function (e) {
      dhx_catch[e] = null;
    }, z;
  }, obj.detachEvent = function (e) {
    if (e) {
      var t = e.split(":");
      this[t[0]].removeEvent(t[1]);
    }
  }, obj.detachAllEvents = function () {
    for (var e in this) {
      0 === e.indexOf("ev_") && (this.detachEvent(e), this[e] = null);
    }
  }, obj = null;
}, window.dhtmlx || (window.dhtmlx = {}), function () {
  function e(e, t) {
    setTimeout(function () {
      if (e.box) {
        var r = e.callback;
        i(!1), e.box.parentNode.removeChild(e.box), dhtmlx.callEvent("onAfterMessagePopup", [e.box]), c = e.box = null, r && r(t);
      }
    }, 1);
  }

  function t(t) {
    if (c) {
      t = t || event;
      var i = t.which || event.keyCode,
          r = !1;

      if (dhtmlx.message.keyboard) {
        if (13 == i || 32 == i) {
          var s = t.target || t.srcElement;
          scheduler._getClassName(s).indexOf("dhtmlx_popup_button") > -1 && s.click ? s.click() : (e(c, !0), r = !0);
        }

        27 == i && (e(c, !1), r = !0);
      }

      if (r) return t.preventDefault && t.preventDefault(), !(t.cancelBubble = !0);
    } else ;
  }

  function i(e) {
    i.cover || (i.cover = document.createElement("div"), i.cover.onkeydown = t, i.cover.className = "dhx_modal_cover", document.body.appendChild(i.cover));
    document.body.scrollHeight;
    i.cover.style.display = e ? "inline-block" : "none";
  }

  function r(e, t, i) {
    var r = scheduler._waiAria.messageButtonAttrString(e),
        s = i ? i : e || "",
        a = "dhtmlx_" + s.toLowerCase().replace(/ /g, "_") + "_button";

    return "<div " + r + "class='dhtmlx_popup_button " + a + "' result='" + t + "' ><div>" + e + "</div></div>";
  }

  function s(e) {
    u.area || (u.area = document.createElement("div"), u.area.className = "dhtmlx_message_area", u.area.style[u.position] = "5px", document.body.appendChild(u.area)), u.hide(e.id);
    var t = document.createElement("div");
    return t.innerHTML = "<div>" + e.text + "</div>", t.className = "dhtmlx-info dhtmlx-" + e.type, t.onclick = function () {
      u.hide(e.id), e = null;
    }, scheduler._waiAria.messageInfoAttr(t), "bottom" == u.position && u.area.firstChild ? u.area.insertBefore(t, u.area.firstChild) : u.area.appendChild(t), e.expire > 0 && (u.timers[e.id] = window.setTimeout(function () {
      u.hide(e.id);
    }, e.expire)), u.pull[e.id] = t, t = null, e.id;
  }

  function a(t, i, s) {
    var a = document.createElement("div");
    a.className = " dhtmlx_modal_box dhtmlx-" + t.type, a.setAttribute("dhxbox", 1);
    var n = scheduler.uid();

    scheduler._waiAria.messageModalAttr(a, n);

    var d = "",
        l = !1;

    if (t.width && (a.style.width = t.width), t.height && (a.style.height = t.height), t.title && (d += '<div class="dhtmlx_popup_title" id="' + n + '">' + t.title + "</div>", l = !0), d += '<div class="dhtmlx_popup_text" ' + (l ? "" : ' id="' + n + '" ') + "><span>" + (t.content ? "" : t.text) + '</span></div><div  class="dhtmlx_popup_controls">', i) {
      var o = t.ok || scheduler.locale.labels.message_ok;
      void 0 === o && (o = "OK"), d += r(o, !0, "ok");
    }

    if (s) {
      var h = t.cancel || scheduler.locale.labels.message_cancel;
      void 0 === h && (h = "Cancel"), d += r(h, !1, "cancel");
    }

    if (t.buttons) for (var _ = 0; _ < t.buttons.length; _++) {
      d += r(t.buttons[_], _);
    }

    if (d += "</div>", a.innerHTML = d, t.content) {
      var u = t.content;
      "string" == typeof u && (u = document.getElementById(u)), "none" == u.style.display && (u.style.display = ""), a.childNodes[t.title ? 1 : 0].appendChild(u);
    }

    return a.onclick = function (i) {
      i = i || event;

      var r = i.target || i.srcElement,
          s = scheduler._getClassName(r);

      if (s || (r = r.parentNode), s = scheduler._getClassName(r), "dhtmlx_popup_button" == s.split(" ")[0]) {
        var a = r.getAttribute("result");
        a = "true" == a || ("false" == a ? !1 : a), e(t, a);
      }
    }, t.box = a, c = t, a;
  }

  function n(e, r, s) {
    var n = e.tagName ? e : a(e, r, s);
    e.hidden || i(!0), document.body.appendChild(n);
    var d = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - n.offsetWidth) / 2)),
        l = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - n.offsetHeight) / 2));
    return "top" == e.position ? n.style.top = "-3px" : n.style.top = l + "px", n.style.left = d + "px", n.onkeydown = t, dhtmlx.modalbox.focus(n), e.hidden && dhtmlx.modalbox.hide(n), dhtmlx.callEvent("onMessagePopup", [n]), n;
  }

  function d(e) {
    return n(e, !0, !1);
  }

  function l(e) {
    return n(e, !0, !0);
  }

  function o(e) {
    return n(e);
  }

  function h(e, t, i) {
    return "object" != _typeof(e) && ("function" == typeof t && (i = t, t = ""), e = {
      text: e,
      type: t,
      callback: i
    }), e;
  }

  function _(e, t, i, r) {
    return "object" != _typeof(e) && (e = {
      text: e,
      type: t,
      expire: i,
      id: r
    }), e.id = e.id || u.uid(), e.expire = e.expire || u.expire, e;
  }

  var c = null;
  document.attachEvent ? document.attachEvent("onkeydown", t) : document.addEventListener("keydown", t, !0), dhtmlx.alert = function () {
    var e = h.apply(this, arguments);
    return e.type = e.type || "confirm", d(e);
  }, dhtmlx.confirm = function () {
    var e = h.apply(this, arguments);
    return e.type = e.type || "alert", l(e);
  }, dhtmlx.modalbox = function () {
    var e = h.apply(this, arguments);
    return e.type = e.type || "alert", o(e);
  }, dhtmlx.modalbox.hide = function (e) {
    for (; e && e.getAttribute && !e.getAttribute("dhxbox");) {
      e = e.parentNode;
    }

    e && (e.parentNode.removeChild(e), i(!1));
  }, dhtmlx.modalbox.focus = function (e) {
    setTimeout(function () {
      var t = scheduler._getFocusableNodes(e);

      t.length && t[0].focus && t[0].focus();
    }, 1);
  };

  var u = dhtmlx.message = function (e, t, i, r) {
    e = _.apply(this, arguments), e.type = e.type || "info";
    var a = e.type.split("-")[0];

    switch (a) {
      case "alert":
        return d(e);

      case "confirm":
        return l(e);

      case "modalbox":
        return o(e);

      default:
        return s(e);
    }
  };

  u.seed = new Date().valueOf(), u.uid = function () {
    return u.seed++;
  }, u.expire = 4e3, u.keyboard = !0, u.position = "top", u.pull = {}, u.timers = {}, u.hideAll = function () {
    for (var e in u.pull) {
      u.hide(e);
    }
  }, u.hide = function (e) {
    var t = u.pull[e];
    t && t.parentNode && (window.setTimeout(function () {
      t.parentNode.removeChild(t), t = null;
    }, 2e3), t.className += " hidden", u.timers[e] && window.clearTimeout(u.timers[e]), delete u.pull[e]);
  };
}(), dhtmlx.attachEvent || dhtmlxEventable(dhtmlx);

var dataProcessor = window.dataProcessor = function (e) {
  return this.serverProcessor = e, this.action_param = "!nativeeditor_status", this.object = null, this.updatedRows = [], this.autoUpdate = !0, this.updateMode = "cell", this._tMode = "GET", this._headers = null, this._payload = null, this.post_delim = "_", this._waitMode = 0, this._in_progress = {}, this._invalid = {}, this.mandatoryFields = [], this.messages = [], this.styles = {
    updated: "font-weight:bold;",
    inserted: "font-weight:bold;",
    deleted: "text-decoration : line-through;",
    invalid: "background-color:FFE0E0;",
    invalid_cell: "border-bottom:2px solid red;",
    error: "color:red;",
    clear: "font-weight:normal;text-decoration:none;"
  }, this.enableUTFencoding(!0), dhtmlxEventable(this), this;
};

dataProcessor.prototype = {
  setTransactionMode: function setTransactionMode(e, t) {
    "object" == _typeof(e) ? (this._tMode = e.mode || this._tMode, void 0 !== e.headers && (this._headers = e.headers), void 0 !== e.payload && (this._payload = e.payload)) : (this._tMode = e, this._tSend = t), "REST" == this._tMode && (this._tSend = !1, this._endnm = !0), "JSON" == this._tMode && (this._tSend = !1, this._endnm = !0, this._headers = this._headers || {}, this._headers["Content-type"] = "application/json");
  },
  escape: function (_escape) {
    function escape(_x2) {
      return _escape.apply(this, arguments);
    }

    escape.toString = function () {
      return _escape.toString();
    };

    return escape;
  }(function (e) {
    return this._utf ? encodeURIComponent(e) : escape(e);
  }),
  enableUTFencoding: function enableUTFencoding(e) {
    this._utf = !!e;
  },
  setDataColumns: function setDataColumns(e) {
    this._columns = "string" == typeof e ? e.split(",") : e;
  },
  getSyncState: function getSyncState() {
    return !this.updatedRows.length;
  },
  enableDataNames: function enableDataNames(e) {
    this._endnm = !!e;
  },
  enablePartialDataSend: function enablePartialDataSend(e) {
    this._changed = !!e;
  },
  setUpdateMode: function setUpdateMode(e, t) {
    this.autoUpdate = "cell" == e, this.updateMode = e, this.dnd = t;
  },
  ignore: function ignore(e, t) {
    this._silent_mode = !0, e.call(t || window), this._silent_mode = !1;
  },
  setUpdated: function setUpdated(e, t, i) {
    if (!this._silent_mode) {
      var r = this.findRow(e);
      i = i || "updated";
      var s = this.obj.getUserData(e, this.action_param);
      s && "updated" == i && (i = s), t ? (this.set_invalid(e, !1), this.updatedRows[r] = e, this.obj.setUserData(e, this.action_param, i), this._in_progress[e] && (this._in_progress[e] = "wait")) : this.is_invalid(e) || (this.updatedRows.splice(r, 1), this.obj.setUserData(e, this.action_param, "")), t || this._clearUpdateFlag(e), this.markRow(e, t, i), t && this.autoUpdate && this.sendData(e);
    }
  },
  _clearUpdateFlag: function _clearUpdateFlag(e) {},
  markRow: function markRow(e, t, i) {
    var r = "",
        s = this.is_invalid(e);

    if (s && (r = this.styles[s], t = !0), this.callEvent("onRowMark", [e, t, i, s]) && (r = this.styles[t ? i : "clear"] + r, this.obj[this._methods[0]](e, r), s && s.details)) {
      r += this.styles[s + "_cell"];

      for (var a = 0; a < s.details.length; a++) {
        s.details[a] && this.obj[this._methods[1]](e, a, r);
      }
    }
  },
  getState: function getState(e) {
    return this.obj.getUserData(e, this.action_param);
  },
  is_invalid: function is_invalid(e) {
    return this._invalid[e];
  },
  set_invalid: function set_invalid(e, t, i) {
    i && (t = {
      value: t,
      details: i,
      toString: function toString() {
        return this.value.toString();
      }
    }), this._invalid[e] = t;
  },
  checkBeforeUpdate: function checkBeforeUpdate(e) {
    return !0;
  },
  sendData: function sendData(e) {
    return !this._waitMode || "tree" != this.obj.mytype && !this.obj._h2 ? (this.obj.editStop && this.obj.editStop(), "undefined" == typeof e || this._tSend ? this.sendAllData() : this._in_progress[e] ? !1 : (this.messages = [], !this.checkBeforeUpdate(e) && this.callEvent("onValidationError", [e, this.messages]) ? !1 : void this._beforeSendData(this._getRowData(e), e))) : void 0;
  },
  _beforeSendData: function _beforeSendData(e, t) {
    return this.callEvent("onBeforeUpdate", [t, this.getState(t), e]) ? void this._sendData(e, t) : !1;
  },
  serialize: function serialize(e, t) {
    if ("string" == typeof e) return e;
    if ("undefined" != typeof t) return this.serialize_one(e, "");
    var i = [],
        r = [];

    for (var s in e) {
      e.hasOwnProperty(s) && (i.push(this.serialize_one(e[s], s + this.post_delim)), r.push(s));
    }

    return i.push("ids=" + this.escape(r.join(","))), dhtmlx.security_key && i.push("dhx_security=" + dhtmlx.security_key), i.join("&");
  },
  serialize_one: function serialize_one(e, t) {
    if ("string" == typeof e) return e;
    var i = [];

    for (var r in e) {
      if (e.hasOwnProperty(r)) {
        if (("id" == r || r == this.action_param) && "REST" == this._tMode) continue;
        i.push(this.escape((t || "") + r) + "=" + this.escape(e[r]));
      }
    }

    return i.join("&");
  },
  _applyPayload: function _applyPayload(e) {
    var t = this.obj.$ajax;
    if (this._payload) for (var i in this._payload) {
      e = e + t.urlSeparator(e) + this.escape(i) + "=" + this.escape(this._payload[i]);
    }
    return e;
  },
  _sendData: function _sendData(e, t) {
    if (e) {
      if (!this.callEvent("onBeforeDataSending", t ? [t, this.getState(t), e] : [null, null, e])) return !1;
      t && (this._in_progress[t] = new Date().valueOf());

      var i = this,
          r = function r(_r) {
        var s = [];
        if (t) s.push(t);else if (e) for (var a in e) {
          s.push(a);
        }
        return i.afterUpdate(i, _r, s);
      },
          s = this.obj.$ajax,
          a = this.serverProcessor + (this._user ? s.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + this.obj.getUserData(0, "version")].join("&") : ""),
          n = this._applyPayload(a);

      if ("GET" == this._tMode) s.query({
        url: n + s.urlSeparator(n) + this.serialize(e, t),
        method: "GET",
        callback: r,
        headers: this._headers
      });else if ("POST" == this._tMode) s.query({
        url: n,
        method: "POST",
        headers: this._headers,
        data: this.serialize(e, t),
        callback: r
      });else if ("JSON" == this._tMode) {
        var d = e[this.action_param],
            l = {};

        for (var o in e) {
          l[o] = e[o];
        }

        delete l[this.action_param], delete l.id, delete l.gr_id, s.query({
          url: n,
          method: "POST",
          headers: this._headers,
          callback: r,
          data: JSON.stringify({
            id: t,
            action: d,
            data: l
          })
        });
      } else if ("REST" == this._tMode) {
        var h = this.getState(t),
            _ = a.replace(/(\&|\?)editing\=true/, ""),
            l = "",
            c = "post";

        "inserted" == h ? l = this.serialize(e, t) : "deleted" == h ? (c = "DELETE", _ = _ + ("/" == _.slice(-1) ? "" : "/") + t) : (c = "PUT", l = this.serialize(e, t), _ = _ + ("/" == _.slice(-1) ? "" : "/") + t), _ = this._applyPayload(_), s.query({
          url: _,
          method: c,
          headers: this._headers,
          data: l,
          callback: r
        });
      }
      this._waitMode++;
    }
  },
  sendAllData: function sendAllData() {
    if (this.updatedRows.length) {
      this.messages = [];

      for (var e = !0, t = 0; t < this.updatedRows.length; t++) {
        e &= this.checkBeforeUpdate(this.updatedRows[t]);
      }

      if (!e && !this.callEvent("onValidationError", ["", this.messages])) return !1;
      if (this._tSend) this._sendData(this._getAllData());else for (var t = 0; t < this.updatedRows.length; t++) {
        if (!this._in_progress[this.updatedRows[t]]) {
          if (this.is_invalid(this.updatedRows[t])) continue;
          if (this._beforeSendData(this._getRowData(this.updatedRows[t]), this.updatedRows[t]), this._waitMode && ("tree" == this.obj.mytype || this.obj._h2)) return;
        }
      }
    }
  },
  _getAllData: function _getAllData(e) {
    for (var t = {}, i = !1, r = 0; r < this.updatedRows.length; r++) {
      var s = this.updatedRows[r];

      if (!this._in_progress[s] && !this.is_invalid(s)) {
        var a = this._getRowData(s);

        this.callEvent("onBeforeUpdate", [s, this.getState(s), a]) && (t[s] = a, i = !0, this._in_progress[s] = new Date().valueOf());
      }
    }

    return i ? t : null;
  },
  setVerificator: function setVerificator(e, t) {
    this.mandatoryFields[e] = t || function (e) {
      return "" !== e;
    };
  },
  clearVerificator: function clearVerificator(e) {
    this.mandatoryFields[e] = !1;
  },
  findRow: function findRow(e) {
    var t = 0;

    for (t = 0; t < this.updatedRows.length && e != this.updatedRows[t]; t++) {
      ;
    }

    return t;
  },
  defineAction: function defineAction(e, t) {
    this._uActions || (this._uActions = []), this._uActions[e] = t;
  },
  afterUpdateCallback: function afterUpdateCallback(e, t, i, r) {
    var s = e,
        a = "error" != i && "invalid" != i;
    if (a || this.set_invalid(e, i), this._uActions && this._uActions[i] && !this._uActions[i](r)) return delete this._in_progress[s];
    "wait" != this._in_progress[s] && this.setUpdated(e, !1);
    var n = e;

    switch (i) {
      case "inserted":
      case "insert":
        t != e && (this.setUpdated(e, !1), this.obj[this._methods[2]](e, t), e = t);
        break;

      case "delete":
      case "deleted":
        return this.obj.setUserData(e, this.action_param, "true_deleted"), this.obj[this._methods[3]](e), delete this._in_progress[s], this.callEvent("onAfterUpdate", [e, i, t, r]);
    }

    "wait" != this._in_progress[s] ? (a && this.obj.setUserData(e, this.action_param, ""), delete this._in_progress[s]) : (delete this._in_progress[s], this.setUpdated(t, !0, this.obj.getUserData(e, this.action_param))), this.callEvent("onAfterUpdate", [n, i, t, r]);
  },
  afterUpdate: function afterUpdate(e, t, i) {
    var r = this.obj.$ajax;

    if (window.JSON) {
      var s;

      try {
        s = JSON.parse(t.xmlDoc.responseText);
      } catch (a) {
        t.xmlDoc.responseText.length || (s = {});
      }

      if (s) {
        var n = s.action || this.getState(i) || "updated",
            d = s.sid || i[0],
            l = s.tid || i[0];
        return e.afterUpdateCallback(d, l, n, s), void e.finalizeUpdate();
      }
    }

    var o = r.xmltop("data", t.xmlDoc);
    if (!o) return this.cleanUpdate(i);
    var h = r.xpath("//data/action", o);
    if (!h.length) return this.cleanUpdate(i);

    for (var _ = 0; _ < h.length; _++) {
      var c = h[_],
          n = c.getAttribute("type"),
          d = c.getAttribute("sid"),
          l = c.getAttribute("tid");
      e.afterUpdateCallback(d, l, n, c);
    }

    e.finalizeUpdate();
  },
  cleanUpdate: function cleanUpdate(e) {
    if (e) for (var t = 0; t < e.length; t++) {
      delete this._in_progress[e[t]];
    }
  },
  finalizeUpdate: function finalizeUpdate() {
    this._waitMode && this._waitMode--, ("tree" == this.obj.mytype || this.obj._h2) && this.updatedRows.length && this.sendData(), this.callEvent("onAfterUpdateFinish", []), this.updatedRows.length || this.callEvent("onFullSync", []);
  },
  init: function init(e) {
    this.obj = e, this.obj._dp_init && this.obj._dp_init(this);
  },
  setOnAfterUpdate: function setOnAfterUpdate(e) {
    this.attachEvent("onAfterUpdate", e);
  },
  enableDebug: function enableDebug(e) {},
  setOnBeforeUpdateHandler: function setOnBeforeUpdateHandler(e) {
    this.attachEvent("onBeforeDataSending", e);
  },
  setAutoUpdate: function setAutoUpdate(e, t) {
    e = e || 2e3, this._user = t || new Date().valueOf(), this._need_update = !1, this._update_busy = !1, this.attachEvent("onAfterUpdate", function (e, t, i, r) {
      this.afterAutoUpdate(e, t, i, r);
    }), this.attachEvent("onFullSync", function () {
      this.fullSync();
    });
    var i = this;
    window.setInterval(function () {
      i.loadUpdate();
    }, e);
  },
  afterAutoUpdate: function afterAutoUpdate(e, t, i, r) {
    return "collision" == t ? (this._need_update = !0, !1) : !0;
  },
  fullSync: function fullSync() {
    return this._need_update && (this._need_update = !1, this.loadUpdate()), !0;
  },
  getUpdates: function getUpdates(e, t) {
    var i = this.obj.$ajax;
    return this._update_busy ? !1 : (this._update_busy = !0, void i.get(e, t));
  },
  _v: function _v(e) {
    return e.firstChild ? e.firstChild.nodeValue : "";
  },
  _a: function _a(e) {
    for (var t = [], i = 0; i < e.length; i++) {
      t[i] = this._v(e[i]);
    }

    return t;
  },
  loadUpdate: function loadUpdate() {
    var e = this.obj.$ajax,
        t = this,
        i = this.obj.getUserData(0, "version"),
        r = this.serverProcessor + e.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + i].join("&");
    r = r.replace("editing=true&", ""), this.getUpdates(r, function (i) {
      var r = e.xpath("//userdata", i);
      t.obj.setUserData(0, "version", t._v(r[0]));
      var s = e.xpath("//update", i);

      if (s.length) {
        t._silent_mode = !0;

        for (var a = 0; a < s.length; a++) {
          var n = s[a].getAttribute("status"),
              d = s[a].getAttribute("id"),
              l = s[a].getAttribute("parent");

          switch (n) {
            case "inserted":
              t.callEvent("insertCallback", [s[a], d, l]);
              break;

            case "updated":
              t.callEvent("updateCallback", [s[a], d, l]);
              break;

            case "deleted":
              t.callEvent("deleteCallback", [s[a], d, l]);
          }
        }

        t._silent_mode = !1;
      }

      t._update_busy = !1, t = null;
    });
  }
}, window.dataProcessor && !dataProcessor.prototype.init_original && (dataProcessor.prototype.init_original = dataProcessor.prototype.init, dataProcessor.prototype.init = function (e) {
  this.init_original(e), e._dataprocessor = this, this.setTransactionMode("POST", !0), this.serverProcessor += (-1 != this.serverProcessor.indexOf("?") ? "&" : "?") + "editing=true";
}), dhtmlxError.catchError("LoadXML", function (e, t, i) {
  var r = i[0].responseText;

  switch (scheduler.config.ajax_error) {
    case "alert":
      window.alert(r);
      break;

    case "console":
      window.console.log(r);
  }
}), window.Scheduler = {
  _seed: 0
}, Scheduler.plugin = function (e) {
  this._schedulerPlugins.push(e), e(window.scheduler);
}, Scheduler._schedulerPlugins = [], Scheduler.getSchedulerInstance = function () {
  var scheduler = {
    version: "5.0.0"
  };
  dhtmlxEventable(scheduler), scheduler._detachDomEvent = function (e, t, i) {
    e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent && e.detachEvent("on" + t, i);
  }, scheduler._init_once = function () {
    function e(e) {
      for (var t = document.body; e && e != t;) {
        e = e.parentNode;
      }

      return !(t != e);
    }

    function t() {
      return {
        w: window.innerWidth || document.documentElement.clientWidth,
        h: window.innerHeight || document.documentElement.clientHeight
      };
    }

    function i(e, t) {
      return e.w == t.w && e.h == t.h;
    }

    var r = t();
    dhtmlxEvent(window, "resize", function () {
      e(scheduler._obj) && (window.clearTimeout(scheduler._resize_timer), scheduler._resize_timer = window.setTimeout(function () {
        var s = t();

        if (!i(r, s)) {
          if (!e(scheduler._obj)) return;
          scheduler.callEvent("onSchedulerResize", []) && (scheduler.update_view(), scheduler.callEvent("onAfterSchedulerResize", []));
        }

        r = s;
      }, 20));
    }), scheduler._init_once = function () {};
  }, scheduler.init = function (e, t, i) {
    t = t || scheduler._currentDate(), i = i || "week", this._obj && this.unset_actions(), this._obj = "string" == typeof e ? document.getElementById(e) : e, this.$container = this._obj, this.config.wai_aria_attributes && this.config.wai_aria_application_role && this.$container.setAttribute("role", "application"), this._skin_init && scheduler._skin_init(), scheduler.date.init(), this._els = [], this._scroll = !0, this._quirks = _isIE && "BackCompat" == document.compatMode, this._quirks7 = _isIE && -1 == navigator.appVersion.indexOf("MSIE 8"), this.get_elements(), this.init_templates(), this.set_actions(), this._init_once(), this._init_touch_events(), this.set_sizes(), scheduler.callEvent("onSchedulerReady", []), this.setCurrentView(t, i);
  }, scheduler.xy = {
    min_event_height: 40,
    scale_width: 50,
    scroll_width: 18,
    scale_height: 20,
    month_scale_height: 20,
    menu_width: 25,
    margin_top: 0,
    margin_left: 0,
    editor_width: 140,
    month_head_height: 22,
    event_header_height: 14
  }, scheduler.keys = {
    edit_save: 13,
    edit_cancel: 27
  }, scheduler.set_sizes = function () {
    var e = this._x = this._obj.clientWidth - this.xy.margin_left,
        t = this._y = this._obj.clientHeight - this.xy.margin_top,
        i = this._table_view ? 0 : this.xy.scale_width + this.xy.scroll_width,
        r = this._table_view ? -1 : this.xy.scale_width,
        s = this.$container.querySelector(".dhx_cal_scale_placeholder");
    scheduler._is_material_skin() ? (s || (s = document.createElement("div"), s.className = "dhx_cal_scale_placeholder", this.$container.insertBefore(s, this._els.dhx_cal_header[0])), s.style.display = "block", this.set_xy(s, e, this.xy.scale_height + 1, 0, this.xy.nav_height + (this._quirks ? -1 : 1))) : s && s.parentNode.removeChild(s), this.set_xy(this._els.dhx_cal_navline[0], e, this.xy.nav_height, 0, 0), this.set_xy(this._els.dhx_cal_header[0], e - i, this.xy.scale_height, r, this.xy.nav_height + (this._quirks ? -1 : 1));
    var a = this._els.dhx_cal_navline[0].offsetHeight;
    a > 0 && (this.xy.nav_height = a);
    var n = this.xy.scale_height + this.xy.nav_height + (this._quirks ? -2 : 0);
    this.set_xy(this._els.dhx_cal_data[0], e, t - (n + 2), 0, n + 2);
  }, scheduler.set_xy = function (e, t, i, r, s) {
    e.style.width = Math.max(0, t) + "px", e.style.height = Math.max(0, i) + "px", arguments.length > 3 && (e.style.left = r + "px", e.style.top = s + "px");
  }, scheduler.get_elements = function () {
    for (var e = this._obj.getElementsByTagName("DIV"), t = 0; t < e.length; t++) {
      var i = scheduler._getClassName(e[t]),
          r = e[t].getAttribute("name") || "";

      i && (i = i.split(" ")[0]), this._els[i] || (this._els[i] = []), this._els[i].push(e[t]);
      var s = scheduler.locale.labels[r || i];
      "string" != typeof s && r && !e[t].innerHTML && (s = r.split("_")[0]), s && (this._waiAria.labelAttr(e[t], s), e[t].innerHTML = s);
    }
  }, scheduler.unset_actions = function () {
    for (var e in this._els) {
      if (this._click[e]) for (var t = 0; t < this._els[e].length; t++) {
        this._els[e][t].onclick = null;
      }
    }

    this._obj.onselectstart = null, this._obj.onmousemove = null, this._obj.onmousedown = null, this._obj.onmouseup = null, this._obj.ondblclick = null, this._obj.oncontextmenu = null;
  }, scheduler.set_actions = function () {
    for (var e in this._els) {
      if (this._click[e]) for (var t = 0; t < this._els[e].length; t++) {
        this._els[e][t].onclick = scheduler._click[e];
      }
    }

    this._obj.onselectstart = function (e) {
      return !1;
    }, this._obj.onmousemove = function (e) {
      scheduler._temp_touch_block || scheduler._on_mouse_move(e || event);
    }, this._obj.onmousedown = function (e) {
      scheduler._ignore_next_click || scheduler._on_mouse_down(e || event);
    }, this._obj.onmouseup = function (e) {
      scheduler._ignore_next_click || scheduler._on_mouse_up(e || event);
    }, this._obj.ondblclick = function (e) {
      scheduler._on_dbl_click(e || event);
    }, this._obj.oncontextmenu = function (e) {
      var t = e || event,
          i = t.target || t.srcElement,
          r = scheduler.callEvent("onContextMenu", [scheduler._locate_event(i), t]);
      return r;
    };
  }, scheduler.select = function (e) {
    this._select_id != e && (scheduler._close_not_saved(), this.editStop(!1), this.unselect(), this._select_id = e, this.updateEvent(e));
  }, scheduler.unselect = function (e) {
    if (!e || e == this._select_id) {
      var t = this._select_id;
      this._select_id = null, t && this.getEvent(t) && this.updateEvent(t);
    }
  }, scheduler.getState = function () {
    return {
      mode: this._mode,
      date: new Date(this._date),
      min_date: new Date(this._min_date),
      max_date: new Date(this._max_date),
      editor_id: this._edit_id,
      lightbox_id: this._lightbox_id,
      new_event: this._new_event,
      select_id: this._select_id,
      expanded: this.expanded,
      drag_id: this._drag_id,
      drag_mode: this._drag_mode
    };
  }, scheduler._click = {
    dhx_cal_data: function dhx_cal_data(e) {
      if (scheduler._ignore_next_click) return e.preventDefault && e.preventDefault(), e.cancelBubble = !0, scheduler._ignore_next_click = !1, !1;

      var t = e ? e.target : event.srcElement,
          i = scheduler._locate_event(t);

      if (e = e || event, i) {
        if (!scheduler.callEvent("onClick", [i, e]) || scheduler.config.readonly) return;
      } else scheduler.callEvent("onEmptyClick", [scheduler.getActionData(e).date, e]);

      if (i && scheduler.config.select) {
        scheduler.select(i);

        var r = scheduler._getClassName(t);

        -1 != r.indexOf("_icon") && scheduler._click.buttons[r.split(" ")[1].replace("icon_", "")](i);
      } else scheduler._close_not_saved(), new Date().valueOf() - (scheduler._new_event || 0) > 500 && scheduler.unselect();
    },
    dhx_cal_prev_button: function dhx_cal_prev_button() {
      scheduler._click.dhx_cal_next_button(0, -1);
    },
    dhx_cal_next_button: function dhx_cal_next_button(e, t) {
      scheduler.setCurrentView(scheduler.date.add(scheduler.date[scheduler._mode + "_start"](scheduler._date), t || 1, scheduler._mode));
    },
    dhx_cal_today_button: function dhx_cal_today_button() {
      scheduler.callEvent("onBeforeTodayDisplayed", []) && scheduler.setCurrentView(scheduler._currentDate());
    },
    dhx_cal_tab: function dhx_cal_tab() {
      var e = this.getAttribute("name"),
          t = e.substring(0, e.search("_tab"));
      scheduler.setCurrentView(scheduler._date, t);
    },
    buttons: {
      "delete": function _delete(e) {
        var t = scheduler.locale.labels.confirm_deleting;

        scheduler._dhtmlx_confirm(t, scheduler.locale.labels.title_confirm_deleting, function () {
          scheduler.deleteEvent(e);
        });
      },
      edit: function edit(e) {
        scheduler.edit(e);
      },
      save: function save(e) {
        scheduler.editStop(!0);
      },
      details: function details(e) {
        scheduler.showLightbox(e);
      },
      cancel: function cancel(e) {
        scheduler.editStop(!1);
      }
    }
  }, scheduler._dhtmlx_confirm = function (e, t, i) {
    if (!e) return i();
    var r = {
      text: e
    };
    t && (r.title = t), i && (r.callback = function (e) {
      e && i();
    }), dhtmlx.confirm(r);
  }, scheduler.addEventNow = function (e, t, i) {
    var r = {};
    scheduler._isObject(e) && !scheduler._isDate(e) && (r = e, e = null);
    var s = 6e4 * (this.config.event_duration || this.config.time_step);
    e || (e = r.start_date || Math.round(scheduler._currentDate().valueOf() / s) * s);
    var a = new Date(e);

    if (!t) {
      var n = this.config.first_hour;
      n > a.getHours() && (a.setHours(n), e = a.valueOf()), t = e.valueOf() + s;
    }

    var d = new Date(t);
    a.valueOf() == d.valueOf() && d.setTime(d.valueOf() + s), r.start_date = r.start_date || a, r.end_date = r.end_date || d, r.text = r.text || this.locale.labels.new_event, r.id = this._drag_id = r.id || this.uid(), this._drag_mode = "new-size", this._loading = !0;
    var l = this.addEvent(r);
    return this.callEvent("onEventCreated", [this._drag_id, i]), this._loading = !1, this._drag_event = {}, this._on_mouse_up(i), l;
  }, scheduler._on_dbl_click = function (e, t) {
    if (t = t || e.target || e.srcElement, !this.config.readonly) {
      var i = scheduler._getClassName(t).split(" ")[0];

      switch (i) {
        case "dhx_scale_holder":
        case "dhx_scale_holder_now":
        case "dhx_month_body":
        case "dhx_wa_day_data":
          if (!scheduler.config.dblclick_create) break;
          this.addEventNow(this.getActionData(e).date, null, e);
          break;

        case "dhx_cal_event":
        case "dhx_wa_ev_body":
        case "dhx_agenda_line":
        case "dhx_grid_event":
        case "dhx_cal_event_line":
        case "dhx_cal_event_clear":
          var r = this._locate_event(t);

          if (!this.callEvent("onDblClick", [r, e])) return;
          this.config.details_on_dblclick || this._table_view || !this.getEvent(r)._timed || !this.config.select ? this.showLightbox(r) : this.edit(r);
          break;

        case "dhx_time_block":
        case "dhx_cal_container":
          return;

        default:
          var s = this["dblclick_" + i];
          if (s) s.call(this, e);else if (t.parentNode && t != this) return scheduler._on_dbl_click(e, t.parentNode);
      }
    }
  }, scheduler._get_column_index = function (e) {
    var t = 0;

    if (this._cols) {
      for (var i = 0, r = 0; i + this._cols[r] < e && r < this._cols.length;) {
        i += this._cols[r], r++;
      }

      if (t = r + (this._cols[r] ? (e - i) / this._cols[r] : 0), this._ignores && t >= this._cols.length) for (; t >= 1 && this._ignores[Math.floor(t)];) {
        t--;
      }
    }

    return t;
  }, scheduler._week_indexes_from_pos = function (e) {
    if (this._cols) {
      var t = this._get_column_index(e.x);

      return e.x = Math.min(this._cols.length - 1, Math.max(0, Math.ceil(t) - 1)), e.y = Math.max(0, Math.ceil(60 * e.y / (this.config.time_step * this.config.hour_size_px)) - 1) + this.config.first_hour * (60 / this.config.time_step), e;
    }

    return e;
  }, scheduler._mouse_coords = function (e) {
    var t,
        i = document.body,
        r = document.documentElement;
    t = _isIE || !e.pageX && !e.pageY ? {
      x: e.clientX + (i.scrollLeft || r.scrollLeft || 0) - i.clientLeft,
      y: e.clientY + (i.scrollTop || r.scrollTop || 0) - i.clientTop
    } : {
      x: e.pageX,
      y: e.pageY
    }, t.x -= this.$domHelpers.getAbsoluteLeft(this._obj) + (this._table_view ? 0 : this.xy.scale_width), t.y -= this.$domHelpers.getAbsoluteTop(this._obj) + this.xy.nav_height + (this._dy_shift || 0) + this.xy.scale_height - this._els.dhx_cal_data[0].scrollTop, t.ev = e;
    var s = this["mouse_" + this._mode];
    if (s) t = s.call(this, t);else if (this._table_view) {
      var a = this._get_column_index(t.x);

      if (!this._cols || !this._colsS) return t;
      var n = 0;

      for (n = 1; n < this._colsS.heights.length && !(this._colsS.heights[n] > t.y); n++) {
        ;
      }

      t.y = Math.ceil(24 * (Math.max(0, a) + 7 * Math.max(0, n - 1)) * 60 / this.config.time_step), (scheduler._drag_mode || "month" == this._mode) && (t.y = 24 * (Math.max(0, Math.ceil(a) - 1) + 7 * Math.max(0, n - 1)) * 60 / this.config.time_step), "move" == this._drag_mode && scheduler._ignores_detected && scheduler.config.preserve_length && (t._ignores = !0, this._drag_event._event_length || (this._drag_event._event_length = this._get_real_event_length(this._drag_event.start_date, this._drag_event.end_date, {
        x_step: 1,
        x_unit: "day"
      }))), t.x = 0;
    } else t = this._week_indexes_from_pos(t);
    return t.timestamp = +new Date(), t;
  }, scheduler._close_not_saved = function () {
    if (new Date().valueOf() - (scheduler._new_event || 0) > 500 && scheduler._edit_id) {
      var e = scheduler.locale.labels.confirm_closing;
      scheduler._dhtmlx_confirm(e, scheduler.locale.labels.title_confirm_closing, function () {
        scheduler.editStop(scheduler.config.positive_closing);
      }), e && (this._drag_id = this._drag_pos = this._drag_mode = null);
    }
  }, scheduler._correct_shift = function (e, t) {
    return e -= 6e4 * (new Date(scheduler._min_date).getTimezoneOffset() - new Date(e).getTimezoneOffset()) * (t ? -1 : 1);
  }, scheduler._is_pos_changed = function (e, t) {
    function i(e, t, i) {
      return !!(Math.abs(e - t) > i);
    }

    if (!e || !this._drag_pos) return !0;
    var r = 100,
        s = 5;
    return !!(this._drag_pos.has_moved || !this._drag_pos.timestamp || t.timestamp - this._drag_pos.timestamp > r || i(e.ev.clientX, t.ev.clientX, s) || i(e.ev.clientY, t.ev.clientY, s));
  }, scheduler._correct_drag_start_date = function (e) {
    var t;
    scheduler.matrix && (t = scheduler.matrix[scheduler._mode]), t = t || {
      x_step: 1,
      x_unit: "day"
    }, e = new Date(e);
    var i = 1;
    return (t._start_correction || t._end_correction) && (i = 60 * (t.last_hour || 0) - (60 * e.getHours() + e.getMinutes()) || 1), 1 * e + (scheduler._get_fictional_event_length(e, i, t) - i);
  }, scheduler._correct_drag_end_date = function (e, t) {
    var i;
    scheduler.matrix && (i = scheduler.matrix[scheduler._mode]), i = i || {
      x_step: 1,
      x_unit: "day"
    };

    var r = 1 * e + scheduler._get_fictional_event_length(e, t, i);

    return new Date(1 * r - (scheduler._get_fictional_event_length(r, -1, i, -1) + 1));
  }, scheduler._on_mouse_move = function (e) {
    if (this._drag_mode) {
      var t = this._mouse_coords(e);

      if (this._is_pos_changed(this._drag_pos, t)) {
        var i, r;
        if (this._edit_id != this._drag_id && this._close_not_saved(), !this._drag_mode) return;
        var s = null;

        if (this._drag_pos && !this._drag_pos.has_moved && (s = this._drag_pos, s.has_moved = !0), this._drag_pos = t, this._drag_pos.has_moved = !0, "create" == this._drag_mode) {
          if (s && (t = s), this._close_not_saved(), this.unselect(this._select_id), this._loading = !0, i = this._get_date_from_pos(t).valueOf(), !this._drag_start) {
            var a = this.callEvent("onBeforeEventCreated", [e, this._drag_id]);
            return a ? (this._loading = !1, void (this._drag_start = i)) : void (this._loading = !1);
          }

          r = i, r == this._drag_start;
          var n = new Date(this._drag_start),
              d = new Date(r);
          "day" != this._mode && "week" != this._mode || n.getHours() != d.getHours() || n.getMinutes() != d.getMinutes() || (d = new Date(this._drag_start + 1e3)), this._drag_id = this.uid(), this.addEvent(n, d, this.locale.labels.new_event, this._drag_id, t.fields), this.callEvent("onEventCreated", [this._drag_id, e]), this._loading = !1, this._drag_mode = "new-size";
        }

        var l,
            o = this.getEvent(this._drag_id);
        if (scheduler.matrix && (l = scheduler.matrix[scheduler._mode]), l = l || {
          x_step: 1,
          x_unit: "day"
        }, "move" == this._drag_mode) i = this._min_date.valueOf() + 6e4 * (t.y * this.config.time_step + 24 * t.x * 60 - (scheduler._move_pos_shift || 0)), !t.custom && this._table_view && (i += 1e3 * this.date.time_part(o.start_date)), i = this._correct_shift(i), t._ignores && this.config.preserve_length && this._table_view ? (i = scheduler._correct_drag_start_date(i), r = scheduler._correct_drag_end_date(i, this._drag_event._event_length)) : r = o.end_date.valueOf() - (o.start_date.valueOf() - i);else {
          if (i = o.start_date.valueOf(), r = o.end_date.valueOf(), this._table_view) {
            var h = this._min_date.valueOf() + t.y * this.config.time_step * 6e4 + (t.custom ? 0 : 864e5);

            if ("month" == this._mode) {
              if (h = this._correct_shift(h, !1), this._drag_from_start) {
                var _ = 864e5;
                h <= scheduler.date.date_part(new Date(r + _ - 1)).valueOf() && (i = h - _);
              } else r = h;
            } else this.config.preserve_length ? t.resize_from_start ? i = scheduler._correct_drag_start_date(h) : r = scheduler._correct_drag_end_date(h, 0) : t.resize_from_start ? i = h : r = h;
          } else {
            var c = this.date.date_part(new Date(o.end_date.valueOf() - 1)).valueOf(),
                u = new Date(c);
            r = c + t.y * this.config.time_step * 6e4, r += 6e4 * (new Date(r).getTimezoneOffset() - u.getTimezoneOffset()), this._els.dhx_cal_data[0].style.cursor = "s-resize", ("week" == this._mode || "day" == this._mode) && (r = this._correct_shift(r));
          }

          if ("new-size" == this._drag_mode) {
            if (r <= this._drag_start) {
              var g = t.shift || (this._table_view && !t.custom ? 864e5 : 0);
              i = r - (t.shift ? 0 : g), r = this._drag_start + (g || 6e4 * this.config.time_step);
            } else i = this._drag_start;
          } else i >= r && (r = i + 6e4 * this.config.time_step);
        }
        var f = new Date(r - 1),
            v = new Date(i);

        if ("move" == this._drag_mode && scheduler.config.limit_drag_out && (+v < +scheduler._min_date || +r > +scheduler._max_date)) {
          if (+o.start_date < +scheduler._min_date || +o.end_date > +scheduler._max_date) v = new Date(o.start_date), r = new Date(o.end_date);else {
            var m = r - v;
            +v < +scheduler._min_date ? (v = new Date(scheduler._min_date), t._ignores && this.config.preserve_length && this._table_view ? (v = new Date(scheduler._correct_drag_start_date(v)), l._start_correction && (v = new Date(v.valueOf() + l._start_correction)), r = new Date(1 * v + this._get_fictional_event_length(v, this._drag_event._event_length, l))) : r = new Date(+v + m)) : (r = new Date(scheduler._max_date), t._ignores && this.config.preserve_length && this._table_view ? (l._end_correction && (r = new Date(r.valueOf() - l._end_correction)), r = new Date(1 * r - this._get_fictional_event_length(r, 0, l, !0)), v = new Date(1 * r - this._get_fictional_event_length(r, this._drag_event._event_length, l, !0)), this._ignores_detected && (v = scheduler.date.add(v, l.x_step, l.x_unit), r = new Date(1 * r - this._get_fictional_event_length(r, 0, l, !0)), r = scheduler.date.add(r, l.x_step, l.x_unit))) : v = new Date(+r - m));
          }
          var f = new Date(r - 1);
        }

        if (!this._table_view && !scheduler.config.all_timed && (!scheduler._get_section_view() && t.x != this._get_event_sday({
          start_date: new Date(r),
          end_date: new Date(r)
        }) || new Date(r).getHours() >= this.config.last_hour)) {
          var m = r - v,
              _ = this._min_date.valueOf() + 24 * t.x * 60 * 6e4;

          r = scheduler.date.date_part(new Date(_)), r.setHours(this.config.last_hour), f = new Date(r - 1), "move" == this._drag_mode && (v = new Date(+r - m));
        }

        if (this._table_view || f.getDate() == v.getDate() && f.getHours() < this.config.last_hour || scheduler._allow_dnd) if (o.start_date = v, o.end_date = new Date(r), this.config.update_render) {
          var p = scheduler._els.dhx_cal_data[0].scrollTop;
          this.update_view(), scheduler._els.dhx_cal_data[0].scrollTop = p;
        } else this.updateEvent(this._drag_id);
        this._table_view && this.for_rendered(this._drag_id, function (e) {
          e.className += " dhx_in_move dhx_cal_event_drag";
        }), this.callEvent("onEventDrag", [this._drag_id, this._drag_mode, e]);
      }
    } else if (scheduler.checkEvent("onMouseMove")) {
      var x = this._locate_event(e.target || e.srcElement);

      this.callEvent("onMouseMove", [x, e]);
    }
  }, scheduler._on_mouse_down = function (e, t) {
    if (2 != e.button && !this.config.readonly && !this._drag_mode) {
      t = t || e.target || e.srcElement;

      var i = scheduler._getClassName(t).split(" ")[0];

      switch (i) {
        case "dhx_cal_event_line":
        case "dhx_cal_event_clear":
          this._table_view && (this._drag_mode = "move");
          break;

        case "dhx_event_move":
        case "dhx_wa_ev_body":
          this._drag_mode = "move";
          break;

        case "dhx_event_resize":
          this._drag_mode = "resize";

          var r = scheduler._getClassName(t);

          r.indexOf("dhx_event_resize_end") < 0 ? scheduler._drag_from_start = !0 : scheduler._drag_from_start = !1;
          break;

        case "dhx_scale_holder":
        case "dhx_scale_holder_now":
        case "dhx_month_body":
        case "dhx_matrix_cell":
        case "dhx_marked_timespan":
          this._drag_mode = "create";
          break;

        case "":
          if (t.parentNode) return scheduler._on_mouse_down(e, t.parentNode);
          break;

        default:
          if ((!scheduler.checkEvent("onMouseDown") || scheduler.callEvent("onMouseDown", [i, e])) && t.parentNode && t != this && "dhx_body" != i) return scheduler._on_mouse_down(e, t.parentNode);
          this._drag_mode = null, this._drag_id = null;
      }

      if (this._drag_mode) {
        var s = this._locate_event(t);

        if (this.config["drag_" + this._drag_mode] && this.callEvent("onBeforeDrag", [s, this._drag_mode, e])) {
          if (this._drag_id = s, (this._edit_id != this._drag_id || this._edit_id && "create" == this._drag_mode) && this._close_not_saved(), !this._drag_mode) return;
          this._drag_event = scheduler._lame_clone(this.getEvent(this._drag_id) || {}), this._drag_pos = this._mouse_coords(e);
        } else this._drag_mode = this._drag_id = 0;
      }

      this._drag_start = null;
    }
  }, scheduler._get_private_properties = function (e) {
    var t = {};

    for (var i in e) {
      0 === i.indexOf("_") && (t[i] = !0);
    }

    return t;
  }, scheduler._clear_temporary_properties = function (e, t) {
    var i = this._get_private_properties(e),
        r = this._get_private_properties(t);

    for (var s in r) {
      i[s] || delete t[s];
    }
  }, scheduler._on_mouse_up = function (e) {
    if (!e || 2 != e.button || !this._mobile) {
      if (this._drag_mode && this._drag_id) {
        this._els.dhx_cal_data[0].style.cursor = "default";
        var t = this._drag_id,
            i = this._drag_mode,
            r = !this._drag_pos || this._drag_pos.has_moved,
            s = this.getEvent(this._drag_id);

        if (r && (this._drag_event._dhx_changed || !this._drag_event.start_date || s.start_date.valueOf() != this._drag_event.start_date.valueOf() || s.end_date.valueOf() != this._drag_event.end_date.valueOf())) {
          var a = "new-size" == this._drag_mode;

          if (this.callEvent("onBeforeEventChanged", [s, e, a, this._drag_event])) {
            if (this._drag_id = this._drag_mode = null, a && this.config.edit_on_create) {
              if (this.unselect(), this._new_event = new Date(), this._table_view || this.config.details_on_create || !this.config.select || !this.isOneDayEvent(this.getEvent(t))) return scheduler.callEvent("onDragEnd", [t, i, e]), this.showLightbox(t);
              this._drag_pos = !0, this._select_id = this._edit_id = t;
            } else this._new_event || this.callEvent(a ? "onEventAdded" : "onEventChanged", [t, this.getEvent(t)]);
          } else a ? this.deleteEvent(s.id, !0) : (this._drag_event._dhx_changed = !1, this._clear_temporary_properties(s, this._drag_event), scheduler._lame_copy(s, this._drag_event), this.updateEvent(s.id));
        }

        this._drag_pos && (this._drag_pos.has_moved || this._drag_pos === !0) && (this._drag_id = this._drag_mode = null, this.render_view_data()), scheduler.callEvent("onDragEnd", [t, i, e]);
      }

      this._drag_id = null, this._drag_mode = null, this._drag_pos = null;
    }
  }, scheduler._trigger_dyn_loading = function () {
    return this._load_mode && this._load() ? (this._render_wait = !0, !0) : !1;
  }, scheduler.update_view = function () {
    this._reset_ignores();

    var e = this[this._mode + "_view"];
    return e ? e(!0) : this._reset_scale(), this._trigger_dyn_loading() ? !0 : void this.render_view_data();
  }, scheduler.isViewExists = function (e) {
    return !!(scheduler[e + "_view"] || scheduler.date[e + "_start"] && scheduler.templates[e + "_date"] && scheduler.templates[e + "_scale_date"]);
  }, scheduler._set_aria_buttons_attrs = function () {
    for (var e = ["dhx_cal_next_button", "dhx_cal_prev_button", "dhx_cal_tab", "dhx_cal_today_button"], t = 0; t < e.length; t++) {
      for (var i = this._els[e[t]], r = 0; i && r < i.length; r++) {
        var s = i[r].getAttribute("name"),
            a = this.locale.labels[e[t]];
        s && (a = this.locale.labels[s] || a), "dhx_cal_next_button" == e[t] ? a = this.locale.labels.next : "dhx_cal_prev_button" == e[t] && (a = this.locale.labels.prev), this._waiAria.headerButtonsAttributes(i[r], a || "");
      }
    }
  }, scheduler.updateView = function (e, t) {
    e = e || this._date, t = t || this._mode;
    var i = "dhx_cal_data",
        r = this._obj,
        s = "dhx_scheduler_" + this._mode,
        a = "dhx_scheduler_" + t;
    this._mode && -1 != r.className.indexOf(s) ? r.className = r.className.replace(s, a) : r.className += " " + a;
    var n,
        d = "dhx_multi_day",
        l = this._mode == t && this.config.preserve_scroll ? this._els[i][0].scrollTop : !1;
    this._els[d] && this._els[d][0] && (n = this._els[d][0].scrollTop), this[this._mode + "_view"] && t && this._mode != t && this[this._mode + "_view"](!1), this._close_not_saved(), this._els[d] && (this._els[d][0].parentNode.removeChild(this._els[d][0]), this._els[d] = null), this._mode = t, this._date = e, this._table_view = "month" == this._mode, this._dy_shift = 0, this._set_aria_buttons_attrs();
    var o = this._els.dhx_cal_tab;
    if (o) for (var h = 0; h < o.length; h++) {
      var _ = o[h],
          c = _.className;
      c = c.replace(/ active/g, ""), _.getAttribute("name") == this._mode + "_tab" ? (c += " active", this._waiAria.headerToggleState(_, !0)) : this._waiAria.headerToggleState(_, !1), _.className = c;
    }
    this.update_view(), "number" == typeof l && (this._els[i][0].scrollTop = l), "number" == typeof n && this._els[d] && this._els[d][0] && (this._els[d][0].scrollTop = n);
  }, scheduler.setCurrentView = function (e, t) {
    this.callEvent("onBeforeViewChange", [this._mode, this._date, t || this._mode, e || this._date]) && (this.updateView(e, t), this.callEvent("onViewChange", [this._mode, this._date]));
  }, scheduler._render_x_header = function (e, t, i, r, s) {
    s = s || 0;
    var a = document.createElement("div");
    a.className = "dhx_scale_bar", this.templates[this._mode + "_scalex_class"] && (a.className += " " + this.templates[this._mode + "_scalex_class"](i));
    var n = this._cols[e] - 1;
    "month" == this._mode && 0 === e && this.config.left_border && (a.className += " dhx_scale_bar_border", t += 1), this.set_xy(a, n, this.xy.scale_height - 2, t, s);
    var d = this.templates[this._mode + "_scale_date"](i, this._mode);
    a.innerHTML = d, this._waiAria.dayHeaderAttr(a, d), r.appendChild(a);
  }, scheduler._get_columns_num = function (e, t) {
    var i = 7;

    if (!scheduler._table_view) {
      var r = scheduler.date["get_" + scheduler._mode + "_end"];
      r && (t = r(e)), i = Math.round((t.valueOf() - e.valueOf()) / 864e5);
    }

    return i;
  }, scheduler._get_timeunit_start = function () {
    return this.date[this._mode + "_start"](new Date(this._date.valueOf()));
  }, scheduler._get_view_end = function () {
    var e = this._get_timeunit_start(),
        t = scheduler.date.add(e, 1, this._mode);

    if (!scheduler._table_view) {
      var i = scheduler.date["get_" + scheduler._mode + "_end"];
      i && (t = i(e));
    }

    return t;
  }, scheduler._calc_scale_sizes = function (e, t, i) {
    var r = e,
        s = this._get_columns_num(t, i);

    this._process_ignores(t, s, "day", 1);

    for (var a = s - this._ignores_detected, n = 0; s > n; n++) {
      this._ignores[n] ? (this._cols[n] = 0, a++) : this._cols[n] = Math.floor(r / (a - n)), r -= this._cols[n], this._colsS[n] = (this._cols[n - 1] || 0) + (this._colsS[n - 1] || (this._table_view ? 0 : this.xy.scale_width + 2));
    }

    this._colsS.col_length = s, this._colsS[s] = this._cols[s - 1] + this._colsS[s - 1] || 0;
  }, scheduler._set_scale_col_size = function (e, t, i) {
    var r = this.config;
    this.set_xy(e, t - 1, r.hour_size_px * (r.last_hour - r.first_hour), i + this.xy.scale_width + 1, 0);
  }, scheduler._render_scales = function (e, t) {
    var i = new Date(scheduler._min_date),
        r = new Date(scheduler._max_date),
        s = this.date.date_part(scheduler._currentDate()),
        a = parseInt(e.style.width, 10),
        n = new Date(this._min_date),
        d = this._get_columns_num(i, r);

    this._calc_scale_sizes(a, i, r);

    var l = 0;
    e.innerHTML = "";

    for (var o = 0; d > o; o++) {
      if (this._ignores[o] || this._render_x_header(o, l, n, e), !this._table_view) {
        var h = document.createElement("div"),
            _ = "dhx_scale_holder";
        n.valueOf() == s.valueOf() && (_ = "dhx_scale_holder_now"), this._ignores_detected && this._ignores[o] && (_ += " dhx_scale_ignore"), h.className = _ + " " + this.templates.week_date_class(n, s), this._waiAria.dayColumnAttr(h, n), this._set_scale_col_size(h, this._cols[o], l), t.appendChild(h), this.callEvent("onScaleAdd", [h, n]);
      }

      l += this._cols[o], n = this.date.add(n, 1, "day"), n = this.date.day_start(n);
    }
  }, scheduler._reset_scale = function () {
    if (this.templates[this._mode + "_date"]) {
      var e = this._els.dhx_cal_header[0],
          t = this._els.dhx_cal_data[0],
          i = this.config;
      e.innerHTML = "", t.innerHTML = "";
      var r = (i.readonly || !i.drag_resize ? " dhx_resize_denied" : "") + (i.readonly || !i.drag_move ? " dhx_move_denied" : "");
      t.className = "dhx_cal_data" + r, this._scales = {}, this._cols = [], this._colsS = {
        height: 0
      }, this._dy_shift = 0, this.set_sizes();

      var s,
          a,
          n = this._get_timeunit_start(),
          d = scheduler._get_view_end();

      s = a = this._table_view ? scheduler.date.week_start(n) : n, this._min_date = s;
      var l = this.templates[this._mode + "_date"](n, d, this._mode);
      if (this._els.dhx_cal_date[0].innerHTML = l, this._waiAria.navBarDateAttr(this._els.dhx_cal_date[0], l), this._max_date = d, scheduler._render_scales(e, t), this._table_view) this._reset_month_scale(t, n, a);else if (this._reset_hours_scale(t, n, a), i.multi_day) {
        var o = "dhx_multi_day";
        this._els[o] && (this._els[o][0].parentNode.removeChild(this._els[o][0]), this._els[o] = null);

        var h = this._els.dhx_cal_navline[0],
            _ = h.offsetHeight + this._els.dhx_cal_header[0].offsetHeight + 1,
            c = document.createElement("div");

        c.className = o, c.style.visibility = "hidden", this.set_xy(c, Math.max(this._colsS[this._colsS.col_length] + this.xy.scroll_width - 2, 0), 0, 0, _), t.parentNode.insertBefore(c, t);
        var u = c.cloneNode(!0);
        u.className = o + "_icon", u.style.visibility = "hidden", this.set_xy(u, this.xy.scale_width, 0, 0, _), c.appendChild(u), this._els[o] = [c, u], this._els[o][0].onclick = this._click.dhx_cal_data;
      }
    }
  }, scheduler._reset_hours_scale = function (e, t, i) {
    var r = document.createElement("div");
    r.className = "dhx_scale_holder";

    for (var s = new Date(1980, 1, 1, this.config.first_hour, 0, 0), a = 1 * this.config.first_hour; a < this.config.last_hour; a++) {
      var n = document.createElement("div");
      n.className = "dhx_scale_hour", n.style.height = this.config.hour_size_px + "px";
      var d = this.xy.scale_width;
      this.config.left_border && (n.className += " dhx_scale_hour_border"), n.style.width = d + "px";
      var l = scheduler.templates.hour_scale(s);
      n.innerHTML = l, this._waiAria.hourScaleAttr(n, l), r.appendChild(n), s = this.date.add(s, 1, "hour");
    }

    e.appendChild(r), this.config.scroll_hour && (e.scrollTop = this.config.hour_size_px * (this.config.scroll_hour - this.config.first_hour));
  }, scheduler._currentDate = function () {
    return scheduler.config.now_date ? new Date(scheduler.config.now_date) : new Date();
  }, scheduler._reset_ignores = function () {
    this._ignores = {}, this._ignores_detected = 0;
  }, scheduler._process_ignores = function (e, t, i, r, s) {
    this._reset_ignores();

    var a = scheduler["ignore_" + this._mode];
    if (a) for (var n = new Date(e), d = 0; t > d; d++) {
      a(n) && (this._ignores_detected += 1, this._ignores[d] = !0, s && t++), n = scheduler.date.add(n, r, i), scheduler.date[i + "_start"] && (n = scheduler.date[i + "_start"](n));
    }
  }, scheduler._render_month_scale = function (e, t, i, r) {
    function s(e) {
      var t = scheduler._colsS.height;
      return void 0 !== scheduler._colsS.heights[e + 1] && (t = scheduler._colsS.heights[e + 1] - (scheduler._colsS.heights[e] || 0)), t;
    }

    var a = scheduler.date.add(t, 1, "month"),
        n = new Date(i),
        d = scheduler._currentDate();

    this.date.date_part(d), this.date.date_part(i), r = r || Math.ceil(Math.round((a.valueOf() - i.valueOf()) / 864e5) / 7);

    for (var l = [], o = 0; 7 >= o; o++) {
      var h = (this._cols[o] || 0) - 1;
      0 === o && this.config.left_border && (h -= 1), l[o] = h + "px";
    }

    var _ = 0,
        c = document.createElement("table");
    c.setAttribute("cellpadding", "0"), c.setAttribute("cellspacing", "0");
    var u = document.createElement("tbody");
    c.appendChild(u);

    for (var g = [], o = 0; r > o; o++) {
      var f = document.createElement("tr");
      u.appendChild(f);

      for (var v = Math.max(s(o) - scheduler.xy.month_head_height, 0), m = 0; 7 > m; m++) {
        var p = document.createElement("td");
        f.appendChild(p);
        var x = "";
        t > i ? x = "dhx_before" : i >= a ? x = "dhx_after" : i.valueOf() == d.valueOf() && (x = "dhx_now"), this._ignores_detected && this._ignores[m] && (x += " dhx_scale_ignore"), p.className = x + " " + this.templates.month_date_class(i, d);
        var b = "dhx_month_body",
            y = "dhx_month_head";
        if (0 === m && this.config.left_border && (b += " dhx_month_body_border", y += " dhx_month_head_border"), this._ignores_detected && this._ignores[m]) p.appendChild(document.createElement("div")), p.appendChild(document.createElement("div"));else {
          this._waiAria.monthCellAttr(p, i);

          var w = document.createElement("div");
          w.className = y, w.innerHTML = this.templates.month_day(i), p.appendChild(w);
          var D = document.createElement("div");
          D.className = b, D.style.height = v + "px", D.style.width = l[m], p.appendChild(D);
        }
        g.push(i);
        var E = i.getDate();
        i = this.date.add(i, 1, "day"), i.getDate() - E > 1 && (i = new Date(i.getFullYear(), i.getMonth(), E + 1, 12, 0));
      }

      scheduler._colsS.heights[o] = _, _ += s(o);
    }

    this._min_date = n, this._max_date = i, e.innerHTML = "", e.appendChild(c), this._scales = {};

    for (var A = e.getElementsByTagName("div"), o = 0; o < g.length; o++) {
      var e = A[2 * o + 1],
          S = g[o];
      this._scales[+S] = e;
    }

    for (var o = 0; o < g.length; o++) {
      var S = g[o];
      this.callEvent("onScaleAdd", [this._scales[+S], S]);
    }

    return this._max_date;
  }, scheduler._reset_month_scale = function (e, t, i, r) {
    var s = scheduler.date.add(t, 1, "month"),
        a = scheduler._currentDate();

    this.date.date_part(a), this.date.date_part(i), r = r || Math.ceil(Math.round((s.valueOf() - i.valueOf()) / 864e5) / 7);
    var n = Math.floor(e.clientHeight / r) - this.xy.month_head_height;
    return this._colsS.height = n + this.xy.month_head_height, this._colsS.heights = [], scheduler._render_month_scale(e, t, i, r);
  }, scheduler.getLabel = function (e, t) {
    for (var i = this.config.lightbox.sections, r = 0; r < i.length; r++) {
      if (i[r].map_to == e) for (var s = i[r].options, a = 0; a < s.length; a++) {
        if (s[a].key == t) return s[a].label;
      }
    }

    return "";
  }, scheduler.updateCollection = function (e, t) {
    var i = scheduler.serverList(e);
    return i ? (i.splice(0, i.length), i.push.apply(i, t || []), scheduler.callEvent("onOptionsLoad", []), scheduler.resetLightbox(), !0) : !1;
  }, scheduler._lame_clone = function (e, t) {
    var i, r, s;

    for (t = t || [], i = 0; i < t.length; i += 2) {
      if (e === t[i]) return t[i + 1];
    }

    if (e && "object" == _typeof(e)) {
      for (s = {}, r = [Array, Date, Number, String, Boolean], i = 0; i < r.length; i++) {
        e instanceof r[i] && (s = i ? new r[i](e) : new r[i]());
      }

      t.push(e, s);

      for (i in e) {
        Object.prototype.hasOwnProperty.apply(e, [i]) && (s[i] = scheduler._lame_clone(e[i], t));
      }
    }

    return s || e;
  }, scheduler._lame_copy = function (e, t) {
    for (var i in t) {
      t.hasOwnProperty(i) && (e[i] = t[i]);
    }

    return e;
  }, scheduler._get_date_from_pos = function (e) {
    var t = this._min_date.valueOf() + 6e4 * (e.y * this.config.time_step + 24 * (this._table_view ? 0 : e.x) * 60);
    return new Date(this._correct_shift(t));
  }, scheduler.getActionData = function (e) {
    var t = this._mouse_coords(e);

    return {
      date: this._get_date_from_pos(t),
      section: t.section
    };
  }, scheduler._focus = function (e, t) {
    if (e && e.focus) if (this._mobile) window.setTimeout(function () {
      e.focus();
    }, 10);else try {
      t && e.select && e.offsetWidth && e.select(), e.focus();
    } catch (i) {}
  }, scheduler._get_real_event_length = function (e, t, i) {
    var r,
        s = t - e,
        a = i._start_correction + i._end_correction || 0,
        n = this["ignore_" + this._mode],
        d = 0;
    i.render ? (d = this._get_date_index(i, e), r = this._get_date_index(i, t)) : r = Math.round(s / 60 / 60 / 1e3 / 24);

    for (var l = !0; r > d;) {
      var o = scheduler.date.add(t, -i.x_step, i.x_unit);
      n && n(t) && (!l || l && n(o)) ? s -= t - o : (l = !1, s -= a), t = o, r--;
    }

    return s;
  }, scheduler._get_fictional_event_length = function (e, t, i, r) {
    var s = new Date(e),
        a = r ? -1 : 1;

    if (i._start_correction || i._end_correction) {
      var n;
      n = r ? 60 * s.getHours() + s.getMinutes() - 60 * (i.first_hour || 0) : 60 * (i.last_hour || 0) - (60 * s.getHours() + s.getMinutes());
      var d = 60 * (i.last_hour - i.first_hour),
          l = Math.ceil((t / 6e4 - n) / d);
      0 > l && (l = 0), t += l * (1440 - d) * 60 * 1e3;
    }

    var o,
        h = new Date(1 * e + t * a),
        _ = this["ignore_" + this._mode],
        c = 0;

    for (i.render ? (c = this._get_date_index(i, s), o = this._get_date_index(i, h)) : o = Math.round(t / 60 / 60 / 1e3 / 24); o * a >= c * a;) {
      var u = scheduler.date.add(s, i.x_step * a, i.x_unit);
      _ && _(s) && (t += (u - s) * a, o += a), s = u, c += a;
    }

    return t;
  }, scheduler._get_section_view = function () {
    return this.matrix && this.matrix[this._mode] ? this.matrix[this._mode] : this._props && this._props[this._mode] ? this._props[this._mode] : null;
  }, scheduler._get_section_property = function () {
    return this.matrix && this.matrix[this._mode] ? this.matrix[this._mode].y_property : this._props && this._props[this._mode] ? this._props[this._mode].map_to : null;
  }, scheduler._is_initialized = function () {
    var e = this.getState();
    return this._obj && e.date && e.mode;
  }, scheduler._is_lightbox_open = function () {
    var e = this.getState();
    return null !== e.lightbox_id && void 0 !== e.lightbox_id;
  }, scheduler._getClassName = function (e) {
    if (!e) return "";
    var t = e.className || "";
    return t.baseVal && (t = t.baseVal), t.indexOf || (t = ""), t || "";
  }, scheduler.event = window.dhtmlxEvent, scheduler.eventRemove = function (e, t, i) {
    e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent && e.detachEvent("on" + t, i);
  }, function () {
    function e(e) {
      var t = !1,
          i = !1;

      if (window.getComputedStyle) {
        var r = window.getComputedStyle(e, null);
        t = r.display, i = r.visibility;
      } else e.currentStyle && (t = e.currentStyle.display, i = e.currentStyle.visibility);

      var s = !1,
          a = scheduler._locate_css({
        target: e
      }, "dhx_form_repeat", !1);

      return a && (s = !("0px" != a.style.height)), s = s || !e.offsetHeight, "none" != t && "hidden" != i && !s;
    }

    function t(e) {
      return !isNaN(e.getAttribute("tabindex")) && 1 * e.getAttribute("tabindex") >= 0;
    }

    function i(e) {
      var t = {
        a: !0,
        area: !0
      };
      return t[e.nodeName.loLowerCase()] ? !!e.getAttribute("href") : !0;
    }

    function r(e) {
      var t = {
        input: !0,
        select: !0,
        textarea: !0,
        button: !0,
        object: !0
      };
      return t[e.nodeName.toLowerCase()] ? !e.hasAttribute("disabled") : !0;
    }

    scheduler._getFocusableNodes = function (s) {
      for (var a = s.querySelectorAll(["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"].join(", ")), n = Array.prototype.slice.call(a, 0), d = 0; d < n.length; d++) {
        var l = n[d],
            o = (t(l) || r(l) || i(l)) && e(l);
        o || (n.splice(d, 1), d--);
      }

      return n;
    };
  }(), scheduler._trim = function (e) {
    var t = String.prototype.trim || function () {
      return this.replace(/^\s+|\s+$/g, "");
    };

    return t.apply(e);
  }, scheduler._isDate = function (e) {
    return e && "object" == _typeof(e) ? !!(e.getFullYear && e.getMonth && e.getDate) : !1;
  }, scheduler._isObject = function (e) {
    return e && "object" == _typeof(e);
  }, function () {
    function e(e) {
      return (e + "").replace(r, " ").replace(s, " ");
    }

    function t(e) {
      return (e + "").replace(a, "&#39;");
    }

    function i() {
      return !scheduler.config.wai_aria_attributes;
    }

    var r = new RegExp("<(?:.|\n)*?>", "gm"),
        s = new RegExp(" +", "gm"),
        a = new RegExp("'", "gm");
    scheduler._waiAria = {
      getAttributeString: function getAttributeString(i) {
        var r = [" "];

        for (var s in i) {
          if ("function" != typeof i[s] && "object" != _typeof(i[s])) {
            var a = t(e(i[s]));
            r.push(s + "='" + a + "'");
          }
        }

        return r.push(" "), r.join(" ");
      },
      setAttributes: function setAttributes(t, i) {
        for (var r in i) {
          t.setAttribute(r, e(i[r]));
        }

        return t;
      },
      labelAttr: function labelAttr(e, t) {
        return this.setAttributes(e, {
          "aria-label": t
        });
      },
      label: function label(e) {
        return scheduler._waiAria.getAttributeString({
          "aria-label": e
        });
      },
      hourScaleAttr: function hourScaleAttr(e, t) {
        this.labelAttr(e, t);
      },
      monthCellAttr: function monthCellAttr(e, t) {
        this.labelAttr(e, scheduler.templates.day_date(t));
      },
      navBarDateAttr: function navBarDateAttr(e, t) {
        this.labelAttr(e, t);
      },
      dayHeaderAttr: function dayHeaderAttr(e, t) {
        this.labelAttr(e, t);
      },
      dayColumnAttr: function dayColumnAttr(e, t) {
        this.dayHeaderAttr(e, scheduler.templates.day_date(t));
      },
      headerButtonsAttributes: function headerButtonsAttributes(e, t) {
        return this.setAttributes(e, {
          role: "button",
          "aria-label": t
        });
      },
      headerToggleState: function headerToggleState(e, t) {
        return this.setAttributes(e, {
          "aria-pressed": t ? "true" : "false"
        });
      },
      getHeaderCellAttr: function getHeaderCellAttr(e) {
        return scheduler._waiAria.getAttributeString({
          "aria-label": e
        });
      },
      eventAttr: function eventAttr(e, t) {
        this._eventCommonAttr(e, t);
      },
      _eventCommonAttr: function _eventCommonAttr(t, i) {
        i.setAttribute("aria-label", e(scheduler.templates.tooltip_text(t.start_date, t.end_date, t))), scheduler.config.readonly && i.setAttribute("aria-readonly", !0), t.$dataprocessor_class && i.setAttribute("aria-busy", !0), i.setAttribute("aria-selected", scheduler.getState().select_id == t.id ? "true" : "false");
      },
      setEventBarAttr: function setEventBarAttr(e, t) {
        this._eventCommonAttr(e, t);
      },
      _getAttributes: function _getAttributes(e, t) {
        var i = {
          setAttribute: function setAttribute(e, t) {
            this[e] = t;
          }
        };
        return e.apply(this, [t, i]), i;
      },
      eventBarAttrString: function eventBarAttrString(e) {
        return this.getAttributeString(this._getAttributes(this.setEventBarAttr, e));
      },
      agendaHeadAttrString: function agendaHeadAttrString() {
        return this.getAttributeString({
          role: "row"
        });
      },
      agendaHeadDateString: function agendaHeadDateString(e) {
        return this.getAttributeString({
          role: "columnheader",
          "aria-label": e
        });
      },
      agendaHeadDescriptionString: function agendaHeadDescriptionString(e) {
        return this.agendaHeadDateString(e);
      },
      agendaDataAttrString: function agendaDataAttrString() {
        return this.getAttributeString({
          role: "grid"
        });
      },
      agendaEventAttrString: function agendaEventAttrString(e) {
        var t = this._getAttributes(this._eventCommonAttr, e);

        return t.role = "row", this.getAttributeString(t);
      },
      agendaDetailsBtnString: function agendaDetailsBtnString() {
        return this.getAttributeString({
          role: "button",
          "aria-label": scheduler.locale.labels.icon_details
        });
      },
      gridAttrString: function gridAttrString() {
        return this.getAttributeString({
          role: "grid"
        });
      },
      gridRowAttrString: function gridRowAttrString(e) {
        return this.agendaEventAttrString(e);
      },
      gridCellAttrString: function gridCellAttrString(e, t, i) {
        return this.getAttributeString({
          role: "gridcell",
          "aria-label": [void 0 === t.label ? t.id : t.label, ": ", i]
        });
      },
      mapAttrString: function mapAttrString() {
        return this.gridAttrString();
      },
      mapRowAttrString: function mapRowAttrString(e) {
        return this.gridRowAttrString(e);
      },
      mapDetailsBtnString: function mapDetailsBtnString() {
        return this.agendaDetailsBtnString();
      },
      minicalHeader: function minicalHeader(e, t) {
        this.setAttributes(e, {
          id: t + "",
          "aria-live": "assertice",
          "aria-atomic": "true"
        });
      },
      minicalGrid: function minicalGrid(e, t) {
        this.setAttributes(e, {
          "aria-labelledby": t + "",
          role: "grid"
        });
      },
      minicalRow: function minicalRow(e) {
        this.setAttributes(e, {
          role: "row"
        });
      },
      minicalDayCell: function minicalDayCell(e, t) {
        var i = t.valueOf() < scheduler._max_date.valueOf() && t.valueOf() >= scheduler._min_date.valueOf();

        this.setAttributes(e, {
          role: "gridcell",
          "aria-label": scheduler.templates.day_date(t),
          "aria-selected": i ? "true" : "false"
        });
      },
      minicalHeadCell: function minicalHeadCell(e) {
        this.setAttributes(e, {
          role: "columnheader"
        });
      },
      weekAgendaDayCell: function weekAgendaDayCell(e, t) {
        var i = e.querySelector(".dhx_wa_scale_bar"),
            r = e.querySelector(".dhx_wa_day_data"),
            s = scheduler.uid() + "";
        this.setAttributes(i, {
          id: s
        }), this.setAttributes(r, {
          "aria-labelledby": s
        });
      },
      weekAgendaEvent: function weekAgendaEvent(e, t) {
        this.eventAttr(t, e);
      },
      lightboxHiddenAttr: function lightboxHiddenAttr(e) {
        e.setAttribute("aria-hidden", "true");
      },
      lightboxVisibleAttr: function lightboxVisibleAttr(e) {
        e.setAttribute("aria-hidden", "false");
      },
      lightboxSectionButtonAttrString: function lightboxSectionButtonAttrString(e) {
        return this.getAttributeString({
          role: "button",
          "aria-label": e,
          tabindex: "0"
        });
      },
      yearHeader: function yearHeader(e, t) {
        this.setAttributes(e, {
          id: t + ""
        });
      },
      yearGrid: function yearGrid(e, t) {
        this.minicalGrid(e, t);
      },
      yearHeadCell: function yearHeadCell(e) {
        return this.minicalHeadCell(e);
      },
      yearRow: function yearRow(e) {
        return this.minicalRow(e);
      },
      yearDayCell: function yearDayCell(e) {
        this.setAttributes(e, {
          role: "gridcell"
        });
      },
      lightboxAttr: function lightboxAttr(e) {
        e.setAttribute("role", "dialog"), e.setAttribute("aria-hidden", "true"), e.firstChild.setAttribute("role", "heading");
      },
      lightboxButtonAttrString: function lightboxButtonAttrString(e) {
        return this.getAttributeString({
          role: "button",
          "aria-label": scheduler.locale.labels[e],
          tabindex: "0"
        });
      },
      eventMenuAttrString: function eventMenuAttrString(e) {
        return this.getAttributeString({
          role: "button",
          "aria-label": scheduler.locale.labels[e]
        });
      },
      lightboxHeader: function lightboxHeader(e, t) {
        e.setAttribute("aria-label", t);
      },
      lightboxSelectAttrString: function lightboxSelectAttrString(e) {
        var t = "";

        switch (e) {
          case "%Y":
            t = scheduler.locale.labels.year;
            break;

          case "%m":
            t = scheduler.locale.labels.month;
            break;

          case "%d":
            t = scheduler.locale.labels.day;
            break;

          case "%H:%i":
            t = scheduler.locale.labels.hour + " " + scheduler.locale.labels.minute;
        }

        return scheduler._waiAria.getAttributeString({
          "aria-label": t
        });
      },
      messageButtonAttrString: function messageButtonAttrString(e) {
        return "tabindex='0' role='button' aria-label='" + e + "'";
      },
      messageInfoAttr: function messageInfoAttr(e) {
        e.setAttribute("role", "alert");
      },
      messageModalAttr: function messageModalAttr(e, t) {
        e.setAttribute("role", "dialog"), t && e.setAttribute("aria-labelledby", t);
      },
      quickInfoAttr: function quickInfoAttr(e) {
        e.setAttribute("role", "dialog");
      },
      quickInfoHeaderAttrString: function quickInfoHeaderAttrString() {
        return " role='heading' ";
      },
      quickInfoHeader: function quickInfoHeader(e, t) {
        e.setAttribute("aria-label", t);
      },
      quickInfoButtonAttrString: function quickInfoButtonAttrString(e) {
        return scheduler._waiAria.getAttributeString({
          role: "button",
          "aria-label": e,
          tabindex: "0"
        });
      },
      tooltipAttr: function tooltipAttr(e) {
        e.setAttribute("role", "tooltip");
      },
      tooltipVisibleAttr: function tooltipVisibleAttr(e) {
        e.setAttribute("aria-hidden", "false");
      },
      tooltipHiddenAttr: function tooltipHiddenAttr(e) {
        e.setAttribute("aria-hidden", "true");
      }
    };

    for (var n in scheduler._waiAria) {
      scheduler._waiAria[n] = function (e) {
        return function () {
          return i() ? " " : e.apply(this, arguments);
        };
      }(scheduler._waiAria[n]);
    }
  }(), scheduler.$domHelpers = {
    getAbsoluteLeft: function getAbsoluteLeft(e) {
      return this.getOffset(e).left;
    },
    getAbsoluteTop: function getAbsoluteTop(e) {
      return this.getOffset(e).top;
    },
    getOffsetSum: function getOffsetSum(e) {
      for (var t = 0, i = 0; e;) {
        t += parseInt(e.offsetTop), i += parseInt(e.offsetLeft), e = e.offsetParent;
      }

      return {
        top: t,
        left: i
      };
    },
    getOffsetRect: function getOffsetRect(e) {
      var t = e.getBoundingClientRect(),
          i = 0,
          r = 0;

      if (/Mobi/.test(navigator.userAgent)) {
        var s = document.createElement("div");
        s.style.position = "absolute", s.style.left = "0px", s.style.top = "0px", s.style.width = "1px", s.style.height = "1px", document.body.appendChild(s);
        var a = s.getBoundingClientRect();
        i = t.top - a.top, r = t.left - a.left, s.parentNode.removeChild(s);
      } else {
        var n = document.body,
            d = document.documentElement,
            l = window.pageYOffset || d.scrollTop || n.scrollTop,
            o = window.pageXOffset || d.scrollLeft || n.scrollLeft,
            h = d.clientTop || n.clientTop || 0,
            _ = d.clientLeft || n.clientLeft || 0;

        i = t.top + l - h, r = t.left + o - _;
      }

      return {
        top: Math.round(i),
        left: Math.round(r)
      };
    },
    getOffset: function getOffset(e) {
      return e.getBoundingClientRect ? this.getOffsetRect(e) : this.getOffsetSum(e);
    }
  }, scheduler.$env = {
    isIE: navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0,
    isIE6: !window.XMLHttpRequest && navigator.userAgent.indexOf("MSIE") >= 0,
    isIE7: navigator.userAgent.indexOf("MSIE 7.0") >= 0 && navigator.userAgent.indexOf("Trident") < 0,
    isIE8: navigator.userAgent.indexOf("MSIE 8.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0,
    isOpera: navigator.userAgent.indexOf("Opera") >= 0,
    isChrome: navigator.userAgent.indexOf("Chrome") >= 0,
    isKHTML: navigator.userAgent.indexOf("Safari") >= 0 || navigator.userAgent.indexOf("Konqueror") >= 0,
    isFF: navigator.userAgent.indexOf("Firefox") >= 0,
    isIPad: navigator.userAgent.search(/iPad/gi) >= 0,
    isEdge: -1 != navigator.userAgent.indexOf("Edge")
  }, scheduler.$ajax = {
    _obj: scheduler,
    cache: !0,
    method: "get",
    parse: function parse(e) {
      if ("string" != typeof e) return e;
      var t;
      return e = e.replace(/^[\s]+/, ""), window.DOMParser && !scheduler.$env.isIE ? t = new window.DOMParser().parseFromString(e, "text/xml") : window.ActiveXObject !== window.undefined && (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)), t;
    },
    xmltop: function xmltop(e, t, i) {
      if ("undefined" == typeof t.status || t.status < 400) {
        var r = t.responseXML ? t.responseXML || t : this.parse(t.responseText || t);
        if (r && null !== r.documentElement && !r.getElementsByTagName("parsererror").length) return r.getElementsByTagName(e)[0];
      }

      return -1 !== i && this._obj.callEvent("onLoadXMLError", ["Incorrect XML", arguments[1], i]), document.createElement("DIV");
    },
    xpath: function xpath(e, t) {
      if (t.nodeName || (t = t.responseXML || t), scheduler.$env.isIE) return t.selectNodes(e) || [];

      for (var i, r = [], s = (t.ownerDocument || t).evaluate(e, t, null, XPathResult.ANY_TYPE, null);;) {
        if (i = s.iterateNext(), !i) break;
        r.push(i);
      }

      return r;
    },
    query: function query(e) {
      this._call(e.method || "GET", e.url, e.data || "", e.async || !0, e.callback, null, e.headers);
    },
    get: function get(e, t) {
      this._call("GET", e, null, !0, t);
    },
    getSync: function getSync(e) {
      return this._call("GET", e, null, !1);
    },
    put: function put(e, t, i) {
      this._call("PUT", e, t, !0, i);
    },
    del: function del(e, t, i) {
      this._call("DELETE", e, t, !0, i);
    },
    post: function post(e, t, i) {
      1 == arguments.length ? t = "" : 2 != arguments.length || "function" != typeof t && "function" != typeof window[t] ? t = String(t) : (i = t, t = ""), this._call("POST", e, t, !0, i);
    },
    postSync: function postSync(e, t) {
      return t = null === t ? "" : String(t), this._call("POST", e, t, !1);
    },
    getLong: function getLong(e, t) {
      this._call("GET", e, null, !0, t, {
        url: e
      });
    },
    postLong: function postLong(e, t, i) {
      2 == arguments.length && (i = t, t = ""), this._call("POST", e, t, !0, i, {
        url: e,
        postData: t
      });
    },
    _call: function _call(e, t, i, r, s, a, n) {
      var d = this._obj,
          l = window.XMLHttpRequest && !d.$env.isIE ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
          o = null !== navigator.userAgent.match(/AppleWebKit/) && null !== navigator.userAgent.match(/Qt/) && null !== navigator.userAgent.match(/Safari/);
      if (r && (l.onreadystatechange = function () {
        if (4 == l.readyState || o && 3 == l.readyState) {
          if ((200 != l.status || "" === l.responseText) && !d.callEvent("onAjaxError", [l])) return;
          window.setTimeout(function () {
            "function" == typeof s && s.apply(window, [{
              xmlDoc: l,
              filePath: t
            }]), a && ("undefined" != typeof a.postData ? this.postLong(a.url, a.postData, s) : this.getLong(a.url, s)), s = null, l = null;
          }, 1);
        }
      }), "GET" != e || this.cache || (t += (t.indexOf("?") >= 0 ? "&" : "?") + "dhxr" + new Date().getTime() + "=1"), l.open(e, t, r), n) for (var h in n) {
        l.setRequestHeader(h, n[h]);
      } else "POST" == e.toUpperCase() || "PUT" == e || "DELETE" == e ? l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") : "GET" == e && (i = null);
      return l.setRequestHeader("X-Requested-With", "XMLHttpRequest"), l.send(i), r ? void 0 : {
        xmlDoc: l,
        filePath: t
      };
    },
    urlSeparator: function urlSeparator(e) {
      return -1 != e.indexOf("?") ? "&" : "?";
    }
  }, scheduler.date = {
    init: function init() {
      for (var e = scheduler.locale.date.month_short, t = scheduler.locale.date.month_short_hash = {}, i = 0; i < e.length; i++) {
        t[e[i]] = i;
      }

      for (var e = scheduler.locale.date.month_full, t = scheduler.locale.date.month_full_hash = {}, i = 0; i < e.length; i++) {
        t[e[i]] = i;
      }
    },
    _bind_host_object: function _bind_host_object(e) {
      return e.bind ? e.bind(scheduler) : function () {
        return e.apply(scheduler, arguments);
      };
    },
    date_part: function date_part(e) {
      var t = new Date(e);
      return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e.getHours() && (e.getDate() < t.getDate() || e.getMonth() < t.getMonth() || e.getFullYear() < t.getFullYear()) && e.setTime(e.getTime() + 36e5 * (24 - e.getHours())), e;
    },
    time_part: function time_part(e) {
      return (e.valueOf() / 1e3 - 60 * e.getTimezoneOffset()) % 86400;
    },
    week_start: function week_start(e) {
      var t = e.getDay();
      return scheduler.config.start_on_monday && (0 === t ? t = 6 : t--), this.date_part(this.add(e, -1 * t, "day"));
    },
    month_start: function month_start(e) {
      return e.setDate(1), this.date_part(e);
    },
    year_start: function year_start(e) {
      return e.setMonth(0), this.month_start(e);
    },
    day_start: function day_start(e) {
      return this.date_part(e);
    },
    _add_days: function _add_days(e, t) {
      var i = new Date(e.valueOf());

      if (i.setDate(i.getDate() + t), t == Math.round(t) && t > 0) {
        var r = +i - +e,
            s = r % 864e5;

        if (s && e.getTimezoneOffset() == i.getTimezoneOffset()) {
          var a = s / 36e5;
          i.setTime(i.getTime() + 60 * (24 - a) * 60 * 1e3);
        }
      }

      return t >= 0 && !e.getHours() && i.getHours() && (i.getDate() < e.getDate() || i.getMonth() < e.getMonth() || i.getFullYear() < e.getFullYear()) && i.setTime(i.getTime() + 36e5 * (24 - i.getHours())), i;
    },
    add: function add(e, t, i) {
      var r = new Date(e.valueOf());

      switch (i) {
        case "day":
          r = scheduler.date._add_days(r, t);
          break;

        case "week":
          r = scheduler.date._add_days(r, 7 * t);
          break;

        case "month":
          r.setMonth(r.getMonth() + t);
          break;

        case "year":
          r.setYear(r.getFullYear() + t);
          break;

        case "hour":
          r.setTime(r.getTime() + 60 * t * 60 * 1e3);
          break;

        case "minute":
          r.setTime(r.getTime() + 60 * t * 1e3);
          break;

        default:
          return scheduler.date["add_" + i](e, t, i);
      }

      return r;
    },
    to_fixed: function to_fixed(e) {
      return 10 > e ? "0" + e : e;
    },
    copy: function copy(e) {
      return new Date(e.valueOf());
    },
    date_to_str: function date_to_str(e, t) {
      e = e.replace(/%[a-zA-Z]/g, function (e) {
        switch (e) {
          case "%d":
            return '"+this.date.to_fixed(date.getDate())+"';

          case "%m":
            return '"+this.date.to_fixed((date.getMonth()+1))+"';

          case "%j":
            return '"+date.getDate()+"';

          case "%n":
            return '"+(date.getMonth()+1)+"';

          case "%y":
            return '"+this.date.to_fixed(date.getFullYear()%100)+"';

          case "%Y":
            return '"+date.getFullYear()+"';

          case "%D":
            return '"+this.locale.date.day_short[date.getDay()]+"';

          case "%l":
            return '"+this.locale.date.day_full[date.getDay()]+"';

          case "%M":
            return '"+this.locale.date.month_short[date.getMonth()]+"';

          case "%F":
            return '"+this.locale.date.month_full[date.getMonth()]+"';

          case "%h":
            return '"+this.date.to_fixed((date.getHours()+11)%12+1)+"';

          case "%g":
            return '"+((date.getHours()+11)%12+1)+"';

          case "%G":
            return '"+date.getHours()+"';

          case "%H":
            return '"+this.date.to_fixed(date.getHours())+"';

          case "%i":
            return '"+this.date.to_fixed(date.getMinutes())+"';

          case "%a":
            return '"+(date.getHours()>11?"pm":"am")+"';

          case "%A":
            return '"+(date.getHours()>11?"PM":"AM")+"';

          case "%s":
            return '"+this.date.to_fixed(date.getSeconds())+"';

          case "%W":
            return '"+this.date.to_fixed(this.date.getISOWeek(date))+"';

          default:
            return e;
        }
      }), t && (e = e.replace(/date\.get/g, "date.getUTC"));
      var i = new Function("date", 'return "' + e + '";');
      return scheduler.date._bind_host_object(i);
    },
    str_to_date: function str_to_date(e, t) {
      for (var i = "var temp=date.match(/[a-zA-Z]+|[0-9]+/g);", r = e.match(/%[a-zA-Z]/g), s = 0; s < r.length; s++) {
        switch (r[s]) {
          case "%j":
          case "%d":
            i += "set[2]=temp[" + s + "]||1;";
            break;

          case "%n":
          case "%m":
            i += "set[1]=(temp[" + s + "]||1)-1;";
            break;

          case "%y":
            i += "set[0]=temp[" + s + "]*1+(temp[" + s + "]>50?1900:2000);";
            break;

          case "%g":
          case "%G":
          case "%h":
          case "%H":
            i += "set[3]=temp[" + s + "]||0;";
            break;

          case "%i":
            i += "set[4]=temp[" + s + "]||0;";
            break;

          case "%Y":
            i += "set[0]=temp[" + s + "]||0;";
            break;

          case "%a":
          case "%A":
            i += "set[3]=set[3]%12+((temp[" + s + "]||'').toLowerCase()=='am'?0:12);";
            break;

          case "%s":
            i += "set[5]=temp[" + s + "]||0;";
            break;

          case "%M":
            i += "set[1]=this.locale.date.month_short_hash[temp[" + s + "]]||0;";
            break;

          case "%F":
            i += "set[1]=this.locale.date.month_full_hash[temp[" + s + "]]||0;";
        }
      }

      var a = "set[0],set[1],set[2],set[3],set[4],set[5]";
      t && (a = " Date.UTC(" + a + ")");
      var n = new Function("date", "var set=[0,0,1,0,0,0]; " + i + " return new Date(" + a + ");");
      return scheduler.date._bind_host_object(n);
    },
    getISOWeek: function getISOWeek(e) {
      if (!e) return !1;
      e = this.date_part(new Date(e));
      var t = e.getDay();
      0 === t && (t = 7);
      var i = new Date(e.valueOf());
      i.setDate(e.getDate() + (4 - t));
      var r = i.getFullYear(),
          s = Math.round((i.getTime() - new Date(r, 0, 1).getTime()) / 864e5),
          a = 1 + Math.floor(s / 7);
      return a;
    },
    getUTCISOWeek: function getUTCISOWeek(e) {
      return this.getISOWeek(this.convert_to_utc(e));
    },
    convert_to_utc: function convert_to_utc(e) {
      return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
    }
  }, scheduler.locale = {
    date: {
      month_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      month_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      day_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      day_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    labels: {
      dhx_cal_today_button: "Today",
      day_tab: "Day",
      week_tab: "Week",
      month_tab: "Month",
      new_event: "New event",
      icon_save: "Save",
      icon_cancel: "Cancel",
      icon_details: "Details",
      icon_edit: "Edit",
      icon_delete: "Delete",
      confirm_closing: "",
      confirm_deleting: "Event will be deleted permanently, are you sure?",
      section_description: "Description",
      section_time: "Time period",
      full_day: "Full day",
      confirm_recurring: "Do you want to edit the whole set of repeated events?",
      section_recurring: "Repeat event",
      button_recurring: "Disabled",
      button_recurring_open: "Enabled",
      button_edit_series: "Edit series",
      button_edit_occurrence: "Edit occurrence",
      agenda_tab: "Agenda",
      date: "Date",
      description: "Description",
      year_tab: "Year",
      week_agenda_tab: "Agenda",
      grid_tab: "Grid",
      drag_to_create: "Drag to create",
      drag_to_move: "Drag to move",
      message_ok: "OK",
      message_cancel: "Cancel",
      next: "Next",
      prev: "Previous",
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      minute: "Minute"
    }
  }, scheduler.config = {
    default_date: "%j %M %Y",
    month_date: "%F %Y",
    load_date: "%Y-%m-%d",
    week_date: "%l",
    day_date: "%D, %F %j",
    hour_date: "%H:%i",
    month_day: "%d",
    xml_date: "%m/%d/%Y %H:%i",
    api_date: "%d-%m-%Y %H:%i",
    preserve_length: !0,
    time_step: 5,
    start_on_monday: 1,
    first_hour: 0,
    last_hour: 24,
    readonly: !1,
    drag_resize: 1,
    drag_move: 1,
    drag_create: 1,
    dblclick_create: 1,
    edit_on_create: 1,
    details_on_create: 0,
    resize_month_events: !1,
    resize_month_timed: !1,
    cascade_event_display: !1,
    cascade_event_count: 4,
    cascade_event_margin: 30,
    multi_day: !0,
    multi_day_height_limit: 0,
    drag_lightbox: !0,
    preserve_scroll: !0,
    select: !0,
    server_utc: !1,
    touch: !0,
    touch_tip: !0,
    touch_drag: 500,
    quick_info_detached: !0,
    positive_closing: !1,
    drag_highlight: !0,
    limit_drag_out: !1,
    icons_edit: ["icon_save", "icon_cancel"],
    icons_select: ["icon_details", "icon_edit", "icon_delete"],
    buttons_left: ["dhx_save_btn", "dhx_cancel_btn"],
    buttons_right: ["dhx_delete_btn"],
    lightbox: {
      sections: [{
        name: "description",
        map_to: "text",
        type: "textarea",
        focus: !0
      }, {
        name: "time",
        height: 72,
        type: "time",
        map_to: "auto"
      }]
    },
    highlight_displayed_event: !0,
    left_border: !1,
    ajax_error: "alert",
    delay_render: 0,
    timeline_swap_resize: !0,
    wai_aria_attributes: !0,
    wai_aria_application_role: !0
  }, scheduler.config.buttons_left.$inital = scheduler.config.buttons_left.join(), scheduler.config.buttons_right.$inital = scheduler.config.buttons_right.join(), scheduler.templates = {}, scheduler.init_templates = function () {
    var e = scheduler.locale.labels;
    e.dhx_save_btn = e.icon_save, e.dhx_cancel_btn = e.icon_cancel, e.dhx_delete_btn = e.icon_delete;

    var t = scheduler.date.date_to_str,
        i = scheduler.config,
        r = function r(e, t) {
      for (var i in t) {
        e[i] || (e[i] = t[i]);
      }
    };

    r(scheduler.templates, {
      day_date: t(i.default_date),
      month_date: t(i.month_date),
      week_date: function week_date(e, t) {
        return scheduler.templates.day_date(e) + " &ndash; " + scheduler.templates.day_date(scheduler.date.add(t, -1, "day"));
      },
      day_scale_date: t(i.default_date),
      month_scale_date: t(i.week_date),
      week_scale_date: t(i.day_date),
      hour_scale: t(i.hour_date),
      time_picker: t(i.hour_date),
      event_date: t(i.hour_date),
      month_day: t(i.month_day),
      xml_date: scheduler.date.str_to_date(i.xml_date, i.server_utc),
      load_format: t(i.load_date),
      xml_format: t(i.xml_date, i.server_utc),
      api_date: scheduler.date.str_to_date(i.api_date),
      event_header: function event_header(e, t, i) {
        return scheduler.templates.event_date(e) + " - " + scheduler.templates.event_date(t);
      },
      event_text: function event_text(e, t, i) {
        return i.text;
      },
      event_class: function event_class(e, t, i) {
        return "";
      },
      month_date_class: function month_date_class(e) {
        return "";
      },
      week_date_class: function week_date_class(e) {
        return "";
      },
      event_bar_date: function event_bar_date(e, t, i) {
        return scheduler.templates.event_date(e) + " ";
      },
      event_bar_text: function event_bar_text(e, t, i) {
        return i.text;
      },
      month_events_link: function month_events_link(e, t) {
        return "<a>View more(" + t + " events)</a>";
      },
      drag_marker_class: function drag_marker_class(e, t, i) {
        return "";
      },
      drag_marker_content: function drag_marker_content(e, t, i) {
        return "";
      },
      tooltip_date_format: scheduler.date.date_to_str("%Y-%m-%d %H:%i"),
      tooltip_text: function tooltip_text(e, t, i) {
        return "<b>Event:</b> " + i.text + "<br/><b>Start date:</b> " + scheduler.templates.tooltip_date_format(e) + "<br/><b>End date:</b> " + scheduler.templates.tooltip_date_format(t);
      }
    }), this.callEvent("onTemplatesReady", []);
  }, scheduler.uid = function () {
    return this._seed || (this._seed = new Date().valueOf()), this._seed++;
  }, scheduler._events = {}, scheduler.clearAll = function () {
    this._events = {}, this._loaded = {}, this._edit_id = null, this._select_id = null, this._drag_id = null, this._drag_mode = null, this._drag_pos = null, this.clear_view(), this.callEvent("onClearAll", []);
  }, scheduler.addEvent = function (e, t, i, r, s) {
    if (!arguments.length) return this.addEventNow();
    var a = e;
    1 != arguments.length && (a = s || {}, a.start_date = e, a.end_date = t, a.text = i, a.id = r), a.id = a.id || scheduler.uid(), a.text = a.text || "", "string" == typeof a.start_date && (a.start_date = this.templates.api_date(a.start_date)), "string" == typeof a.end_date && (a.end_date = this.templates.api_date(a.end_date));
    var n = 6e4 * (this.config.event_duration || this.config.time_step);
    a.start_date.valueOf() == a.end_date.valueOf() && a.end_date.setTime(a.end_date.valueOf() + n), a._timed = this.isOneDayEvent(a);
    var d = !this._events[a.id];
    return this._events[a.id] = a, this.event_updated(a), this._loading || this.callEvent(d ? "onEventAdded" : "onEventChanged", [a.id, a]), a.id;
  }, scheduler.deleteEvent = function (e, t) {
    var i = this._events[e];
    (t || this.callEvent("onBeforeEventDelete", [e, i]) && this.callEvent("onConfirmedBeforeEventDelete", [e, i])) && (i && (this._select_id = null, delete this._events[e], this.event_updated(i), this._drag_id == i.id && (this._drag_id = null, this._drag_mode = null, this._drag_pos = null)), this.callEvent("onEventDeleted", [e, i]));
  }, scheduler.getEvent = function (e) {
    return this._events[e];
  }, scheduler.setEvent = function (e, t) {
    t.id || (t.id = e), this._events[e] = t;
  }, scheduler.for_rendered = function (e, t) {
    for (var i = this._rendered.length - 1; i >= 0; i--) {
      this._rendered[i].getAttribute("event_id") == e && t(this._rendered[i], i);
    }
  }, scheduler.changeEventId = function (e, t) {
    if (e != t) {
      var i = this._events[e];
      i && (i.id = t, this._events[t] = i, delete this._events[e]), this.for_rendered(e, function (e) {
        e.setAttribute("event_id", t);
      }), this._select_id == e && (this._select_id = t), this._edit_id == e && (this._edit_id = t), this.callEvent("onEventIdChange", [e, t]);
    }
  }, function () {
    for (var e = ["text", "Text", "start_date", "StartDate", "end_date", "EndDate"], t = function t(e) {
      return function (t) {
        return scheduler.getEvent(t)[e];
      };
    }, i = function i(e) {
      return function (t, i) {
        var r = scheduler.getEvent(t);
        r[e] = i, r._changed = !0, r._timed = this.isOneDayEvent(r), scheduler.event_updated(r, !0);
      };
    }, r = 0; r < e.length; r += 2) {
      scheduler["getEvent" + e[r + 1]] = t(e[r]), scheduler["setEvent" + e[r + 1]] = i(e[r]);
    }
  }(), scheduler.event_updated = function (e, t) {
    this.is_visible_events(e) ? this.render_view_data() : this.clear_event(e.id);
  }, scheduler.is_visible_events = function (e) {
    var t = e.start_date.valueOf() < this._max_date.valueOf() && this._min_date.valueOf() < e.end_date.valueOf();

    if (t) {
      var i = e.start_date.getHours(),
          r = e.end_date.getHours() + e.end_date.getMinutes() / 60,
          s = this.config.last_hour,
          a = this.config.first_hour,
          n = this._table_view || !((r > s || a > r) && (i >= s || a > i));
      if (n) return !0;
      var d = (e.end_date.valueOf() - e.start_date.valueOf()) / 36e5,
          l = 24 - (this.config.last_hour - this.config.first_hour);
      return !!(d > l || s > i && r >= a);
    }

    return !1;
  }, scheduler.isOneDayEvent = function (e) {
    var t = e.end_date.getDate() - e.start_date.getDate();
    return t ? (0 > t && (t = Math.ceil((e.end_date.valueOf() - e.start_date.valueOf()) / 864e5)), 1 == t && !e.end_date.getHours() && !e.end_date.getMinutes() && (e.start_date.getHours() || e.start_date.getMinutes())) : e.start_date.getMonth() == e.end_date.getMonth() && e.start_date.getFullYear() == e.end_date.getFullYear();
  }, scheduler.get_visible_events = function (e) {
    var t = [];

    for (var i in this._events) {
      this.is_visible_events(this._events[i]) && (!e || this._events[i]._timed) && this.filter_event(i, this._events[i]) && t.push(this._events[i]);
    }

    return t;
  }, scheduler.filter_event = function (e, t) {
    var i = this["filter_" + this._mode];
    return i ? i(e, t) : !0;
  }, scheduler._is_main_area_event = function (e) {
    return !!e._timed;
  }, scheduler.render_view_data = function (e, t) {
    var i = !1;

    if (!e) {
      if (i = !0, this._not_render) return void (this._render_wait = !0);
      this._render_wait = !1, this.clear_view(), e = this.get_visible_events(!(this._table_view || this.config.multi_day));
    }

    for (var r = 0, s = e.length; s > r; r++) {
      this._recalculate_timed(e[r]);
    }

    if (this.config.multi_day && !this._table_view) {
      for (var a = [], n = [], r = 0; r < e.length; r++) {
        this._is_main_area_event(e[r]) ? a.push(e[r]) : n.push(e[r]);
      }

      this._rendered_location = this._els.dhx_multi_day[0], this._table_view = !0, this.render_data(n, t), this._table_view = !1, this._rendered_location = this._els.dhx_cal_data[0], this._table_view = !1, this.render_data(a, t);
    } else this._rendered_location = this._els.dhx_cal_data[0], this.render_data(e, t);

    i && this.callEvent("onDataRender", []);
  }, scheduler._view_month_day = function (e) {
    var t = scheduler.getActionData(e).date;
    scheduler.callEvent("onViewMoreClick", [t]) && scheduler.setCurrentView(t, "day");
  }, scheduler._render_month_link = function (e) {
    for (var t = this._rendered_location, i = this._lame_clone(e), r = e._sday; r < e._eday; r++) {
      i._sday = r, i._eday = r + 1;
      var s = scheduler.date,
          a = scheduler._min_date;
      a = s.add(a, i._sweek, "week"), a = s.add(a, i._sday, "day");

      var n = scheduler.getEvents(a, s.add(a, 1, "day")).length,
          d = this._get_event_bar_pos(i),
          l = d.x2 - d.x,
          o = document.createElement("div");

      o.onclick = function (e) {
        scheduler._view_month_day(e || event);
      }, o.className = "dhx_month_link", o.style.top = d.y + "px", o.style.left = d.x + "px", o.style.width = l + "px", o.innerHTML = scheduler.templates.month_events_link(a, n), this._rendered.push(o), t.appendChild(o);
    }
  }, scheduler._recalculate_timed = function (e) {
    if (e) {
      var t;
      t = "object" != _typeof(e) ? this._events[e] : e, t && (t._timed = scheduler.isOneDayEvent(t));
    }
  }, scheduler.attachEvent("onEventChanged", scheduler._recalculate_timed), scheduler.attachEvent("onEventAdded", scheduler._recalculate_timed), scheduler.render_data = function (e, t) {
    e = this._pre_render_events(e, t);

    for (var i = 0; i < e.length; i++) {
      if (this._table_view) {
        if ("month" != scheduler._mode) this.render_event_bar(e[i]);else {
          var r = scheduler.config.max_month_events;
          r !== 1 * r || e[i]._sorder < r ? this.render_event_bar(e[i]) : void 0 !== r && e[i]._sorder == r && scheduler._render_month_link(e[i]);
        }
      } else this.render_event(e[i]);
    }
  }, scheduler._get_first_visible_cell = function (e) {
    for (var t = 0; t < e.length; t++) {
      if (-1 == (e[t].className || "").indexOf("dhx_scale_ignore")) return e[t];
    }

    return e[0];
  }, scheduler._pre_render_events = function (e, t) {
    var i = this.xy.bar_height,
        r = this._colsS.heights,
        s = this._colsS.heights = [0, 0, 0, 0, 0, 0, 0],
        a = this._els.dhx_cal_data[0];
    if (e = this._table_view ? this._pre_render_events_table(e, t) : this._pre_render_events_line(e, t), this._table_view) if (t) this._colsS.heights = r;else {
      var n = a.firstChild;

      if (n.rows) {
        for (var d = 0; d < n.rows.length; d++) {
          s[d]++;
          var l = n.rows[d].cells,
              o = this._colsS.height - this.xy.month_head_height;

          if (s[d] * i > o) {
            var h = o;
            1 * this.config.max_month_events !== this.config.max_month_events || s[d] <= this.config.max_month_events ? h = s[d] * i : (this.config.max_month_events + 1) * i > o && (h = (this.config.max_month_events + 1) * i);

            for (var _ = 0; _ < l.length; _++) {
              l[_].childNodes[1].style.height = h + "px";
            }
          }

          s[d] = (s[d - 1] || 0) + scheduler._get_first_visible_cell(l).offsetHeight;
        }

        if (s.unshift(0), n.parentNode.offsetHeight < n.parentNode.scrollHeight && !scheduler._colsS.scroll_fix && scheduler.xy.scroll_width) {
          var c = scheduler._colsS,
              u = c[c.col_length],
              g = c.heights.slice();
          u -= scheduler.xy.scroll_width || 0, this._calc_scale_sizes(u, this._min_date, this._max_date), scheduler._colsS.heights = g, this.set_xy(this._els.dhx_cal_header[0], u, this.xy.scale_height), scheduler._render_scales(this._els.dhx_cal_header[0]), scheduler._render_month_scale(this._els.dhx_cal_data[0], this._get_timeunit_start(), this._min_date), c.scroll_fix = !0;
        }
      } else if (e.length || "visible" != this._els.dhx_multi_day[0].style.visibility || (s[0] = -1), e.length || -1 == s[0]) {
        var f = (n.parentNode.childNodes, (s[0] + 1) * i + 1),
            v = f,
            m = f + "px";
        this.config.multi_day_height_limit && (v = Math.min(f, this.config.multi_day_height_limit), m = v + "px"), a.style.top = this._els.dhx_cal_navline[0].offsetHeight + this._els.dhx_cal_header[0].offsetHeight + v + "px", a.style.height = this._obj.offsetHeight - parseInt(a.style.top, 10) - (this.xy.margin_top || 0) + "px";
        var p = this._els.dhx_multi_day[0];
        p.style.height = m, p.style.visibility = -1 == s[0] ? "hidden" : "visible";
        var x = this._els.dhx_multi_day[1];
        x.style.height = m, x.style.visibility = -1 == s[0] ? "hidden" : "visible", x.className = s[0] ? "dhx_multi_day_icon" : "dhx_multi_day_icon_small", this._dy_shift = (s[0] + 1) * i, this.config.multi_day_height_limit && (this._dy_shift = Math.min(this.config.multi_day_height_limit, this._dy_shift)), s[0] = 0, v != f && (a.style.top = parseInt(a.style.top) + 2 + "px", p.style.overflowY = "auto", x.style.position = "fixed", x.style.top = "", x.style.left = "");
      }
    }
    return e;
  }, scheduler._get_event_sday = function (e) {
    var t = this.date.day_start(new Date(e.start_date));
    return Math.round((t.valueOf() - this._min_date.valueOf()) / 864e5);
  }, scheduler._get_event_mapped_end_date = function (e) {
    var t = e.end_date;

    if (this.config.separate_short_events) {
      var i = (e.end_date - e.start_date) / 6e4;
      i < this._min_mapped_duration && (t = this.date.add(t, this._min_mapped_duration - i, "minute"));
    }

    return t;
  }, scheduler._pre_render_events_line = function (e, t) {
    e.sort(function (e, t) {
      return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1;
    });
    var i = [],
        r = [];
    this._min_mapped_duration = Math.ceil(60 * this.xy.min_event_height / this.config.hour_size_px);

    for (var s = 0; s < e.length; s++) {
      var a = e[s],
          n = a.start_date,
          d = a.end_date,
          l = n.getHours(),
          o = d.getHours();
      if (a._sday = this._get_event_sday(a), this._ignores[a._sday]) e.splice(s, 1), s--;else {
        if (i[a._sday] || (i[a._sday] = []), !t) {
          a._inner = !1;

          for (var h = i[a._sday]; h.length;) {
            var _ = h[h.length - 1],
                c = this._get_event_mapped_end_date(_);

            if (!(c.valueOf() <= a.start_date.valueOf())) break;
            h.splice(h.length - 1, 1);
          }

          for (var u = h.length, g = !1, f = 0; f < h.length; f++) {
            var _ = h[f],
                c = this._get_event_mapped_end_date(_);

            if (c.valueOf() <= a.start_date.valueOf()) {
              g = !0, a._sorder = _._sorder, u = f, a._inner = !0;
              break;
            }
          }

          if (h.length && (h[h.length - 1]._inner = !0), !g) if (h.length) {
            if (h.length <= h[h.length - 1]._sorder) {
              if (h[h.length - 1]._sorder) for (f = 0; f < h.length; f++) {
                for (var v = !1, m = 0; m < h.length; m++) {
                  if (h[m]._sorder == f) {
                    v = !0;
                    break;
                  }
                }

                if (!v) {
                  a._sorder = f;
                  break;
                }
              } else a._sorder = 0;
              a._inner = !0;
            } else {
              var p = h[0]._sorder;

              for (f = 1; f < h.length; f++) {
                h[f]._sorder > p && (p = h[f]._sorder);
              }

              a._sorder = p + 1, a._inner = !1;
            }
          } else a._sorder = 0;
          h.splice(u, u == h.length ? 0 : 1, a), h.length > (h.max_count || 0) ? (h.max_count = h.length, a._count = h.length) : a._count = a._count ? a._count : 1;
        }

        (l < this.config.first_hour || o >= this.config.last_hour) && (r.push(a), e[s] = a = this._copy_event(a), l < this.config.first_hour && (a.start_date.setHours(this.config.first_hour), a.start_date.setMinutes(0)), o >= this.config.last_hour && (a.end_date.setMinutes(0), a.end_date.setHours(this.config.last_hour)), a.start_date > a.end_date || l == this.config.last_hour) && (e.splice(s, 1), s--);
      }
    }

    if (!t) {
      for (var s = 0; s < e.length; s++) {
        e[s]._count = i[e[s]._sday].max_count;
      }

      for (var s = 0; s < r.length; s++) {
        r[s]._count = i[r[s]._sday].max_count;
      }
    }

    return e;
  }, scheduler._time_order = function (e) {
    e.sort(function (e, t) {
      return e.start_date.valueOf() == t.start_date.valueOf() ? e._timed && !t._timed ? 1 : !e._timed && t._timed ? -1 : e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1;
    });
  }, scheduler._pre_render_events_table = function (e, t) {
    this._time_order(e);

    for (var i, r = [], s = [[], [], [], [], [], [], []], a = this._colsS.heights, n = this._cols.length, d = {}, l = 0; l < e.length; l++) {
      var o = e[l],
          h = o.id;
      d[h] || (d[h] = {
        first_chunk: !0,
        last_chunk: !0
      });
      var _ = d[h],
          c = i || o.start_date,
          u = o.end_date;
      c < this._min_date && (_.first_chunk = !1, c = this._min_date), u > this._max_date && (_.last_chunk = !1, u = this._max_date);
      var g = this.locate_holder_day(c, !1, o);

      if (o._sday = g % n, !this._ignores[o._sday] || !o._timed) {
        var f = this.locate_holder_day(u, !0, o) || n;
        o._eday = f % n || n, o._length = f - g, o._sweek = Math.floor((this._correct_shift(c.valueOf(), 1) - this._min_date.valueOf()) / (864e5 * n));
        var v,
            m = s[o._sweek];

        for (v = 0; v < m.length && !(m[v]._eday <= o._sday); v++) {
          ;
        }

        if (o._sorder && t || (o._sorder = v), o._sday + o._length <= n) i = null, r.push(o), m[v] = o, a[o._sweek] = m.length - 1, o._first_chunk = _.first_chunk, o._last_chunk = _.last_chunk;else {
          var p = this._copy_event(o);

          p.id = o.id, p._length = n - o._sday, p._eday = n, p._sday = o._sday, p._sweek = o._sweek, p._sorder = o._sorder, p.end_date = this.date.add(c, p._length, "day"), p._first_chunk = _.first_chunk, _.first_chunk && (_.first_chunk = !1), r.push(p), m[v] = p, i = p.end_date, a[o._sweek] = m.length - 1, l--;
        }
      }
    }

    return r;
  }, scheduler._copy_dummy = function () {
    var e = new Date(this.start_date),
        t = new Date(this.end_date);
    this.start_date = e, this.end_date = t;
  }, scheduler._copy_event = function (e) {
    return this._copy_dummy.prototype = e, new this._copy_dummy();
  }, scheduler._rendered = [], scheduler.clear_view = function () {
    for (var e = 0; e < this._rendered.length; e++) {
      var t = this._rendered[e];
      t.parentNode && t.parentNode.removeChild(t);
    }

    this._rendered = [];
  }, scheduler.updateEvent = function (e) {
    var t = this.getEvent(e);
    this.clear_event(e), t && this.is_visible_events(t) && this.filter_event(e, t) && (this._table_view || this.config.multi_day || t._timed) && (this.config.update_render ? this.render_view_data() : "month" != this.getState().mode || this.getState().drag_id || this.isOneDayEvent(t) ? this.render_view_data([t], !0) : this.render_view_data());
  }, scheduler.clear_event = function (e) {
    this.for_rendered(e, function (e, t) {
      e.parentNode && e.parentNode.removeChild(e), scheduler._rendered.splice(t, 1);
    });
  }, scheduler._y_from_date = function (e) {
    var t = 60 * e.getHours() + e.getMinutes();
    return Math.round((60 * t * 1e3 - 60 * this.config.first_hour * 60 * 1e3) * this.config.hour_size_px / 36e5) % (24 * this.config.hour_size_px);
  }, scheduler._calc_event_y = function (e, t) {
    t = t || 0;

    var i = 60 * e.start_date.getHours() + e.start_date.getMinutes(),
        r = 60 * e.end_date.getHours() + e.end_date.getMinutes() || 60 * scheduler.config.last_hour,
        s = this._y_from_date(e.start_date),
        a = Math.max(t, (r - i) * this.config.hour_size_px / 60);

    return {
      top: s,
      height: a
    };
  }, scheduler.render_event = function (e) {
    var t = scheduler.xy.menu_width,
        i = this.config.use_select_menu_space ? 0 : t;

    if (!(e._sday < 0)) {
      var r = scheduler.locate_holder(e._sday);

      if (r) {
        var s = this._calc_event_y(e, scheduler.xy.min_event_height),
            a = s.top,
            n = s.height,
            d = e._count || 1,
            l = e._sorder || 0,
            o = Math.floor((r.clientWidth - i) / d),
            h = l * o + 1;

        if (e._inner || (o *= d - l), this.config.cascade_event_display) {
          var _ = this.config.cascade_event_count,
              c = this.config.cascade_event_margin;
          h = l % _ * c;
          var u = e._inner ? (d - l - 1) % _ * c / 2 : 0;
          o = Math.floor(r.clientWidth - i - h - u);
        }

        var g = this._render_v_bar(e, i + h, a, o, n, e._text_style, scheduler.templates.event_header(e.start_date, e.end_date, e), scheduler.templates.event_text(e.start_date, e.end_date, e));

        if (this._waiAria.eventAttr(e, g), this._rendered.push(g), r.appendChild(g), h = h + parseInt(r.style.left, 10) + i, this._edit_id == e.id) {
          g.style.zIndex = 1, o = Math.max(o - 4, scheduler.xy.editor_width), g = document.createElement("div"), g.setAttribute("event_id", e.id), this._waiAria.eventAttr(e, g), this.set_xy(g, o, n - 20, h, a + (scheduler.xy.event_header_height || 14)), g.className = "dhx_cal_event dhx_cal_editor", e.color && (g.style.backgroundColor = e.color);
          var f = scheduler.templates.event_class(e.start_date, e.end_date, e);
          f && (g.className += " " + f);
          var v = document.createElement("div");
          this.set_xy(v, o - 6, n - 26), v.style.cssText += ";margin:2px 2px 2px 2px;overflow:hidden;", g.appendChild(v), this._els.dhx_cal_data[0].appendChild(g), this._rendered.push(g), v.innerHTML = "<textarea class='dhx_cal_editor'>" + e.text + "</textarea>", this._quirks7 && (v.firstChild.style.height = n - 12 + "px"), this._editor = v.firstChild, this._editor.onkeydown = function (e) {
            if ((e || event).shiftKey) return !0;
            var t = (e || event).keyCode;
            t == scheduler.keys.edit_save && scheduler.editStop(!0), t == scheduler.keys.edit_cancel && scheduler.editStop(!1), (t == scheduler.keys.edit_save || t == scheduler.keys.edit_cancel) && e.preventDefault && e.preventDefault();
          }, this._editor.onselectstart = function (e) {
            return (e || event).cancelBubble = !0, !0;
          }, scheduler._focus(v.firstChild, !0), this._els.dhx_cal_data[0].scrollLeft = 0;
        }

        if (0 !== this.xy.menu_width && this._select_id == e.id) {
          this.config.cascade_event_display && this._drag_mode && (g.style.zIndex = 1);

          for (var m, p = this.config["icons_" + (this._edit_id == e.id ? "edit" : "select")], x = "", b = e.color ? "background-color: " + e.color + ";" : "", y = e.textColor ? "color: " + e.textColor + ";" : "", w = 0; w < p.length; w++) {
            m = this._waiAria.eventMenuAttrString(p[w]), x += "<div class='dhx_menu_icon " + p[w] + "' style='" + b + y + "' title='" + this.locale.labels[p[w]] + "'" + m + "></div>";
          }

          var D = this._render_v_bar(e, h - t + 1, a, t, 20 * p.length + 26 - 2, "", "<div style='" + b + y + "' class='dhx_menu_head'></div>", x, !0);

          D.style.left = h - t + 1, this._els.dhx_cal_data[0].appendChild(D), this._rendered.push(D);
        }

        this.config.drag_highlight && this._drag_id == e.id && this.highlightEventPosition(e);
      }
    }
  }, scheduler._render_v_bar = function (e, t, i, r, s, a, n, d, l) {
    var o = document.createElement("div"),
        h = e.id,
        _ = l ? "dhx_cal_event dhx_cal_select_menu" : "dhx_cal_event",
        c = scheduler.getState();

    c.drag_id == e.id && (_ += " dhx_cal_event_drag"), c.select_id == e.id && (_ += " dhx_cal_event_selected");
    var u = scheduler.templates.event_class(e.start_date, e.end_date, e);
    u && (_ = _ + " " + u), this.config.cascade_event_display && (_ += " dhx_cal_event_cascade");

    var g = e.color ? "background-color:" + e.color + ";" : "",
        f = e.textColor ? "color:" + e.textColor + ";" : "",
        v = scheduler._border_box_bvents(),
        m = r - 2,
        p = v ? m : r - 4,
        x = v ? m : r - 6,
        b = v ? m : r - (this._quirks ? 4 : 14),
        y = v ? m - 2 : r - 8,
        w = v ? s - this.xy.event_header_height - 1 : s - (this._quirks ? 20 : 30) + 1,
        D = '<div event_id="' + h + '" class="' + _ + '" style="position:absolute; top:' + i + "px; left:" + t + "px; width:" + p + "px; height:" + s + "px;" + (a || "") + '"></div>';

    o.innerHTML = D;
    var E = o.cloneNode(!0).firstChild;
    if (!l && scheduler.renderEvent(E, e, r, s, n, d)) return E;
    E = o.firstChild;
    var A = '<div class="dhx_event_move dhx_header" style=" width:' + x + "px;" + g + '" >&nbsp;</div>';
    A += '<div class="dhx_event_move dhx_title" style="' + g + f + '">' + n + "</div>", A += '<div class="dhx_body" style=" width:' + b + "px; height:" + w + "px;" + g + f + '">' + d + "</div>";
    var S = "dhx_event_resize dhx_footer";
    return l && (S = "dhx_resize_denied " + S), A += '<div class="' + S + '" style=" width:' + y + "px;" + (l ? " margin-top:-1px;" : "") + g + f + '" ></div>', E.innerHTML = A, E;
  }, scheduler.renderEvent = function () {
    return !1;
  }, scheduler.locate_holder = function (e) {
    return "day" == this._mode ? this._els.dhx_cal_data[0].firstChild : this._els.dhx_cal_data[0].childNodes[e];
  }, scheduler.locate_holder_day = function (e, t) {
    var i = Math.floor((this._correct_shift(e, 1) - this._min_date) / 864e5);
    return t && this.date.time_part(e) && i++, i;
  }, scheduler._get_dnd_order = function (e, t, i) {
    if (!this._drag_event) return e;
    this._drag_event._orig_sorder ? e = this._drag_event._orig_sorder : this._drag_event._orig_sorder = e;

    for (var r = t * e; r + t > i;) {
      e--, r -= t;
    }

    return e = Math.max(e, 0);
  }, scheduler._get_event_bar_pos = function (e) {
    var t = this._colsS[e._sday],
        i = this._colsS[e._eday];
    i == t && (i = this._colsS[e._eday + 1]);
    var r = this.xy.bar_height,
        s = e._sorder;

    if (e.id == this._drag_id) {
      var a = this._colsS.heights[e._sweek + 1] - this._colsS.heights[e._sweek] - this.xy.month_head_height;
      s = scheduler._get_dnd_order(s, r, a);
    }

    var n = s * r,
        d = this._colsS.heights[e._sweek] + (this._colsS.height ? this.xy.month_scale_height + 2 : 2) + n;
    return {
      x: t,
      x2: i,
      y: d
    };
  }, scheduler.render_event_bar = function (e) {
    var t = this._rendered_location,
        i = this._get_event_bar_pos(e),
        r = i.y,
        s = i.x,
        a = i.x2,
        n = "";

    if (a) {
      var d = scheduler.config.resize_month_events && "month" == this._mode && (!e._timed || scheduler.config.resize_month_timed),
          l = document.createElement("div"),
          o = e.hasOwnProperty("_first_chunk") && e._first_chunk,
          h = e.hasOwnProperty("_last_chunk") && e._last_chunk,
          _ = d && (e._timed || o),
          c = d && (e._timed || h),
          u = "dhx_cal_event_clear";

      (!e._timed || d) && (u = "dhx_cal_event_line"), o && (u += " dhx_cal_event_line_start"), h && (u += " dhx_cal_event_line_end"), _ && (n += "<div class='dhx_event_resize dhx_event_resize_start'></div>"), c && (n += "<div class='dhx_event_resize dhx_event_resize_end'></div>");
      var g = scheduler.templates.event_class(e.start_date, e.end_date, e);
      g && (u += " " + g);
      var f = e.color ? "background:" + e.color + ";" : "",
          v = e.textColor ? "color:" + e.textColor + ";" : "",
          m = ["position:absolute", "top:" + r + "px", "left:" + s + "px", "width:" + (a - s - 15) + "px", v, f, e._text_style || ""].join(";"),
          p = "<div event_id='" + e.id + "' class='" + u + "' style='" + m + "'" + this._waiAria.eventBarAttrString(e) + ">";
      d && (p += n), "month" == scheduler.getState().mode && (e = scheduler.getEvent(e.id)), e._timed && (p += scheduler.templates.event_bar_date(e.start_date, e.end_date, e)), p += scheduler.templates.event_bar_text(e.start_date, e.end_date, e) + "</div>", p += "</div>", l.innerHTML = p, this._rendered.push(l.firstChild), t.appendChild(l.firstChild);
    }
  }, scheduler._locate_event = function (e) {
    for (var t = null; e && !t && e.getAttribute;) {
      t = e.getAttribute("event_id"), e = e.parentNode;
    }

    return t;
  }, scheduler._locate_css = function (e, t, i) {
    void 0 === i && (i = !0);

    for (var r = e.target || e.srcElement, s = ""; r;) {
      if (s = scheduler._getClassName(r)) {
        var a = s.indexOf(t);

        if (a >= 0) {
          if (!i) return r;
          var n = 0 === a || !scheduler._trim(s.charAt(a - 1)),
              d = a + t.length >= s.length || !scheduler._trim(s.charAt(a + t.length));
          if (n && d) return r;
        }
      }

      r = r.parentNode;
    }

    return null;
  }, scheduler.edit = function (e) {
    this._edit_id != e && (this.editStop(!1, e), this._edit_id = e, this.updateEvent(e));
  }, scheduler.editStop = function (e, t) {
    if (!t || this._edit_id != t) {
      var i = this.getEvent(this._edit_id);
      i && (e && (i.text = this._editor.value), this._edit_id = null, this._editor = null, this.updateEvent(i.id), this._edit_stop_event(i, e));
    }
  }, scheduler._edit_stop_event = function (e, t) {
    this._new_event ? (t ? this.callEvent("onEventAdded", [e.id, e]) : e && this.deleteEvent(e.id, !0), this._new_event = null) : t && this.callEvent("onEventChanged", [e.id, e]);
  }, scheduler.getEvents = function (e, t) {
    var i = [];

    for (var r in this._events) {
      var s = this._events[r];
      s && (!e && !t || s.start_date < t && s.end_date > e) && i.push(s);
    }

    return i;
  }, scheduler.getRenderedEvent = function (e) {
    if (e) {
      for (var t = scheduler._rendered, i = 0; i < t.length; i++) {
        var r = t[i];
        if (r.getAttribute("event_id") == e) return r;
      }

      return null;
    }
  }, scheduler.showEvent = function (e, t) {
    var i = "number" == typeof e || "string" == typeof e ? scheduler.getEvent(e) : e;

    if (t = t || scheduler._mode, i && (!this.checkEvent("onBeforeEventDisplay") || this.callEvent("onBeforeEventDisplay", [i, t]))) {
      var r = scheduler.config.scroll_hour;
      scheduler.config.scroll_hour = i.start_date.getHours();
      var s = scheduler.config.preserve_scroll;
      scheduler.config.preserve_scroll = !1;
      var a = i.color,
          n = i.textColor;

      if (scheduler.config.highlight_displayed_event && (i.color = scheduler.config.displayed_event_color, i.textColor = scheduler.config.displayed_event_text_color), scheduler.setCurrentView(new Date(i.start_date), t), i.color = a, i.textColor = n, scheduler.config.scroll_hour = r, scheduler.config.preserve_scroll = s, scheduler.matrix && scheduler.matrix[t]) {
        var d = scheduler.getRenderedEvent(i.id);
        d && (scheduler._els.dhx_cal_data[0].scrollTop = scheduler.$domHelpers.getAbsoluteTop(d) - scheduler.$domHelpers.getAbsoluteTop(scheduler._els.dhx_cal_data[0]) - 20);
      }

      scheduler.callEvent("onAfterEventDisplay", [i, t]);
    }
  }, scheduler._append_drag_marker = function (e) {
    if (!e.parentNode) {
      var t = scheduler._els.dhx_cal_data[0],
          i = t.lastChild,
          r = scheduler._getClassName(i);

      r.indexOf("dhx_scale_holder") < 0 && i.previousSibling && (i = i.previousSibling), r = scheduler._getClassName(i), i && 0 === r.indexOf("dhx_scale_holder") && i.appendChild(e);
    }
  }, scheduler._update_marker_position = function (e, t) {
    var i = scheduler._calc_event_y(t, 0);

    e.style.top = i.top + "px", e.style.height = i.height + "px";
  }, scheduler.highlightEventPosition = function (e) {
    var t = document.createElement("div");
    t.setAttribute("event_id", e.id), this._rendered.push(t), this._update_marker_position(t, e);
    var i = this.templates.drag_marker_class(e.start_date, e.end_date, e),
        r = this.templates.drag_marker_content(e.start_date, e.end_date, e);
    t.className = "dhx_drag_marker", i && (t.className += " " + i), r && (t.innerHTML = r), this._append_drag_marker(t);
  }, scheduler._loaded = {}, scheduler._load = function (e, t) {
    if (e = e || this._load_url) {
      e += (-1 == e.indexOf("?") ? "?" : "&") + "timeshift=" + new Date().getTimezoneOffset(), this.config.prevent_cache && (e += "&uid=" + this.uid());
      var i;

      if (t = t || this._date, this._load_mode) {
        var r = this.templates.load_format;

        for (t = this.date[this._load_mode + "_start"](new Date(t.valueOf())); t > this._min_date;) {
          t = this.date.add(t, -1, this._load_mode);
        }

        i = t;

        for (var s = !0; i < this._max_date;) {
          i = this.date.add(i, 1, this._load_mode), this._loaded[r(t)] && s ? t = this.date.add(t, 1, this._load_mode) : s = !1;
        }

        var a = i;

        do {
          i = a, a = this.date.add(i, -1, this._load_mode);
        } while (a > t && this._loaded[r(a)]);

        if (t >= i) return !1;

        for (scheduler.$ajax.get(e + "&from=" + r(t) + "&to=" + r(i), function (e) {
          scheduler.on_load(e);
        }); i > t;) {
          this._loaded[r(t)] = !0, t = this.date.add(t, 1, this._load_mode);
        }
      } else scheduler.$ajax.get(e, function (e) {
        scheduler.on_load(e);
      });

      return this.callEvent("onXLS", []), !0;
    }
  }, scheduler.on_load = function (e) {
    var t,
        i = !1;
    if (this._process && "xml" != this._process) try {
      t = this[this._process].parse(e.xmlDoc.responseText);
    } catch (r) {
      i = !0;
    } else t = this._magic_parser(e), t || (i = !0);
    (i || e.xmlDoc.status && e.xmlDoc.status >= 400) && (this.callEvent("onLoadError", [e.xmlDoc]), t = []), scheduler._process_loading(t), this.callEvent("onXLE", []);
  }, scheduler._process_loading = function (e) {
    this._loading = !0, this._not_render = !0;

    for (var t = 0; t < e.length; t++) {
      this.callEvent("onEventLoading", [e[t]]) && this.addEvent(e[t]);
    }

    this._not_render = !1, this._render_wait && this.render_view_data(), this._loading = !1, this._after_call && this._after_call(), this._after_call = null;
  }, scheduler._init_event = function (e) {
    e.text = e.text || e._tagvalue || "", e.start_date = scheduler._init_date(e.start_date), e.end_date = scheduler._init_date(e.end_date);
  }, scheduler._init_date = function (e) {
    return e ? "string" == typeof e ? scheduler.templates.xml_date(e) : new Date(e) : null;
  }, scheduler.json = {}, scheduler.json.parse = function (data) {
    "string" == typeof data && (window.JSON ? scheduler._temp = JSON.parse(data) : scheduler._temp = eval("(" + data + ")"), data = scheduler._temp ? scheduler._temp.data || scheduler._temp.d || scheduler._temp : []), data.dhx_security && (dhtmlx.security_key = data.dhx_security);
    var collections = scheduler._temp && scheduler._temp.collections ? scheduler._temp.collections : {},
        collections_loaded = !1;

    for (var key in collections) {
      if (collections.hasOwnProperty(key)) {
        collections_loaded = !0;
        var collection = collections[key],
            arr = scheduler.serverList[key];
        if (!arr) continue;
        arr.splice(0, arr.length);

        for (var j = 0; j < collection.length; j++) {
          var option = collection[j],
              obj = {
            key: option.value,
            label: option.label
          };

          for (var option_key in option) {
            if (option.hasOwnProperty(option_key)) {
              if ("value" == option_key || "label" == option_key) continue;
              obj[option_key] = option[option_key];
            }
          }

          arr.push(obj);
        }
      }
    }

    collections_loaded && scheduler.callEvent("onOptionsLoad", []);

    for (var evs = [], i = 0; i < data.length; i++) {
      var event = data[i];
      scheduler._init_event(event), evs.push(event);
    }

    return evs;
  }, scheduler.parse = function (e, t) {
    this._process = t, this.on_load({
      xmlDoc: {
        responseText: e
      }
    });
  }, scheduler.load = function (e, t) {
    "string" == typeof t && (this._process = t, t = arguments[2]), this._load_url = e, this._after_call = t, this._load(e, this._date);
  }, scheduler.setLoadMode = function (e) {
    "all" == e && (e = ""), this._load_mode = e;
  }, scheduler.serverList = function (e, t) {
    return t ? (this.serverList[e] = t.slice(0), this.serverList[e]) : (this.serverList[e] = this.serverList[e] || [], this.serverList[e]);
  }, scheduler._userdata = {}, scheduler._magic_parser = function (e) {
    var t;
    if (e.getXMLTopNode || (e = scheduler.$ajax.parse(e)), t = scheduler.$ajax.xmltop("data", e.xmlDoc), "data" != t.tagName) return null;
    var i = t.getAttribute("dhx_security");
    i && (dhtmlx.security_key = i);

    for (var r = scheduler.$ajax.xpath("//coll_options", e.xmlDoc), s = 0; s < r.length; s++) {
      var a = r[s].getAttribute("for"),
          n = this.serverList[a];

      if (n) {
        n.splice(0, n.length);

        for (var d = scheduler.$ajax.xpath(".//item", r[s]), l = 0; l < d.length; l++) {
          for (var o = d[l], h = o.attributes, _ = {
            key: d[l].getAttribute("value"),
            label: d[l].getAttribute("label")
          }, c = 0; c < h.length; c++) {
            var u = h[c];
            "value" != u.nodeName && "label" != u.nodeName && (_[u.nodeName] = u.nodeValue);
          }

          n.push(_);
        }
      }
    }

    r.length && scheduler.callEvent("onOptionsLoad", []);

    for (var g = scheduler.$ajax.xpath("//userdata", e.xmlDoc), s = 0; s < g.length; s++) {
      var f = this._xmlNodeToJSON(g[s]);

      this._userdata[f.name] = f.text;
    }

    var v = [];
    t = scheduler.$ajax.xpath("//event", e.xmlDoc);

    for (var s = 0; s < t.length; s++) {
      var m = v[s] = this._xmlNodeToJSON(t[s]);

      scheduler._init_event(m);
    }

    return v;
  }, scheduler._xmlNodeToJSON = function (e) {
    for (var t = {}, i = 0; i < e.attributes.length; i++) {
      t[e.attributes[i].name] = e.attributes[i].value;
    }

    for (var i = 0; i < e.childNodes.length; i++) {
      var r = e.childNodes[i];
      1 == r.nodeType && (t[r.tagName] = r.firstChild ? r.firstChild.nodeValue : "");
    }

    return t.text || (t.text = e.firstChild ? e.firstChild.nodeValue : ""), t;
  }, scheduler.attachEvent("onXLS", function () {
    if (this.config.show_loading === !0) {
      var e;
      e = this.config.show_loading = document.createElement("div"), e.className = "dhx_loading", e.style.left = Math.round((this._x - 128) / 2) + "px", e.style.top = Math.round((this._y - 15) / 2) + "px", this._obj.appendChild(e);
    }
  }), scheduler.attachEvent("onXLE", function () {
    var e = this.config.show_loading;
    e && "object" == _typeof(e) && (this._obj.removeChild(e), this.config.show_loading = !0);
  }), scheduler.ical = {
    parse: function parse(e) {
      var t = e.match(RegExp(this.c_start + "[^\f]*" + this.c_end, ""));

      if (t.length) {
        t[0] = t[0].replace(/[\r\n]+ /g, ""), t[0] = t[0].replace(/[\r\n]+(?=[a-z \t])/g, " "), t[0] = t[0].replace(/\;[^:\r\n]*:/g, ":");

        for (var i, r = [], s = RegExp("(?:" + this.e_start + ")([^\f]*?)(?:" + this.e_end + ")", "g"); null !== (i = s.exec(t));) {
          for (var a, n = {}, d = /[^\r\n]+[\r\n]+/g; null !== (a = d.exec(i[1]));) {
            this.parse_param(a.toString(), n);
          }

          n.uid && !n.id && (n.id = n.uid), r.push(n);
        }

        return r;
      }
    },
    parse_param: function parse_param(e, t) {
      var i = e.indexOf(":");

      if (-1 != i) {
        var r = e.substr(0, i).toLowerCase(),
            s = e.substr(i + 1).replace(/\\\,/g, ",").replace(/[\r\n]+$/, "");
        "summary" == r ? r = "text" : "dtstart" == r ? (r = "start_date", s = this.parse_date(s, 0, 0)) : "dtend" == r && (r = "end_date", s = this.parse_date(s, 0, 0)), t[r] = s;
      }
    },
    parse_date: function parse_date(e, t, i) {
      var r = e.split("T"),
          s = !1;
      r[1] && (t = r[1].substr(0, 2), i = r[1].substr(2, 2), s = !("Z" != r[1][6]));
      var a = r[0].substr(0, 4),
          n = parseInt(r[0].substr(4, 2), 10) - 1,
          d = r[0].substr(6, 2);
      return scheduler.config.server_utc || s ? new Date(Date.UTC(a, n, d, t, i)) : new Date(a, n, d, t, i);
    },
    c_start: "BEGIN:VCALENDAR",
    e_start: "BEGIN:VEVENT",
    e_end: "END:VEVENT",
    c_end: "END:VCALENDAR"
  }, scheduler._lightbox_controls = {}, scheduler.formSection = function (e) {
    var t = this.config.lightbox.sections,
        i = 0;

    for (i; i < t.length && t[i].name != e; i++) {
      ;
    }

    var r = t[i];
    scheduler._lightbox || scheduler.getLightbox();
    var s = document.getElementById(r.id),
        a = s.nextSibling,
        n = {
      section: r,
      header: s,
      node: a,
      getValue: function getValue(e) {
        return scheduler.form_blocks[r.type].get_value(a, e || {}, r);
      },
      setValue: function setValue(e, t) {
        return scheduler.form_blocks[r.type].set_value(a, e, t || {}, r);
      }
    },
        d = scheduler._lightbox_controls["get_" + r.type + "_control"];
    return d ? d(n) : n;
  }, scheduler._lightbox_controls.get_template_control = function (e) {
    return e.control = e.node, e;
  }, scheduler._lightbox_controls.get_select_control = function (e) {
    return e.control = e.node.getElementsByTagName("select")[0], e;
  }, scheduler._lightbox_controls.get_textarea_control = function (e) {
    return e.control = e.node.getElementsByTagName("textarea")[0], e;
  }, scheduler._lightbox_controls.get_time_control = function (e) {
    return e.control = e.node.getElementsByTagName("select"), e;
  }, scheduler._lightbox_controls.defaults = {
    template: {
      height: 30
    },
    textarea: {
      height: 200
    },
    select: {
      height: 23
    },
    time: {
      height: 20
    }
  }, scheduler.form_blocks = {
    template: {
      render: function render(e) {
        var t = scheduler._lightbox_controls.defaults.template,
            i = t ? t.height : 30,
            r = (e.height || i || 30) + "px";
        return "<div class='dhx_cal_ltext dhx_cal_template' style='height:" + r + ";'></div>";
      },
      set_value: function set_value(e, t, i, r) {
        e.innerHTML = t || "";
      },
      get_value: function get_value(e, t, i) {
        return e.innerHTML || "";
      },
      focus: function focus(e) {}
    },
    textarea: {
      render: function render(e) {
        var t = scheduler._lightbox_controls.defaults.textarea,
            i = t ? t.height : 200,
            r = (e.height || i || "130") + "px";
        return "<div class='dhx_cal_ltext' style='height:" + r + ";'><textarea></textarea></div>";
      },
      set_value: function set_value(e, t, i) {
        scheduler.form_blocks.textarea._get_input(e).value = t || "";
      },
      get_value: function get_value(e, t) {
        return scheduler.form_blocks.textarea._get_input(e).value;
      },
      focus: function focus(e) {
        var t = scheduler.form_blocks.textarea._get_input(e);

        scheduler._focus(t, !0);
      },
      _get_input: function _get_input(e) {
        return e.getElementsByTagName("textarea")[0];
      }
    },
    select: {
      render: function render(e) {
        for (var t = scheduler._lightbox_controls.defaults.select, i = t ? t.height : 23, r = (e.height || i || "23") + "px", s = "<div class='dhx_cal_ltext' style='height:" + r + ";'><select style='width:100%;'>", a = 0; a < e.options.length; a++) {
          s += "<option value='" + e.options[a].key + "'>" + e.options[a].label + "</option>";
        }

        return s += "</select></div>";
      },
      set_value: function set_value(e, t, i, r) {
        var s = e.firstChild;
        !s._dhx_onchange && r.onchange && (s.onchange = r.onchange, s._dhx_onchange = !0), "undefined" == typeof t && (t = (s.options[0] || {}).value), s.value = t || "";
      },
      get_value: function get_value(e, t) {
        return e.firstChild.value;
      },
      focus: function focus(e) {
        var t = e.firstChild;

        scheduler._focus(t, !0);
      }
    },
    time: {
      render: function render(e) {
        e.time_format || (e.time_format = ["%H:%i", "%d", "%m", "%Y"]), e._time_format_order = {};
        var t = e.time_format,
            i = scheduler.config,
            r = scheduler.date.date_part(scheduler._currentDate()),
            s = 1440,
            a = 0;
        scheduler.config.limit_time_select && (s = 60 * i.last_hour + 1, a = 60 * i.first_hour, r.setHours(i.first_hour));

        for (var n = "", d = 0; d < t.length; d++) {
          var l = t[d];
          d > 0 && (n += " ");
          var o = "",
              h = "";

          switch (l) {
            case "%Y":
              o = "dhx_lightbox_year_select", e._time_format_order[3] = d;

              for (var _ = r.getFullYear() - 5, c = 0; 10 > c; c++) {
                h += "<option value='" + (_ + c) + "'>" + (_ + c) + "</option>";
              }

              break;

            case "%m":
              o = "dhx_lightbox_month_select", e._time_format_order[2] = d;

              for (var c = 0; 12 > c; c++) {
                h += "<option value='" + c + "'>" + this.locale.date.month_full[c] + "</option>";
              }

              break;

            case "%d":
              o = "dhx_lightbox_day_select", e._time_format_order[1] = d;

              for (var c = 1; 32 > c; c++) {
                h += "<option value='" + c + "'>" + c + "</option>";
              }

              break;

            case "%H:%i":
              o = "dhx_lightbox_time_select", e._time_format_order[0] = d;
              var c = a,
                  u = r.getDate();

              for (e._time_values = []; s > c;) {
                var g = this.templates.time_picker(r);
                h += "<option value='" + c + "'>" + g + "</option>", e._time_values.push(c), r.setTime(r.valueOf() + 60 * this.config.time_step * 1e3);
                var f = r.getDate() != u ? 1 : 0;
                c = 24 * f * 60 + 60 * r.getHours() + r.getMinutes();
              }

          }

          if (h) {
            var v = scheduler._waiAria.lightboxSelectAttrString(l),
                m = e.readonly ? "disabled='disabled'" : "";

            n += "<select class='" + o + "' " + m + v + ">" + h + "</select> ";
          }
        }

        var p = scheduler._lightbox_controls.defaults.select,
            x = p ? p.height : 23,
            b = x || 30;
        return "<div style='height:" + b + "px;padding-top:0px;font-size:inherit;' class='dhx_section_time'>" + n + "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>" + n + "</div>";
      },
      set_value: function set_value(e, t, i, r) {
        function s(e, t, i) {
          for (var s = r._time_values, a = 60 * i.getHours() + i.getMinutes(), n = a, d = !1, l = 0; l < s.length; l++) {
            var h = s[l];

            if (h === a) {
              d = !0;
              break;
            }

            a > h && (n = h);
          }

          e[t + o[0]].value = d ? a : n, d || n || (e[t + o[0]].selectedIndex = -1), e[t + o[1]].value = i.getDate(), e[t + o[2]].value = i.getMonth(), e[t + o[3]].value = i.getFullYear();
        }

        var a,
            n,
            d = scheduler.config,
            l = e.getElementsByTagName("select"),
            o = r._time_format_order;

        if (d.full_day) {
          if (!e._full_day) {
            var h = "<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> " + scheduler.locale.labels.full_day + "&nbsp;</label></input>";
            scheduler.config.wide_form || (h = e.previousSibling.innerHTML + h), e.previousSibling.innerHTML = h, e._full_day = !0;
          }

          var _ = e.previousSibling.getElementsByTagName("input")[0];
          _.checked = 0 === scheduler.date.time_part(i.start_date) && 0 === scheduler.date.time_part(i.end_date), l[o[0]].disabled = _.checked, l[o[0] + l.length / 2].disabled = _.checked, _.onclick = function () {
            if (_.checked) {
              var t = {};
              scheduler.form_blocks.time.get_value(e, t, r), a = scheduler.date.date_part(t.start_date), n = scheduler.date.date_part(t.end_date), (+n == +a || +n >= +a && (0 !== i.end_date.getHours() || 0 !== i.end_date.getMinutes())) && (n = scheduler.date.add(n, 1, "day"));
            } else a = null, n = null;

            l[o[0]].disabled = _.checked, l[o[0] + l.length / 2].disabled = _.checked, s(l, 0, a || i.start_date), s(l, 4, n || i.end_date);
          };
        }

        if (d.auto_end_date && d.event_duration) for (var c = function c() {
          a = new Date(l[o[3]].value, l[o[2]].value, l[o[1]].value, 0, l[o[0]].value), n = new Date(a.getTime() + 60 * scheduler.config.event_duration * 1e3), s(l, 4, n);
        }, u = 0; 4 > u; u++) {
          l[u].onchange = c;
        }
        s(l, 0, i.start_date), s(l, 4, i.end_date);
      },
      get_value: function get_value(e, t, i) {
        var r = e.getElementsByTagName("select"),
            s = i._time_format_order;

        if (t.start_date = new Date(r[s[3]].value, r[s[2]].value, r[s[1]].value, 0, r[s[0]].value), t.end_date = new Date(r[s[3] + 4].value, r[s[2] + 4].value, r[s[1] + 4].value, 0, r[s[0] + 4].value), !r[s[3]].value || !r[s[3] + 4].value) {
          var a = scheduler.getEvent(scheduler._lightbox_id);
          a && (t.start_date = a.start_date, t.end_date = a.end_date);
        }

        return t.end_date <= t.start_date && (t.end_date = scheduler.date.add(t.start_date, scheduler.config.time_step, "minute")), {
          start_date: new Date(t.start_date),
          end_date: new Date(t.end_date)
        };
      },
      focus: function focus(e) {
        scheduler._focus(e.getElementsByTagName("select")[0]);
      }
    }
  }, scheduler.showCover = function (e) {
    if (e) {
      e.style.display = "block";
      var t = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
          i = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
          r = window.innerHeight || document.documentElement.clientHeight;
      t ? e.style.top = Math.round(t + Math.max((r - e.offsetHeight) / 2, 0)) + "px" : e.style.top = Math.round(Math.max((r - e.offsetHeight) / 2, 0) + 9) + "px", document.documentElement.scrollWidth > document.body.offsetWidth ? e.style.left = Math.round(i + (document.body.offsetWidth - e.offsetWidth) / 2) + "px" : e.style.left = Math.round((document.body.offsetWidth - e.offsetWidth) / 2) + "px";
    }

    this.show_cover();
  }, scheduler.showLightbox = function (e) {
    if (e) {
      if (!this.callEvent("onBeforeLightbox", [e])) return void (this._new_event && (this._new_event = null));
      var t = this.getLightbox();
      this.showCover(t), this._fill_lightbox(e, t), this._waiAria.lightboxVisibleAttr(t), this.callEvent("onLightbox", [e]);
    }
  }, scheduler._fill_lightbox = function (e, t) {
    var i = this.getEvent(e),
        r = t.getElementsByTagName("span"),
        s = [];

    if (scheduler.templates.lightbox_header) {
      s.push("");
      var a = scheduler.templates.lightbox_header(i.start_date, i.end_date, i);
      s.push(a), r[1].innerHTML = "", r[2].innerHTML = a;
    } else {
      var n = this.templates.event_header(i.start_date, i.end_date, i),
          d = (this.templates.event_bar_text(i.start_date, i.end_date, i) || "").substr(0, 70);
      s.push(n), s.push(d), r[1].innerHTML = n, r[2].innerHTML = d;
    }

    this._waiAria.lightboxHeader(t, s.join(" "));

    for (var l = this.config.lightbox.sections, o = 0; o < l.length; o++) {
      var h = l[o],
          _ = scheduler._get_lightbox_section_node(h),
          c = this.form_blocks[h.type],
          u = void 0 !== i[h.map_to] ? i[h.map_to] : h.default_value;

      c.set_value.call(this, _, u, i, h), l[o].focus && c.focus.call(this, _);
    }

    scheduler._lightbox_id = e;
  }, scheduler._get_lightbox_section_node = function (e) {
    return document.getElementById(e.id).nextSibling;
  }, scheduler._lightbox_out = function (e) {
    for (var t = this.config.lightbox.sections, i = 0; i < t.length; i++) {
      var r = document.getElementById(t[i].id);
      r = r ? r.nextSibling : r;
      var s = this.form_blocks[t[i].type],
          a = s.get_value.call(this, r, e, t[i]);
      "auto" != t[i].map_to && (e[t[i].map_to] = a);
    }

    return e;
  }, scheduler._empty_lightbox = function (e) {
    var t = scheduler._lightbox_id,
        i = this.getEvent(t);
    this.getLightbox();
    this._lame_copy(i, e), this.setEvent(i.id, i), this._edit_stop_event(i, !0), this.render_view_data();
  }, scheduler.hide_lightbox = function (e) {
    scheduler.endLightbox(!1, this.getLightbox());
  }, scheduler.hideCover = function (e) {
    e && (e.style.display = "none"), this.hide_cover();
  }, scheduler.hide_cover = function () {
    this._cover && this._cover.parentNode.removeChild(this._cover), this._cover = null;
  }, scheduler.show_cover = function () {
    if (!this._cover) {
      this._cover = document.createElement("div"), this._cover.className = "dhx_cal_cover";
      var e = void 0 !== document.height ? document.height : document.body.offsetHeight,
          t = document.documentElement ? document.documentElement.scrollHeight : 0;
      this._cover.style.height = Math.max(e, t) + "px", document.body.appendChild(this._cover);
    }
  }, scheduler.save_lightbox = function () {
    var e = this._lightbox_out({}, this._lame_copy(this.getEvent(this._lightbox_id)));

    (!this.checkEvent("onEventSave") || this.callEvent("onEventSave", [this._lightbox_id, e, this._new_event])) && (this._empty_lightbox(e), this.hide_lightbox());
  }, scheduler.startLightbox = function (e, t) {
    this._lightbox_id = e, this._custom_lightbox = !0, this._temp_lightbox = this._lightbox, this._lightbox = t, this.showCover(t);
  }, scheduler.endLightbox = function (e, t) {
    var t = t || scheduler.getLightbox(),
        i = scheduler.getEvent(this._lightbox_id);
    i && this._edit_stop_event(i, e), e && scheduler.render_view_data(), this.hideCover(t), this._custom_lightbox && (this._lightbox = this._temp_lightbox, this._custom_lightbox = !1), this._temp_lightbox = this._lightbox_id = null, this._waiAria.lightboxHiddenAttr(t), this.callEvent("onAfterLightbox", []);
  }, scheduler.resetLightbox = function () {
    scheduler._lightbox && !scheduler._custom_lightbox && scheduler._lightbox.parentNode.removeChild(scheduler._lightbox), scheduler._lightbox = null;
  }, scheduler.cancel_lightbox = function () {
    this.callEvent("onEventCancel", [this._lightbox_id, this._new_event]), this.hide_lightbox();
  }, scheduler._init_lightbox_events = function () {
    this.getLightbox().onclick = function (e) {
      var t = e ? e.target : event.srcElement;

      if (t.className || (t = t.previousSibling), !(t && t.className && scheduler._getClassName(t).indexOf("dhx_btn_set") > -1) || (t = t.querySelector("[dhx_button]"))) {
        var i = scheduler._getClassName(t);

        if (t && i) switch (i) {
          case "dhx_save_btn":
            scheduler.save_lightbox();
            break;

          case "dhx_delete_btn":
            var r = scheduler.locale.labels.confirm_deleting;

            scheduler._dhtmlx_confirm(r, scheduler.locale.labels.title_confirm_deleting, function () {
              scheduler.deleteEvent(scheduler._lightbox_id), scheduler._new_event = null, scheduler.hide_lightbox();
            });

            break;

          case "dhx_cancel_btn":
            scheduler.cancel_lightbox();
            break;

          default:
            if (t.getAttribute("dhx_button")) scheduler.callEvent("onLightboxButton", [i, t, e]);else {
              var s, a, n;
              -1 != i.indexOf("dhx_custom_button") && (-1 != i.indexOf("dhx_custom_button_") ? (s = t.parentNode.getAttribute("index"), n = t.parentNode.parentNode) : (s = t.getAttribute("index"), n = t.parentNode, t = t.firstChild)), s && (a = scheduler.form_blocks[scheduler.config.lightbox.sections[s].type], a.button_click(s, t, n, n.nextSibling));
            }
        }
      }
    }, this.getLightbox().onkeydown = function (e) {
      var t = e || window.event,
          i = e.target || e.srcElement,
          r = i.querySelector("[dhx_button]");

      switch (r || (r = i.parentNode.querySelector(".dhx_custom_button, .dhx_readonly")), (e || t).keyCode) {
        case 32:
          if ((e || t).shiftKey) return;
          r && r.click && r.click();
          break;

        case scheduler.keys.edit_save:
          if ((e || t).shiftKey) return;
          r && r.click ? r.click() : scheduler.save_lightbox();
          break;

        case scheduler.keys.edit_cancel:
          scheduler.cancel_lightbox();
      }
    };
  }, scheduler.setLightboxSize = function () {
    var e = this._lightbox;

    if (e) {
      var t = e.childNodes[1];
      t.style.height = "0px", t.style.height = t.scrollHeight + "px", e.style.height = t.scrollHeight + scheduler.xy.lightbox_additional_height + "px", t.style.height = t.scrollHeight + "px";
    }
  }, scheduler._init_dnd_events = function () {
    dhtmlxEvent(document.body, "mousemove", scheduler._move_while_dnd), dhtmlxEvent(document.body, "mouseup", scheduler._finish_dnd), scheduler._init_dnd_events = function () {};
  }, scheduler._move_while_dnd = function (e) {
    if (scheduler._dnd_start_lb) {
      document.dhx_unselectable || (document.body.className += " dhx_unselectable", document.dhx_unselectable = !0);
      var t = scheduler.getLightbox(),
          i = e && e.target ? [e.pageX, e.pageY] : [event.clientX, event.clientY];
      t.style.top = scheduler._lb_start[1] + i[1] - scheduler._dnd_start_lb[1] + "px", t.style.left = scheduler._lb_start[0] + i[0] - scheduler._dnd_start_lb[0] + "px";
    }
  }, scheduler._ready_to_dnd = function (e) {
    var t = scheduler.getLightbox();
    scheduler._lb_start = [parseInt(t.style.left, 10), parseInt(t.style.top, 10)], scheduler._dnd_start_lb = e && e.target ? [e.pageX, e.pageY] : [event.clientX, event.clientY];
  }, scheduler._finish_dnd = function () {
    scheduler._lb_start && (scheduler._lb_start = scheduler._dnd_start_lb = !1, document.body.className = document.body.className.replace(" dhx_unselectable", ""), document.dhx_unselectable = !1);
  }, scheduler.getLightbox = function () {
    if (!this._lightbox) {
      var e = document.createElement("div");
      e.className = "dhx_cal_light", scheduler.config.wide_form && (e.className += " dhx_cal_light_wide"), scheduler.form_blocks.recurring && (e.className += " dhx_cal_light_rec"), /msie|MSIE 6/.test(navigator.userAgent) && (e.className += " dhx_ie6"), e.style.visibility = "hidden";

      for (var t = this._lightbox_template, i = this.config.buttons_left, r = "", s = 0; s < i.length; s++) {
        r = this._waiAria.lightboxButtonAttrString(i[s]), t += "<div " + r + " class='dhx_btn_set dhx_left_btn_set " + i[s] + "_set'><div dhx_button='1' class='" + i[s] + "'></div><div>" + scheduler.locale.labels[i[s]] + "</div></div>";
      }

      i = this.config.buttons_right;

      for (var s = 0; s < i.length; s++) {
        r = this._waiAria.lightboxButtonAttrString(i[s]), t += "<div " + r + " class='dhx_btn_set dhx_right_btn_set " + i[s] + "_set' style='float:right;'><div dhx_button='1' class='" + i[s] + "'></div><div>" + scheduler.locale.labels[i[s]] + "</div></div>";
      }

      t += "</div>", e.innerHTML = t, scheduler.config.drag_lightbox && (e.firstChild.onmousedown = scheduler._ready_to_dnd, e.firstChild.onselectstart = function () {
        return !1;
      }, e.firstChild.style.cursor = "move", scheduler._init_dnd_events()), this._waiAria.lightboxAttr(e), document.body.insertBefore(e, document.body.firstChild), this._lightbox = e;
      var a = this.config.lightbox.sections;
      t = "";

      for (var s = 0; s < a.length; s++) {
        var n = this.form_blocks[a[s].type];

        if (n) {
          a[s].id = "area_" + this.uid();
          var d = "";

          if (a[s].button) {
            var r = scheduler._waiAria.lightboxSectionButtonAttrString(this.locale.labels["button_" + a[s].button]);

            d = "<div " + r + " class='dhx_custom_button' index='" + s + "'><div class='dhx_custom_button_" + a[s].button + "'></div><div>" + this.locale.labels["button_" + a[s].button] + "</div></div>";
          }

          this.config.wide_form && (t += "<div class='dhx_wrap_section'>");
          var l = this.locale.labels["section_" + a[s].name];
          "string" != typeof l && (l = a[s].name), t += "<div id='" + a[s].id + "' class='dhx_cal_lsection'>" + d + "<label>" + l + "</label></div>" + n.render.call(this, a[s]), t += "</div>";
        }
      }

      for (var o = e.getElementsByTagName("div"), s = 0; s < o.length; s++) {
        var h = o[s],
            _ = scheduler._getClassName(h);

        if ("dhx_cal_larea" == _) {
          h.innerHTML = t;
          break;
        }
      }

      scheduler._bindLightboxLabels(a), this.setLightboxSize(), this._init_lightbox_events(this), e.style.display = "none", e.style.visibility = "visible";
    }

    return this._lightbox;
  }, scheduler._bindLightboxLabels = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];

      if (i.id && document.getElementById(i.id)) {
        for (var r = document.getElementById(i.id), s = r.querySelector("label"), a = scheduler._get_lightbox_section_node(i); a && !a.querySelector;) {
          a = a.nextSibling;
        }

        var n = !0;

        if (a) {
          var d = a.querySelector("input, select, textarea");
          d && (i.inputId = d.id || "input_" + scheduler.uid(), d.id || (d.id = i.inputId), s.setAttribute("for", i.inputId), n = !1);
        }

        if (n) {
          var l = scheduler.form_blocks[i.type];
          l.focus && (s.onclick = function (e) {
            return function () {
              var t = scheduler.form_blocks[e.type],
                  i = scheduler._get_lightbox_section_node(e);

              t && t.focus && t.focus.call(scheduler, i);
            };
          }(i));
        }
      }
    }
  }, scheduler.attachEvent("onEventIdChange", function (e, t) {
    this._lightbox_id == e && (this._lightbox_id = t);
  }), scheduler._lightbox_template = "<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div>", scheduler._init_touch_events = function () {
    var e = this.config.touch && (-1 != navigator.userAgent.indexOf("Mobile") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Touch"));

    if (e && (this.xy.scroll_width = 0, this._mobile = !0), this.config.touch) {
      var t = !0;

      try {
        document.createEvent("TouchEvent");
      } catch (i) {
        t = !1;
      }

      t ? this._touch_events(["touchmove", "touchstart", "touchend"], function (e) {
        return e.touches && e.touches.length > 1 ? null : e.touches[0] ? {
          target: e.target,
          pageX: e.touches[0].pageX,
          pageY: e.touches[0].pageY,
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY
        } : e;
      }, function () {
        return !1;
      }) : window.PointerEvent || window.navigator.pointerEnabled ? this._touch_events(["pointermove", "pointerdown", "pointerup"], function (e) {
        return "mouse" == e.pointerType ? null : e;
      }, function (e) {
        return !e || "mouse" == e.pointerType;
      }) : window.navigator.msPointerEnabled && this._touch_events(["MSPointerMove", "MSPointerDown", "MSPointerUp"], function (e) {
        return e.pointerType == e.MSPOINTER_TYPE_MOUSE ? null : e;
      }, function (e) {
        return !e || e.pointerType == e.MSPOINTER_TYPE_MOUSE;
      });
    }
  }, scheduler._touch_events = function (e, t, i) {
    function r(e, t, r) {
      e.addEventListener(t, function (e) {
        if (scheduler._is_lightbox_open()) return !0;
        if (!i(e)) return r(e);
      }, {
        passive: !1
      });
    }

    function s(e, t, i, r) {
      if (!e || !t) return !1;

      for (var s = e.target; s && s != scheduler._obj;) {
        s = s.parentNode;
      }

      if (s != scheduler._obj) return !1;
      var a = Math.abs(e.pageY - t.pageY),
          n = Math.abs(e.pageX - t.pageX);
      return r > a && n > i && (!a || n / a > 3) ? (e.pageX > t.pageX ? scheduler._click.dhx_cal_next_button() : scheduler._click.dhx_cal_prev_button(), !0) : !1;
    }

    function a(e) {
      if (!i(e)) {
        var t = scheduler.getState().drag_mode,
            r = scheduler.matrix ? scheduler.matrix[scheduler._mode] : !1,
            s = scheduler.render_view_data;
        return "create" == t && r && (scheduler.render_view_data = function () {
          for (var e = scheduler.getState().drag_id, t = scheduler.getEvent(e), i = r.y_property, s = scheduler.getEvents(t.start_date, t.end_date), a = 0; a < s.length; a++) {
            s[a][i] != t[i] && (s.splice(a, 1), a--);
          }

          t._sorder = s.length - 1, t._count = s.length, this.render_data([t], scheduler.getState().mode);
        }), scheduler._on_mouse_move(e), "create" == t && r && (scheduler.render_view_data = s), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, !1;
      }
    }

    function n(e) {
      i(e) || (scheduler._hide_global_tip(), h && (scheduler._on_mouse_up(t(e || event)), scheduler._temp_touch_block = !1), scheduler._drag_id = null, scheduler._drag_mode = null, scheduler._drag_pos = null, scheduler._pointerDragId = null, clearTimeout(o), h = c = !1, _ = !0);
    }

    var d,
        l,
        o,
        h,
        _,
        c,
        u = (-1 != navigator.userAgent.indexOf("Android") && -1 != navigator.userAgent.indexOf("WebKit"), 0);

    r(document.body, e[0], function (e) {
      if (!i(e)) {
        var r = t(e);

        if (r) {
          if (h) return a(r), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, scheduler._update_global_tip(), !1;
          if (l = t(e), c) return l ? void ((d.target != l.target || Math.abs(d.pageX - l.pageX) > 5 || Math.abs(d.pageY - l.pageY) > 5) && (_ = !0, clearTimeout(o))) : void (_ = !0);
        }
      }
    }), r(this._els.dhx_cal_data[0], "scroll", n), r(this._els.dhx_cal_data[0], "touchcancel", n), r(this._els.dhx_cal_data[0], "contextmenu", function (e) {
      return i(e) ? void 0 : c ? (e && e.preventDefault && e.preventDefault(), (e || event).cancelBubble = !0, !1) : void 0;
    }), r(this._obj, e[1], function (e) {
      if (!i(e)) {
        scheduler._pointerDragId = e.pointerId;
        var r;
        if (h = _ = !1, c = !0, r = l = t(e), !r) return void (_ = !0);
        var s = new Date();
        if (!_ && !h && 250 > s - u) return scheduler._click.dhx_cal_data(r), window.setTimeout(function () {
          r.type = "dblclick", scheduler._on_dbl_click(r);
        }, 50), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, scheduler._block_next_stop = !0, !1;

        if (u = s, !_ && !h && scheduler.config.touch_drag) {
          var a = scheduler._locate_event(document.activeElement),
              n = scheduler._locate_event(r.target),
              g = d ? scheduler._locate_event(d.target) : null;

          if (a && n && a == n && a != g) return e.preventDefault && e.preventDefault(), e.cancelBubble = !0, scheduler._ignore_next_click = !1, scheduler._click.dhx_cal_data(r), d = r, !1;
          o = setTimeout(function () {
            h = !0;

            var e = d.target,
                t = scheduler._getClassName(e);

            e && -1 != t.indexOf("dhx_body") && (e = e.previousSibling), scheduler._on_mouse_down(d, e), scheduler._drag_mode && "create" != scheduler._drag_mode && scheduler.for_rendered(scheduler._drag_id, function (e, t) {
              e.style.display = "none", scheduler._rendered.splice(t, 1);
            }), scheduler.config.touch_tip && scheduler._show_global_tip(), scheduler.updateEvent(scheduler._drag_id);
          }, scheduler.config.touch_drag), d = r;
        }
      }
    }), r(this._els.dhx_cal_data[0], e[2], function (e) {
      return i(e) ? void 0 : (!h && s(d, l, 200, 100) && (scheduler._block_next_stop = !0), h && (scheduler._ignore_next_click = !0, setTimeout(function () {
        scheduler._ignore_next_click = !1;
      }, 100)), n(e), scheduler._block_next_stop ? (scheduler._block_next_stop = !1, e.preventDefault && e.preventDefault(), e.cancelBubble = !0, !1) : void 0);
    }), dhtmlxEvent(document.body, e[2], n);
  }, scheduler._show_global_tip = function () {
    scheduler._hide_global_tip();

    var e = scheduler._global_tip = document.createElement("div");
    e.className = "dhx_global_tip", scheduler._update_global_tip(1), document.body.appendChild(e);
  }, scheduler._update_global_tip = function (e) {
    var t = scheduler._global_tip;

    if (t) {
      var i = "";

      if (scheduler._drag_id && !e) {
        var r = scheduler.getEvent(scheduler._drag_id);
        r && (i = "<div>" + (r._timed ? scheduler.templates.event_header(r.start_date, r.end_date, r) : scheduler.templates.day_date(r.start_date, r.end_date, r)) + "</div>");
      }

      "create" == scheduler._drag_mode || "new-size" == scheduler._drag_mode ? t.innerHTML = (scheduler.locale.labels.drag_to_create || "Drag to create") + i : t.innerHTML = (scheduler.locale.labels.drag_to_move || "Drag to move") + i;
    }
  }, scheduler._hide_global_tip = function () {
    var e = scheduler._global_tip;
    e && e.parentNode && (e.parentNode.removeChild(e), scheduler._global_tip = 0);
  }, scheduler._dp_init = function (e) {
    e._methods = ["_set_event_text_style", "", "_dp_change_event_id", "_dp_hook_delete"], this._dp_change_event_id = function (e, t) {
      scheduler.getEvent(e) && scheduler.changeEventId(e, t);
    }, this._dp_hook_delete = function (t, i) {
      return scheduler.getEvent(t) ? (t != i && ("true_deleted" == this.getUserData(t, e.action_param) && this.setUserData(t, e.action_param, "updated"), this.changeEventId(t, i)), this.deleteEvent(i, !0)) : void 0;
    }, this.attachEvent("onEventAdded", function (t) {
      !this._loading && this._validId(t) && e.setUpdated(t, !0, "inserted");
    }), this.attachEvent("onConfirmedBeforeEventDelete", function (t) {
      if (this._validId(t)) {
        var i = e.getState(t);
        return "inserted" == i || this._new_event ? (e.setUpdated(t, !1), !0) : "deleted" == i ? !1 : "true_deleted" == i ? !0 : (e.setUpdated(t, !0, "deleted"), !1);
      }
    }), this.attachEvent("onEventChanged", function (t) {
      !this._loading && this._validId(t) && e.setUpdated(t, !0, "updated");
    }), scheduler.attachEvent("onClearAll", function () {
      e._in_progress = {}, e._invalid = {}, e.updatedRows = [], e._waitMode = 0;
    }), e._objToJson = function (t, i, r) {
      r = r || "", i = i || {};

      for (var s in t) {
        0 !== s.indexOf("_") && (t[s] && t[s].getUTCFullYear ? i[r + s] = this.obj.templates.xml_format(t[s]) : t[s] && "object" == _typeof(t[s]) ? e._objToJson(t[s], i, r + s + ".") : i[r + s] = t[s]);
      }

      return i;
    }, e._getRowData = function (e, t) {
      var i = this.obj.getEvent(e);
      return this._objToJson(i);
    }, e._clearUpdateFlag = function () {}, e.attachEvent("insertCallback", scheduler._update_callback), e.attachEvent("updateCallback", scheduler._update_callback), e.attachEvent("deleteCallback", function (e, t) {
      this.obj.getEvent(t) ? (this.obj.setUserData(t, this.action_param, "true_deleted"), this.obj.deleteEvent(t)) : this.obj._add_rec_marker && this.obj._update_callback(e, t);
    });
  }, scheduler._validId = function (e) {
    return !0;
  }, scheduler.setUserData = function (e, t, i) {
    if (e) {
      var r = this.getEvent(e);
      r && (r[t] = i);
    } else this._userdata[t] = i;
  }, scheduler.getUserData = function (e, t) {
    if (e) {
      var i = this.getEvent(e);
      return i ? i[t] : null;
    }

    return this._userdata[t];
  }, scheduler._set_event_text_style = function (e, t) {
    if (scheduler.getEvent(e)) {
      this.for_rendered(e, function (e) {
        e.style.cssText += ";" + t;
      });
      var i = this.getEvent(e);
      i._text_style = t, this.event_updated(i);
    }
  }, scheduler._update_callback = function (e, t) {
    var i = scheduler._xmlNodeToJSON(e.firstChild);

    "none" == i.rec_type && (i.rec_pattern = "none"), i.text = i.text || i._tagvalue, i.start_date = scheduler.templates.xml_date(i.start_date), i.end_date = scheduler.templates.xml_date(i.end_date), scheduler.addEvent(i), scheduler._add_rec_marker && scheduler.setCurrentView();
  }, scheduler._skin_settings = {
    fix_tab_position: [1, 0],
    use_select_menu_space: [1, 0],
    wide_form: [1, 0],
    hour_size_px: [44, 42],
    displayed_event_color: ["#ff4a4a", "ffc5ab"],
    displayed_event_text_color: ["#ffef80", "7e2727"]
  }, scheduler._skin_xy = {
    lightbox_additional_height: [90, 50],
    nav_height: [59, 22],
    bar_height: [24, 20]
  }, scheduler._is_material_skin = function () {
    return (scheduler.skin + "").indexOf("material") > -1;
  }, scheduler._border_box_bvents = function () {
    return scheduler._is_material_skin();
  }, scheduler._configure = function (e, t, i) {
    for (var r in t) {
      "undefined" == typeof e[r] && (e[r] = t[r][i]);
    }
  }, scheduler._skin_init = function () {
    if (!scheduler.skin) for (var e = document.getElementsByTagName("link"), t = 0; t < e.length; t++) {
      var i = e[t].href.match("dhtmlxscheduler_([a-z]+).css");

      if (i) {
        scheduler.skin = i[1];
        break;
      }
    }
    var r = 0;

    if (!scheduler.skin || "classic" !== scheduler.skin && "glossy" !== scheduler.skin || (r = 1), scheduler._is_material_skin()) {
      var s = scheduler.config.buttons_left.$inital,
          a = scheduler.config.buttons_right.$inital;

      if (s && scheduler.config.buttons_left.slice().join() == s && a && scheduler.config.buttons_right.slice().join() == a) {
        var n = scheduler.config.buttons_left.slice();
        scheduler.config.buttons_left = scheduler.config.buttons_right.slice(), scheduler.config.buttons_right = n;
      }

      scheduler.xy.event_header_height = 18, scheduler.xy.menu_width = 25, scheduler.xy.week_agenda_scale_height = 35, scheduler.xy.map_icon_width = 38, scheduler._lightbox_controls.defaults.textarea.height = 64, scheduler._lightbox_controls.defaults.time.height = "auto";
    }

    if (this._configure(scheduler.config, scheduler._skin_settings, r), this._configure(scheduler.xy, scheduler._skin_xy, r), "flat" === scheduler.skin && (scheduler.xy.scale_height = 35, scheduler.templates.hour_scale = function (e) {
      var t = e.getMinutes();
      t = 10 > t ? "0" + t : t;
      var i = "<span class='dhx_scale_h'>" + e.getHours() + "</span><span class='dhx_scale_m'>&nbsp;" + t + "</span>";
      return i;
    }), !r) {
      var d = scheduler.config.minicalendar;
      d && (d.padding = 14), scheduler.templates.event_bar_date = function (e, t, i) {
        return "• <b>" + scheduler.templates.event_date(e) + "</b> ";
      }, scheduler.attachEvent("onTemplatesReady", function () {
        var e = scheduler.date.date_to_str("%d");
        scheduler.templates._old_month_day || (scheduler.templates._old_month_day = scheduler.templates.month_day);
        var t = scheduler.templates._old_month_day;

        if (scheduler.templates.month_day = function (i) {
          if ("month" == this._mode) {
            var r = e(i);
            return 1 == i.getDate() && (r = scheduler.locale.date.month_full[i.getMonth()] + " " + r), +i == +scheduler.date.date_part(this._currentDate()) && (r = scheduler.locale.labels.dhx_cal_today_button + " " + r), r;
          }

          return t.call(this, i);
        }, scheduler.config.fix_tab_position) {
          var i = scheduler._els.dhx_cal_navline[0].getElementsByTagName("div"),
              r = null,
              s = 211,
              a = [14, 75, 136],
              n = 14;

          scheduler._is_material_skin() && (a = [16, 103, 192], s = 294, n = -1);

          for (var d = 0; d < i.length; d++) {
            var l = i[d],
                o = l.getAttribute("name");

            if (o) {
              switch (l.style.right = "auto", o) {
                case "day_tab":
                  l.style.left = a[0] + "px", l.className += " dhx_cal_tab_first";
                  break;

                case "week_tab":
                  l.style.left = a[1] + "px";
                  break;

                case "month_tab":
                  l.style.left = a[2] + "px", l.className += " dhx_cal_tab_last";
                  break;

                default:
                  l.style.left = s + "px", l.className += " dhx_cal_tab_standalone", s = s + n + l.offsetWidth;
              }

              l.className += " " + o;
            } else 0 === (l.className || "").indexOf("dhx_minical_icon") && l.parentNode == scheduler._els.dhx_cal_navline[0] && (r = l);
          }

          r && (r.style.left = s + "px");
        }
      }), scheduler._skin_init = function () {};
    }
  }, __webpack_provided_window_dot_jQuery && !function (e) {
    var t = 0,
        i = [];

    e.fn.dhx_scheduler = function (r) {
      if ("string" != typeof r) {
        var s = [];
        return this.each(function () {
          if (this && this.getAttribute) if (this.getAttribute("dhxscheduler")) s.push(window[this.getAttribute("dhxscheduler")]);else {
            var e = "scheduler";
            t && (e = "scheduler" + (t + 1), window[e] = Scheduler.getSchedulerInstance());
            var i = window[e];
            this.setAttribute("dhxscheduler", e);

            for (var a in r) {
              "data" != a && (i.config[a] = r[a]);
            }

            this.getElementsByTagName("div").length || (this.innerHTML = '<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div><div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div></div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>', this.className += " dhx_cal_container"), i.init(this, i.config.date, i.config.mode), r.data && i.parse(r.data), s.push(i), t++;
          }
        }), 1 === s.length ? s[0] : s;
      }

      return i[r] ? i[r].apply(this, []) : void e.error("Method " + r + " does not exist on jQuery.dhx_scheduler");
    };
  }(jQuery), function () {
    function e(e, t, i) {
      t && (e._date = t), i && (e._mode = i);
    }

    var t = scheduler.setCurrentView,
        i = scheduler.updateView,
        r = null,
        s = null,
        a = function a(t, _a2) {
      var n = this;
      window.clearTimeout(s), window.clearTimeout(r);
      var d = n._date,
          l = n._mode;
      e(this, t, _a2), s = setTimeout(function () {
        return n.callEvent("onBeforeViewChange", [l, d, _a2 || n._mode, t || n._date]) ? (i.call(n, t, _a2), n.callEvent("onViewChange", [n._mode, n._date]), window.clearTimeout(r), void (s = 0)) : void e(n, d, l);
      }, scheduler.config.delay_render);
    },
        n = function n(t, a) {
      var n = this,
          d = arguments;
      e(this, t, a), window.clearTimeout(r), r = setTimeout(function () {
        s || i.apply(n, d);
      }, scheduler.config.delay_render);
    };

    scheduler.attachEvent("onSchedulerReady", function () {
      scheduler.config.delay_render ? (scheduler.setCurrentView = a, scheduler.updateView = n) : (scheduler.setCurrentView = t, scheduler.updateView = i);
    });
  }();

  for (var i = 0; i < Scheduler._schedulerPlugins.length; i++) {
    Scheduler._schedulerPlugins[i](scheduler);
  }

  return scheduler._internal_id = Scheduler._seed++, Scheduler.$syncFactory && Scheduler.$syncFactory(scheduler), scheduler;
}, window.scheduler = Scheduler.getSchedulerInstance(), dhtmlx && dhtmlx.attaches && (dhtmlx.attaches.attachScheduler = function (e, t, i, r) {
  var i = i || '<div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>',
      s = document.createElement("DIV");
  return s.id = "dhxSchedObj_" + this._genStr(12), s.innerHTML = '<div id="' + s.id + '" class="dhx_cal_container" style="width:100%; height:100%;"><div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div>' + i + '</div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div></div>', document.body.appendChild(s.firstChild), this.attachObject(s.id, !1, !0), this.vs[this.av].sched = r, this.vs[this.av].schedId = s.id, r.setSizes = r.updateView, r.destructor = function () {}, r.init(s.id, e, t), this.vs[this._viewRestore()].sched;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ"), __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "szT3Chqo":
/*!**************************************************!*\
  !*** ./resources/js/_frontend/modules/Filter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/_frontend/core/utils */ "Kdr+IcO5");
BB.define('Modules.Filter');

/* harmony default export */ __webpack_exports__["default"] = (BB.Modules.Filter = function () {
  var filter, overlay, catalogInner, widthWindow, newWidthWindow;

  function _init(element) {
    filter = element.querySelector('.catalog-filter');

    if (filter) {
      catalogInner = element.querySelector('.catalog__inner');
      overlay = document.querySelector('.js-overlay');

      if (true) {
        if (!overlay) {
          console.error('Для модуля Filter требуется DOM элемент overlay');
        }
      }

      widthWindow = document.documentElement.offsetWidth;

      _filterControlToResize();

      _addEventListener();
    }
  }

  function _addEventListener() {
    document.querySelectorAll('.js-mobile-filter--open').forEach(function (block) {
      block.removeEventListener('click', _filterOpen);
      block.addEventListener('click', _filterOpen);
    });
    document.querySelectorAll('.js-catalog-filter--close').forEach(function (block) {
      block.removeEventListener('click', _filterClose);
      block.addEventListener('click', _filterClose);
    });
    window.removeEventListener('resize', _filterControlToResize, false);
    window.addEventListener('resize', _filterControlToResize, false);
  }

  function _filterOpen(e) {
    _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__["default"].documentBlockControl('open', '.catalog-filter', e.target.closest('.js-mobile-filter--open'));
    overlay.classList.add('is-visible');
  }

  function _filterClose() {
    _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__["default"].documentBlockControl('close');
    overlay.classList.remove('is-visible');
  }

  function _filterControlToResize() {
    if (filter.classList.contains('is-open')) {
      _js_frontend_core_utils__WEBPACK_IMPORTED_MODULE_0__["default"].documentBlockControl('close');
      overlay.classList.remove('is-visible');
    }

    newWidthWindow = document.documentElement.offsetWidth;

    if (widthWindow != newWidthWindow) {
      if (widthWindow >= 480 && newWidthWindow <= 480) {
        overlay.after(filter);
        widthWindow = document.documentElement.offsetWidth;
      } else {
        if (widthWindow <= 480 && newWidthWindow >= 480) {
          catalogInner.prepend(filter);
          filter.removeAttribute('inert');
          filter.removeAttribute('tabindex');
          widthWindow = document.documentElement.offsetWidth;
        }
      }
    } else {
      if (widthWindow <= 480 && newWidthWindow <= 480) {
        overlay.after(filter);
      }
    }

    _addEventListener();
  } // function _toggle(e) {
  //     let OPEN_CLASS = 'is-open';
  //     let $catalogFilter = $(document).find('.catalog-filter');
  //     if (!this.open) {
  //         $catalogFilter.addClass(OPEN_CLASS);
  //         this.open = true;
  //         if ($(window).width() > 480) {
  //             $overlay.addClass('is-visible overlay--filter');
  //         }
  //     } else {
  //         $html.removeAttr('style')
  //         $overlay.removeClass('is-visible overlay--filter');
  //         $catalogFilter.removeClass(OPEN_CLASS);
  //         this.open = false;
  //     }
  //     e.preventDefault();
  // }


  return {
    init: _init
  };
}());

/***/ }),

/***/ "v3ZKScbb":
/*!*******************************************************!*\
  !*** ./resources/js/_frontend/components/Dropdown.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* html example
<div
    class="bb-dropdown bb-dropdown--small bb-dropdown--transform bb-dropdown--hover js-bb-dropdown"
    data-dropdown-position="right"
>
	<div class="bb-dropdown__list">
	</div>
</div>
*/
BB.define('Component.Dropdown');
/* harmony default export */ __webpack_exports__["default"] = (BB.Component.Dropdown = function () {
  var dropdown, list, _this, wrapper, overlay;

  var ACTIVE_CLASS = 'is-active';
  var VISIBLE_CLASS = 'is-visible';
  var DROPDOWN_OWERLAY_CLASS = 'overlay--dropdown';
  var open = false;
  var btnDropdownClose = "<button class=\"btn-icon btn-icon--close js-bb-dropdown--close\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"icon icon-close\" viewBox=\"0 0 512 512\"><path d=\"M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249\n        C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306\n        C514.019,27.23,514.019,14.135,505.943,6.058z\"/>\n            <path d=\"M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636\n        c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z\"/></svg></button>";
  var styleTransformMenu = "display: block; position: fixed; top: auto; bottom: 10px; left: 10px; right: 10px; z-index: 9999";
  var styleTransformInfo = "display: block; position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999";
  /**
   * Функция инициализации dropdown
   * @param node DOM элемен в котором нужно инициализировать dropdown
   */

  function _init(node) {
    var element;

    if (typeof node == 'undefined') {
      element = document.body;
    } else {
      element = node;
    } // dropdown = element.querySelectorAll('.js-bb-dropdown');


    wrapper = document.querySelector('.wrapper');
    overlay = document.querySelector('.js-overlay');

    _initSetPosition(element);

    _addEventListener(element);

    _transform(element, _render);
  }
  /**
   * Метод устанавливающий позицию отображения dropdown
   * @param element DOM елемент содержащий dropdown у которого нужно установить позицию отображения
   */


  function _initSetPosition(element) {
    element.querySelectorAll('.js-bb-dropdown').forEach(function (block) {
      _setPosition(block);
      /**
       * Проверка и установка слушателей наведения
       */


      if (block.classList.contains('bb-dropdown--hover') && document.documentElement.offsetWidth > 768) {
        block.removeEventListener('mouseover', _mouseoverDropdown);
        block.addEventListener('mouseover', _mouseoverDropdown);
        block.removeEventListener('mouseout', _mouseoutDropdown);
        block.addEventListener('mouseout', _mouseoutDropdown);
      } else {
        block.classList.remove('bb-dropdown--hover');
      }
    });
  }
  /**
   * Метод для события mouseover на dropdown
   * @param e event события mouseover
   */


  function _mouseoverDropdown(e) {
    var dropdownHover = e.target.closest('.js-bb-dropdown');

    _setPosition(dropdownHover, function () {
      dropdownHover.classList.add('hover');
    });

    dropdownHover.querySelectorAll('.info-block__item').forEach(function (item) {
      item.removeEventListener('click', _close);
      item.addEventListener('click', _close);
    });
  }
  /**
   * Метод для события mouseout на dropdown
   * @param e event события mouseout
   */


  function _mouseoutDropdown(e) {
    e.target.closest('.js-bb-dropdown').classList.remove('hover');
  }
  /**
   * Метод добавления и отрисовки мобильного dropdown
   * @param arg Строка с уникальным селектором или DOM элемент где нужно произвести рендер
   */


  function _render(arg) {
    var dropdown;
    var element;

    if (typeof arg == 'string') {
      element = document.querySelector(arg);
    }

    {
      element = arg;
    }

    if (element.classList) {
      if (document.documentElement.offsetWidth <= 768) {
        if (element.classList.contains('.js-bb-dropdown.bb-dropdown--transform')) {
          dropdown = element;
          var btnClose = '<button class="bb-dropdown__close js-bb-dropdown--close">Закрыть</button>';
          var dropdownOverlay = '<div class="bb-dropdown__overlay">';
          var dropdownList = dropdown.querySelector('.bb-dropdown__list');
          dropdownList.querySelectorAll('.info-block__icon').forEach(function (block) {
            block.remove();
          });
          dropdownList.insertAdjacentHTML('beforeEnd', btnClose);
          dropdownList.insertAdjacentHTML('afterEnd', dropdownOverlay);
        } else {
          dropdown = element.querySelectorAll('.js-bb-dropdown.bb-dropdown--transform');
          dropdown.forEach(function (block) {
            var btnClose = '<button class="bb-dropdown__close js-bb-dropdown--close">Закрыть</button>';
            var dropdownOverlay = '<div class="bb-dropdown__overlay">';
            var dropdownList = block.querySelector('.bb-dropdown__list');
            dropdownList.querySelectorAll('.info-block__icon').forEach(function (block) {
              block.remove();
            });
            dropdownList.insertAdjacentHTML('beforeEnd', btnClose);
            dropdownList.insertAdjacentHTML('afterEnd', dropdownOverlay);
          });
        }
      }
    } else {
      if (true) {
        console.error('Ошибка аргумента переданом в Dropdown.render(). Передаваемый параметр должен быть DOM елементом или строкой с УНИКАЛЬНЫМ селектором');
      }

      return;
    }
  }
  /**
   * Эвенты кликов по основным элементам
   * @param element DOM элемент в котором нужно проинициальзировать прослушку событий dropdown
   */


  function _addEventListener(element) {
    element.querySelectorAll('.js-bb-dropdown').forEach(function (block) {
      block.removeEventListener('click', _dropdownOpen);
      block.addEventListener('click', _dropdownOpen);
    }); //Скрываем дропдаун по клику в не блока
    // let link = document.querySelectorAll(
    //     '.bb-dropdown__list .info-block__item, .bb-dropdown__list .info-block__link'
    // );
    // link.forEach(block => {
    //     block.removeEventListener('click', _closeHard);
    //     block.addEventListener('click', _closeHard);
    // });
    //Скрываем dropdown по клику на кнопку

    element.querySelectorAll('.js-bb-dropdown--close').forEach(function (block) {
      block.removeEventListener('click', _close);
      block.addEventListener('click', _close);
    });
  }
  /**
   * Метод закрытия dropdown по клику вне dropdown
   * @param e event
   */


  function _dropdownClickOutClose(e) {
    if (e.target.closest('.js-bb-dropdown')) return;
    document.querySelectorAll('.js-bb-dropdown.is-active').forEach(function (block) {
      block.classList.remove(ACTIVE_CLASS);
    });
    document.removeEventListener('click', _dropdownClickOutClose);
    open = false;
  }
  /**
   * Метод закрытия dropdown по клику на overlay
   * @param e event
   */


  function _overlayClickDropdownClose(e) {
    open = false;
    document.querySelectorAll('.js-bb-dropdown.is-active').forEach(function (block) {
      block.classList.remove(ACTIVE_CLASS);
    });

    _close(e);
  }
  /**
   * Метод открытия dropdown
   * @param e event
   */


  function _dropdownOpen(e) {
    // e.stopPropagation()
    _this = e.target.closest('.js-bb-dropdown');
    list = _this.querySelector('.bb-dropdown__list');
    document.querySelectorAll('.js-bb-dropdown.is-active').forEach(function (block) {
      block.classList.remove(ACTIVE_CLASS);
    });

    if (document.documentElement.offsetWidth > 768) {
      _toggle(_this);
    } else {
      if (!_this.classList.contains('bb-dropdown--another')) {
        wrapper.setAttribute('inert', '');
        wrapper.setAttribute('tabindex', '-1');
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';
        open = true; //Анимация выпадающего списка

        if (_this.classList.contains('bb-dropdown--transform')) {
          list.style.cssText = styleTransformMenu;
          list.classList.add('_transform');
        } else {
          list.insertAdjacentHTML('afterBegin', btnDropdownClose);
          list.style.cssText = styleTransformInfo;
          list.classList.add('_transform_info');
        }

        wrapper.after(list);
        var link = list.querySelectorAll('.bb-dropdown__list .info-block__item, .bb-dropdown__list .info-block__link');
        link.forEach(function (block) {
          block.removeEventListener('click', _close);
          block.addEventListener('click', _close);
        });
        list.querySelectorAll('.js-bb-dropdown--close').forEach(function (block) {
          block.removeEventListener('click', _close);
          block.addEventListener('click', _close);
        });
        overlay.classList.add(DROPDOWN_OWERLAY_CLASS);
        setTimeout(function () {
          list.classList.add(VISIBLE_CLASS);
        }, 200);
      } else {
        _toggle(_this);
      }
    }

    if (_this.classList.contains('request-info')) {
      if (document.documentElement.offsetWidth <= 480) {
        if (!open) {
          wrapper.setAttribute('inert', '');
          wrapper.setAttribute('tabindex', '-1');
          document.documentElement.style.overflowY = 'hidden';
          document.body.style.overflowY = 'hidden';
          open = true;
        } else {
          wrapper.removeAttribute('inert');
          wrapper.removeAttribute('tabindex');
          wrapper.focus();
          document.body.removeAttribute('style');
          document.documentElement.removeAttribute('style');
          open = false;
        }
      }
    }

    document.querySelectorAll('.overlay--dropdown').forEach(function (block) {
      block.removeEventListener('click', _overlayClickDropdownClose);
      block.addEventListener('click', _overlayClickDropdownClose);
    });
    document.removeEventListener('click', _dropdownClickOutClose);
    document.addEventListener('click', _dropdownClickOutClose);
    document.addEventListener('scroll', _close);
  }
  /**
   * Метод трансформации dropdown под мобильные устройства
   * @param element должени быть DOM элемент в котором находится dropdown
   * @param callback (Не обязательный параметр) Функция которая выполнится после завершения
   */


  function _transform(element, callback) {
    var dropdown = element.querySelectorAll('.js-bb-dropdown[data-dropdown-transform]');

    if (document.documentElement.offsetWidth <= 480) {
      dropdown.forEach(function (block) {
        // if (block.hasAttribute('data-dropdown-transform')) {
        var list = block.querySelector('.bb-dropdown__list');
        block.classList.remove('bb-dropdown--another');
        block.classList.add('bb-dropdown--transform');
        list.querySelectorAll('ul').forEach(function (el) {
          el.classList.add('info-block__list');
        });
        list.querySelectorAll('li').forEach(function (el) {
          el.classList.add('info-block__item');
        });
        list.querySelectorAll('a').forEach(function (el) {
          el.classList.add('info-block__link');
        }); // }
      });
    }

    if (typeof callback == 'function') callback(element);
  }
  /**
   * Метод установки позтции открытого dropdown
   * @param element должени быть элемент dropdown в виде DOM элемента
   * @param callback (Не обязательный параметр) Функция которая выполнится после завершения
   */


  function _setPosition(element, callback) {
    var screenWidth = document.documentElement.offsetWidth;
    var screenHeight = document.documentElement.offsetHeight;
    var pos = element.getBoundingClientRect();

    if (pos.left > screenWidth / 2) {
      if (pos.top > screenHeight / 2) {
        element.setAttribute('data-dropdown-position', 'top-right');
      } else {
        element.setAttribute('data-dropdown-position', 'right');
      }
    } else if (pos.top > screenHeight / 2) {
      if (pos.left > screenWidth / 2) {
        element.setAttribute('data-dropdown-position', 'top-right');
      } else {
        element.setAttribute('data-dropdown-position', 'top');
      }
    } else {
      element.removeAttribute('data-dropdown-position');
    }

    if (typeof callback == 'function') callback();
  }
  /**
   *  Метод переключатель открытия и закрытия dropdown
   * @param el должени быть элемент dropdown в виде DOM элемента
   */


  function _toggle(el) {
    var link = list.querySelectorAll('.bb-dropdown__list .info-block__item, .bb-dropdown__list .info-block__link');

    if (!el.classList.contains(ACTIVE_CLASS)) {
      el.classList.add(ACTIVE_CLASS);
      link.forEach(function (block) {
        block.removeEventListener('click', _close);
        block.addEventListener('click', _close);
      });
      open = true;
    } else {
      el.classList.remove(ACTIVE_CLASS);
      link.forEach(function (block) {
        block.removeEventListener('click', _close);
      });
      open = false;
    }
  }
  /**
   * Метод закрытия dropdown
   */


  function _close(e) {
    if (e.target.closest) {
      var dropdownHover = e.target.closest('.bb-dropdown--hover');

      if (dropdownHover) {
        dropdownHover.classList.remove('hover');
        dropdownHover.classList.remove('is-active');
      }
    }

    document.removeEventListener('scroll', _close);
    document.removeEventListener('click', _dropdownClickOutClose);

    if (!BB.Utils.ArrayActiveBlock.length) {
      wrapper.removeAttribute('inert');
      wrapper.removeAttribute('tabindex');
      document.body.removeAttribute('style');
      document.documentElement.removeAttribute('style');
    }

    setTimeout(function () {
      list.classList.remove(VISIBLE_CLASS);

      _this.classList.remove(ACTIVE_CLASS);

      wrapper.focus();
    }, 100);
    setTimeout(function () {
      list.removeAttribute('style');
      list.classList.remove('_transform');
      list.classList.remove('_transform_info');

      _this.append(list);

      document.querySelectorAll('.js-overlay').forEach(function (item) {
        item.classList.remove(DROPDOWN_OWERLAY_CLASS);
        item.removeEventListener('click', _overlayClickDropdownClose);
      });
    }, 300);
  }
  /**
   * Возвращение объекта с методами для глобального использования
   */


  return {
    init: _init,
    render: _render,
    transform: _transform,
    addEvent: _addEventListener,
    close: _close
  };
}());

/***/ }),

/***/ "vCRPBJOi":
/*!*************************************************!*\
  !*** ./app/Modules/Common/Assets/js/Helpers.js ***!
  \*************************************************/
/*! exports provided: bus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bus", function() { return bus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helpers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1ebC6");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "oCYnbi0F");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

 // import axios from 'axios';

var bus = new vue__WEBPACK_IMPORTED_MODULE_1__["default"](); // let baseUrl = window.location.origin;

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, [{
    key: "addOrRemoveFromCart",
    value: function addOrRemoveFromCart(product, count, typeName) {
      var price = product.salePrice < product.price ? product.salePrice : product.price;
      var addToCart = {
        event: 'addToCart',
        ecommerce: {
          currencyCode: 'RUB'
        }
      };
      var products = {
        products: [{
          name: product.name,
          id: product.productID,
          price: price,
          category: product.groups.category.name,
          variant: product.groups.name,
          quantity: count
        }]
      };

      if (typeName === 'add') {
        addToCart.ecommerce['add'] = products;
      } else {
        addToCart.ecommerce['remove'] = products;
      }

      window.dataLayer.push(addToCart);
    }
  }, {
    key: "buttonOff",
    value: function buttonOff(entity) {
      entity.addClass('is-loading').attr('disabled', '');
    }
  }, {
    key: "buttonOn",
    value: function buttonOn(entity) {
      entity.removeClass('is-loading is-disabled').removeAttr('disabled');
    }
  }, {
    key: "byString",
    value: function byString(object, route, value) {
      var categoryName = '';

      if (value !== null) {
        categoryName = value;
      }

      route = route.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

      route = route.replace(/^\./, ''); // strip a leading dot

      var a = route.split('.');

      for (var i = 0, n = a.length; i < n; ++i) {
        var key = a[i];

        if (key in object) {
          if (object[key] !== null) {
            object = object[key];
          } else {
            return categoryName;
          }
        } else {
          return categoryName;
        }
      }

      return object;
    }
  }, {
    key: "checkForExistence",
    value: function checkForExistence(object, route) {
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var categoryName = '';

      if (value !== null) {
        categoryName = value;
      }

      if (this.byString(object, route) !== null) {
        categoryName = this.byString(object, route, value);
      }

      return categoryName;
    }
  }, {
    key: "checkOriginal",
    value: function checkOriginal(size) {
      if (typeof size === 'undefined') {
        return '';
      } else {
        return '_' + size;
      }
    }
  }, {
    key: "checkVisibilityCrm",
    value: function checkVisibilityCrm(el) {
      var dTop = $(window).scrollTop(),
          dBot = dTop + $(window).height(),
          elTop = $(el).offset().top - 350;
      return elTop <= dBot && elTop >= dTop;
    }
  }, {
    key: "declOfNum",
    value: function declOfNum(number, titles) {
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    }
  }, {
    key: "getImageInDatabase",
    value: function getImageInDatabase(url, object, size) {
      var uniqueValue;
      size = this.checkOriginal(size);

      if (object.length) {
        uniqueValue = object[0].uniqueValue;
      } else {
        uniqueValue = object.uniqueValue;
      }

      var path = url + '/' + uniqueValue.substr(0, 2) + '/' + uniqueValue.substr(2, 2) + '/' + uniqueValue + '/' + object.name + size + '.' + object.extension;
      return path;
    }
  }, {
    key: "getOptionsOrder",
    value: function getOptionsOrder() {
      var options = [{
        text: 'Новый заказ',
        value: '1',
        status: 'green'
      }, {
        text: 'В работе',
        value: '2',
        status: 'yellow'
      }, {
        text: 'Заказ отменен',
        value: '3',
        status: 'red'
      }, {
        text: 'Заказ отправлен',
        value: '4',
        status: 'gray'
      }];
      return options;
    }
  }, {
    key: "getPaymentStatus",
    value: function getPaymentStatus() {
      var options = [{
        text: 'Не оплачено',
        value: '1',
        color: '#ff9300'
      }, {
        text: 'Оплачен частично',
        value: '2',
        color: '#fe0061'
      }, {
        text: 'Оплачен',
        value: '3',
        color: '#00b341'
      }];
      return options;
    }
  }, {
    key: "getPriceOrder",
    value: function getPriceOrder(order) {
      var price = 0;

      for (var i = 0; i < order.products.length; i++) {
        price = price + order.products[i].price;
      }

      return price;
    }
    /**
     * Get data using fetch
     * @param {url} string
     * @param {options} object
     * @returns {JSON}
     */

  }, {
    key: "makeRequest",
    value: function () {
      var _makeRequest = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, options) {
        var response, text;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(url, options);

              case 2:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return response.text();

              case 6:
                text = _context.sent;
                throw new Error(text);

              case 8:
                return _context.abrupt("return", response.json());

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function makeRequest(_x, _x2) {
        return _makeRequest.apply(this, arguments);
      }

      return makeRequest;
    }()
  }, {
    key: "numberFormat",
    value: function numberFormat(number, decimals, dec_point, thousands_sep) {
      // Strip all characters but numerical ones.
      number = (number + '').replace(/[^0-9+\-Ee.]/g, '');

      var n = !isFinite(+number) ? 0 : +number,
          prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
          sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
          dec = typeof dec_point === 'undefined' ? '.' : dec_point,
          s = '',
          toFixedFix = function toFixedFix(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }

      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }

      return s.join(dec);
    }
  }, {
    key: "parseInputText",
    value: function parseInputText(oldString) {
      var newString = '';
      var lengthOldString = oldString.length;

      if (oldString) {
        for (var i = 0; i < lengthOldString; i++) {
          var codeChar = oldString.charCodeAt(i);

          if (codeChar === 10 || codeChar === 13 || codeChar > 31 && codeChar < 127 || codeChar === 1025 || codeChar > 1039 && codeChar < 1104 || codeChar === 1105) {
            newString += oldString[i];
          }
        }

        if (!(newString.trim() === '')) {
          return newString;
        }
      }

      return null;
    }
  }, {
    key: "scrollAddContent",
    value: function scrollAddContent() {
      var el;

      if ($(window).width() > 480) {
        el = document;
      } else {
        el = '.wrapper__inner';
      }

      return el;
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }, {
    key: "validatePhone",
    value: function validatePhone(phone) {
      // считаем кол-во чисел в строке. Должно быть 10
      var strPhones = phone;
      var number = strPhones.replace(/\D+/g, '').length;

      if (number === 11) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Helpers;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "vlsk3KQ4":
/*!**************************************************************!*\
  !*** ./resources/libs/calendar/ext/dhtmlxscheduler_units.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/*
@license
dhtmlxScheduler v.5.0.0 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/


Scheduler.plugin(function (e) {
  e._props = {}, e.createUnitsView = function (t, a, i, n, r, s, o) {
    function d() {
      l || (l = e.xy.scale_height, e.xy.scale_height = 2 * e.xy.scale_height);
    }

    function _() {
      l && (e.xy.scale_height /= 2, l = !1);
    }

    "object" == _typeof(t) && (i = t.list, a = t.property, n = t.size || 0, r = t.step || 1, s = t.skip_incorrect, o = t.days || 1, t = t.name), e._props[t] = {
      map_to: a,
      options: i,
      step: r,
      position: 0,
      days: o
    }, n > e._props[t].options.length && (e._props[t]._original_size = n, n = 0), e._props[t].size = n, e._props[t].skip_incorrect = s || !1, e.date[t + "_start"] = e.date.day_start, e.templates[t + "_date"] = function (a, i) {
      var n = e._props[t];
      return n.days > 1 ? e.templates.week_date(a, i) : e.templates.day_date(a);
    }, e._get_unit_index = function (t, a) {
      var i = t.position || 0,
          n = Math.round((e._correct_shift(+a, 1) - +e._min_date) / 864e5),
          r = t.options.length;
      return n >= r && (n %= r), i + n;
    }, e.templates[t + "_scale_text"] = function (e, t, a) {
      return a.css ? "<span class='" + a.css + "'>" + t + "</span>" : t;
    }, e.templates[t + "_scale_date"] = function (a) {
      var i = e._props[t],
          n = i.options;
      if (!n.length) return "";

      var r = e._get_unit_index(i, a),
          s = n[r];

      return e.templates[t + "_scale_text"](s.key, s.label, s);
    }, e.templates[t + "_second_scale_date"] = function (t) {
      return e.templates.week_scale_date(t);
    }, e.date["add_" + t] = function (a, i) {
      return e.date.add(a, i * e._props[t].days, "day");
    }, e.date["get_" + t + "_end"] = function (a) {
      return e.date.add(a, (e._props[t].size || e._props[t].options.length) * e._props[t].days, "day");
    }, e.attachEvent("onOptionsLoad", function () {
      for (var a = e._props[t], i = a.order = {}, n = a.options, r = 0; r < n.length; r++) {
        i[n[r].key] = r;
      }

      a._original_size && 0 === a.size && (a.size = a._original_size, delete a._original_size), a.size > n.length ? (a._original_size = a.size, a.position = 0, a.size = 0) : a.size = a._original_size || a.size, e._date && e._mode == t && e.setCurrentView(e._date, e._mode);
    }), e["mouse_" + t] = function (t) {
      var a = e._props[this._mode];

      if (a) {
        if (t = this._week_indexes_from_pos(t), this._drag_event || (this._drag_event = {}), this._drag_id && this._drag_mode && (this._drag_event._dhx_changed = !0), this._drag_mode && "new-size" == this._drag_mode) {
          var i = e._get_event_sday(e._events[e._drag_id]);

          Math.floor(t.x / a.options.length) != Math.floor(i / a.options.length) && (t.x = i);
        }

        var n = t.x % a.options.length,
            r = Math.min(n + a.position, a.options.length - 1);
        t.section = (a.options[r] || {}).key, t.x = Math.floor(t.x / a.options.length);
        var s = this.getEvent(this._drag_id);

        this._update_unit_section({
          view: a,
          event: s,
          pos: t
        });
      }

      return t.force_redraw = !0, t;
    };
    var l = !1;
    e[t + "_view"] = function (t) {
      var a = e._props[e._mode];
      t ? (a && a.days > 1 ? d() : _(), e._reset_scale()) : _();
    }, e.callEvent("onOptionsLoad", []);
  }, e._update_unit_section = function (e) {
    var t = e.view,
        a = e.event,
        i = e.pos;
    a && (a[t.map_to] = i.section);
  }, e.scrollUnit = function (t) {
    var a = e._props[this._mode];
    a && (a.position = Math.min(Math.max(0, a.position + t), a.options.length - a.size), this.setCurrentView());
  }, function () {
    var t = function t(_t) {
      var a = e._props[e._mode];

      if (a && a.order && a.skip_incorrect) {
        for (var i = [], n = 0; n < _t.length; n++) {
          "undefined" != typeof a.order[_t[n][a.map_to]] && i.push(_t[n]);
        }

        _t.splice(0, _t.length), _t.push.apply(_t, i);
      }

      return _t;
    },
        a = e._pre_render_events_table;

    e._pre_render_events_table = function (e, i) {
      return e = t(e), a.apply(this, [e, i]);
    };

    var i = e._pre_render_events_line;

    e._pre_render_events_line = function (e, a) {
      return e = t(e), i.apply(this, [e, a]);
    };

    var n = function n(t, a) {
      if (t && "undefined" == typeof t.order[a[t.map_to]]) {
        var i = e,
            n = 864e5,
            r = Math.floor((a.end_date - i._min_date) / n);
        return t.options.length && (a[t.map_to] = t.options[Math.min(r + t.position, t.options.length - 1)].key), !0;
      }
    },
        r = e.is_visible_events;

    e.is_visible_events = function (t) {
      var a = r.apply(this, arguments);

      if (a) {
        var i = e._props[this._mode];

        if (i && i.size) {
          var n = i.order[t[i.map_to]];
          if (n < i.position || n >= i.size + i.position) return !1;
        }
      }

      return a;
    };

    var s = e._process_ignores;

    e._process_ignores = function (t, a, i, n, r) {
      if (!e._props[this._mode]) return void s.call(this, t, a, i, n, r);
      this._ignores = {}, this._ignores_detected = 0;
      var o = e["ignore_" + this._mode];

      if (o) {
        var d = e._props && e._props[this._mode] ? e._props[this._mode].size || e._props[this._mode].options.length : 1;
        a /= d;

        for (var _ = new Date(t), l = 0; a > l; l++) {
          if (o(_)) for (var c = l * d, h = (l + 1) * d, u = c; h > u; u++) {
            this._ignores_detected += 1, this._ignores[u] = !0, r && a++;
          }
          _ = e.date.add(_, n, i), e.date[i + "_start"] && (_ = e.date[i + "_start"](_));
        }
      }
    };

    var o = e._reset_scale;

    e._reset_scale = function () {
      var t = e._props[this._mode];
      t && (t.size && t.position && t.size + t.position > t.options.length ? t.position = Math.max(0, t.options.length - t.size) : t.size || (t.position = 0));
      var a = o.apply(this, arguments);

      if (t) {
        this._max_date = this.date.add(this._min_date, t.days, "day");

        for (var i = this._els.dhx_cal_data[0].childNodes, n = 0; n < i.length; n++) {
          i[n].className = i[n].className.replace("_now", "");
        }

        var r = this._currentDate();

        if (r.valueOf() >= this._min_date && r.valueOf() < this._max_date) {
          var s = 864e5,
              d = Math.floor((r - e._min_date) / s),
              _ = t.options.length,
              l = d * _,
              c = l + _;

          for (n = l; c > n; n++) {
            i[n] && (i[n].className = i[n].className.replace("dhx_scale_holder", "dhx_scale_holder_now"));
          }
        }

        if (t.size && t.size < t.options.length) {
          var h = this._els.dhx_cal_header[0],
              u = document.createElement("div");
          t.position && (this._waiAria.headerButtonsAttributes(u, ""), u.className = "dhx_cal_prev_button", u.style.cssText = "left:1px;top:2px;position:absolute;", u.innerHTML = "&nbsp;", h.firstChild.appendChild(u), u.onclick = function () {
            e.scrollUnit(-1 * t.step);
          }), t.position + t.size < t.options.length && (this._waiAria.headerButtonsAttributes(u, ""), u = document.createElement("div"), u.className = "dhx_cal_next_button", u.style.cssText = "left:auto; right:0px;top:2px;position:absolute;", u.innerHTML = "&nbsp;", h.lastChild.appendChild(u), u.onclick = function () {
            e.scrollUnit(t.step);
          });
        }
      }

      return a;
    };

    var d = e._get_view_end;

    e._get_view_end = function () {
      var t = e._props[this._mode];

      if (t && t.days > 1) {
        var a = this._get_timeunit_start();

        return e.date.add(a, t.days, "day");
      }

      return d.apply(this, arguments);
    };

    var _ = e._render_x_header;

    e._render_x_header = function (t, a, i, n) {
      var r = e._props[this._mode];
      if (!r || r.days <= 1) return _.apply(this, arguments);

      if (r.days > 1) {
        var s = n.querySelector(".dhx_second_cal_header");
        s || (s = document.createElement("div"), s.className = "dhx_second_cal_header", n.appendChild(s));
        var o = e.xy.scale_height;
        e.xy.scale_height = Math.ceil(o / 2), _.call(this, t, a, i, s, Math.ceil(e.xy.scale_height));
        var d = r.options.length;

        if ((t + 1) % d === 0) {
          var l = document.createElement("div");
          l.className = "dhx_scale_bar dhx_second_scale_bar";
          var c = this.date.add(this._min_date, Math.floor(t / d), "day");
          this.templates[this._mode + "_second_scalex_class"] && (l.className += " " + this.templates[this._mode + "_second_scalex_class"](new Date(c)));
          var h,
              u = this._cols[t] * d - 1;
          h = d > 1 ? this._colsS[t - (d - 1)] - this.xy.scale_width - 2 : a, this.set_xy(l, u, this.xy.scale_height - 2, h, 0), l.innerHTML = this.templates[this._mode + "_second_scale_date"](new Date(c), this._mode), s.appendChild(l);
        }

        e.xy.scale_height = o;
      }
    };

    var l = e._get_event_sday;
    e._get_event_sday = function (t) {
      var a = e._props[this._mode];

      if (a) {
        if (a.days <= 1) return n(a, t), this._get_section_sday(t[a.map_to]);
        var i = 864e5,
            r = Math.floor((t.end_date.valueOf() - 1 - 60 * t.end_date.getTimezoneOffset() * 1e3 - (e._min_date.valueOf() - 60 * e._min_date.getTimezoneOffset() * 1e3)) / i),
            s = a.options.length,
            o = a.order[t[a.map_to]];
        return r * s + o - a.position;
      }

      return l.call(this, t);
    }, e._get_section_sday = function (t) {
      var a = e._props[this._mode];
      return a.order[t] - a.position;
    };
    var c = e.locate_holder_day;

    e.locate_holder_day = function (t, a, i) {
      var r = e._props[this._mode];
      if (!r) return c.apply(this, arguments);
      var s;
      if (i ? n(r, i) : (i = {
        start_date: t,
        end_date: t
      }, s = 0), r.days <= 1) return 1 * (void 0 === s ? r.order[i[r.map_to]] : s) + (a ? 1 : 0) - r.position;
      var o = 864e5,
          d = Math.floor((i.start_date.valueOf() - e._min_date.valueOf()) / o),
          _ = r.options.length,
          l = void 0 === s ? r.order[i[r.map_to]] : s;
      return d * _ + 1 * l + (a ? 1 : 0) - r.position;
    };

    var h = e._time_order;

    e._time_order = function (t) {
      var a = e._props[this._mode];
      a ? t.sort(function (e, t) {
        return a.order[e[a.map_to]] > a.order[t[a.map_to]] ? 1 : -1;
      }) : h.apply(this, arguments);
    };

    var u = e._pre_render_events_table;
    e._pre_render_events_table = function (t, a) {
      function i(t) {
        var a = e.date.add(t, 1, "day");
        return a = e.date.date_part(a);
      }

      var n = e._props[this._mode];

      if (n && n.days > 1 && !this.config.all_timed) {
        for (var r = {}, s = 0; s < t.length; s++) {
          var o = t[s];

          if (this.isOneDayEvent(t[s])) {
            var d = +e.date.date_part(new Date(o.start_date));
            r[d] || (r[d] = []), r[d].push(o);
          } else {
            var _ = new Date(Math.min(+o.end_date, +this._max_date)),
                l = new Date(Math.max(+o.start_date, +this._min_date));

            for (t.splice(s, 1); +_ > +l;) {
              var c = this._copy_event(o);

              c.start_date = l, c.end_date = i(c.start_date), l = e.date.add(l, 1, "day");
              var d = +e.date.date_part(new Date(l));
              r[d] || (r[d] = []), r[d].push(c), t.splice(s, 0, c), s++;
            }

            s--;
          }
        }

        var h = [];

        for (var s in r) {
          h.splice.apply(h, [h.length - 1, 0].concat(u.apply(this, [r[s], a])));
        }

        for (var s = 0; s < h.length; s++) {
          this._ignores[h[s]._sday] ? (h.splice(s, 1), s--) : h[s]._first_chunk = h[s]._last_chunk = !1;
        }

        h.sort(function (e, t) {
          return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1;
        }), t = h;
      } else t = u.apply(this, [t, a]);

      return t;
    }, e.attachEvent("onEventAdded", function (t, a) {
      if (this._loading) return !0;

      for (var i in e._props) {
        var n = e._props[i];
        "undefined" == typeof a[n.map_to] && (a[n.map_to] = n.options[0].key);
      }

      return !0;
    }), e.attachEvent("onEventCreated", function (t, a) {
      var i = e._props[this._mode];

      if (i && a) {
        var r = this.getEvent(t);
        n(i, r);

        var s = this._mouse_coords(a);

        this._update_unit_section({
          view: i,
          event: r,
          pos: s
        }), this.event_updated(r);
      }

      return !0;
    });
  }();
});

/***/ }),

/***/ "y3lw6KIv":
/*!*************************************!*\
  !*** ./resources/js/main/custom.js ***!
  \*************************************/
/*! exports provided: number_format, phoneConfirmTimer, addFavorite, ajaxPhoneShow, ajaxReviewsAdd, redirectToCabinet, getCity, windowLocationCity, parseInputText, auto_layout_keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number_format", function() { return number_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneConfirmTimer", function() { return phoneConfirmTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavorite", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxPhoneShow", function() { return ajaxPhoneShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxReviewsAdd", function() { return ajaxReviewsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectToCabinet", function() { return redirectToCabinet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCity", function() { return getCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowLocationCity", function() { return windowLocationCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseInputText", function() { return parseInputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto_layout_keyboard", function() { return auto_layout_keyboard; });
/* harmony import */ var _app_Modules_Common_Assets_js_Maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/Modules/Common/Assets/js/Maps */ "BjXyzBxv");

$(function () {
  if ($('.js-review--add').length > 0) {
    $('.js-review--add').on('click', function () {
      var stars = $("input[name='rating']:checked").val();
      var message = $('#js-review-message').val();
      var addressID = $('.reviews__header').data('to');
      var clientID = $('.reviews__header').data('from');
      var cityAlias = $('.reviews__header').data('cityAlias');
      var errorBlock = $('#js-review-error');

      if (stars == null || message == '') {
        errorBlock.show();
        errorBlock.show().css({
          bottom: '0px',
          color: '#c9302c'
        });
      } else {
        $.ajax({
          method: 'POST',
          url: '/ajaxNewReviews',
          data: {
            stars: stars,
            message: message,
            addressID: addressID,
            clientID: clientID,
            cityAlias: cityAlias,
            active: 0,
            _token: token
          }
        }).done(function (response) {
          if (response.success === true) {
            errorBlock.hide();
            $('.review-add').addClass(' is-success');
          }
        });
      }
    });
  }

  var geoHref = $('.jsGeoHref');

  if (geoHref.length) {
    //Определение типа устройства
    var uagent = navigator.userAgent.toLowerCase();

    if (uagent.search('iphone') > -1) {
      var coords = geoHref.attr('data-coords');
      geoHref.attr('href', 'http://maps.apple.com/?address=' + coords);
    }
  }

  var countItems = 0;

  if ($('.card-services__items').length > 0) {
    var Services = $('.card-services__items').children('.js-bb-accordeon').children('.bb-accordeon__item'); // var countServices = Services.length;

    Services.filter(':first').addClass('is-open');
    Services.filter(':first').find('.bb-accordeon__content').removeAttr('style');
  }

  if ($('.lk-service__inner').length > 0) {
    var ServicesLk = $('.lk-service__inner').children('.js-bb-accordeon').children('.bb-accordeon__item');
    ServicesLk.filter(':first').addClass('is-open');
    ServicesLk.filter(':first').children('.bb-accordeon__content').removeAttr('style');
  }

  if ($('.profile-editor__inner').length > 0) {
    var ServicesLk = $('.profile-editor__inner').children('.js-bb-accordeon').children('.bb-accordeon__item');
    ServicesLk.filter(':first').addClass('is-open');
    ServicesLk.filter(':first').children('.bb-accordeon__content').removeAttr('style');
  }

  if ($('.js-reviewsContent').length > 0) {
    $('.js-reviewsContent').on('click', function () {
      $('.js-reviews__message').each(function () {
        countItems++;
      });
      $.ajax({
        method: 'POST',
        url: '/ajaxAddReviews',
        data: {
          userID: $(this).data('id'),
          skip: countItems,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          if (response.html == '') {
            $('.js-reviewsContent').parent().remove();
          } else {
            $('.reviews__messages').append(response.html);
          }
        }
      });
      return countItems = 0;
    });
  }

  if (window.location.hash && (modal = $(window.location.hash)) && modal.length) {
    var modal;
    $('.js-modal-' + modal[0]['id']).click();
  }

  if ($('.category__link').length > 0) {
    var elems = $(document).find('.category__link');
    $('.js-show--list-slice').on('click', function () {
      for (var i = 0; i < elems.length; i++) {
        elems[i].href = elems[i].href.slice(0, -4); // console.log( elems[i].href = elems[i].href.slice(0, -4));
      }
    });
    $('.js-show--map-add').on('click', function () {
      for (var i = 0; i < elems.length; i++) {
        // console.log(elems[i].href = elems[i].href+'#map');
        if (elems[i].href.match('#map')) {} else {
          elems[i].href = elems[i].href + '#map';
        }
      }
    });
  }

  if ($('.catalog__inner').length > 0 && window.location.hash == '#map') {
    $('.js-show--map').click();
  }

  if ($('.js-review--add').length > 0) {
    $('.js-review--add').on('click', function () {
      var stars = $("input[name='rating']:checked").val();
      var message = parseInputText($('#js-review-message').val()); // парсим входящий отзыв(чтобы не было ненужных символов типа ❤ или 𝑅𓃬)

      var addressID = $('.reviews__header').data('to');
      var clientID = $('.reviews__header').data('from');
      var cityAlias = $('.reviews__header').data('cityAlias');
      var errorBlock = $('#js-review-error'); // console.log(errorBlock);

      if (stars === null || message === '' || message === null) {
        errorBlock.show();
        errorBlock.show().css({
          bottom: '0px',
          color: '#c9302c'
        });
      } else {
        $.ajax({
          method: 'POST',
          url: '/ajaxNewReviews',
          data: {
            stars: stars,
            message: message,
            addressID: addressID,
            clientID: clientID,
            cityAlias: cityAlias,
            active: 0,
            _token: token
          }
        }).done(function (response) {
          if (response.success === true) {
            errorBlock.hide();
            $('#jsFormReviewAdd').addClass('is-confirm');
          }
        });
      }
    });
  }

  if ($('.js-registerFB').length > 0) {
    $('.js-registerFB').on('click', function () {
      fbq.push(['track', 'Lead', {
        content_name: 'Home page new user'
      }]);
    });
  }

  if ($('.js-day-picker'.length)) {
    var jsOrderDeleteService = $('.jsOrderDeleteService');
    var jsOrderReady = '.jsOrderIsReady'; // deleted service button

    $('.jsOrderDeleteUserInfoItem').on('click', function () {
      jsOrderDeleteService.attr('data-service', $(this).attr('data-service')).attr('data-price', $(this).attr('data-price'));
    }); // deleted service button at modal window

    jsOrderDeleteService.on('click', function () {
      $.ajax({
        method: 'POST',
        url: '/ajaxDeleteOrderService',
        data: {
          masterID: $('.jsConfirmMasterID').attr('data-user'),
          serviceID: $(this).attr('data-service'),
          price: $(this).attr('data-price'),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          if (response.redirect !== false) {
            window.location.href = response.redirect;
          } else {
            $('.jsOrderDelete-' + response.serviceID).remove();
            $('.jsOrderTotalPrice').attr('data-price', response.price).html(response.price + ' <i class="fal fa-ruble-sign"></i>');
            $('#deleteService').modal('hide');
          }
        }
      });
    });
    var $selectUser = $('.jsConfirmSelectUser');
    var selectUser = '.jsConfirmSelectUser';
    var userBlock = '.jsConfirmMasterID'; // select user

    $(document).on('click', selectUser, function () {
      var $this = $(this);
      var date = $('.jsConfirmOrderPageDayPicker.is-active').attr('data-date');
      var masterID = $this.attr('data-master');
      var avatar = $this.find('.jsConfirmSelectUserImgUsed').attr('src');
      var name = $this.find('.jsConfirmSelectUserUsed').text();
      var picker = $(document).find('.js-time-picker-item.is-active').text();
      var $orderDate = $('.js-order-date');
      $.ajax({
        method: 'POST',
        url: '/ajaxSelectMasterOrder',
        data: {
          picker: picker,
          masterID: masterID,
          date: date,
          addressID: $('.jsConfirmAddressID').attr('data-address'),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          if (response.dateTrue !== true) {
            $('.user-info__top').removeClass('is-active');
            $('.js-user-info-note').removeClass('is-hidden');
            $('.user-info__btn').removeClass('is-active');
            $('.time-picker__wrap').removeClass('is-empty');
          } else {
            var data = $('.jsConfirmOrderPageDayPicker.is-active').find('.day-picker__day_num').text() + ' ' + $('.day-picker__month').text().toLowerCase() + ' ' + $('.day-picker__year').text();
            $orderDate.text(data);
          }

          $('.jsOrderTimePicker').html(response.timing); // console.log(masterID,
          //     avatar,
          //     name);

          $(document).find(userBlock).attr('data-user', masterID);
          $(document).find(userBlock).find('img').attr('src', avatar);
          $(document).find(userBlock).find('.master-picker__title').text(name);
          setTimeout(function () {
            $this.closest('#masterPicker').modal('hide');
          }, 200);
        }
      });
    });
    /*
     *** DayPicker
     */

    (function () {
      var $dayPicker = $('.js-day-picker');
      var activeClass = 'is-active';
      var disableClass = 'is-disabled';
      var newDate = new Date();
      var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      $dayPicker.each(function () {
        var _this = $(this);

        var counter = 0;
        render(_this);
        todayWeek(_this);

        var $item = _this.find('.day-picker__item');

        var $arrowR = _this.find('.day-picker__arrow--right');

        var $arrowL = _this.find('.day-picker__arrow-long--left');

        $item.on('click', function (e) {
          var $this = $(this);

          if (!$this.hasClass(disableClass)) {
            $item.removeClass(activeClass);
            $this.addClass(activeClass);
          }

          var $orderDate = $('.js-order-date');
          var $jsConfirmMasterID = $('.jsConfirmMasterID');
          var date = $this.attr('data-date');
          var nameDay = $this.attr('data-day');
          var masterID = $jsConfirmMasterID.attr('data-user');
          var picker = $(document).find('.js-time-picker-item.is-active').text();
          $.ajax({
            method: 'POST',
            url: '/ajaxSelectMasterOrder',
            data: {
              date: date,
              masterID: masterID,
              picker: picker,
              nameDay: nameDay,
              addressID: $('.jsConfirmAddressID').attr('data-address'),
              _token: token
            }
          }).done(function (response) {
            if (response.success === false) {
              if (response.error === 'user is not found') {
                $('.jsConfirmMasterID').addClass('is-hidden');

                if (response.masterID === 0) {
                  $('.jsConfirmMasterID').attr('data-user', 0);
                }

                $('.jsOrderTimePicker').empty();
                $('.time-picker__wrap').addClass('is-empty');
                $('.user-info__top').removeClass('is-active');
                $('.js-user-info-note').removeClass('is-hidden');
                $('.user-info__btn').removeClass('is-active');
              }
            }

            if (response.masterHtml !== false) {
              $('.jsConfirmMasterListPicker').html(response.masterHtml);
              $('.jsOrderPopupMastersList').html(response.popupList);
            }

            if (response.success === true) {
              if (response.dateTrue !== true) {
                $('.user-info__top').removeClass('is-active');
                $('.js-user-info-note').removeClass('is-hidden');
                $('.user-info__btn').removeClass('is-active');
                $('.time-picker__wrap').removeClass('is-empty');
              } else {
                var data = $('.jsConfirmOrderPageDayPicker.is-active').find('.day-picker__day_num').text() + ' ' + $('.day-picker__month').text().toLowerCase() + ' ' + $('.day-picker__year').text();
                $orderDate.text(data);
              }

              $('.jsOrderTimePicker').html(response.timing);
            }
          });
          e.stopPropagation();
          e.preventDefault();
        });
        $arrowR.on('click', function () {
          counter++;
          $arrowL.removeClass(disableClass);
          monthNameNext(_this);
          nextWeek(_this);
          weekCheck(_this, counter);
          dataSet(_this, $item);
        });
        $arrowL.on('click', function () {
          if (!$arrowL.hasClass(disableClass)) {
            counter--;
            monthNamePrev(_this);
            prevWeek(_this);
            blockArrow(_this);
            weekCheck(_this, counter);
          }

          dataSet(_this, $item);
        });
      });

      function render(el) {
        el.addClass('day-picker');
        var html = '<div class="day-picker__top">' + '<span class="day-picker__month"></span>' + '<span class="day-picker__year"></span>, ' + '<span class="day-picker__week"></span>' + '</div>' + '<div class="day-picker__bottom">' + '<div class="day-picker__carousel">' + '<button class="day-picker__arrow day-picker__arrow-long--left">' + '<i class="fal fa-angle-left"></i>' + '</button>' + '<ul class="day-picker__list">' + '<li class="day-picker__item jsConfirmOrderPageDayPicker" data-day="monday">' + "<span class=\"day-picker__day_title\">\u041F\u043D</span>" + '<span class="day-picker__day_num"></span>' + '</li>' + '<li class="day-picker__item jsConfirmOrderPageDayPicker" data-day="tuesday">' + "<span class=\"day-picker__day_title\">\u0412\u0442</span>" + '<span class="day-picker__day_num"></span>' + '</li>' + '<li class="day-picker__item jsConfirmOrderPageDayPicker" data-day="wednesday">' + "<span class=\"day-picker__day_title\">\u0421\u0440</span>" + '<span class="day-picker__day_num"></span>' + '</li>' + '<li class="day-picker__item jsConfirmOrderPageDayPicker" data-day="thursday">' + "<span class=\"day-picker__day_title\">\u0427\u0442</span>" + '<span class="day-picker__day_num"></span>' + '</li>' + '<li class="day-picker__item jsConfirmOrderPageDayPicker" data-day="friday">' + "<span class=\"day-picker__day_title\">\u041F\u0442</span>" + '<span class="day-picker__day_num"></span>' + '</li>' + ' <li class="day-picker__item jsConfirmOrderPageDayPicker" data-day="saturday">' + "<span class=\"day-picker__day_title\">\u0421\u0431</span>" + '<span class="day-picker__day_num"></span>' + '</li>' + '<li class="day-picker__item jsConfirmOrderPageDayPicker" data-day="sunday">' + "<span class=\"day-picker__day_title\">\u0412\u0441</span>" + '<span class="day-picker__day_num"></span>' + '</li>' + '</ul>' + '<button class="day-picker__arrow day-picker__arrow--right">' + '<i class="fal fa-angle-right"></i>' + '</button>' + '</div>' + '</div>';
        el.html(html);
      } // формирование текущей недели


      function todayWeek(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var $month = el.find('.day-picker__month');
        var $year = el.find('.day-picker__year');
        var $weekDesc = el.find('.day-picker__week');
        var $arrowL = el.find('.day-picker__arrow-long--left');
        var nowWeekDayNum = newDate.getDay() - 1;
        var nowMonthDay = newDate.getDate();
        var nowMonth = newDate.getMonth();
        var nowYear = newDate.getFullYear();
        var weekDay = weekDayArr.eq(nowWeekDayNum);
        var $item = el.find('.day-picker__item');
        $arrowL.addClass(disableClass);
        $weekDesc.text('эта неделя');
        $month.text(months[nowMonth]);
        $year.text(nowYear);
        weekDay.text(nowMonthDay);
        weekDay.closest('.day-picker__item').addClass(activeClass);
        insertLeftSide(el);
        insertRightSide(el);
        dataSet(el, $item);
      } // формирование следующей недели


      function nextWeek(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var weekDayLast = parseInt(weekDayArr.eq(6).text()) + 1;

        for (var i = 0; i < 7; i++) {
          weekDayArr.eq(i).text(weekDayLast++);
          weekDayArr.eq(i).closest('.day-picker__item').removeClass(disableClass);
          weekDayArr.eq(i).closest('.day-picker__item').removeClass(activeClass);

          if (weekDayArr.eq(i).text() > monthDays[monthNum(el)]) {
            weekDayLast = 1;
            weekDayArr.eq(i).text(weekDayLast++);
          }
        }
      } // формирование предыдущей недели


      function prevWeek(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var weekDayFirst = parseInt(weekDayArr.eq(0).text()) - 1;
        var monthPrev = monthNum(el) - 1;

        for (var i = 6; i >= 0; i--) {
          weekDayArr.eq(i).text(weekDayFirst--);
          weekDayArr.eq(i).closest('.day-picker__item').removeClass(disableClass);
          weekDayArr.eq(i).closest('.day-picker__item').removeClass(activeClass);

          if (weekDayArr.eq(i).text() < 1) {
            if (monthPrev < 0) {
              monthPrev = 11;
            }

            weekDayFirst = monthDays[monthPrev];
            weekDayArr.eq(i).text(weekDayFirst--);
          }
        }
      } // для функции todayWeek, формирует левую сторону от текущей даты


      function insertLeftSide(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var prevMonthDay = newDate.getDate() - 1;
        var prevWeekDay = newDate.getDay() - 2;
        var nowMonth = newDate.getMonth();

        for (var i = prevWeekDay; i >= 0; i--) {
          weekDayArr.eq(i).text(prevMonthDay--);

          if (weekDayArr.eq(i).text() < 1) {
            if (nowMonth < 0) {
              nowMonth = 11;
            }

            prevMonthDay = monthDays[nowMonth - 1];
            weekDayArr.eq(i).text(prevMonthDay--);
          }

          weekDayArr.eq(i).closest('.day-picker__item').addClass(disableClass);
        }
      } // для функции todayWeek, формирует правую сторону от текущей даты


      function insertRightSide(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var nowWeekDayNum = newDate.getDay() - 1;
        var nowMonthDay = newDate.getDate();
        var nowMonth = newDate.getMonth();

        for (var i = nowWeekDayNum; i < 7; i++) {
          weekDayArr.eq(i).text(nowMonthDay++);

          if (weekDayArr.eq(i).text() > monthDays[nowMonth]) {
            nowMonthDay = 1;
            weekDayArr.eq(i).text(nowMonthDay++);
          }
        }
      } // выявляет номер месяца, указанного в данный момент
      // номер месяца начинается с 0 до 11
      // через массив months


      function monthNum(el) {
        var thisMonth = el.find('.day-picker__month');
        var thisMonthNum = '';

        for (var i = 0; i < months.length; i++) {
          if (months[i] == thisMonth.text()) {
            thisMonthNum = i;
          }
        }

        return parseInt(thisMonthNum);
      } // формирует название месяца для следующей недели


      function monthNameNext(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var thisMonth = el.find('.day-picker__month');
        var $year = el.find('.day-picker__year');
        var yearNum = parseInt($year.text());
        var thisMonthNum = '';

        for (var i = 0; i < weekDayArr.length; i++) {
          if (weekDayArr.eq(i).text() == monthDays[monthNum(el)]) {
            thisMonthNum = monthNum(el) + 1;

            if (thisMonthNum > 11) {
              thisMonthNum = 0;
            }

            thisMonth.text(months[thisMonthNum]);
          }

          if (thisMonth.text() == 'Январь' && weekDayArr.eq(i).text() == monthDays[monthNum(el)]) {
            $year.text(yearNum + 1);
          }
        }
      } // формирует название месяца для предыдущей недели


      function monthNamePrev(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var thisMonth = el.find('.day-picker__month');
        var $year = el.find('.day-picker__year');
        var yearNum = parseInt($year.text());
        var thisMonthNum = '';

        for (var i = 0; i < weekDayArr.length; i++) {
          if (weekDayArr.eq(i).text() == 1) {
            thisMonthNum = monthNum(el) - 1;

            if (thisMonthNum < 0) {
              thisMonthNum = 11;
            }

            thisMonth.text(months[thisMonthNum]);
          }

          if (thisMonth.text() == 'Декабрь' && weekDayArr.eq(i).text() == 1) {
            $year.text(yearNum - 1);
          }
        }
      } // блокировка стрелки


      function blockArrow(el) {
        var weekDayArr = el.find('.day-picker__day_num');
        var thisMonth = el.find('.day-picker__month');

        for (var i = 0; i < weekDayArr.length; i++) {
          if (weekDayArr.eq(i).text() == newDate.getDate() && thisMonth.text() == months[newDate.getMonth()]) {
            todayWeek(el);
          }
        }
      } // надпись для указания количества недель от текущей даты


      function weekCheck(el, counter) {
        var $weekDesc = el.find('.day-picker__week');

        if (counter == 1) {
          $weekDesc.text('следующая неделя');
        } else if (counter > 1 && counter <= 4) {
          $weekDesc.text('через ' + counter + ' недели');
        } else if (counter > 4) {
          $weekDesc.text('через ' + counter + ' недель');
        }
      } // запись полной даты в data-date=ГГГГ-ММ-ДД


      function dataSet(el, item) {
        var year = $('.day-picker__year').text(); // месяц календарный

        var month = monthNum(el) + 1;
        var num = $('.day-picker__day_num');
        item.each(function (i) {
          item.eq(i).attr('data-date', year + '-' + month + '-' + num.eq(i).text());
        });
      }
    })();
    /*
     *** OrderArrayStatus
     */


    var Order = function () {
      var order = {};
      var $html = $('html');
      var $timePickerItem = $('.js-time-picker-item');
      var timePickerItem = '.js-time-picker-item';
      var $orderTime = $('.js-order-time');
      var $orderDate = $('.js-order-date');
      var $orderTitle = $('.js-order-title');
      var $orderDetail = $('.js-service-list');
      var $orderBtnBack = $('.js-order-prev');
      var $orderBtnEdit = $('.js-order-edit');
      var $userInfoNote = $('.js-user-info-note');
      var $userCartBtn = $('.user-info__btn');
      var $userInfoBottom = $('.user-info__bottom');
      var $userInfoTop = $('.user-info__top');
      var activeClass = 'is-active';
      var hiddenClass = 'is-hidden';
      var flag = false;

      order.init = function () {
        var _this2 = this;

        this.selectTime();
        this.selectMaster();
        this.fixedBlock($('.js-user-info'));

        if ($(window).width() <= 768) {
          this.selectTimeMobile();
          this.clickOnBtnBack();
          setTimeout(function () {
            _this2.fixedBlock($('.js-day-picker'));
          }, 500);
        }
      };

      order.selectTime = function () {
        $(document).on('click', timePickerItem, function () {
          if ($(this).not('.is-disabled')) {
            var data = $('.jsConfirmOrderPageDayPicker.is-active').find('.day-picker__day_num').text() + ' ' + $('.day-picker__month').text().toLowerCase() + ' ' + $('.day-picker__year').text(); //time choosing

            if ($(this).hasClass('is-active')) {
              $userInfoTop.removeClass('is-active');
              $userCartBtn.removeClass('is-active');
              $userInfoNote.removeClass('is-hidden');
            } else {
              $(document).find(timePickerItem).not($(this)).removeClass(activeClass); // shows date and time of order (desktop)

              $userInfoTop.addClass(activeClass); // shows confirm button

              $userInfoNote.addClass(hiddenClass);
              $userCartBtn.addClass(activeClass);
            }

            $(this).toggleClass(activeClass); //set date

            $orderDate.text(data); //set time

            $orderTime.text($(this).text());
          }
        });
      };

      order.selectTimeMobile = function () {
        $(document).on('click', timePickerItem, function () {
          // order details opening
          $orderDetail.addClass(activeClass); // rewritting order title

          $orderTitle.text('Подтверждение заявки'); // $('html').addClass('is-fixed');
          // shows confirm button

          $userInfoBottom.addClass(activeClass);
          flag = true;
        });
      }; // set fixed block at the top of a page


      order.fixedBlock = function (fixedBlock) {
        if (fixedBlock.length) {
          var height = fixedBlock.outerHeight(true);
          var $clone = $('<div class="clone">');
          var fixedBlockOffset = fixedBlock.offset().top;
          $clone.insertAfter(fixedBlock);
          $clone.css('height', height).hide(); //for fixed top block with width 50px

          if ($(window).width() <= 768) {
            fixedBlockOffset = fixedBlock.offset().top - 50;
          }

          $(window).scroll(function () {
            var scroll = $(this).scrollTop();

            if (scroll >= fixedBlockOffset) {
              // fixedBlock.addClass('is-fixed');
              $clone.show();
            } else if (scroll < fixedBlockOffset) {
              fixedBlock.removeClass('is-fixed');
              $clone.hide();
            }
          });
        }
      };

      order.clickOnBtnBack = function () {
        // click on the prev btn
        $orderBtnBack.on('click', function (e) {
          $orderTitle.text('Создание заявки');

          if (flag) {
            _removeClass();

            e.preventDefault();
          }
        }); // click on the edit btn

        $orderBtnEdit.on('click', function () {
          $orderTitle.text('Редактирование заявки');

          _removeClass();
        });

        function _removeClass() {
          $orderDetail.removeClass(activeClass);
          $userInfoBottom.removeClass(activeClass);
          $('html').removeClass('is-fixed');
          $('.js-time-picker-item.is-active').removeClass('is-active');
          flag = false;
        }
      }; //Close modal aftre select master


      order.selectMaster = function () {
        var $masterItem = $('#masterPicker').find('.master-picker__item');
        $masterItem.on('click', function () {
          var _this3 = this;

          setTimeout(function () {
            $(_this3).closest('#masterPicker').modal('hide');
          }, 200);
        });
      };

      return order;
    }();

    Order.init();
  } // Ajax NProgress bar
  // var photoLoader = $('.bb-upload__loader');
  // $(document).ajaxStart(function () {
  //     NProgress.start();
  //     if (photoLoader.length > 0) {
  //         photoLoader.show();
  //     }
  // });
  // $(document).ajaxStop(function () {
  //     NProgress.done();
  //     if (photoLoader.length > 0) {
  //         photoLoader.hide();
  //     }
  // });


  if ($(document).width() > 768) {
    $('.js-promo-form-custom').insertAfter('.firstscreen__wrapper');
  }

  localStorage.setItem('orders', 123); // очищаем переменную, чтобы был редирект в ЛК

  localStorage.removeItem('cardRoute');
  localStorage.removeItem('orderRoute');
  localStorage.removeItem('landingRoute');

  if (window.localStorage.getItem('newReviewFormIsOpened') == 'true') {
    // В разных местах id у попапов с добавлением отзывов разные
    if ($('#review-add').length > 0) {
      window.localStorage.removeItem('newReviewFormIsOpened');
      $('#review-add').modal('show');
    }
  } // Main auth form


  if ($('#js-main-auth-form').length > 0) {
    $('.jsMainFormAuthTabs').on('click', function () {
      $('.jsMainFormAuthTypeHidden').val($(this).attr('data-type'));
    });
    $('.jsLeadTabs').on('click', function () {
      var _this = $(this);

      var type = _this.attr('data-type');

      var loginAccount = $('#js-login-account');
      var leadBottomTitle = $('.jsLeadBottomTitle');
      var mainFormAuthTypeHidden = $('.jsMainFormAuthTypeHidden');

      if (type === 'reg') {
        _this.text('Зарегистрироваться');

        _this.attr('data-type', 'auth');

        mainFormAuthTypeHidden.attr('data-type', 'auth');
        loginAccount.html('Войти' + '<span class="button-animate__hover"></span>');
        leadBottomTitle.addClass('is-hidden');
      } else {
        _this.text('Войти');

        _this.attr('data-type', 'reg');

        mainFormAuthTypeHidden.attr('data-type', 'reg');
        loginAccount.html('Зарегистрироваться' + '<span class="button-animate__hover"></span>');
        leadBottomTitle.removeClass('is-hidden');
      }
    });
    var authBlock = $('.js-main-auth-form-block');
    $('#js-login-account').on('click', function () {
      console.log('Click on login');
      var phone = $('#js-main-input-phone').val();
      var password = $('#js-main-input-password').val();
      var remember = $('#js-main-input-remember').val();
      var errorBlock = $('.bb-input-tip__text');
      var type = $('.jsMainFormAuthTypeHidden').val();
      var eventRegisterCrm = false;

      if ($('#registerCrm').length > 0) {
        eventRegisterCrm = true;
      }

      if ($('#roleType').length > 0) {
        var roleType = $('#roleType').val();
      } // Validate data


      $.ajax({
        method: 'POST',
        url: '/ajaxValidateMainAuth',
        data: {
          phone: phone,
          password: password,
          type: type,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          /***
           *  Если есть выбор аккаунта тогда не делаем проверку на токен
           * */
          if (response.associate === true) {
            // errorBlock.hide();
            if ($('.jsAssociateEnterBlock' > 'div.form-success__roles')) {
              $('.jsAssociateEnterBlock').empty();
              $('.jsAssociateEnterBlock').append('<div class="form-success__roles">' + response.html + '</div>');
            } else {
              $('.jsAssociateEnterBlock').empty();
              $('.jsAssociateEnterBlock').html(response.html);
            }

            authBlock.addClass('choose-role');
            $('#js-main-input-password').closest('.bb-input').removeClass('is-invalid');
            return false;
          } else {} // setParams(response.token);
          // window.localStorage.setItem(
          //     'access_token',
          //     response.token
          // );
          // USER IS LOGGED IN (CLOSE POPUP IN SAME PAGE)


          if (response.userExist === true) {
            setParams(response.token);
            window.localStorage.setItem('access_token', response.token);
            localStorage.setItem('_token', response.access_token);
            $('.js-header-profile-block').html(response.html); // $.fancybox.close();

            if (response.orderButtonAnchor && response.orderButtonAnchor === true) {
              sendOrder();
            }

            if (response.addFavoriteFirstAuth === true) {
              var user = response.user;
              addFavorite(user);
            }

            if (response.ajaxReviewsAdd === true) {
              var userName = response.userName;
              var user = response.user;
              ajaxReviewsAdd(userName, user);
            }

            if (response.ajaxOrderRequest === true) {
              id = response.user;
              $('.jsOrderIsReady').click();
            }

            if (response.ajaxPhoneShow === true) {
              ajaxPhoneShow();
            } // проверяем если это подробная карточка, тогда не делаем редирект в кабинет


            var card = localStorage.getItem('cardRoute');
            var order = localStorage.getItem('orderRoute');
            var landing = localStorage.getItem('landingRoute');

            if (response.redirect === true && card === null && order === null && landing === null) {
              redirectToCabinet();
            } else {
              // Если редирект не должен происходить, то нужно просто обновить страницу, для того, чтобы
              // blade проставил пользовательские поля userID и т.д. в поля, и
              // ajax-запрос отправился бы с правильным телом.
              // Иначе, хотя при авторизации и придет верный ответ, на странице все еще не будет существовать
              // "экземпляра" пользователя
              // Флаг для указания того, что при загрузке страницы должна открыться форма добавления нового отзыва
              localStorage.removeItem('landingRoute');
              localStorage.setItem('newReviewFormIsOpened', 'true');
              console.log(window.location.href);
              window.location.href = window.location.href;
            }

            return false;
          }

          var orderID = localStorage.getItem('order'); // CREATE NEW USER BY PHONE

          $.ajax({
            method: 'POST',
            url: '/ajaxRegisterUserByPhone',
            data: {
              phone: phone,
              password: password,
              orderID: orderID,
              remember: remember,
              _token: token
            }
          }).done(function (response) {
            if (response.success === true) {
              authBlock.addClass('is-confirm');
              $('.js-phone-confirm-text').text(response.phone);
              $('.js-header-profile-block').html(response.html);
            } else {
              errorBlock.closest('.bb-input').addClass('is-invalid').find('.js-bb-input-tip').removeAttr('style');
              errorBlock.text(response.text);
            }
          });
        } else {
          errorBlock.closest('.bb-input').addClass('is-invalid').find('.js-bb-input-tip').removeAttr('style');
          errorBlock.text(response.text);
        }
      });
      return false;
    });
    $('.js-sms-confirm-button').on('click', function () {
      var confirmValue = $('#js-sms-confirm-input').val();
      var errorBlock = $('#js-sms-confirm-error');

      if (confirmValue == '') {
        errorBlock.show().text('Введите код из SMS сообщения');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxConfirmSms',
        data: {
          confirmValue: confirmValue,
          updateUser: true,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          if (response.orderButtonAnchor && response.orderButtonAnchor === true) {
            $.fancybox.close();
            sendOrder();
          } else {
            // редирект в ЛК после подтверждения номера телефона
            redirectToCabinet(); // authBlock.removeClass('is-confirm').addClass('is-success');
          }
        } else {
          errorBlock.show().text('Не верный код');
        }
      });
    });
  }

  $(document).on('click', '.jsAssociateConfirmButton', function () {
    var associatePasswordBlock = $('.jsAssociatePasswordBlock'),
        associatePasswordErrorBlock = $('.jsAssociatePasswordErrorBlock'),
        popUpButton = $('button.popUp'),
        popUpLink = $('a.popUp'),
        profileID = null,
        userID = null,
        phone = $('.js-main-input-phone').val(),
        password = null,
        type = 1;

    if (associatePasswordBlock.hasClass('is-hidden')) {
      password = $('#js-main-input-password').val();
    } else {
      password = $('.jsAssociatePasswordInput').val();
      type = 2;
    }

    var siblings = $(this).siblings();

    if ($(this).is('.is-selected')) {
      siblings.removeClass('is-selected');
    } else {
      $(this).addClass('is-selected');
      siblings.removeClass('is-selected');
    } // userID = $(this).attr('data-user-id');
    // profileID = $(this).attr('data-profile-id');


    profileID = $('input[name=role]:checked').attr('data-profile-id');
    userID = $('input[name=role]:checked').attr('data-user-id');
    $.ajax({
      method: 'POST',
      url: '/ajaxValidateAssociate',
      data: {
        profileID: profileID,
        userID: userID,
        phone: phone,
        password: password,
        type: type,
        _token: token
      }
    }).done(function (response) {
      setParams(response.token);
      window.localStorage.setItem('access_token', response.token);

      if (response.success === true) {
        window.location.replace(response.redirect);
      } else {
        associatePasswordBlock.removeClass('is-hidden');
        associatePasswordBlock.addClass('is-invalid');
        associatePasswordErrorBlock.text(response.text);

        if (response.success === false && response.text === 'Неправильный пароль') {
          $('.jsAssociateEnterBlock').addClass('is-error');
          popUpButton.removeClass('is-hidden');
          popUpLink.removeClass('is-hidden');
        }
      }
    });
  });
  $('.jsAssociatePasswordInput').on('input', function () {
    $(this).parent().removeClass('is-invalid');
  });
  $(document).on('click', '.jsAssociateConfirmButtonRepeat', function () {
    $('.jsAssociateConfirmButton.is-selected').trigger('click');
  }); // Favorite btn

  $(document).on('click', '.js-btn-fav', function () {
    var btn = $(this),
        favorite = $(this).data('favorite');

    if (btn.hasClass('is-checked')) {
      btn.removeClass('is-checked');
      localStorage.setItem('favorite', favorite);
      $.ajax({
        method: 'POST',
        url: '/ajaxDeleteFavorite',
        data: {
          favorite: favorite,
          userID: userID,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          console.log('Удален из избранного');
        }
      });
      return false;
    } else {
      btn.addClass('is-checked');
      $.ajax({
        method: 'POST',
        url: '/ajaxAddFavorite',
        data: {
          favorite: favorite,
          userID: userID,
          _token: token
        }
      }).done(function (response) {
        if (response.success === false && response.authForm === true) {
          $('#auth-form').modal('show');
          return false;
        }

        if (response.success === true) {
          console.log('Добавлен в изранное');
        }
      });
      return false;
    }
  }); // AjaxPhoneShow

  if ($('.js-ajax-show-phone').length > 0) {
    $(document).on('click', '.js-ajax-show-phone', function () {
      localStorage.setItem('cardRoute', 'true');
      $.ajax({
        method: 'POST',
        url: '/ajaxPhoneShow',
        data: {
          _token: token
        }
      }).done(function (response) {
        if (response.success === false && response.authForm === true) {
          $.fancybox.open($('.header-action__login'));
          return false;
        } else if (response.success === true) {
          $(this).addClass('js-user-phone--show');
        }
      });
    });
  }

  if ($('.ajax-reviews-add').length > 0) {
    $(document).on('click', '.ajax-reviews-add', function () {
      localStorage.setItem('cardRoute', 'true');
      $.ajax({
        method: 'POST',
        url: '/ajaxReviewsAdd',
        data: {
          _token: token
        }
      }).done(function (response) {
        if (response.success === false && response.authForm === true) {
          $('#auth-form').modal('show');
          return false;
        }

        if (response.success === true) {
          $('#review-add').modal('show');
          return false;
        }
      });
    });
  }

  if ($('.js-search__form').length > 0) {
    var searchInputCities = $('.js-search-input__cities'); // searchCityInput

    var searchInputCategory = $('.js-search-input__category'); // searchCategoryInput

    var searchGroupCities = $('.js-search-group__cities'); // citiesBlock

    var searchGroupCategories = $('.js-search-group__categories'); // categoriesBlock

    var searchHintCities = $('.js-search-hint__cities'); // hintCity

    var searchHintCategory = $('.js-search-hint__category'); //hintCategory

    var name; //search category service user

    searchInputCategory.on('keyup', function (evt) {
      var itemSelect = searchHintCategory.find('.is-selected'); // #Key enter

      if (evt.keyCode === 13) {
        var category = $('.js-search-category__input');
        var service = $('.js-search-service__input');

        if (itemSelect.find('.js-search-input__link-category').length > 0) {
          var itemCategory = itemSelect.find('.js-search-input__link-category');
          return window.location = itemCategory.attr('href');
        } else if (itemSelect.find('.js-search-input__link-service').length > 0) {
          var itemService = itemSelect.find('.js-search-input__link-service');
          return window.location = itemUser.attr('href');
        } else if (itemSelect.find('.js-search-input__link-studio').length > 0) {
          var itemUser = itemSelect.find('.js-search-input__link-studio');
          return window.location = itemUser.attr('href');
        } else if (itemSelect.find('.js-search-input__link-master').length > 0) {
          var itemUser = itemSelect.find('.js-search-input__link-master');
          return window.location = itemUser.attr('href');
        } else {
          return location.assign(location.protocol + '//' + location.host);
        }

        searchInputCategory.attr('onkeydown', true); // $('#searchCity').trigger('click');
      } // #Key down
      else if (evt.keyCode === 40) {
          if (itemSelect.html() === itemSelect.find('li:last-child').html()) {
            itemSelect.removeClass('is-selected');
            searchGroupCategories.find('li:first-child').addClass('is-selected');
          } else {
            itemSelect.removeClass('is-selected');
            itemSelect.next().addClass('is-selected');
          }
        } // #Key up
        else if (evt.keyCode === 38) {
            if (itemSelect.html() === itemSelect.find('li:first-child').html()) {
              itemSelect.removeClass('is-selected');
              searchGroupCategories.find('li:last-child').addClass('is-selected');
            } else {
              itemSelect.removeClass('is-selected');
              itemSelect.prev().addClass('is-selected');
            }
          } else {
            if ($(this).val() !== '') {
              $.ajax({
                method: 'POST',
                url: '/ajaxSearchCategory',
                data: {
                  catQuery: $(this).val(),
                  cityID: cityID,
                  _token: token
                }
              }).done(function (response) {
                if (response.success === true) {
                  searchHintCategory.show();
                  searchGroupCategories.html('').prepend(response.html);
                  searchGroupCategories.find('.search-hint__item:first').addClass('is-selected'); // JQuery event loop is mousedown -> blur -> mouseup -> click
                  // Listening to click makes search results always disappear before
                  // making the transition to service/master/studio.
                  // Listening to mousedown and using the preventDefault() changes this behaviour
                  // and stops blurring after clicking a search result

                  $(document).on('mousedown', '.search-hint__item', function (e) {
                    window.location = $(this).attr('href');
                    e.preventDefault();
                    return false;
                  });
                }
              });
            } else {
              searchHintCategory.hide();
            }
          }
    });
    searchInputCategory.on('blur', function (evt) {
      $('.js-search-hint__category').css('display', 'none');
    }); //search city

    searchInputCities.on('keyup', function (evt) {
      // var searchInputCities = $('.js-search-input__cities');
      var $closest = $(this).closest('.jsCommonSearchBlock');
      var hintCity = $closest.find('.js-search-hint__cities').find('.is-selected');
      var selectCity = $closest.find('.js-search-group__cities').find('.is-selected'); // hintItem
      // #Key enter

      if (evt.keyCode === 13) {
        searchInputCities.attr('onkeydown', true); // var searchInputCities = $('.js-search-input__cities');

        var alias = hintCity.find('a').data('alias');
        var length = $closest.find('.js-search-group__cities').find('.is-selected').length;

        if (typeof alias === 'undefined') {
          var newHintCity = $closest.find('.city-select__list').find('.is-selected');
          alias = newHintCity.find('a').data('alias');

          if (typeof alias === 'undefined') {
            var mobileHintCity = $(this).closest('.js-search__form').find('.is-selected');
            alias = mobileHintCity.find('a').data('alias');
          }
        }

        if (length == 0) {
          alias = $closest.find('.js-search-alias__input').val();
          windowLocationCity(alias);
        } else {
          windowLocationCity(alias);
        }
      } // #Key down
      else if (evt.keyCode === 40) {
          selectCity.removeClass('is-selected');

          if (selectCity.is(':last-child')) {
            searchGroupCities.find('li:first-child').addClass('is-selected');
          } else {
            selectCity.next().addClass('is-selected');
          }
        } // #Key up
        else if (evt.keyCode === 38) {
            selectCity.removeClass('is-selected');

            if (selectCity.is(':first-child')) {
              searchGroupCities.find('li:last-child').addClass('is-selected');
            } else {
              selectCity.prev().addClass('is-selected');
            }
          } else {
            var stringCityInput = auto_layout_keyboard($(this).val());
            $(this).val(stringCityInput);
            var stringCity = auto_layout_keyboard($(this).val());

            if (stringCity !== '') {
              $.ajax({
                method: 'POST',
                url: '/ajaxSearchCity',
                data: {
                  cityName: stringCity,
                  mobile: $(this).data('mobile'),
                  _token: token
                }
              }).done(function (response) {
                if (response.success === true) {
                  searchHintCities.show();
                  $('#regionCities').empty();
                  searchGroupCities.html(response.html);
                  searchGroupCities.find('li:first-child').addClass('is-selected');
                }
              });
            } else {
              searchHintCities.hide();
            }
          }
    }); // .on('blur', function() {
    //     var hint = $(this)
    //         .closest('.js-search')
    //         .find('.search__hint');
    //
    //     if ($(window).width() > 768) {
    //         if ($(this).val() != '') {
    //             hint.css('display', 'none');
    //         }
    //     }
    // });
    // searchInputCities.on('blur', function (evt) {
    //     $('.js-search-hint__cities').css('display', 'none');
    // });

    $(document).on('click', '.js-search-input__link', function () {
      var cityName = $(this).data('name');
      var cityAlias = $(this).data('alias');
      searchInputCities.val(cityName); // var searchInputCities = $('.js-search-input__cities');
      // console.log('Вэлью инпута ввода города: ' + searchInputCities.val());

      $('.js-search-alias__input').val(cityAlias);
      $('#searchCity').trigger('click');
      searchHintCities.hide();
    });
    $(document).on('click', '.js-search-input__link-category', function () {
      var href = $(this).attr('href');
      window.location = href;
      return false;
    });
    $(document).on('click', '.js-search-input__link-service', function () {
      var href = $(this).attr('href');
      window.location = href;
      return false; // var category = $('.js-search-category__input');
      // var service = $('.js-search-service__input');
      // var name = $(this).data('name');
      // var serviceID = $(this).data('service');
      //
      // category.val('');
      // service.val('');
      //
      // searchInputCategory.val(name);
      // service.val(serviceID);
      //
      // searchHintCategory.hide();
      //
      // searchInputCategory.attr('onkeydown', true);
      // $('#searchCity').trigger('click');
      //
      // return false;
    });
    $(document).on('click', '.js-search-input__link-studio', function () {
      var href = $(this).attr('href');
      window.location = href;
      return false;
    });
    $(document).on('click', '.js-search-input__link-master', function () {
      var href = $(this).attr('href');
      window.location = href;
      return false;
    });
    $('.js-search__form').on('submit', function () {
      var hintCity = $(this).find('.search-hint__item.is-selected');
      var href = hintCity.find('a').attr('href');

      if (hintCity.length) {
        window.location = href;
      } else {
        getCity();
      }
    });
  } //--------------- Password recover -----------------------//


  var recoverSuccessBlock = $('.jsPasswordRecoverForm'); // Password recover phone

  var buttonRecoverPhone = $('.jsPasswordRecoverPhoneBtn');

  if (buttonRecoverPhone.length > 0) {
    var phone = $('.jsPasswordRecoverFormInputPhone');
    var resetSmsCode = $('.resetSmsCode');
    phone.on('input', function () {
      $(this).parent().removeClass('is-invalid');
      buttonRecoverPhone.removeAttr('disabled');
    });
    buttonRecoverPhone.on('click', function () {
      buttonRecoverPhone.attr('disabled', 'disabled');
      var phoneErrorBlock = $('.jsPasswordRecoverFormInputPhoneTip');
      var phoneSuccessText = $('.jsPasswordRecoverPhoneSuccessText');
      var policy = $('.policy');
      var smsCount = $('#smsCount');

      if (phone.val() === '') {
        phone.parent().addClass('is-invalid');
        phoneErrorBlock.text('Введите номер телефона');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxResetPasswordByPhone',
        data: {
          phone: phone.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          recoverSuccessBlock.addClass('is-success--phone');
          smsCount.text(response.count);
          phoneSuccessText.text(phone.val());
        } else if (response.success === 'count') {
          recoverSuccessBlock.addClass('is-success--phone');
          policy.html('<strong>Осталось <span id="smsCount">0</span> попыток<strong> введите код последнего полученого SMS</strong> попытки</strong>');
        } else {
          phone.parent().addClass('is-invalid');

          if (response.deletePhone === true) {
            passwordResetCodeInputError.text(response.text);
          } else {
            phoneErrorBlock.text('Неверный телефон');
          }

          buttonRecoverPhone.removeAttr('disabled');
        }
      });
      return false;
    });
    resetSmsCode.on('click', function () {
      var policy = $('.policy');
      var smsCount = $('#smsCount');
      $.ajax({
        method: 'POST',
        url: '/ajaxResetPasswordRecover',
        data: {
          phone: phone.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          smsCount.text(response.count);
        } else if (response.success === 'count') {
          policy.html('<strong>Осталось <span id="smsCount">0</span> попыток<strong> введите код последнего полученого SMS</strong> попытки</strong>');
        }
      });
    });
  } // Password recover email


  var buttonRecoverEmail = $('.js-password-recover__email-button');

  if (buttonRecoverEmail.length > 0) {
    var email = $('.js-password-recover__email-input');
    email.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    buttonRecoverEmail.on('click', function () {
      var emailErrorBlock = $('.js-password-recover__email-input-error');
      var emailSuccessText = $('.js-password-recover__email-success-text');

      if (email.val() === '') {
        email.parent().addClass('is-invalid');
        emailErrorBlock.text('Введите e-mail');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxSendPasswordResetLink',
        data: {
          email: email.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          recoverSuccessBlock.addClass('is-success--email');
          emailSuccessText.text(email.val());
        } else {
          email.parent().addClass('is-invalid');
          emailErrorBlock.text('Неверный e-mail адрес');
        }
      });
      return false;
    });
  } // Password reset email


  var buttonResetPasswords = $('.js-password-reset__passwords-button');

  if (buttonResetPasswords.length > 0) {
    var passwordErrorBlock = $('.js-password-reset__password-input-error');
    var passwordConfirmErrorBlock = $('.js-password-reset__password-confirm-input-error');
    var password = $('.js-password-reset__password-input');
    var passwordConfirm = $('.js-password-reset__password-confirm-input');
    var passwordToken = $('.js-password-recover__token');
    password.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    passwordConfirm.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    buttonResetPasswords.on('click', function () {
      if (password.val() === '') {
        password.parent().addClass('is-invalid');
        passwordErrorBlock.text('Введите новый пароль');
        return false;
      }

      if (password.val().length < 6) {
        password.parent().addClass('is-invalid');
        passwordErrorBlock.text('Пароль не должен быть короче 6 символов');
        return false;
      }

      if (passwordConfirm.val() === '') {
        passwordConfirm.parent().addClass('is-invalid');
        passwordConfirmErrorBlock.text('Повторите пароль');
        return false;
      }

      if (passwordConfirm.val() !== password.val()) {
        passwordConfirm.parent().addClass('is-invalid');
        passwordConfirmErrorBlock.text('Пароли не совпадают');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxResetPassword',
        data: {
          password: password.val(),
          hiddenToken: passwordToken.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          $('.js-password-reset__success-block').addClass('is-success--email');
        }
      });
      return false;
    });
  } // Password reset phone


  var buttonResetPasswordPhone = $('.jsPasswordResetButton');

  if (buttonResetPasswordPhone.length > 0) {
    var passwordResetCodeInputError = $('.jsPasswordResetCodeInputError');
    var passwordResetInputError = $('.jsPasswordResetInputError');
    var passwordResetConfirmInputError = $('.jsPasswordResetConfirmInputError');
    var passwordResetCodeInput = $('.jsPasswordResetCodeInput');
    var passwordResetInput = $('.jsPasswordResetInput');
    var passwordResetConfirmInput = $('.jsPasswordResetConfirmInput');
    var phoneConfirm = $('.jsPasswordRecoverFormInputPhone');
    buttonResetPasswordPhone.on('click', function () {
      var passwordResetCodeInputValue = passwordResetCodeInput.val().replace(/\s+/g, '');
      passwordResetCodeInputValue = passwordResetCodeInputValue.replace(/\s+/g, '&nbsp');

      if (passwordResetInput.val() === '') {
        passwordResetInput.parent().addClass('is-invalid');
        passwordResetInputError.text('Введите новый пароль');
        return false;
      }

      if (passwordResetInput.val().length < 6) {
        passwordResetInput.parent().addClass('is-invalid');
        passwordResetInputError.text('Пароль не должен быть короче 6 символов');
        return false;
      } else {
        passwordResetInput.parent().removeClass('is-invalid');
      }

      if (passwordResetConfirmInput.val() === '') {
        passwordResetConfirmInput.parent().addClass('is-invalid');
        passwordResetConfirmInputError.text('Повторите пароль');
        return false;
      } else {
        passwordResetConfirmInput.parent().removeClass('is-invalid');
      }

      if (passwordResetConfirmInput.val() !== passwordResetInput.val()) {
        passwordResetConfirmInputError.parent().addClass('is-invalid');
        passwordResetConfirmInputError.text('Пароли не совпадают');
        return false;
      } else {
        passwordResetConfirmInputError.parent().removeClass('is-invalid');
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxResetPasswordPhone',
        data: {
          phone: phoneConfirm.val(),
          code: passwordResetCodeInputValue,
          password: passwordResetInput.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          passwordResetCodeInput.parent().removeClass('is-invalid'); // Отправка запроса для авторизации

          $.ajax({
            method: 'POST',
            url: '/ajaxValidateMainAuth',
            data: {
              phone: phoneConfirm.val(),
              password: passwordResetInput.val(),
              _token: token,
              type: 'auth'
            }
          }).done(function (response) {
            setParams(response.token);
            window.localStorage.setItem('access_token', response.token);
            localStorage.setItem('_token', response.access_token);
            redirectToCabinet();
          });
        } else {
          passwordResetCodeInput.parent().addClass('is-invalid');

          if (response.deletePhone === true) {
            passwordResetCodeInputError.text(response.text);
          } else {
            passwordResetCodeInputError.text('Введен неправильный код');
          }
        }
      });
      return false;
    });
  } //--------------- Contact page -----------------------//


  var contactsForm = $('.js-contacts__form');

  if (contactsForm.length > 0) {
    var contactsName = $('.js-contacts__name');
    var contactsPhone = $('.js-contacts__phone');
    var contactsEmail = $('.js-contact__email');
    var contactsMessage = $('.js-contact__message');
    var contactsType = $('.js-contact__type');
    var contactSubmit = $('.js-contacts__form-submit');
    contactSubmit.on('click', function () {
      var errors = 0;

      if (contactsName.val() === '') {
        contactsName.parent().addClass('is-invalid');
        errors++;
      }

      if (contactsPhone.val() === '') {
        contactsPhone.parent().addClass('is-invalid');
        errors++;
      }

      if (contactsEmail.val() === '') {
        contactsEmail.parent().addClass('is-invalid');
        errors++;
      }

      if (contactsMessage.val() === '') {
        contactsMessage.parent().addClass('is-invalid');
        errors++;
      }

      if (contactsType.val() === '') {
        contactsType.val('home');
      }

      if (errors !== 0) {
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxSendContactForm',
        data: {
          name: contactsName.val(),
          phone: contactsPhone.val(),
          email: contactsEmail.val(),
          message: contactsMessage.val(),
          type: contactsType.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          $('.js-contacts__success').addClass('is-active');
        }
      });
      return false;
    });
  }

  var studioInviteForm = $('.js-studio-invite__form');

  if (studioInviteForm.length > 0) {
    var invitePassword = $('.js-studio-invite__password-input');
    var invitePasswordConfirm = $('.js-studio-invite__password-confirm-input');
    $('.js-studio-invite__submit').on('click', function (e) {
      var errors = 0;

      if (invitePassword.val() === '') {
        invitePassword.parent().addClass('is-invalid');
        errors++;
      }

      if (invitePassword.val().length < 6) {
        invitePassword.parent().addClass('is-invalid');
        invitePassword.next().next().next().text('Пароль не может быть короче 6 символов');
        errors++;
      }

      if (invitePasswordConfirm.val() === '') {
        invitePasswordConfirm.parent().addClass('is-invalid');
        errors++;
      }

      if (invitePassword.val() !== invitePasswordConfirm.val()) {
        invitePasswordConfirm.parent().addClass('is-invalid');
        invitePasswordConfirm.next().next().next().text('Пароли не совпадают');
        errors++;
      }

      if (errors > 0) {
        return false;
      }

      var urlParts = window.location.href.split('/');
      var token = urlParts[urlParts.length - 1];
      fetch("/studio-invites/".concat(token), {
        method: 'POST',
        body: new FormData(studioInviteForm[0])
      }).then(function (r) {
        return r.json();
      }).then(function (json) {
        setParams(json.token);
        window.localStorage.setItem('access_token', json.token);
        window.location.href = json.redirect;
      });
      e.preventDefault();
    });
    invitePassword.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    invitePasswordConfirm.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
  }

  var jsCoursePageForm = $('.jsCoursePageForm');

  if (jsCoursePageForm.length) {
    var jsCoursePageButton = $('.jsCoursePageButton');
    var jsCoursePageName = $('.jsCoursePageName');
    var jsCoursePagePhone = $('.jsCoursePagePhone');
    var jsCoursePageNickname = $('.jsCoursePageNickname');
    var jsCoursePageComment = $('.jsCoursePageComment');
    var jsCourseTariff = $('.jsCourseTariff'); // Remove is-invalid

    jsCoursePageName.on('input', function () {
      var maxLenForTextAreaAbout = 50;

      var _this = $(this);

      if (_this.val().length > maxLenForTextAreaAbout) {
        _this.val(_this.val().substr(0, maxLenForTextAreaAbout));
      }

      jsCoursePageName.parent().removeClass('is-invalid');
    }); // Remove is-invalid

    jsCoursePagePhone.on('input', function () {
      jsCoursePagePhone.parent().removeClass('is-invalid');
    }); // Remove is-invalid

    jsCoursePageNickname.on('input', function () {
      var maxLenForTextAreaAbout = 50;

      var _this = $(this);

      if (_this.val().length > maxLenForTextAreaAbout) {
        _this.val(_this.val().substr(0, maxLenForTextAreaAbout));
      }

      jsCoursePageNickname.parent().removeClass('is-invalid');
    });
    jsCoursePageComment.on('input', function () {
      var maxLenForTextAreaAbout = 100;

      var _this = $(this);

      if (_this.val().length > maxLenForTextAreaAbout) {
        _this.val(_this.val().substr(0, maxLenForTextAreaAbout));
      }
    });
    jsCoursePageButton.on('click', function () {
      var errors = 0;

      if (jsCoursePageName.val() === '') {
        jsCoursePageName.parent().addClass('is-invalid');
        jsCoursePageName.next('.js-bb-input-tip').removeAttr('style');
        errors++;
      }

      if (jsCoursePagePhone.val() === '') {
        jsCoursePagePhone.parent().addClass('is-invalid');
        jsCoursePagePhone.next('.js-bb-input-tip').removeAttr('style');
        errors++;
      }

      if (jsCoursePageNickname.val() === '') {
        jsCoursePageNickname.parent().addClass('is-invalid');
        jsCoursePageNickname.next('.js-bb-input-tip').removeAttr('style');
        errors++;
      }

      if (jsCourseTariff.val() === '') {
        jsCourseTariff.parent().addClass('is-invalid');
        jsCourseTariff.next('.js-bb-input-tip').removeAttr('style');
        errors++;
      }

      if (errors > 0) {
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxCoursePage',
        data: {
          name: jsCoursePageName.val(),
          phone: jsCoursePagePhone.val(),
          nickname: jsCoursePageNickname.val(),
          comment: jsCoursePageComment.val(),
          tariff: jsCourseTariff.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          $('.jsCoursePageForm').addClass('is-success');
        }
      });
    });
  }

  $(document).on('click', '#searchCity', function () {
    getCity();
  }); // Карта на странице контактов

  if ($('#map').length > 0) {
    var maps = new _app_Modules_Common_Assets_js_Maps__WEBPACK_IMPORTED_MODULE_0__["default"]();
    maps.initCardMap('map', 52.031613, 47.79199);
  }
});

function auto_layout_keyboard(str) {
  var replacer = {
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    '[': 'х',
    ']': 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    ';': 'ж',
    "'": 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    ',': 'б',
    '.': 'ю',
    '/': '.'
  };
  return str.replace(/[A-z/,.;\'\]\[]/g, function (x) {
    return x == x.toLowerCase() ? replacer[x] : replacer[x.toLowerCase()].toUpperCase();
  });
} // Number_format


function number_format(number, decimals, dec_point, thousands_sep) {
  // Strip all characters but numerical ones.
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');

  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
      dec = typeof dec_point === 'undefined' ? '.' : dec_point,
      s = '',
      toFixedFix = function toFixedFix(n, prec) {
    var k = Math.pow(10, prec);
    return '' + Math.round(n * k) / k;
  }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(dec);
}

function phoneConfirmTimer() {
  var timer = $('.js-timer');

  var tim = function tim() {
    setTimeout(function () {
      var t = timer.data('timer');
      timer.text(t);
      var int = setInterval(function () {
        t--;

        if (t == -1) {
          clearInterval(int);
          timer.parent().css('display', 'none');
          $('.js-cabinet-phone-confirm').removeAttr('style');
        } else {
          timer.text(t);
        }
      }, 1000);
      $('.js-cabinet-phone-confirm').on('click', function (e) {
        clearInterval(int);
        tim();
      });
    });
  };

  tim();
}

function addFavorite(user) {
  var favorite = localStorage.getItem('favorite');
  var userID = user;
  $.ajax({
    method: 'POST',
    url: '/ajaxAddFavorite',
    data: {
      favorite: favorite,
      userID: userID,
      _token: token
    }
  }).done(function (response) {
    if (response.success == true) {// console.log('Добавлен в изранное');
    }
  });
}

function ajaxPhoneShow() {
  $('.js-ajax-show-phone').addClass('js-user-phone--show');
  $('.js-user-phone--show').trigger('click');
}

function ajaxReviewsAdd(userName, user) {
  $('.reviews__header').attr('data-from', user);
  $('#auth-form').modal('hide');
  $('#review-add').modal('show'); // $.fancybox.open($('#review-add'));
}

function redirectToCabinet() {
  $.ajax({
    method: 'POST',
    url: '/ajaxRedirectToCabinet',
    data: {
      // userID: userID,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      var route = response.route;
      location.replace(route);
    }
  });
}

function getCity() {
  var city = $('.js-search-group__cities');
  var cityAlias = $('.js-search-alias__input').val();
  var selected = city.find('.is-selected');
  var alias = selected.find('a').data('alias');
  var citySelected = $('.firstscreen__search').find('.js-search-group__cities').find('.search-hint__item.is-selected');

  if (citySelected.length) {
    $('.js-search-alias__input').val(citySelected.find('.js-search-input__link').attr('data-alias'));
    windowLocationCity(citySelected.find('.js-search-input__link').attr('data-alias'));
  } else {
    if (cityAlias !== '') {
      if (typeof alias === 'undefined') {
        $('.js-search-alias__input').val(cityAlias);
        windowLocationCity(cityAlias);
      } else {
        $('.js-search-alias__input').val(alias);
        windowLocationCity(alias);
      }
    } else {
      $('.js-search-alias__input').val(cityAlias);
      windowLocationCity(cityAlias);
    }
  }
}

function windowLocationCity(city) {
  if (typeof city === 'undefined') {
    city = 'www';
  }

  if (document.domain.split('.').length === 3) {
    var subdomainNot = document.domain.split('.').slice(1).join('.');
    window.location = location.protocol + '//' + city + '.' + subdomainNot;
  } else {
    window.location = location.protocol + '//' + city + '.' + document.domain;
  }
} // validation input text


function parseInputText(oldString) {
  var newString = '';
  var lengthOldString = oldString.length;

  if (oldString) {
    for (var i = 0; i < lengthOldString; i++) {
      var codeChar = oldString.charCodeAt(i);

      if (codeChar === 10 || codeChar === 13 || codeChar > 31 && codeChar < 127 || codeChar === 1025 || codeChar > 1039 && codeChar < 1104 || codeChar === 1105) {
        newString += oldString[i];
      }
    }

    if (!(newString.trim() === '')) {
      return newString;
    }
  }

  return null;
}

function setParams(jwt) {
  var jwtObj = parseJwt(jwt);
  var userID = jwtObj.userID;
  var addressID = jwtObj.addressID;

  if (!userID && !addressID) {
    console.log('getUserID');
    window.location.href = "/auth/sign-in?from=".concat(window.location.href);
    return 0;
  } else {
    window.localStorage.setItem('userID', userID);
    window.localStorage.setItem('addressID', addressID);
  }
}

function parseJwt() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  try {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    var json = JSON.parse(jsonPayload);
    console.log('token', json);
    return json;
  } catch (_unused) {
    return {};
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ })

}]);