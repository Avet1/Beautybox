/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/client/js/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,"vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/*!********************************************************************************************************!*\
  !*** multi ./resources/js/main.js ./node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/artem/Work/beautybox.ru/resources/js/main.js */"8yrVk4I8");
module.exports = __webpack_require__(/*! /home/artem/Work/beautybox.ru/node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js */"94FFRWTZ");


/***/ }),

/***/ "4aG50mNh":
/*!************************************!*\
  !*** ./resources/js/main/chats.js ***!
  \************************************/
/*! exports provided: sendData, sendConfirm, sendReject, autosize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendData", function() { return sendData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendConfirm", function() { return sendConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendReject", function() { return sendReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autosize", function() { return autosize; });
$(document).ready(function () {
  if ($('.js-lk-request__chat-form').length > 0) {
    var socket = io.connect(':5001');
    socket.on('chat:message', function (data) {
      $('.js-lk-request__message-box').append(data);
    });
    var message = $('.js-lk-request__chat-message');
    var requestID = $('.js-lk-request__requestID');
    var userID = $('.js-lk-request__userID');
    var isMaster = $('.js-lk-request__isMaster');
    var isClient = $('.js-lk-request__isClient');
    var textarea = document.querySelector('.js-textarea');
    textarea.addEventListener('keydown', autosize);
    textarea.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13 || e.keyCode === 10)) {
        textarea.value += '\r\n';
      } else if (e.keyCode === 13 || e.keyCode === 10) {
        sendData(message, requestID, userID, isMaster, isClient);
        e.preventDefault();
      }
    });
    $('.js-lk-request__chat-submit-button').on('click', function () {
      sendData(message, requestID, userID, isMaster, isClient);
      return false;
    });
    $('.js-lk-request__confirm').on('click', function () {
      sendConfirm(requestID, userID, isMaster, isClient);
      return false;
    });
    $('.js-lk-request__reject').on('click', function () {
      sendReject(requestID, userID, isMaster, isClient);
      return false;
    });
  }
});

function sendData(message, requestID, userID, isMaster, isClient) {
  var obj = {};
  obj['message'] = message.val();
  obj['requestID'] = requestID.val();
  obj['userID'] = userID.val();
  obj['isMaster'] = isMaster.val();
  obj['isClient'] = isClient.val();
  $.ajax({
    method: 'POST',
    url: '/ajaxParseSocketMessage',
    data: {
      arrData: JSON.stringify(obj),
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      $('.js-lk-request__message-empty').remove();
      $('.js-lk-request__chat-message').val('');
    }
  });
}

function sendConfirm(requestID, userID, isMaster, isClient) {
  var obj = {};
  obj['message'] = 'Заявка принята';
  obj['requestID'] = requestID.val();
  obj['userID'] = userID.val();
  obj['isMaster'] = isMaster.val();
  obj['isClient'] = isClient.val();
  obj['confirmed'] = 1;
  $.ajax({
    method: 'POST',
    url: '/ajaxConfirmRequest',
    data: {
      arrData: JSON.stringify(obj),
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      $('.js-lk-request__button-box').remove();
    }
  });
}

function sendReject(requestID, userID, isMaster, isClient) {
  var obj = {};
  obj['message'] = 'Заявка отклонена';
  obj['requestID'] = requestID.val();
  obj['userID'] = userID.val();
  obj['isMaster'] = isMaster.val();
  obj['isClient'] = isClient.val();
  obj['rejected'] = 1;
  $.ajax({
    method: 'POST',
    url: '/ajaxRejectRequest',
    data: {
      arrData: JSON.stringify(obj),
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      $('.js-lk-request__button-box').remove();
    }
  });
}

function autosize() {
  var el = this;
  var buttons = $('.lk-request-item__buttons');
  setTimeout(function () {
    el.style.cssText = 'height:37px';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
    buttons.css({
      bottom: 52 + el.scrollHeight + 'px'
    });

    if (el.scrollHeight >= 123) {
      el.style.overflow = 'auto';
      buttons.css({
        bottom: 160 + 'px'
      });
    }
  }, 0);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "5/Bq5Wxc":
/*!******************************************************!*\
  !*** ./resources/js/_frontend/main/pages/catalog.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Catalog; });
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
/**
 * Main Catalog.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */


var Catalog =
/*#__PURE__*/
function () {
  function Catalog() {
    _classCallCheck(this, Catalog);
  }

  _createClass(Catalog, [{
    key: "init",
    // constructor() {
    //     this.counter = 0;
    // }
    value: function init(element) {
      this.initBtnToggleMap(element);
      this.initFilterCategory(element);
      this.initMoveBlocks(element);
      this.initAccordeonWrapp(element);
    } // Btn show catalog

  }, {
    key: "initBtnToggleMap",
    value: function initBtnToggleMap(element) {
      var _this = this;

      element.querySelectorAll('.js-show--list').forEach(function (block) {
        block.removeEventListener('click', _this._showCatalog);
        block.addEventListener('click', _this._showCatalog);
      });
      element.querySelectorAll('.js-show--map').forEach(function (block) {
        block.removeEventListener('click', _this._showMap);
        block.addEventListener('click', _this._showMap);
      });
    }
  }, {
    key: "_showCatalog",
    value: function _showCatalog(e) {
      var catalogMap = document.querySelector('.js-catalog-map');
      catalogMap.style.display = 'none';
      catalogMap.classList.remove('is-checked');
      document.querySelector('.catalog-content__inner').removeAttribute('style');
      e.target.closest('.js-show--list').parentElement.classList.remove('is-active');
    }
  }, {
    key: "_showMap",
    value: function _showMap(e) {
      var catalogMap = document.querySelector('.js-catalog-map');
      catalogMap.style.display = 'block';
      catalogMap.classList.add('is-checked');
      document.querySelector('.catalog-content__inner').style.display = 'none';
      e.target.closest('.js-show--map').parentElement.classList.add('is-active');
    } //filter category

  }, {
    key: "initFilterCategory",
    value: function initFilterCategory() {
      if (document.documentElement.offsetWidth > 768) {
        var _select = function _select(e) {
          var category = e.target.closest('.js-category');
          var item = e.target.closest('.category__item');
          item.classList.add('is-selected');
          category.classList.add('is-checked');
          category.querySelectorAll('.category__item').forEach(function (block) {
            if (block != item) {
              block.style.display = 'none';
            }
          });
        };

        var _unselect = function _unselect(e) {
          var category = e.target.closest('.js-category');
          var item = e.target.closest('.category__item');
          category.classList.remove('is-checked');
          item.classList.remove('is-selected');
          category.querySelectorAll('.category__item').forEach(function (item) {
            item.removeAttribute('style');
          });
        };

        document.querySelectorAll('.js-category.is-checked .category__item:not(.is-selected)').forEach(function (item) {
          item.style.display = 'none';
        });
        document.querySelectorAll('.js-category .category__link').forEach(function (item) {
          item.removeEventListener('click', _select);
          item.addEventListener('click', _select);
        });
        document.querySelectorAll('.js-category--reset').forEach(function (item) {
          item.removeEventListener('click', _unselect);
          item.addEventListener('click', _unselect);
        });
      } else {
        var _select2 = function _select2(e) {
          var category = e.target.closest('.js-category');
          var item = e.target.closest('.category__item');

          if (item.classList.contains('is-selected')) {
            item.classList.remove('is-selected');
            var statusChecked = Array.prototype.slice.call(category.querySelectorAll('.category__item')).find(function (item) {
              if (item.classList.contains('is-selected')) {
                return true;
              }
            });

            if (!statusChecked) {
              category.classList.remove('is-checked');
            }
          } else {
            item.classList.add('is-selected');
            category.classList.add('is-checked');
          }
        };

        document.querySelectorAll('.js-category .category__link').forEach(function (item) {
          item.removeEventListener('click', _select2);
          item.addEventListener('click', _select2);
        });
      }
    } //Move block in media screen

  }, {
    key: "initMoveBlocks",
    value: function initMoveBlocks() {
      if ($(window).width() <= 480) {
        $('.catalog__view-toggle').insertBefore('.catalog__inner');
      }
    } //If page catalog filter transform accordeon

  }, {
    key: "initAccordeonWrapp",
    value: function initAccordeonWrapp() {
      if ($('.wrapper').hasClass('page-catalog')) {
        if ($(window).width() <= 768) {
          $('.catalog-filter__body').addClass('bb-accordeon bb-accordeon--custom bb-accordeon--other js-bb-accordeon');
          $('.js-catalog-filter-item').each(function () {
            $(this).addClass('bb-accordeon__item').find('.catalog-filter__title').not('.catalog-filter__title_category').addClass('bb-accordeon__title');
            $(this).find('.catalog-filter__content').addClass('bb-accordeon__content').slideUp();
          });
          $('.js-catalog-filter-item:lt(2)').addClass('is-open').find('.bb-accordeon__content').slideDown();
        }
      }
    }
  }]);

  return Catalog;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "8yrVk4I8":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_frontend_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/_frontend/main */ "bvygj16B");
/* harmony import */ var _js_main_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/main/custom */ "y3lw6KIv");
/* harmony import */ var _js_main_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/main/filter */ "bnPYasv8");
/* harmony import */ var _js_main_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/main/card */ "UsqVoyK5");
/* harmony import */ var _js_main_cabinet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/main/cabinet */ "UmnsbAlZ");
/* harmony import */ var _js_main_chats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/main/chats */ "4aG50mNh");
/* harmony import */ var _js_main_uploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/js/main/uploader */ "ecIIYstC");
/* harmony import */ var _js_main_uploader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_main_uploader__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "UmnsbAlZ":
/*!**************************************!*\
  !*** ./resources/js/main/cabinet.js ***!
  \**************************************/
/*! exports provided: submitMainProfileForm, submitMainProfileStudioForm, submitSecurityProfileForm, updateImage, updateService, initCabinetMap, geoMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitMainProfileForm", function() { return submitMainProfileForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitMainProfileStudioForm", function() { return submitMainProfileStudioForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitSecurityProfileForm", function() { return submitSecurityProfileForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateImage", function() { return updateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return updateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCabinetMap", function() { return initCabinetMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoMap", function() { return geoMap; });
$(document).ready(function () {
  if ($('.js-profile-form-edit__main').length > 0) {
    var obj = [];
    obj['name'] = $('.js-profile__name');
    obj['genderClass'] = $('.js-profile__gender');
    obj['genderEntity'] = $('input[class="js-profile__gender"]:checked');
    obj['genderBlock'] = $('.js-profile-gender__block');
    obj['phone'] = $('.js-profile__phone');
    obj['email'] = $('.js-profile__email');
    obj['workPlace'] = $('.js-profile__workPalace');
    /*
     *-----------------------
     * Change NAME field
     * ----------------------
     */

    $(obj['name']).on('input', function () {
      $(this).parent().removeClass('is-invalid');
      return false;
    });
    /*
     *-----------------------
     * Change GENDER field
     * ----------------------
     */

    $(obj['genderClass']).on('change', function () {
      obj['genderEntity'] = $(this);
      $(this).parent().parent().removeClass('is-invalid');
      return false;
    });
    /*
     *-----------------------
     * Change WORK_PLACE field
     * ----------------------
     */

    $(obj['workPlace']).on('change', function () {
      obj['workPlace'] = $(this);
      $(this).parent().parent().removeClass('is-invalid');
      return false;
    });
    /*
     *-----------------------
     * Change EMAIL field
     * ----------------------
     */

    $(obj['email']).on('input', function () {
      $(this).parent().removeClass('is-invalid');
      return false;
    });
    /*
     *-----------------------
     * Click on submit button
     * ----------------------
     */

    $('.js-profile-form-submit__main').on('click', function () {
      submitMainProfileForm(obj);
      return false;
    });
    $('.js-cabinet-phone-confirm').on('click', function () {
      var entity = $(this);
      var phone = $('.js-profile__phone').val();
      $.ajax({
        method: 'POST',
        url: '/ajaxSendSms',
        data: {
          phone: phone,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          entity.css('display', 'none').closest('.js-confirm').find('.confirm__timer, .confirm__field').removeAttr('style');
          phoneConfirmTimer();
        }
      });
      return false;
    });
    $('.js-cabinet-phone-confirm__button').on('click', function () {
      var confirmValue = $('#js-cabinet-phone-confirm__input').val();
      var error = $('#js-cabinet-phone-confirm__error');
      var errorBlock = $('#js-cabinet-phone-confirm__error-block');

      if (confirmValue === '') {
        errorBlock.addClass('is-invalid');
        error.text('Введите код из SMS сообщения');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxConfirmSms',
        data: {
          confirmValue: confirmValue,
          updateUser: true,
          redirect: true,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          //window.location.href = response.redirect;
          $('.js-profile-editor__attention-success').removeClass('is-hidden');
          $('.js-profile-editor__attention-error').remove();
          $('#js-cabinet-phone-confirm__error-block').remove();
          $('.js-profile-editor__input-phone').removeClass('is-error').addClass('is-confirm');
        } else {
          errorBlock.addClass('is-invalid');
          error.text('Не верный код');
        }
      });
      return false;
    });
  }

  if ($('.js-profile-studio-form-edit__main').length > 0) {
    var studioObj = [];
    studioObj['name'] = $('.js-profile__name');
    studioObj['phone'] = $('.js-profile__phone');
    studioObj['email'] = $('.js-profile__email');
    /*
     *-----------------------
     * Change NAME field
     * ----------------------
     */

    $(studioObj['name']).on('input', function () {
      $(this).parent().removeClass('is-invalid');
      return false;
    });
    /*
     *-----------------------
     * Change EMAIL field
     * ----------------------
     */

    $(studioObj['email']).on('input', function () {
      $(this).parent().removeClass('is-invalid');
      return false;
    });
    /*
     *-----------------------
     * Click on submit button
     * ----------------------
     */

    $('.js-profile-studio-form-submit__main').on('click', function () {
      submitMainProfileStudioForm(studioObj);
      return false;
    });
    $('.js-cabinet-phone-confirm').on('click', function () {
      var entity = $(this);
      var phone = $('.js-profile__phone').val();
      $.ajax({
        method: 'POST',
        url: '/ajaxSendSms',
        data: {
          phone: phone,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          entity.css('display', 'none').closest('.js-confirm').find('.confirm__timer, .confirm__field').removeAttr('style');
          phoneConfirmTimer();
        }
      });
      return false;
    });
    $('.js-cabinet-phone-confirm__button').on('click', function () {
      var confirmValue = $('#js-cabinet-phone-confirm__input').val();
      var error = $('#js-cabinet-phone-confirm__error');
      var errorBlock = $('#js-cabinet-phone-confirm__error-block');

      if (confirmValue === '') {
        errorBlock.addClass('is-invalid');
        error.text('Введите код из SMS сообщения');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxConfirmSms',
        data: {
          confirmValue: confirmValue,
          updateUser: true,
          redirect: true,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          //window.location.href = response.redirect;
          $('.js-profile-editor__attention-success').removeClass('is-hidden');
          $('.js-profile-editor__attention-error').remove();
          $('#js-cabinet-phone-confirm__error-block').remove();
          $('.js-profile-editor__input-phone').removeClass('is-error').addClass('is-confirm');
        } else {
          errorBlock.addClass('is-invalid');
          error.text('Не верный код');
        }
      });
      return false;
    });
  }

  if ($('.js-profile-form-edit__contact').length > 0) {
    $('.js-profile-contact__region').on('change', function () {
      var regionID = $(this).val();
      $.ajax({
        method: 'POST',
        url: '/ajaxGetCitiesByRegionID',
        data: {
          regionID: regionID,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          var select = $('.js-profile-contact__city');
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
      });
      return false;
    });
    /*
     *-----------------------
     * Click on submit button
     * ----------------------
     */

    $('.js-profile-form-submit__contact').on('click', function () {
      var city = $('.js-profile-contact__city');

      if (city.val() == 0) {
        return false;
      }

      $('.js-profile__success').addClass('is-active');
      setTimeout(function () {
        $('.js-profile-form-edit__contact').submit();
      }, 2000);
      return false;
    });
  }

  if ($('.js-profile-form-edit__security').length > 0) {
    var passwordNew = $('.js-profile__password-new');
    var passwordConfirm = $('.js-profile__password-confirm');
    passwordNew.on('input', function () {
      $(this).parent().removeClass('is-invalid');
      return false;
    });
    passwordConfirm.on('input', function () {
      $(this).parent().removeClass('is-invalid');
      return false;
    });
    $('.js-profile-form-submit__security').on('click', function () {
      submitSecurityProfileForm(passwordNew, passwordConfirm);
      return false;
    });
  }

  if ($('.js-raise-the-profile').length > 0) {
    $('.js-raise-the-profile').on('click', function () {
      $.ajax({
        method: 'POST',
        url: '/ajaxRaiseTheProfile',
        data: {
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          var itemPosition = response.itemPosition;
          $('.js-update-number').text(itemPosition + ' - я');
        }
      });
      return false;
    });
  }

  if ($('.js-upload-avatar').length > 0) {
    var cropParams = {};
    cropParams['x'] = 0;
    cropParams['y'] = 0;
    cropParams['width'] = 0;
    cropParams['height'] = 0;
    $('.js-upload-avatar__button').on('change', function () {
      var files = this.files;
      var data = new FormData();
      event.stopPropagation();
      event.preventDefault();

      if (typeof files === 'undefined') {
        return false;
      }

      $.each(files, function (key, value) {
        data.append(key, value);
      });
      data.append('_token', token);
      $.ajax({
        method: 'POST',
        url: '/ajaxPrepareAvatar',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function success(response) {
          if (response.success === true) {
            var img = $('.js-upload-avatar__cropper');
            $('.js-upload-avatar__block').show();
            img.attr('src', response.src);
            img.attr('data-name', response.fileName);
            $('#js-upload-avatar').cropper({
              aspectRatio: 1,
              crop: function crop(e) {
                cropParams['x'] = e.x;
                cropParams['y'] = e.y;
                cropParams['width'] = e.width;
                cropParams['height'] = e.height;
              }
            });
          }
        }
      });
      return false;
    });
    $('.js-upload-avatar__save').on('click', function () {
      var avatarPath = $('.js-upload-avatar__cropper').data('name');
      var currentUserID = $('.js-upload-avatar__img-block').data('id');
      cropParams['avatarPath'] = avatarPath;
      cropParams['currentUserID'] = currentUserID;
      $.ajax({
        method: 'POST',
        url: '/ajaxCropAndSaveAvatar',
        data: {
          cropParams: JSON.stringify(cropParams),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          var leftImg = $('.js-upload-avatar__left-img');
          var topImg = $('.js-upload-avatar__left-top');
          leftImg.attr('src', response.avatar);
          topImg.attr('src', response.avatar);
          updateImage(leftImg);
          updateImage(topImg);
          $('.js-upload-avatar__save').remove();
          $.fancybox.close();
        }
      });
    });
  }

  if ($('.js-cat-services-select__block').length > 0) {
    var block = $('.js-cat-services__div');
    var arrCategories = [];
    block.each(function () {
      if ($(this).hasClass('is-checked')) {
        arrCategories.push($(this).data('id'));
      }
    });
    block.on('click', function () {
      var categoryID = $(this).data('id');
      var index = arrCategories.indexOf(categoryID);

      if (index === -1) {
        arrCategories.push(categoryID);
      }

      if ($(this).hasClass('is-checked') && !$(this).hasClass('js-disable-category')) {
        $(this).removeClass('is-checked');
        arrCategories.splice(index, 1);
      } else if ($(this).hasClass('is-checked') && $(this).hasClass('js-disable-category')) {
        $('.js-cat-services-button__remove').attr('data-id', categoryID);
        var title = $(this).data('title');
        $.fancybox.open({
          src: '#disable-category',
          type: 'inline'
        });
        $('.disable-category__data-title').text(title);
      } else {
        $(this).addClass('is-checked');
      }
    });
    $(document).on('click', '.js-cat-services-button__remove', function () {
      var categoryID = $(this).attr('data-id');
      var index = arrCategories.indexOf(parseInt(categoryID));

      if (index !== -1) {
        arrCategories.splice(index, 1);
      }

      $.fancybox.close();
      $('.js-cat-item-' + categoryID).removeClass('is-checked').removeClass('js-disable-category');
    });
    $('.js-cat-services-select__button').on('click', function () {
      $.ajax({
        method: 'POST',
        url: '/ajaxAddCategoriesToUser',
        data: {
          userID: $(this).data('id'),
          categoryIDs: JSON.stringify(arrCategories),
          group: $(this).data('group'),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        }
      });
      return false;
    });
  }

  if ($('.js-services-select__block').length > 0) {
    $('.js-service-check__div').on('click', function () {
      var _this = $(this);

      var serviceID = $(this).data('id');
      var priceBlock = $('.js-service-input-block__price-' + serviceID);
      var timeBlock = $('.js-service-input-block__time-' + serviceID);

      if (!_this.hasClass('is-checked')) {
        _this.addClass('is-checked');

        priceBlock.removeAttr('disabled');
        timeBlock.removeAttr('disabled');

        if (priceBlock.val() === '') {
          priceBlock.parent().addClass('is-invalid');
        }

        if (timeBlock.val() === '') {
          timeBlock.parent().addClass('is-invalid');
        }

        updateService(serviceID, 1);
      } else {
        _this.removeClass('is-checked');

        priceBlock.attr('disabled', '');
        timeBlock.attr('disabled', '');
        priceBlock.parent().removeClass('is-invalid');
        timeBlock.parent().removeClass('is-invalid');
        updateService(serviceID, 0);
      }
    });
    $('.service-item__field').on('click', function () {
      var _this = $(this);

      if (_this.find('.js-service-input').attr('disabled')) {
        _this.parent('.service-item').children('.js-service-check__div').addClass('is-checked');

        _this.find('.js-service-input').removeAttr('disabled', '');
      }
    });
    var inputElement = $('.js-service-input');
    inputElement.on('input', function () {
      $(this).parent().removeClass('is-invalid');

      if ($(this).val() === '') {
        $(this).parent().addClass('is-invalid');
      }
    });
    inputElement.on('change', function () {
      var send = false;

      var _this = $(this);

      var price;
      var time;

      if (_this.hasClass('js-i-time')) {
        if (_this.val() !== '' && _this.parent().prev().children('.js-i-price').val() !== '') {
          send = true;
          price = _this.parent().prev().children('.js-i-price').val();
          time = _this.val();
        }
      }

      if (_this.hasClass('js-i-price')) {
        if (_this.val() !== '' && _this.parent().next().children('.js-i-time').val() !== '') {
          send = true;
          price = _this.val();
          time = _this.parent().next().children('.js-i-time').val();
        }
      }

      if (send === true) {
        var serviceID = $(this).data('id');
        $.ajax({
          method: 'POST',
          url: '/ajaxMasterService',
          data: {
            serviceID: $(this).data('id'),
            price: price,
            time: time,
            _token: token
          }
        }).done(function (response) {
          if (response.success === true) {
            var savedBlock = $('.js-service-item__save-' + serviceID);
            savedBlock.fadeIn();
            setTimeout(function () {
              savedBlock.fadeOut();
            }, 1000);
          }
        });
      }
    });
  }

  if ($('.js-lk-works__block').length > 0) {
    $('.js-lk-popup-categories__select').on('change', function () {
      $(this).parent().removeClass('is-invalid');
      var categoryID = $(this).val();

      if (categoryID !== 0) {
        $.ajax({
          method: 'POST',
          url: '/ajaxSelectServicesByCategoryID',
          data: {
            categoryID: categoryID,
            _token: token
          }
        }).done(function (response) {
          if (response.success === true) {
            var select = $('.js-lk-popup-services__select');
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
        });
      }
    });
    $('.js-lk-popup-create-album__button').on('click', function () {
      var categoryID = $('.js-lk-popup-categories__select');
      var serviceID = $('.js-lk-popup-services__select');
      var albumDescription = $('.js-lk-popup-album__description');
      var errors = 0;

      if (categoryID.val() === '0') {
        errors++;
        categoryID.parent().addClass('is-invalid');
      } else {
        categoryID.parent().removeClass('is-invalid');
      }

      if (serviceID.val() === '0') {
        errors++;
        serviceID.parent().addClass('is-invalid');
      } else {
        serviceID.parent().removeClass('is-invalid');
      }

      if (errors !== 0) {
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxAddNewAlbum',
        data: {
          categoryID: categoryID.val(),
          serviceID: serviceID.val(),
          albumDescription: albumDescription.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        }
      });
    });
    $('.js-lk-popup-services__select').on('change', function () {
      $(this).parent().removeClass('is-invalid');
    });
    $('.js-lk-popup-album__name').on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
  }

  var removeAlbumIcon = $('.js-delete-album__icon');

  if (removeAlbumIcon.length > 0) {
    removeAlbumIcon.on('click', function () {
      $('.js-delete-album__button').attr('data-album', $(this).data('id'));
    });
  }

  var removeAlbumButton = $('.js-delete-album__button');

  if (removeAlbumButton.length > 0) {
    removeAlbumButton.on('click', function () {
      var albumID = $(this).attr('data-album');
      $.ajax({
        method: 'POST',
        url: '/ajaxRemoveAlbumFromList',
        data: {
          albumID: albumID,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          $.fancybox.close();
          $('.js-album__block-' + albumID).remove();
        }
      });
    });
  } // Map


  if ($('.js-cabinet__map').length > 0) {
    ymaps.ready(initCabinetMap);
  }

  var rotateFileRight = $('.js-rotate-file__right');

  if (rotateFileRight.length > 0) {} // rotateFileRight.on('click', function () {
  //     var albumID = $(this).attr('data-album');
  //     $.ajax({
  //         method: 'POST',
  //         url: '/ajaxRemoveAlbumFromList',
  //         data: {
  //             albumID: albumID,
  //             _token: token
  //         }
  //     }).done(function (response) {
  //         if (response.success === true) {
  //             $.fancybox.close();
  //             $('.js-album__block-' + albumID).remove();
  //         }
  //     });
  // });
  // if ($('.js-working-hours').length > 0) {
  //
  // }


  if ($('.js-working-hours').length > 0) {
    var checkbox = $('.js-working-hours').find('.js-workingEmpty');
    var workList = $('.js-working-hours').find('.working-hours');
    checkbox.on('click', function () {
      var workingEmpty = $('.js-workingEmpty').children().val();

      if (workingEmpty == 0) {
        $('.js-workingEmpty').children().val('1');
      } else {
        $('.js-workingEmpty').children().val('0');
      }

      if (checkbox.hasClass('is-checked')) {
        workList.removeAttr('style');
        checkbox.removeClass('is-checked');
      } else {
        workList.css('display', 'none');
        checkbox.addClass('is-checked');
      }

      return false;
    }); // $('.js-working-hours').on('click', function () {
    //
    //
    // });
  }

  var showMasterInCatalog = $('.js-show-master-in-catalog');

  if (showMasterInCatalog.length > 0) {
    showMasterInCatalog.on('click', function () {
      var active;

      if ($(this).is(':checked')) {
        active = 1;
      } else {
        active = 0;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxShowMasterInCatalog',
        data: {
          userActive: active,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {}
      });
    });
  }

  var deleteAddAddress = $('.js-delete-add-address');

  if (deleteAddAddress.length > 0) {
    deleteAddAddress.on('click', function () {
      var _this = $(this);

      $.ajax({
        method: 'POST',
        url: '/ajaxDeleteAddAddress',
        data: {
          addressID: _this.data('address'),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          _this.parent().remove();
        }
      });
      return false;
    });
  }

  var stepOneSubmitButton = $('.js-step-one-phone-confirm');

  if (stepOneSubmitButton.length > 0) {
    var stepOneInput = $('.js-step__first-input');
    var stepOneConfirm = $('.js-step-one__confirm');
    stepOneSubmitButton.on('click', function () {
      entity = $(this);

      if (stepOneInput.val() === '') {
        stepOneInput.parent().addClass('is-invalid');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxSendSms',
        data: {
          phone: stepOneInput.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          entity.css('display', 'none').closest('.js-confirm').find('.confirm__timer, .confirm__field').removeAttr('style');
          phoneConfirmTimer();
        }
      });
    });
    stepOneInput.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    stepOneConfirm.on('click', function () {
      var _this = $(this);

      var confirmValue = $('#js-step-one-phone-confirm__input').val();
      var error = $('#js-step-one-phone-confirm__error');
      var errorBlock = $('#js-step-one-phone-confirm__error-block');

      if (confirmValue === '') {
        errorBlock.addClass('is-invalid');
        error.text('Введите код из SMS сообщения');
        return false;
      } // cabinet


      $.ajax({
        method: 'POST',
        url: '/ajaxConfirmSms',
        data: {
          confirmValue: confirmValue,
          updateUser: true,
          redirect: true,
          phone: stepOneInput.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          _this.closest('.js-profile-form-edit__main').submit();
        } else {
          errorBlock.addClass('is-invalid');
          error.text('Не верный код');
        }
      });
      return false;
    });
  }

  if ($('.js-studio__add-admin').length > 0) {
    var adminName = $('.js-popup-studio__admin-name-input');
    var adminPhone = $('.js-popup-studio__admin-phone-input');
    var adminEmail = $('.js-popup-studio__admin-email-input');
    var adminAddress = $('.js-popup-studio__admin-address-input');
    $('.js-popup-studio__admin-add-button').on('click', function () {
      var errors = 0;

      if (adminName.val() === '') {
        adminName.parent().addClass('is-invalid');
        errors++;
      }

      if (adminPhone.val() === '') {
        adminPhone.parent().addClass('is-invalid');
        errors++;
      }

      if (adminEmail.val() === '') {
        adminEmail.parent().addClass('is-invalid');
        errors++;
      }

      if (errors !== 0) {
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxStudioAddAdmin',
        data: {
          phone: adminPhone.val(),
          name: adminName.val(),
          email: adminEmail.val(),
          address: adminAddress.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        } else {
          adminPhone.parent().addClass('is-invalid');
          adminPhone.next().text(response.error);
        }
      });
    });
    adminName.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    adminPhone.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    adminEmail.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    $('.js-studio-form-submit__admins').on('click', function () {
      $('.js-studio__admin-master-input').each(function () {
        var _this = $(this);

        _this.next().next().val(_this.val());
      });
      $('.js-studio__success').addClass('is-active');
      setTimeout(function () {
        $('.js-studio-form-edit__admins').submit();
      }, 2000);
      return false;
    });
    $('.js-studio__admin-delete-button').on('click', function () {
      var adminID = $(this).data('id');
      $('.js-popup-studio__buttons-block-admin').attr('data-id', adminID);
    });
    $('.js-studio__admin-meet-button').on('click', function () {
      var adminID = $(this).data('id');
      $('.js-popup-studio__buttons-block-admin-meet').attr('data-id', adminID);
    });
    $('.js-popup-studio__delete-admin').on('click', function () {
      var adminID = $(this).parent().attr('data-id');
      $.ajax({
        method: 'POST',
        url: '/ajaxStudioRemoveAdmin',
        data: {
          adminID: adminID,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        }
      });
    });
    $('.js-popup-studio__admin-send-meet').on('click', function () {
      var adminID = $(this).parent().attr('data-id');
      var input = $('.js-popup-studio__admin-meet-email-input');

      if (input.val() === '') {
        input.parent().addClass('is-invalid');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxStudioSendMeetAdmin',
        data: {
          adminID: adminID,
          email: input.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        }
      });
    });
    $('.js-popup-studio__admin-meet-email-input').on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
  }

  if ($('.js-studio__add-master').length > 0) {
    var masterName = $('.js-popup-studio__master-name-input');
    var masterPhone = $('.js-popup-studio__master-phone-input');
    var masterEmail = $('.js-popup-studio__master-email-input');
    var masterGenderMale = $('.js-popup-studio__master-gender-male-input');
    var masterGenderFemale = $('.js-popup-studio__master-gender-female-input');
    var masterGender = 0;
    var masterAdmin = $('.js-popup-studio__master-admin-input');
    $('.js-popup-studio__master-add-button').on('click', function () {
      var errors = 0;

      if (masterGenderMale.is(':checked')) {
        masterGender = 1;
      }

      if (masterGenderFemale.is(':checked')) {
        masterGender = 2;
      }

      if (masterName.val() === '') {
        masterName.parent().addClass('is-invalid');
        errors++;
      }

      if (masterPhone.val() === '') {
        masterPhone.parent().addClass('is-invalid');
        errors++;
      }

      if (masterEmail.val() === '') {
        masterEmail.parent().addClass('is-invalid');
        errors++;
      }

      if (errors !== 0) {
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxStudioAddMaster',
        data: {
          phone: masterPhone.val(),
          name: masterName.val(),
          email: masterEmail.val(),
          gender: masterGender,
          admins: JSON.stringify(masterAdmin.val()),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        } else {
          masterPhone.parent().addClass('is-invalid');
          masterPhone.next().text(response.error);
        }
      });
    });
    masterName.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    masterPhone.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    masterEmail.on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
    $('.js-studio-form-submit__masters').on('click', function () {
      $('.js-studio__master-admin-input').each(function () {
        var _this = $(this);

        _this.next().next().val(_this.val());
      });
      $('.js-studio__success').addClass('is-active');
      setTimeout(function () {
        $('.js-studio-form-edit__masters').submit();
      }, 2000);
      return false;
    });
    $('.js-studio__master-delete-button').on('click', function () {
      var masterID = $(this).data('id');
      $('.js-popup-studio__buttons-block-master').attr('data-id', masterID);
    });
    $('.js-studio__master-meet-button').on('click', function () {
      var masterID = $(this).data('id');
      $('.js-popup-studio__buttons-block-master-meet').attr('data-id', masterID);
    });
    $('.js-popup-studio__delete-master').on('click', function () {
      var masterID = $(this).parent().attr('data-id');
      $.ajax({
        method: 'POST',
        url: '/ajaxStudioRemoveMaster',
        data: {
          masterID: masterID,
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        }
      });
    });
    $('.js-popup-studio__master-send-meet').on('click', function () {
      var masterID = $(this).parent().attr('data-id');
      var input = $('.js-popup-studio__master-meet-email-input');

      if (input.val() === '') {
        input.parent().addClass('is-invalid');
        return false;
      }

      $.ajax({
        method: 'POST',
        url: '/ajaxStudioSendMeetMaster',
        data: {
          masterID: masterID,
          email: input.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          window.location.href = response.redirect;
        }
      });
    });
    $('.js-popup-studio__master-meet-email-input').on('input', function () {
      $(this).parent().removeClass('is-invalid');
    });
  }
});
var balloon = {
  iconLayout: 'default#image',
  iconImageHref: '/client/files/icons/svg/map-pin.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-3, -42]
};

function submitMainProfileForm(obj) {
  var oAjax = $.ajax({
    method: 'POST',
    url: '/ajaxCabinetValidate',
    data: {
      phone: obj['phone'].val(),
      email: obj['email'].val(),
      _token: token
    }
  });
  oAjax.done(function (response) {
    var workPlaces = 0;
    var errors = 0;

    if (obj['name'].val() === '') {
      obj['name'].parent().addClass('is-invalid');
      errors++;
    }

    if (typeof obj['genderEntity'].val() === 'undefined') {
      obj['genderBlock'].addClass('is-invalid');
      errors++;
    }

    var workPlaceItem = $('.js-profile__workPalace');

    if (workPlaceItem.length > 0) {
      workPlaceItem.each(function () {
        if ($(this).is(':checked')) {
          workPlaces++;
        }
      });

      if (workPlaces === 0) {
        obj['workPlace'].parent().parent().addClass('is-invalid');
        errors++;
      }
    }

    if (response.success !== true) {
      var arrErrors = JSON.parse(response.errors); // if ($('.js-steps').length === 0) {

      if (arrErrors['phone']) {
        obj['phone'].parent().addClass('is-invalid');
        obj['phone'].next().text(arrErrors['phone']);
      } // }


      if (arrErrors['email']) {
        obj['email'].parent().addClass('is-invalid');
        obj['email'].next().text(arrErrors['email']);
      }

      errors++;
    }

    if (errors === 0) {
      $('.js-profile__success').addClass('is-active');
      setTimeout(function () {
        $('.js-profile-form-edit__main').submit();
      }, 2000);
    } else {
      if ($(window).width() <= 768) {
        var firstError = $('.profile-editor__input.is-invalid').offset().top;
        $('body,html').animate({
          scrollTop: firstError - 37
        }, 400);
      }
    }

    return false;
  });
}

function submitMainProfileStudioForm(obj) {
  var oAjax = $.ajax({
    method: 'POST',
    url: '/ajaxCabinetStudioValidate',
    data: {
      phone: obj['phone'].val(),
      email: obj['email'].val(),
      _token: token
    }
  });
  oAjax.done(function (response) {
    var errors = 0;

    if (obj['name'].val() === '') {
      obj['name'].parent().addClass('is-invalid');
      errors++;
    }

    if (response.success !== true) {
      var arrErrors = JSON.parse(response.errors);

      if (arrErrors['phone']) {
        obj['phone'].parent().addClass('is-invalid');
        obj['phone'].next().text(arrErrors['phone']);
      }

      if (arrErrors['email']) {
        obj['email'].parent().addClass('is-invalid');
        obj['email'].next().text(arrErrors['email']);
      }

      errors++;
    }

    if (errors === 0) {
      $('.js-profile__success').addClass('is-active');
      setTimeout(function () {
        $('.js-profile-studio-form-edit__main').submit();
      }, 2000);
    } else {
      if ($(window).width() <= 768) {
        var firstError = $('.profile-editor__input.is-invalid').offset().top;
        $('body,html').animate({
          scrollTop: firstError - 37
        }, 400);
      }
    }

    return false;
  });
}

function submitSecurityProfileForm(passwordNew, passwordConfirm) {
  var errors = 0;

  if (passwordNew.val() === '' || passwordNew.val().length < 6) {
    passwordNew.parent().addClass('is-invalid');
    passwordNew.next().next().next().text('Пароль короче 6 символов');
    errors++;
  }

  if (passwordConfirm.val() === '') {
    passwordConfirm.parent().addClass('is-invalid');
    passwordConfirm.next().next().next().text('Повторите новый пароль');
    errors++;
  }

  if (passwordNew.val() !== passwordConfirm.val()) {
    passwordConfirm.parent().addClass('is-invalid');
    passwordConfirm.next().next().next().text('Пароли не совпадают');
    errors++;
  }

  if (errors > 0) {
    return false;
  }

  $('.js-profile__success').addClass('is-active');
  setTimeout(function () {
    $('.js-profile-form-edit__security').submit();
  }, 2000);
  return false;
}

function updateImage(image) {
  image.attr('src', image.attr('src').split('?')[0] + '?' + new Date().getTime());
}

function updateService(serviceID, status) {
  $.ajax({
    method: 'POST',
    url: '/ajaxMasterServiceUpdate',
    data: {
      serviceID: serviceID,
      status: status,
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      var savedBlock = $('.js-service-item__save-' + serviceID);
      savedBlock.fadeIn();
      setTimeout(function () {
        savedBlock.fadeOut();
      }, 1000);
    }
  });
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

  myMap = new ymaps.Map('card-map', {
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
  $('.js-profile-contact__city').on('change', function () {
    var cityID = $(this).val();
    $.ajax({
      method: 'POST',
      url: '/ajaxGetMetroOrDistrict',
      data: {
        cityID: cityID,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        // myMap.setCenter([response.coordY, response.coordX], 13);
        var type = response.type;
        var metroBlock = $('.js-profile-contact__metro-block');
        var districtBlock = $('.js-profile-contact__district-block');
        var select;

        if (type === 'metro') {
          metroBlock.removeClass('is-hidden');
          districtBlock.addClass('is-hidden');
          select = $('.js-profile-contact__metro');
        }

        if (type === 'district') {
          districtBlock.removeClass('is-hidden');
          metroBlock.addClass('is-hidden');
          select = $('.js-profile-contact__district');
        }

        if (type === '') {
          districtBlock.addClass('is-hidden');
          metroBlock.addClass('is-hidden');
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

        var street = $('.js-profile-contact__home').val();
        var number = $('.js-profile-contact__number').val();

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
  $(document).on('keyup', '.js-profile-contact__home', function () {
    var city = $('.js-profile-contact__city').find('option:selected').text();
    var number = $('.js-profile-contact__number').val();

    if (number === '') {
      number = null;
    }

    geoMap(city, $(this).val(), number);
  });
  $(document).on('keyup', '.js-profile-contact__number', function () {
    var city = $('.js-profile-contact__city').find('option:selected').text();
    var street = $('.js-profile-contact__home').val();

    if (street === '') {
      street = null;
    }

    geoMap(city, street, $(this).val());
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
      $('#card-map').html('');
      coordX = coords[0];
      coordY = coords[1];
      myMap = new ymaps.Map('card-map', {
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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "UsqVoyK5":
/*!***********************************!*\
  !*** ./resources/js/main/card.js ***!
  \***********************************/
/*! exports provided: generateHtmlCategory, countServices, countServicesIDs, sendOrder, initCardMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHtmlCategory", function() { return generateHtmlCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countServices", function() { return countServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countServicesIDs", function() { return countServicesIDs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOrder", function() { return sendOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCardMap", function() { return initCardMap; });
$(document).ready(function () {
  if ($('.card__content_inner').length > 0) {
    var selectedServices = [];
    var orderData = {};
    var orderMainBlock = $('.js-order-main-block');
    var orderStorage = {};
    var date = $('#js-order-date-input');
    var timeFrom = $('#js-order-timeFrom-select');
    var phone = $('#js-order-phone-input');
    var addressBlock = $('.js-card-select__address');
    var studioMaster = $('.js-card-select__masters'); // Add or remove service

    $(document).on('click', '.js-card-services-item', function (e) {
      if ($(e.target).closest('.card-services-item__middle').length || $(e.target).closest('.card-services-item__info-block').length) {
        return;
      } else {
        if (orderMainBlock.hasClass('is-disabled')) {
          orderMainBlock.addClass('is-booked').removeClass('is-disabled'); // return false;
        }

        if (!orderMainBlock.hasClass('is-booked')) {
          orderMainBlock.addClass('is-booked');
        }

        var _this = $(this);

        var add = _this.find('.card-services-item__action_add');

        var done = _this.find('.card-services-item__action_done');

        var htmlBlock = $('.js-categories-block');

        var serviceID = _this.data('id');

        var name = _this.data('name');

        var price = _this.data('price');

        selectedServices = countServicesIDs(serviceID, selectedServices);

        if (_this.hasClass('is-booked')) {
          $('.js-category-item-' + serviceID).remove();

          _this.removeClass('is-booked');

          add.removeAttr('style');
          done.removeAttr('style');

          if (countServices() === 0) {
            orderMainBlock.removeClass('is-booked').addClass('is-disabled');
          }
        } else {
          $('.js-empty-services-count').addClass('is-hidden');
          htmlBlock.append(generateHtmlCategory(serviceID, name, price));

          _this.addClass('is-booked'); // fbq('track', 'InitiateCheckout');
          // fbq('trackCustom', 'Добавление услуги', {"Название" : name});


          add.css('display', 'none');
          done.css('display', 'block');
          countServices();
        }
      }
    }); // Remove service from top

    $(document).on('click', '.js-category--reset', function () {
      if (orderMainBlock.hasClass('is-disabled')) {
        return false;
      }

      var serviceID = $(this).data('id');
      var serviceBlock = $('.js-card-service-block-' + serviceID);
      var add = serviceBlock.find('.card-services-item__action_add');
      var done = serviceBlock.find('.card-services-item__action_done');
      selectedServices = countServicesIDs(serviceID, selectedServices);
      serviceBlock.removeClass('is-booked');
      add.removeAttr('style');
      done.removeAttr('style');
      countServices();
      $(this).parent().remove();
    }); // Change address

    addressBlock.on('change', function () {
      var _this = $(this);

      $.ajax({
        method: 'POST',
        url: '/ajaxGetMastersByAddress',
        data: {
          addressID: _this.val(),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          var select = $('.js-card-select__masters');
          var data = JSON.parse(response.html);
          var arrData = [];
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
      });
    }); // Click on green button

    $('.js-card-request--show').on('click', function () {
      if (!orderMainBlock.hasClass('is-booked')) {
        orderMainBlock.addClass('is-booked');
      } else {
        var errors = 0;
        date.parent().removeClass('is-invalid');
        phone.parent().removeClass('is-invalid');

        if ($(window).width() <= 768) {
          $(this).addClass('is-attention'); //errors ++;
        } else {
          if (selectedServices.length === 0) {
            $('.js-empty-services-count').removeClass('is-hidden');
            errors++;
          }
        }

        if (errors > 0) {
          return false;
        }

        orderMainBlock.addClass('is-disabled');
        var cardBlock = $('#js-card-user__name');
        var cardType = cardBlock.data('type'); // orderData['type'] = cardType;

        if (cardType === 'studio') {
          var addressID = cardBlock.data('id'); // orderData['studioMasterID'] = studioMaster.val();
        } else {
          var addressID = cardBlock.data('id');
        }

        orderStorage['addressID'] = addressID;
        orderStorage['url'] = cardBlock.attr('data-url');
        orderStorage['price'] = $('.js-service-price').text();
        orderStorage['services'] = selectedServices;
        $.ajax({
          method: 'POST',
          url: '/ajaxConfirmOrderServices',
          data: {
            orderStorage: orderStorage,
            _token: token
          }
        }).done(function (response) {
          if (response.success === true) {
            window.location.href = response.redirect;
          }
        });
      }

      return false;
    }); // Confirm sms button

    $('.js-sms-confirm-button__order').on('click', function () {
      var confirmValue = $('#js-sms-confirm-input__order').val();
      var errorBlock = $('#js-sms-confirm-error__order');

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
          sendOrder();
        } else {
          errorBlock.show().text('Не верный код');
        }
      });
      return false;
    }); // Map

    if ($('.js-card__map').length > 0) {
      if (typeof ymaps !== 'undefined') {
        ymaps.ready(initCardMap);
      }
    }

    var jsCrmAddServicesToCategoryForCard = '.jsCrmAddServicesToCategoryForCard';
    $(document).on('click', jsCrmAddServicesToCategoryForCard, function (e) {
      // e.preventDefault();
      // e.stopPropagation();
      var $this = $(this);
      $.ajax({
        method: 'POST',
        url: '/ajaxCrmAddServicesToCategoryForCard',
        data: {
          templateID: $this.attr('data-temp'),
          addressID: $this.attr('data-address'),
          catID: $this.attr('data-cat'),
          _token: token
        }
      }).done(function (response) {
        if (response.success === true) {
          $this.closest('.bb-accordeon__item').find('.bb-accordeon__content').html(response.html);
          $this.removeClass('jsCrmAddServicesToCategoryForCard').addClass('bb-accordeon__title').removeAttr('data-cat data-temp data-type data-address style').trigger('click');
        }
      });
    });
  }
});

function generateHtmlCategory(serviceID, name, price) {
  html = '<li class="js-category-item-' + serviceID + ' category__item"> <a class="category__link" href="#">';
  html += name;
  html += '<span class="category__price">' + number_format(price, 0, ' ', ' ') + ' <i class="fa fa-rub"></i></span>';
  html += '</a><span class="category__icon js-category--reset" data-id="' + serviceID + '"></span>';
  html += '</li>';
  return html;
}

function countServices() {
  var itemCount = $('.js-service-count');
  var itemPrice = $('.js-service-price');
  var count = 0;
  var price = 0;
  $('.card-services-item.is-booked').each(function () {
    price = price + parseInt($(this).data('price'));
    count = count + 1;
  });
  itemCount.attr('data-count', count);
  itemPrice.html(number_format(price, 0, ' ', ' ') + ' <i class="fa fa-rub"></i>');
  return count;
}

function countServicesIDs(serviceID, selectedServices) {
  var itemIndex = selectedServices.indexOf(serviceID);

  if (itemIndex > -1) {
    selectedServices.splice(itemIndex, 1);
  } else {
    selectedServices.push(serviceID);
  }

  return selectedServices;
}

function sendOrder() {
  var fullPrice = $('.js-service-price').text();
  $.ajax({
    method: 'POST',
    url: '/submitNewRequest',
    data: {
      order: localStorage.getItem('orderToMaster'),
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      $('.js-order-main-form').addClass('is-success');
      fbq('track', 'AddToCart', {
        content_name: 'Заявка',
        value: fullPrice,
        currency: 'RUB'
      });
    }
  });
}

function initCardMap() {
  var myMap;
  var myPlaceMark;
  var mapBlock = $('.js-card__map');
  var coordX = mapBlock.data('x');
  var coordY = mapBlock.data('y');
  var balloon;
  var $mapElement = $('#card-map');
  myMap = new ymaps.Map('card-map', {
    center: [coordX, coordY],
    zoom: 15
  });
  balloon = {
    iconLayout: 'default#image',
    iconImageHref: '/client/files/icons/svg/map-pin.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  };
  myPlaceMark = new ymaps.Placemark([coordX, coordY], {}, balloon);
  myMap.controls.remove('typeSelector');
  myMap.geoObjects.add(myPlaceMark);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "bnPYasv8":
/*!*************************************!*\
  !*** ./resources/js/main/filter.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ "NZ1UjQKk");
$(document).ready(function () {
  if ($('.js-catalog-filter').length > 0) {
    var countItems = 0;
    var globalParams = generateUrlArray();
    var seoElement = $('#js-seo-text-block');
    var alert = 0;
    var allCountMasters = $('.js-catalog-count-masters').data('count');
    addMastersToContent(countItems, alert, seoElement, allCountMasters);
    $('.jsCategoryLinkFilter').on('click', function () {
      var $this = $(this);

      if ($(window).width() > 768) {
        window.location.href = $(this).attr('href');
      } else {
        var categoryItem = $('.category__item');
        categoryItem.each(function () {
          if ($this.text() != $(this).find('.jsCategoryLinkFilter').text()) {
            $(this).removeClass('is-selected');
          }
        }); //
        // if (categoryItem.hasClass('is-selected')) {
        //     $.ajax({
        //         method: 'POST',
        //         url: '/ajaxServiceFilter',
        //         data: {
        //             category: $(this).attr('category'),
        //             city: $('.js-catalog__city-breadcrumbs').attr('data-alias'),
        //             _token: token
        //         }
        //     }).done(function (response) {
        //         if (response.success === true) {
        //             $('.catalog-filter__category').find('.category__dropdown').remove();
        //             $('.catalog-filter__category').append(response.html);
        //         }
        //     });
        // }
      }
    });
    /*
     *************************
     * Select metro stations
     *************************
     */

    $('#js-filter-metro').on('change', function () {
      var metroID = $(this).val();
      var serviceName = $(this).next().text();
      var sUrl;
      var arrParams;
      $('.js-metro-on').append(generateHtmlBlockMetro(serviceName, metroID));
      arrParams = updateUrlArray(globalParams, 'metro', metroID, 'add');
      globalParams = arrParams;
      sUrl = generateStingFromArray(arrParams);
      window.history.replaceState('url', '', sUrl);
      sendAjax();
    });
    /*
     *************************
     * Select district stations
     *************************
     */

    $('#js-filter-district').on('change', function () {
      var districtID = $(this).val(); // var serviceName = $(this).text();

      var serviceName = $(this).find('option[value=' + districtID + ']').text();
      var sUrl;
      var arrParams;
      $('.js-district-on').append(generateHtmlBlockDistrict(serviceName, districtID));
      arrParams = updateUrlArray(globalParams, 'district', districtID, 'add');
      globalParams = arrParams;
      sUrl = generateStingFromArray(arrParams);
      window.history.replaceState('url', '', sUrl);
      sendAjax();
    });
    /*
     *************************
     * Select services
     *************************
     */

    $(document).on('change', '.js-filter-service', function () {
      var serviceID = $(this).data('id');
      var sUrl;
      var arrParams;

      if ($(this).hasClass('is-checked')) {
        arrParams = updateUrlArray(globalParams, 'service', serviceID, 'add');
      } else {
        arrParams = updateUrlArray(globalParams, 'service', serviceID, 'delete');
      }

      globalParams = arrParams;
      sUrl = generateStingFromArray(arrParams);
      window.history.replaceState('url', '', sUrl);
      sendAjax();
    });
    /*
     *************************
     * Remove metro select element from filter
     *************************
     */

    $(document).on('click', '.js-metro-delete__icon', function () {
      var metroID = $(this).data('id');
      var sUrl;
      var arrParams;
      $(this).parent().remove();
      arrParams = updateUrlArray(globalParams, 'metro', metroID, 'delete');
      globalParams = arrParams;
      sUrl = generateStingFromArray(arrParams);
      window.history.pushState('url', '', sUrl);
      sendAjax();
    });
    /*
     *************************
     * Remove district select element from filter
     *************************
     */

    $(document).on('click', '.js-district-delete__icon', function () {
      var districtID = $(this).data('id');
      var sUrl;
      var arrParams;
      $(this).parent().remove();
      arrParams = updateUrlArray(globalParams, 'district', districtID, 'delete');
      globalParams = arrParams;
      sUrl = generateStingFromArray(arrParams);
      window.history.pushState('url', '', sUrl);
      sendAjax();
    });

    if ($('.category__list').length > 0) {
      if ($(window).width() < 769) {//     var category = '';
        //     category = getUrlVars()['category'];
        //     if (location.pathname.split('/')[1]) {
        //         category = location.pathname.split('/')[1];
        //     }
        //     // $('.category__list').remove();
        //     if (category !== 'undefined') {
        //         $.ajax({
        //             method: 'POST',
        //             url: '/ajaxCatFilter',
        //             data: {
        //                 category: category,
        //                 _token: token
        //             }
        //         }).done(function (response) {
        //             if (response.success === true) {
        //                 $('.js-category').html(response.html);
        //                 var checked = getUrlVars()['service'];
        //                 $.ajax({
        //                     method: 'POST',
        //                     url: '/ajaxServiceFilter',
        //                     data: {
        //                         checked: checked,
        //                         category: category,
        //                         _token: token
        //                     }
        //                 }).done(function (response) {
        //                     if (response.success === true) {
        //                         // $('.catalog-filter__category').children('.category__dropdown').remove();
        //                         // debugger;
        //                         // $('.catalog-filter__category').append(response.html);
        //                     }
        //                 });
        //             }
        //         });
        //     } else {
        //         $.ajax({
        //             method: 'POST',
        //             url: '/ajaxCatFilter',
        //             data: {
        //                 _token: token
        //             }
        //         }).done(function (response) {
        //             if (response.success === true) {
        //                 $('.js-category').html(response.html);
        //             }
        //         });
        //     }
      }
    }
    /*
     *************************
     * Price filter range
     *************************
     */


    if ($('.catalog-filter__item_price').length > 0) {
      var slider = document.getElementById('js-catalog-filter-slider');
      var allPriceStart = $('#js-catalog-filter-slider').data('start');
      var allPriceEnd = $('#js-catalog-filter-slider').data('end');
      var spans = [$('#jsPriceStart'), $('#jsPriceEnd')];
      var startPrice;
      var endPrice;
      var arrParams;
      var sUrl;

      if (spans[0].text() == '') {
        startPrice = allPriceStart;
      } else {
        startPrice = parseInt(spans[0].text());
      }

      if (spans[1].text() == '') {
        endPrice = allPriceEnd;
      } else {
        endPrice = parseInt(spans[1].text());
      }

      noUiSlider.create(slider, {
        start: [startPrice, endPrice],
        connect: true,
        step: 10,
        range: {
          min: allPriceStart,
          max: allPriceEnd
        }
      });
      slider.noUiSlider.on('update', function (values, handle) {
        spans[handle].text(parseInt(values[handle]));
      });
      slider.noUiSlider.on('change', function (values) {
        arrParams = updateUrlArray(globalParams, 'minPrice', parseInt(values[0]), 'add', true);
        arrParams = updateUrlArray(globalParams, 'maxPrice', parseInt(values[1]), 'add', true);
        globalParams = arrParams;
        sUrl = generateStingFromArray(arrParams);
        window.history.replaceState('url', '', sUrl);
        sendAjax();
      });
    }
    /*
     *************************
     * Gender select
     *************************
     */


    $('.js-filter-gender').on('change', function () {
      var genderID = $(this).data('gender');
      var arrParams;
      var sUrl;
      arrParams = updateUrlArray(globalParams, 'gender', genderID, 'add', true);
      globalParams = arrParams;
      sUrl = generateStingFromArray(arrParams);
      window.history.replaceState('url', '', sUrl);
      sendAjax();
    });
    /*
     *************************
     * Category select
     *************************
     */

    if ($(window).width() < 769) {
      $(document).on('change', '.js-filter-category', function () {
        var genderID = $(this).data('category');
        var arrParams;
        var sUrl;
        arrParams = updateUrlArray(globalParams, 'category', genderID, 'add', true);
        delete arrParams['service'];
        delete arrParams['category'];
        sUrl = generateStingFromArray(arrParams);
        window.history.replaceState('url', '', sUrl);
        window.history.pushState('', '', genderID);
        $.ajax({
          method: 'POST',
          url: '/ajaxServiceFilter',
          data: {
            category: genderID,
            _token: token
          }
        }).done(function (response) {
          if (response.success === true) {
            $('.catalog-filter__category').children('.category__dropdown').remove();
            $('.catalog-filter__category').append(response.html);
          }
        }); // sendAjax();
      });
    }
    /*
     *************************
     * Work place select
     *************************
     */


    $('.js-filter-place').on('change', function () {
      var placeID = $(this).data('place');
      var arrParams;
      var sUrl; // Получит параметр URL по его имени

      var byName = $.getUrlVar('place');

      if (placeID !== 0) {
        arrParams = updateUrlArray(globalParams, 'place', placeID, 'add', true);
      } else {
        if (byName === undefined) {
          return false;
        } else {
          arrParams = updateUrlArray(globalParams, 'place', byName, 'delete');
        }
      }

      globalParams = arrParams;
      sUrl = generateStingFromArray(arrParams);
      window.history.replaceState('url', '', sUrl);
      sendAjax();
    }); // ----- Mobile version ------------------------------------------

    /*
     *************************
     * Close button
     *************************
     */

    $('.js-catalog-filter--close').on('click', function () {
      $('.catalog-filter').removeClass('is-open');
      $('html').removeAttr('style');
      return false;
    });
    /*
     *************************
     * Close button
     *************************
     */
    // $('.js-btn-pulse').on('click', function () {
    //     $('.catalog-filter').removeClass('is-open');
    //     $('html').removeAttr('style');
    //
    //     ajaxFilter();
    //
    //     return false;
    // });

    $('.js-btn-pulse').on('click', function () {
      var href = window.location.href;
      window.open(href, '_self');
      return false;
    });
  }
});

function generateHtmlBlockMetro(name, $entityID) {
  var html = '<li class="metro-checked__item">';
  html += name;
  html += '<i class="fa fa-times js-metro-delete__icon metro-checked__icon" data-id="' + $entityID + '"></i>';
  html += '</li>';
  return html;
}

function generateHtmlBlockDistrict(name, $entityID) {
  var html = '<li class="metro-checked__item">';
  html += name;
  html += '<i class="fa fa-times js-district-delete__icon metro-checked__icon" data-id="' + $entityID + '"></i>';
  html += '</li>';
  return html;
}

function generateUrlArray() {
  var arrParams = [];
  var url = window.location.search.substring(1).split('&');

  if (url != '') {
    $.each(url, function (index, value) {
      var paramName;
      var paramValue;
      var params = value.split('=');
      paramName = params[0];
      paramValue = params[1];
      arrParams[paramName] = paramValue;
    });
  }

  return arrParams;
}

function updateUrlArray(arrParams, param, value, process, single) {
  var single = single || false;

  if (arrParams[param]) {
    var workingUrl = arrParams[param];
    workingUrl = workingUrl.toString();

    if (workingUrl != '' && workingUrl.indexOf(',') !== -1) {
      var values = arrParams[param].split(',');

      if (process === 'add') {
        var a = 0;
        $.each(values, function (index, v) {
          if (v === value) {
            a++;
          }
        });

        if (a === 0) {
          arrParams[param] = arrParams[param] + ',' + value;
        }
      }

      if (process === 'delete') {
        $.each(values, function (index, v) {
          if (v == value) {
            values.splice(index, 1);
          }
        });
        arrParams[param] = values.join(',');
      }
    }

    if (workingUrl != '' && workingUrl.indexOf(',') === -1) {
      var values = arrParams[param];

      if (process === 'add') {
        if (single) {
          arrParams[param] = value;
        } else {
          if (values != value) {
            arrParams[param] = arrParams[param] + ',' + value;
          }
        }
      }

      if (process === 'delete') {
        if (values == value) {
          delete arrParams[param];
        }
      }
    }
  } else {
    arrParams[param] = value;
  }

  return arrParams;
}

function generateStingFromArray(arrParams) {
  var url = '?';
  Object.keys(arrParams).forEach(function (key) {
    if (url == '?') {
      url = url + key + '=' + arrParams[key];
    } else {
      url = url + '&' + key + '=' + arrParams[key];
    }
  });
  return url;
}

$.extend({
  getUrlVars: function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }

    return vars;
  },
  getUrlVar: function getUrlVar(name) {
    return $.getUrlVars()[name];
  }
});

function ajaxFilter() {
  $.ajax({
    method: 'POST',
    url: '/ajaxAddContent',
    data: {
      cityID: cityID,
      cityAlias: $('.js-catalog__city-breadcrumbs').data('alias'),
      globalParams: JSON.stringify(window.location.search.substring(1).split('&')),
      categoryID: $('.js-catalog-filter__category').data('category'),
      _token: token
    }
  }).done(function (response) {
    if (response.success === true) {
      $('.js-catalog-card-box').html(response.html);
      BB.Core.removePreloader();
      BB.Core.Slider.init();
      $('.js-count-masters').text(response.countMasters);

      if (response.countMasters == 0) {
        $('.js-catalog-empty').removeClass('is-hidden');
      } else {
        $('.js-catalog-empty').addClass('is-hidden');
      }

      $('.js-catalog-count-masters').find('strong').html(response.countMasters);
      $('.catalog-filter__title').find('span').html(response.countMastersTrueEnd);
      $('.js-catalog-count-masters').attr('data-count', response.countMasters); // $('.js-ss-slider').simpleslider('init');

      if ($(document).find('.js-catalog-map.is-checked').length > 0) {
        $('.js-show--map').click();
      }

      $('html, body').animate({
        scrollTop: 0
      }, 800);
    }
  });
}

function ajaxAddContent(countItems, allCountMasters) {
  $('.js-loader__scroll').removeClass('is-hidden');
  $('.catalog-item').each(function () {
    countItems++;
  });
  var countUsers = $('.js-catalog-count-masters').data('count');
  /* Select services for ЧПУ */

  if (filtersSeoUrl !== '') {
    var serviceId = filtersSeoUrl.split('=');
    var globalParams = generateUrlArray();
    var arrParams = updateUrlArray(globalParams, 'service', serviceId[1], 'add');
    var sUrl = generateStingFromArray(arrParams);
    sUrl = JSON.stringify(sUrl.substring(1).split('&'));
    console.log('Это ЧПУ' + sUrl);
    globalParams = sUrl;
  } else {
    globalParams = JSON.stringify(window.location.search.substring(1).split('&')); // console.log('Это не ЧПУ' + globalParams);
  }

  if (countItems !== countUsers && $(document).find('.js-catalog-map.is-checked').length < 1 && $('#js-seo-text-block').length > 0) {
    $.ajax({
      method: 'POST',
      url: '/ajaxAddContent',
      data: {
        cityID: cityID,
        cityAlias: $('.js-catalog__city-breadcrumbs').data('alias'),
        globalParams: globalParams,
        categoryID: $('.js-catalog-filter__category').data('category'),
        skip: countItems,
        allCountMasters: allCountMasters,
        _token: token
      }
    }).done(function (response) {
      if (response.success === true) {
        var loader = $('.js-loader__scroll');
        loader.addClass('is-hidden');
        $('.js-catalog-card-box').append(response.html);
        BB.Core.removePreloader();
        setInterval(function () {
          BB.Core.Slider.initCatalogItemSlider();
        }, 300); // $(document).find('.js-catalog-item-slider').find('.bb-slider__slides').not('.slick-initialized').slick('setPosition');
        // console.log($(document).find('.js-catalog-item-slider').find('.bb-slider__slides'));

        if (response.countMasters === 0 || response.countMasters < response.countCatalog) {
          // console.log(response.countMasters);
          loader.addClass('the-end');
        }
      }
    });
  } else {
    $('.js-loader__scroll').css('display', 'none');
  }
}

function addMastersToContent(countItems, alert, seoElement, allCountMasters) {
  var el = scrollAddContentCatalog();
  $(el).scroll(function () {
    if (!checkVisibility(seoElement)) {
      alert = 0;
    }

    if (alert === 0) {
      if (checkVisibility(seoElement)) {
        alert = 1;

        if (!$('.js-loader__scroll').hasClass('the-end')) {
          ajaxAddContent(countItems, allCountMasters);
        }
      } else {
        alert = 0;
      }
    }
  });
}

function scrollAddContentCatalog() {
  var el;
  el = document;
  return el;
}

function sendAjax() {
  $('.js-loader__scroll').removeClass('the-end'); // if ($(window).width() >= 480) {

  ajaxFilter(); // }
}

function checkVisibility(el) {
  var dTop = $(window).scrollTop(),
      dBot = dTop + $(window).height(),
      elTop = $(el).offset().top - 850,
      elBot = elTop + $(el).height();
  return elTop <= dBot && elTop >= dTop;
}

function getUrlVars() {
  var vars = [],
      hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }

  return vars;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "bvygj16B":
/*!****************************************!*\
  !*** ./resources/js/_frontend/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "KAFnV68P");
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components */ "YIMmNmdN");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/utils */ "Kdr+IcO5");
/* harmony import */ var _modules_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Menu */ "7ARmJ1/n");
/* harmony import */ var _modules_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Filter */ "szT3Chqo");
/* harmony import */ var _main_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/index */ "dzi+DAa+");
/**
 * Main
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */





 // import '@/sass/main.scss'

$(function () {
  var node = document.body;
  _core_index__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  _core_components__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _core_utils__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _modules_Menu__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  _modules_Filter__WEBPACK_IMPORTED_MODULE_4__["default"].init(node);
  _main_index__WEBPACK_IMPORTED_MODULE_5__["default"].init(node);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "dzi+DAa+":
/*!**********************************************!*\
  !*** ./resources/js/_frontend/main/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/catalog */ "5/Bq5Wxc");
/* harmony import */ var _pages_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/card */ "gU65Rcim");
/**
 * Main index.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */
BB.define('Main');


/* harmony default export */ __webpack_exports__["default"] = (BB.Main = function () {
  function _init() {
    _initPageCatalog(document.body);

    _PageCard(document.body);

    if (true) {
      console.log('--- INIT MAIN');
    }
  }

  function _initPageCatalog(element) {
    new _pages_catalog__WEBPACK_IMPORTED_MODULE_0__["default"]().init(element);
  }

  function _PageCard(element) {
    new _pages_card__WEBPACK_IMPORTED_MODULE_1__["default"]().init(element);
  }

  return {
    init: _init
  };
}());

/***/ }),

/***/ "ecIIYstC":
/*!***************************************!*\
  !*** ./resources/js/main/uploader.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  var uploadFileEntity = $('.js-upload-file');

  if ($('.js-bb-upload--item').length > 0) {
    $('.button-box').removeClass('is-hidden');
  } // Searching for file upload widget is exist


  if (uploadFileEntity.length > 0) {
    var removedFiles = []; // Change the upload input field

    uploadFileEntity.on('change', function (event) {
      var files = this.files;
      var data = new FormData();
      var randValue = $(this).data('rand');
      var cropParams = $(this).data('crop');
      var modelID = $(this).data('user');
      var table = $(this).data('table');
      var addModelID = $(this).data('addmodel');
      var htmlBlock = $('.bb-upload__list');
      event.stopPropagation();
      event.preventDefault();

      if (typeof files === 'undefined') {
        return false;
      }

      $.each(files, function (key, value) {
        data.append(key, value);
      });
      data.append('randValue', randValue);
      data.append('cropParams', cropParams);
      data.append('modelID', modelID);
      data.append('addModelID', addModelID);
      data.append('table', table);
      data.append('_token', token);
      $.ajax({
        method: 'POST',
        url: '/ajaxIndexAddImage',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function success(response) {
          if (response.success === true) {
            var arrImagesBlocks = response.arrImagesBlocks;
            htmlBlock.append(arrImagesBlocks);
            $('.js-lk-empty').hide();
            photoUpload();
          } else {
            if (response.error) {
              alert(response.error);
            }
          }
        }
      });
      return false;
    }); // Delete file

    $(document).on('click', '.js-delete-file', function (event) {
      event.stopPropagation();
      event.preventDefault();
      var i = 0;
      var block = $(this);
      var fileName = block.parent().prev().children().data('name');
      var randValue = uploadFileEntity.data('rand');
      removedFiles.push(fileName);
      $.ajax({
        method: 'POST',
        url: '/ajaxRemoveImage',
        data: {
          fileName: fileName,
          randValue: randValue,
          _token: token
        }
      }).done(function (response) {
        if (response.success == true) {
          block.parent().parent().remove();
          $('.bb-upload__item').each(function () {
            i++;
          });

          if (i == 0) {
            $('.js-lk-empty').show();
          }
        }
      });
    });
  } // Поворот фото вправо


  $(document).on('click', '.js-rotate-file-right', function (event) {
    event.stopPropagation();
    event.preventDefault();
    var block = $(this);
    var fileName = block.parent().prev().children().data('name');
    var fileExtension = block.parent().prev().children().data('extension');
    var cropParams = $('.js-upload-file').data('crop');
    var randValue = uploadFileEntity.data('rand');
    var imgBlock = block.parent().prev().children(); // Убираем иконку поворота, заглушка, чтобы не поломать фото при повороте, если быстро нажимать

    block.hide();
    $.ajax({
      method: 'POST',
      url: '/ajaxRotateRightImage',
      data: {
        fileName: fileName,
        randValue: randValue,
        fileExtension: fileExtension,
        cropParams: cropParams,
        _token: token
      }
    }).done(function (response) {
      if (response.success == true) {
        // Снова показываем иконку, поворота
        block.show();
        updateImage(imgBlock);
      }
    });
  }); // Поворот фото влево

  $(document).on('click', '.js-rotate-file-left', function (event) {
    event.stopPropagation();
    event.preventDefault();
    var block = $(this);
    var fileName = block.parent().prev().children().data('name');
    var fileExtension = block.parent().prev().children().data('extension');
    var cropParams = $('.js-upload-file').data('crop');
    var randValue = uploadFileEntity.data('rand');
    var imgBlock = block.parent().prev().children(); // Убираем иконку поворота, заглушка, чтобы не поломать фото при повороте, если быстро нажимать

    block.hide();
    $.ajax({
      method: 'POST',
      url: '/ajaxRotateLeftImage',
      data: {
        fileName: fileName,
        randValue: randValue,
        fileExtension: fileExtension,
        cropParams: cropParams,
        _token: token
      }
    }).done(function (response) {
      if (response.success == true) {
        // Снова показываем иконку, поворота
        block.show();
        updateImage(imgBlock);
      }
    });
  });
});

function updateImage(image) {
  image.attr('src', image.attr('src').split('?')[0] + '?' + new Date().getTime());
}

function photoUpload() {
  if ($('.js-bb-upload--item').length < 1) {
    $('.button-box').addClass('is-hidden');
  } else {
    $('.button-box').removeClass('is-hidden');

    if ($('.js-btn-steps-upload').length > 0) {
      $('.js-btn-steps-upload').removeClass('is-hidden');
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "gU65Rcim":
/*!***************************************************!*\
  !*** ./resources/js/_frontend/main/pages/card.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _js_frontend_lib_scrollspy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/_frontend/_lib/scrollspy */ "vwwQdwid");
/* harmony import */ var _js_frontend_lib_scrollspy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_frontend_lib_scrollspy__WEBPACK_IMPORTED_MODULE_0__);
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
/**
 * Main Card.js
 *
 * @author Anton Ustinoff <a.a.ustinoff@gmail.com>
 */




var Card =
/*#__PURE__*/
function () {
  function Card() {
    _classCallCheck(this, Card);
  }

  _createClass(Card, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.scrollspy();
      this.cardSticky();

      if ($(window).width() <= 768) {
        this.requestToggle();
        this.requestBlockMoveItems();
        $(window).on('resize', function () {
          _this.requestBlockMoveItems();
        });
      }

      BB.Core.initCheckServiceItem();
    } //Card request show / hide

  }, {
    key: "requestToggle",
    value: function requestToggle() {
      var cardInfoRequest = $('.card-info__request');
      $('.js-card-request--show').on('click', function () {
        if (cardInfoRequest.hasClass('is-open')) {
          $html.removeAttr('style');
        } else {
          cardInfoRequest.addClass('is-open');
          $html.css('overflow', 'hidden');
        }

        return false;
      });
      $('.js-card-request--hide').on('click', function () {
        if (cardInfoRequest.hasClass('is-open')) {
          cardInfoRequest.removeClass('is-open');
          $html.removeAttr('style');
        }
      });
    } //Move blocks when window width < 768

  }, {
    key: "requestBlockMoveItems",
    value: function requestBlockMoveItems() {
      $('.js-card-title').insertAfter('.card-gallary__wrap');
      $('.js-card-about').insertBefore('.card-adress');
      $('.card-info__inner').insertAfter('.card-adress');
      $('.card-info__request').wrapInner('<div class="card-info__request_inner">');
      $('.card-info__header--mobile').insertBefore('.card-info__request_inner');
      $('.js-card-info-category').prependTo('.card-info__request_inner');
      $('.js-move-card-policy').appendTo('.card-request-form');
    } //Card Scrollspy

  }, {
    key: "scrollspy",
    value: function scrollspy() {
      var $scrollingСontainer = $('.js-scrollspy');
      var offset;

      if ($scrollingСontainer.length) {
        $(window).width() > 480 ? offset = -100 : offset = -60;
        setTimeout(function () {
          $scrollingСontainer.scrollspy({
            offset: offset
          });
        }, 1000);
      }
    }
  }, {
    key: "cardSticky",
    value: function cardSticky() {
      if ($('.js-card-fixed').length) {
        var fixCardUserInfo = function fixCardUserInfo() {
          $(window).scroll(function () {
            var scroll = $(this).scrollTop();

            if (scroll >= stickyBlockOffset && scroll < fixedBlock.outerHeight(true) + fixedBlockOffset - stickyBlock.outerHeight()) {
              stickyBlock.css({
                position: 'fixed',
                top: -1 + 'px',
                width: 375 + 'px',
                bottom: 'auto'
              });
            } else if (scroll >= stickyBlockOffset && scroll > fixedBlock.outerHeight(true) + fixedBlockOffset - stickyBlock.outerHeight() - 30) {
              stickyBlock.css({
                position: 'absolute',
                top: 'auto',
                bottom: 0,
                width: 375 + 'px'
              });
            } else {
              stickyBlock.removeAttr('style');
            }
          });
        };

        var cardMenuFixed = function cardMenuFixed() {
          $(window).on('scroll touchmove', function () {
            var scroll = $(this).scrollTop();

            if (scroll >= cardMenuOffset) {
              cardMenuClone.show();
              cardMenu.css(cardMenuFixedStyle).addClass('is-sticky');
            } else {
              cardMenuClone.hide();
              cardMenu.removeAttr('style').removeClass('is-sticky');
            }
          });
        };

        var stickyBlock = $('.js-card-sticky');
        var stickyBlockOffset = stickyBlock.offset().top;
        var fixedBlock = $('.js-card-fixed');
        var fixedBlockOffset = fixedBlock.offset().top;
        var cardContent = $('.js-card-content-fixed');
        var cardMenu = $(document).find('.js-card-menu');
        var cardMenuClone = $('<div class="card-menu__clone">').css('height', $('.js-card-menu').outerHeight(true)).insertAfter(cardMenu).hide();
        var cardMenuOffset = cardMenu.offset().top;
        var cardMenuFixedStyle = {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99
        };

        if (stickyBlock.length > 0 && fixedBlock.length > 0 && stickyBlock.height() < cardContent.height() && $(window).width() > 768) {
          fixCardUserInfo();
        }

        if (cardMenu.length) {
          cardMenuFixed();
        }
      }
    }
  }]);

  return Card;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ }),

/***/ "vwwQdwid":
/*!**************************************************!*\
  !*** ./resources/js/_frontend/_lib/scrollspy.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($, window, document, undefined) {
  // Add our plugin to fn
  $.fn.extend({
    // Scrollr is the name of the plugin
    scrollspy: function scrollspy(options) {
      // Define our defaults
      var defaults = {
        namespace: 'scrollspy',
        activeClass: 'is-active',
        animate: false,
        offset: 0,
        container: window
      }; // Add any overriden options to a new object

      options = $.extend({}, defaults, options); // Adds two numbers together

      var add = function add(ex1, ex2) {
        return parseInt(ex1, 10) + parseInt(ex2, 10);
      }; // Find our elements


      var findElements = function findElements(links) {
        // Declare our array
        var elements = []; // Loop through the links

        for (var i = 0; i < links.length; i++) {
          // Get our current link
          var link = links[i]; // Get our hash

          var hash = $(link).attr('href'); // Store our hash as an element

          var element = $(hash); // If we have an element matching the hash

          if (element.length > 0) {
            // Get our offset
            var top = Math.floor(element.offset().top),
                bottom = top + Math.floor(element.outerHeight()); // Add to our array

            elements.push({
              element: element,
              hash: hash,
              top: top,
              bottom: bottom
            });
          }
        } // Return our elements


        return elements;
      }; // Find our link from a hash


      var findLink = function findLink(links, hash) {
        // For each link
        for (var i = 0; i < links.length; i++) {
          // Get our current link
          var link = $(links[i]); // If our hash matches the link href

          if (link.attr('href') === hash) {
            // Return the link
            return link;
          }
        }
      }; // Reset classes on our elements


      var resetClasses = function resetClasses(links) {
        // For each link
        for (var i = 0; i < links.length; i++) {
          // Get our current link
          var link = $(links[i]); // Remove the active class

          link.parent().removeClass(options.activeClass);
        }
      }; // For each scrollspy instance


      return this.each(function () {
        // Declare our global variables
        var element = this,
            container = $(options.container); // Get our objects

        var links = $(element).find('a'); // Loop through our links

        for (var i = 0; i < links.length; i++) {
          // Get our current link
          var link = links[i]; // Bind the click event

          $(link).on('click', function (e) {
            // Get our target
            var target = $(this).attr('href'),
                $target = $(target); // If we have the element

            if ($target.length > 0) {
              // Get it's scroll position
              var top = add($target.offset().top, options.offset); // If animation is on

              if (options.animate) {
                // Animate our scroll
                $('html, body').animate({
                  scrollTop: top
                }, 1000);
              } else {
                // Scroll to our position
                window.scrollTo(0, top);
              } // Prevent our link


              e.preventDefault();
            }
          });
        } // Get our elements


        var elements = findElements(links); // Add a listener to the window

        container.on('scroll.' + options.namespace, function () {
          // Get the position and store in an object
          var position = {
            top: add($(this).scrollTop(), Math.abs(options.offset)),
            left: $(this).scrollLeft()
          }; // Create a variable for our link

          var link; // Loop through our elements

          for (var i = 0; i < elements.length; i++) {
            // Get our current item
            var current = elements[i]; // If we are within the boundries of our element

            if (position.top >= current.top && position.top < current.bottom) {
              // get our element
              var hash = current.hash; // Get the link

              link = findLink(links, hash); // If we have a link

              if (link) {
                // If we have an onChange function
                if (options.onChange) {
                  // Fire our onChange function
                  options.onChange(current.element, $(element), position);
                } // Reset the classes on all other link


                resetClasses(links); // Add our active link to our parent

                link.parent().addClass(options.activeClass); // break our loop

                break;
              }
            }
          } // If we don't have a link and we have a exit function


          if (!link && options.onExit) {
            // Fire our onChange function
            options.onExit($(element), position);
          }
        });
      });
    }
  });
})(jQuery, window, document, undefined);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdnBjIZ")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21haW4vY2hhdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL19mcm9udGVuZC9tYWluL3BhZ2VzL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21haW4vY2FiaW5ldC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWFpbi9jYXJkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9tYWluL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvX2Zyb250ZW5kL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL19mcm9udGVuZC9tYWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9tYWluL3VwbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9fZnJvbnRlbmQvbWFpbi9wYWdlcy9jYXJkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9fZnJvbnRlbmQvX2xpYi9zY3JvbGxzcHkuanMiXSwibmFtZXMiOlsiJCIsInNvY2tldCIsImlvIiwibWVzc2FnZSIsInJlcXVlc3RJRCIsInVzZXJJRCIsImlzTWFzdGVyIiwiaXNDbGllbnQiLCJ0ZXh0YXJlYSIsImRvY3VtZW50IiwiZSIsInNlbmREYXRhIiwic2VuZENvbmZpcm0iLCJzZW5kUmVqZWN0Iiwib2JqIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImFyckRhdGEiLCJKU09OIiwiX3Rva2VuIiwidG9rZW4iLCJyZXNwb25zZSIsImVsIiwiYnV0dG9ucyIsInNldFRpbWVvdXQiLCJib3R0b20iLCJDYXRhbG9nIiwiZWxlbWVudCIsImJsb2NrIiwiY2F0YWxvZ01hcCIsIl9zZWxlY3QiLCJjYXRlZ29yeSIsIml0ZW0iLCJfdW5zZWxlY3QiLCJzdGF0dXNDaGVja2VkIiwic3VibWl0TWFpblByb2ZpbGVGb3JtIiwiZW50aXR5IiwicGhvbmUiLCJwaG9uZUNvbmZpcm1UaW1lciIsImNvbmZpcm1WYWx1ZSIsImVycm9yIiwiZXJyb3JCbG9jayIsInVwZGF0ZVVzZXIiLCJyZWRpcmVjdCIsInN0dWRpb09iaiIsInN1Ym1pdE1haW5Qcm9maWxlU3R1ZGlvRm9ybSIsInJlZ2lvbklEIiwic2VsZWN0IiwiaWQiLCJ0ZXh0IiwibmFtZSIsImNpdHkiLCJwYXNzd29yZE5ldyIsInBhc3N3b3JkQ29uZmlybSIsInN1Ym1pdFNlY3VyaXR5UHJvZmlsZUZvcm0iLCJpdGVtUG9zaXRpb24iLCJjcm9wUGFyYW1zIiwiZmlsZXMiLCJldmVudCIsImNhY2hlIiwiZGF0YVR5cGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsImltZyIsImFzcGVjdFJhdGlvIiwiY3JvcCIsImF2YXRhclBhdGgiLCJjdXJyZW50VXNlcklEIiwibGVmdEltZyIsInRvcEltZyIsInVwZGF0ZUltYWdlIiwiYXJyQ2F0ZWdvcmllcyIsImNhdGVnb3J5SUQiLCJpbmRleCIsInRpdGxlIiwic3JjIiwidHlwZSIsInBhcnNlSW50IiwiY2F0ZWdvcnlJRHMiLCJncm91cCIsIndpbmRvdyIsIl90aGlzIiwic2VydmljZUlEIiwicHJpY2VCbG9jayIsInRpbWVCbG9jayIsInVwZGF0ZVNlcnZpY2UiLCJpbnB1dEVsZW1lbnQiLCJzZW5kIiwicHJpY2UiLCJ0aW1lIiwic2F2ZWRCbG9jayIsImFsYnVtRGVzY3JpcHRpb24iLCJlcnJvcnMiLCJyZW1vdmVBbGJ1bUljb24iLCJyZW1vdmVBbGJ1bUJ1dHRvbiIsImFsYnVtSUQiLCJ5bWFwcyIsInJvdGF0ZUZpbGVSaWdodCIsImNoZWNrYm94Iiwid29ya0xpc3QiLCJ3b3JraW5nRW1wdHkiLCJzaG93TWFzdGVySW5DYXRhbG9nIiwiYWN0aXZlIiwidXNlckFjdGl2ZSIsImRlbGV0ZUFkZEFkZHJlc3MiLCJhZGRyZXNzSUQiLCJzdGVwT25lU3VibWl0QnV0dG9uIiwic3RlcE9uZUlucHV0Iiwic3RlcE9uZUNvbmZpcm0iLCJhZG1pbk5hbWUiLCJhZG1pblBob25lIiwiYWRtaW5FbWFpbCIsImFkbWluQWRkcmVzcyIsImVtYWlsIiwiYWRkcmVzcyIsImFkbWluSUQiLCJpbnB1dCIsIm1hc3Rlck5hbWUiLCJtYXN0ZXJQaG9uZSIsIm1hc3RlckVtYWlsIiwibWFzdGVyR2VuZGVyTWFsZSIsIm1hc3RlckdlbmRlckZlbWFsZSIsIm1hc3RlckdlbmRlciIsIm1hc3RlckFkbWluIiwiZ2VuZGVyIiwiYWRtaW5zIiwibWFzdGVySUQiLCJiYWxsb29uIiwiaWNvbkxheW91dCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0Iiwib0FqYXgiLCJ3b3JrUGxhY2VzIiwid29ya1BsYWNlSXRlbSIsImFyckVycm9ycyIsImZpcnN0RXJyb3IiLCJzY3JvbGxUb3AiLCJpbWFnZSIsInN0YXR1cyIsImNvb3JkWElucHV0IiwiY29vcmRZSW5wdXQiLCJjb29yZFgiLCJjb29yZFkiLCJteU1hcCIsImNlbnRlciIsInpvb20iLCJteVBsYWNlTWFyayIsImNvb3JkcyIsImNpdHlJRCIsIm1ldHJvQmxvY2siLCJkaXN0cmljdEJsb2NrIiwic3RyZWV0IiwibnVtYmVyIiwiZ2VvTWFwIiwibXlHZW9jb2RlciIsInJlcyIsInNlbGVjdGVkU2VydmljZXMiLCJvcmRlckRhdGEiLCJvcmRlck1haW5CbG9jayIsIm9yZGVyU3RvcmFnZSIsImRhdGUiLCJ0aW1lRnJvbSIsImFkZHJlc3NCbG9jayIsInN0dWRpb01hc3RlciIsImFkZCIsImRvbmUiLCJodG1sQmxvY2siLCJjb3VudFNlcnZpY2VzSURzIiwiY291bnRTZXJ2aWNlcyIsImdlbmVyYXRlSHRtbENhdGVnb3J5Iiwic2VydmljZUJsb2NrIiwiY2FyZEJsb2NrIiwiY2FyZFR5cGUiLCJzZW5kT3JkZXIiLCJqc0NybUFkZFNlcnZpY2VzVG9DYXRlZ29yeUZvckNhcmQiLCIkdGhpcyIsInRlbXBsYXRlSUQiLCJjYXRJRCIsImh0bWwiLCJudW1iZXJfZm9ybWF0IiwiaXRlbUNvdW50IiwiaXRlbVByaWNlIiwiY291bnQiLCJpdGVtSW5kZXgiLCJmdWxsUHJpY2UiLCJvcmRlciIsImxvY2FsU3RvcmFnZSIsImZicSIsImNvbnRlbnRfbmFtZSIsInZhbHVlIiwiY3VycmVuY3kiLCJtYXBCbG9jayIsIiRtYXBFbGVtZW50IiwiY291bnRJdGVtcyIsImdsb2JhbFBhcmFtcyIsImdlbmVyYXRlVXJsQXJyYXkiLCJzZW9FbGVtZW50IiwiYWxlcnQiLCJhbGxDb3VudE1hc3RlcnMiLCJhZGRNYXN0ZXJzVG9Db250ZW50IiwiY2F0ZWdvcnlJdGVtIiwibWV0cm9JRCIsInNlcnZpY2VOYW1lIiwiZ2VuZXJhdGVIdG1sQmxvY2tNZXRybyIsImFyclBhcmFtcyIsInVwZGF0ZVVybEFycmF5Iiwic1VybCIsImdlbmVyYXRlU3RpbmdGcm9tQXJyYXkiLCJzZW5kQWpheCIsImRpc3RyaWN0SUQiLCJnZW5lcmF0ZUh0bWxCbG9ja0Rpc3RyaWN0Iiwic2xpZGVyIiwiYWxsUHJpY2VTdGFydCIsImFsbFByaWNlRW5kIiwic3BhbnMiLCJzdGFydFByaWNlIiwiZW5kUHJpY2UiLCJub1VpU2xpZGVyIiwic3RhcnQiLCJjb25uZWN0Iiwic3RlcCIsInJhbmdlIiwibWluIiwibWF4IiwidmFsdWVzIiwiZ2VuZGVySUQiLCJwbGFjZUlEIiwiYnlOYW1lIiwiaHJlZiIsInBhcmFtcyIsInBhcmFtTmFtZSIsInBhcmFtVmFsdWUiLCJzaW5nbGUiLCJ3b3JraW5nVXJsIiwicHJvY2VzcyIsImEiLCJ2IiwiT2JqZWN0IiwiZ2V0VXJsVmFycyIsInZhcnMiLCJoYXNoZXMiLCJpIiwiaGFzaCIsImdldFVybFZhciIsImNpdHlBbGlhcyIsIkJCIiwiY291bnRVc2VycyIsImZpbHRlcnNTZW9VcmwiLCJzZXJ2aWNlSWQiLCJjb25zb2xlIiwic2tpcCIsImxvYWRlciIsInNldEludGVydmFsIiwic2Nyb2xsQWRkQ29udGVudENhdGFsb2ciLCJjaGVja1Zpc2liaWxpdHkiLCJhamF4QWRkQ29udGVudCIsImFqYXhGaWx0ZXIiLCJkVG9wIiwiZEJvdCIsImVsVG9wIiwiZWxCb3QiLCJub2RlIiwiQ29yZSIsIkNvbXBvbmVudHMiLCJVdGlscyIsIk1lbnUiLCJGaWx0ZXIiLCJNYWluIiwiX2luaXRQYWdlQ2F0YWxvZyIsIl9QYWdlQ2FyZCIsIk5PREVfRU5WIiwiaW5pdCIsIl9pbml0IiwidXBsb2FkRmlsZUVudGl0eSIsInJlbW92ZWRGaWxlcyIsInJhbmRWYWx1ZSIsIm1vZGVsSUQiLCJ0YWJsZSIsImFkZE1vZGVsSUQiLCJhcnJJbWFnZXNCbG9ja3MiLCJwaG90b1VwbG9hZCIsImZpbGVOYW1lIiwiZmlsZUV4dGVuc2lvbiIsImltZ0Jsb2NrIiwiQ2FyZCIsImNhcmRJbmZvUmVxdWVzdCIsIiRodG1sIiwiJHNjcm9sbGluZ9Chb250YWluZXIiLCJvZmZzZXQiLCJmaXhDYXJkVXNlckluZm8iLCJzY3JvbGwiLCJmaXhlZEJsb2NrIiwic3RpY2t5QmxvY2siLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwiY2FyZE1lbnVGaXhlZCIsImNhcmRNZW51Q2xvbmUiLCJjYXJkTWVudSIsInN0aWNreUJsb2NrT2Zmc2V0IiwiZml4ZWRCbG9ja09mZnNldCIsImNhcmRDb250ZW50IiwiY2FyZE1lbnVPZmZzZXQiLCJjYXJkTWVudUZpeGVkU3R5bGUiLCJsZWZ0IiwicmlnaHQiLCJ6SW5kZXgiLCJzY3JvbGxzcHkiLCJkZWZhdWx0cyIsIm5hbWVzcGFjZSIsImFjdGl2ZUNsYXNzIiwiYW5pbWF0ZSIsImNvbnRhaW5lciIsIm9wdGlvbnMiLCJmaW5kRWxlbWVudHMiLCJlbGVtZW50cyIsImxpbmtzIiwibGluayIsIk1hdGgiLCJmaW5kTGluayIsInJlc2V0Q2xhc3NlcyIsInRhcmdldCIsIiR0YXJnZXQiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QURBO0FBRkssV0FBZixDQUZtRCxDQU1uRDs7QUFDQSxjQVBtRCxJQU9uRCxDQVBtRCxDQVFuRDs7QUFDQSxlQUFLLElBQUlvUCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBRzBFLFFBQVEsQ0FBNUIsUUFBcUMxRSxDQUFyQyxJQUEwQztBQUN0QztBQUNBLGdCQUFJa0YsT0FBTyxHQUFHUixRQUFRLENBRmdCLENBRWhCLENBQXRCLENBRnNDLENBR3RDOztBQUNBLGdCQUNJdEIsUUFBUSxDQUFSQSxPQUFnQjhCLE9BQU8sQ0FBdkI5QixPQUNBQSxRQUFRLENBQVJBLE1BQWU4QixPQUFPLENBRjFCLFFBR0U7QUFDRTtBQUNBLGtCQUFJakYsSUFBSSxHQUFHaUYsT0FBTyxDQUZwQixJQUVFLENBRkYsQ0FHRTs7QUFDQU4sa0JBQUksR0FBR0UsUUFBUSxRQUpqQixJQUlpQixDQUFmRixDQUpGLENBS0U7O0FBQ0Esd0JBQVU7QUFDTjtBQUNBLG9CQUFJSixPQUFPLENBQVgsVUFBc0I7QUFDbEI7QUFDQUEseUJBQU8sQ0FBUEEsU0FDSVUsT0FBTyxDQURYVixTQUVJNVQsQ0FBQyxDQUZMNFQsT0FFSyxDQUZMQTtBQUpFLGtCQVVOOzs7QUFDQU8sNEJBQVksQ0FYTixLQVdNLENBQVpBLENBWE0sQ0FZTjs7QUFDQUgsb0JBQUksQ0FBSkEsa0JBQXVCSixPQUFPLENBYnhCLFdBYU5JLEVBYk0sQ0FjTjs7QUFDQTtBQUNIO0FBQ0o7QUF2QzhDLFlBeUNuRDs7O0FBQ0EsY0FBSSxTQUFTSixPQUFPLENBQXBCLFFBQTZCO0FBQ3pCO0FBQ0FBLG1CQUFPLENBQVBBLE9BQWU1VCxDQUFDLENBQWhCNFQsT0FBZ0IsQ0FBaEJBO0FBQ0g7QUE3Q0xEO0FBekNKLE9BQU8sQ0FBUDtBQXlGSDtBQXJLTyxHQUFaM1Q7QUFGSix3QyIsImZpbGUiOiIvY2xpZW50L2pzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiL2NsaWVudC9qcy9tYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsyLFwidmVuZG9yXCIsXCJjb21tb25cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmpzLWxrLXJlcXVlc3RfX2NoYXQtZm9ybScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHNvY2tldCA9IGlvLmNvbm5lY3QoJzo1MDAxJyk7XG4gICAgICAgIHNvY2tldC5vbignY2hhdDptZXNzYWdlJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJCgnLmpzLWxrLXJlcXVlc3RfX21lc3NhZ2UtYm94JykuYXBwZW5kKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbWVzc2FnZSA9ICQoJy5qcy1say1yZXF1ZXN0X19jaGF0LW1lc3NhZ2UnKTtcbiAgICAgICAgdmFyIHJlcXVlc3RJRCA9ICQoJy5qcy1say1yZXF1ZXN0X19yZXF1ZXN0SUQnKTtcbiAgICAgICAgdmFyIHVzZXJJRCA9ICQoJy5qcy1say1yZXF1ZXN0X191c2VySUQnKTtcbiAgICAgICAgdmFyIGlzTWFzdGVyID0gJCgnLmpzLWxrLXJlcXVlc3RfX2lzTWFzdGVyJyk7XG4gICAgICAgIHZhciBpc0NsaWVudCA9ICQoJy5qcy1say1yZXF1ZXN0X19pc0NsaWVudCcpO1xuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdGV4dGFyZWEnKTtcblxuICAgICAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXV0b3NpemUpO1xuXG4gICAgICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXG4gICAgICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAxMClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlICs9ICdcXHJcXG4nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YShtZXNzYWdlLCByZXF1ZXN0SUQsIHVzZXJJRCwgaXNNYXN0ZXIsIGlzQ2xpZW50KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1say1yZXF1ZXN0X19jaGF0LXN1Ym1pdC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbmREYXRhKG1lc3NhZ2UsIHJlcXVlc3RJRCwgdXNlcklELCBpc01hc3RlciwgaXNDbGllbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1say1yZXF1ZXN0X19jb25maXJtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZW5kQ29uZmlybShyZXF1ZXN0SUQsIHVzZXJJRCwgaXNNYXN0ZXIsIGlzQ2xpZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtbGstcmVxdWVzdF9fcmVqZWN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZW5kUmVqZWN0KHJlcXVlc3RJRCwgdXNlcklELCBpc01hc3RlciwgaXNDbGllbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBzZW5kRGF0YShtZXNzYWdlLCByZXF1ZXN0SUQsIHVzZXJJRCwgaXNNYXN0ZXIsIGlzQ2xpZW50KSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIG9ialsnbWVzc2FnZSddID0gbWVzc2FnZS52YWwoKTtcbiAgICBvYmpbJ3JlcXVlc3RJRCddID0gcmVxdWVzdElELnZhbCgpO1xuICAgIG9ialsndXNlcklEJ10gPSB1c2VySUQudmFsKCk7XG4gICAgb2JqWydpc01hc3RlciddID0gaXNNYXN0ZXIudmFsKCk7XG4gICAgb2JqWydpc0NsaWVudCddID0gaXNDbGllbnQudmFsKCk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnL2FqYXhQYXJzZVNvY2tldE1lc3NhZ2UnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhcnJEYXRhOiBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgfSxcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcuanMtbGstcmVxdWVzdF9fbWVzc2FnZS1lbXB0eScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmpzLWxrLXJlcXVlc3RfX2NoYXQtbWVzc2FnZScpLnZhbCgnJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2VuZENvbmZpcm0ocmVxdWVzdElELCB1c2VySUQsIGlzTWFzdGVyLCBpc0NsaWVudCkge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBvYmpbJ21lc3NhZ2UnXSA9ICfQl9Cw0Y/QstC60LAg0L/RgNC40L3Rj9GC0LAnO1xuICAgIG9ialsncmVxdWVzdElEJ10gPSByZXF1ZXN0SUQudmFsKCk7XG4gICAgb2JqWyd1c2VySUQnXSA9IHVzZXJJRC52YWwoKTtcbiAgICBvYmpbJ2lzTWFzdGVyJ10gPSBpc01hc3Rlci52YWwoKTtcbiAgICBvYmpbJ2lzQ2xpZW50J10gPSBpc0NsaWVudC52YWwoKTtcbiAgICBvYmpbJ2NvbmZpcm1lZCddID0gMTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6ICcvYWpheENvbmZpcm1SZXF1ZXN0JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYXJyRGF0YTogSlNPTi5zdHJpbmdpZnkob2JqKSxcbiAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgIH0sXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJCgnLmpzLWxrLXJlcXVlc3RfX2J1dHRvbi1ib3gnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZW5kUmVqZWN0KHJlcXVlc3RJRCwgdXNlcklELCBpc01hc3RlciwgaXNDbGllbnQpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgb2JqWydtZXNzYWdlJ10gPSAn0JfQsNGP0LLQutCwINC+0YLQutC70L7QvdC10L3QsCc7XG4gICAgb2JqWydyZXF1ZXN0SUQnXSA9IHJlcXVlc3RJRC52YWwoKTtcbiAgICBvYmpbJ3VzZXJJRCddID0gdXNlcklELnZhbCgpO1xuICAgIG9ialsnaXNNYXN0ZXInXSA9IGlzTWFzdGVyLnZhbCgpO1xuICAgIG9ialsnaXNDbGllbnQnXSA9IGlzQ2xpZW50LnZhbCgpO1xuICAgIG9ialsncmVqZWN0ZWQnXSA9IDE7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnL2FqYXhSZWplY3RSZXF1ZXN0JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYXJyRGF0YTogSlNPTi5zdHJpbmdpZnkob2JqKSxcbiAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgIH0sXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJCgnLmpzLWxrLXJlcXVlc3RfX2J1dHRvbi1ib3gnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhdXRvc2l6ZSgpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBidXR0b25zID0gJCgnLmxrLXJlcXVlc3QtaXRlbV9fYnV0dG9ucycpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OjM3cHgnO1xuICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDonICsgZWwuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgYnV0dG9ucy5jc3Moe1xuICAgICAgICAgICAgYm90dG9tOiA1MiArIGVsLnNjcm9sbEhlaWdodCArICdweCcsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZWwuc2Nyb2xsSGVpZ2h0ID49IDEyMykge1xuICAgICAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICAgICAgICBidXR0b25zLmNzcyh7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNjAgKyAncHgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCAwKTtcbn1cblxuZXhwb3J0IHsgc2VuZERhdGEsIHNlbmRDb25maXJtLCBzZW5kUmVqZWN0LCBhdXRvc2l6ZSB9O1xuIiwiLyoqXG4gKiBNYWluIENhdGFsb2cuanNcbiAqXG4gKiBAYXV0aG9yIEFudG9uIFVzdGlub2ZmIDxhLmEudXN0aW5vZmZAZ21haWwuY29tPlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2cge1xuICAgIC8vIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIC8vIH1cblxuICAgIGluaXQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmluaXRCdG5Ub2dnbGVNYXAoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW5pdEZpbHRlckNhdGVnb3J5KGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRNb3ZlQmxvY2tzKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRBY2NvcmRlb25XcmFwcChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBCdG4gc2hvdyBjYXRhbG9nXG4gICAgaW5pdEJ0blRvZ2dsZU1hcChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNob3ctLWxpc3QnKS5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgICAgIGJsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fc2hvd0NhdGFsb2cpO1xuICAgICAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9zaG93Q2F0YWxvZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNob3ctLW1hcCcpLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICAgICAgYmxvY2sucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9zaG93TWFwKTtcbiAgICAgICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fc2hvd01hcCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zaG93Q2F0YWxvZyhlKSB7XG4gICAgICAgIGxldCBjYXRhbG9nTWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNhdGFsb2ctbWFwJyk7XG5cbiAgICAgICAgY2F0YWxvZ01hcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjYXRhbG9nTWFwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1jb250ZW50X19pbm5lcicpXG4gICAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICBlLnRhcmdldFxuICAgICAgICAgICAgLmNsb3Nlc3QoJy5qcy1zaG93LS1saXN0JylcbiAgICAgICAgICAgIC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIF9zaG93TWFwKGUpIHtcbiAgICAgICAgbGV0IGNhdGFsb2dNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2F0YWxvZy1tYXAnKTtcblxuICAgICAgICBjYXRhbG9nTWFwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjYXRhbG9nTWFwLmNsYXNzTGlzdC5hZGQoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctY29udGVudF9faW5uZXInKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgICdub25lJztcbiAgICAgICAgZS50YXJnZXRcbiAgICAgICAgICAgIC5jbG9zZXN0KCcuanMtc2hvdy0tbWFwJylcbiAgICAgICAgICAgIC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIC8vZmlsdGVyIGNhdGVnb3J5XG4gICAgaW5pdEZpbHRlckNhdGVnb3J5KCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoID4gNzY4KSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICAnLmpzLWNhdGVnb3J5LmlzLWNoZWNrZWQgLmNhdGVnb3J5X19pdGVtOm5vdCguaXMtc2VsZWN0ZWQpJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2F0ZWdvcnkgLmNhdGVnb3J5X19saW5rJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9zZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3NlbGVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9zZWxlY3QoZSkge1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1jYXRlZ29yeScpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhdGVnb3J5X19pdGVtJyk7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlfX2l0ZW0nKS5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrICE9IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWNhdGVnb3J5LS1yZXNldCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF91bnNlbGVjdCk7XG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF91bnNlbGVjdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX3Vuc2VsZWN0KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBlLnRhcmdldC5jbG9zZXN0KCcuanMtY2F0ZWdvcnknKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRlZ29yeV9faXRlbScpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5X19pdGVtJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2F0ZWdvcnkgLmNhdGVnb3J5X19saW5rJylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9zZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3NlbGVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfc2VsZWN0KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBlLnRhcmdldC5jbG9zZXN0KCcuanMtY2F0ZWdvcnknKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRlZ29yeV9faXRlbScpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNDaGVja2VkID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChjYXRlZ29yeS5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlfX2l0ZW0nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0dXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01vdmUgYmxvY2sgaW4gbWVkaWEgc2NyZWVuXG4gICAgaW5pdE1vdmVCbG9ja3MoKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA0ODApIHtcbiAgICAgICAgICAgICQoJy5jYXRhbG9nX192aWV3LXRvZ2dsZScpLmluc2VydEJlZm9yZSgnLmNhdGFsb2dfX2lubmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0lmIHBhZ2UgY2F0YWxvZyBmaWx0ZXIgdHJhbnNmb3JtIGFjY29yZGVvblxuICAgIGluaXRBY2NvcmRlb25XcmFwcCgpIHtcbiAgICAgICAgaWYgKCQoJy53cmFwcGVyJykuaGFzQ2xhc3MoJ3BhZ2UtY2F0YWxvZycpKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KSB7XG4gICAgICAgICAgICAgICAgJCgnLmNhdGFsb2ctZmlsdGVyX19ib2R5JykuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICdiYi1hY2NvcmRlb24gYmItYWNjb3JkZW9uLS1jdXN0b20gYmItYWNjb3JkZW9uLS1vdGhlciBqcy1iYi1hY2NvcmRlb24nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICQoJy5qcy1jYXRhbG9nLWZpbHRlci1pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdiYi1hY2NvcmRlb25fX2l0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5jYXRhbG9nLWZpbHRlcl9fdGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vdCgnLmNhdGFsb2ctZmlsdGVyX190aXRsZV9jYXRlZ29yeScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JiLWFjY29yZGVvbl9fdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5jYXRhbG9nLWZpbHRlcl9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2JiLWFjY29yZGVvbl9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnLmpzLWNhdGFsb2ctZmlsdGVyLWl0ZW06bHQoMiknKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmJiLWFjY29yZGVvbl9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgIC5zbGlkZURvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAnQC9qcy9fZnJvbnRlbmQvbWFpbic7XG5pbXBvcnQgJ0AvanMvbWFpbi9jdXN0b20nO1xuaW1wb3J0ICdAL2pzL21haW4vZmlsdGVyJztcbmltcG9ydCAnQC9qcy9tYWluL2NhcmQnO1xuaW1wb3J0ICdAL2pzL21haW4vY2FiaW5ldCc7XG5pbXBvcnQgJ0AvanMvbWFpbi9jaGF0cyc7XG5pbXBvcnQgJ0AvanMvbWFpbi91cGxvYWRlcic7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmpzLXByb2ZpbGUtZm9ybS1lZGl0X19tYWluJykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgb2JqID0gW107XG4gICAgICAgIG9ialsnbmFtZSddID0gJCgnLmpzLXByb2ZpbGVfX25hbWUnKTtcbiAgICAgICAgb2JqWydnZW5kZXJDbGFzcyddID0gJCgnLmpzLXByb2ZpbGVfX2dlbmRlcicpO1xuICAgICAgICBvYmpbJ2dlbmRlckVudGl0eSddID0gJCgnaW5wdXRbY2xhc3M9XCJqcy1wcm9maWxlX19nZW5kZXJcIl06Y2hlY2tlZCcpO1xuICAgICAgICBvYmpbJ2dlbmRlckJsb2NrJ10gPSAkKCcuanMtcHJvZmlsZS1nZW5kZXJfX2Jsb2NrJyk7XG4gICAgICAgIG9ialsncGhvbmUnXSA9ICQoJy5qcy1wcm9maWxlX19waG9uZScpO1xuICAgICAgICBvYmpbJ2VtYWlsJ10gPSAkKCcuanMtcHJvZmlsZV9fZW1haWwnKTtcbiAgICAgICAgb2JqWyd3b3JrUGxhY2UnXSA9ICQoJy5qcy1wcm9maWxlX193b3JrUGFsYWNlJyk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKiBDaGFuZ2UgTkFNRSBmaWVsZFxuICAgICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqL1xuICAgICAgICAkKG9ialsnbmFtZSddKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqIENoYW5nZSBHRU5ERVIgZmllbGRcbiAgICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKi9cbiAgICAgICAgJChvYmpbJ2dlbmRlckNsYXNzJ10pLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9ialsnZ2VuZGVyRW50aXR5J10gPSAkKHRoaXMpO1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICogQ2hhbmdlIFdPUktfUExBQ0UgZmllbGRcbiAgICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKi9cbiAgICAgICAgJChvYmpbJ3dvcmtQbGFjZSddKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvYmpbJ3dvcmtQbGFjZSddID0gJCh0aGlzKTtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqIENoYW5nZSBFTUFJTCBmaWVsZFxuICAgICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqL1xuICAgICAgICAkKG9ialsnZW1haWwnXSkub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKiBDbGljayBvbiBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICovXG4gICAgICAgICQoJy5qcy1wcm9maWxlLWZvcm0tc3VibWl0X19tYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdWJtaXRNYWluUHJvZmlsZUZvcm0ob2JqKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtY2FiaW5ldC1waG9uZS1jb25maXJtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwaG9uZSA9ICQoJy5qcy1wcm9maWxlX19waG9uZScpLnZhbCgpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4U2VuZFNtcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwaG9uZTogcGhvbmUsXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmpzLWNvbmZpcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5jb25maXJtX190aW1lciwgLmNvbmZpcm1fX2ZpZWxkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBwaG9uZUNvbmZpcm1UaW1lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1jYWJpbmV0LXBob25lLWNvbmZpcm1fX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbmZpcm1WYWx1ZSA9ICQoJyNqcy1jYWJpbmV0LXBob25lLWNvbmZpcm1fX2lucHV0JykudmFsKCk7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSAkKCcjanMtY2FiaW5ldC1waG9uZS1jb25maXJtX19lcnJvcicpO1xuICAgICAgICAgICAgdmFyIGVycm9yQmxvY2sgPSAkKCcjanMtY2FiaW5ldC1waG9uZS1jb25maXJtX19lcnJvci1ibG9jaycpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybVZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGVycm9yQmxvY2suYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0KCfQktCy0LXQtNC40YLQtSDQutC+0LQg0LjQtyBTTVMg0YHQvtC+0LHRidC10L3QuNGPJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhDb25maXJtU21zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1WYWx1ZTogY29uZmlybVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVVc2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdDtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLXByb2ZpbGUtZWRpdG9yX19hdHRlbnRpb24tc3VjY2VzcycpLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWhpZGRlbidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLXByb2ZpbGUtZWRpdG9yX19hdHRlbnRpb24tZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2pzLWNhYmluZXQtcGhvbmUtY29uZmlybV9fZXJyb3ItYmxvY2snKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLXByb2ZpbGUtZWRpdG9yX19pbnB1dC1waG9uZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWVycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtY29uZmlybScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQmxvY2suYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IudGV4dCgn0J3QtSDQstC10YDQvdGL0Lkg0LrQvtC0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1wcm9maWxlLXN0dWRpby1mb3JtLWVkaXRfX21haW4nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBzdHVkaW9PYmogPSBbXTtcbiAgICAgICAgc3R1ZGlvT2JqWyduYW1lJ10gPSAkKCcuanMtcHJvZmlsZV9fbmFtZScpO1xuICAgICAgICBzdHVkaW9PYmpbJ3Bob25lJ10gPSAkKCcuanMtcHJvZmlsZV9fcGhvbmUnKTtcbiAgICAgICAgc3R1ZGlvT2JqWydlbWFpbCddID0gJCgnLmpzLXByb2ZpbGVfX2VtYWlsJyk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKiBDaGFuZ2UgTkFNRSBmaWVsZFxuICAgICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqL1xuICAgICAgICAkKHN0dWRpb09ialsnbmFtZSddKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqIENoYW5nZSBFTUFJTCBmaWVsZFxuICAgICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqL1xuICAgICAgICAkKHN0dWRpb09ialsnZW1haWwnXSkub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgKiBDbGljayBvbiBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICovXG4gICAgICAgICQoJy5qcy1wcm9maWxlLXN0dWRpby1mb3JtLXN1Ym1pdF9fbWFpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3VibWl0TWFpblByb2ZpbGVTdHVkaW9Gb3JtKHN0dWRpb09iaik7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNhYmluZXQtcGhvbmUtY29uZmlybScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVudGl0eSA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGhvbmUgPSAkKCcuanMtcHJvZmlsZV9fcGhvbmUnKS52YWwoKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheFNlbmRTbXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5qcy1jb25maXJtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuY29uZmlybV9fdGltZXIsIC5jb25maXJtX19maWVsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVDb25maXJtVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtY2FiaW5ldC1waG9uZS1jb25maXJtX19idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjb25maXJtVmFsdWUgPSAkKCcjanMtY2FiaW5ldC1waG9uZS1jb25maXJtX19pbnB1dCcpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gJCgnI2pzLWNhYmluZXQtcGhvbmUtY29uZmlybV9fZXJyb3InKTtcbiAgICAgICAgICAgIHZhciBlcnJvckJsb2NrID0gJCgnI2pzLWNhYmluZXQtcGhvbmUtY29uZmlybV9fZXJyb3ItYmxvY2snKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpcm1WYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBlcnJvckJsb2NrLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dCgn0JLQstC10LTQuNGC0LUg0LrQvtC0INC40LcgU01TINGB0L7QvtCx0YnQtdC90LjRjycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4Q29uZmlybVNtcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtVmFsdWU6IGNvbmZpcm1WYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVXNlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UucmVkaXJlY3Q7XG4gICAgICAgICAgICAgICAgICAgICQoJy5qcy1wcm9maWxlLWVkaXRvcl9fYXR0ZW50aW9uLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcy1oaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5qcy1wcm9maWxlLWVkaXRvcl9fYXR0ZW50aW9uLWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNqcy1jYWJpbmV0LXBob25lLWNvbmZpcm1fX2Vycm9yLWJsb2NrJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5qcy1wcm9maWxlLWVkaXRvcl9faW5wdXQtcGhvbmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWNvbmZpcm0nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckJsb2NrLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRleHQoJ9Cd0LUg0LLQtdGA0L3Ri9C5INC60L7QtCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKCcuanMtcHJvZmlsZS1mb3JtLWVkaXRfX2NvbnRhY3QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJy5qcy1wcm9maWxlLWNvbnRhY3RfX3JlZ2lvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZWdpb25JRCA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhHZXRDaXRpZXNCeVJlZ2lvbklEJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbklEOiByZWdpb25JRCxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3QgPSAkKCcuanMtcHJvZmlsZS1jb250YWN0X19jaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5odG1sKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyckRhdGEgPSBbeyBpZDogMCwgdGV4dDogJ9Cd0LUg0LLRi9Cx0YDQsNC9JyB9XTtcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJEYXRhLnB1c2goeyBpZDoga2V5LCB0ZXh0OiBuYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Lmh0bWwoJycpLnNlbGVjdDIoeyBkYXRhOiBhcnJEYXRhIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICogQ2xpY2sgb24gc3VibWl0IGJ1dHRvblxuICAgICAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuanMtcHJvZmlsZS1mb3JtLXN1Ym1pdF9fY29udGFjdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNpdHkgPSAkKCcuanMtcHJvZmlsZS1jb250YWN0X19jaXR5Jyk7XG5cbiAgICAgICAgICAgIGlmIChjaXR5LnZhbCgpID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5qcy1wcm9maWxlX19zdWNjZXNzJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcuanMtcHJvZmlsZS1mb3JtLWVkaXRfX2NvbnRhY3QnKS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKCcuanMtcHJvZmlsZS1mb3JtLWVkaXRfX3NlY3VyaXR5JykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgcGFzc3dvcmROZXcgPSAkKCcuanMtcHJvZmlsZV9fcGFzc3dvcmQtbmV3Jyk7XG4gICAgICAgIHZhciBwYXNzd29yZENvbmZpcm0gPSAkKCcuanMtcHJvZmlsZV9fcGFzc3dvcmQtY29uZmlybScpO1xuXG4gICAgICAgIHBhc3N3b3JkTmV3Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtcHJvZmlsZS1mb3JtLXN1Ym1pdF9fc2VjdXJpdHknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN1Ym1pdFNlY3VyaXR5UHJvZmlsZUZvcm0ocGFzc3dvcmROZXcsIHBhc3N3b3JkQ29uZmlybSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1yYWlzZS10aGUtcHJvZmlsZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnLmpzLXJhaXNlLXRoZS1wcm9maWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4UmFpc2VUaGVQcm9maWxlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbVBvc2l0aW9uID0gcmVzcG9uc2UuaXRlbVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAkKCcuanMtdXBkYXRlLW51bWJlcicpLnRleHQoaXRlbVBvc2l0aW9uICsgJyAtINGPJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy11cGxvYWQtYXZhdGFyJykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgY3JvcFBhcmFtcyA9IHt9O1xuICAgICAgICBjcm9wUGFyYW1zWyd4J10gPSAwO1xuICAgICAgICBjcm9wUGFyYW1zWyd5J10gPSAwO1xuICAgICAgICBjcm9wUGFyYW1zWyd3aWR0aCddID0gMDtcbiAgICAgICAgY3JvcFBhcmFtc1snaGVpZ2h0J10gPSAwO1xuXG4gICAgICAgICQoJy5qcy11cGxvYWQtYXZhdGFyX19idXR0b24nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLmZpbGVzO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ190b2tlbicsIHRva2VuKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheFByZXBhcmVBdmF0YXInLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9ICQoJy5qcy11cGxvYWQtYXZhdGFyX19jcm9wcGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy11cGxvYWQtYXZhdGFyX19ibG9jaycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5hdHRyKCdzcmMnLCByZXNwb25zZS5zcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmF0dHIoJ2RhdGEtbmFtZScsIHJlc3BvbnNlLmZpbGVOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2pzLXVwbG9hZC1hdmF0YXInKS5jcm9wcGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9wOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3BQYXJhbXNbJ3gnXSA9IGUueDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JvcFBhcmFtc1sneSddID0gZS55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9wUGFyYW1zWyd3aWR0aCddID0gZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JvcFBhcmFtc1snaGVpZ2h0J10gPSBlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLXVwbG9hZC1hdmF0YXJfX3NhdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhdmF0YXJQYXRoID0gJCgnLmpzLXVwbG9hZC1hdmF0YXJfX2Nyb3BwZXInKS5kYXRhKCduYW1lJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudFVzZXJJRCA9ICQoJy5qcy11cGxvYWQtYXZhdGFyX19pbWctYmxvY2snKS5kYXRhKCdpZCcpO1xuXG4gICAgICAgICAgICBjcm9wUGFyYW1zWydhdmF0YXJQYXRoJ10gPSBhdmF0YXJQYXRoO1xuICAgICAgICAgICAgY3JvcFBhcmFtc1snY3VycmVudFVzZXJJRCddID0gY3VycmVudFVzZXJJRDtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheENyb3BBbmRTYXZlQXZhdGFyJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNyb3BQYXJhbXM6IEpTT04uc3RyaW5naWZ5KGNyb3BQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRJbWcgPSAkKCcuanMtdXBsb2FkLWF2YXRhcl9fbGVmdC1pbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvcEltZyA9ICQoJy5qcy11cGxvYWQtYXZhdGFyX19sZWZ0LXRvcCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxlZnRJbWcuYXR0cignc3JjJywgcmVzcG9uc2UuYXZhdGFyKTtcbiAgICAgICAgICAgICAgICAgICAgdG9wSW1nLmF0dHIoJ3NyYycsIHJlc3BvbnNlLmF2YXRhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW1hZ2UobGVmdEltZyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUltYWdlKHRvcEltZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLXVwbG9hZC1hdmF0YXJfX3NhdmUnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLWNhdC1zZXJ2aWNlcy1zZWxlY3RfX2Jsb2NrJykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYmxvY2sgPSAkKCcuanMtY2F0LXNlcnZpY2VzX19kaXYnKTtcbiAgICAgICAgdmFyIGFyckNhdGVnb3JpZXMgPSBbXTtcblxuICAgICAgICBibG9jay5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIGFyckNhdGVnb3JpZXMucHVzaCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBibG9jay5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjYXRlZ29yeUlEID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBhcnJDYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnlJRCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBhcnJDYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnlJRCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhhc0NsYXNzKCdpcy1jaGVja2VkJykgJiZcbiAgICAgICAgICAgICAgICAhJCh0aGlzKS5oYXNDbGFzcygnanMtZGlzYWJsZS1jYXRlZ29yeScpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJyk7XG5cbiAgICAgICAgICAgICAgICBhcnJDYXRlZ29yaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICQodGhpcykuaGFzQ2xhc3MoJ2lzLWNoZWNrZWQnKSAmJlxuICAgICAgICAgICAgICAgICQodGhpcykuaGFzQ2xhc3MoJ2pzLWRpc2FibGUtY2F0ZWdvcnknKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLmpzLWNhdC1zZXJ2aWNlcy1idXR0b25fX3JlbW92ZScpLmF0dHIoXG4gICAgICAgICAgICAgICAgICAgICdkYXRhLWlkJyxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJRFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5kYXRhKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogJyNkaXNhYmxlLWNhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmRpc2FibGUtY2F0ZWdvcnlfX2RhdGEtdGl0bGUnKS50ZXh0KHRpdGxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWNhdC1zZXJ2aWNlcy1idXR0b25fX3JlbW92ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNhdGVnb3J5SUQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGFyckNhdGVnb3JpZXMuaW5kZXhPZihwYXJzZUludChjYXRlZ29yeUlEKSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYXJyQ2F0ZWdvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuXG4gICAgICAgICAgICAkKCcuanMtY2F0LWl0ZW0tJyArIGNhdGVnb3J5SUQpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2pzLWRpc2FibGUtY2F0ZWdvcnknKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNhdC1zZXJ2aWNlcy1zZWxlY3RfX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheEFkZENhdGVnb3JpZXNUb1VzZXInLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcklEOiAkKHRoaXMpLmRhdGEoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SURzOiBKU09OLnN0cmluZ2lmeShhcnJDYXRlZ29yaWVzKSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICQodGhpcykuZGF0YSgnZ3JvdXAnKSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UucmVkaXJlY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1zZXJ2aWNlcy1zZWxlY3RfX2Jsb2NrJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCcuanMtc2VydmljZS1jaGVja19fZGl2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHNlcnZpY2VJRCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIHZhciBwcmljZUJsb2NrID0gJCgnLmpzLXNlcnZpY2UtaW5wdXQtYmxvY2tfX3ByaWNlLScgKyBzZXJ2aWNlSUQpO1xuICAgICAgICAgICAgdmFyIHRpbWVCbG9jayA9ICQoJy5qcy1zZXJ2aWNlLWlucHV0LWJsb2NrX190aW1lLScgKyBzZXJ2aWNlSUQpO1xuXG4gICAgICAgICAgICBpZiAoIV90aGlzLmhhc0NsYXNzKCdpcy1jaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGRDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIHByaWNlQmxvY2sucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB0aW1lQmxvY2sucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmljZUJsb2NrLnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBwcmljZUJsb2NrLnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aW1lQmxvY2sudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVCbG9jay5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlcnZpY2Uoc2VydmljZUlELCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBwcmljZUJsb2NrLmF0dHIoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICAgICAgICAgIHRpbWVCbG9jay5hdHRyKCdkaXNhYmxlZCcsICcnKTtcblxuICAgICAgICAgICAgICAgIHByaWNlQmxvY2sucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB0aW1lQmxvY2sucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlcnZpY2Uoc2VydmljZUlELCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNlcnZpY2UtaXRlbV9fZmllbGQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZmluZCgnLmpzLXNlcnZpY2UtaW5wdXQnKS5hdHRyKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXNcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgnLnNlcnZpY2UtaXRlbScpXG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLmpzLXNlcnZpY2UtY2hlY2tfX2RpdicpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLmZpbmQoJy5qcy1zZXJ2aWNlLWlucHV0JykucmVtb3ZlQXR0cignZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSAkKCcuanMtc2VydmljZS1pbnB1dCcpO1xuICAgICAgICBpbnB1dEVsZW1lbnQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0RWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwcmljZTtcbiAgICAgICAgICAgIHZhciB0aW1lO1xuICAgICAgICAgICAgaWYgKF90aGlzLmhhc0NsYXNzKCdqcy1pLXRpbWUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudmFsKCkgIT09ICcnICYmXG4gICAgICAgICAgICAgICAgICAgIF90aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmV2KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLmpzLWktcHJpY2UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbCgpICE9PSAnJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBfdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5qcy1pLXByaWNlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IF90aGlzLnZhbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90aGlzLmhhc0NsYXNzKCdqcy1pLXByaWNlJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnZhbCgpICE9PSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICBfdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5qcy1pLXRpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbCgpICE9PSAnJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBfdGhpcy52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IF90aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLmpzLWktdGltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlSUQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hamF4TWFzdGVyU2VydmljZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJRDogJCh0aGlzKS5kYXRhKCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNhdmVkQmxvY2sgPSAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuanMtc2VydmljZS1pdGVtX19zYXZlLScgKyBzZXJ2aWNlSURcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZEJsb2NrLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZEJsb2NrLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKCcuanMtbGstd29ya3NfX2Jsb2NrJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCcuanMtbGstcG9wdXAtY2F0ZWdvcmllc19fc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgdmFyIGNhdGVnb3J5SUQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgaWYgKGNhdGVnb3J5SUQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhTZWxlY3RTZXJ2aWNlc0J5Q2F0ZWdvcnlJRCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SUQ6IGNhdGVnb3J5SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3QgPSAkKCcuanMtbGstcG9wdXAtc2VydmljZXNfX3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyckRhdGEgPSBbeyBpZDogMCwgdGV4dDogJ9Cd0LUg0LLRi9Cx0YDQsNC9JyB9XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckRhdGEucHVzaCh7IGlkOiBrZXksIHRleHQ6IG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5odG1sKCcnKS5zZWxlY3QyKHsgZGF0YTogYXJyRGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtbGstcG9wdXAtY3JlYXRlLWFsYnVtX19idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjYXRlZ29yeUlEID0gJCgnLmpzLWxrLXBvcHVwLWNhdGVnb3JpZXNfX3NlbGVjdCcpO1xuICAgICAgICAgICAgdmFyIHNlcnZpY2VJRCA9ICQoJy5qcy1say1wb3B1cC1zZXJ2aWNlc19fc2VsZWN0Jyk7XG4gICAgICAgICAgICB2YXIgYWxidW1EZXNjcmlwdGlvbiA9ICQoJy5qcy1say1wb3B1cC1hbGJ1bV9fZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSAwO1xuXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnlJRC52YWwoKSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlJRC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlELnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlSUQudmFsKCkgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgIHNlcnZpY2VJRC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlSUQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9ycyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheEFkZE5ld0FsYnVtJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SUQ6IGNhdGVnb3J5SUQudmFsKCksXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJRDogc2VydmljZUlELnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBhbGJ1bURlc2NyaXB0aW9uOiBhbGJ1bURlc2NyaXB0aW9uLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWxrLXBvcHVwLXNlcnZpY2VzX19zZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1say1wb3B1cC1hbGJ1bV9fbmFtZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcmVtb3ZlQWxidW1JY29uID0gJCgnLmpzLWRlbGV0ZS1hbGJ1bV9faWNvbicpO1xuICAgIGlmIChyZW1vdmVBbGJ1bUljb24ubGVuZ3RoID4gMCkge1xuICAgICAgICByZW1vdmVBbGJ1bUljb24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuanMtZGVsZXRlLWFsYnVtX19idXR0b24nKS5hdHRyKFxuICAgICAgICAgICAgICAgICdkYXRhLWFsYnVtJyxcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ2lkJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciByZW1vdmVBbGJ1bUJ1dHRvbiA9ICQoJy5qcy1kZWxldGUtYWxidW1fX2J1dHRvbicpO1xuICAgIGlmIChyZW1vdmVBbGJ1bUJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlbW92ZUFsYnVtQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFsYnVtSUQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYWxidW0nKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhSZW1vdmVBbGJ1bUZyb21MaXN0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsYnVtSUQ6IGFsYnVtSUQsXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5qcy1hbGJ1bV9fYmxvY2stJyArIGFsYnVtSUQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYXBcbiAgICBpZiAoJCgnLmpzLWNhYmluZXRfX21hcCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgeW1hcHMucmVhZHkoaW5pdENhYmluZXRNYXApO1xuICAgIH1cblxuICAgIHZhciByb3RhdGVGaWxlUmlnaHQgPSAkKCcuanMtcm90YXRlLWZpbGVfX3JpZ2h0Jyk7XG4gICAgaWYgKHJvdGF0ZUZpbGVSaWdodC5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIHJvdGF0ZUZpbGVSaWdodC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICB2YXIgYWxidW1JRCA9ICQodGhpcykuYXR0cignZGF0YS1hbGJ1bScpO1xuICAgICAgICAvLyAgICAgJC5hamF4KHtcbiAgICAgICAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gICAgICAgICB1cmw6ICcvYWpheFJlbW92ZUFsYnVtRnJvbUxpc3QnLFxuICAgICAgICAvLyAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYWxidW1JRDogYWxidW1JRCxcbiAgICAgICAgLy8gICAgICAgICAgICAgX3Rva2VuOiB0b2tlblxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcuanMtYWxidW1fX2Jsb2NrLScgKyBhbGJ1bUlEKS5yZW1vdmUoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgLy8gaWYgKCQoJy5qcy13b3JraW5nLWhvdXJzJykubGVuZ3RoID4gMCkge1xuICAgIC8vXG4gICAgLy8gfVxuXG4gICAgaWYgKCQoJy5qcy13b3JraW5nLWhvdXJzJykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgY2hlY2tib3ggPSAkKCcuanMtd29ya2luZy1ob3VycycpLmZpbmQoJy5qcy13b3JraW5nRW1wdHknKTtcbiAgICAgICAgdmFyIHdvcmtMaXN0ID0gJCgnLmpzLXdvcmtpbmctaG91cnMnKS5maW5kKCcud29ya2luZy1ob3VycycpO1xuICAgICAgICBjaGVja2JveC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB3b3JraW5nRW1wdHkgPSAkKCcuanMtd29ya2luZ0VtcHR5JylcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC52YWwoKTtcblxuICAgICAgICAgICAgaWYgKHdvcmtpbmdFbXB0eSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXdvcmtpbmdFbXB0eScpXG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgICAgIC52YWwoJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXdvcmtpbmdFbXB0eScpXG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgICAgIC52YWwoJzAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoZWNrYm94Lmhhc0NsYXNzKCdpcy1jaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICB3b3JrTGlzdC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdvcmtMaXN0LmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAkKCcuanMtd29ya2luZy1ob3VycycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgdmFyIHNob3dNYXN0ZXJJbkNhdGFsb2cgPSAkKCcuanMtc2hvdy1tYXN0ZXItaW4tY2F0YWxvZycpO1xuICAgIGlmIChzaG93TWFzdGVySW5DYXRhbG9nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2hvd01hc3RlckluQ2F0YWxvZy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhY3RpdmU7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhTaG93TWFzdGVySW5DYXRhbG9nJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJBY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBkZWxldGVBZGRBZGRyZXNzID0gJCgnLmpzLWRlbGV0ZS1hZGQtYWRkcmVzcycpO1xuICAgIGlmIChkZWxldGVBZGRBZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGVsZXRlQWRkQWRkcmVzcy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4RGVsZXRlQWRkQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSUQ6IF90aGlzLmRhdGEoJ2FkZHJlc3MnKSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzdGVwT25lU3VibWl0QnV0dG9uID0gJCgnLmpzLXN0ZXAtb25lLXBob25lLWNvbmZpcm0nKTtcbiAgICBpZiAoc3RlcE9uZVN1Ym1pdEJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBzdGVwT25lSW5wdXQgPSAkKCcuanMtc3RlcF9fZmlyc3QtaW5wdXQnKTtcbiAgICAgICAgdmFyIHN0ZXBPbmVDb25maXJtID0gJCgnLmpzLXN0ZXAtb25lX19jb25maXJtJyk7XG5cbiAgICAgICAgc3RlcE9uZVN1Ym1pdEJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVudGl0eSA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoc3RlcE9uZUlucHV0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgIHN0ZXBPbmVJbnB1dC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4U2VuZFNtcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwaG9uZTogc3RlcE9uZUlucHV0LnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5qcy1jb25maXJtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuY29uZmlybV9fdGltZXIsIC5jb25maXJtX19maWVsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVDb25maXJtVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RlcE9uZUlucHV0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGVwT25lQ29uZmlybS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgY29uZmlybVZhbHVlID0gJCgnI2pzLXN0ZXAtb25lLXBob25lLWNvbmZpcm1fX2lucHV0JykudmFsKCk7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSAkKCcjanMtc3RlcC1vbmUtcGhvbmUtY29uZmlybV9fZXJyb3InKTtcbiAgICAgICAgICAgIHZhciBlcnJvckJsb2NrID0gJCgnI2pzLXN0ZXAtb25lLXBob25lLWNvbmZpcm1fX2Vycm9yLWJsb2NrJyk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JCbG9jay5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIGVycm9yLnRleHQoJ9CS0LLQtdC00LjRgtC1INC60L7QtCDQuNC3IFNNUyDRgdC+0L7QsdGJ0LXQvdC40Y8nKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNhYmluZXRcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhDb25maXJtU21zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1WYWx1ZTogY29uZmlybVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVVc2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHN0ZXBPbmVJbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsb3Nlc3QoJy5qcy1wcm9maWxlLWZvcm0tZWRpdF9fbWFpbicpLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQmxvY2suYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IudGV4dCgn0J3QtSDQstC10YDQvdGL0Lkg0LrQvtC0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1zdHVkaW9fX2FkZC1hZG1pbicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFkbWluTmFtZSA9ICQoJy5qcy1wb3B1cC1zdHVkaW9fX2FkbWluLW5hbWUtaW5wdXQnKTtcbiAgICAgICAgdmFyIGFkbWluUGhvbmUgPSAkKCcuanMtcG9wdXAtc3R1ZGlvX19hZG1pbi1waG9uZS1pbnB1dCcpO1xuICAgICAgICB2YXIgYWRtaW5FbWFpbCA9ICQoJy5qcy1wb3B1cC1zdHVkaW9fX2FkbWluLWVtYWlsLWlucHV0Jyk7XG4gICAgICAgIHZhciBhZG1pbkFkZHJlc3MgPSAkKCcuanMtcG9wdXAtc3R1ZGlvX19hZG1pbi1hZGRyZXNzLWlucHV0Jyk7XG4gICAgICAgICQoJy5qcy1wb3B1cC1zdHVkaW9fX2FkbWluLWFkZC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSAwO1xuXG4gICAgICAgICAgICBpZiAoYWRtaW5OYW1lLnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgIGFkbWluTmFtZS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWRtaW5QaG9uZS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBhZG1pblBob25lLnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhZG1pbkVtYWlsLnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgIGFkbWluRW1haWwucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9ycyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheFN0dWRpb0FkZEFkbWluJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBhZG1pblBob25lLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBhZG1pbk5hbWUudmFsKCksXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBhZG1pbkVtYWlsLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZG1pbkFkZHJlc3MudmFsKCksXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyZWN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkbWluUGhvbmUucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWRtaW5QaG9uZS5uZXh0KCkudGV4dChyZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkbWluTmFtZS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFkbWluUGhvbmUub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhZG1pbkVtYWlsLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3R1ZGlvLWZvcm0tc3VibWl0X19hZG1pbnMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5qcy1zdHVkaW9fX2FkbWluLW1hc3Rlci1pbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBfdGhpc1xuICAgICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgLnZhbChfdGhpcy52YWwoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmpzLXN0dWRpb19fc3VjY2VzcycpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXN0dWRpby1mb3JtLWVkaXRfX2FkbWlucycpLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLXN0dWRpb19fYWRtaW4tZGVsZXRlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFkbWluSUQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICAkKCcuanMtcG9wdXAtc3R1ZGlvX19idXR0b25zLWJsb2NrLWFkbWluJykuYXR0cignZGF0YS1pZCcsIGFkbWluSUQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3R1ZGlvX19hZG1pbi1tZWV0LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFkbWluSUQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICAkKCcuanMtcG9wdXAtc3R1ZGlvX19idXR0b25zLWJsb2NrLWFkbWluLW1lZXQnKS5hdHRyKFxuICAgICAgICAgICAgICAgICdkYXRhLWlkJyxcbiAgICAgICAgICAgICAgICBhZG1pbklEXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtcG9wdXAtc3R1ZGlvX19kZWxldGUtYWRtaW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhZG1pbklEID0gJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4U3R1ZGlvUmVtb3ZlQWRtaW4nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRtaW5JRDogYWRtaW5JRCxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UucmVkaXJlY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1wb3B1cC1zdHVkaW9fX2FkbWluLXNlbmQtbWVldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFkbWluSUQgPSAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9ICQoJy5qcy1wb3B1cC1zdHVkaW9fX2FkbWluLW1lZXQtZW1haWwtaW5wdXQnKTtcblxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlucHV0LnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhTdHVkaW9TZW5kTWVldEFkbWluJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFkbWluSUQ6IGFkbWluSUQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBpbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UucmVkaXJlY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1wb3B1cC1zdHVkaW9fX2FkbWluLW1lZXQtZW1haWwtaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1zdHVkaW9fX2FkZC1tYXN0ZXInKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBtYXN0ZXJOYW1lID0gJCgnLmpzLXBvcHVwLXN0dWRpb19fbWFzdGVyLW5hbWUtaW5wdXQnKTtcbiAgICAgICAgdmFyIG1hc3RlclBob25lID0gJCgnLmpzLXBvcHVwLXN0dWRpb19fbWFzdGVyLXBob25lLWlucHV0Jyk7XG4gICAgICAgIHZhciBtYXN0ZXJFbWFpbCA9ICQoJy5qcy1wb3B1cC1zdHVkaW9fX21hc3Rlci1lbWFpbC1pbnB1dCcpO1xuICAgICAgICB2YXIgbWFzdGVyR2VuZGVyTWFsZSA9ICQoJy5qcy1wb3B1cC1zdHVkaW9fX21hc3Rlci1nZW5kZXItbWFsZS1pbnB1dCcpO1xuICAgICAgICB2YXIgbWFzdGVyR2VuZGVyRmVtYWxlID0gJChcbiAgICAgICAgICAgICcuanMtcG9wdXAtc3R1ZGlvX19tYXN0ZXItZ2VuZGVyLWZlbWFsZS1pbnB1dCdcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG1hc3RlckdlbmRlciA9IDA7XG4gICAgICAgIHZhciBtYXN0ZXJBZG1pbiA9ICQoJy5qcy1wb3B1cC1zdHVkaW9fX21hc3Rlci1hZG1pbi1pbnB1dCcpO1xuICAgICAgICAkKCcuanMtcG9wdXAtc3R1ZGlvX19tYXN0ZXItYWRkLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChtYXN0ZXJHZW5kZXJNYWxlLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgbWFzdGVyR2VuZGVyID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXN0ZXJHZW5kZXJGZW1hbGUuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBtYXN0ZXJHZW5kZXIgPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWFzdGVyTmFtZS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBtYXN0ZXJOYW1lLnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXN0ZXJQaG9uZS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBtYXN0ZXJQaG9uZS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWFzdGVyRW1haWwudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbWFzdGVyRW1haWwucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9ycyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheFN0dWRpb0FkZE1hc3RlcicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwaG9uZTogbWFzdGVyUGhvbmUudmFsKCksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG1hc3Rlck5hbWUudmFsKCksXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBtYXN0ZXJFbWFpbC52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOiBtYXN0ZXJHZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgIGFkbWluczogSlNPTi5zdHJpbmdpZnkobWFzdGVyQWRtaW4udmFsKCkpLFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXJQaG9uZS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXJQaG9uZS5uZXh0KCkudGV4dChyZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hc3Rlck5hbWUub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYXN0ZXJQaG9uZS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hc3RlckVtYWlsLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3R1ZGlvLWZvcm0tc3VibWl0X19tYXN0ZXJzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuanMtc3R1ZGlvX19tYXN0ZXItYWRtaW4taW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgX3RoaXNcbiAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAgIC52YWwoX3RoaXMudmFsKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5qcy1zdHVkaW9fX3N1Y2Nlc3MnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5qcy1zdHVkaW8tZm9ybS1lZGl0X19tYXN0ZXJzJykuc3VibWl0KCk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtc3R1ZGlvX19tYXN0ZXItZGVsZXRlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG1hc3RlcklEID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgJCgnLmpzLXBvcHVwLXN0dWRpb19fYnV0dG9ucy1ibG9jay1tYXN0ZXInKS5hdHRyKFxuICAgICAgICAgICAgICAgICdkYXRhLWlkJyxcbiAgICAgICAgICAgICAgICBtYXN0ZXJJRFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5qcy1zdHVkaW9fX21hc3Rlci1tZWV0LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG1hc3RlcklEID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgJCgnLmpzLXBvcHVwLXN0dWRpb19fYnV0dG9ucy1ibG9jay1tYXN0ZXItbWVldCcpLmF0dHIoXG4gICAgICAgICAgICAgICAgJ2RhdGEtaWQnLFxuICAgICAgICAgICAgICAgIG1hc3RlcklEXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtcG9wdXAtc3R1ZGlvX19kZWxldGUtbWFzdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbWFzdGVySUQgPSAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhTdHVkaW9SZW1vdmVNYXN0ZXInLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFzdGVySUQ6IG1hc3RlcklELFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLXBvcHVwLXN0dWRpb19fbWFzdGVyLXNlbmQtbWVldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG1hc3RlcklEID0gJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSAkKCcuanMtcG9wdXAtc3R1ZGlvX19tYXN0ZXItbWVldC1lbWFpbC1pbnB1dCcpO1xuXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWpheFN0dWRpb1NlbmRNZWV0TWFzdGVyJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hc3RlcklEOiBtYXN0ZXJJRCxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGlucHV0LnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLXBvcHVwLXN0dWRpb19fbWFzdGVyLW1lZXQtZW1haWwtaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbnZhciBiYWxsb29uID0ge1xuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICBpY29uSW1hZ2VIcmVmOiAnL2NsaWVudC9maWxlcy9pY29ucy9zdmcvbWFwLXBpbi5zdmcnLFxuICAgIGljb25JbWFnZVNpemU6IFszMCwgNDJdLFxuICAgIGljb25JbWFnZU9mZnNldDogWy0zLCAtNDJdLFxufTtcblxuZnVuY3Rpb24gc3VibWl0TWFpblByb2ZpbGVGb3JtKG9iaikge1xuICAgIHZhciBvQWpheCA9ICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6ICcvYWpheENhYmluZXRWYWxpZGF0ZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBob25lOiBvYmpbJ3Bob25lJ10udmFsKCksXG4gICAgICAgICAgICBlbWFpbDogb2JqWydlbWFpbCddLnZhbCgpLFxuICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIG9BamF4LmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHdvcmtQbGFjZXMgPSAwO1xuICAgICAgICB2YXIgZXJyb3JzID0gMDtcblxuICAgICAgICBpZiAob2JqWyduYW1lJ10udmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICBvYmpbJ25hbWUnXS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9ialsnZ2VuZGVyRW50aXR5J10udmFsKCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbJ2dlbmRlckJsb2NrJ10uYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdvcmtQbGFjZUl0ZW0gPSAkKCcuanMtcHJvZmlsZV9fd29ya1BhbGFjZScpO1xuICAgICAgICBpZiAod29ya1BsYWNlSXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3b3JrUGxhY2VJdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya1BsYWNlcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAod29ya1BsYWNlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9ialsnd29ya1BsYWNlJ11cbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgYXJyRXJyb3JzID0gSlNPTi5wYXJzZShyZXNwb25zZS5lcnJvcnMpO1xuXG4gICAgICAgICAgICAvLyBpZiAoJCgnLmpzLXN0ZXBzJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoYXJyRXJyb3JzWydwaG9uZSddKSB7XG4gICAgICAgICAgICAgICAgb2JqWydwaG9uZSddLnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgb2JqWydwaG9uZSddLm5leHQoKS50ZXh0KGFyckVycm9yc1sncGhvbmUnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGlmIChhcnJFcnJvcnNbJ2VtYWlsJ10pIHtcbiAgICAgICAgICAgICAgICBvYmpbJ2VtYWlsJ10ucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBvYmpbJ2VtYWlsJ10ubmV4dCgpLnRleHQoYXJyRXJyb3JzWydlbWFpbCddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JzID09PSAwKSB7XG4gICAgICAgICAgICAkKCcuanMtcHJvZmlsZV9fc3VjY2VzcycpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXByb2ZpbGUtZm9ybS1lZGl0X19tYWluJykuc3VibWl0KCk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA3NjgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RFcnJvciA9ICQoJy5wcm9maWxlLWVkaXRvcl9faW5wdXQuaXMtaW52YWxpZCcpLm9mZnNldCgpXG4gICAgICAgICAgICAgICAgICAgIC50b3A7XG4gICAgICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBmaXJzdEVycm9yIC0gMzcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDQwMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdE1haW5Qcm9maWxlU3R1ZGlvRm9ybShvYmopIHtcbiAgICB2YXIgb0FqYXggPSAkLmFqYXgoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnL2FqYXhDYWJpbmV0U3R1ZGlvVmFsaWRhdGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwaG9uZTogb2JqWydwaG9uZSddLnZhbCgpLFxuICAgICAgICAgICAgZW1haWw6IG9ialsnZW1haWwnXS52YWwoKSxcbiAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBvQWpheC5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBlcnJvcnMgPSAwO1xuXG4gICAgICAgIGlmIChvYmpbJ25hbWUnXS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgIG9ialsnbmFtZSddLnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgYXJyRXJyb3JzID0gSlNPTi5wYXJzZShyZXNwb25zZS5lcnJvcnMpO1xuXG4gICAgICAgICAgICBpZiAoYXJyRXJyb3JzWydwaG9uZSddKSB7XG4gICAgICAgICAgICAgICAgb2JqWydwaG9uZSddLnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgb2JqWydwaG9uZSddLm5leHQoKS50ZXh0KGFyckVycm9yc1sncGhvbmUnXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhcnJFcnJvcnNbJ2VtYWlsJ10pIHtcbiAgICAgICAgICAgICAgICBvYmpbJ2VtYWlsJ10ucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBvYmpbJ2VtYWlsJ10ubmV4dCgpLnRleHQoYXJyRXJyb3JzWydlbWFpbCddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JzID09PSAwKSB7XG4gICAgICAgICAgICAkKCcuanMtcHJvZmlsZV9fc3VjY2VzcycpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXByb2ZpbGUtc3R1ZGlvLWZvcm0tZWRpdF9fbWFpbicpLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0RXJyb3IgPSAkKCcucHJvZmlsZS1lZGl0b3JfX2lucHV0LmlzLWludmFsaWQnKS5vZmZzZXQoKVxuICAgICAgICAgICAgICAgICAgICAudG9wO1xuICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogZmlyc3RFcnJvciAtIDM3LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA0MDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRTZWN1cml0eVByb2ZpbGVGb3JtKHBhc3N3b3JkTmV3LCBwYXNzd29yZENvbmZpcm0pIHtcbiAgICB2YXIgZXJyb3JzID0gMDtcblxuICAgIGlmIChwYXNzd29yZE5ldy52YWwoKSA9PT0gJycgfHwgcGFzc3dvcmROZXcudmFsKCkubGVuZ3RoIDwgNikge1xuICAgICAgICBwYXNzd29yZE5ldy5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICBwYXNzd29yZE5ld1xuICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgLnRleHQoJ9Cf0LDRgNC+0LvRjCDQutC+0YDQvtGH0LUgNiDRgdC40LzQstC+0LvQvtCyJyk7XG5cbiAgICAgICAgZXJyb3JzKys7XG4gICAgfVxuXG4gICAgaWYgKHBhc3N3b3JkQ29uZmlybS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtLnBhcmVudCgpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgLnRleHQoJ9Cf0L7QstGC0L7RgNC40YLQtSDQvdC+0LLRi9C5INC/0LDRgNC+0LvRjCcpO1xuXG4gICAgICAgIGVycm9ycysrO1xuICAgIH1cblxuICAgIGlmIChwYXNzd29yZE5ldy52YWwoKSAhPT0gcGFzc3dvcmRDb25maXJtLnZhbCgpKSB7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICBwYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgIC50ZXh0KCfQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YInKTtcblxuICAgICAgICBlcnJvcnMrKztcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzID4gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJCgnLmpzLXByb2ZpbGVfX3N1Y2Nlc3MnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmpzLXByb2ZpbGUtZm9ybS1lZGl0X19zZWN1cml0eScpLnN1Ym1pdCgpO1xuICAgIH0sIDIwMDApO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVJbWFnZShpbWFnZSkge1xuICAgIGltYWdlLmF0dHIoXG4gICAgICAgICdzcmMnLFxuICAgICAgICBpbWFnZS5hdHRyKCdzcmMnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTZXJ2aWNlKHNlcnZpY2VJRCwgc3RhdHVzKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogJy9hamF4TWFzdGVyU2VydmljZVVwZGF0ZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNlcnZpY2VJRDogc2VydmljZUlELFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICB9LFxuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHZhciBzYXZlZEJsb2NrID0gJCgnLmpzLXNlcnZpY2UtaXRlbV9fc2F2ZS0nICsgc2VydmljZUlEKTtcbiAgICAgICAgICAgIHNhdmVkQmxvY2suZmFkZUluKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNhdmVkQmxvY2suZmFkZU91dCgpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdENhYmluZXRNYXAoKSB7XG4gICAgdmFyIG15TWFwO1xuICAgIHZhciBteVBsYWNlTWFyaztcbiAgICB2YXIgY29vcmRYSW5wdXQgPSAkKCcjY29vcmRYJyk7XG4gICAgdmFyIGNvb3JkWUlucHV0ID0gJCgnI2Nvb3JkWScpO1xuICAgIHZhciBjb29yZFg7XG4gICAgdmFyIGNvb3JkWTtcblxuICAgIGlmIChjb29yZFhJbnB1dC52YWwoKSA9PT0gJycgJiYgY29vcmRZSW5wdXQudmFsKCkgPT09ICcnKSB7XG4gICAgICAgIGNvb3JkWCA9IDU1Ljc0MjkwOTtcbiAgICAgICAgY29vcmRZID0gMzcuNjI3NTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZFggPSBjb29yZFhJbnB1dC52YWwoKTtcbiAgICAgICAgY29vcmRZID0gY29vcmRZSW5wdXQudmFsKCk7XG4gICAgfVxuXG4gICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdjYXJkLW1hcCcsIHtcbiAgICAgICAgY2VudGVyOiBbY29vcmRYLCBjb29yZFldLFxuICAgICAgICB6b29tOiAxNyxcbiAgICB9KTtcblxuICAgIG15UGxhY2VNYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbY29vcmRYLCBjb29yZFldLCB7fSwgYmFsbG9vbik7XG5cbiAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGNvb3JkcyA9IGUuZ2V0KCdjb29yZHMnKTtcblxuICAgICAgICBjb29yZFhJbnB1dC52YWwoY29vcmRzWzBdKTtcbiAgICAgICAgY29vcmRZSW5wdXQudmFsKGNvb3Jkc1sxXSk7XG5cbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmUobXlQbGFjZU1hcmspO1xuICAgICAgICBteVBsYWNlTWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoW2Nvb3Jkc1swXSwgY29vcmRzWzFdXSwge30sIGJhbGxvb24pO1xuICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlTWFyayk7XG4gICAgfSk7XG5cbiAgICAvLyBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZShbJ3Njcm9sbFpvb20nXSk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlTWFyayk7XG5cbiAgICAkKCcuanMtcHJvZmlsZS1jb250YWN0X19jaXR5Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2l0eUlEID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcvYWpheEdldE1ldHJvT3JEaXN0cmljdCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY2l0eUlEOiBjaXR5SUQsXG4gICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gbXlNYXAuc2V0Q2VudGVyKFtyZXNwb25zZS5jb29yZFksIHJlc3BvbnNlLmNvb3JkWF0sIDEzKTtcblxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gcmVzcG9uc2UudHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgbWV0cm9CbG9jayA9ICQoJy5qcy1wcm9maWxlLWNvbnRhY3RfX21ldHJvLWJsb2NrJyk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RyaWN0QmxvY2sgPSAkKCcuanMtcHJvZmlsZS1jb250YWN0X19kaXN0cmljdC1ibG9jaycpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Q7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ21ldHJvJykge1xuICAgICAgICAgICAgICAgICAgICBtZXRyb0Jsb2NrLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJpY3RCbG9jay5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ID0gJCgnLmpzLXByb2ZpbGUtY29udGFjdF9fbWV0cm8nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Rpc3RyaWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdEJsb2NrLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0cm9CbG9jay5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ID0gJCgnLmpzLXByb2ZpbGUtY29udGFjdF9fZGlzdHJpY3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJpY3RCbG9jay5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIG1ldHJvQmxvY2suYWRkQ2xhc3MoJ2lzLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5odG1sKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyckRhdGEgPSBbeyBpZDogMCwgdGV4dDogJ9Cd0LUg0LLRi9Cx0YDQsNC9JyB9XTtcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJEYXRhLnB1c2goeyBpZDoga2V5LCB0ZXh0OiBuYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Lmh0bWwoJycpLnNlbGVjdDIoeyBkYXRhOiBhcnJEYXRhIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBzdHJlZXQgPSAkKCcuanMtcHJvZmlsZS1jb250YWN0X19ob21lJykudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIG51bWJlciA9ICQoJy5qcy1wcm9maWxlLWNvbnRhY3RfX251bWJlcicpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0cmVldCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2VvTWFwKHJlc3BvbnNlLmNpdHlOYW1lLCBzdHJlZXQsIG51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcuanMtcHJvZmlsZS1jb250YWN0X19ob21lJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaXR5ID0gJCgnLmpzLXByb2ZpbGUtY29udGFjdF9fY2l0eScpXG4gICAgICAgICAgICAuZmluZCgnb3B0aW9uOnNlbGVjdGVkJylcbiAgICAgICAgICAgIC50ZXh0KCk7XG4gICAgICAgIHZhciBudW1iZXIgPSAkKCcuanMtcHJvZmlsZS1jb250YWN0X19udW1iZXInKS52YWwoKTtcbiAgICAgICAgaWYgKG51bWJlciA9PT0gJycpIHtcbiAgICAgICAgICAgIG51bWJlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2VvTWFwKGNpdHksICQodGhpcykudmFsKCksIG51bWJlcik7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCAnLmpzLXByb2ZpbGUtY29udGFjdF9fbnVtYmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaXR5ID0gJCgnLmpzLXByb2ZpbGUtY29udGFjdF9fY2l0eScpXG4gICAgICAgICAgICAuZmluZCgnb3B0aW9uOnNlbGVjdGVkJylcbiAgICAgICAgICAgIC50ZXh0KCk7XG4gICAgICAgIHZhciBzdHJlZXQgPSAkKCcuanMtcHJvZmlsZS1jb250YWN0X19ob21lJykudmFsKCk7XG4gICAgICAgIGlmIChzdHJlZXQgPT09ICcnKSB7XG4gICAgICAgICAgICBzdHJlZXQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2VvTWFwKGNpdHksIHN0cmVldCwgJCh0aGlzKS52YWwoKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlb01hcChjaXR5LCBzdHJlZXQsIG51bWJlcikge1xuICAgIHZhciBteUdlb2NvZGVyID0gJyc7XG4gICAgaWYgKGNpdHkgIT09IG51bGwgJiYgc3RyZWV0ICE9PSBudWxsICYmIG51bWJlciAhPT0gbnVsbCkge1xuICAgICAgICBteUdlb2NvZGVyID0geW1hcHMuZ2VvY29kZShjaXR5ICsgJywgJyArIHN0cmVldCArICcsICcgKyBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAoY2l0eSAhPT0gbnVsbCAmJiBzdHJlZXQgIT09IG51bGwpIHtcbiAgICAgICAgbXlHZW9jb2RlciA9IHltYXBzLmdlb2NvZGUoY2l0eSArICcsICcgKyBzdHJlZXQpO1xuICAgIH0gZWxzZSBpZiAoY2l0eSAhPT0gbnVsbCkge1xuICAgICAgICBteUdlb2NvZGVyID0geW1hcHMuZ2VvY29kZShjaXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBteUdlb2NvZGVyID0geW1hcHMuZ2VvY29kZSgn0JzQvtGB0LrQstCwJyk7XG4gICAgfVxuXG4gICAgdmFyIG15TWFwO1xuICAgIHZhciBteVBsYWNlTWFyaztcbiAgICB2YXIgY29vcmRYO1xuICAgIHZhciBjb29yZFk7XG4gICAgbXlHZW9jb2Rlci50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICB2YXIgY29vcmRzID0gcmVzLmdlb09iamVjdHMuZ2V0KDApLmdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIG15R2VvY29kZXIudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICQoJyNjYXJkLW1hcCcpLmh0bWwoJycpO1xuICAgICAgICAgICAgY29vcmRYID0gY29vcmRzWzBdO1xuICAgICAgICAgICAgY29vcmRZID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdjYXJkLW1hcCcsIHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFtjb29yZFgsIGNvb3JkWV0sXG4gICAgICAgICAgICAgICAgem9vbTogMTcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI2Nvb3JkWCcpLmF0dHIoJ3ZhbHVlJywgY29vcmRYKTtcbiAgICAgICAgICAgICQoJyNjb29yZFknKS5hdHRyKCd2YWx1ZScsIGNvb3JkWSk7XG4gICAgICAgICAgICBteVBsYWNlTWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoW2Nvb3JkWCwgY29vcmRZXSwge30sIGJhbGxvb24pO1xuICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZU1hcmspO1xuXG4gICAgICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gZS5nZXQoJ2Nvb3JkcycpO1xuXG4gICAgICAgICAgICAgICAgJCgnI2Nvb3JkWCcpLmF0dHIoJ3ZhbHVlJywgY29vcmRzWzBdKTtcbiAgICAgICAgICAgICAgICAkKCcjY29vcmRZJykuYXR0cigndmFsdWUnLCBjb29yZHNbMV0pO1xuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMucmVtb3ZlKG15UGxhY2VNYXJrKTtcbiAgICAgICAgICAgICAgICBteVBsYWNlTWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjb29yZHNbMF0sIGNvb3Jkc1sxXV0sXG4gICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICBiYWxsb29uXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlTWFyayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7XG4gICAgc3VibWl0TWFpblByb2ZpbGVGb3JtLFxuICAgIHN1Ym1pdE1haW5Qcm9maWxlU3R1ZGlvRm9ybSxcbiAgICBzdWJtaXRTZWN1cml0eVByb2ZpbGVGb3JtLFxuICAgIHVwZGF0ZUltYWdlLFxuICAgIHVwZGF0ZVNlcnZpY2UsXG4gICAgaW5pdENhYmluZXRNYXAsXG4gICAgZ2VvTWFwLFxufTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuY2FyZF9fY29udGVudF9pbm5lcicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkU2VydmljZXMgPSBbXTtcbiAgICAgICAgdmFyIG9yZGVyRGF0YSA9IHt9O1xuICAgICAgICB2YXIgb3JkZXJNYWluQmxvY2sgPSAkKCcuanMtb3JkZXItbWFpbi1ibG9jaycpO1xuICAgICAgICB2YXIgb3JkZXJTdG9yYWdlID0ge307XG5cbiAgICAgICAgdmFyIGRhdGUgPSAkKCcjanMtb3JkZXItZGF0ZS1pbnB1dCcpO1xuICAgICAgICB2YXIgdGltZUZyb20gPSAkKCcjanMtb3JkZXItdGltZUZyb20tc2VsZWN0Jyk7XG4gICAgICAgIHZhciBwaG9uZSA9ICQoJyNqcy1vcmRlci1waG9uZS1pbnB1dCcpO1xuICAgICAgICB2YXIgYWRkcmVzc0Jsb2NrID0gJCgnLmpzLWNhcmQtc2VsZWN0X19hZGRyZXNzJyk7XG4gICAgICAgIHZhciBzdHVkaW9NYXN0ZXIgPSAkKCcuanMtY2FyZC1zZWxlY3RfX21hc3RlcnMnKTtcblxuICAgICAgICAvLyBBZGQgb3IgcmVtb3ZlIHNlcnZpY2VcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1jYXJkLXNlcnZpY2VzLWl0ZW0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhcmQtc2VydmljZXMtaXRlbV9fbWlkZGxlJykubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhcmQtc2VydmljZXMtaXRlbV9faW5mby1ibG9jaycpLmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJNYWluQmxvY2suaGFzQ2xhc3MoJ2lzLWRpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJNYWluQmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYm9va2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW9yZGVyTWFpbkJsb2NrLmhhc0NsYXNzKCdpcy1ib29rZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcmRlck1haW5CbG9jay5hZGRDbGFzcygnaXMtYm9va2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgYWRkID0gX3RoaXMuZmluZCgnLmNhcmQtc2VydmljZXMtaXRlbV9fYWN0aW9uX2FkZCcpO1xuICAgICAgICAgICAgICAgIHZhciBkb25lID0gX3RoaXMuZmluZCgnLmNhcmQtc2VydmljZXMtaXRlbV9fYWN0aW9uX2RvbmUnKTtcblxuICAgICAgICAgICAgICAgIHZhciBodG1sQmxvY2sgPSAkKCcuanMtY2F0ZWdvcmllcy1ibG9jaycpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2VJRCA9IF90aGlzLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfdGhpcy5kYXRhKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgdmFyIHByaWNlID0gX3RoaXMuZGF0YSgncHJpY2UnKTtcblxuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VydmljZXMgPSBjb3VudFNlcnZpY2VzSURzKFxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlSUQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VydmljZXNcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmhhc0NsYXNzKCdpcy1ib29rZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuanMtY2F0ZWdvcnktaXRlbS0nICsgc2VydmljZUlEKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDbGFzcygnaXMtYm9va2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBkb25lLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudFNlcnZpY2VzKCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTWFpbkJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1ib29rZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5qcy1lbXB0eS1zZXJ2aWNlcy1jb3VudCcpLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgaHRtbEJsb2NrLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlSHRtbENhdGVnb3J5KHNlcnZpY2VJRCwgbmFtZSwgcHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkQ2xhc3MoJ2lzLWJvb2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBmYnEoJ3RyYWNrJywgJ0luaXRpYXRlQ2hlY2tvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmJxKCd0cmFja0N1c3RvbScsICfQlNC+0LHQsNCy0LvQtdC90LjQtSDRg9GB0LvRg9Cz0LgnLCB7XCLQndCw0LfQstCw0L3QuNC1XCIgOiBuYW1lfSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICBkb25lLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudFNlcnZpY2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZW1vdmUgc2VydmljZSBmcm9tIHRvcFxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWNhdGVnb3J5LS1yZXNldCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKG9yZGVyTWFpbkJsb2NrLmhhc0NsYXNzKCdpcy1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlcnZpY2VJRCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlQmxvY2sgPSAkKCcuanMtY2FyZC1zZXJ2aWNlLWJsb2NrLScgKyBzZXJ2aWNlSUQpO1xuICAgICAgICAgICAgdmFyIGFkZCA9IHNlcnZpY2VCbG9jay5maW5kKCcuY2FyZC1zZXJ2aWNlcy1pdGVtX19hY3Rpb25fYWRkJyk7XG4gICAgICAgICAgICB2YXIgZG9uZSA9IHNlcnZpY2VCbG9jay5maW5kKCcuY2FyZC1zZXJ2aWNlcy1pdGVtX19hY3Rpb25fZG9uZScpO1xuXG4gICAgICAgICAgICBzZWxlY3RlZFNlcnZpY2VzID0gY291bnRTZXJ2aWNlc0lEcyhzZXJ2aWNlSUQsIHNlbGVjdGVkU2VydmljZXMpO1xuXG4gICAgICAgICAgICBzZXJ2aWNlQmxvY2sucmVtb3ZlQ2xhc3MoJ2lzLWJvb2tlZCcpO1xuICAgICAgICAgICAgYWRkLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBkb25lLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBjb3VudFNlcnZpY2VzKCk7XG5cbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENoYW5nZSBhZGRyZXNzXG4gICAgICAgIGFkZHJlc3NCbG9jay5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4R2V0TWFzdGVyc0J5QWRkcmVzcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSUQ6IF90aGlzLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdCA9ICQoJy5qcy1jYXJkLXNlbGVjdF9fbWFzdGVycycpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJEYXRhID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyRGF0YS5wdXNoKHsgaWQ6IGtleSwgdGV4dDogbmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5odG1sKCcnKS5zZWxlY3QyKHsgZGF0YTogYXJyRGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xpY2sgb24gZ3JlZW4gYnV0dG9uXG4gICAgICAgICQoJy5qcy1jYXJkLXJlcXVlc3QtLXNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghb3JkZXJNYWluQmxvY2suaGFzQ2xhc3MoJ2lzLWJvb2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJNYWluQmxvY2suYWRkQ2xhc3MoJ2lzLWJvb2tlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gMDtcblxuICAgICAgICAgICAgICAgIGRhdGUucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBwaG9uZS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2OCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hdHRlbnRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgLy9lcnJvcnMgKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkU2VydmljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtZW1wdHktc2VydmljZXMtY291bnQnKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcmRlck1haW5CbG9jay5hZGRDbGFzcygnaXMtZGlzYWJsZWQnKTtcblxuICAgICAgICAgICAgICAgIHZhciBjYXJkQmxvY2sgPSAkKCcjanMtY2FyZC11c2VyX19uYW1lJyk7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmRUeXBlID0gY2FyZEJsb2NrLmRhdGEoJ3R5cGUnKTtcblxuICAgICAgICAgICAgICAgIC8vIG9yZGVyRGF0YVsndHlwZSddID0gY2FyZFR5cGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FyZFR5cGUgPT09ICdzdHVkaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzSUQgPSBjYXJkQmxvY2suZGF0YSgnaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3JkZXJEYXRhWydzdHVkaW9NYXN0ZXJJRCddID0gc3R1ZGlvTWFzdGVyLnZhbCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzSUQgPSBjYXJkQmxvY2suZGF0YSgnaWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcmRlclN0b3JhZ2VbJ2FkZHJlc3NJRCddID0gYWRkcmVzc0lEO1xuICAgICAgICAgICAgICAgIG9yZGVyU3RvcmFnZVsndXJsJ10gPSBjYXJkQmxvY2suYXR0cignZGF0YS11cmwnKTtcbiAgICAgICAgICAgICAgICBvcmRlclN0b3JhZ2VbJ3ByaWNlJ10gPSAkKCcuanMtc2VydmljZS1wcmljZScpLnRleHQoKTtcbiAgICAgICAgICAgICAgICBvcmRlclN0b3JhZ2VbJ3NlcnZpY2VzJ10gPSBzZWxlY3RlZFNlcnZpY2VzO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hamF4Q29uZmlybU9yZGVyU2VydmljZXMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlclN0b3JhZ2U6IG9yZGVyU3RvcmFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbmZpcm0gc21zIGJ1dHRvblxuICAgICAgICAkKCcuanMtc21zLWNvbmZpcm0tYnV0dG9uX19vcmRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvbmZpcm1WYWx1ZSA9ICQoJyNqcy1zbXMtY29uZmlybS1pbnB1dF9fb3JkZXInKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBlcnJvckJsb2NrID0gJCgnI2pzLXNtcy1jb25maXJtLWVycm9yX19vcmRlcicpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybVZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JCbG9jay5zaG93KCkudGV4dCgn0JLQstC10LTQuNGC0LUg0LrQvtC0INC40LcgU01TINGB0L7QvtCx0YnQtdC90LjRjycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4Q29uZmlybVNtcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtVmFsdWU6IGNvbmZpcm1WYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVXNlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRPcmRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQmxvY2suc2hvdygpLnRleHQoJ9Cd0LUg0LLQtdGA0L3Ri9C5INC60L7QtCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcFxuICAgICAgICBpZiAoJCgnLmpzLWNhcmRfX21hcCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgeW1hcHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdENhcmRNYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGpzQ3JtQWRkU2VydmljZXNUb0NhdGVnb3J5Rm9yQ2FyZCA9XG4gICAgICAgICAgICAnLmpzQ3JtQWRkU2VydmljZXNUb0NhdGVnb3J5Rm9yQ2FyZCc7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGpzQ3JtQWRkU2VydmljZXNUb0NhdGVnb3J5Rm9yQ2FyZCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhDcm1BZGRTZXJ2aWNlc1RvQ2F0ZWdvcnlGb3JDYXJkJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSUQ6ICR0aGlzLmF0dHIoJ2RhdGEtdGVtcCcpLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSUQ6ICR0aGlzLmF0dHIoJ2RhdGEtYWRkcmVzcycpLFxuICAgICAgICAgICAgICAgICAgICBjYXRJRDogJHRoaXMuYXR0cignZGF0YS1jYXQnKSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmJiLWFjY29yZGVvbl9faXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmJiLWFjY29yZGVvbl9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZS5odG1sKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnanNDcm1BZGRTZXJ2aWNlc1RvQ2F0ZWdvcnlGb3JDYXJkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYmItYWNjb3JkZW9uX190aXRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jYXQgZGF0YS10ZW1wIGRhdGEtdHlwZSBkYXRhLWFkZHJlc3Mgc3R5bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSHRtbENhdGVnb3J5KHNlcnZpY2VJRCwgbmFtZSwgcHJpY2UpIHtcbiAgICBodG1sID1cbiAgICAgICAgJzxsaSBjbGFzcz1cImpzLWNhdGVnb3J5LWl0ZW0tJyArXG4gICAgICAgIHNlcnZpY2VJRCArXG4gICAgICAgICcgY2F0ZWdvcnlfX2l0ZW1cIj4gPGEgY2xhc3M9XCJjYXRlZ29yeV9fbGlua1wiIGhyZWY9XCIjXCI+JztcbiAgICBodG1sICs9IG5hbWU7XG4gICAgaHRtbCArPVxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJjYXRlZ29yeV9fcHJpY2VcIj4nICtcbiAgICAgICAgbnVtYmVyX2Zvcm1hdChwcmljZSwgMCwgJyAnLCAnICcpICtcbiAgICAgICAgJyA8aSBjbGFzcz1cImZhIGZhLXJ1YlwiPjwvaT48L3NwYW4+JztcbiAgICBodG1sICs9XG4gICAgICAgICc8L2E+PHNwYW4gY2xhc3M9XCJjYXRlZ29yeV9faWNvbiBqcy1jYXRlZ29yeS0tcmVzZXRcIiBkYXRhLWlkPVwiJyArXG4gICAgICAgIHNlcnZpY2VJRCArXG4gICAgICAgICdcIj48L3NwYW4+JztcbiAgICBodG1sICs9ICc8L2xpPic7XG5cbiAgICByZXR1cm4gaHRtbDtcbn1cblxuZnVuY3Rpb24gY291bnRTZXJ2aWNlcygpIHtcbiAgICB2YXIgaXRlbUNvdW50ID0gJCgnLmpzLXNlcnZpY2UtY291bnQnKTtcbiAgICB2YXIgaXRlbVByaWNlID0gJCgnLmpzLXNlcnZpY2UtcHJpY2UnKTtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBwcmljZSA9IDA7XG5cbiAgICAkKCcuY2FyZC1zZXJ2aWNlcy1pdGVtLmlzLWJvb2tlZCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHByaWNlID0gcHJpY2UgKyBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ3ByaWNlJykpO1xuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcbiAgICB9KTtcblxuICAgIGl0ZW1Db3VudC5hdHRyKCdkYXRhLWNvdW50JywgY291bnQpO1xuICAgIGl0ZW1QcmljZS5odG1sKFxuICAgICAgICBudW1iZXJfZm9ybWF0KHByaWNlLCAwLCAnICcsICcgJykgKyAnIDxpIGNsYXNzPVwiZmEgZmEtcnViXCI+PC9pPidcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvdW50O1xufVxuXG5mdW5jdGlvbiBjb3VudFNlcnZpY2VzSURzKHNlcnZpY2VJRCwgc2VsZWN0ZWRTZXJ2aWNlcykge1xuICAgIHZhciBpdGVtSW5kZXggPSBzZWxlY3RlZFNlcnZpY2VzLmluZGV4T2Yoc2VydmljZUlEKTtcblxuICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgICBzZWxlY3RlZFNlcnZpY2VzLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkU2VydmljZXMucHVzaChzZXJ2aWNlSUQpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFNlcnZpY2VzO1xufVxuXG5mdW5jdGlvbiBzZW5kT3JkZXIoKSB7XG4gICAgdmFyIGZ1bGxQcmljZSA9ICQoJy5qcy1zZXJ2aWNlLXByaWNlJykudGV4dCgpO1xuICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6ICcvc3VibWl0TmV3UmVxdWVzdCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9yZGVyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJUb01hc3RlcicpLFxuICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgfSxcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcuanMtb3JkZXItbWFpbi1mb3JtJykuYWRkQ2xhc3MoJ2lzLXN1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgZmJxKCd0cmFjaycsICdBZGRUb0NhcnQnLCB7XG4gICAgICAgICAgICAgICAgY29udGVudF9uYW1lOiAn0JfQsNGP0LLQutCwJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVsbFByaWNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnUlVCJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYXJkTWFwKCkge1xuICAgIHZhciBteU1hcDtcbiAgICB2YXIgbXlQbGFjZU1hcms7XG4gICAgdmFyIG1hcEJsb2NrID0gJCgnLmpzLWNhcmRfX21hcCcpO1xuICAgIHZhciBjb29yZFggPSBtYXBCbG9jay5kYXRhKCd4Jyk7XG4gICAgdmFyIGNvb3JkWSA9IG1hcEJsb2NrLmRhdGEoJ3knKTtcbiAgICB2YXIgYmFsbG9vbjtcbiAgICBsZXQgJG1hcEVsZW1lbnQgPSAkKCcjY2FyZC1tYXAnKTtcblxuICAgIG15TWFwID0gbmV3IHltYXBzLk1hcCgnY2FyZC1tYXAnLCB7XG4gICAgICAgIGNlbnRlcjogW2Nvb3JkWCwgY29vcmRZXSxcbiAgICAgICAgem9vbTogMTUsXG4gICAgfSk7XG5cbiAgICBiYWxsb29uID0ge1xuICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgICAgIGljb25JbWFnZUhyZWY6ICcvY2xpZW50L2ZpbGVzL2ljb25zL3N2Zy9tYXAtcGluLnN2ZycsXG4gICAgICAgIGljb25JbWFnZVNpemU6IFszMCwgNDJdLFxuICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMywgLTQyXSxcbiAgICB9O1xuXG4gICAgbXlQbGFjZU1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFtjb29yZFgsIGNvb3JkWV0sIHt9LCBiYWxsb29uKTtcblxuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZU1hcmspO1xufVxuXG5leHBvcnQge1xuICAgIGdlbmVyYXRlSHRtbENhdGVnb3J5LFxuICAgIGNvdW50U2VydmljZXMsXG4gICAgY291bnRTZXJ2aWNlc0lEcyxcbiAgICBzZW5kT3JkZXIsXG4gICAgaW5pdENhcmRNYXAsXG59O1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5qcy1jYXRhbG9nLWZpbHRlcicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvdW50SXRlbXMgPSAwO1xuICAgICAgICB2YXIgZ2xvYmFsUGFyYW1zID0gZ2VuZXJhdGVVcmxBcnJheSgpO1xuICAgICAgICB2YXIgc2VvRWxlbWVudCA9ICQoJyNqcy1zZW8tdGV4dC1ibG9jaycpO1xuICAgICAgICB2YXIgYWxlcnQgPSAwO1xuICAgICAgICB2YXIgYWxsQ291bnRNYXN0ZXJzID0gJCgnLmpzLWNhdGFsb2ctY291bnQtbWFzdGVycycpLmRhdGEoJ2NvdW50Jyk7XG4gICAgICAgIGFkZE1hc3RlcnNUb0NvbnRlbnQoY291bnRJdGVtcywgYWxlcnQsIHNlb0VsZW1lbnQsIGFsbENvdW50TWFzdGVycyk7XG5cbiAgICAgICAgJCgnLmpzQ2F0ZWdvcnlMaW5rRmlsdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlJdGVtID0gJCgnLmNhdGVnb3J5X19pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjYXRlZ29yeUl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudGV4dCgpICE9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5qc0NhdGVnb3J5TGlua0ZpbHRlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGlmIChjYXRlZ29yeUl0ZW0uaGFzQ2xhc3MoJ2lzLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdXJsOiAnL2FqYXhTZXJ2aWNlRmlsdGVyJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjYXRlZ29yeTogJCh0aGlzKS5hdHRyKCdjYXRlZ29yeScpLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNpdHk6ICQoJy5qcy1jYXRhbG9nX19jaXR5LWJyZWFkY3J1bWJzJykuYXR0cignZGF0YS1hbGlhcycpLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIF90b2tlbjogdG9rZW5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgJCgnLmNhdGFsb2ctZmlsdGVyX19jYXRlZ29yeScpLmZpbmQoJy5jYXRlZ29yeV9fZHJvcGRvd24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAkKCcuY2F0YWxvZy1maWx0ZXJfX2NhdGVnb3J5JykuYXBwZW5kKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqIFNlbGVjdCBtZXRybyBzdGF0aW9uc1xuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKi9cbiAgICAgICAgJCgnI2pzLWZpbHRlci1tZXRybycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBtZXRyb0lEID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlTmFtZSA9ICQodGhpcylcbiAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgLnRleHQoKTtcbiAgICAgICAgICAgIHZhciBzVXJsO1xuICAgICAgICAgICAgdmFyIGFyclBhcmFtcztcblxuICAgICAgICAgICAgJCgnLmpzLW1ldHJvLW9uJykuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlSHRtbEJsb2NrTWV0cm8oc2VydmljZU5hbWUsIG1ldHJvSUQpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBhcnJQYXJhbXMgPSB1cGRhdGVVcmxBcnJheShnbG9iYWxQYXJhbXMsICdtZXRybycsIG1ldHJvSUQsICdhZGQnKTtcbiAgICAgICAgICAgIGdsb2JhbFBhcmFtcyA9IGFyclBhcmFtcztcblxuICAgICAgICAgICAgc1VybCA9IGdlbmVyYXRlU3RpbmdGcm9tQXJyYXkoYXJyUGFyYW1zKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSgndXJsJywgJycsIHNVcmwpO1xuXG4gICAgICAgICAgICBzZW5kQWpheCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKiBTZWxlY3QgZGlzdHJpY3Qgc3RhdGlvbnNcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICovXG4gICAgICAgICQoJyNqcy1maWx0ZXItZGlzdHJpY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZGlzdHJpY3RJRCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAvLyB2YXIgc2VydmljZU5hbWUgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlTmFtZSA9ICQodGhpcylcbiAgICAgICAgICAgICAgICAuZmluZCgnb3B0aW9uW3ZhbHVlPScgKyBkaXN0cmljdElEICsgJ10nKVxuICAgICAgICAgICAgICAgIC50ZXh0KCk7XG4gICAgICAgICAgICB2YXIgc1VybDtcbiAgICAgICAgICAgIHZhciBhcnJQYXJhbXM7XG5cbiAgICAgICAgICAgICQoJy5qcy1kaXN0cmljdC1vbicpLmFwcGVuZChcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUh0bWxCbG9ja0Rpc3RyaWN0KHNlcnZpY2VOYW1lLCBkaXN0cmljdElEKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgYXJyUGFyYW1zID0gdXBkYXRlVXJsQXJyYXkoXG4gICAgICAgICAgICAgICAgZ2xvYmFsUGFyYW1zLFxuICAgICAgICAgICAgICAgICdkaXN0cmljdCcsXG4gICAgICAgICAgICAgICAgZGlzdHJpY3RJRCxcbiAgICAgICAgICAgICAgICAnYWRkJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdsb2JhbFBhcmFtcyA9IGFyclBhcmFtcztcblxuICAgICAgICAgICAgc1VybCA9IGdlbmVyYXRlU3RpbmdGcm9tQXJyYXkoYXJyUGFyYW1zKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSgndXJsJywgJycsIHNVcmwpO1xuXG4gICAgICAgICAgICBzZW5kQWpheCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKiBTZWxlY3Qgc2VydmljZXNcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICovXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmpzLWZpbHRlci1zZXJ2aWNlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VydmljZUlEID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgdmFyIHNVcmw7XG4gICAgICAgICAgICB2YXIgYXJyUGFyYW1zO1xuXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgYXJyUGFyYW1zID0gdXBkYXRlVXJsQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgJ3NlcnZpY2UnLFxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlSUQsXG4gICAgICAgICAgICAgICAgICAgICdhZGQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyUGFyYW1zID0gdXBkYXRlVXJsQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgJ3NlcnZpY2UnLFxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlSUQsXG4gICAgICAgICAgICAgICAgICAgICdkZWxldGUnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2xvYmFsUGFyYW1zID0gYXJyUGFyYW1zO1xuXG4gICAgICAgICAgICBzVXJsID0gZ2VuZXJhdGVTdGluZ0Zyb21BcnJheShhcnJQYXJhbXMpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCd1cmwnLCAnJywgc1VybCk7XG5cbiAgICAgICAgICAgIHNlbmRBamF4KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqIFJlbW92ZSBtZXRybyBzZWxlY3QgZWxlbWVudCBmcm9tIGZpbHRlclxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKi9cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1tZXRyby1kZWxldGVfX2ljb24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBtZXRyb0lEID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgdmFyIHNVcmw7XG4gICAgICAgICAgICB2YXIgYXJyUGFyYW1zO1xuXG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBhcnJQYXJhbXMgPSB1cGRhdGVVcmxBcnJheShcbiAgICAgICAgICAgICAgICBnbG9iYWxQYXJhbXMsXG4gICAgICAgICAgICAgICAgJ21ldHJvJyxcbiAgICAgICAgICAgICAgICBtZXRyb0lELFxuICAgICAgICAgICAgICAgICdkZWxldGUnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ2xvYmFsUGFyYW1zID0gYXJyUGFyYW1zO1xuXG4gICAgICAgICAgICBzVXJsID0gZ2VuZXJhdGVTdGluZ0Zyb21BcnJheShhcnJQYXJhbXMpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCd1cmwnLCAnJywgc1VybCk7XG5cbiAgICAgICAgICAgIHNlbmRBamF4KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqIFJlbW92ZSBkaXN0cmljdCBzZWxlY3QgZWxlbWVudCBmcm9tIGZpbHRlclxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKi9cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1kaXN0cmljdC1kZWxldGVfX2ljb24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkaXN0cmljdElEID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgdmFyIHNVcmw7XG4gICAgICAgICAgICB2YXIgYXJyUGFyYW1zO1xuXG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBhcnJQYXJhbXMgPSB1cGRhdGVVcmxBcnJheShcbiAgICAgICAgICAgICAgICBnbG9iYWxQYXJhbXMsXG4gICAgICAgICAgICAgICAgJ2Rpc3RyaWN0JyxcbiAgICAgICAgICAgICAgICBkaXN0cmljdElELFxuICAgICAgICAgICAgICAgICdkZWxldGUnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ2xvYmFsUGFyYW1zID0gYXJyUGFyYW1zO1xuXG4gICAgICAgICAgICBzVXJsID0gZ2VuZXJhdGVTdGluZ0Zyb21BcnJheShhcnJQYXJhbXMpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCd1cmwnLCAnJywgc1VybCk7XG5cbiAgICAgICAgICAgIHNlbmRBamF4KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkKCcuY2F0ZWdvcnlfX2xpc3QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjkpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGNhdGVnb3J5ID0gJyc7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNhdGVnb3J5ID0gZ2V0VXJsVmFycygpWydjYXRlZ29yeSddO1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2F0ZWdvcnkgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICQoJy5jYXRlZ29yeV9fbGlzdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoY2F0ZWdvcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVybDogJy9hamF4Q2F0RmlsdGVyJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLmpzLWNhdGVnb3J5JykuaHRtbChyZXNwb25zZS5odG1sKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBnZXRVcmxWYXJzKClbJ3NlcnZpY2UnXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhTZXJ2aWNlRmlsdGVyJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vICQoJy5jYXRhbG9nLWZpbHRlcl9fY2F0ZWdvcnknKS5jaGlsZHJlbignLmNhdGVnb3J5X19kcm9wZG93bicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vICQoJy5jYXRhbG9nLWZpbHRlcl9fY2F0ZWdvcnknKS5hcHBlbmQocmVzcG9uc2UuaHRtbCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cmw6ICcvYWpheENhdEZpbHRlcicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcuanMtY2F0ZWdvcnknKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKiBQcmljZSBmaWx0ZXIgcmFuZ2VcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICovXG4gICAgICAgIGlmICgkKCcuY2F0YWxvZy1maWx0ZXJfX2l0ZW1fcHJpY2UnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWNhdGFsb2ctZmlsdGVyLXNsaWRlcicpO1xuICAgICAgICAgICAgdmFyIGFsbFByaWNlU3RhcnQgPSAkKCcjanMtY2F0YWxvZy1maWx0ZXItc2xpZGVyJykuZGF0YSgnc3RhcnQnKTtcbiAgICAgICAgICAgIHZhciBhbGxQcmljZUVuZCA9ICQoJyNqcy1jYXRhbG9nLWZpbHRlci1zbGlkZXInKS5kYXRhKCdlbmQnKTtcbiAgICAgICAgICAgIHZhciBzcGFucyA9IFskKCcjanNQcmljZVN0YXJ0JyksICQoJyNqc1ByaWNlRW5kJyldO1xuICAgICAgICAgICAgdmFyIHN0YXJ0UHJpY2U7XG4gICAgICAgICAgICB2YXIgZW5kUHJpY2U7XG4gICAgICAgICAgICB2YXIgYXJyUGFyYW1zO1xuICAgICAgICAgICAgdmFyIHNVcmw7XG5cbiAgICAgICAgICAgIGlmIChzcGFuc1swXS50ZXh0KCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBzdGFydFByaWNlID0gYWxsUHJpY2VTdGFydDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRQcmljZSA9IHBhcnNlSW50KHNwYW5zWzBdLnRleHQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGFuc1sxXS50ZXh0KCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlbmRQcmljZSA9IGFsbFByaWNlRW5kO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmRQcmljZSA9IHBhcnNlSW50KHNwYW5zWzFdLnRleHQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBbc3RhcnRQcmljZSwgZW5kUHJpY2VdLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RlcDogMTAsXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiBhbGxQcmljZVN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBtYXg6IGFsbFByaWNlRW5kLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbih2YWx1ZXMsIGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHNwYW5zW2hhbmRsZV0udGV4dChwYXJzZUludCh2YWx1ZXNbaGFuZGxlXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzbGlkZXIubm9VaVNsaWRlci5vbignY2hhbmdlJywgZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgYXJyUGFyYW1zID0gdXBkYXRlVXJsQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgJ21pblByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQodmFsdWVzWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGFyclBhcmFtcyA9IHVwZGF0ZVVybEFycmF5KFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICdtYXhQcmljZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHZhbHVlc1sxXSksXG4gICAgICAgICAgICAgICAgICAgICdhZGQnLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxQYXJhbXMgPSBhcnJQYXJhbXM7XG5cbiAgICAgICAgICAgICAgICBzVXJsID0gZ2VuZXJhdGVTdGluZ0Zyb21BcnJheShhcnJQYXJhbXMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSgndXJsJywgJycsIHNVcmwpO1xuXG4gICAgICAgICAgICAgICAgc2VuZEFqYXgoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICogR2VuZGVyIHNlbGVjdFxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmpzLWZpbHRlci1nZW5kZXInKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZ2VuZGVySUQgPSAkKHRoaXMpLmRhdGEoJ2dlbmRlcicpO1xuICAgICAgICAgICAgdmFyIGFyclBhcmFtcztcbiAgICAgICAgICAgIHZhciBzVXJsO1xuXG4gICAgICAgICAgICBhcnJQYXJhbXMgPSB1cGRhdGVVcmxBcnJheShcbiAgICAgICAgICAgICAgICBnbG9iYWxQYXJhbXMsXG4gICAgICAgICAgICAgICAgJ2dlbmRlcicsXG4gICAgICAgICAgICAgICAgZ2VuZGVySUQsXG4gICAgICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdsb2JhbFBhcmFtcyA9IGFyclBhcmFtcztcblxuICAgICAgICAgICAgc1VybCA9IGdlbmVyYXRlU3RpbmdGcm9tQXJyYXkoYXJyUGFyYW1zKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSgndXJsJywgJycsIHNVcmwpO1xuXG4gICAgICAgICAgICBzZW5kQWpheCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKiBDYXRlZ29yeSBzZWxlY3RcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICovXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OSkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuanMtZmlsdGVyLWNhdGVnb3J5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGdlbmRlcklEID0gJCh0aGlzKS5kYXRhKCdjYXRlZ29yeScpO1xuICAgICAgICAgICAgICAgIHZhciBhcnJQYXJhbXM7XG4gICAgICAgICAgICAgICAgdmFyIHNVcmw7XG5cbiAgICAgICAgICAgICAgICBhcnJQYXJhbXMgPSB1cGRhdGVVcmxBcnJheShcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgICAgICBnZW5kZXJJRCxcbiAgICAgICAgICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcnJQYXJhbXNbJ3NlcnZpY2UnXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYXJyUGFyYW1zWydjYXRlZ29yeSddO1xuXG4gICAgICAgICAgICAgICAgc1VybCA9IGdlbmVyYXRlU3RpbmdGcm9tQXJyYXkoYXJyUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoJ3VybCcsICcnLCBzVXJsKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBnZW5kZXJJRCk7XG5cbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FqYXhTZXJ2aWNlRmlsdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGdlbmRlcklELFxuICAgICAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2F0YWxvZy1maWx0ZXJfX2NhdGVnb3J5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5jYXRlZ29yeV9fZHJvcGRvd24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jYXRhbG9nLWZpbHRlcl9fY2F0ZWdvcnknKS5hcHBlbmQocmVzcG9uc2UuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBzZW5kQWpheCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKiBXb3JrIHBsYWNlIHNlbGVjdFxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmpzLWZpbHRlci1wbGFjZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZUlEID0gJCh0aGlzKS5kYXRhKCdwbGFjZScpO1xuICAgICAgICAgICAgdmFyIGFyclBhcmFtcztcbiAgICAgICAgICAgIHZhciBzVXJsO1xuXG4gICAgICAgICAgICAvLyDQn9C+0LvRg9GH0LjRgiDQv9Cw0YDQsNC80LXRgtGAIFVSTCDQv9C+INC10LPQviDQuNC80LXQvdC4XG4gICAgICAgICAgICB2YXIgYnlOYW1lID0gJC5nZXRVcmxWYXIoJ3BsYWNlJyk7XG5cbiAgICAgICAgICAgIGlmIChwbGFjZUlEICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYXJyUGFyYW1zID0gdXBkYXRlVXJsQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgJ3BsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VJRCxcbiAgICAgICAgICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYnlOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyclBhcmFtcyA9IHVwZGF0ZVVybEFycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZWxldGUnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbG9iYWxQYXJhbXMgPSBhcnJQYXJhbXM7XG5cbiAgICAgICAgICAgIHNVcmwgPSBnZW5lcmF0ZVN0aW5nRnJvbUFycmF5KGFyclBhcmFtcyk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoJ3VybCcsICcnLCBzVXJsKTtcblxuICAgICAgICAgICAgc2VuZEFqYXgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0gTW9iaWxlIHZlcnNpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgLypcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICogQ2xvc2UgYnV0dG9uXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuanMtY2F0YWxvZy1maWx0ZXItLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuY2F0YWxvZy1maWx0ZXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICogQ2xvc2UgYnV0dG9uXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqL1xuICAgICAgICAvLyAkKCcuanMtYnRuLXB1bHNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgJCgnLmNhdGFsb2ctZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgLy8gICAgICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgYWpheEZpbHRlcigpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAkKCcuanMtYnRuLXB1bHNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oaHJlZiwgJ19zZWxmJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUh0bWxCbG9ja01ldHJvKG5hbWUsICRlbnRpdHlJRCkge1xuICAgIHZhciBodG1sID0gJzxsaSBjbGFzcz1cIm1ldHJvLWNoZWNrZWRfX2l0ZW1cIj4nO1xuXG4gICAgaHRtbCArPSBuYW1lO1xuICAgIGh0bWwgKz1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtdGltZXMganMtbWV0cm8tZGVsZXRlX19pY29uIG1ldHJvLWNoZWNrZWRfX2ljb25cIiBkYXRhLWlkPVwiJyArXG4gICAgICAgICRlbnRpdHlJRCArXG4gICAgICAgICdcIj48L2k+JztcbiAgICBodG1sICs9ICc8L2xpPic7XG5cbiAgICByZXR1cm4gaHRtbDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIdG1sQmxvY2tEaXN0cmljdChuYW1lLCAkZW50aXR5SUQpIHtcbiAgICB2YXIgaHRtbCA9ICc8bGkgY2xhc3M9XCJtZXRyby1jaGVja2VkX19pdGVtXCI+JztcblxuICAgIGh0bWwgKz0gbmFtZTtcbiAgICBodG1sICs9XG4gICAgICAgICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGpzLWRpc3RyaWN0LWRlbGV0ZV9faWNvbiBtZXRyby1jaGVja2VkX19pY29uXCIgZGF0YS1pZD1cIicgK1xuICAgICAgICAkZW50aXR5SUQgK1xuICAgICAgICAnXCI+PC9pPic7XG4gICAgaHRtbCArPSAnPC9saT4nO1xuXG4gICAgcmV0dXJuIGh0bWw7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVXJsQXJyYXkoKSB7XG4gICAgdmFyIGFyclBhcmFtcyA9IFtdO1xuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgnJicpO1xuXG4gICAgaWYgKHVybCAhPSAnJykge1xuICAgICAgICAkLmVhY2godXJsLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbU5hbWU7XG4gICAgICAgICAgICB2YXIgcGFyYW1WYWx1ZTtcblxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHZhbHVlLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBwYXJhbU5hbWUgPSBwYXJhbXNbMF07XG4gICAgICAgICAgICBwYXJhbVZhbHVlID0gcGFyYW1zWzFdO1xuXG4gICAgICAgICAgICBhcnJQYXJhbXNbcGFyYW1OYW1lXSA9IHBhcmFtVmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVybEFycmF5KGFyclBhcmFtcywgcGFyYW0sIHZhbHVlLCBwcm9jZXNzLCBzaW5nbGUpIHtcbiAgICB2YXIgc2luZ2xlID0gc2luZ2xlIHx8IGZhbHNlO1xuICAgIGlmIChhcnJQYXJhbXNbcGFyYW1dKSB7XG4gICAgICAgIHZhciB3b3JraW5nVXJsID0gYXJyUGFyYW1zW3BhcmFtXTtcbiAgICAgICAgd29ya2luZ1VybCA9IHdvcmtpbmdVcmwudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHdvcmtpbmdVcmwgIT0gJycgJiYgd29ya2luZ1VybC5pbmRleE9mKCcsJykgIT09IC0xKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gYXJyUGFyYW1zW3BhcmFtXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgICAgICAgICQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGluZGV4LCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhcnJQYXJhbXNbcGFyYW1dID0gYXJyUGFyYW1zW3BhcmFtXSArICcsJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgICQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGluZGV4LCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFyclBhcmFtc1twYXJhbV0gPSB2YWx1ZXMuam9pbignLCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdvcmtpbmdVcmwgIT0gJycgJiYgd29ya2luZ1VybC5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gYXJyUGFyYW1zW3BhcmFtXTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgPT09ICdhZGQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJQYXJhbXNbcGFyYW1dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcyAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyUGFyYW1zW3BhcmFtXSA9IGFyclBhcmFtc1twYXJhbV0gKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFyclBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyUGFyYW1zW3BhcmFtXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3RpbmdGcm9tQXJyYXkoYXJyUGFyYW1zKSB7XG4gICAgdmFyIHVybCA9ICc/JztcblxuICAgIE9iamVjdC5rZXlzKGFyclBhcmFtcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKHVybCA9PSAnPycpIHtcbiAgICAgICAgICAgIHVybCA9IHVybCArIGtleSArICc9JyArIGFyclBhcmFtc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gdXJsICsgJyYnICsga2V5ICsgJz0nICsgYXJyUGFyYW1zW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1cmw7XG59XG5cbiQuZXh0ZW5kKHtcbiAgICBnZXRVcmxWYXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhcnMgPSBbXSxcbiAgICAgICAgICAgIGhhc2g7XG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgICAgICAgLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSArIDEpXG4gICAgICAgICAgICAuc3BsaXQoJyYnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2ggPSBoYXNoZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcbiAgICAgICAgICAgIHZhcnNbaGFzaFswXV0gPSBoYXNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YXJzO1xuICAgIH0sXG4gICAgZ2V0VXJsVmFyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiAkLmdldFVybFZhcnMoKVtuYW1lXTtcbiAgICB9LFxufSk7XG5cbmZ1bmN0aW9uIGFqYXhGaWx0ZXIoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogJy9hamF4QWRkQ29udGVudCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNpdHlJRDogY2l0eUlELFxuICAgICAgICAgICAgY2l0eUFsaWFzOiAkKCcuanMtY2F0YWxvZ19fY2l0eS1icmVhZGNydW1icycpLmRhdGEoJ2FsaWFzJyksXG4gICAgICAgICAgICBnbG9iYWxQYXJhbXM6IEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLnNwbGl0KCcmJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYXRlZ29yeUlEOiAkKCcuanMtY2F0YWxvZy1maWx0ZXJfX2NhdGVnb3J5JykuZGF0YSgnY2F0ZWdvcnknKSxcbiAgICAgICAgICAgIF90b2tlbjogdG9rZW4sXG4gICAgICAgIH0sXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJCgnLmpzLWNhdGFsb2ctY2FyZC1ib3gnKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgQkIuQ29yZS5yZW1vdmVQcmVsb2FkZXIoKTtcbiAgICAgICAgICAgIEJCLkNvcmUuU2xpZGVyLmluaXQoKTtcbiAgICAgICAgICAgICQoJy5qcy1jb3VudC1tYXN0ZXJzJykudGV4dChyZXNwb25zZS5jb3VudE1hc3RlcnMpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvdW50TWFzdGVycyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLmpzLWNhdGFsb2ctZW1wdHknKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5qcy1jYXRhbG9nLWVtcHR5JykuYWRkQ2xhc3MoJ2lzLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcuanMtY2F0YWxvZy1jb3VudC1tYXN0ZXJzJylcbiAgICAgICAgICAgICAgICAuZmluZCgnc3Ryb25nJylcbiAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZS5jb3VudE1hc3RlcnMpO1xuICAgICAgICAgICAgJCgnLmNhdGFsb2ctZmlsdGVyX190aXRsZScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ3NwYW4nKVxuICAgICAgICAgICAgICAgIC5odG1sKHJlc3BvbnNlLmNvdW50TWFzdGVyc1RydWVFbmQpO1xuICAgICAgICAgICAgJCgnLmpzLWNhdGFsb2ctY291bnQtbWFzdGVycycpLmF0dHIoXG4gICAgICAgICAgICAgICAgJ2RhdGEtY291bnQnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmNvdW50TWFzdGVyc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vICQoJy5qcy1zcy1zbGlkZXInKS5zaW1wbGVzbGlkZXIoJ2luaXQnKTtcblxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLmZpbmQoJy5qcy1jYXRhbG9nLW1hcC5pcy1jaGVja2VkJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICQoJy5qcy1zaG93LS1tYXAnKS5jbGljaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA4MDApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFqYXhBZGRDb250ZW50KGNvdW50SXRlbXMsIGFsbENvdW50TWFzdGVycykge1xuICAgICQoJy5qcy1sb2FkZXJfX3Njcm9sbCcpLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAkKCcuY2F0YWxvZy1pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY291bnRJdGVtcysrO1xuICAgIH0pO1xuICAgIHZhciBjb3VudFVzZXJzID0gJCgnLmpzLWNhdGFsb2ctY291bnQtbWFzdGVycycpLmRhdGEoJ2NvdW50Jyk7XG5cbiAgICAvKiBTZWxlY3Qgc2VydmljZXMgZm9yINCn0J/QoyAqL1xuICAgIGlmIChmaWx0ZXJzU2VvVXJsICE9PSAnJykge1xuICAgICAgICB2YXIgc2VydmljZUlkID0gZmlsdGVyc1Nlb1VybC5zcGxpdCgnPScpO1xuICAgICAgICB2YXIgZ2xvYmFsUGFyYW1zID0gZ2VuZXJhdGVVcmxBcnJheSgpO1xuICAgICAgICB2YXIgYXJyUGFyYW1zID0gdXBkYXRlVXJsQXJyYXkoXG4gICAgICAgICAgICBnbG9iYWxQYXJhbXMsXG4gICAgICAgICAgICAnc2VydmljZScsXG4gICAgICAgICAgICBzZXJ2aWNlSWRbMV0sXG4gICAgICAgICAgICAnYWRkJ1xuICAgICAgICApO1xuICAgICAgICB2YXIgc1VybCA9IGdlbmVyYXRlU3RpbmdGcm9tQXJyYXkoYXJyUGFyYW1zKTtcbiAgICAgICAgc1VybCA9IEpTT04uc3RyaW5naWZ5KHNVcmwuc3Vic3RyaW5nKDEpLnNwbGl0KCcmJykpO1xuICAgICAgICBjb25zb2xlLmxvZygn0K3RgtC+INCn0J/QoycgKyBzVXJsKTtcbiAgICAgICAgZ2xvYmFsUGFyYW1zID0gc1VybDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnbG9iYWxQYXJhbXMgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLnNwbGl0KCcmJylcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ9Ct0YLQviDQvdC1INCn0J/QoycgKyBnbG9iYWxQYXJhbXMpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY291bnRJdGVtcyAhPT0gY291bnRVc2VycyAmJlxuICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuanMtY2F0YWxvZy1tYXAuaXMtY2hlY2tlZCcpLmxlbmd0aCA8IDEgJiZcbiAgICAgICAgJCgnI2pzLXNlby10ZXh0LWJsb2NrJykubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcvYWpheEFkZENvbnRlbnQnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNpdHlJRDogY2l0eUlELFxuICAgICAgICAgICAgICAgIGNpdHlBbGlhczogJCgnLmpzLWNhdGFsb2dfX2NpdHktYnJlYWRjcnVtYnMnKS5kYXRhKCdhbGlhcycpLFxuICAgICAgICAgICAgICAgIGdsb2JhbFBhcmFtczogZ2xvYmFsUGFyYW1zLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SUQ6ICQoJy5qcy1jYXRhbG9nLWZpbHRlcl9fY2F0ZWdvcnknKS5kYXRhKCdjYXRlZ29yeScpLFxuICAgICAgICAgICAgICAgIHNraXA6IGNvdW50SXRlbXMsXG4gICAgICAgICAgICAgICAgYWxsQ291bnRNYXN0ZXJzOiBhbGxDb3VudE1hc3RlcnMsXG4gICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRlciA9ICQoJy5qcy1sb2FkZXJfX3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIGxvYWRlci5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLmpzLWNhdGFsb2ctY2FyZC1ib3gnKS5hcHBlbmQocmVzcG9uc2UuaHRtbCk7XG4gICAgICAgICAgICAgICAgQkIuQ29yZS5yZW1vdmVQcmVsb2FkZXIoKTtcblxuICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBCQi5Db3JlLlNsaWRlci5pbml0Q2F0YWxvZ0l0ZW1TbGlkZXIoKTtcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICAgICAgICAgLy8gJChkb2N1bWVudCkuZmluZCgnLmpzLWNhdGFsb2ctaXRlbS1zbGlkZXInKS5maW5kKCcuYmItc2xpZGVyX19zbGlkZXMnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQoZG9jdW1lbnQpLmZpbmQoJy5qcy1jYXRhbG9nLWl0ZW0tc2xpZGVyJykuZmluZCgnLmJiLXNsaWRlcl9fc2xpZGVzJykpO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY291bnRNYXN0ZXJzID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmNvdW50TWFzdGVycyA8IHJlc3BvbnNlLmNvdW50Q2F0YWxvZ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5jb3VudE1hc3RlcnMpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuYWRkQ2xhc3MoJ3RoZS1lbmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5qcy1sb2FkZXJfX3Njcm9sbCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRNYXN0ZXJzVG9Db250ZW50KGNvdW50SXRlbXMsIGFsZXJ0LCBzZW9FbGVtZW50LCBhbGxDb3VudE1hc3RlcnMpIHtcbiAgICB2YXIgZWwgPSBzY3JvbGxBZGRDb250ZW50Q2F0YWxvZygpO1xuXG4gICAgJChlbCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWNoZWNrVmlzaWJpbGl0eShzZW9FbGVtZW50KSkge1xuICAgICAgICAgICAgYWxlcnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbGVydCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrVmlzaWJpbGl0eShzZW9FbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0ID0gMTtcbiAgICAgICAgICAgICAgICBpZiAoISQoJy5qcy1sb2FkZXJfX3Njcm9sbCcpLmhhc0NsYXNzKCd0aGUtZW5kJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWpheEFkZENvbnRlbnQoY291bnRJdGVtcywgYWxsQ291bnRNYXN0ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxBZGRDb250ZW50Q2F0YWxvZygpIHtcbiAgICBsZXQgZWw7XG4gICAgZWwgPSBkb2N1bWVudDtcblxuICAgIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gc2VuZEFqYXgoKSB7XG4gICAgJCgnLmpzLWxvYWRlcl9fc2Nyb2xsJykucmVtb3ZlQ2xhc3MoJ3RoZS1lbmQnKTtcbiAgICAvLyBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNDgwKSB7XG4gICAgYWpheEZpbHRlcigpO1xuICAgIC8vIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tWaXNpYmlsaXR5KGVsKSB7XG4gICAgdmFyIGRUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgIGRCb3QgPSBkVG9wICsgJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICBlbFRvcCA9ICQoZWwpLm9mZnNldCgpLnRvcCAtIDg1MCxcbiAgICAgICAgZWxCb3QgPSBlbFRvcCArICQoZWwpLmhlaWdodCgpO1xuICAgIHJldHVybiBlbFRvcCA8PSBkQm90ICYmIGVsVG9wID49IGRUb3A7XG59XG5cbmZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XG4gICAgdmFyIHZhcnMgPSBbXSxcbiAgICAgICAgaGFzaDtcbiAgICB2YXIgaGFzaGVzID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSArIDEpXG4gICAgICAgIC5zcGxpdCgnJicpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSBoYXNoZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgdmFycy5wdXNoKGhhc2hbMF0pO1xuICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhcnM7XG59XG5cbmltcG9ydCB7IHJlSW5pdFBsdWdpbnMgfSBmcm9tICcuLi9mdW5jdGlvbnMuanMnO1xuIiwiLyoqXG4gKiBNYWluXG4gKlxuICogQGF1dGhvciBBbnRvbiBVc3Rpbm9mZiA8YS5hLnVzdGlub2ZmQGdtYWlsLmNvbT5cbiAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvaW5kZXgnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vY29yZS91dGlscyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21vZHVsZXMvTWVudSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vbW9kdWxlcy9GaWx0ZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluL2luZGV4JztcblxuLy8gaW1wb3J0ICdAL3Nhc3MvbWFpbi5zY3NzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuYm9keTtcbiAgICBDb3JlLmluaXQoKTtcbiAgICBDb21wb25lbnRzLmluaXQoKTtcbiAgICBVdGlscy5pbml0KCk7XG4gICAgTWVudS5pbml0KCk7XG4gICAgRmlsdGVyLmluaXQobm9kZSk7XG4gICAgTWFpbi5pbml0KG5vZGUpO1xufSk7XG4iLCIvKipcbiAqIE1haW4gaW5kZXguanNcbiAqXG4gKiBAYXV0aG9yIEFudG9uIFVzdGlub2ZmIDxhLmEudXN0aW5vZmZAZ21haWwuY29tPlxuICovXG5cbkJCLmRlZmluZSgnTWFpbicpO1xuXG5pbXBvcnQgQ2F0YWxvZyBmcm9tICcuL3BhZ2VzL2NhdGFsb2cnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9wYWdlcy9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgKEJCLk1haW4gPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICAgIF9pbml0UGFnZUNhdGFsb2coZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIF9QYWdlQ2FyZChkb2N1bWVudC5ib2R5KTtcblxuICAgICAgICBpZiAoTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLSBJTklUIE1BSU4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbml0UGFnZUNhdGFsb2coZWxlbWVudCkge1xuICAgICAgICBuZXcgQ2F0YWxvZygpLmluaXQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX1BhZ2VDYXJkKGVsZW1lbnQpIHtcbiAgICAgICAgbmV3IENhcmQoKS5pbml0KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IF9pbml0LFxuICAgIH07XG59KSgpKTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciB1cGxvYWRGaWxlRW50aXR5ID0gJCgnLmpzLXVwbG9hZC1maWxlJyk7XG5cbiAgICBpZiAoJCgnLmpzLWJiLXVwbG9hZC0taXRlbScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnLmJ1dHRvbi1ib3gnKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLy8gU2VhcmNoaW5nIGZvciBmaWxlIHVwbG9hZCB3aWRnZXQgaXMgZXhpc3RcbiAgICBpZiAodXBsb2FkRmlsZUVudGl0eS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciByZW1vdmVkRmlsZXMgPSBbXTtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHVwbG9hZCBpbnB1dCBmaWVsZFxuICAgICAgICB1cGxvYWRGaWxlRW50aXR5Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGZpbGVzID0gdGhpcy5maWxlcztcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICB2YXIgcmFuZFZhbHVlID0gJCh0aGlzKS5kYXRhKCdyYW5kJyk7XG4gICAgICAgICAgICB2YXIgY3JvcFBhcmFtcyA9ICQodGhpcykuZGF0YSgnY3JvcCcpO1xuICAgICAgICAgICAgdmFyIG1vZGVsSUQgPSAkKHRoaXMpLmRhdGEoJ3VzZXInKTtcbiAgICAgICAgICAgIHZhciB0YWJsZSA9ICQodGhpcykuZGF0YSgndGFibGUnKTtcbiAgICAgICAgICAgIHZhciBhZGRNb2RlbElEID0gJCh0aGlzKS5kYXRhKCdhZGRtb2RlbCcpO1xuICAgICAgICAgICAgdmFyIGh0bWxCbG9jayA9ICQoJy5iYi11cGxvYWRfX2xpc3QnKTtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3JhbmRWYWx1ZScsIHJhbmRWYWx1ZSk7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnY3JvcFBhcmFtcycsIGNyb3BQYXJhbXMpO1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ21vZGVsSUQnLCBtb2RlbElEKTtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdhZGRNb2RlbElEJywgYWRkTW9kZWxJRCk7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgndGFibGUnLCB0YWJsZSk7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnX3Rva2VuJywgdG9rZW4pO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4SW5kZXhBZGRJbWFnZScsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJySW1hZ2VzQmxvY2tzID0gcmVzcG9uc2UuYXJySW1hZ2VzQmxvY2tzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEJsb2NrLmFwcGVuZChhcnJJbWFnZXNCbG9ja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWxrLWVtcHR5JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9VcGxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBEZWxldGUgZmlsZVxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWRlbGV0ZS1maWxlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IGJsb2NrXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLnByZXYoKVxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ25hbWUnKTtcbiAgICAgICAgICAgIHZhciByYW5kVmFsdWUgPSB1cGxvYWRGaWxlRW50aXR5LmRhdGEoJ3JhbmQnKTtcblxuICAgICAgICAgICAgcmVtb3ZlZEZpbGVzLnB1c2goZmlsZU5hbWUpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHVybDogJy9hamF4UmVtb3ZlSW1hZ2UnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICByYW5kVmFsdWU6IHJhbmRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5iYi11cGxvYWRfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWxrLWVtcHR5Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCf0L7QstC+0YDQvtGCINGE0L7RgtC+INCy0L/RgNCw0LLQvlxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanMtcm90YXRlLWZpbGUtcmlnaHQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgYmxvY2sgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZmlsZU5hbWUgPSBibG9ja1xuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgICAgLmRhdGEoJ25hbWUnKTtcbiAgICAgICAgdmFyIGZpbGVFeHRlbnNpb24gPSBibG9ja1xuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgICAgLmRhdGEoJ2V4dGVuc2lvbicpO1xuICAgICAgICB2YXIgY3JvcFBhcmFtcyA9ICQoJy5qcy11cGxvYWQtZmlsZScpLmRhdGEoJ2Nyb3AnKTtcbiAgICAgICAgdmFyIHJhbmRWYWx1ZSA9IHVwbG9hZEZpbGVFbnRpdHkuZGF0YSgncmFuZCcpO1xuICAgICAgICB2YXIgaW1nQmxvY2sgPSBibG9ja1xuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKTtcblxuICAgICAgICAvLyDQo9Cx0LjRgNCw0LXQvCDQuNC60L7QvdC60YMg0L/QvtCy0L7RgNC+0YLQsCwg0LfQsNCz0LvRg9GI0LrQsCwg0YfRgtC+0LHRiyDQvdC1INC/0L7Qu9C+0LzQsNGC0Ywg0YTQvtGC0L4g0L/RgNC4INC/0L7QstC+0YDQvtGC0LUsINC10YHQu9C4INCx0YvRgdGC0YDQviDQvdCw0LbQuNC80LDRgtGMXG4gICAgICAgIGJsb2NrLmhpZGUoKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcvYWpheFJvdGF0ZVJpZ2h0SW1hZ2UnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgICAgICAgICByYW5kVmFsdWU6IHJhbmRWYWx1ZSxcbiAgICAgICAgICAgICAgICBmaWxlRXh0ZW5zaW9uOiBmaWxlRXh0ZW5zaW9uLFxuICAgICAgICAgICAgICAgIGNyb3BQYXJhbXM6IGNyb3BQYXJhbXMsXG4gICAgICAgICAgICAgICAgX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyDQodC90L7QstCwINC/0L7QutCw0LfRi9Cy0LDQtdC8INC40LrQvtC90LrRgywg0L/QvtCy0L7RgNC+0YLQsFxuICAgICAgICAgICAgICAgIGJsb2NrLnNob3coKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVJbWFnZShpbWdCbG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vINCf0L7QstC+0YDQvtGCINGE0L7RgtC+INCy0LvQtdCy0L5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLXJvdGF0ZS1maWxlLWxlZnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgYmxvY2sgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZmlsZU5hbWUgPSBibG9ja1xuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgICAgLmRhdGEoJ25hbWUnKTtcbiAgICAgICAgdmFyIGZpbGVFeHRlbnNpb24gPSBibG9ja1xuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgICAgLmRhdGEoJ2V4dGVuc2lvbicpO1xuICAgICAgICB2YXIgY3JvcFBhcmFtcyA9ICQoJy5qcy11cGxvYWQtZmlsZScpLmRhdGEoJ2Nyb3AnKTtcbiAgICAgICAgdmFyIHJhbmRWYWx1ZSA9IHVwbG9hZEZpbGVFbnRpdHkuZGF0YSgncmFuZCcpO1xuICAgICAgICB2YXIgaW1nQmxvY2sgPSBibG9ja1xuICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKTtcblxuICAgICAgICAvLyDQo9Cx0LjRgNCw0LXQvCDQuNC60L7QvdC60YMg0L/QvtCy0L7RgNC+0YLQsCwg0LfQsNCz0LvRg9GI0LrQsCwg0YfRgtC+0LHRiyDQvdC1INC/0L7Qu9C+0LzQsNGC0Ywg0YTQvtGC0L4g0L/RgNC4INC/0L7QstC+0YDQvtGC0LUsINC10YHQu9C4INCx0YvRgdGC0YDQviDQvdCw0LbQuNC80LDRgtGMXG4gICAgICAgIGJsb2NrLmhpZGUoKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcvYWpheFJvdGF0ZUxlZnRJbWFnZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIHJhbmRWYWx1ZTogcmFuZFZhbHVlLFxuICAgICAgICAgICAgICAgIGZpbGVFeHRlbnNpb246IGZpbGVFeHRlbnNpb24sXG4gICAgICAgICAgICAgICAgY3JvcFBhcmFtczogY3JvcFBhcmFtcyxcbiAgICAgICAgICAgICAgICBfdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vINCh0L3QvtCy0LAg0L/QvtC60LDQt9GL0LLQsNC10Lwg0LjQutC+0L3QutGDLCDQv9C+0LLQvtGA0L7RgtCwXG4gICAgICAgICAgICAgICAgYmxvY2suc2hvdygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUltYWdlKGltZ0Jsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlSW1hZ2UoaW1hZ2UpIHtcbiAgICBpbWFnZS5hdHRyKFxuICAgICAgICAnc3JjJyxcbiAgICAgICAgaW1hZ2UuYXR0cignc3JjJykuc3BsaXQoJz8nKVswXSArICc/JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcGhvdG9VcGxvYWQoKSB7XG4gICAgaWYgKCQoJy5qcy1iYi11cGxvYWQtLWl0ZW0nKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICQoJy5idXR0b24tYm94JykuYWRkQ2xhc3MoJ2lzLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5idXR0b24tYm94JykucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xuICAgICAgICBpZiAoJCgnLmpzLWJ0bi1zdGVwcy11cGxvYWQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCcuanMtYnRuLXN0ZXBzLXVwbG9hZCcpLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogTWFpbiBDYXJkLmpzXG4gKlxuICogQGF1dGhvciBBbnRvbiBVc3Rpbm9mZiA8YS5hLnVzdGlub2ZmQGdtYWlsLmNvbT5cbiAqL1xuXG5pbXBvcnQgJ0AvanMvX2Zyb250ZW5kL19saWIvc2Nyb2xsc3B5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxzcHkoKTtcbiAgICAgICAgdGhpcy5jYXJkU3RpY2t5KCk7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2OCkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RCbG9ja01vdmVJdGVtcygpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RCbG9ja01vdmVJdGVtcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBCQi5Db3JlLmluaXRDaGVja1NlcnZpY2VJdGVtKCk7XG4gICAgfVxuXG4gICAgLy9DYXJkIHJlcXVlc3Qgc2hvdyAvIGhpZGVcbiAgICByZXF1ZXN0VG9nZ2xlKCkge1xuICAgICAgICBsZXQgY2FyZEluZm9SZXF1ZXN0ID0gJCgnLmNhcmQtaW5mb19fcmVxdWVzdCcpO1xuXG4gICAgICAgICQoJy5qcy1jYXJkLXJlcXVlc3QtLXNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjYXJkSW5mb1JlcXVlc3QuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRJbmZvUmVxdWVzdC5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICRodG1sLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5qcy1jYXJkLXJlcXVlc3QtLWhpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjYXJkSW5mb1JlcXVlc3QuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIGNhcmRJbmZvUmVxdWVzdC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vTW92ZSBibG9ja3Mgd2hlbiB3aW5kb3cgd2lkdGggPCA3NjhcbiAgICByZXF1ZXN0QmxvY2tNb3ZlSXRlbXMoKSB7XG4gICAgICAgICQoJy5qcy1jYXJkLXRpdGxlJykuaW5zZXJ0QWZ0ZXIoJy5jYXJkLWdhbGxhcnlfX3dyYXAnKTtcbiAgICAgICAgJCgnLmpzLWNhcmQtYWJvdXQnKS5pbnNlcnRCZWZvcmUoJy5jYXJkLWFkcmVzcycpO1xuICAgICAgICAkKCcuY2FyZC1pbmZvX19pbm5lcicpLmluc2VydEFmdGVyKCcuY2FyZC1hZHJlc3MnKTtcblxuICAgICAgICAkKCcuY2FyZC1pbmZvX19yZXF1ZXN0Jykud3JhcElubmVyKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYXJkLWluZm9fX3JlcXVlc3RfaW5uZXJcIj4nXG4gICAgICAgICk7XG4gICAgICAgICQoJy5jYXJkLWluZm9fX2hlYWRlci0tbW9iaWxlJykuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgJy5jYXJkLWluZm9fX3JlcXVlc3RfaW5uZXInXG4gICAgICAgICk7XG4gICAgICAgICQoJy5qcy1jYXJkLWluZm8tY2F0ZWdvcnknKS5wcmVwZW5kVG8oJy5jYXJkLWluZm9fX3JlcXVlc3RfaW5uZXInKTtcbiAgICAgICAgJCgnLmpzLW1vdmUtY2FyZC1wb2xpY3knKS5hcHBlbmRUbygnLmNhcmQtcmVxdWVzdC1mb3JtJyk7XG4gICAgfVxuXG4gICAgLy9DYXJkIFNjcm9sbHNweVxuICAgIHNjcm9sbHNweSgpIHtcbiAgICAgICAgY29uc3QgJHNjcm9sbGluZ9Chb250YWluZXIgPSAkKCcuanMtc2Nyb2xsc3B5Jyk7XG4gICAgICAgIGxldCBvZmZzZXQ7XG5cbiAgICAgICAgaWYgKCRzY3JvbGxpbmfQoW9udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLndpZHRoKCkgPiA0ODAgPyAob2Zmc2V0ID0gLTEwMCkgOiAob2Zmc2V0ID0gLTYwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJHNjcm9sbGluZ9Chb250YWluZXIuc2Nyb2xsc3B5KHsgb2Zmc2V0OiBvZmZzZXQgfSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhcmRTdGlja3koKSB7XG4gICAgICAgIGlmICgkKCcuanMtY2FyZC1maXhlZCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHN0aWNreUJsb2NrID0gJCgnLmpzLWNhcmQtc3RpY2t5Jyk7XG4gICAgICAgICAgICBsZXQgc3RpY2t5QmxvY2tPZmZzZXQgPSBzdGlja3lCbG9jay5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBsZXQgZml4ZWRCbG9jayA9ICQoJy5qcy1jYXJkLWZpeGVkJyk7XG4gICAgICAgICAgICBsZXQgZml4ZWRCbG9ja09mZnNldCA9IGZpeGVkQmxvY2sub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICAgICBsZXQgY2FyZENvbnRlbnQgPSAkKCcuanMtY2FyZC1jb250ZW50LWZpeGVkJyk7XG4gICAgICAgICAgICBsZXQgY2FyZE1lbnUgPSAkKGRvY3VtZW50KS5maW5kKCcuanMtY2FyZC1tZW51Jyk7XG5cbiAgICAgICAgICAgIGxldCBjYXJkTWVudUNsb25lID0gJCgnPGRpdiBjbGFzcz1cImNhcmQtbWVudV9fY2xvbmVcIj4nKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2hlaWdodCcsICQoJy5qcy1jYXJkLW1lbnUnKS5vdXRlckhlaWdodCh0cnVlKSlcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoY2FyZE1lbnUpXG4gICAgICAgICAgICAgICAgLmhpZGUoKTtcblxuICAgICAgICAgICAgbGV0IGNhcmRNZW51T2Zmc2V0ID0gY2FyZE1lbnUub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkTWVudUZpeGVkU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdGlja3lCbG9jay5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgZml4ZWRCbG9jay5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgc3RpY2t5QmxvY2suaGVpZ2h0KCkgPCBjYXJkQ29udGVudC5oZWlnaHQoKSAmJlxuICAgICAgICAgICAgICAgICQod2luZG93KS53aWR0aCgpID4gNzY4XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBmaXhDYXJkVXNlckluZm8oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZml4Q2FyZFVzZXJJbmZvKCkge1xuICAgICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwgPj0gc3RpY2t5QmxvY2tPZmZzZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCA8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRCbG9jay5vdXRlckhlaWdodCh0cnVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkQmxvY2tPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGlja3lCbG9jay5vdXRlckhlaWdodCgpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RpY2t5QmxvY2suY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzc1ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID49IHN0aWNreUJsb2NrT2Zmc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkQmxvY2sub3V0ZXJIZWlnaHQodHJ1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZEJsb2NrT2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RpY2t5QmxvY2sub3V0ZXJIZWlnaHQoKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RpY2t5QmxvY2suY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3NSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0aWNreUJsb2NrLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhcmRNZW51Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhcmRNZW51Rml4ZWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2FyZE1lbnVGaXhlZCgpIHtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCB0b3VjaG1vdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+PSBjYXJkTWVudU9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE1lbnVDbG9uZS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkTWVudS5jc3MoY2FyZE1lbnVGaXhlZFN0eWxlKS5hZGRDbGFzcygnaXMtc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkTWVudUNsb25lLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRNZW51LnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQ2xhc3MoJ2lzLXN0aWNreScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG4gICAgLy8gQWRkIG91ciBwbHVnaW4gdG8gZm5cbiAgICAkLmZuLmV4dGVuZCh7XG4gICAgICAgIC8vIFNjcm9sbHIgaXMgdGhlIG5hbWUgb2YgdGhlIHBsdWdpblxuICAgICAgICBzY3JvbGxzcHk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIERlZmluZSBvdXIgZGVmYXVsdHNcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6ICdzY3JvbGxzcHknLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB3aW5kb3csXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBBZGQgYW55IG92ZXJyaWRlbiBvcHRpb25zIHRvIGEgbmV3IG9iamVjdFxuICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIEFkZHMgdHdvIG51bWJlcnMgdG9nZXRoZXJcbiAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbihleDEsIGV4Mikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChleDEsIDEwKSArIHBhcnNlSW50KGV4MiwgMTApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRmluZCBvdXIgZWxlbWVudHNcbiAgICAgICAgICAgIHZhciBmaW5kRWxlbWVudHMgPSBmdW5jdGlvbihsaW5rcykge1xuICAgICAgICAgICAgICAgIC8vIERlY2xhcmUgb3VyIGFycmF5XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsaW5rc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IG91ciBjdXJyZW50IGxpbmtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IG91ciBoYXNoXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNoID0gJChsaW5rKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIG91ciBoYXNoIGFzIGFuIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGFuIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGhhc2hcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IG91ciBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3AgPSBNYXRoLmZsb29yKGVsZW1lbnQub2Zmc2V0KCkudG9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgKyBNYXRoLmZsb29yKGVsZW1lbnQub3V0ZXJIZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdG8gb3VyIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gb3VyIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRmluZCBvdXIgbGluayBmcm9tIGEgaGFzaFxuICAgICAgICAgICAgdmFyIGZpbmRMaW5rID0gZnVuY3Rpb24obGlua3MsIGhhc2gpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgZWFjaCBsaW5rXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgb3VyIGN1cnJlbnQgbGlua1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGluayA9ICQobGlua3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvdXIgaGFzaCBtYXRjaGVzIHRoZSBsaW5rIGhyZWZcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsuYXR0cignaHJlZicpID09PSBoYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5rO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gUmVzZXQgY2xhc3NlcyBvbiBvdXIgZWxlbWVudHNcbiAgICAgICAgICAgIHZhciByZXNldENsYXNzZXMgPSBmdW5jdGlvbihsaW5rcykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGxpbmtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBvdXIgY3VycmVudCBsaW5rXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rID0gJChsaW5rc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50KCkucmVtb3ZlQ2xhc3Mob3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRm9yIGVhY2ggc2Nyb2xsc3B5IGluc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIERlY2xhcmUgb3VyIGdsb2JhbCB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9ICQob3B0aW9ucy5jb250YWluZXIpO1xuICAgICAgICAgICAgICAgIC8vIEdldCBvdXIgb2JqZWN0c1xuICAgICAgICAgICAgICAgIHZhciBsaW5rcyA9ICQoZWxlbWVudCkuZmluZCgnYScpO1xuICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgbGlua3NcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBvdXIgY3VycmVudCBsaW5rXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rID0gbGlua3NbaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIEJpbmQgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICQobGluaykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IG91ciB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBpdCdzIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3AgPSBhZGQoJHRhcmdldC5vZmZzZXQoKS50b3AsIG9wdGlvbnMub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbmltYXRpb24gaXMgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFuaW1hdGUgb3VyIHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIG91ciBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBvdXIgbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gR2V0IG91ciBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGZpbmRFbGVtZW50cyhsaW5rcyk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gdGhlIHdpbmRvd1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignc2Nyb2xsLicgKyBvcHRpb25zLm5hbWVzcGFjZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcG9zaXRpb24gYW5kIHN0b3JlIGluIGFuIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGFkZCgkKHRoaXMpLnNjcm9sbFRvcCgpLCBNYXRoLmFicyhvcHRpb25zLm9mZnNldCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJCh0aGlzKS5zY3JvbGxMZWZ0KCksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHZhcmlhYmxlIGZvciBvdXIgbGlua1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGluaztcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG91ciBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgb3VyIGN1cnJlbnQgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSB3aXRoaW4gdGhlIGJvdW5kcmllcyBvZiBvdXIgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA+PSBjdXJyZW50LnRvcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA8IGN1cnJlbnQuYm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgb3VyIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IGN1cnJlbnQuaGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rID0gZmluZExpbmsobGlua3MsIGhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBvbkNoYW5nZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZSBvdXIgb25DaGFuZ2UgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5lbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGNsYXNzZXMgb24gYWxsIG90aGVyIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRDbGFzc2VzKGxpbmtzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIG91ciBhY3RpdmUgbGluayB0byBvdXIgcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50KCkuYWRkQ2xhc3Mob3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrIG91ciBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbGluayBhbmQgd2UgaGF2ZSBhIGV4aXQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rICYmIG9wdGlvbnMub25FeGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlIG91ciBvbkNoYW5nZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkV4aXQoJChlbGVtZW50KSwgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=