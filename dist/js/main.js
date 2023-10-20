/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/choices.min.js":
/*!***************************!*\
  !*** ./js/choices.min.js ***!
  \***************************/
/***/ (() => {

/*! For license information please see choices.min.js.LICENSE.txt */
!function () {
  "use strict";

  var e = {
      282: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
        var n = i(883);
        t.addChoice = function (e) {
          var t = e.value,
            i = e.label,
            r = e.id,
            s = e.groupId,
            o = e.disabled,
            a = e.elementId,
            c = e.customProperties,
            l = e.placeholder,
            h = e.keyCode;
          return {
            type: n.ACTION_TYPES.ADD_CHOICE,
            value: t,
            label: i,
            id: r,
            groupId: s,
            disabled: o,
            elementId: a,
            customProperties: c,
            placeholder: l,
            keyCode: h
          };
        }, t.filterChoices = function (e) {
          return {
            type: n.ACTION_TYPES.FILTER_CHOICES,
            results: e
          };
        }, t.activateChoices = function (e) {
          return void 0 === e && (e = !0), {
            type: n.ACTION_TYPES.ACTIVATE_CHOICES,
            active: e
          };
        }, t.clearChoices = function () {
          return {
            type: n.ACTION_TYPES.CLEAR_CHOICES
          };
        };
      },
      783: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.addGroup = void 0;
        var n = i(883);
        t.addGroup = function (e) {
          var t = e.value,
            i = e.id,
            r = e.active,
            s = e.disabled;
          return {
            type: n.ACTION_TYPES.ADD_GROUP,
            value: t,
            id: i,
            active: r,
            disabled: s
          };
        };
      },
      464: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.highlightItem = t.removeItem = t.addItem = void 0;
        var n = i(883);
        t.addItem = function (e) {
          var t = e.value,
            i = e.label,
            r = e.id,
            s = e.choiceId,
            o = e.groupId,
            a = e.customProperties,
            c = e.placeholder,
            l = e.keyCode;
          return {
            type: n.ACTION_TYPES.ADD_ITEM,
            value: t,
            label: i,
            id: r,
            choiceId: s,
            groupId: o,
            customProperties: a,
            placeholder: c,
            keyCode: l
          };
        }, t.removeItem = function (e, t) {
          return {
            type: n.ACTION_TYPES.REMOVE_ITEM,
            id: e,
            choiceId: t
          };
        }, t.highlightItem = function (e, t) {
          return {
            type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
            id: e,
            highlighted: t
          };
        };
      },
      137: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.setIsLoading = t.resetTo = t.clearAll = void 0;
        var n = i(883);
        t.clearAll = function () {
          return {
            type: n.ACTION_TYPES.CLEAR_ALL
          };
        }, t.resetTo = function (e) {
          return {
            type: n.ACTION_TYPES.RESET_TO,
            state: e
          };
        }, t.setIsLoading = function (e) {
          return {
            type: n.ACTION_TYPES.SET_IS_LOADING,
            isLoading: e
          };
        };
      },
      373: function (e, t, i) {
        var n = this && this.__spreadArray || function (e, t, i) {
            if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
            return e.concat(n || Array.prototype.slice.call(t));
          },
          r = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var s = r(i(996)),
          o = r(i(221)),
          a = i(282),
          c = i(783),
          l = i(464),
          h = i(137),
          u = i(520),
          d = i(883),
          p = i(789),
          f = i(799),
          m = i(655),
          v = r(i(744)),
          g = r(i(686)),
          _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
          y = {},
          E = function () {
            function e(t, i) {
              void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {});
              var r = this;
              void 0 === i.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), this.config = s.default.all([p.DEFAULT_CONFIG, e.defaults.options, i], {
                arrayMerge: function (e, t) {
                  return n([], t, !0);
                }
              });
              var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
              o.length && console.warn("Unknown config option(s) passed", o.join(", "));
              var a = "string" == typeof t ? document.querySelector(t) : t;
              if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
              if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), i.addItemFilter && "function" != typeof i.addItemFilter) {
                var c = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
                this.config.addItemFilter = c.test.bind(c);
              }
              if (this._isTextElement ? this.passedElement = new u.WrappedInput({
                element: a,
                classNames: this.config.classNames,
                delimiter: this.config.delimiter
              }) : this.passedElement = new u.WrappedSelect({
                element: a,
                classNames: this.config.classNames,
                template: function (e) {
                  return r._templates.option(e);
                }
              }), this.initialised = !1, this._store = new v.default(), this._initialState = m.defaultState, this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, f.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
                var l = window.getComputedStyle(this.passedElement.element).direction;
                l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l);
              }
              if (this._idNames = {
                itemChoice: "item-choice"
              }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) {
                var h = this.passedElement.value.split(this.config.delimiter);
                this._presetItems = this._presetItems.concat(h);
              }
              if (this.passedElement.options && this.passedElement.options.forEach(function (e) {
                r._presetChoices.push({
                  value: e.value,
                  label: e.innerHTML,
                  selected: !!e.selected,
                  disabled: e.disabled || e.parentNode.disabled,
                  placeholder: "" === e.value || e.hasAttribute("placeholder"),
                  customProperties: (0, f.parseCustomProperties)(e.dataset.customProperties)
                });
              }), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", {
                element: t
              }), void (this.initialised = !0);
              this.init();
            }
            return Object.defineProperty(e, "defaults", {
              get: function () {
                return Object.preventExtensions({
                  get options() {
                    return y;
                  },
                  get templates() {
                    return g.default;
                  }
                });
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.init = function () {
              if (!this.initialised) {
                this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
                var e = this.config.callbackOnInit;
                e && "function" == typeof e && e.call(this);
              }
            }, e.prototype.destroy = function () {
              this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = g.default, this.initialised = !1);
            }, e.prototype.enable = function () {
              return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
            }, e.prototype.disable = function () {
              return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
            }, e.prototype.highlightItem = function (e, t) {
              if (void 0 === t && (t = !0), !e || !e.id) return this;
              var i = e.id,
                n = e.groupId,
                r = void 0 === n ? -1 : n,
                s = e.value,
                o = void 0 === s ? "" : s,
                a = e.label,
                c = void 0 === a ? "" : a,
                h = r >= 0 ? this._store.getGroupById(r) : null;
              return this._store.dispatch((0, l.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                id: i,
                value: o,
                label: c,
                groupValue: h && h.value ? h.value : null
              }), this;
            }, e.prototype.unhighlightItem = function (e) {
              if (!e || !e.id) return this;
              var t = e.id,
                i = e.groupId,
                n = void 0 === i ? -1 : i,
                r = e.value,
                s = void 0 === r ? "" : r,
                o = e.label,
                a = void 0 === o ? "" : o,
                c = n >= 0 ? this._store.getGroupById(n) : null;
              return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                id: t,
                value: s,
                label: a,
                groupValue: c && c.value ? c.value : null
              }), this;
            }, e.prototype.highlightAll = function () {
              var e = this;
              return this._store.items.forEach(function (t) {
                return e.highlightItem(t);
              }), this;
            }, e.prototype.unhighlightAll = function () {
              var e = this;
              return this._store.items.forEach(function (t) {
                return e.unhighlightItem(t);
              }), this;
            }, e.prototype.removeActiveItemsByValue = function (e) {
              var t = this;
              return this._store.activeItems.filter(function (t) {
                return t.value === e;
              }).forEach(function (e) {
                return t._removeItem(e);
              }), this;
            }, e.prototype.removeActiveItems = function (e) {
              var t = this;
              return this._store.activeItems.filter(function (t) {
                return t.id !== e;
              }).forEach(function (e) {
                return t._removeItem(e);
              }), this;
            }, e.prototype.removeHighlightedItems = function (e) {
              var t = this;
              return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
                t._removeItem(i), e && t._triggerChange(i.value);
              }), this;
            }, e.prototype.showDropdown = function (e) {
              var t = this;
              return this.dropdown.isActive || requestAnimationFrame(function () {
                t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(d.EVENTS.showDropdown, {});
              }), this;
            }, e.prototype.hideDropdown = function (e) {
              var t = this;
              return this.dropdown.isActive ? (requestAnimationFrame(function () {
                t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {});
              }), this) : this;
            }, e.prototype.getValue = function (e) {
              void 0 === e && (e = !1);
              var t = this._store.activeItems.reduce(function (t, i) {
                var n = e ? i.value : i;
                return t.push(n), t;
              }, []);
              return this._isSelectOneElement ? t[0] : t;
            }, e.prototype.setValue = function (e) {
              var t = this;
              return this.initialised ? (e.forEach(function (e) {
                return t._setChoiceOrItem(e);
              }), this) : this;
            }, e.prototype.setChoiceByValue = function (e) {
              var t = this;
              return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach(function (e) {
                return t._findAndSelectChoiceByValue(e);
              }), this;
            }, e.prototype.setChoices = function (e, t, i, n) {
              var r = this;
              if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
              if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
              if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
              if (n && this.clearChoices(), "function" == typeof e) {
                var s = e(this);
                if ("function" == typeof Promise && s instanceof Promise) return new Promise(function (e) {
                  return requestAnimationFrame(e);
                }).then(function () {
                  return r._handleLoadingState(!0);
                }).then(function () {
                  return s;
                }).then(function (e) {
                  return r.setChoices(e, t, i, n);
                }).catch(function (e) {
                  r.config.silent || console.error(e);
                }).then(function () {
                  return r._handleLoadingState(!1);
                }).then(function () {
                  return r;
                });
                if (!Array.isArray(s)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof s));
                return this.setChoices(s, t, i, !1);
              }
              if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
              return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach(function (e) {
                if (e.choices) r._addGroup({
                  id: e.id ? parseInt("".concat(e.id), 10) : null,
                  group: e,
                  valueKey: t,
                  labelKey: i
                });else {
                  var n = e;
                  r._addChoice({
                    value: n[t],
                    label: n[i],
                    isSelected: !!n.selected,
                    isDisabled: !!n.disabled,
                    placeholder: !!n.placeholder,
                    customProperties: n.customProperties
                  });
                }
              }), this._stopLoading(), this;
            }, e.prototype.clearChoices = function () {
              return this._store.dispatch((0, a.clearChoices)()), this;
            }, e.prototype.clearStore = function () {
              return this._store.dispatch((0, h.clearAll)()), this;
            }, e.prototype.clearInput = function () {
              var e = !this._isSelectOneElement;
              return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))), this;
            }, e.prototype._render = function () {
              if (!this._store.isLoading()) {
                this._currentState = this._store.state;
                var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                  t = this._isSelectElement,
                  i = this._currentState.items !== this._prevState.items;
                e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
              }
            }, e.prototype._renderChoices = function () {
              var e = this,
                t = this._store,
                i = t.activeGroups,
                n = t.activeChoices,
                r = document.createDocumentFragment();
              if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
                return e.choiceList.scrollToTop();
              }), i.length >= 1 && !this._isSearching) {
                var s = n.filter(function (e) {
                  return !0 === e.placeholder && -1 === e.groupId;
                });
                s.length >= 1 && (r = this._createChoicesFragment(s, r)), r = this._createGroupsFragment(i, n, r);
              } else n.length >= 1 && (r = this._createChoicesFragment(n, r));
              if (r.childNodes && r.childNodes.length > 0) {
                var o = this._store.activeItems,
                  a = this._canAddItem(o, this.input.value);
                if (a.response) this.choiceList.append(r), this._highlightChoice();else {
                  var c = this._getTemplate("notice", a.notice);
                  this.choiceList.append(c);
                }
              } else {
                var l = void 0;
                c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
              }
            }, e.prototype._renderItems = function () {
              var e = this._store.activeItems || [];
              this.itemList.clear();
              var t = this._createItemsFragment(e);
              t.childNodes && this.itemList.append(t);
            }, e.prototype._createGroupsFragment = function (e, t, i) {
              var n = this;
              return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach(function (e) {
                var r = function (e) {
                  return t.filter(function (t) {
                    return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
                  });
                }(e);
                if (r.length >= 1) {
                  var s = n._getTemplate("choiceGroup", e);
                  i.appendChild(s), n._createChoicesFragment(r, i, !0);
                }
              }), i;
            }, e.prototype._createChoicesFragment = function (e, t, i) {
              var r = this;
              void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);
              var s = this.config,
                o = s.renderSelectedChoices,
                a = s.searchResultLimit,
                c = s.renderChoiceLimit,
                l = this._isSearching ? f.sortByScore : this.config.sorter,
                h = function (e) {
                  if ("auto" !== o || r._isSelectOneElement || !e.selected) {
                    var i = r._getTemplate("choice", e, r.config.itemSelectText);
                    t.appendChild(i);
                  }
                },
                u = e;
              "auto" !== o || this._isSelectOneElement || (u = e.filter(function (e) {
                return !e.selected;
              }));
              var d = u.reduce(function (e, t) {
                  return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
                }, {
                  placeholderChoices: [],
                  normalChoices: []
                }),
                p = d.placeholderChoices,
                m = d.normalChoices;
              (this.config.shouldSort || this._isSearching) && m.sort(l);
              var v = u.length,
                g = this._isSelectOneElement ? n(n([], p, !0), m, !0) : m;
              this._isSearching ? v = a : c && c > 0 && !i && (v = c);
              for (var _ = 0; _ < v; _ += 1) g[_] && h(g[_]);
              return t;
            }, e.prototype._createItemsFragment = function (e, t) {
              var i = this;
              void 0 === t && (t = document.createDocumentFragment());
              var n = this.config,
                r = n.shouldSortItems,
                s = n.sorter,
                o = n.removeItemButton;
              return r && !this._isSelectOneElement && e.sort(s), this._isTextElement ? this.passedElement.value = e.map(function (e) {
                return e.value;
              }).join(this.config.delimiter) : this.passedElement.options = e, e.forEach(function (e) {
                var n = i._getTemplate("item", e, o);
                t.appendChild(n);
              }), t;
            }, e.prototype._triggerChange = function (e) {
              null != e && this.passedElement.triggerEvent(d.EVENTS.change, {
                value: e
              });
            }, e.prototype._selectPlaceholderChoice = function (e) {
              this._addItem({
                value: e.value,
                label: e.label,
                choiceId: e.id,
                groupId: e.groupId,
                placeholder: e.placeholder
              }), this._triggerChange(e.value);
            }, e.prototype._handleButtonAction = function (e, t) {
              if (e && t && this.config.removeItems && this.config.removeItemButton) {
                var i = t.parentNode && t.parentNode.dataset.id,
                  n = i && e.find(function (e) {
                    return e.id === parseInt(i, 10);
                  });
                n && (this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice));
              }
            }, e.prototype._handleItemAction = function (e, t, i) {
              var n = this;
              if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
                var r = t.dataset.id;
                e.forEach(function (e) {
                  e.id !== parseInt("".concat(r), 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
                }), this.input.focus();
              }
            }, e.prototype._handleChoiceAction = function (e, t) {
              if (e && t) {
                var i = t.dataset.id,
                  n = i && this._store.getChoiceById(i);
                if (n) {
                  var r = e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                    s = this.dropdown.isActive;
                  n.keyCode = r, this.passedElement.triggerEvent(d.EVENTS.choice, {
                    choice: n
                  }), n.selected || n.disabled || this._canAddItem(e, n.value).response && (this._addItem({
                    value: n.value,
                    label: n.label,
                    choiceId: n.id,
                    groupId: n.groupId,
                    customProperties: n.customProperties,
                    placeholder: n.placeholder,
                    keyCode: n.keyCode
                  }), this._triggerChange(n.value)), this.clearInput(), s && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
                }
              }
            }, e.prototype._handleBackspace = function (e) {
              if (this.config.removeItems && e) {
                var t = e[e.length - 1],
                  i = e.some(function (e) {
                    return e.highlighted;
                  });
                this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
              }
            }, e.prototype._startLoading = function () {
              this._store.dispatch((0, h.setIsLoading)(!0));
            }, e.prototype._stopLoading = function () {
              this._store.dispatch((0, h.setIsLoading)(!1));
            }, e.prototype._handleLoadingState = function (e) {
              void 0 === e && (e = !0);
              var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
              e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "");
            }, e.prototype._handleSearch = function (e) {
              if (this.input.isFocussed) {
                var t = this._store.choices,
                  i = this.config,
                  n = i.searchFloor,
                  r = i.searchChoices,
                  s = t.some(function (e) {
                    return !e.active;
                  });
                if (null != e && e.length >= n) {
                  var o = r ? this._searchChoices(e) : 0;
                  this.passedElement.triggerEvent(d.EVENTS.search, {
                    value: e,
                    resultCount: o
                  });
                } else s && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0)));
              }
            }, e.prototype._canAddItem = function (e, t) {
              var i = !0,
                n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
              if (!this._isSelectOneElement) {
                var r = (0, f.existsInArray)(e, t);
                this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && r && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText);
              }
              return {
                response: i,
                notice: n
              };
            }, e.prototype._searchChoices = function (e) {
              var t = "string" == typeof e ? e.trim() : e,
                i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
              if (t.length < 1 && t === "".concat(i, " ")) return 0;
              var r = this._store.searchableChoices,
                s = t,
                c = Object.assign(this.config.fuseOptions, {
                  keys: n([], this.config.searchFields, !0),
                  includeMatches: !0
                }),
                l = new o.default(r, c).search(s);
              return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, a.filterChoices)(l)), l.length;
            }, e.prototype._addEventListeners = function () {
              var e = document.documentElement;
              e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, {
                passive: !0
              }), e.addEventListener("touchmove", this._onTouchMove, {
                passive: !0
              }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                passive: !0
              }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
                passive: !0
              })), this.input.element.addEventListener("keyup", this._onKeyUp, {
                passive: !0
              }), this.input.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.input.element.addEventListener("blur", this._onBlur, {
                passive: !0
              }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
                passive: !0
              }), this.input.addEventListeners();
            }, e.prototype._removeEventListeners = function () {
              var e = document.documentElement;
              e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
            }, e.prototype._onKeyDown = function (e) {
              var t = e.keyCode,
                i = this._store.activeItems,
                n = this.input.isFocussed,
                r = this.dropdown.isActive,
                s = this.itemList.hasChildren(),
                o = String.fromCharCode(t),
                a = /[^\x00-\x1F]/.test(o),
                c = d.KEY_CODES.BACK_KEY,
                l = d.KEY_CODES.DELETE_KEY,
                h = d.KEY_CODES.ENTER_KEY,
                u = d.KEY_CODES.A_KEY,
                p = d.KEY_CODES.ESC_KEY,
                f = d.KEY_CODES.UP_KEY,
                m = d.KEY_CODES.DOWN_KEY,
                v = d.KEY_CODES.PAGE_UP_KEY,
                g = d.KEY_CODES.PAGE_DOWN_KEY;
              switch (this._isTextElement || r || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += e.key.toLowerCase())), t) {
                case u:
                  return this._onSelectKey(e, s);
                case h:
                  return this._onEnterKey(e, i, r);
                case p:
                  return this._onEscapeKey(r);
                case f:
                case v:
                case m:
                case g:
                  return this._onDirectionKey(e, r);
                case l:
                case c:
                  return this._onDeleteKey(e, i, n);
              }
            }, e.prototype._onKeyUp = function (e) {
              var t = e.target,
                i = e.keyCode,
                n = this.input.value,
                r = this._store.activeItems,
                s = this._canAddItem(r, n),
                o = d.KEY_CODES.BACK_KEY,
                c = d.KEY_CODES.DELETE_KEY;
              if (this._isTextElement) {
                if (s.notice && n) {
                  var l = this._getTemplate("notice", s.notice);
                  this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
                } else this.hideDropdown(!0);
              } else {
                var h = (i === o || i === c) && t && !t.value,
                  u = !this._isTextElement && this._isSearching,
                  p = this._canSearch && s.response;
                h && u ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : p && this._handleSearch(this.input.rawValue);
              }
              this._canSearch = this.config.searchEnabled;
            }, e.prototype._onSelectKey = function (e, t) {
              var i = e.ctrlKey,
                n = e.metaKey;
              (i || n) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
            }, e.prototype._onEnterKey = function (e, t, i) {
              var n = e.target,
                r = d.KEY_CODES.ENTER_KEY,
                s = n && n.hasAttribute("data-button");
              if (this._isTextElement && n && n.value) {
                var o = this.input.value;
                this._canAddItem(t, o).response && (this.hideDropdown(!0), this._addItem({
                  value: o
                }), this._triggerChange(o), this.clearInput());
              }
              if (s && (this._handleButtonAction(t, n), e.preventDefault()), i) {
                var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                a && (t[0] && (t[0].keyCode = r), this._handleChoiceAction(t, a)), e.preventDefault();
              } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault());
            }, e.prototype._onEscapeKey = function (e) {
              e && (this.hideDropdown(!0), this.containerOuter.focus());
            }, e.prototype._onDirectionKey = function (e, t) {
              var i = e.keyCode,
                n = e.metaKey,
                r = d.KEY_CODES.DOWN_KEY,
                s = d.KEY_CODES.PAGE_UP_KEY,
                o = d.KEY_CODES.PAGE_DOWN_KEY;
              if (t || this._isSelectOneElement) {
                this.showDropdown(), this._canSearch = !1;
                var a = i === r || i === o ? 1 : -1,
                  c = "[data-choice-selectable]",
                  l = void 0;
                if (n || i === o || i === s) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c);else {
                  var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                  l = h ? (0, f.getAdjacentEl)(h, c, a) : this.dropdown.element.querySelector(c);
                }
                l && ((0, f.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), this._highlightChoice(l)), e.preventDefault();
              }
            }, e.prototype._onDeleteKey = function (e, t, i) {
              var n = e.target;
              this._isSelectOneElement || n.value || !i || (this._handleBackspace(t), e.preventDefault());
            }, e.prototype._onTouchMove = function () {
              this._wasTap && (this._wasTap = !1);
            }, e.prototype._onTouchEnd = function (e) {
              var t = (e || e.touches[0]).target;
              this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0;
            }, e.prototype._onMouseDown = function (e) {
              var t = e.target;
              if (t instanceof HTMLElement) {
                if (_ && this.choiceList.element.contains(t)) {
                  var i = this.choiceList.element.firstElementChild,
                    n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
                  this._isScrollingOnIe = n;
                }
                if (t !== this.input.element) {
                  var r = t.closest("[data-button],[data-item],[data-choice]");
                  if (r instanceof HTMLElement) {
                    var s = e.shiftKey,
                      o = this._store.activeItems,
                      a = r.dataset;
                    "button" in a ? this._handleButtonAction(o, r) : "item" in a ? this._handleItemAction(o, r, s) : "choice" in a && this._handleChoiceAction(o, r);
                  }
                  e.preventDefault();
                }
              }
            }, e.prototype._onMouseOver = function (e) {
              var t = e.target;
              t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
            }, e.prototype._onClick = function (e) {
              var t = e.target;
              this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
            }, e.prototype._onFocus = function (e) {
              var t,
                i = this,
                n = e.target;
              n && this.containerOuter.element.contains(n) && ((t = {})[d.TEXT_TYPE] = function () {
                n === i.input.element && i.containerOuter.addFocusState();
              }, t[d.SELECT_ONE_TYPE] = function () {
                i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
              }, t[d.SELECT_MULTIPLE_TYPE] = function () {
                n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
              }, t)[this.passedElement.element.type]();
            }, e.prototype._onBlur = function (e) {
              var t,
                i = this,
                n = e.target;
              if (n && this.containerOuter.element.contains(n) && !this._isScrollingOnIe) {
                var r = this._store.activeItems.some(function (e) {
                  return e.highlighted;
                });
                ((t = {})[d.TEXT_TYPE] = function () {
                  n === i.input.element && (i.containerOuter.removeFocusState(), r && i.unhighlightAll(), i.hideDropdown(!0));
                }, t[d.SELECT_ONE_TYPE] = function () {
                  i.containerOuter.removeFocusState(), (n === i.input.element || n === i.containerOuter.element && !i._canSearch) && i.hideDropdown(!0);
                }, t[d.SELECT_MULTIPLE_TYPE] = function () {
                  n === i.input.element && (i.containerOuter.removeFocusState(), i.hideDropdown(!0), r && i.unhighlightAll());
                }, t)[this.passedElement.element.type]();
              } else this._isScrollingOnIe = !1, this.input.element.focus();
            }, e.prototype._onFormReset = function () {
              this._store.dispatch((0, h.resetTo)(this._initialState));
            }, e.prototype._highlightChoice = function (e) {
              var t = this;
              void 0 === e && (e = null);
              var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
              if (i.length) {
                var n = e;
                Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function (e) {
                  e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
                }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(d.EVENTS.highlightChoice, {
                  el: n
                }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
              }
            }, e.prototype._addItem = function (e) {
              var t = e.value,
                i = e.label,
                n = void 0 === i ? null : i,
                r = e.choiceId,
                s = void 0 === r ? -1 : r,
                o = e.groupId,
                a = void 0 === o ? -1 : o,
                c = e.customProperties,
                h = void 0 === c ? {} : c,
                u = e.placeholder,
                p = void 0 !== u && u,
                f = e.keyCode,
                m = void 0 === f ? -1 : f,
                v = "string" == typeof t ? t.trim() : t,
                g = this._store.items,
                _ = n || v,
                y = s || -1,
                E = a >= 0 ? this._store.getGroupById(a) : null,
                b = g ? g.length + 1 : 1;
              this.config.prependValue && (v = this.config.prependValue + v.toString()), this.config.appendValue && (v += this.config.appendValue.toString()), this._store.dispatch((0, l.addItem)({
                value: v,
                label: _,
                id: b,
                choiceId: y,
                groupId: a,
                customProperties: h,
                placeholder: p,
                keyCode: m
              })), this._isSelectOneElement && this.removeActiveItems(b), this.passedElement.triggerEvent(d.EVENTS.addItem, {
                id: b,
                value: v,
                label: _,
                customProperties: h,
                groupValue: E && E.value ? E.value : null,
                keyCode: m
              });
            }, e.prototype._removeItem = function (e) {
              var t = e.id,
                i = e.value,
                n = e.label,
                r = e.customProperties,
                s = e.choiceId,
                o = e.groupId,
                a = o && o >= 0 ? this._store.getGroupById(o) : null;
              t && s && (this._store.dispatch((0, l.removeItem)(t, s)), this.passedElement.triggerEvent(d.EVENTS.removeItem, {
                id: t,
                value: i,
                label: n,
                customProperties: r,
                groupValue: a && a.value ? a.value : null
              }));
            }, e.prototype._addChoice = function (e) {
              var t = e.value,
                i = e.label,
                n = void 0 === i ? null : i,
                r = e.isSelected,
                s = void 0 !== r && r,
                o = e.isDisabled,
                c = void 0 !== o && o,
                l = e.groupId,
                h = void 0 === l ? -1 : l,
                u = e.customProperties,
                d = void 0 === u ? {} : u,
                p = e.placeholder,
                f = void 0 !== p && p,
                m = e.keyCode,
                v = void 0 === m ? -1 : m;
              if (null != t) {
                var g = this._store.choices,
                  _ = n || t,
                  y = g ? g.length + 1 : 1,
                  E = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);
                this._store.dispatch((0, a.addChoice)({
                  id: y,
                  groupId: h,
                  elementId: E,
                  value: t,
                  label: _,
                  disabled: c,
                  customProperties: d,
                  placeholder: f,
                  keyCode: v
                })), s && this._addItem({
                  value: t,
                  label: _,
                  choiceId: y,
                  customProperties: d,
                  placeholder: f,
                  keyCode: v
                });
              }
            }, e.prototype._addGroup = function (e) {
              var t = this,
                i = e.group,
                n = e.id,
                r = e.valueKey,
                s = void 0 === r ? "value" : r,
                o = e.labelKey,
                a = void 0 === o ? "label" : o,
                l = (0, f.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
                h = n || Math.floor(new Date().valueOf() * Math.random()),
                u = !!i.disabled && i.disabled;
              l ? (this._store.dispatch((0, c.addGroup)({
                value: i.label,
                id: h,
                active: !0,
                disabled: u
              })), l.forEach(function (e) {
                var i = e.disabled || e.parentNode && e.parentNode.disabled;
                t._addChoice({
                  value: e[s],
                  label: (0, f.isType)("Object", e) ? e[a] : e.innerHTML,
                  isSelected: e.selected,
                  isDisabled: i,
                  groupId: h,
                  customProperties: e.customProperties,
                  placeholder: e.placeholder
                });
              })) : this._store.dispatch((0, c.addGroup)({
                value: i.label,
                id: i.id,
                active: !1,
                disabled: i.disabled
              }));
            }, e.prototype._getTemplate = function (e) {
              for (var t, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
              return (t = this._templates[e]).call.apply(t, n([this, this.config], i, !1));
            }, e.prototype._createTemplates = function () {
              var e = this.config.callbackOnCreateTemplates,
                t = {};
              e && "function" == typeof e && (t = e.call(this, f.strToEl)), this._templates = (0, s.default)(g.default, t);
            }, e.prototype._createElements = function () {
              this.containerOuter = new u.Container({
                element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              }), this.containerInner = new u.Container({
                element: this._getTemplate("containerInner"),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              }), this.input = new u.Input({
                element: this._getTemplate("input", this._placeholderValue),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                preventPaste: !this.config.paste
              }), this.choiceList = new u.List({
                element: this._getTemplate("choiceList", this._isSelectOneElement)
              }), this.itemList = new u.List({
                element: this._getTemplate("itemList", this._isSelectOneElement)
              }), this.dropdown = new u.Dropdown({
                element: this._getTemplate("dropdown"),
                classNames: this.config.classNames,
                type: this.passedElement.element.type
              });
            }, e.prototype._createStructure = function () {
              this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems);
            }, e.prototype._addPredefinedGroups = function (e) {
              var t = this,
                i = this.passedElement.placeholderOption;
              i && i.parentNode && "SELECT" === i.parentNode.tagName && this._addChoice({
                value: i.value,
                label: i.innerHTML,
                isSelected: i.selected,
                isDisabled: i.disabled,
                placeholder: !0
              }), e.forEach(function (e) {
                return t._addGroup({
                  group: e,
                  id: e.id || null
                });
              });
            }, e.prototype._addPredefinedChoices = function (e) {
              var t = this;
              this.config.shouldSort && e.sort(this.config.sorter);
              var i = e.some(function (e) {
                  return e.selected;
                }),
                n = e.findIndex(function (e) {
                  return void 0 === e.disabled || !e.disabled;
                });
              e.forEach(function (e, r) {
                var s = e.value,
                  o = void 0 === s ? "" : s,
                  a = e.label,
                  c = e.customProperties,
                  l = e.placeholder;
                if (t._isSelectElement) {
                  if (e.choices) t._addGroup({
                    group: e,
                    id: e.id || null
                  });else {
                    var h = !(!t._isSelectOneElement || i || r !== n) || e.selected,
                      u = e.disabled;
                    t._addChoice({
                      value: o,
                      label: a,
                      isSelected: !!h,
                      isDisabled: !!u,
                      placeholder: !!l,
                      customProperties: c
                    });
                  }
                } else t._addChoice({
                  value: o,
                  label: a,
                  isSelected: !!e.selected,
                  isDisabled: !!e.disabled,
                  placeholder: !!e.placeholder,
                  customProperties: c
                });
              });
            }, e.prototype._addPredefinedItems = function (e) {
              var t = this;
              e.forEach(function (e) {
                "object" == typeof e && e.value && t._addItem({
                  value: e.value,
                  label: e.label,
                  choiceId: e.id,
                  customProperties: e.customProperties,
                  placeholder: e.placeholder
                }), "string" == typeof e && t._addItem({
                  value: e
                });
              });
            }, e.prototype._setChoiceOrItem = function (e) {
              var t = this;
              ({
                object: function () {
                  e.value && (t._isTextElement ? t._addItem({
                    value: e.value,
                    label: e.label,
                    choiceId: e.id,
                    customProperties: e.customProperties,
                    placeholder: e.placeholder
                  }) : t._addChoice({
                    value: e.value,
                    label: e.label,
                    isSelected: !0,
                    isDisabled: !1,
                    customProperties: e.customProperties,
                    placeholder: e.placeholder
                  }));
                },
                string: function () {
                  t._isTextElement ? t._addItem({
                    value: e
                  }) : t._addChoice({
                    value: e,
                    label: e,
                    isSelected: !0,
                    isDisabled: !1
                  });
                }
              })[(0, f.getType)(e).toLowerCase()]();
            }, e.prototype._findAndSelectChoiceByValue = function (e) {
              var t = this,
                i = this._store.choices.find(function (i) {
                  return t.config.valueComparer(i.value, e);
                });
              i && !i.selected && this._addItem({
                value: i.value,
                label: i.label,
                choiceId: i.id,
                groupId: i.groupId,
                customProperties: i.customProperties,
                placeholder: i.placeholder,
                keyCode: i.keyCode
              });
            }, e.prototype._generatePlaceholderValue = function () {
              if (this._isSelectElement && this.passedElement.placeholderOption) {
                var e = this.passedElement.placeholderOption;
                return e ? e.text : null;
              }
              var t = this.config,
                i = t.placeholder,
                n = t.placeholderValue,
                r = this.passedElement.element.dataset;
              if (i) {
                if (n) return n;
                if (r.placeholder) return r.placeholder;
              }
              return null;
            }, e;
          }();
        t.default = E;
      },
      613: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = i(883),
          s = function () {
            function e(e) {
              var t = e.element,
                i = e.type,
                n = e.classNames,
                r = e.position;
              this.element = t, this.classNames = n, this.type = i, this.position = r, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
            }
            return e.prototype.addEventListeners = function () {
              this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
            }, e.prototype.removeEventListeners = function () {
              this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
            }, e.prototype.shouldFlip = function (e) {
              if ("number" != typeof e) return !1;
              var t = !1;
              return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), t;
            }, e.prototype.setActiveDescendant = function (e) {
              this.element.setAttribute("aria-activedescendant", e);
            }, e.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute("aria-activedescendant");
            }, e.prototype.open = function (e) {
              this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
            }, e.prototype.close = function () {
              this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
            }, e.prototype.focus = function () {
              this.isFocussed || this.element.focus();
            }, e.prototype.addFocusState = function () {
              this.element.classList.add(this.classNames.focusState);
            }, e.prototype.removeFocusState = function () {
              this.element.classList.remove(this.classNames.focusState);
            }, e.prototype.enable = function () {
              this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
            }, e.prototype.wrap = function (e) {
              (0, n.wrap)(e, this.element);
            }, e.prototype.unwrap = function (e) {
              this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element));
            }, e.prototype.addLoadingState = function () {
              this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
            }, e.prototype.removeLoadingState = function () {
              this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
            }, e.prototype._onFocus = function () {
              this.isFocussed = !0;
            }, e.prototype._onBlur = function () {
              this.isFocussed = !1;
            }, e;
          }();
        t.default = s;
      },
      217: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = function () {
          function e(e) {
            var t = e.element,
              i = e.type,
              n = e.classNames;
            this.element = t, this.classNames = n, this.type = i, this.isActive = !1;
          }
          return Object.defineProperty(e.prototype, "distanceFromTopWindow", {
            get: function () {
              return this.element.getBoundingClientRect().bottom;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getChild = function (e) {
            return this.element.querySelector(e);
          }, e.prototype.show = function () {
            return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
          }, e.prototype.hide = function () {
            return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
          }, e;
        }();
        t.default = i;
      },
      520: function (e, t, i) {
        var n = this && this.__importDefault || function (e) {
          return e && e.__esModule ? e : {
            default: e
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0;
        var r = n(i(217));
        t.Dropdown = r.default;
        var s = n(i(613));
        t.Container = s.default;
        var o = n(i(11));
        t.Input = o.default;
        var a = n(i(624));
        t.List = a.default;
        var c = n(i(541));
        t.WrappedInput = c.default;
        var l = n(i(982));
        t.WrappedSelect = l.default;
      },
      11: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = i(883),
          s = function () {
            function e(e) {
              var t = e.element,
                i = e.type,
                n = e.classNames,
                r = e.preventPaste;
              this.element = t, this.type = i, this.classNames = n, this.preventPaste = r, this.isFocussed = this.element.isEqualNode(document.activeElement), this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
            }
            return Object.defineProperty(e.prototype, "placeholder", {
              set: function (e) {
                this.element.placeholder = e;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
              get: function () {
                return (0, n.sanitise)(this.element.value);
              },
              set: function (e) {
                this.element.value = e;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "rawValue", {
              get: function () {
                return this.element.value;
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.addEventListeners = function () {
              this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
                passive: !0
              }), this.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.element.addEventListener("blur", this._onBlur, {
                passive: !0
              });
            }, e.prototype.removeEventListeners = function () {
              this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
            }, e.prototype.enable = function () {
              this.element.removeAttribute("disabled"), this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.setAttribute("disabled", ""), this.isDisabled = !0;
            }, e.prototype.focus = function () {
              this.isFocussed || this.element.focus();
            }, e.prototype.blur = function () {
              this.isFocussed && this.element.blur();
            }, e.prototype.clear = function (e) {
              return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
            }, e.prototype.setWidth = function () {
              var e = this.element,
                t = e.style,
                i = e.value,
                n = e.placeholder;
              t.minWidth = "".concat(n.length + 1, "ch"), t.width = "".concat(i.length + 1, "ch");
            }, e.prototype.setActiveDescendant = function (e) {
              this.element.setAttribute("aria-activedescendant", e);
            }, e.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute("aria-activedescendant");
            }, e.prototype._onInput = function () {
              this.type !== r.SELECT_ONE_TYPE && this.setWidth();
            }, e.prototype._onPaste = function (e) {
              this.preventPaste && e.preventDefault();
            }, e.prototype._onFocus = function () {
              this.isFocussed = !0;
            }, e.prototype._onBlur = function () {
              this.isFocussed = !1;
            }, e;
          }();
        t.default = s;
      },
      624: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(883),
          r = function () {
            function e(e) {
              var t = e.element;
              this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight;
            }
            return e.prototype.clear = function () {
              this.element.innerHTML = "";
            }, e.prototype.append = function (e) {
              this.element.appendChild(e);
            }, e.prototype.getChild = function (e) {
              return this.element.querySelector(e);
            }, e.prototype.hasChildren = function () {
              return this.element.hasChildNodes();
            }, e.prototype.scrollToTop = function () {
              this.element.scrollTop = 0;
            }, e.prototype.scrollToChildElement = function (e, t) {
              var i = this;
              if (e) {
                var n = this.element.offsetHeight,
                  r = this.element.scrollTop + n,
                  s = e.offsetHeight,
                  o = e.offsetTop + s,
                  a = t > 0 ? this.element.scrollTop + o - r : e.offsetTop;
                requestAnimationFrame(function () {
                  i._animateScroll(a, t);
                });
              }
            }, e.prototype._scrollDown = function (e, t, i) {
              var n = (i - e) / t,
                r = n > 1 ? n : 1;
              this.element.scrollTop = e + r;
            }, e.prototype._scrollUp = function (e, t, i) {
              var n = (e - i) / t,
                r = n > 1 ? n : 1;
              this.element.scrollTop = e - r;
            }, e.prototype._animateScroll = function (e, t) {
              var i = this,
                r = n.SCROLLING_SPEED,
                s = this.element.scrollTop,
                o = !1;
              t > 0 ? (this._scrollDown(s, r, e), s < e && (o = !0)) : (this._scrollUp(s, r, e), s > e && (o = !0)), o && requestAnimationFrame(function () {
                i._animateScroll(e, t);
              });
            }, e;
          }();
        t.default = r;
      },
      730: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = function () {
            function e(e) {
              var t = e.element,
                i = e.classNames;
              if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
              this.isDisabled = !1;
            }
            return Object.defineProperty(e.prototype, "isActive", {
              get: function () {
                return "active" === this.element.dataset.choice;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "dir", {
              get: function () {
                return this.element.dir;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.element.value;
              },
              set: function (e) {
                this.element.value = e;
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.conceal = function () {
              this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
              var e = this.element.getAttribute("style");
              e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
            }, e.prototype.reveal = function () {
              this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
              var e = this.element.getAttribute("data-choice-orig-style");
              e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
            }, e.prototype.enable = function () {
              this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
            }, e.prototype.triggerEvent = function (e, t) {
              (0, n.dispatchEvent)(this.element, e, t);
            }, e;
          }();
        t.default = r;
      },
      541: function (e, t, i) {
        var n,
          r = this && this.__extends || (n = function (e, t) {
            return n = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }, n(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function i() {
              this.constructor = e;
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
          }),
          s = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function (e) {
          function t(t) {
            var i = t.element,
              n = t.classNames,
              r = t.delimiter,
              s = e.call(this, {
                element: i,
                classNames: n
              }) || this;
            return s.delimiter = r, s;
          }
          return r(t, e), Object.defineProperty(t.prototype, "value", {
            get: function () {
              return this.element.value;
            },
            set: function (e) {
              this.element.setAttribute("value", e), this.element.value = e;
            },
            enumerable: !1,
            configurable: !0
          }), t;
        }(s(i(730)).default);
        t.default = o;
      },
      982: function (e, t, i) {
        var n,
          r = this && this.__extends || (n = function (e, t) {
            return n = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }, n(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function i() {
              this.constructor = e;
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
          }),
          s = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function (e) {
          function t(t) {
            var i = t.element,
              n = t.classNames,
              r = t.template,
              s = e.call(this, {
                element: i,
                classNames: n
              }) || this;
            return s.template = r, s;
          }
          return r(t, e), Object.defineProperty(t.prototype, "placeholderOption", {
            get: function () {
              return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "optionGroups", {
            get: function () {
              return Array.from(this.element.getElementsByTagName("OPTGROUP"));
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "options", {
            get: function () {
              return Array.from(this.element.options);
            },
            set: function (e) {
              var t = this,
                i = document.createDocumentFragment();
              e.forEach(function (e) {
                return n = e, r = t.template(n), void i.appendChild(r);
                var n, r;
              }), this.appendDocFragment(i);
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.appendDocFragment = function (e) {
            this.element.innerHTML = "", this.element.appendChild(e);
          }, t;
        }(s(i(730)).default);
        t.default = o;
      },
      883: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, t.EVENTS = {
          showDropdown: "showDropdown",
          hideDropdown: "hideDropdown",
          change: "change",
          choice: "choice",
          search: "search",
          addItem: "addItem",
          removeItem: "removeItem",
          highlightItem: "highlightItem",
          highlightChoice: "highlightChoice",
          unhighlightItem: "unhighlightItem"
        }, t.ACTION_TYPES = {
          ADD_CHOICE: "ADD_CHOICE",
          FILTER_CHOICES: "FILTER_CHOICES",
          ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
          CLEAR_CHOICES: "CLEAR_CHOICES",
          ADD_GROUP: "ADD_GROUP",
          ADD_ITEM: "ADD_ITEM",
          REMOVE_ITEM: "REMOVE_ITEM",
          HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
          CLEAR_ALL: "CLEAR_ALL",
          RESET_TO: "RESET_TO",
          SET_IS_LOADING: "SET_IS_LOADING"
        }, t.KEY_CODES = {
          BACK_KEY: 46,
          DELETE_KEY: 8,
          ENTER_KEY: 13,
          A_KEY: 65,
          ESC_KEY: 27,
          UP_KEY: 38,
          DOWN_KEY: 40,
          PAGE_UP_KEY: 33,
          PAGE_DOWN_KEY: 34
        }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", t.SCROLLING_SPEED = 4;
      },
      789: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
        var n = i(799);
        t.DEFAULT_CLASSNAMES = {
          containerOuter: "choices",
          containerInner: "choices__inner",
          input: "choices__input",
          inputCloned: "choices__input--cloned",
          list: "choices__list",
          listItems: "choices__list--multiple",
          listSingle: "choices__list--single",
          listDropdown: "choices__list--dropdown",
          item: "choices__item",
          itemSelectable: "choices__item--selectable",
          itemDisabled: "choices__item--disabled",
          itemChoice: "choices__item--choice",
          placeholder: "choices__placeholder",
          group: "choices__group",
          groupHeading: "choices__heading",
          button: "choices__button",
          activeState: "is-active",
          focusState: "is-focused",
          openState: "is-open",
          disabledState: "is-disabled",
          highlightedState: "is-highlighted",
          selectedState: "is-selected",
          flippedState: "is-flipped",
          loadingState: "is-loading",
          noResults: "has-no-results",
          noChoices: "has-no-choices"
        }, t.DEFAULT_CONFIG = {
          items: [],
          choices: [],
          silent: !1,
          renderChoiceLimit: -1,
          maxItemCount: -1,
          addItems: !0,
          addItemFilter: null,
          removeItems: !0,
          removeItemButton: !1,
          editItems: !1,
          allowHTML: !0,
          duplicateItemsAllowed: !0,
          delimiter: ",",
          paste: !0,
          searchEnabled: !0,
          searchChoices: !0,
          searchFloor: 1,
          searchResultLimit: 4,
          searchFields: ["label", "value"],
          position: "auto",
          resetScrollPosition: !0,
          shouldSort: !0,
          shouldSortItems: !1,
          sorter: n.sortByAlpha,
          placeholder: !0,
          placeholderValue: null,
          searchPlaceholderValue: null,
          prependValue: null,
          appendValue: null,
          renderSelectedChoices: "auto",
          loadingText: "Loading...",
          noResultsText: "No results found",
          noChoicesText: "No choices to choose from",
          itemSelectText: "Press to select",
          uniqueItemText: "Only unique values can be added",
          customAddItemText: "Only values matching specific conditions can be added",
          addItemText: function (e) {
            return 'Press Enter to add <b>"'.concat((0, n.sanitise)(e), '"</b>');
          },
          maxItemText: function (e) {
            return "Only ".concat(e, " values can be added");
          },
          valueComparer: function (e, t) {
            return e === t;
          },
          fuseOptions: {
            includeScore: !0
          },
          labelId: "",
          callbackOnInit: null,
          callbackOnCreateTemplates: null,
          classNames: t.DEFAULT_CLASSNAMES
        };
      },
      18: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      978: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      948: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      359: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      285: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      533: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      187: function (e, t, i) {
        var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
            void 0 === n && (n = i);
            var r = Object.getOwnPropertyDescriptor(t, i);
            r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
              enumerable: !0,
              get: function () {
                return t[i];
              }
            }), Object.defineProperty(e, n, r);
          } : function (e, t, i, n) {
            void 0 === n && (n = i), e[n] = t[i];
          }),
          r = this && this.__exportStar || function (e, t) {
            for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), r(i(18), t), r(i(978), t), r(i(948), t), r(i(359), t), r(i(285), t), r(i(533), t), r(i(287), t), r(i(132), t), r(i(837), t), r(i(598), t), r(i(369), t), r(i(37), t), r(i(47), t), r(i(923), t), r(i(876), t);
      },
      287: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      132: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      837: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      598: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      37: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      369: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      47: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      923: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      876: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      799: function (e, t) {
        var i;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.parseCustomProperties = t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, t.getRandomNumber = function (e, t) {
          return Math.floor(Math.random() * (t - e) + e);
        }, t.generateChars = function (e) {
          return Array.from({
            length: e
          }, function () {
            return (0, t.getRandomNumber)(0, 36).toString(36);
          }).join("");
        }, t.generateId = function (e, i) {
          var n = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, t.generateChars)(4);
          return n = n.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(i, "-").concat(n);
        }, t.getType = function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }, t.isType = function (e, i) {
          return null != i && (0, t.getType)(i) === e;
        }, t.wrap = function (e, t) {
          return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), t.appendChild(e);
        }, t.getAdjacentEl = function (e, t, i) {
          void 0 === i && (i = 1);
          for (var n = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), r = e[n]; r;) {
            if (r.matches(t)) return r;
            r = r[n];
          }
          return r;
        }, t.isScrolledIntoView = function (e, t, i) {
          return void 0 === i && (i = 1), !!e && (i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop);
        }, t.sanitise = function (e) {
          return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        }, t.strToEl = (i = document.createElement("div"), function (e) {
          var t = e.trim();
          i.innerHTML = t;
          for (var n = i.children[0]; i.firstChild;) i.removeChild(i.firstChild);
          return n;
        }), t.sortByAlpha = function (e, t) {
          var i = e.value,
            n = e.label,
            r = void 0 === n ? i : n,
            s = t.value,
            o = t.label,
            a = void 0 === o ? s : o;
          return r.localeCompare(a, [], {
            sensitivity: "base",
            ignorePunctuation: !0,
            numeric: !0
          });
        }, t.sortByScore = function (e, t) {
          var i = e.score,
            n = void 0 === i ? 0 : i,
            r = t.score;
          return n - (void 0 === r ? 0 : r);
        }, t.dispatchEvent = function (e, t, i) {
          void 0 === i && (i = null);
          var n = new CustomEvent(t, {
            detail: i,
            bubbles: !0,
            cancelable: !0
          });
          return e.dispatchEvent(n);
        }, t.existsInArray = function (e, t, i) {
          return void 0 === i && (i = "value"), e.some(function (e) {
            return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
          });
        }, t.cloneObject = function (e) {
          return JSON.parse(JSON.stringify(e));
        }, t.diff = function (e, t) {
          var i = Object.keys(e).sort(),
            n = Object.keys(t).sort();
          return i.filter(function (e) {
            return n.indexOf(e) < 0;
          });
        }, t.parseCustomProperties = function (e) {
          if (void 0 !== e) try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
          return {};
        };
      },
      273: function (e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_CHOICE":
              var r = n,
                s = {
                  id: r.id,
                  elementId: r.elementId,
                  groupId: r.groupId,
                  value: r.value,
                  label: r.label || r.value,
                  disabled: r.disabled || !1,
                  selected: !1,
                  active: !0,
                  score: 9999,
                  customProperties: r.customProperties,
                  placeholder: r.placeholder || !1
                };
              return i(i([], e, !0), [s], !1);
            case "ADD_ITEM":
              var o = n;
              return o.choiceId > -1 ? e.map(function (e) {
                var t = e;
                return t.id === parseInt("".concat(o.choiceId), 10) && (t.selected = !0), t;
              }) : e;
            case "REMOVE_ITEM":
              var a = n;
              return a.choiceId && a.choiceId > -1 ? e.map(function (e) {
                var t = e;
                return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t;
              }) : e;
            case "FILTER_CHOICES":
              var c = n;
              return e.map(function (e) {
                var t = e;
                return t.active = c.results.some(function (e) {
                  var i = e.item,
                    n = e.score;
                  return i.id === t.id && (t.score = n, !0);
                }), t;
              });
            case "ACTIVATE_CHOICES":
              var l = n;
              return e.map(function (e) {
                var t = e;
                return t.active = l.active, t;
              });
            case "CLEAR_CHOICES":
              return t.defaultState;
            default:
              return e;
          }
        };
      },
      871: function (e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_GROUP":
              var r = n;
              return i(i([], e, !0), [{
                id: r.id,
                value: r.value,
                active: r.active,
                disabled: r.disabled
              }], !1);
            case "CLEAR_CHOICES":
              return [];
            default:
              return e;
          }
        };
      },
      655: function (e, t, i) {
        var n = this && this.__importDefault || function (e) {
          return e && e.__esModule ? e : {
            default: e
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0;
        var r = i(791),
          s = n(i(52)),
          o = n(i(871)),
          a = n(i(273)),
          c = n(i(502)),
          l = i(799);
        t.defaultState = {
          groups: [],
          items: [],
          choices: [],
          loading: !1
        };
        var h = (0, r.combineReducers)({
          items: s.default,
          groups: o.default,
          choices: a.default,
          loading: c.default
        });
        t.default = function (e, i) {
          var n = e;
          if ("CLEAR_ALL" === i.type) n = t.defaultState;else if ("RESET_TO" === i.type) return (0, l.cloneObject)(i.state);
          return h(n, i);
        };
      },
      52: function (e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_ITEM":
              var r = n;
              return i(i([], e, !0), [{
                id: r.id,
                choiceId: r.choiceId,
                groupId: r.groupId,
                value: r.value,
                label: r.label,
                active: !0,
                highlighted: !1,
                customProperties: r.customProperties,
                placeholder: r.placeholder || !1,
                keyCode: null
              }], !1).map(function (e) {
                var t = e;
                return t.highlighted = !1, t;
              });
            case "REMOVE_ITEM":
              return e.map(function (e) {
                var t = e;
                return t.id === n.id && (t.active = !1), t;
              });
            case "HIGHLIGHT_ITEM":
              var s = n;
              return e.map(function (e) {
                var t = e;
                return t.id === s.id && (t.highlighted = s.highlighted), t;
              });
            default:
              return e;
          }
        };
      },
      502: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = !1, t.default = function (e, i) {
          return void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), "SET_IS_LOADING" === i.type ? i.isLoading : e;
        };
      },
      744: function (e, t, i) {
        var n = this && this.__spreadArray || function (e, t, i) {
            if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
            return e.concat(n || Array.prototype.slice.call(t));
          },
          r = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var s = i(791),
          o = r(i(655)),
          a = function () {
            function e() {
              this._store = (0, s.createStore)(o.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            }
            return e.prototype.subscribe = function (e) {
              this._store.subscribe(e);
            }, e.prototype.dispatch = function (e) {
              this._store.dispatch(e);
            }, Object.defineProperty(e.prototype, "state", {
              get: function () {
                return this._store.getState();
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "items", {
              get: function () {
                return this.state.items;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeItems", {
              get: function () {
                return this.items.filter(function (e) {
                  return !0 === e.active;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "highlightedActiveItems", {
              get: function () {
                return this.items.filter(function (e) {
                  return e.active && e.highlighted;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "choices", {
              get: function () {
                return this.state.choices;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeChoices", {
              get: function () {
                return this.choices.filter(function (e) {
                  return !0 === e.active;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "selectableChoices", {
              get: function () {
                return this.choices.filter(function (e) {
                  return !0 !== e.disabled;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "searchableChoices", {
              get: function () {
                return this.selectableChoices.filter(function (e) {
                  return !0 !== e.placeholder;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "placeholderChoice", {
              get: function () {
                return n([], this.choices, !0).reverse().find(function (e) {
                  return !0 === e.placeholder;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "groups", {
              get: function () {
                return this.state.groups;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeGroups", {
              get: function () {
                var e = this.groups,
                  t = this.choices;
                return e.filter(function (e) {
                  var i = !0 === e.active && !1 === e.disabled,
                    n = t.some(function (e) {
                      return !0 === e.active && !1 === e.disabled;
                    });
                  return i && n;
                }, []);
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.isLoading = function () {
              return this.state.loading;
            }, e.prototype.getChoiceById = function (e) {
              return this.activeChoices.find(function (t) {
                return t.id === parseInt(e, 10);
              });
            }, e.prototype.getGroupById = function (e) {
              return this.groups.find(function (t) {
                return t.id === e;
              });
            }, e;
          }();
        t.default = a;
      },
      686: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = {
          containerOuter: function (e, t, i, n, r, s, o) {
            var a = e.classNames.containerOuter,
              c = Object.assign(document.createElement("div"), {
                className: a
              });
            return c.dataset.type = s, t && (c.dir = t), n && (c.tabIndex = 0), i && (c.setAttribute("role", r ? "combobox" : "listbox"), r && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), c.setAttribute("aria-expanded", "false"), o && c.setAttribute("aria-labelledby", o), c;
          },
          containerInner: function (e) {
            var t = e.classNames.containerInner;
            return Object.assign(document.createElement("div"), {
              className: t
            });
          },
          itemList: function (e, t) {
            var i = e.classNames,
              n = i.list,
              r = i.listSingle,
              s = i.listItems;
            return Object.assign(document.createElement("div"), {
              className: "".concat(n, " ").concat(t ? r : s)
            });
          },
          placeholder: function (e, t) {
            var i,
              n = e.allowHTML,
              r = e.classNames.placeholder;
            return Object.assign(document.createElement("div"), ((i = {
              className: r
            })[n ? "innerHTML" : "innerText"] = t, i));
          },
          item: function (e, t, i) {
            var n,
              r,
              s = e.allowHTML,
              o = e.classNames,
              a = o.item,
              c = o.button,
              l = o.highlightedState,
              h = o.itemSelectable,
              u = o.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.customProperties,
              v = t.active,
              g = t.disabled,
              _ = t.highlighted,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
                className: a
              })[s ? "innerHTML" : "innerText"] = f, n));
            if (Object.assign(E.dataset, {
              item: "",
              id: d,
              value: p,
              customProperties: m
            }), v && E.setAttribute("aria-selected", "true"), g && E.setAttribute("aria-disabled", "true"), y && E.classList.add(u), E.classList.add(_ ? l : h), i) {
              g && E.classList.remove(h), E.dataset.deletable = "";
              var b = "Remove item",
                S = Object.assign(document.createElement("button"), ((r = {
                  type: "button",
                  className: c
                })[s ? "innerHTML" : "innerText"] = b, r));
              S.setAttribute("aria-label", "".concat(b, ": '").concat(p, "'")), S.dataset.button = "", E.appendChild(S);
            }
            return E;
          },
          choiceList: function (e, t) {
            var i = e.classNames.list,
              n = Object.assign(document.createElement("div"), {
                className: i
              });
            return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n;
          },
          choiceGroup: function (e, t) {
            var i,
              n = e.allowHTML,
              r = e.classNames,
              s = r.group,
              o = r.groupHeading,
              a = r.itemDisabled,
              c = t.id,
              l = t.value,
              h = t.disabled,
              u = Object.assign(document.createElement("div"), {
                className: "".concat(s, " ").concat(h ? a : "")
              });
            return u.setAttribute("role", "group"), Object.assign(u.dataset, {
              group: "",
              id: c,
              value: l
            }), h && u.setAttribute("aria-disabled", "true"), u.appendChild(Object.assign(document.createElement("div"), ((i = {
              className: o
            })[n ? "innerHTML" : "innerText"] = l, i))), u;
          },
          choice: function (e, t, i) {
            var n,
              r = e.allowHTML,
              s = e.classNames,
              o = s.item,
              a = s.itemChoice,
              c = s.itemSelectable,
              l = s.selectedState,
              h = s.itemDisabled,
              u = s.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.groupId,
              v = t.elementId,
              g = t.disabled,
              _ = t.selected,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
                id: v
              })[r ? "innerHTML" : "innerText"] = f, n.className = "".concat(o, " ").concat(a), n));
            return _ && E.classList.add(l), y && E.classList.add(u), E.setAttribute("role", m && m > 0 ? "treeitem" : "option"), Object.assign(E.dataset, {
              choice: "",
              id: d,
              value: p,
              selectText: i
            }), g ? (E.classList.add(h), E.dataset.choiceDisabled = "", E.setAttribute("aria-disabled", "true")) : (E.classList.add(c), E.dataset.choiceSelectable = ""), E;
          },
          input: function (e, t) {
            var i = e.classNames,
              n = i.input,
              r = i.inputCloned,
              s = Object.assign(document.createElement("input"), {
                type: "search",
                name: "search_terms",
                className: "".concat(n, " ").concat(r),
                autocomplete: "off",
                autocapitalize: "off",
                spellcheck: !1
              });
            return s.setAttribute("role", "textbox"), s.setAttribute("aria-autocomplete", "list"), s.setAttribute("aria-label", t), s;
          },
          dropdown: function (e) {
            var t = e.classNames,
              i = t.list,
              n = t.listDropdown,
              r = document.createElement("div");
            return r.classList.add(i, n), r.setAttribute("aria-expanded", "false"), r;
          },
          notice: function (e, t, i) {
            var n,
              r = e.allowHTML,
              s = e.classNames,
              o = s.item,
              a = s.itemChoice,
              c = s.noResults,
              l = s.noChoices;
            void 0 === i && (i = "");
            var h = [o, a];
            return "no-choices" === i ? h.push(l) : "no-results" === i && h.push(c), Object.assign(document.createElement("div"), ((n = {})[r ? "innerHTML" : "innerText"] = t, n.className = h.join(" "), n));
          },
          option: function (e) {
            var t = e.label,
              i = e.value,
              n = e.customProperties,
              r = e.active,
              s = e.disabled,
              o = new Option(t, i, !1, r);
            return n && (o.dataset.customProperties = "".concat(n)), o.disabled = !!s, o;
          }
        };
        t.default = i;
      },
      996: function (e) {
        var t = function (e) {
            return function (e) {
              return !!e && "object" == typeof e;
            }(e) && !function (e) {
              var t = Object.prototype.toString.call(e);
              return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                return e.$$typeof === i;
              }(e);
            }(e);
          },
          i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
        function n(e, t) {
          return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
          var i;
        }
        function r(e, t, i) {
          return e.concat(t).map(function (e) {
            return n(e, i);
          });
        }
        function s(e) {
          return Object.keys(e).concat(function (e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
              return e.propertyIsEnumerable(t);
            }) : [];
          }(e));
        }
        function o(e, t) {
          try {
            return t in e;
          } catch (e) {
            return !1;
          }
        }
        function a(e, i, c) {
          (c = c || {}).arrayMerge = c.arrayMerge || r, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
          var l = Array.isArray(i);
          return l === Array.isArray(e) ? l ? c.arrayMerge(e, i, c) : function (e, t, i) {
            var r = {};
            return i.isMergeableObject(e) && s(e).forEach(function (t) {
              r[t] = n(e[t], i);
            }), s(t).forEach(function (s) {
              (function (e, t) {
                return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
              })(e, s) || (o(e, s) && i.isMergeableObject(t[s]) ? r[s] = function (e, t) {
                if (!t.customMerge) return a;
                var i = t.customMerge(e);
                return "function" == typeof i ? i : a;
              }(s, i)(e[s], t[s], i) : r[s] = n(t[s], i));
            }), r;
          }(e, i, c) : n(i, c);
        }
        a.all = function (e, t) {
          if (!Array.isArray(e)) throw new Error("first argument should be an array");
          return e.reduce(function (e, i) {
            return a(e, i, t);
          }, {});
        };
        var c = a;
        e.exports = c;
      },
      221: function (e, t, i) {
        function n(e) {
          return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e);
        }
        function r(e) {
          return "string" == typeof e;
        }
        function s(e) {
          return "number" == typeof e;
        }
        function o(e) {
          return "object" == typeof e;
        }
        function a(e) {
          return null != e;
        }
        function c(e) {
          return !e.trim().length;
        }
        function l(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
        }
        i.r(t), i.d(t, {
          default: function () {
            return R;
          }
        });
        const h = Object.prototype.hasOwnProperty;
        class u {
          constructor(e) {
            this._keys = [], this._keyMap = {};
            let t = 0;
            e.forEach(e => {
              let i = d(e);
              t += i.weight, this._keys.push(i), this._keyMap[i.id] = i, t += i.weight;
            }), this._keys.forEach(e => {
              e.weight /= t;
            });
          }
          get(e) {
            return this._keyMap[e];
          }
          keys() {
            return this._keys;
          }
          toJSON() {
            return JSON.stringify(this._keys);
          }
        }
        function d(e) {
          let t = null,
            i = null,
            s = null,
            o = 1,
            a = null;
          if (r(e) || n(e)) s = e, t = p(e), i = f(e);else {
            if (!h.call(e, "name")) throw new Error("Missing name property in key");
            const n = e.name;
            if (s = n, h.call(e, "weight") && (o = e.weight, o <= 0)) throw new Error((e => `Property 'weight' in key '${e}' must be a positive integer`)(n));
            t = p(n), i = f(n), a = e.getFn;
          }
          return {
            path: t,
            id: i,
            weight: o,
            src: s,
            getFn: a
          };
        }
        function p(e) {
          return n(e) ? e : e.split(".");
        }
        function f(e) {
          return n(e) ? e.join(".") : e;
        }
        var m = {
          isCaseSensitive: !1,
          includeScore: !1,
          keys: [],
          shouldSort: !0,
          sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1,
          includeMatches: !1,
          findAllMatches: !1,
          minMatchCharLength: 1,
          location: 0,
          threshold: .6,
          distance: 100,
          useExtendedSearch: !1,
          getFn: function (e, t) {
            let i = [],
              c = !1;
            const h = (e, t, u) => {
              if (a(e)) if (t[u]) {
                const d = e[t[u]];
                if (!a(d)) return;
                if (u === t.length - 1 && (r(d) || s(d) || function (e) {
                  return !0 === e || !1 === e || function (e) {
                    return o(e) && null !== e;
                  }(e) && "[object Boolean]" == l(e);
                }(d))) i.push(function (e) {
                  return null == e ? "" : function (e) {
                    if ("string" == typeof e) return e;
                    let t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                  }(e);
                }(d));else if (n(d)) {
                  c = !0;
                  for (let e = 0, i = d.length; e < i; e += 1) h(d[e], t, u + 1);
                } else t.length && h(d, t, u + 1);
              } else i.push(e);
            };
            return h(e, r(t) ? t.split(".") : t, 0), c ? i : i[0];
          },
          ignoreLocation: !1,
          ignoreFieldNorm: !1,
          fieldNormWeight: 1
        };
        const v = /[^ ]+/g;
        class g {
          constructor({
            getFn: e = m.getFn,
            fieldNormWeight: t = m.fieldNormWeight
          } = {}) {
            this.norm = function (e = 1, t = 3) {
              const i = new Map(),
                n = Math.pow(10, t);
              return {
                get(t) {
                  const r = t.match(v).length;
                  if (i.has(r)) return i.get(r);
                  const s = 1 / Math.pow(r, .5 * e),
                    o = parseFloat(Math.round(s * n) / n);
                  return i.set(r, o), o;
                },
                clear() {
                  i.clear();
                }
              };
            }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
          }
          setSources(e = []) {
            this.docs = e;
          }
          setIndexRecords(e = []) {
            this.records = e;
          }
          setKeys(e = []) {
            this.keys = e, this._keysMap = {}, e.forEach((e, t) => {
              this._keysMap[e.id] = t;
            });
          }
          create() {
            !this.isCreated && this.docs.length && (this.isCreated = !0, r(this.docs[0]) ? this.docs.forEach((e, t) => {
              this._addString(e, t);
            }) : this.docs.forEach((e, t) => {
              this._addObject(e, t);
            }), this.norm.clear());
          }
          add(e) {
            const t = this.size();
            r(e) ? this._addString(e, t) : this._addObject(e, t);
          }
          removeAt(e) {
            this.records.splice(e, 1);
            for (let t = e, i = this.size(); t < i; t += 1) this.records[t].i -= 1;
          }
          getValueForItemAtKeyId(e, t) {
            return e[this._keysMap[t]];
          }
          size() {
            return this.records.length;
          }
          _addString(e, t) {
            if (!a(e) || c(e)) return;
            let i = {
              v: e,
              i: t,
              n: this.norm.get(e)
            };
            this.records.push(i);
          }
          _addObject(e, t) {
            let i = {
              i: t,
              $: {}
            };
            this.keys.forEach((t, s) => {
              let o = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
              if (a(o)) if (n(o)) {
                let e = [];
                const t = [{
                  nestedArrIndex: -1,
                  value: o
                }];
                for (; t.length;) {
                  const {
                    nestedArrIndex: i,
                    value: s
                  } = t.pop();
                  if (a(s)) if (r(s) && !c(s)) {
                    let t = {
                      v: s,
                      i: i,
                      n: this.norm.get(s)
                    };
                    e.push(t);
                  } else n(s) && s.forEach((e, i) => {
                    t.push({
                      nestedArrIndex: i,
                      value: e
                    });
                  });
                }
                i.$[s] = e;
              } else if (r(o) && !c(o)) {
                let e = {
                  v: o,
                  n: this.norm.get(o)
                };
                i.$[s] = e;
              }
            }), this.records.push(i);
          }
          toJSON() {
            return {
              keys: this.keys,
              records: this.records
            };
          }
        }
        function _(e, t, {
          getFn: i = m.getFn,
          fieldNormWeight: n = m.fieldNormWeight
        } = {}) {
          const r = new g({
            getFn: i,
            fieldNormWeight: n
          });
          return r.setKeys(e.map(d)), r.setSources(t), r.create(), r;
        }
        function y(e, {
          errors: t = 0,
          currentLocation: i = 0,
          expectedLocation: n = 0,
          distance: r = m.distance,
          ignoreLocation: s = m.ignoreLocation
        } = {}) {
          const o = t / e.length;
          if (s) return o;
          const a = Math.abs(n - i);
          return r ? o + a / r : a ? 1 : o;
        }
        const E = 32;
        function b(e) {
          let t = {};
          for (let i = 0, n = e.length; i < n; i += 1) {
            const r = e.charAt(i);
            t[r] = (t[r] || 0) | 1 << n - i - 1;
          }
          return t;
        }
        class S {
          constructor(e, {
            location: t = m.location,
            threshold: i = m.threshold,
            distance: n = m.distance,
            includeMatches: r = m.includeMatches,
            findAllMatches: s = m.findAllMatches,
            minMatchCharLength: o = m.minMatchCharLength,
            isCaseSensitive: a = m.isCaseSensitive,
            ignoreLocation: c = m.ignoreLocation
          } = {}) {
            if (this.options = {
              location: t,
              threshold: i,
              distance: n,
              includeMatches: r,
              findAllMatches: s,
              minMatchCharLength: o,
              isCaseSensitive: a,
              ignoreLocation: c
            }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;
            const l = (e, t) => {
                this.chunks.push({
                  pattern: e,
                  alphabet: b(e),
                  startIndex: t
                });
              },
              h = this.pattern.length;
            if (h > E) {
              let e = 0;
              const t = h % E,
                i = h - t;
              for (; e < i;) l(this.pattern.substr(e, E), e), e += E;
              if (t) {
                const e = h - E;
                l(this.pattern.substr(e), e);
              }
            } else l(this.pattern, 0);
          }
          searchIn(e) {
            const {
              isCaseSensitive: t,
              includeMatches: i
            } = this.options;
            if (t || (e = e.toLowerCase()), this.pattern === e) {
              let t = {
                isMatch: !0,
                score: 0
              };
              return i && (t.indices = [[0, e.length - 1]]), t;
            }
            const {
              location: n,
              distance: r,
              threshold: s,
              findAllMatches: o,
              minMatchCharLength: a,
              ignoreLocation: c
            } = this.options;
            let l = [],
              h = 0,
              u = !1;
            this.chunks.forEach(({
              pattern: t,
              alphabet: d,
              startIndex: p
            }) => {
              const {
                isMatch: f,
                score: v,
                indices: g
              } = function (e, t, i, {
                location: n = m.location,
                distance: r = m.distance,
                threshold: s = m.threshold,
                findAllMatches: o = m.findAllMatches,
                minMatchCharLength: a = m.minMatchCharLength,
                includeMatches: c = m.includeMatches,
                ignoreLocation: l = m.ignoreLocation
              } = {}) {
                if (t.length > E) throw new Error("Pattern length exceeds max of 32.");
                const h = t.length,
                  u = e.length,
                  d = Math.max(0, Math.min(n, u));
                let p = s,
                  f = d;
                const v = a > 1 || c,
                  g = v ? Array(u) : [];
                let _;
                for (; (_ = e.indexOf(t, f)) > -1;) {
                  let e = y(t, {
                    currentLocation: _,
                    expectedLocation: d,
                    distance: r,
                    ignoreLocation: l
                  });
                  if (p = Math.min(e, p), f = _ + h, v) {
                    let e = 0;
                    for (; e < h;) g[_ + e] = 1, e += 1;
                  }
                }
                f = -1;
                let b = [],
                  S = 1,
                  O = h + u;
                const I = 1 << h - 1;
                for (let n = 0; n < h; n += 1) {
                  let s = 0,
                    a = O;
                  for (; s < a;) y(t, {
                    errors: n,
                    currentLocation: d + a,
                    expectedLocation: d,
                    distance: r,
                    ignoreLocation: l
                  }) <= p ? s = a : O = a, a = Math.floor((O - s) / 2 + s);
                  O = a;
                  let c = Math.max(1, d - a + 1),
                    m = o ? u : Math.min(d + a, u) + h,
                    _ = Array(m + 2);
                  _[m + 1] = (1 << n) - 1;
                  for (let s = m; s >= c; s -= 1) {
                    let o = s - 1,
                      a = i[e.charAt(o)];
                    if (v && (g[o] = +!!a), _[s] = (_[s + 1] << 1 | 1) & a, n && (_[s] |= (b[s + 1] | b[s]) << 1 | 1 | b[s + 1]), _[s] & I && (S = y(t, {
                      errors: n,
                      currentLocation: o,
                      expectedLocation: d,
                      distance: r,
                      ignoreLocation: l
                    }), S <= p)) {
                      if (p = S, f = o, f <= d) break;
                      c = Math.max(1, 2 * d - f);
                    }
                  }
                  if (y(t, {
                    errors: n + 1,
                    currentLocation: d,
                    expectedLocation: d,
                    distance: r,
                    ignoreLocation: l
                  }) > p) break;
                  b = _;
                }
                const C = {
                  isMatch: f >= 0,
                  score: Math.max(.001, S)
                };
                if (v) {
                  const e = function (e = [], t = m.minMatchCharLength) {
                    let i = [],
                      n = -1,
                      r = -1,
                      s = 0;
                    for (let o = e.length; s < o; s += 1) {
                      let o = e[s];
                      o && -1 === n ? n = s : o || -1 === n || (r = s - 1, r - n + 1 >= t && i.push([n, r]), n = -1);
                    }
                    return e[s - 1] && s - n >= t && i.push([n, s - 1]), i;
                  }(g, a);
                  e.length ? c && (C.indices = e) : C.isMatch = !1;
                }
                return C;
              }(e, t, d, {
                location: n + p,
                distance: r,
                threshold: s,
                findAllMatches: o,
                minMatchCharLength: a,
                includeMatches: i,
                ignoreLocation: c
              });
              f && (u = !0), h += v, f && g && (l = [...l, ...g]);
            });
            let d = {
              isMatch: u,
              score: u ? h / this.chunks.length : 1
            };
            return u && i && (d.indices = l), d;
          }
        }
        class O {
          constructor(e) {
            this.pattern = e;
          }
          static isMultiMatch(e) {
            return I(e, this.multiRegex);
          }
          static isSingleMatch(e) {
            return I(e, this.singleRegex);
          }
          search() {}
        }
        function I(e, t) {
          const i = e.match(t);
          return i ? i[1] : null;
        }
        class C extends O {
          constructor(e, {
            location: t = m.location,
            threshold: i = m.threshold,
            distance: n = m.distance,
            includeMatches: r = m.includeMatches,
            findAllMatches: s = m.findAllMatches,
            minMatchCharLength: o = m.minMatchCharLength,
            isCaseSensitive: a = m.isCaseSensitive,
            ignoreLocation: c = m.ignoreLocation
          } = {}) {
            super(e), this._bitapSearch = new S(e, {
              location: t,
              threshold: i,
              distance: n,
              includeMatches: r,
              findAllMatches: s,
              minMatchCharLength: o,
              isCaseSensitive: a,
              ignoreLocation: c
            });
          }
          static get type() {
            return "fuzzy";
          }
          static get multiRegex() {
            return /^"(.*)"$/;
          }
          static get singleRegex() {
            return /^(.*)$/;
          }
          search(e) {
            return this._bitapSearch.searchIn(e);
          }
        }
        class T extends O {
          constructor(e) {
            super(e);
          }
          static get type() {
            return "include";
          }
          static get multiRegex() {
            return /^'"(.*)"$/;
          }
          static get singleRegex() {
            return /^'(.*)$/;
          }
          search(e) {
            let t,
              i = 0;
            const n = [],
              r = this.pattern.length;
            for (; (t = e.indexOf(this.pattern, i)) > -1;) i = t + r, n.push([t, i - 1]);
            const s = !!n.length;
            return {
              isMatch: s,
              score: s ? 0 : 1,
              indices: n
            };
          }
        }
        const L = [class extends O {
            constructor(e) {
              super(e);
            }
            static get type() {
              return "exact";
            }
            static get multiRegex() {
              return /^="(.*)"$/;
            }
            static get singleRegex() {
              return /^=(.*)$/;
            }
            search(e) {
              const t = e === this.pattern;
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }, T, class extends O {
            constructor(e) {
              super(e);
            }
            static get type() {
              return "prefix-exact";
            }
            static get multiRegex() {
              return /^\^"(.*)"$/;
            }
            static get singleRegex() {
              return /^\^(.*)$/;
            }
            search(e) {
              const t = e.startsWith(this.pattern);
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }, class extends O {
            constructor(e) {
              super(e);
            }
            static get type() {
              return "inverse-prefix-exact";
            }
            static get multiRegex() {
              return /^!\^"(.*)"$/;
            }
            static get singleRegex() {
              return /^!\^(.*)$/;
            }
            search(e) {
              const t = !e.startsWith(this.pattern);
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, e.length - 1]
              };
            }
          }, class extends O {
            constructor(e) {
              super(e);
            }
            static get type() {
              return "inverse-suffix-exact";
            }
            static get multiRegex() {
              return /^!"(.*)"\$$/;
            }
            static get singleRegex() {
              return /^!(.*)\$$/;
            }
            search(e) {
              const t = !e.endsWith(this.pattern);
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, e.length - 1]
              };
            }
          }, class extends O {
            constructor(e) {
              super(e);
            }
            static get type() {
              return "suffix-exact";
            }
            static get multiRegex() {
              return /^"(.*)"\$$/;
            }
            static get singleRegex() {
              return /^(.*)\$$/;
            }
            search(e) {
              const t = e.endsWith(this.pattern);
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [e.length - this.pattern.length, e.length - 1]
              };
            }
          }, class extends O {
            constructor(e) {
              super(e);
            }
            static get type() {
              return "inverse-exact";
            }
            static get multiRegex() {
              return /^!"(.*)"$/;
            }
            static get singleRegex() {
              return /^!(.*)$/;
            }
            search(e) {
              const t = -1 === e.indexOf(this.pattern);
              return {
                isMatch: t,
                score: t ? 0 : 1,
                indices: [0, e.length - 1]
              };
            }
          }, C],
          w = L.length,
          A = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
          M = new Set([C.type, T.type]);
        const P = [];
        function x(e, t) {
          for (let i = 0, n = P.length; i < n; i += 1) {
            let n = P[i];
            if (n.condition(e, t)) return new n(e, t);
          }
          return new S(e, t);
        }
        const N = "$and",
          D = e => !(!e.$and && !e.$or),
          j = e => ({
            [N]: Object.keys(e).map(t => ({
              [t]: e[t]
            }))
          });
        function F(e, t, {
          auto: i = !0
        } = {}) {
          const s = e => {
            let a = Object.keys(e);
            const c = (e => !!e.$path)(e);
            if (!c && a.length > 1 && !D(e)) return s(j(e));
            if ((e => !n(e) && o(e) && !D(e))(e)) {
              const n = c ? e.$path : a[0],
                s = c ? e.$val : e[n];
              if (!r(s)) throw new Error((e => `Invalid value for key ${e}`)(n));
              const o = {
                keyId: f(n),
                pattern: s
              };
              return i && (o.searcher = x(s, t)), o;
            }
            let l = {
              children: [],
              operator: a[0]
            };
            return a.forEach(t => {
              const i = e[t];
              n(i) && i.forEach(e => {
                l.children.push(s(e));
              });
            }), l;
          };
          return D(e) || (e = j(e)), s(e);
        }
        function k(e, t) {
          const i = e.matches;
          t.matches = [], a(i) && i.forEach(e => {
            if (!a(e.indices) || !e.indices.length) return;
            const {
              indices: i,
              value: n
            } = e;
            let r = {
              indices: i,
              value: n
            };
            e.key && (r.key = e.key.src), e.idx > -1 && (r.refIndex = e.idx), t.matches.push(r);
          });
        }
        function K(e, t) {
          t.score = e.score;
        }
        class R {
          constructor(e, t = {}, i) {
            this.options = {
              ...m,
              ...t
            }, this.options.useExtendedSearch, this._keyStore = new u(this.options.keys), this.setCollection(e, i);
          }
          setCollection(e, t) {
            if (this._docs = e, t && !(t instanceof g)) throw new Error("Incorrect 'index' type");
            this._myIndex = t || _(this.options.keys, this._docs, {
              getFn: this.options.getFn,
              fieldNormWeight: this.options.fieldNormWeight
            });
          }
          add(e) {
            a(e) && (this._docs.push(e), this._myIndex.add(e));
          }
          remove(e = () => !1) {
            const t = [];
            for (let i = 0, n = this._docs.length; i < n; i += 1) {
              const r = this._docs[i];
              e(r, i) && (this.removeAt(i), i -= 1, n -= 1, t.push(r));
            }
            return t;
          }
          removeAt(e) {
            this._docs.splice(e, 1), this._myIndex.removeAt(e);
          }
          getIndex() {
            return this._myIndex;
          }
          search(e, {
            limit: t = -1
          } = {}) {
            const {
              includeMatches: i,
              includeScore: n,
              shouldSort: o,
              sortFn: a,
              ignoreFieldNorm: c
            } = this.options;
            let l = r(e) ? r(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
            return function (e, {
              ignoreFieldNorm: t = m.ignoreFieldNorm
            }) {
              e.forEach(e => {
                let i = 1;
                e.matches.forEach(({
                  key: e,
                  norm: n,
                  score: r
                }) => {
                  const s = e ? e.weight : null;
                  i *= Math.pow(0 === r && s ? Number.EPSILON : r, (s || 1) * (t ? 1 : n));
                }), e.score = i;
              });
            }(l, {
              ignoreFieldNorm: c
            }), o && l.sort(a), s(t) && t > -1 && (l = l.slice(0, t)), function (e, t, {
              includeMatches: i = m.includeMatches,
              includeScore: n = m.includeScore
            } = {}) {
              const r = [];
              return i && r.push(k), n && r.push(K), e.map(e => {
                const {
                    idx: i
                  } = e,
                  n = {
                    item: t[i],
                    refIndex: i
                  };
                return r.length && r.forEach(t => {
                  t(e, n);
                }), n;
              });
            }(l, this._docs, {
              includeMatches: i,
              includeScore: n
            });
          }
          _searchStringList(e) {
            const t = x(e, this.options),
              {
                records: i
              } = this._myIndex,
              n = [];
            return i.forEach(({
              v: e,
              i: i,
              n: r
            }) => {
              if (!a(e)) return;
              const {
                isMatch: s,
                score: o,
                indices: c
              } = t.searchIn(e);
              s && n.push({
                item: e,
                idx: i,
                matches: [{
                  score: o,
                  value: e,
                  norm: r,
                  indices: c
                }]
              });
            }), n;
          }
          _searchLogical(e) {
            const t = F(e, this.options),
              i = (e, t, n) => {
                if (!e.children) {
                  const {
                      keyId: i,
                      searcher: r
                    } = e,
                    s = this._findMatches({
                      key: this._keyStore.get(i),
                      value: this._myIndex.getValueForItemAtKeyId(t, i),
                      searcher: r
                    });
                  return s && s.length ? [{
                    idx: n,
                    item: t,
                    matches: s
                  }] : [];
                }
                const r = [];
                for (let s = 0, o = e.children.length; s < o; s += 1) {
                  const o = e.children[s],
                    a = i(o, t, n);
                  if (a.length) r.push(...a);else if (e.operator === N) return [];
                }
                return r;
              },
              n = this._myIndex.records,
              r = {},
              s = [];
            return n.forEach(({
              $: e,
              i: n
            }) => {
              if (a(e)) {
                let o = i(t, e, n);
                o.length && (r[n] || (r[n] = {
                  idx: n,
                  item: e,
                  matches: []
                }, s.push(r[n])), o.forEach(({
                  matches: e
                }) => {
                  r[n].matches.push(...e);
                }));
              }
            }), s;
          }
          _searchObjectList(e) {
            const t = x(e, this.options),
              {
                keys: i,
                records: n
              } = this._myIndex,
              r = [];
            return n.forEach(({
              $: e,
              i: n
            }) => {
              if (!a(e)) return;
              let s = [];
              i.forEach((i, n) => {
                s.push(...this._findMatches({
                  key: i,
                  value: e[n],
                  searcher: t
                }));
              }), s.length && r.push({
                idx: n,
                item: e,
                matches: s
              });
            }), r;
          }
          _findMatches({
            key: e,
            value: t,
            searcher: i
          }) {
            if (!a(t)) return [];
            let r = [];
            if (n(t)) t.forEach(({
              v: t,
              i: n,
              n: s
            }) => {
              if (!a(t)) return;
              const {
                isMatch: o,
                score: c,
                indices: l
              } = i.searchIn(t);
              o && r.push({
                score: c,
                key: e,
                value: t,
                idx: n,
                norm: s,
                indices: l
              });
            });else {
              const {
                  v: n,
                  n: s
                } = t,
                {
                  isMatch: o,
                  score: a,
                  indices: c
                } = i.searchIn(n);
              o && r.push({
                score: a,
                key: e,
                value: n,
                norm: s,
                indices: c
              });
            }
            return r;
          }
        }
        R.version = "6.6.2", R.createIndex = _, R.parseIndex = function (e, {
          getFn: t = m.getFn,
          fieldNormWeight: i = m.fieldNormWeight
        } = {}) {
          const {
              keys: n,
              records: r
            } = e,
            s = new g({
              getFn: t,
              fieldNormWeight: i
            });
          return s.setKeys(n), s.setIndexRecords(r), s;
        }, R.config = m, R.parseQuery = F, function (...e) {
          P.push(...e);
        }(class {
          constructor(e, {
            isCaseSensitive: t = m.isCaseSensitive,
            includeMatches: i = m.includeMatches,
            minMatchCharLength: n = m.minMatchCharLength,
            ignoreLocation: r = m.ignoreLocation,
            findAllMatches: s = m.findAllMatches,
            location: o = m.location,
            threshold: a = m.threshold,
            distance: c = m.distance
          } = {}) {
            this.query = null, this.options = {
              isCaseSensitive: t,
              includeMatches: i,
              minMatchCharLength: n,
              findAllMatches: s,
              ignoreLocation: r,
              location: o,
              threshold: a,
              distance: c
            }, this.pattern = t ? e : e.toLowerCase(), this.query = function (e, t = {}) {
              return e.split("|").map(e => {
                let i = e.trim().split(A).filter(e => e && !!e.trim()),
                  n = [];
                for (let e = 0, r = i.length; e < r; e += 1) {
                  const r = i[e];
                  let s = !1,
                    o = -1;
                  for (; !s && ++o < w;) {
                    const e = L[o];
                    let i = e.isMultiMatch(r);
                    i && (n.push(new e(i, t)), s = !0);
                  }
                  if (!s) for (o = -1; ++o < w;) {
                    const e = L[o];
                    let i = e.isSingleMatch(r);
                    if (i) {
                      n.push(new e(i, t));
                      break;
                    }
                  }
                }
                return n;
              });
            }(this.pattern, this.options);
          }
          static condition(e, t) {
            return t.useExtendedSearch;
          }
          searchIn(e) {
            const t = this.query;
            if (!t) return {
              isMatch: !1,
              score: 1
            };
            const {
              includeMatches: i,
              isCaseSensitive: n
            } = this.options;
            e = n ? e : e.toLowerCase();
            let r = 0,
              s = [],
              o = 0;
            for (let n = 0, a = t.length; n < a; n += 1) {
              const a = t[n];
              s.length = 0, r = 0;
              for (let t = 0, n = a.length; t < n; t += 1) {
                const n = a[t],
                  {
                    isMatch: c,
                    indices: l,
                    score: h
                  } = n.search(e);
                if (!c) {
                  o = 0, r = 0, s.length = 0;
                  break;
                }
                if (r += 1, o += h, i) {
                  const e = n.constructor.type;
                  M.has(e) ? s = [...s, ...l] : s.push(l);
                }
              }
              if (r) {
                let e = {
                  isMatch: !0,
                  score: o / r
                };
                return i && (e.indices = s), e;
              }
            }
            return {
              isMatch: !1,
              score: 1
            };
          }
        });
      },
      791: function (e, t, i) {
        function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, n(e);
        }
        function r(e, t, i) {
          return (t = function (e) {
            var t = function (e, t) {
              if ("object" !== n(e) || null === e) return e;
              var i = e[Symbol.toPrimitive];
              if (void 0 !== i) {
                var r = i.call(e, t);
                if ("object" !== n(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e, "string");
            return "symbol" === n(t) ? t : String(t);
          }(t)) in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i, e;
        }
        function s(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(i), !0).forEach(function (t) {
              r(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function a(e) {
          return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
        }
        i.r(t), i.d(t, {
          __DO_NOT_USE__ActionTypes: function () {
            return h;
          },
          applyMiddleware: function () {
            return _;
          },
          bindActionCreators: function () {
            return v;
          },
          combineReducers: function () {
            return f;
          },
          compose: function () {
            return g;
          },
          createStore: function () {
            return d;
          },
          legacy_createStore: function () {
            return p;
          }
        });
        var c = "function" == typeof Symbol && Symbol.observable || "@@observable",
          l = function () {
            return Math.random().toString(36).substring(7).split("").join(".");
          },
          h = {
            INIT: "@@redux/INIT" + l(),
            REPLACE: "@@redux/REPLACE" + l(),
            PROBE_UNKNOWN_ACTION: function () {
              return "@@redux/PROBE_UNKNOWN_ACTION" + l();
            }
          };
        function u(e) {
          if ("object" != typeof e || null === e) return !1;
          for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        }
        function d(e, t, i) {
          var n;
          if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error(a(0));
          if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
            if ("function" != typeof i) throw new Error(a(1));
            return i(d)(e, t);
          }
          if ("function" != typeof e) throw new Error(a(2));
          var r = e,
            s = t,
            o = [],
            l = o,
            p = !1;
          function f() {
            l === o && (l = o.slice());
          }
          function m() {
            if (p) throw new Error(a(3));
            return s;
          }
          function v(e) {
            if ("function" != typeof e) throw new Error(a(4));
            if (p) throw new Error(a(5));
            var t = !0;
            return f(), l.push(e), function () {
              if (t) {
                if (p) throw new Error(a(6));
                t = !1, f();
                var i = l.indexOf(e);
                l.splice(i, 1), o = null;
              }
            };
          }
          function g(e) {
            if (!u(e)) throw new Error(a(7));
            if (void 0 === e.type) throw new Error(a(8));
            if (p) throw new Error(a(9));
            try {
              p = !0, s = r(s, e);
            } finally {
              p = !1;
            }
            for (var t = o = l, i = 0; i < t.length; i++) (0, t[i])();
            return e;
          }
          function _(e) {
            if ("function" != typeof e) throw new Error(a(10));
            r = e, g({
              type: h.REPLACE
            });
          }
          function y() {
            var e,
              t = v;
            return (e = {
              subscribe: function (e) {
                if ("object" != typeof e || null === e) throw new Error(a(11));
                function i() {
                  e.next && e.next(m());
                }
                return i(), {
                  unsubscribe: t(i)
                };
              }
            })[c] = function () {
              return this;
            }, e;
          }
          return g({
            type: h.INIT
          }), (n = {
            dispatch: g,
            subscribe: v,
            getState: m,
            replaceReducer: _
          })[c] = y, n;
        }
        var p = d;
        function f(e) {
          for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
            var r = t[n];
            "function" == typeof e[r] && (i[r] = e[r]);
          }
          var s,
            o = Object.keys(i);
          try {
            !function (e) {
              Object.keys(e).forEach(function (t) {
                var i = e[t];
                if (void 0 === i(void 0, {
                  type: h.INIT
                })) throw new Error(a(12));
                if (void 0 === i(void 0, {
                  type: h.PROBE_UNKNOWN_ACTION()
                })) throw new Error(a(13));
              });
            }(i);
          } catch (e) {
            s = e;
          }
          return function (e, t) {
            if (void 0 === e && (e = {}), s) throw s;
            for (var n = !1, r = {}, c = 0; c < o.length; c++) {
              var l = o[c],
                h = i[l],
                u = e[l],
                d = h(u, t);
              if (void 0 === d) throw t && t.type, new Error(a(14));
              r[l] = d, n = n || d !== u;
            }
            return (n = n || o.length !== Object.keys(e).length) ? r : e;
          };
        }
        function m(e, t) {
          return function () {
            return t(e.apply(this, arguments));
          };
        }
        function v(e, t) {
          if ("function" == typeof e) return m(e, t);
          if ("object" != typeof e || null === e) throw new Error(a(16));
          var i = {};
          for (var n in e) {
            var r = e[n];
            "function" == typeof r && (i[n] = m(r, t));
          }
          return i;
        }
        function g() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          return 0 === t.length ? function (e) {
            return e;
          } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
        }
        function _() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          return function (e) {
            return function () {
              var i = e.apply(void 0, arguments),
                n = function () {
                  throw new Error(a(15));
                },
                r = {
                  getState: i.getState,
                  dispatch: function () {
                    return n.apply(void 0, arguments);
                  }
                },
                s = t.map(function (e) {
                  return e(r);
                });
              return n = g.apply(void 0, s)(i.dispatch), o(o({}, i), {}, {
                dispatch: n
              });
            };
          };
        }
      }
    },
    t = {};
  function i(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var s = t[n] = {
      exports: {}
    };
    return e[n].call(s.exports, s, s.exports, i), s.exports;
  }
  i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, {
      a: t
    }), t;
  }, i.d = function (e, t) {
    for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var n,
    r,
    s = {};
  n = i(373), r = i.n(n), i(187), i(883), i(789), i(686), s.default = r(), window.Choices = s.default;
}();

/***/ }),

/***/ "./blog.html":
/*!*******************!*\
  !*** ./blog.html ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar1.png */ "./images/ar1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar2.png */ "./images/ar2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar3.png */ "./images/ar3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar4.png */ "./images/ar4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar5.png */ "./images/ar5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar6.png */ "./images/ar6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar7.png */ "./images/ar7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar8.png */ "./images/ar8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar9.png */ "./images/ar9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar10.png */ "./images/ar10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar11.png */ "./images/ar11.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ar12.png */ "./images/ar12.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Блог</title>\r\n</head>\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"blog-card\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"blog-card__card card\">\r\n                        <div class=\"container\">\r\n                            <h2 class=\"blog-card__title\">Блог</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"articles\">\r\n                <div class=\"container\">\r\n                    <div class=\"articles__grid\">\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Интернет-магазин Urban Outfitters в UK: обзор</div>\r\n                            </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Overstock. Брендовые товары\r\n                                    по доступным ценам</div>\r\n                                </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Skechers с Amazon. Удобная\r\n                                    обувь для всей семьи</div>\r\n                                </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">16 лучших подарков с Амазона\r\n                                    в 2021 году</div>\r\n                                </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Target — семейный супермаркет\r\n                                    с ценами от 300 рублей!</div>\r\n                                </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Английский магазин RIPNDIP. Покупаем самовыражение</div>\r\n                            </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Nautica. Элитные товары из Англии по низким ценам</div>\r\n                            </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Forever 21 - покупаем джинсы\r\n                                    за 1 500 рублей</div>\r\n                                </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Как купить кроссовки Balenciaga на 30 000 рублей дешевле?<div>\r\n                                </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">Топ-7 самых дорогих сумок\r\n                                    Louis Vuitton</div>\r\n                                </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">BH Cosmetics Galaxy. Галактика красоты и ухода </div>\r\n                            </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                        <div class=\"articles__item\">\r\n                            <a href=\"#\" class=\"articles__link\">\r\n                                <div class=\"articles__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"articles__img\">\r\n                                </div>\r\n                                <div class=\"articles__title\">“Вансы”. Крутые кеды, которые не выйдут из моды никогда!</div>\r\n                            </a>\r\n                                <div class=\"articles__row\">\r\n                                    <div class=\"articles__text\">22.10.2021</div>\r\n                                    <div class=\"articles__text articles__text--icon\">Читать: 8 минут</div>\r\n                                </div>\r\n                                \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"contact\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"contact__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row contact__row\">\r\n                                <h2 class=\"contact__title\">Остались вопросы? Спросите нас в соцсетях!</h2>\r\n                                <div class=\"contact__icons\">\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M44.4313 21.6147C41.6399 18.7645 37.7812 17.2173 33.8405 17.2173C25.4663 17.2173 18.7342 23.9763 18.8163 32.2011C18.8163 34.8069 19.5552 37.3314 20.7867 39.6115L18.6521 47.3477L26.6157 45.3119C28.8324 46.5334 31.2954 47.1034 33.7584 47.1034C42.0504 47.1034 48.7825 40.3444 48.7825 32.1196C48.7825 28.1294 47.2226 24.3834 44.4313 21.6147ZM33.8405 44.579C31.6238 44.579 29.4071 44.0089 27.5188 42.8689L27.0262 42.6246L22.2645 43.8461L23.496 39.2044L23.1676 38.7158C19.5552 32.934 21.2793 25.2792 27.1904 21.6961C33.1016 18.1131 40.7368 19.8232 44.3492 25.6864C47.9615 31.5496 46.2375 39.1229 40.3263 42.706C38.438 43.9275 36.1392 44.579 33.8405 44.579ZM41.0652 35.5398L40.1621 35.1327C40.1621 35.1327 38.8485 34.5626 38.0275 34.1555C37.9454 34.1555 37.8633 34.074 37.7812 34.074C37.5349 34.074 37.3707 34.1555 37.2065 34.2369C37.2065 34.2369 37.1244 34.3183 35.975 35.6213C35.8929 35.7841 35.7287 35.8656 35.5646 35.8656H35.4825C35.4004 35.8656 35.2362 35.7841 35.1541 35.7027L34.7436 35.5398C33.8405 35.1327 33.0195 34.6441 32.3627 33.9926C32.1985 33.8297 31.9522 33.6669 31.788 33.504C31.2133 32.934 30.6386 32.2825 30.2281 31.5496L30.146 31.3867C30.0639 31.3053 30.0639 31.2239 29.9818 31.061C29.9818 30.8981 29.9818 30.7353 30.0639 30.6538C30.0639 30.6538 30.3923 30.2467 30.6386 30.0024C30.8028 29.8395 30.8849 29.5952 31.0491 29.4323C31.2133 29.188 31.2954 28.8623 31.2133 28.618C31.1312 28.2108 30.146 26.0121 29.8997 25.5235C29.7355 25.2792 29.5713 25.1978 29.325 25.1163H29.0787C28.9145 25.1163 28.6682 25.1163 28.4219 25.1163C28.2577 25.1163 28.0935 25.1978 27.9293 25.1978L27.8472 25.2792C27.683 25.3606 27.5188 25.5235 27.3546 25.6049C27.1904 25.7678 27.1083 25.9307 26.9441 26.0935C26.3694 26.8265 26.041 27.7222 26.041 28.618C26.041 29.2695 26.2052 29.9209 26.4515 30.491L26.5336 30.7353C27.2725 32.2825 28.2577 33.6669 29.5713 34.8884L29.8997 35.2141C30.146 35.4584 30.3923 35.6213 30.5565 35.8656C32.2806 37.3314 34.251 38.39 36.4676 38.9601C36.7139 39.0415 37.0423 39.0415 37.2886 39.1229C37.5349 39.1229 37.8633 39.1229 38.1096 39.1229C38.5201 39.1229 39.0127 38.9601 39.3411 38.7972C39.5874 38.6343 39.7516 38.6343 39.9158 38.4715L40.08 38.3086C40.2442 38.1457 40.4084 38.0643 40.5726 37.9014C40.7368 37.7386 40.901 37.5757 40.9831 37.4128C41.1473 37.0871 41.2294 36.6799 41.3115 36.2727C41.3115 36.1099 41.3115 35.8656 41.3115 35.7027C41.3115 35.7027 41.2294 35.6213 41.0652 35.5398Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M45.6111 20.3423C44.8165 19.6117 41.5995 17.2727 34.4285 17.2406C34.4285 17.2406 25.9759 16.7279 21.8553 20.5089C19.5611 22.8031 18.7537 26.1547 18.6703 30.3201C18.587 34.4791 18.4781 42.2781 25.9951 44.3929H26.0015L25.9951 47.6163C25.9951 47.6163 25.9503 48.9236 26.809 49.1863C27.8471 49.5068 28.4623 48.5135 29.4556 47.4433C30.0003 46.8537 30.7501 45.995 31.3205 45.3349C36.46 45.7643 40.4139 44.7774 40.8625 44.63C41.9007 44.2903 47.7772 43.5406 48.732 35.7416C49.7189 27.7183 48.2514 22.6365 45.6111 20.3423ZM46.4827 35.1776C45.6752 41.6885 40.9138 42.0987 40.0359 42.3807C39.6642 42.5024 36.1908 43.3675 31.8203 43.0792C31.8203 43.0792 28.5649 47.0075 27.5524 48.0264C27.3921 48.1866 27.2063 48.2507 27.0845 48.2187C26.9115 48.1738 26.8602 47.9688 26.8667 47.6676C26.8667 47.2318 26.8923 42.3038 26.8923 42.3038C26.8859 42.3038 26.8859 42.3038 26.8923 42.3038C20.5288 40.5414 20.9005 33.9024 20.971 30.429C21.0414 26.9557 21.6951 24.104 23.6368 22.1879C27.1166 19.035 34.3004 19.5028 34.3004 19.5028C40.3627 19.5284 43.2657 21.3548 43.9386 21.9636C46.1751 23.8861 47.3158 28.4681 46.4827 35.1776Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M37.3827 30.5509C37.1712 30.5509 36.9918 30.3843 36.9789 30.1664C36.9084 28.7886 36.2612 28.1157 34.9411 28.0452C34.7168 28.0324 34.5438 27.8402 34.5566 27.6159C34.5694 27.3916 34.7616 27.2186 34.9859 27.2314C36.729 27.3275 37.7031 28.3272 37.7928 30.1216C37.8056 30.3458 37.6326 30.5381 37.4083 30.5445C37.3955 30.5509 37.3891 30.5509 37.3827 30.5509Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M39.4593 31.2434H39.4529C39.2286 31.237 39.0492 31.0512 39.0556 30.8269C39.0876 29.4427 38.6903 28.3212 37.8444 27.3984C37.0049 26.4756 35.845 25.9758 34.3134 25.8668C34.0891 25.8476 33.9225 25.6553 33.9417 25.4311C33.9609 25.2068 34.1532 25.0401 34.3775 25.0594C36.1077 25.1875 37.4727 25.7899 38.4468 26.8537C39.4273 27.9239 39.9015 29.2633 39.8694 30.8461C39.863 31.0704 39.6772 31.2434 39.4593 31.2434Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M41.5868 32.0765C41.3625 32.0765 41.1831 31.8971 41.1831 31.6728C41.1638 29.1927 40.4525 27.3023 39.0042 25.886C37.5752 24.489 35.7616 23.7777 33.6276 23.7584C33.4033 23.7584 33.2239 23.5726 33.2239 23.3483C33.2239 23.124 33.4097 22.9446 33.6276 22.9446C35.9795 22.9638 37.9789 23.752 39.5618 25.3029C41.151 26.8537 41.9649 28.9941 41.9905 31.66C41.9969 31.8907 41.8175 32.0765 41.5868 32.0765C41.5932 32.0765 41.5932 32.0765 41.5868 32.0765Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M35.0374 35.5691C35.0374 35.5691 35.6078 35.6203 35.9154 35.2422L36.5113 34.4925C36.7997 34.1208 37.4982 33.8837 38.1775 34.2618C38.5556 34.4732 39.2413 34.8962 39.6643 35.2102C40.1193 35.5434 41.0421 36.3124 41.0485 36.3189C41.4906 36.6905 41.5932 37.2352 41.292 37.8184C41.292 37.8184 41.292 37.8248 41.292 37.8312C40.9844 38.3759 40.5678 38.8886 40.0488 39.3628C40.0424 39.3628 40.0424 39.3692 40.0359 39.3692C39.6066 39.7281 39.1836 39.9332 38.7735 39.978C38.7222 39.9909 38.6646 39.9909 38.5877 39.9909C38.4082 39.9909 38.2288 39.9652 38.0494 39.9075L38.0365 39.8883C37.3957 39.7089 36.3319 39.2603 34.5632 38.2798C33.4097 37.6454 32.4548 36.9981 31.641 36.3509C31.2116 36.0113 30.7759 35.6332 30.3273 35.1846C30.3144 35.1718 30.2952 35.1525 30.2824 35.1397C30.2696 35.1269 30.2504 35.1077 30.2375 35.0949C30.2247 35.082 30.2055 35.0628 30.1927 35.05C30.1799 35.0372 30.1606 35.018 30.1478 35.0051C29.7057 34.5566 29.3212 34.1208 28.9815 33.6914C28.3343 32.884 27.687 31.9227 27.0526 30.7692C26.0721 28.9941 25.6235 27.9303 25.4441 27.2959L25.4249 27.2831C25.3672 27.1036 25.3416 26.9242 25.3416 26.7447C25.3416 26.6678 25.3416 26.6102 25.3544 26.5589C25.4056 26.1424 25.6107 25.7258 25.9632 25.2965C25.9632 25.29 25.9696 25.29 25.9696 25.2836C26.4438 24.7582 26.9565 24.348 27.5012 24.0404C27.5012 24.0404 27.5076 24.0404 27.514 24.0404C28.0907 23.7392 28.6355 23.8418 29.0135 24.2839C29.0135 24.2839 29.789 25.2131 30.1222 25.6681C30.4362 26.0975 30.8592 26.7768 31.0706 27.1549C31.4487 27.8342 31.2116 28.5327 30.8399 28.8211L30.0902 29.417C29.7121 29.7246 29.7633 30.295 29.7633 30.295C29.7633 30.295 30.872 34.5117 35.0374 35.5691Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M26.4478 46.9652C26.3142 46.9652 26.1797 46.9352 26.0534 46.8752C25.7399 46.7235 25.5391 46.4064 25.5391 46.0565V41.513H22.813C21.31 41.513 20.0869 40.2899 20.0869 38.7869V24.2478C20.0869 22.7448 21.31 21.5217 22.813 21.5217H44.6217C46.1247 21.5217 47.3478 22.7448 47.3478 24.2478V38.7869C47.3478 40.2899 46.1247 41.513 44.6217 41.513H33.582L27.0157 46.7662C26.8512 46.898 26.6504 46.9652 26.4478 46.9652ZM22.813 23.3391C22.3114 23.3391 21.9043 23.7471 21.9043 24.2478V38.7869C21.9043 39.2876 22.3114 39.6956 22.813 39.6956H26.4478C26.9503 39.6956 27.3565 40.1018 27.3565 40.6043V44.1664L32.6951 39.8946C32.8568 39.7656 33.0558 39.6956 33.263 39.6956H44.6217C45.1233 39.6956 45.5304 39.2876 45.5304 38.7869V24.2478C45.5304 23.7471 45.1233 23.3391 44.6217 23.3391H22.813Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M40.9871 30.6091H26.448C25.9455 30.6091 25.5393 30.202 25.5393 29.7004C25.5393 29.1988 25.9455 28.7917 26.448 28.7917H40.9871C41.4896 28.7917 41.8958 29.1988 41.8958 29.7004C41.8958 30.202 41.4896 30.6091 40.9871 30.6091Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M33.7176 34.2437H26.448C25.9455 34.2437 25.5393 33.8366 25.5393 33.335C25.5393 32.8334 25.9455 32.4263 26.448 32.4263H33.7176C34.2201 32.4263 34.6263 32.8334 34.6263 33.335C34.6263 33.8366 34.2201 34.2437 33.7176 34.2437Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                    <div class=\"footer__box footer__box-1\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"flex-row footer__row\">\r\n                        <div class=\"footer__box footer__box-2\">\r\n                            <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"footer__img\">\r\n                            </a>\r\n                            <div class=\"footer__icons-block\">\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">О компании</div>\r\n                            <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                            <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                            <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                            <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                            <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                            <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Полезное</div>\r\n                            <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                            <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                            <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                            <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                            <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Спецпроекты</div>\r\n                            <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                            <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                            <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                            <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                            <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./chasto-zadavaemye-voprosy.html":
/*!****************************************!*\
  !*** ./chasto-zadavaemye-voprosy.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Помощь</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"delivery-issues\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"delivery-issues__card card\">\r\n                        <div class=\"container\">\r\n                            <h2 class=\"delivery-issues__title\">Отвечаем на вопросы доставки</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"container\">\r\n                    <div class=\"delivery-issues__subtitle\">Поиск в вопросах и ответах:</div>\r\n                    <div class=\"delivery-issues__box\">\r\n                        <input placeholder=\"Введите свой вопрос...\" type=\"text\" class=\"delivery-issues__input\">\r\n                        <div class=\"delivery-issues__label\">\r\n                            <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path\r\n                                    d=\"M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z\"\r\n                                    stroke=\"#01CD7D\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                                    stroke-linejoin=\"round\" />\r\n                                <path d=\"M21.9238 21.925L27.9989 28.0001\" stroke=\"#01CD7D\" stroke-width=\"1.5\"\r\n                                    stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                            </svg>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"questions\">\r\n                <div class=\"container\">\r\n                    <div class=\"questions__item\">\r\n                        <div class=\"questions__title title\">Виртуальный адрес в Великобритании</div>\r\n                        <div class=\"questions__text\">Что делать, если Вы забыли внести трек номер на сайт, а заказ уже\r\n                            пришел?</div>\r\n                        <div class=\"questions__text\">Как я узнаю что заказ пришел на склад?</div>\r\n                        <div class=\"questions__text\">Покупки на Eбeй / Ebay</div>\r\n                        <div class=\"questions__text\">Что делать после того, как я выкупил заказ самостоятельно на ваш\r\n                            адресс?</div>\r\n                        <div class=\"questions__text\">Как купить на виртуальный адрес?</div>\r\n                        <div class=\"questions__text\">Сколько стоит виртуальный адрес?</div>\r\n                        <div class=\"questions__text\">Как купить на виртуальный адрес?</div>\r\n                    </div>\r\n                    <div class=\"questions__item\">\r\n                        <div class=\"questions__title title\">Покупки в магазинаx Англии, скидки и промкода</div>\r\n                        <div class=\"questions__text\">Анонс скидочныx купонов и промкодов</div>\r\n                        <div class=\"questions__text\">Как узнать пришел ли заказ полностью?</div>\r\n                        <div class=\"questions__text\">Как узнать что заказ пришел на склад?</div>\r\n                        <div class=\"questions__text\">Что такое выкуп в компашке?</div>\r\n                        <div class=\"questions__text\">Как понять, что заказ куплен?</div>\r\n                        <div class=\"questions__text\">Можно ли купить с частичной предоплатой?</div>\r\n                        <div class=\"questions__text\">Что такое обычный заказ?</div>\r\n                    </div>\r\n                    <div class=\"questions__item\">\r\n                        <div class=\"questions__title title\">Доставка из Англии</div>\r\n                        <div class=\"questions__text\">Как часто вы отправляете посылки в россию?</div>\r\n                        <div class=\"questions__text\">Возможно ли доставка в страны, не указанные на сайте?</div>\r\n                        <div class=\"questions__text\">Сколько стоит доставка в Казаxстан и другие страны Азии, какие\r\n                            сроки?</div>\r\n                        <div class=\"questions__text\">Как дешевле всего отправить маленькую посылку в Россию?</div>\r\n                        <div class=\"questions__text\">Как дешевле всего отправить посылку в Россию?</div>\r\n                        <div class=\"questions__text\">Какая стоимость и сроки доставки из Англии в Россию?</div>\r\n                        <div class=\"questions__text\">Что такое обычный заказ?</div>\r\n                    </div>\r\n                    <div class=\"questions__item\">\r\n                        <div class=\"questions__title title\">Оплата</div>\r\n                        <div class=\"questions__text\">Где найти реквизиты для оплаты? и как оплатить?</div>\r\n                        <div class=\"questions__text\">Как оплатить через пайпал?</div>\r\n                        <a href=\"#\" class=\"questions__text\">Какие способы оплаты вы принимаете из России?</a>\r\n                    </div>\r\n                    <div class=\"questions__item\">\r\n                        <div class=\"questions__title title\">Общие вопросы</div>\r\n                        <div class=\"questions__text\">Какой ваш Емайл? Как с вами Связаться ? Какой график работы?</div>\r\n                        <div class=\"questions__text\">Я xочу разделить заказ на несколько получателей, как это сделать и\r\n                            сколько стоит?</div>\r\n                        <div class=\"questions__text\">Купил на Ebay, продавец не отправляет заказ, нужен самовывоз.\r\n                            Сколько стоит и как оформить?</div>\r\n                        <div class=\"questions__text\">Сколько стоит удаления вешалок и коробок?</div>\r\n                        <div class=\"questions__text\">Какой срок бесплатного xранения?</div>\r\n                        <div class=\"questions__text\">Сколько стоит консолидация?</div>\r\n                        <div class=\"questions__text\">Как расчитать стоимость услуг и доставки?</div>\r\n                    </div>\r\n                    <div class=\"questions__item\">\r\n                        <div class=\"questions__title title\">Посылки</div>\r\n                        <div class=\"questions__text\">Как отследить посылку, отправленную почтой России?</div>\r\n                        <div class=\"questions__text\">Где найти трек номер на отправленную вами посылку?</div>\r\n                        <div class=\"questions__text\">Что такое адресная книга? Зачем ее заполнять, если адрес есть в\r\n                            моем профайле?</div>\r\n                        <div class=\"questions__text\">Как заполнить декларацию, зачем ее заполнять, если лимит не\r\n                            превышен?</div>\r\n                        <div class=\"questions__text\">Как отправить посылку? Как сделать запрос? Сколько это стоит?</div>\r\n                        <div class=\"questions__text\">Как отправить несколько заказов в одной посылке? Сколько это стоит?\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"contact\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"contact__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row contact__row\">\r\n                                <h2 class=\"contact__title\">Остались вопросы? Спросите нас в соцсетях!</h2>\r\n                                <div class=\"contact__icons\">\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M44.4313 21.6147C41.6399 18.7645 37.7812 17.2173 33.8405 17.2173C25.4663 17.2173 18.7342 23.9763 18.8163 32.2011C18.8163 34.8069 19.5552 37.3314 20.7867 39.6115L18.6521 47.3477L26.6157 45.3119C28.8324 46.5334 31.2954 47.1034 33.7584 47.1034C42.0504 47.1034 48.7825 40.3444 48.7825 32.1196C48.7825 28.1294 47.2226 24.3834 44.4313 21.6147ZM33.8405 44.579C31.6238 44.579 29.4071 44.0089 27.5188 42.8689L27.0262 42.6246L22.2645 43.8461L23.496 39.2044L23.1676 38.7158C19.5552 32.934 21.2793 25.2792 27.1904 21.6961C33.1016 18.1131 40.7368 19.8232 44.3492 25.6864C47.9615 31.5496 46.2375 39.1229 40.3263 42.706C38.438 43.9275 36.1392 44.579 33.8405 44.579ZM41.0652 35.5398L40.1621 35.1327C40.1621 35.1327 38.8485 34.5626 38.0275 34.1555C37.9454 34.1555 37.8633 34.074 37.7812 34.074C37.5349 34.074 37.3707 34.1555 37.2065 34.2369C37.2065 34.2369 37.1244 34.3183 35.975 35.6213C35.8929 35.7841 35.7287 35.8656 35.5646 35.8656H35.4825C35.4004 35.8656 35.2362 35.7841 35.1541 35.7027L34.7436 35.5398C33.8405 35.1327 33.0195 34.6441 32.3627 33.9926C32.1985 33.8297 31.9522 33.6669 31.788 33.504C31.2133 32.934 30.6386 32.2825 30.2281 31.5496L30.146 31.3867C30.0639 31.3053 30.0639 31.2239 29.9818 31.061C29.9818 30.8981 29.9818 30.7353 30.0639 30.6538C30.0639 30.6538 30.3923 30.2467 30.6386 30.0024C30.8028 29.8395 30.8849 29.5952 31.0491 29.4323C31.2133 29.188 31.2954 28.8623 31.2133 28.618C31.1312 28.2108 30.146 26.0121 29.8997 25.5235C29.7355 25.2792 29.5713 25.1978 29.325 25.1163H29.0787C28.9145 25.1163 28.6682 25.1163 28.4219 25.1163C28.2577 25.1163 28.0935 25.1978 27.9293 25.1978L27.8472 25.2792C27.683 25.3606 27.5188 25.5235 27.3546 25.6049C27.1904 25.7678 27.1083 25.9307 26.9441 26.0935C26.3694 26.8265 26.041 27.7222 26.041 28.618C26.041 29.2695 26.2052 29.9209 26.4515 30.491L26.5336 30.7353C27.2725 32.2825 28.2577 33.6669 29.5713 34.8884L29.8997 35.2141C30.146 35.4584 30.3923 35.6213 30.5565 35.8656C32.2806 37.3314 34.251 38.39 36.4676 38.9601C36.7139 39.0415 37.0423 39.0415 37.2886 39.1229C37.5349 39.1229 37.8633 39.1229 38.1096 39.1229C38.5201 39.1229 39.0127 38.9601 39.3411 38.7972C39.5874 38.6343 39.7516 38.6343 39.9158 38.4715L40.08 38.3086C40.2442 38.1457 40.4084 38.0643 40.5726 37.9014C40.7368 37.7386 40.901 37.5757 40.9831 37.4128C41.1473 37.0871 41.2294 36.6799 41.3115 36.2727C41.3115 36.1099 41.3115 35.8656 41.3115 35.7027C41.3115 35.7027 41.2294 35.6213 41.0652 35.5398Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M45.6111 20.3423C44.8165 19.6117 41.5995 17.2727 34.4285 17.2406C34.4285 17.2406 25.9759 16.7279 21.8553 20.5089C19.5611 22.8031 18.7537 26.1547 18.6703 30.3201C18.587 34.4791 18.4781 42.2781 25.9951 44.3929H26.0015L25.9951 47.6163C25.9951 47.6163 25.9503 48.9236 26.809 49.1863C27.8471 49.5068 28.4623 48.5135 29.4556 47.4433C30.0003 46.8537 30.7501 45.995 31.3205 45.3349C36.46 45.7643 40.4139 44.7774 40.8625 44.63C41.9007 44.2903 47.7772 43.5406 48.732 35.7416C49.7189 27.7183 48.2514 22.6365 45.6111 20.3423ZM46.4827 35.1776C45.6752 41.6885 40.9138 42.0987 40.0359 42.3807C39.6642 42.5024 36.1908 43.3675 31.8203 43.0792C31.8203 43.0792 28.5649 47.0075 27.5524 48.0264C27.3921 48.1866 27.2063 48.2507 27.0845 48.2187C26.9115 48.1738 26.8602 47.9688 26.8667 47.6676C26.8667 47.2318 26.8923 42.3038 26.8923 42.3038C26.8859 42.3038 26.8859 42.3038 26.8923 42.3038C20.5288 40.5414 20.9005 33.9024 20.971 30.429C21.0414 26.9557 21.6951 24.104 23.6368 22.1879C27.1166 19.035 34.3004 19.5028 34.3004 19.5028C40.3627 19.5284 43.2657 21.3548 43.9386 21.9636C46.1751 23.8861 47.3158 28.4681 46.4827 35.1776Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M37.3827 30.5509C37.1712 30.5509 36.9918 30.3843 36.9789 30.1664C36.9084 28.7886 36.2612 28.1157 34.9411 28.0452C34.7168 28.0324 34.5438 27.8402 34.5566 27.6159C34.5694 27.3916 34.7616 27.2186 34.9859 27.2314C36.729 27.3275 37.7031 28.3272 37.7928 30.1216C37.8056 30.3458 37.6326 30.5381 37.4083 30.5445C37.3955 30.5509 37.3891 30.5509 37.3827 30.5509Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M39.4593 31.2434H39.4529C39.2286 31.237 39.0492 31.0512 39.0556 30.8269C39.0876 29.4427 38.6903 28.3212 37.8444 27.3984C37.0049 26.4756 35.845 25.9758 34.3134 25.8668C34.0891 25.8476 33.9225 25.6553 33.9417 25.4311C33.9609 25.2068 34.1532 25.0401 34.3775 25.0594C36.1077 25.1875 37.4727 25.7899 38.4468 26.8537C39.4273 27.9239 39.9015 29.2633 39.8694 30.8461C39.863 31.0704 39.6772 31.2434 39.4593 31.2434Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M41.5868 32.0765C41.3625 32.0765 41.1831 31.8971 41.1831 31.6728C41.1638 29.1927 40.4525 27.3023 39.0042 25.886C37.5752 24.489 35.7616 23.7777 33.6276 23.7584C33.4033 23.7584 33.2239 23.5726 33.2239 23.3483C33.2239 23.124 33.4097 22.9446 33.6276 22.9446C35.9795 22.9638 37.9789 23.752 39.5618 25.3029C41.151 26.8537 41.9649 28.9941 41.9905 31.66C41.9969 31.8907 41.8175 32.0765 41.5868 32.0765C41.5932 32.0765 41.5932 32.0765 41.5868 32.0765Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M35.0374 35.5691C35.0374 35.5691 35.6078 35.6203 35.9154 35.2422L36.5113 34.4925C36.7997 34.1208 37.4982 33.8837 38.1775 34.2618C38.5556 34.4732 39.2413 34.8962 39.6643 35.2102C40.1193 35.5434 41.0421 36.3124 41.0485 36.3189C41.4906 36.6905 41.5932 37.2352 41.292 37.8184C41.292 37.8184 41.292 37.8248 41.292 37.8312C40.9844 38.3759 40.5678 38.8886 40.0488 39.3628C40.0424 39.3628 40.0424 39.3692 40.0359 39.3692C39.6066 39.7281 39.1836 39.9332 38.7735 39.978C38.7222 39.9909 38.6646 39.9909 38.5877 39.9909C38.4082 39.9909 38.2288 39.9652 38.0494 39.9075L38.0365 39.8883C37.3957 39.7089 36.3319 39.2603 34.5632 38.2798C33.4097 37.6454 32.4548 36.9981 31.641 36.3509C31.2116 36.0113 30.7759 35.6332 30.3273 35.1846C30.3144 35.1718 30.2952 35.1525 30.2824 35.1397C30.2696 35.1269 30.2504 35.1077 30.2375 35.0949C30.2247 35.082 30.2055 35.0628 30.1927 35.05C30.1799 35.0372 30.1606 35.018 30.1478 35.0051C29.7057 34.5566 29.3212 34.1208 28.9815 33.6914C28.3343 32.884 27.687 31.9227 27.0526 30.7692C26.0721 28.9941 25.6235 27.9303 25.4441 27.2959L25.4249 27.2831C25.3672 27.1036 25.3416 26.9242 25.3416 26.7447C25.3416 26.6678 25.3416 26.6102 25.3544 26.5589C25.4056 26.1424 25.6107 25.7258 25.9632 25.2965C25.9632 25.29 25.9696 25.29 25.9696 25.2836C26.4438 24.7582 26.9565 24.348 27.5012 24.0404C27.5012 24.0404 27.5076 24.0404 27.514 24.0404C28.0907 23.7392 28.6355 23.8418 29.0135 24.2839C29.0135 24.2839 29.789 25.2131 30.1222 25.6681C30.4362 26.0975 30.8592 26.7768 31.0706 27.1549C31.4487 27.8342 31.2116 28.5327 30.8399 28.8211L30.0902 29.417C29.7121 29.7246 29.7633 30.295 29.7633 30.295C29.7633 30.295 30.872 34.5117 35.0374 35.5691Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M26.4478 46.9652C26.3142 46.9652 26.1797 46.9352 26.0534 46.8752C25.7399 46.7235 25.5391 46.4064 25.5391 46.0565V41.513H22.813C21.31 41.513 20.0869 40.2899 20.0869 38.7869V24.2478C20.0869 22.7448 21.31 21.5217 22.813 21.5217H44.6217C46.1247 21.5217 47.3478 22.7448 47.3478 24.2478V38.7869C47.3478 40.2899 46.1247 41.513 44.6217 41.513H33.582L27.0157 46.7662C26.8512 46.898 26.6504 46.9652 26.4478 46.9652ZM22.813 23.3391C22.3114 23.3391 21.9043 23.7471 21.9043 24.2478V38.7869C21.9043 39.2876 22.3114 39.6956 22.813 39.6956H26.4478C26.9503 39.6956 27.3565 40.1018 27.3565 40.6043V44.1664L32.6951 39.8946C32.8568 39.7656 33.0558 39.6956 33.263 39.6956H44.6217C45.1233 39.6956 45.5304 39.2876 45.5304 38.7869V24.2478C45.5304 23.7471 45.1233 23.3391 44.6217 23.3391H22.813Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M40.9871 30.6091H26.448C25.9455 30.6091 25.5393 30.202 25.5393 29.7004C25.5393 29.1988 25.9455 28.7917 26.448 28.7917H40.9871C41.4896 28.7917 41.8958 29.1988 41.8958 29.7004C41.8958 30.202 41.4896 30.6091 40.9871 30.6091Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M33.7176 34.2437H26.448C25.9455 34.2437 25.5393 33.8366 25.5393 33.335C25.5393 32.8334 25.9455 32.4263 26.448 32.4263H33.7176C34.2201 32.4263 34.6263 32.8334 34.6263 33.335C34.6263 33.8366 34.2201 34.2437 33.7176 34.2437Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                    <div class=\"footer__box footer__box-1\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"flex-row footer__row\">\r\n                        <div class=\"footer__box footer__box-2\">\r\n                            <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"footer__img\">\r\n                            </a>\r\n                            <div class=\"footer__icons-block\">\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">О компании</div>\r\n                            <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                            <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                            <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                            <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                            <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                            <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Полезное</div>\r\n                            <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                            <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                            <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                            <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                            <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Спецпроекты</div>\r\n                            <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                            <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                            <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                            <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                            <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n    </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hero__img.png */ "./images/hero__img.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/c-1.png */ "./images/c-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/c-2.png */ "./images/c-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/c-3.png */ "./images/c-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/c-4.png */ "./images/c-4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/c-5.png */ "./images/c-5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/c-6.png */ "./images/c-6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/russia.png */ "./images/russia.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/jacket.png */ "./images/jacket.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/britan.png */ "./images/britan.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/t-shirt.png */ "./images/t-shirt.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/jeans.png */ "./images/jeans.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/advantages-1.png */ "./images/advantages-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/advantages-2.png */ "./images/advantages-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/advantages-3.png */ "./images/advantages-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/advantages-4.png */ "./images/advantages-4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/eng-store-1.png */ "./images/eng-store-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/do-1.png */ "./images/do-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./images/do-2.png */ "./images/do-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./images/do-3.png */ "./images/do-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./images/fb-1.png */ "./images/fb-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./images/fb-2.png */ "./images/fb-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./images/fb-3.png */ "./images/fb-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./images/fb-4.png */ "./images/fb-4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./images/t1.png */ "./images/t1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./images/r1.png */ "./images/r1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./images/r2.png */ "./images/r2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./images/r3.png */ "./images/r3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./images/reviews1.png */ "./images/reviews1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./images/reviews2.png */ "./images/reviews2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./images/reviews3.png */ "./images/reviews3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./images/reviews4.png */ "./images/reviews4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ./js/slider.js */ "./js/slider.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);
var ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css\" />\r\n    <title>OkeyPost</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"hero\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"hero__bg card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"hero__row\">\r\n                                <div class=\"hero__text-block\">\r\n                                    <h1 class=\"hero__title card-title\">Доставка товаров из Великобритании в Россию</h1>\r\n                                    <div class=\"hero__text\">Начните экономить до 80% на шопинге. Регистрируйтесь в\r\n                                        OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных\r\n                                        брендов и безопасно отправлять вещи в Россию.\r\n                                    </div>\r\n                                    <a href=\"#\" class=\"main-button green-button\">Получить адрес в UK</a>\r\n                                </div>\r\n                                <div class=\"hero__img-block\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"hero__img\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"categories\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"categories__title title\">Насколько выгодно покупать?</h2>\r\n                </div>\r\n            </section>\r\n            <div class=\"slider-container slider-active\">\r\n                <div class=\"slider-wrapper\">\r\n                    <div class=\"slider\">\r\n                        <div class=\"slider-block \">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"categories__img\">\r\n                            <div class=\"categories__text\">Одежда</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slider\">\r\n                        <div class=\"slider-block \">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"categories__img\">\r\n                            <div class=\"categories__text\">Электроника</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slider\">\r\n                        <div class=\"slider-block \">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"categories__img\">\r\n                            <div class=\"categories__text\">Аксессуары</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slider\">\r\n                        <div class=\"slider-block \">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"categories__img\">\r\n                            <div class=\"categories__text\">Для детей</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slider\">\r\n                        <div class=\"slider-block \">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"categories__img\">\r\n                            <div class=\"categories__text\">Для спорта</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"slider\">\r\n                        <div class=\"slider-block \">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"categories__img\">\r\n                            <div class=\"categories__text\">Косметика</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"swiper-btn-prev\"></div>\r\n                <div class=\"swiper-btn-next\"></div>\r\n            </div>\r\n            <section class=\"product\">\r\n                <div class=\"container\">\r\n                    <div class=\"product__grid\">\r\n                        <div class=\"product__left-block\">\r\n                            <h2 class=\"product__main-text product__main-text-box\">Columbia Barlow Pass 550 Turbodown\r\n                                Jacket</h2>\r\n                            <div class=\"product__row\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"product__flag-img\">\r\n                                <div class=\"product__child-text\">\r\n                                    Цена в России\r\n                                    <div class=\"product__main-text\">7891,46₽</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"product__main-img-container\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"product__main-img slider-img\">\r\n                        </div>\r\n                        <div class=\"product__right-block\">\r\n                            <h2 class=\"product__main-text product__main-text-box product__main--dn\">Доставка одежды из Великобритании от\r\n                                <span class=\"product__main-text product__main-text--green\">£7.79</span>\r\n                            </h2>\r\n                            <div class=\"product__row\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" class=\"product__flag-img\">\r\n                                <div class=\"product__child-text\">\r\n                                    Цена в UK\r\n                                    <div class=\"product__main-text product__main-text--green\">£80.62</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"product__flex-slider flex-row\">\r\n                        <div class=\"product__js-left-block\">\r\n                            <div class=\"product__js-img-box\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"product__js-img slider-img\">\r\n                            </div>\r\n                            <svg class=\"product__arrow prew-arrow\" width=\"36\" height=\"16\" viewBox=\"0 0 36 16\"\r\n                                fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path\r\n                                    d=\"M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM36 9H1V7H36V9Z\"\r\n                                    fill=\"#01CD7D\" />\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"product__center-block\">\r\n                            <div class=\"product__child-text product__child-text--center\">Срок доставки примерно 10 дней\r\n                            </div>\r\n                            <div class=\"product__main-text product__child-text--center\">Вы экономите до <span\r\n                                    class=\"product__main-text product__main-text--green\">$119.56</span></div>\r\n                        </div>\r\n                        <div class=\"product__js-right-block\">\r\n                            <svg class=\"product__arrow next-arrow\" width=\"36\" height=\"16\" viewBox=\"0 0 36 16\"\r\n                                fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path\r\n                                    d=\"M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z\"\r\n                                    fill=\"#01CD7D\" />\r\n                            </svg>\r\n                            <div class=\"product__js-img-box\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"product__js-img slider-img\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"advantages\">\r\n                <div class=\"container\">\r\n                    <div class=\"flex-row advantages__row\">\r\n                        <div class=\"advantages__box\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"advantages__img\">\r\n                            <div class=\"advantages__text\">Экономия <br> до 70%</div>\r\n                        </div>\r\n                        <div class=\"advantages__box\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"advantages__img\">\r\n                            <div class=\"advantages__text\">Только подлинная продукция</div>\r\n                        </div>\r\n                        <div class=\"advantages__box\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" class=\"advantages__img\">\r\n                            <div class=\"advantages__text\">Оперативная доставка</div>\r\n                        </div>\r\n                        <div class=\"advantages__box\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" class=\"advantages__img\">\r\n                            <div class=\"advantages__text\">Огромный выбор товаров</div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"eng-store\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"eng-store__bg card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"eng-store__row\">\r\n                                <div class=\"eng-store__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" class=\"eng-store__img\">\r\n                                </div>\r\n                                <div class=\"eng-store__box\">\r\n                                    <h2 class=\"eng-store__title  card-title\">Поручите нашим мастерам шопинга оформить заказы в\r\n                                        английских магазинах и освободите время для более важных дел.</h2>\r\n                                    <div class=\"eng-store__text\">Такой способ покупки также подойдёт, если магазин\r\n                                        принимает только английские карты.</div>\r\n                                    <a href=\"#\" class=\"main-button green-button \">Попробовать</a>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"delivery\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"delivery__title title\">OkeyPost удобная и быстрая доставка посылок из Великобритании </h2>\r\n                    <div class=\"delivery__text\">Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши\r\n                        посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам\r\n                        надежно упакованными.</div>\r\n                    <div class=\"flex-row\">\r\n                        <div class=\"delivery__box\">\r\n                            <form class=\"delivery__form\">\r\n                                <div class=\"delivery__grid\">\r\n                                    <div class=\"delivery__items delivery__items-1\">\r\n                                        <div class=\"delivery__subtitle\">Страна:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M21.7511 17.3036L16.2377 13.9126C16.141 13.8531 16.033 13.8146 15.9206 13.7994L13.603 13.487C13.429 13.4636 13.2521 13.4971 13.0987 13.5827C12.9454 13.6682 12.8238 13.8011 12.7524 13.9615L11.3611 17.0834C11.2964 17.2285 11.2757 17.3895 11.3015 17.5463C11.3274 17.7032 11.3987 17.849 11.5066 17.9657L13.416 20.0309C13.5025 20.1245 13.5659 20.2372 13.6008 20.3598C13.6357 20.4825 13.6413 20.6116 13.6171 20.7368L13.2282 22.7474\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M6.59668 5.64746L5.68828 7.79548C5.60729 7.98701 5.60281 8.2023 5.67577 8.39703L6.84281 11.5118C6.8906 11.6393 6.96969 11.7528 7.07281 11.8418C7.17592 11.9308 7.29976 11.9924 7.43292 12.021L9.6094 12.4888C9.73017 12.5148 9.84343 12.5679 9.94057 12.6443C10.0377 12.7206 10.1162 12.818 10.17 12.9292L10.5565 13.7277C10.623 13.8651 10.7269 13.981 10.8563 14.0621C10.9856 14.1432 11.1352 14.1862 11.2878 14.1862H12.6521\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M15.4841 3.56982L16.432 5.26779C16.5216 5.4283 16.5542 5.61446 16.5243 5.79586C16.4944 5.97725 16.4039 6.14316 16.2676 6.26647L13.5345 8.73825C13.4881 8.7802 13.437 8.81665 13.3822 8.84689L12.1389 9.53348C12.0187 9.5999 11.8835 9.63473 11.7462 9.63473H9.57828C9.41841 9.63473 9.26209 9.68189 9.1289 9.77031C8.99571 9.85874 8.89156 9.98448 8.8295 10.1318L7.98376 12.1395\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <select name=\"Страна\" class=\"delivery__select\">\r\n\r\n                                            <option class=\"delivery__option\" value=\"Россия\">\r\n                                                Россия\r\n                                            </option>\r\n                                            <option class=\"delivery__option\" value=\"UK\">UK</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-2\">\r\n                                        <div class=\"delivery__subtitle\">Город:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M1.625 21.9358H24.375\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M14.6244 21.9358V4.06079C14.6244 3.8453 14.5388 3.63864 14.3864 3.48627C14.234 3.33389 14.0274 3.24829 13.8119 3.24829H4.06189C3.8464 3.24829 3.63974 3.33389 3.48737 3.48627C3.33499 3.63864 3.24939 3.8453 3.24939 4.06079V21.9358\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M22.7494 21.9358V10.5608C22.7494 10.3453 22.6638 10.1386 22.5114 9.98627C22.359 9.83389 22.1524 9.74829 21.9369 9.74829H14.6244\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M6.49939 7.31079H9.74939\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M8.12439 13.8108H11.3744\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M6.49939 17.8733H9.74939\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M17.8744 17.8733H19.4994\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M17.8744 13.8108H19.4994\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <input type=\"text\" placeholder=\"Москва\" class=\"delivery__input\">\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-3\">\r\n                                        <div class=\"delivery__subtitle\">Индекс:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M11.375 11.375H17.875\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M11.375 14.625H17.875\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M21.125 4.0625H4.875C4.42627 4.0625 4.0625 4.42627 4.0625 4.875V21.125C4.0625 21.5737 4.42627 21.9375 4.875 21.9375H21.125C21.5737 21.9375 21.9375 21.5737 21.9375 21.125V4.875C21.9375 4.42627 21.5737 4.0625 21.125 4.0625Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M8.125 4.0625V21.9375\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <input type=\"text\" placeholder=\"Введите индекс\" class=\"delivery__input\">\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-4\">\r\n                                        <div class=\"delivery__subtitle\">Вес посылки:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M8.9375 5.6875H6.5C6.05127 5.6875 5.6875 6.05127 5.6875 6.5V19.5C5.6875 19.9487 6.05127 20.3125 6.5 20.3125H8.9375C9.38623 20.3125 9.75 19.9487 9.75 19.5V6.5C9.75 6.05127 9.38623 5.6875 8.9375 5.6875Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M19.5 5.6875H17.0625C16.6138 5.6875 16.25 6.05127 16.25 6.5V19.5C16.25 19.9487 16.6138 20.3125 17.0625 20.3125H19.5C19.9487 20.3125 20.3125 19.9487 20.3125 19.5V6.5C20.3125 6.05127 19.9487 5.6875 19.5 5.6875Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M20.3125 8.125H22.75C22.9655 8.125 23.1722 8.2106 23.3245 8.36298C23.4769 8.51535 23.5625 8.72201 23.5625 8.9375V17.0625C23.5625 17.278 23.4769 17.4847 23.3245 17.637C23.1722 17.7894 22.9655 17.875 22.75 17.875H20.3125\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M5.6875 17.875H3.25C3.03451 17.875 2.82785 17.7894 2.67548 17.637C2.5231 17.4847 2.4375 17.278 2.4375 17.0625V8.9375C2.4375 8.72201 2.5231 8.51535 2.67548 8.36298C2.82785 8.2106 3.03451 8.125 3.25 8.125H5.6875\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M9.75 13H16.25\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M23.5625 13H25.1875\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M0.8125 13H2.4375\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <input type=\"text\" placeholder=\"0,5\" class=\"delivery__input\">\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-5\">\r\n                                        <div class=\"delivery__subtitle\">Дополнительные услуги:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M20.3125 22.75H5.68746C5.47198 22.75 5.26532 22.6644 5.11296 22.512C4.96059 22.3596 4.87499 22.153 4.875 21.9375V4.0625C4.87499 3.84702 4.96059 3.64036 5.11296 3.48798C5.26532 3.33561 5.47198 3.25001 5.68746 3.25H15.4378L21.125 8.9375V21.9375C21.125 22.153 21.0394 22.3596 20.887 22.512C20.7347 22.6644 20.528 22.75 20.3125 22.75V22.75Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M15.4375 3.25V8.9375H21.1258\" stroke=\"#1F2428\"\r\n                                                stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M9.75 13.8125H16.25\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M9.75 17.0625H16.25\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <select name=\"Страна\" class=\"delivery__select\">\r\n                                            <option class=\"delivery__option disabled\" value=\"\">Выберите услуги</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </form>\r\n                            <a href=\"#\" class=\"main-button green-button delivery__button\">Рассчитать</a>\r\n                        </div>\r\n                    </div>\r\n            </section>\r\n            <section class=\"delivery-options\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"delivery-options__title title\">Варианты доставки:</h2>\r\n                    <ul class=\"delivery-options__list\">\r\n                        <li class=\"delivery-options__items\">\r\n                            <div class=\"delivery-options__left-block\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" class=\"delivery-options__img\">\r\n                                <div class=\"delivery-options__text\">Почта России</div>\r\n                            </div>\r\n                            <div class=\"delivery-options__right-block\">\r\n                                <div class=\"delivery-options__right-box delivery-options__box-1\">\r\n                                    <div class=\"delivery-options__small-text\">Сроки:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">10-14 дней</div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-2\">\r\n                                    <div class=\"delivery-options__small-text\">Стоимость доставки:</div>\r\n                                    <div class=\"delivery-options__text  delivery-options__text--size\">от £27.00\r\n                                        <svg class=\"delivery-options__info\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#C0C9D7\" />\r\n                                            <path\r\n                                                d=\"M9.37987 10.6423L9.27284 11.0797C8.95178 11.2065 8.69531 11.3029 8.50433 11.3692C8.31315 11.4357 8.091 11.4688 7.8379 11.4688C7.44922 11.4688 7.14689 11.3736 6.93127 11.1845C6.71565 10.9946 6.6078 10.754 6.6078 10.4621C6.6078 10.3491 6.61563 10.2329 6.6319 10.1145C6.6483 9.99593 6.67439 9.86241 6.71009 9.71317L7.11133 8.29299C7.14703 8.157 7.17737 8.02814 7.20167 7.90629C7.22632 7.7852 7.23819 7.67378 7.23819 7.57349C7.23819 7.39212 7.20064 7.26526 7.12589 7.19394C7.05113 7.12282 6.90848 7.08671 6.6967 7.08671C6.59297 7.08671 6.48636 7.10332 6.37769 7.13545C6.26854 7.16771 6.17525 7.19888 6.09692 7.22785L6.20422 6.79001C6.46707 6.68299 6.71832 6.59135 6.95866 6.51528C7.199 6.43902 7.42608 6.40085 7.64088 6.40085C8.02689 6.40085 8.32475 6.49414 8.53392 6.68072C8.74309 6.86745 8.84764 7.1095 8.84764 7.40777C8.84764 7.46949 8.84077 7.57823 8.82602 7.73364C8.8116 7.88941 8.78476 8.03212 8.74563 8.16194L8.3461 9.57643C8.31335 9.69004 8.2839 9.81992 8.2583 9.96607C8.23187 10.1113 8.21924 10.2222 8.21924 10.2966C8.21924 10.4844 8.26111 10.6127 8.34507 10.6808C8.42964 10.749 8.57531 10.7829 8.78222 10.7829C8.87935 10.7829 8.98988 10.7657 9.11269 10.7318C9.23516 10.698 9.32447 10.6683 9.37987 10.6423ZM9.48119 4.70381C9.48119 4.95025 9.38831 5.16073 9.20166 5.33379C9.01548 5.50747 8.79114 5.59437 8.5287 5.59437C8.26544 5.59437 8.04055 5.50747 7.85225 5.33379C7.66429 5.16066 7.5701 4.95025 7.5701 4.70381C7.5701 4.45784 7.66429 4.24702 7.85225 4.07177C8.0402 3.89678 8.26551 3.80933 8.5287 3.80933C8.79107 3.80933 9.01548 3.89699 9.20166 4.07177C9.38845 4.24702 9.48119 4.45791 9.48119 4.70381Z\"\r\n                                                fill=\"#F2F6FC\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-3\">\r\n                                    <div class=\"delivery-options__small-text\">Итого:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">£41.99</div>\r\n                                </div>\r\n                                <svg class=\"delivery-options__arrow-down\" width=\"16\" height=\"9\" viewBox=\"0 0 16 9\"\r\n                                    fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M1 1L8 8L15 1\" stroke=\"#01CD7D\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                                        stroke-linejoin=\"round\" />\r\n                                </svg>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"delivery-options__items\">\r\n                            <div class=\"delivery-options__left-block\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"delivery-options__img\">\r\n                                <div class=\"delivery-options__text\">EMS ПОЧТА РОССИЯ</div>\r\n                            </div>\r\n                            <div class=\"delivery-options__right-block\">\r\n                                <div class=\"delivery-options__right-box delivery-options__box-1\">\r\n                                    <div class=\"delivery-options__small-text\">Сроки:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">9-12 дней</div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-2\">\r\n                                    <div class=\"delivery-options__small-text\">Стоимость доставки:</div>\r\n                                    <div class=\"delivery-options__text  delivery-options__text--size\">от £40.00\r\n                                        <svg class=\"delivery-options__info\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#C0C9D7\" />\r\n                                            <path\r\n                                                d=\"M9.37987 10.6423L9.27284 11.0797C8.95178 11.2065 8.69531 11.3029 8.50433 11.3692C8.31315 11.4357 8.091 11.4688 7.8379 11.4688C7.44922 11.4688 7.14689 11.3736 6.93127 11.1845C6.71565 10.9946 6.6078 10.754 6.6078 10.4621C6.6078 10.3491 6.61563 10.2329 6.6319 10.1145C6.6483 9.99593 6.67439 9.86241 6.71009 9.71317L7.11133 8.29299C7.14703 8.157 7.17737 8.02814 7.20167 7.90629C7.22632 7.7852 7.23819 7.67378 7.23819 7.57349C7.23819 7.39212 7.20064 7.26526 7.12589 7.19394C7.05113 7.12282 6.90848 7.08671 6.6967 7.08671C6.59297 7.08671 6.48636 7.10332 6.37769 7.13545C6.26854 7.16771 6.17525 7.19888 6.09692 7.22785L6.20422 6.79001C6.46707 6.68299 6.71832 6.59135 6.95866 6.51528C7.199 6.43902 7.42608 6.40085 7.64088 6.40085C8.02689 6.40085 8.32475 6.49414 8.53392 6.68072C8.74309 6.86745 8.84764 7.1095 8.84764 7.40777C8.84764 7.46949 8.84077 7.57823 8.82602 7.73364C8.8116 7.88941 8.78476 8.03212 8.74563 8.16194L8.3461 9.57643C8.31335 9.69004 8.2839 9.81992 8.2583 9.96607C8.23187 10.1113 8.21924 10.2222 8.21924 10.2966C8.21924 10.4844 8.26111 10.6127 8.34507 10.6808C8.42964 10.749 8.57531 10.7829 8.78222 10.7829C8.87935 10.7829 8.98988 10.7657 9.11269 10.7318C9.23516 10.698 9.32447 10.6683 9.37987 10.6423ZM9.48119 4.70381C9.48119 4.95025 9.38831 5.16073 9.20166 5.33379C9.01548 5.50747 8.79114 5.59437 8.5287 5.59437C8.26544 5.59437 8.04055 5.50747 7.85225 5.33379C7.66429 5.16066 7.5701 4.95025 7.5701 4.70381C7.5701 4.45784 7.66429 4.24702 7.85225 4.07177C8.0402 3.89678 8.26551 3.80933 8.5287 3.80933C8.79107 3.80933 9.01548 3.89699 9.20166 4.07177C9.38845 4.24702 9.48119 4.45791 9.48119 4.70381Z\"\r\n                                                fill=\"#F2F6FC\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-3\">\r\n                                    <div class=\"delivery-options__small-text\">Итого:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">£54.55</div>\r\n                                </div>\r\n                                <svg class=\"delivery-options__arrow-down\" width=\"16\" height=\"9\" viewBox=\"0 0 16 9\"\r\n                                    fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M1 1L8 8L15 1\" stroke=\"#01CD7D\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                                        stroke-linejoin=\"round\" />\r\n                                </svg>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"delivery-options__items\">\r\n                            <div class=\"delivery-options__left-block\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" class=\"delivery-options__img\">\r\n                                <div class=\"delivery-options__text\">ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</div>\r\n                            </div>\r\n                            <div class=\"delivery-options__right-block\">\r\n                                <div class=\"delivery-options__right-box delivery-options__box-1\">\r\n                                    <div class=\"delivery-options__small-text\">Сроки:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">10-14 дней</div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-2\">\r\n                                    <div class=\"delivery-options__small-text\">Стоимость доставки:</div>\r\n                                    <div class=\"delivery-options__text  delivery-options__text--size\">от £13.00\r\n                                        <svg class=\"delivery-options__info\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#C0C9D7\" />\r\n                                            <path\r\n                                                d=\"M9.37987 10.6423L9.27284 11.0797C8.95178 11.2065 8.69531 11.3029 8.50433 11.3692C8.31315 11.4357 8.091 11.4688 7.8379 11.4688C7.44922 11.4688 7.14689 11.3736 6.93127 11.1845C6.71565 10.9946 6.6078 10.754 6.6078 10.4621C6.6078 10.3491 6.61563 10.2329 6.6319 10.1145C6.6483 9.99593 6.67439 9.86241 6.71009 9.71317L7.11133 8.29299C7.14703 8.157 7.17737 8.02814 7.20167 7.90629C7.22632 7.7852 7.23819 7.67378 7.23819 7.57349C7.23819 7.39212 7.20064 7.26526 7.12589 7.19394C7.05113 7.12282 6.90848 7.08671 6.6967 7.08671C6.59297 7.08671 6.48636 7.10332 6.37769 7.13545C6.26854 7.16771 6.17525 7.19888 6.09692 7.22785L6.20422 6.79001C6.46707 6.68299 6.71832 6.59135 6.95866 6.51528C7.199 6.43902 7.42608 6.40085 7.64088 6.40085C8.02689 6.40085 8.32475 6.49414 8.53392 6.68072C8.74309 6.86745 8.84764 7.1095 8.84764 7.40777C8.84764 7.46949 8.84077 7.57823 8.82602 7.73364C8.8116 7.88941 8.78476 8.03212 8.74563 8.16194L8.3461 9.57643C8.31335 9.69004 8.2839 9.81992 8.2583 9.96607C8.23187 10.1113 8.21924 10.2222 8.21924 10.2966C8.21924 10.4844 8.26111 10.6127 8.34507 10.6808C8.42964 10.749 8.57531 10.7829 8.78222 10.7829C8.87935 10.7829 8.98988 10.7657 9.11269 10.7318C9.23516 10.698 9.32447 10.6683 9.37987 10.6423ZM9.48119 4.70381C9.48119 4.95025 9.38831 5.16073 9.20166 5.33379C9.01548 5.50747 8.79114 5.59437 8.5287 5.59437C8.26544 5.59437 8.04055 5.50747 7.85225 5.33379C7.66429 5.16066 7.5701 4.95025 7.5701 4.70381C7.5701 4.45784 7.66429 4.24702 7.85225 4.07177C8.0402 3.89678 8.26551 3.80933 8.5287 3.80933C8.79107 3.80933 9.01548 3.89699 9.20166 4.07177C9.38845 4.24702 9.48119 4.45791 9.48119 4.70381Z\"\r\n                                                fill=\"#F2F6FC\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-3\">\r\n                                    <div class=\"delivery-options__small-text\">Итого:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">£90.50</div>\r\n                                </div>\r\n                                <svg class=\"delivery-options__arrow-down\" width=\"16\" height=\"9\" viewBox=\"0 0 16 9\"\r\n                                    fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M1 1L8 8L15 1\" stroke=\"#01CD7D\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                                        stroke-linejoin=\"round\" />\r\n                                </svg>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </section>\r\n            <section class=\"fast-buy\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"fast-buy__title title\">4 простых шага для ваших покупок в Великобритании </h2>\r\n                    <ul class=\"fast-buy__list\">\r\n                        <li class=\"fast-buy__item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" class=\"fast-buy__img\">\r\n                            <div class=\"fast-buy__subtitle\">вы ВЫБИРАЕТЕ <br> ТОВАР</div>\r\n                            <div class=\"fast-buy__item-text\">в английском магазине, оплачиваете и <br> указываете <a\r\n                                    href=\"#\" class=\"fast-buy--green-text\">адрес склада</a> OkeyPost</div>\r\n                        </li>\r\n                        <li class=\"fast-buy__item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\" class=\"fast-buy__img\">\r\n                            <div class=\"fast-buy__subtitle\">ПОКУПКИ ПРИХОДЯТ <br> НА СКЛАД</div>\r\n                            <div class=\"fast-buy__item-text\">и появляются в вашем личном кабинете <br> на нашем сайте\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"fast-buy__item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\" class=\"fast-buy__img\">\r\n                            <div class=\"fast-buy__subtitle\">ОТПРАВЛЯЕМ ИХ <br> К ВАМ ДОМОЙ</div>\r\n                            <div class=\"fast-buy__item-text\">в надежной упаковке, по выгодной <br> цене и очень быстро\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"fast-buy__item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\" class=\"fast-buy__img\">\r\n                            <div class=\"fast-buy__subtitle\">ЗАБИРАЕТЕ <br> свою ПОСЫЛКУ</div>\r\n                            <div class=\"fast-buy__item-text\">в пункте выдачи, на почте <br> или с курьером</div>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"fast-buy__text\">Не хотите разбираться самостоятельно, наши мастера шопинга с радостью\r\n                        купят все товары за вас.</div>\r\n                    <a href=\"#\" class=\"main-button green-button\">Быстрая покупка</a>\r\n                </div>\r\n            </section>\r\n            <section class=\"tour\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"tour__card card\">\r\n                        <div class=\"container tour__row\">\r\n                            <div class=\"tour__img-block\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"\" class=\"tour__img\">\r\n                            </div>\r\n                            <div class=\"tour__box\">\r\n                                <h2 class=\"tour__title title  card-title\">Виртуальный тур по нашему складу в реальном времени</h2>\r\n                                <div class=\"tour__text\">Вы можете всегда посмотреть на нашу слаженую работу на складе\r\n                                </div>\r\n                                <a href=\"#\" class=\"main-button green-button\">Попробовать</a>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"reviews\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"reviews__title title\">120 000 довольных клиентов в России уже сделали свой выбор</h2>\r\n                    <div class=\"reviews__text\">За последний год десятки тысяч наших клиентов заказали товары из Англии и\r\n                        оставили 19 633 отзыва</div>\r\n                    <div class=\"reviews__grid-1\">\r\n                        <div class=\"reviews__row-box\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"\" class=\"reviews__icon\">\r\n                            <div class=\"reviews__row-text\">Больше не значит дороже</div>\r\n                            <div class=\"reviews__small-text\">С ростом веса посылки цена за каждые 0.5 кг уменьшается в\r\n                                прогрессии.</div>\r\n                        </div>\r\n                        <div class=\"reviews__row-box\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"\" class=\"reviews__icon\">\r\n                            <div class=\"reviews__row-text\">Быстрая обработка посылок</div>\r\n                            <div class=\"reviews__small-text\">Посылка обрабатывается не дольше 48 часов после поступления\r\n                                на склад.</div>\r\n                        </div>\r\n                        <div class=\"reviews__row-box\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\" class=\"reviews__icon\">\r\n                            <div class=\"reviews__row-text\">SMS-уведомления</div>\r\n                            <div class=\"reviews__small-text\">Отслеживайте весь процесс с помощью sms-уведомлений.</div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <h2 class=\"reviews__subtitle\">Отзывы и цитаты блогеров:</h2>\r\n                    <div class=\"reviews__grid\">\r\n                        <div class=\"reviews__grid-card\">\r\n                            <div class=\"reviews__row\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"\" class=\"reviews__card-img\">\r\n                                <div class=\"reviews__right-block\">\r\n                                    <div class=\"reviews__card-title\">NIKOLAY S</div>\r\n                                    <svg class=\"reviews__stars\" width=\"89\" height=\"17\" viewBox=\"0 0 89 17\" fill=\"none\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\">\r\n                                        <path\r\n                                            d=\"M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                    </svg>\r\n                                    <div class=\"reviews__card-text\">Ваша доставка самая быстрая и дешёвая!!!</div>\r\n                                    <div class=\"reviews__info-block\">\r\n                                        <div class=\"reviews__info-box\">\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Дата:</div>\r\n                                                <div class=\"reviews__info-text\">16 Ноября 2021</div>\r\n                                            </div>\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Город:</div>\r\n                                                <div class=\"reviews__info-text\">Санкт-Петербург</div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"reviews__grid-card\">\r\n                            <div class=\"reviews__row\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" alt=\"\" class=\"reviews__card-img\">\r\n                                <div class=\"reviews__right-block\">\r\n                                    <div class=\"reviews__card-title\">DMITRIY D</div>\r\n                                    <svg class=\"reviews__stars\" width=\"89\" height=\"17\" viewBox=\"0 0 89 17\" fill=\"none\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\">\r\n                                        <path\r\n                                            d=\"M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                    </svg>\r\n                                    <div class=\"reviews__card-text\">Пуховик Levi’s c eBay. Всё приехало быстро и целым.\r\n                                    </div>\r\n                                    <div class=\"reviews__info-block\">\r\n                                        <div class=\"reviews__info-box\">\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Дата:</div>\r\n                                                <div class=\"reviews__info-text\">16 Ноября 2021</div>\r\n                                            </div>\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Город:</div>\r\n                                                <div class=\"reviews__info-text\">Москва</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"reviews__grid-card\">\r\n                            <div class=\"reviews__row\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"\" class=\"reviews__card-img\">\r\n                                <div class=\"reviews__right-block\">\r\n                                    <div class=\"reviews__card-title\">VLADIMIR E</div>\r\n                                    <svg class=\"reviews__stars\" width=\"89\" height=\"17\" viewBox=\"0 0 89 17\" fill=\"none\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\">\r\n                                        <path\r\n                                            d=\"M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                    </svg>\r\n                                    <div class=\"reviews__card-text\">Огонь, как всегда! Отдельное спасибо за\r\n                                        доп.упаковку, часики от Apple пришли в простом бумажном пакете )</div>\r\n                                    <div class=\"reviews__info-block\">\r\n                                        <div class=\"reviews__info-box\">\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Дата:</div>\r\n                                                <div class=\"reviews__info-text\">16 Ноября 2021</div>\r\n                                            </div>\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Город:</div>\r\n                                                <div class=\"reviews__info-text\">Санкт-Петербург</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"reviews__grid-card\">\r\n                            <div class=\"reviews__row\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" alt=\"\" class=\"reviews__card-img\">\r\n                                <div class=\"reviews__right-block\">\r\n                                    <div class=\"reviews__card-title\">Оксана</div>\r\n                                    <svg class=\"reviews__stars\" width=\"89\" height=\"17\" viewBox=\"0 0 89 17\" fill=\"none\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\">\r\n                                        <path\r\n                                            d=\"M8.41892 0L10.8932 5.01339L16.4258 5.81733L12.4224 9.71971L13.3674 15.23L8.41892 12.6284L3.4704 15.23L4.41548 9.71971L0.412051 5.81733L5.94466 5.01339L8.41892 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M26.4594 0L28.9337 5.01339L34.4663 5.81733L30.4629 9.71971L31.408 15.23L26.4594 12.6284L21.5109 15.23L22.456 9.71971L18.4526 5.81733L23.9852 5.01339L26.4594 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M44.5 0L46.9742 5.01339L52.5068 5.81733L48.5034 9.71971L49.4485 15.23L44.5 12.6284L39.5515 15.23L40.4965 9.71971L36.4931 5.81733L42.0257 5.01339L44.5 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M62.5406 0L65.0148 5.01339L70.5474 5.81733L66.544 9.71971L67.4891 15.23L62.5406 12.6284L57.592 15.23L58.5371 9.71971L54.5337 5.81733L60.0663 5.01339L62.5406 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                        <path\r\n                                            d=\"M80.5811 0L83.0553 5.01339L88.588 5.81733L84.5845 9.71971L85.5296 15.23L80.5811 12.6284L75.6326 15.23L76.5777 9.71971L72.5742 5.81733L78.1068 5.01339L80.5811 0Z\"\r\n                                            fill=\"#FFA009\" />\r\n                                    </svg>\r\n                                    <div class=\"reviews__card-text\">Очень быстро, надежно! Как всегда большое спасибо за\r\n                                        работу!</div>\r\n                                    <div class=\"reviews__info-block\">\r\n                                        <div class=\"reviews__info-box\">\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Дата:</div>\r\n                                                <div class=\"reviews__info-text\">16 Ноября 2021</div>\r\n                                            </div>\r\n                                            <div class=\"reviews__info-flex\">\r\n                                                <div class=\"reviews__info-bold-text\">Город:</div>\r\n                                                <div class=\"reviews__info-text\">Odintsovo</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <a href=\"#\" class=\"main-button green-button reviews__button\">Все отзывы</a>\r\n                </div>\r\n            </section>\r\n            <section class=\"info\">\r\n                <div class=\"container\">\r\n                    <div class=\"info__title title\">Ваш личный адрес в Великобритании для покупок</div>\r\n                    <div class=\"info__text\">С нами вы получаете целых два адреса в UK! У нас есть два склада для приема\r\n                        посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который\r\n                        обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают\r\n                        одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете\r\n                        максимальную выгоду! </div>\r\n                    <div class=\"info__text\">При доставке из UK в Россию все ваши товары обязательно страхуются. Прием\r\n                        посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас\r\n                        полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну.\r\n                        Это необходимо для снижения стоимости доставки посылок из UK в Россию.</div>\r\n                    <div class=\"info__text\"> У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть\r\n                        какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых\r\n                        хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.</div>\r\n                    <div class=\"info__text\">Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда\r\n                        найдете информацию о лучших скидках fyukbqcrb[ магазинов. Не обязательно заходить в Черную\r\n                        пятницу или Prime Day, крутые акции проходят каждый день!</div>\r\n                </div>\r\n            </section>\r\n            <section class=\"subscription\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"subscription__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row subscription__row\">\r\n                                <h2 class=\"subscription__title  card-title\">Подпишитеть и будьте в курсе всех скидок и акций\r\n                                    магазинов Великобритании!</h2>\r\n                                    <div class=\"flex-row subscription__row-padding\">\r\n                                        <div class=\"subscription__input-box\">\r\n                                            <i class=\"subscription__svg\">\r\n                                                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\"\r\n                                                    xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                    <path\r\n                                                        d=\"M3.25 9.75V20.3125C3.25 20.528 3.3356 20.7347 3.48798 20.887C3.64035 21.0394 3.84701 21.125 4.0625 21.125H21.9375C22.153 21.125 22.3597 21.0394 22.512 20.887C22.6644 20.7347 22.75 20.528 22.75 20.3125V9.75L13 3.25L3.25 9.75Z\"\r\n                                                        stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                                    <path d=\"M22.75 9.75L14.7728 15.4375H11.2272L3.25 9.75\" stroke=\"white\"\r\n                                                        stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                                </svg>\r\n                                            </i>\r\n                                            <input type=\"email\" placeholder=\"Введите ваш email\" class=\"subscription__input\">\r\n                                        </div>\r\n                                        <a href=\"#\" class=\"main-button green-button subscription__button\">Подписаться</a>\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                    <div class=\"footer__box footer__box-1\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"flex-row footer__row\">\r\n                        <div class=\"footer__box footer__box-2\">\r\n                            <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\" class=\"footer__img\">\r\n                            </a>\r\n                            <div class=\"footer__icons-block\">\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">О компании</div>\r\n                            <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                            <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                            <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                            <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                            <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                            <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Полезное</div>\r\n                            <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                            <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                            <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                            <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                            <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Спецпроекты</div>\r\n                            <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                            <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                            <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                            <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                            <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n    </div>\r\n    <" + "script src=\"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js\"><" + "/script>\r\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\"><" + "/script> \r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./kak-pokupat.html":
/*!**************************!*\
  !*** ./kak-pokupat.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hb1.png */ "./images/hb1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hb2.png */ "./images/hb2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hb3.png */ "./images/hb3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hb4.png */ "./images/hb4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hb5.png */ "./images/hb5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Как покупать</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"addresses\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"addresses__card card\">\r\n                        <div class=\"container\">\r\n                            <h2 class=\"addresses__title\">Научим покупать в Великобритании!</h2>\r\n                            <div class=\"addresses__text\">и экономить до 70%</div>\r\n                            <a href=\"#\" class=\"main-button green-button \">Попробовать</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"how-buy\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"how-buy__title\">Покупать в Великобритании очень просто</h2>\r\n                    <div class=\"how-buy__text\">Английские магазины не доставляют в Россию, но это не проблема. С\r\n                        OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки,\r\n                        надежно упакуем и отправим их к вам домой.</div>\r\n                    <div class=\"how-buy__list\">\r\n                        <div class=\"flex-row how-buy__items\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"how-buy__img\">\r\n                            <div class=\"how-buy__box\">\r\n                                <div class=\"how-buy__header\">\r\n                                    <div class=\"how-buy__number\">01</div>\r\n                                    <div class=\"how-buy__header-text\">Получаем адрес для покупок в магазинах\r\n                                        Великобритании </div>\r\n                                </div>\r\n                                <div class=\"how-buy__small-text\">Okeypost поможет притвориться американцем и не\r\n                                    переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации\r\n                                    вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении\r\n                                    заказов в интернет-магазинах.</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flex-row how-buy__items\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"how-buy__img\">\r\n                            <div class=\"how-buy__box\">\r\n                                <div class=\"how-buy__header\">\r\n                                    <div class=\"how-buy__number\">02</div>\r\n                                    <div class=\"how-buy__header-text\">Идём за покупками в онлайн-магазины</div>\r\n                                </div>\r\n                                <div class=\"how-buy__small-text\">Выбираем нужные товары в магазинах Англии.\r\n                                    Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного\r\n                                    из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот\r\n                                    список того, <span class=\"how-buy__small-text green-text\">что покупать\r\n                                        нельзя.</span></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flex-row how-buy__items\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"how-buy__img\">\r\n                            <div class=\"how-buy__box\">\r\n                                <div class=\"how-buy__header\">\r\n                                    <div class=\"how-buy__number\">03</div>\r\n                                    <div class=\"how-buy__header-text\">Следим за перемещением посылки до склада</div>\r\n                                </div>\r\n                                <div class=\"how-buy__small-text\">После оформление заказа магазин пришлет трек-номер\r\n                                    посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к\r\n                                    нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flex-row how-buy__items\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"how-buy__img\">\r\n                            <div class=\"how-buy__box\">\r\n                                <div class=\"how-buy__header\">\r\n                                    <div class=\"how-buy__number\">04</div>\r\n                                    <div class=\"how-buy__header-text\">Оплачиваем доставку и покупки отправляются домой\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"how-buy__small-text\">Мы сообщим, когда ваши покупки поступят на склад. Вы\r\n                                    сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так\r\n                                    выгоднее). До 30 дней покупки будут храниться бесплатно.\r\n                                    Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все\r\n                                    упакуем и отправим вам, сообщив трек-номер.</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"flex-row how-buy__items\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"how-buy__img\">\r\n                            <div class=\"how-buy__box\">\r\n                                <div class=\"how-buy__header\">\r\n                                    <div class=\"how-buy__number\">05</div>\r\n                                    <div class=\"how-buy__header-text\">Получаем посылку и спешим сделать новый заказ\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"how-buy__small-text\">Примерно через 2 недели посылка приедет к вам домой, в\r\n                                    пункт выдачи заказов или на почту. Получаем покупки и радуемся :)</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a href=\"#\" class=\"main-button green-button \">Получить адрес в UK</a>\r\n                </div>\r\n            </section>\r\n            <section class=\"contact\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"contact__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row contact__row\">\r\n                                <h2 class=\"contact__title\">Остались вопросы? Спросите нас в соцсетях!</h2>\r\n                                <div class=\"contact__icons\">\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M44.4313 21.6147C41.6399 18.7645 37.7812 17.2173 33.8405 17.2173C25.4663 17.2173 18.7342 23.9763 18.8163 32.2011C18.8163 34.8069 19.5552 37.3314 20.7867 39.6115L18.6521 47.3477L26.6157 45.3119C28.8324 46.5334 31.2954 47.1034 33.7584 47.1034C42.0504 47.1034 48.7825 40.3444 48.7825 32.1196C48.7825 28.1294 47.2226 24.3834 44.4313 21.6147ZM33.8405 44.579C31.6238 44.579 29.4071 44.0089 27.5188 42.8689L27.0262 42.6246L22.2645 43.8461L23.496 39.2044L23.1676 38.7158C19.5552 32.934 21.2793 25.2792 27.1904 21.6961C33.1016 18.1131 40.7368 19.8232 44.3492 25.6864C47.9615 31.5496 46.2375 39.1229 40.3263 42.706C38.438 43.9275 36.1392 44.579 33.8405 44.579ZM41.0652 35.5398L40.1621 35.1327C40.1621 35.1327 38.8485 34.5626 38.0275 34.1555C37.9454 34.1555 37.8633 34.074 37.7812 34.074C37.5349 34.074 37.3707 34.1555 37.2065 34.2369C37.2065 34.2369 37.1244 34.3183 35.975 35.6213C35.8929 35.7841 35.7287 35.8656 35.5646 35.8656H35.4825C35.4004 35.8656 35.2362 35.7841 35.1541 35.7027L34.7436 35.5398C33.8405 35.1327 33.0195 34.6441 32.3627 33.9926C32.1985 33.8297 31.9522 33.6669 31.788 33.504C31.2133 32.934 30.6386 32.2825 30.2281 31.5496L30.146 31.3867C30.0639 31.3053 30.0639 31.2239 29.9818 31.061C29.9818 30.8981 29.9818 30.7353 30.0639 30.6538C30.0639 30.6538 30.3923 30.2467 30.6386 30.0024C30.8028 29.8395 30.8849 29.5952 31.0491 29.4323C31.2133 29.188 31.2954 28.8623 31.2133 28.618C31.1312 28.2108 30.146 26.0121 29.8997 25.5235C29.7355 25.2792 29.5713 25.1978 29.325 25.1163H29.0787C28.9145 25.1163 28.6682 25.1163 28.4219 25.1163C28.2577 25.1163 28.0935 25.1978 27.9293 25.1978L27.8472 25.2792C27.683 25.3606 27.5188 25.5235 27.3546 25.6049C27.1904 25.7678 27.1083 25.9307 26.9441 26.0935C26.3694 26.8265 26.041 27.7222 26.041 28.618C26.041 29.2695 26.2052 29.9209 26.4515 30.491L26.5336 30.7353C27.2725 32.2825 28.2577 33.6669 29.5713 34.8884L29.8997 35.2141C30.146 35.4584 30.3923 35.6213 30.5565 35.8656C32.2806 37.3314 34.251 38.39 36.4676 38.9601C36.7139 39.0415 37.0423 39.0415 37.2886 39.1229C37.5349 39.1229 37.8633 39.1229 38.1096 39.1229C38.5201 39.1229 39.0127 38.9601 39.3411 38.7972C39.5874 38.6343 39.7516 38.6343 39.9158 38.4715L40.08 38.3086C40.2442 38.1457 40.4084 38.0643 40.5726 37.9014C40.7368 37.7386 40.901 37.5757 40.9831 37.4128C41.1473 37.0871 41.2294 36.6799 41.3115 36.2727C41.3115 36.1099 41.3115 35.8656 41.3115 35.7027C41.3115 35.7027 41.2294 35.6213 41.0652 35.5398Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M45.6111 20.3423C44.8165 19.6117 41.5995 17.2727 34.4285 17.2406C34.4285 17.2406 25.9759 16.7279 21.8553 20.5089C19.5611 22.8031 18.7537 26.1547 18.6703 30.3201C18.587 34.4791 18.4781 42.2781 25.9951 44.3929H26.0015L25.9951 47.6163C25.9951 47.6163 25.9503 48.9236 26.809 49.1863C27.8471 49.5068 28.4623 48.5135 29.4556 47.4433C30.0003 46.8537 30.7501 45.995 31.3205 45.3349C36.46 45.7643 40.4139 44.7774 40.8625 44.63C41.9007 44.2903 47.7772 43.5406 48.732 35.7416C49.7189 27.7183 48.2514 22.6365 45.6111 20.3423ZM46.4827 35.1776C45.6752 41.6885 40.9138 42.0987 40.0359 42.3807C39.6642 42.5024 36.1908 43.3675 31.8203 43.0792C31.8203 43.0792 28.5649 47.0075 27.5524 48.0264C27.3921 48.1866 27.2063 48.2507 27.0845 48.2187C26.9115 48.1738 26.8602 47.9688 26.8667 47.6676C26.8667 47.2318 26.8923 42.3038 26.8923 42.3038C26.8859 42.3038 26.8859 42.3038 26.8923 42.3038C20.5288 40.5414 20.9005 33.9024 20.971 30.429C21.0414 26.9557 21.6951 24.104 23.6368 22.1879C27.1166 19.035 34.3004 19.5028 34.3004 19.5028C40.3627 19.5284 43.2657 21.3548 43.9386 21.9636C46.1751 23.8861 47.3158 28.4681 46.4827 35.1776Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M37.3827 30.5509C37.1712 30.5509 36.9918 30.3843 36.9789 30.1664C36.9084 28.7886 36.2612 28.1157 34.9411 28.0452C34.7168 28.0324 34.5438 27.8402 34.5566 27.6159C34.5694 27.3916 34.7616 27.2186 34.9859 27.2314C36.729 27.3275 37.7031 28.3272 37.7928 30.1216C37.8056 30.3458 37.6326 30.5381 37.4083 30.5445C37.3955 30.5509 37.3891 30.5509 37.3827 30.5509Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M39.4593 31.2434H39.4529C39.2286 31.237 39.0492 31.0512 39.0556 30.8269C39.0876 29.4427 38.6903 28.3212 37.8444 27.3984C37.0049 26.4756 35.845 25.9758 34.3134 25.8668C34.0891 25.8476 33.9225 25.6553 33.9417 25.4311C33.9609 25.2068 34.1532 25.0401 34.3775 25.0594C36.1077 25.1875 37.4727 25.7899 38.4468 26.8537C39.4273 27.9239 39.9015 29.2633 39.8694 30.8461C39.863 31.0704 39.6772 31.2434 39.4593 31.2434Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M41.5868 32.0765C41.3625 32.0765 41.1831 31.8971 41.1831 31.6728C41.1638 29.1927 40.4525 27.3023 39.0042 25.886C37.5752 24.489 35.7616 23.7777 33.6276 23.7584C33.4033 23.7584 33.2239 23.5726 33.2239 23.3483C33.2239 23.124 33.4097 22.9446 33.6276 22.9446C35.9795 22.9638 37.9789 23.752 39.5618 25.3029C41.151 26.8537 41.9649 28.9941 41.9905 31.66C41.9969 31.8907 41.8175 32.0765 41.5868 32.0765C41.5932 32.0765 41.5932 32.0765 41.5868 32.0765Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M35.0374 35.5691C35.0374 35.5691 35.6078 35.6203 35.9154 35.2422L36.5113 34.4925C36.7997 34.1208 37.4982 33.8837 38.1775 34.2618C38.5556 34.4732 39.2413 34.8962 39.6643 35.2102C40.1193 35.5434 41.0421 36.3124 41.0485 36.3189C41.4906 36.6905 41.5932 37.2352 41.292 37.8184C41.292 37.8184 41.292 37.8248 41.292 37.8312C40.9844 38.3759 40.5678 38.8886 40.0488 39.3628C40.0424 39.3628 40.0424 39.3692 40.0359 39.3692C39.6066 39.7281 39.1836 39.9332 38.7735 39.978C38.7222 39.9909 38.6646 39.9909 38.5877 39.9909C38.4082 39.9909 38.2288 39.9652 38.0494 39.9075L38.0365 39.8883C37.3957 39.7089 36.3319 39.2603 34.5632 38.2798C33.4097 37.6454 32.4548 36.9981 31.641 36.3509C31.2116 36.0113 30.7759 35.6332 30.3273 35.1846C30.3144 35.1718 30.2952 35.1525 30.2824 35.1397C30.2696 35.1269 30.2504 35.1077 30.2375 35.0949C30.2247 35.082 30.2055 35.0628 30.1927 35.05C30.1799 35.0372 30.1606 35.018 30.1478 35.0051C29.7057 34.5566 29.3212 34.1208 28.9815 33.6914C28.3343 32.884 27.687 31.9227 27.0526 30.7692C26.0721 28.9941 25.6235 27.9303 25.4441 27.2959L25.4249 27.2831C25.3672 27.1036 25.3416 26.9242 25.3416 26.7447C25.3416 26.6678 25.3416 26.6102 25.3544 26.5589C25.4056 26.1424 25.6107 25.7258 25.9632 25.2965C25.9632 25.29 25.9696 25.29 25.9696 25.2836C26.4438 24.7582 26.9565 24.348 27.5012 24.0404C27.5012 24.0404 27.5076 24.0404 27.514 24.0404C28.0907 23.7392 28.6355 23.8418 29.0135 24.2839C29.0135 24.2839 29.789 25.2131 30.1222 25.6681C30.4362 26.0975 30.8592 26.7768 31.0706 27.1549C31.4487 27.8342 31.2116 28.5327 30.8399 28.8211L30.0902 29.417C29.7121 29.7246 29.7633 30.295 29.7633 30.295C29.7633 30.295 30.872 34.5117 35.0374 35.5691Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M26.4478 46.9652C26.3142 46.9652 26.1797 46.9352 26.0534 46.8752C25.7399 46.7235 25.5391 46.4064 25.5391 46.0565V41.513H22.813C21.31 41.513 20.0869 40.2899 20.0869 38.7869V24.2478C20.0869 22.7448 21.31 21.5217 22.813 21.5217H44.6217C46.1247 21.5217 47.3478 22.7448 47.3478 24.2478V38.7869C47.3478 40.2899 46.1247 41.513 44.6217 41.513H33.582L27.0157 46.7662C26.8512 46.898 26.6504 46.9652 26.4478 46.9652ZM22.813 23.3391C22.3114 23.3391 21.9043 23.7471 21.9043 24.2478V38.7869C21.9043 39.2876 22.3114 39.6956 22.813 39.6956H26.4478C26.9503 39.6956 27.3565 40.1018 27.3565 40.6043V44.1664L32.6951 39.8946C32.8568 39.7656 33.0558 39.6956 33.263 39.6956H44.6217C45.1233 39.6956 45.5304 39.2876 45.5304 38.7869V24.2478C45.5304 23.7471 45.1233 23.3391 44.6217 23.3391H22.813Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M40.9871 30.6091H26.448C25.9455 30.6091 25.5393 30.202 25.5393 29.7004C25.5393 29.1988 25.9455 28.7917 26.448 28.7917H40.9871C41.4896 28.7917 41.8958 29.1988 41.8958 29.7004C41.8958 30.202 41.4896 30.6091 40.9871 30.6091Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M33.7176 34.2437H26.448C25.9455 34.2437 25.5393 33.8366 25.5393 33.335C25.5393 32.8334 25.9455 32.4263 26.448 32.4263H33.7176C34.2201 32.4263 34.6263 32.8334 34.6263 33.335C34.6263 33.8366 34.2201 34.2437 33.7176 34.2437Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                    <div class=\"footer__box footer__box-1\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"flex-row footer__row\">\r\n                        <div class=\"footer__box footer__box-2\">\r\n                            <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"footer__img\">\r\n                            </a>\r\n                            <div class=\"footer__icons-block\">\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">О компании</div>\r\n                            <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                            <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                            <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                            <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                            <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                            <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Полезное</div>\r\n                            <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                            <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                            <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                            <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                            <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Спецпроекты</div>\r\n                            <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                            <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                            <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                            <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                            <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n    </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./magaziny.html":
/*!***********************!*\
  !*** ./magaziny.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag1.png */ "./images/mag1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag2.png */ "./images/mag2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag3.png */ "./images/mag3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag4.png */ "./images/mag4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag5.png */ "./images/mag5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag6.png */ "./images/mag6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag7.png */ "./images/mag7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag8.png */ "./images/mag8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag9.png */ "./images/mag9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag10.png */ "./images/mag10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag11.png */ "./images/mag11.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag12.png */ "./images/mag12.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag13.png */ "./images/mag13.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag14.png */ "./images/mag14.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag15.png */ "./images/mag15.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag16.png */ "./images/mag16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag17.png */ "./images/mag17.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag18.png */ "./images/mag18.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag19.png */ "./images/mag19.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag20.png */ "./images/mag20.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag21.png */ "./images/mag21.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag22.png */ "./images/mag22.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag23.png */ "./images/mag23.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag24.png */ "./images/mag24.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag25.png */ "./images/mag25.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag26.png */ "./images/mag26.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag27.png */ "./images/mag27.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag28.png */ "./images/mag28.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag29.png */ "./images/mag29.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mag30.png */ "./images/mag30.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Магазины</title>\r\n</head>\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"popular-card\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"popular-card__card\">\r\n                        <div class=\"container\">\r\n                            <h2 class=\"popular-card__title\">Популярные магазины</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"magaziny\">\r\n                <div class=\"container\">\r\n                    <div class=\"magaziny__grid\">\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Primark (Форма заказа)</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">H&M</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Mangooutlet</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Next</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Sportdirect</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Clothing at Tesco</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">George at ASDA</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Accessorize</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Adidas UK</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Amazon</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">ASOS</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Boohoo</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Crocs</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Ebay</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Matalan</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Mothercare</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">New Look</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Puma</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Timberland</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Showroomprive</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Brand Alley</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">M&S</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Clarks</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Zara</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Mango</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Zulily</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Panachekids</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Betterware</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Tucci Store</div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"magaziny__item\">\r\n                            <a href=\"#\" class=\"magaziny__link\">\r\n                                <div class=\"magaziny__image-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" alt=\"\" class=\"magaziny__img\">\r\n                                </div>\r\n                                <div class=\"magaziny__text\">Mini Mode</div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </section>\r\n            <section class=\"contact\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"contact__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row contact__row\">\r\n                                <h2 class=\"contact__title\">Остались вопросы? Спросите нас в соцсетях!</h2>\r\n                                <div class=\"contact__icons\">\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M44.4313 21.6147C41.6399 18.7645 37.7812 17.2173 33.8405 17.2173C25.4663 17.2173 18.7342 23.9763 18.8163 32.2011C18.8163 34.8069 19.5552 37.3314 20.7867 39.6115L18.6521 47.3477L26.6157 45.3119C28.8324 46.5334 31.2954 47.1034 33.7584 47.1034C42.0504 47.1034 48.7825 40.3444 48.7825 32.1196C48.7825 28.1294 47.2226 24.3834 44.4313 21.6147ZM33.8405 44.579C31.6238 44.579 29.4071 44.0089 27.5188 42.8689L27.0262 42.6246L22.2645 43.8461L23.496 39.2044L23.1676 38.7158C19.5552 32.934 21.2793 25.2792 27.1904 21.6961C33.1016 18.1131 40.7368 19.8232 44.3492 25.6864C47.9615 31.5496 46.2375 39.1229 40.3263 42.706C38.438 43.9275 36.1392 44.579 33.8405 44.579ZM41.0652 35.5398L40.1621 35.1327C40.1621 35.1327 38.8485 34.5626 38.0275 34.1555C37.9454 34.1555 37.8633 34.074 37.7812 34.074C37.5349 34.074 37.3707 34.1555 37.2065 34.2369C37.2065 34.2369 37.1244 34.3183 35.975 35.6213C35.8929 35.7841 35.7287 35.8656 35.5646 35.8656H35.4825C35.4004 35.8656 35.2362 35.7841 35.1541 35.7027L34.7436 35.5398C33.8405 35.1327 33.0195 34.6441 32.3627 33.9926C32.1985 33.8297 31.9522 33.6669 31.788 33.504C31.2133 32.934 30.6386 32.2825 30.2281 31.5496L30.146 31.3867C30.0639 31.3053 30.0639 31.2239 29.9818 31.061C29.9818 30.8981 29.9818 30.7353 30.0639 30.6538C30.0639 30.6538 30.3923 30.2467 30.6386 30.0024C30.8028 29.8395 30.8849 29.5952 31.0491 29.4323C31.2133 29.188 31.2954 28.8623 31.2133 28.618C31.1312 28.2108 30.146 26.0121 29.8997 25.5235C29.7355 25.2792 29.5713 25.1978 29.325 25.1163H29.0787C28.9145 25.1163 28.6682 25.1163 28.4219 25.1163C28.2577 25.1163 28.0935 25.1978 27.9293 25.1978L27.8472 25.2792C27.683 25.3606 27.5188 25.5235 27.3546 25.6049C27.1904 25.7678 27.1083 25.9307 26.9441 26.0935C26.3694 26.8265 26.041 27.7222 26.041 28.618C26.041 29.2695 26.2052 29.9209 26.4515 30.491L26.5336 30.7353C27.2725 32.2825 28.2577 33.6669 29.5713 34.8884L29.8997 35.2141C30.146 35.4584 30.3923 35.6213 30.5565 35.8656C32.2806 37.3314 34.251 38.39 36.4676 38.9601C36.7139 39.0415 37.0423 39.0415 37.2886 39.1229C37.5349 39.1229 37.8633 39.1229 38.1096 39.1229C38.5201 39.1229 39.0127 38.9601 39.3411 38.7972C39.5874 38.6343 39.7516 38.6343 39.9158 38.4715L40.08 38.3086C40.2442 38.1457 40.4084 38.0643 40.5726 37.9014C40.7368 37.7386 40.901 37.5757 40.9831 37.4128C41.1473 37.0871 41.2294 36.6799 41.3115 36.2727C41.3115 36.1099 41.3115 35.8656 41.3115 35.7027C41.3115 35.7027 41.2294 35.6213 41.0652 35.5398Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M45.6111 20.3423C44.8165 19.6117 41.5995 17.2727 34.4285 17.2406C34.4285 17.2406 25.9759 16.7279 21.8553 20.5089C19.5611 22.8031 18.7537 26.1547 18.6703 30.3201C18.587 34.4791 18.4781 42.2781 25.9951 44.3929H26.0015L25.9951 47.6163C25.9951 47.6163 25.9503 48.9236 26.809 49.1863C27.8471 49.5068 28.4623 48.5135 29.4556 47.4433C30.0003 46.8537 30.7501 45.995 31.3205 45.3349C36.46 45.7643 40.4139 44.7774 40.8625 44.63C41.9007 44.2903 47.7772 43.5406 48.732 35.7416C49.7189 27.7183 48.2514 22.6365 45.6111 20.3423ZM46.4827 35.1776C45.6752 41.6885 40.9138 42.0987 40.0359 42.3807C39.6642 42.5024 36.1908 43.3675 31.8203 43.0792C31.8203 43.0792 28.5649 47.0075 27.5524 48.0264C27.3921 48.1866 27.2063 48.2507 27.0845 48.2187C26.9115 48.1738 26.8602 47.9688 26.8667 47.6676C26.8667 47.2318 26.8923 42.3038 26.8923 42.3038C26.8859 42.3038 26.8859 42.3038 26.8923 42.3038C20.5288 40.5414 20.9005 33.9024 20.971 30.429C21.0414 26.9557 21.6951 24.104 23.6368 22.1879C27.1166 19.035 34.3004 19.5028 34.3004 19.5028C40.3627 19.5284 43.2657 21.3548 43.9386 21.9636C46.1751 23.8861 47.3158 28.4681 46.4827 35.1776Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M37.3827 30.5509C37.1712 30.5509 36.9918 30.3843 36.9789 30.1664C36.9084 28.7886 36.2612 28.1157 34.9411 28.0452C34.7168 28.0324 34.5438 27.8402 34.5566 27.6159C34.5694 27.3916 34.7616 27.2186 34.9859 27.2314C36.729 27.3275 37.7031 28.3272 37.7928 30.1216C37.8056 30.3458 37.6326 30.5381 37.4083 30.5445C37.3955 30.5509 37.3891 30.5509 37.3827 30.5509Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M39.4593 31.2434H39.4529C39.2286 31.237 39.0492 31.0512 39.0556 30.8269C39.0876 29.4427 38.6903 28.3212 37.8444 27.3984C37.0049 26.4756 35.845 25.9758 34.3134 25.8668C34.0891 25.8476 33.9225 25.6553 33.9417 25.4311C33.9609 25.2068 34.1532 25.0401 34.3775 25.0594C36.1077 25.1875 37.4727 25.7899 38.4468 26.8537C39.4273 27.9239 39.9015 29.2633 39.8694 30.8461C39.863 31.0704 39.6772 31.2434 39.4593 31.2434Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M41.5868 32.0765C41.3625 32.0765 41.1831 31.8971 41.1831 31.6728C41.1638 29.1927 40.4525 27.3023 39.0042 25.886C37.5752 24.489 35.7616 23.7777 33.6276 23.7584C33.4033 23.7584 33.2239 23.5726 33.2239 23.3483C33.2239 23.124 33.4097 22.9446 33.6276 22.9446C35.9795 22.9638 37.9789 23.752 39.5618 25.3029C41.151 26.8537 41.9649 28.9941 41.9905 31.66C41.9969 31.8907 41.8175 32.0765 41.5868 32.0765C41.5932 32.0765 41.5932 32.0765 41.5868 32.0765Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M35.0374 35.5691C35.0374 35.5691 35.6078 35.6203 35.9154 35.2422L36.5113 34.4925C36.7997 34.1208 37.4982 33.8837 38.1775 34.2618C38.5556 34.4732 39.2413 34.8962 39.6643 35.2102C40.1193 35.5434 41.0421 36.3124 41.0485 36.3189C41.4906 36.6905 41.5932 37.2352 41.292 37.8184C41.292 37.8184 41.292 37.8248 41.292 37.8312C40.9844 38.3759 40.5678 38.8886 40.0488 39.3628C40.0424 39.3628 40.0424 39.3692 40.0359 39.3692C39.6066 39.7281 39.1836 39.9332 38.7735 39.978C38.7222 39.9909 38.6646 39.9909 38.5877 39.9909C38.4082 39.9909 38.2288 39.9652 38.0494 39.9075L38.0365 39.8883C37.3957 39.7089 36.3319 39.2603 34.5632 38.2798C33.4097 37.6454 32.4548 36.9981 31.641 36.3509C31.2116 36.0113 30.7759 35.6332 30.3273 35.1846C30.3144 35.1718 30.2952 35.1525 30.2824 35.1397C30.2696 35.1269 30.2504 35.1077 30.2375 35.0949C30.2247 35.082 30.2055 35.0628 30.1927 35.05C30.1799 35.0372 30.1606 35.018 30.1478 35.0051C29.7057 34.5566 29.3212 34.1208 28.9815 33.6914C28.3343 32.884 27.687 31.9227 27.0526 30.7692C26.0721 28.9941 25.6235 27.9303 25.4441 27.2959L25.4249 27.2831C25.3672 27.1036 25.3416 26.9242 25.3416 26.7447C25.3416 26.6678 25.3416 26.6102 25.3544 26.5589C25.4056 26.1424 25.6107 25.7258 25.9632 25.2965C25.9632 25.29 25.9696 25.29 25.9696 25.2836C26.4438 24.7582 26.9565 24.348 27.5012 24.0404C27.5012 24.0404 27.5076 24.0404 27.514 24.0404C28.0907 23.7392 28.6355 23.8418 29.0135 24.2839C29.0135 24.2839 29.789 25.2131 30.1222 25.6681C30.4362 26.0975 30.8592 26.7768 31.0706 27.1549C31.4487 27.8342 31.2116 28.5327 30.8399 28.8211L30.0902 29.417C29.7121 29.7246 29.7633 30.295 29.7633 30.295C29.7633 30.295 30.872 34.5117 35.0374 35.5691Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M26.4478 46.9652C26.3142 46.9652 26.1797 46.9352 26.0534 46.8752C25.7399 46.7235 25.5391 46.4064 25.5391 46.0565V41.513H22.813C21.31 41.513 20.0869 40.2899 20.0869 38.7869V24.2478C20.0869 22.7448 21.31 21.5217 22.813 21.5217H44.6217C46.1247 21.5217 47.3478 22.7448 47.3478 24.2478V38.7869C47.3478 40.2899 46.1247 41.513 44.6217 41.513H33.582L27.0157 46.7662C26.8512 46.898 26.6504 46.9652 26.4478 46.9652ZM22.813 23.3391C22.3114 23.3391 21.9043 23.7471 21.9043 24.2478V38.7869C21.9043 39.2876 22.3114 39.6956 22.813 39.6956H26.4478C26.9503 39.6956 27.3565 40.1018 27.3565 40.6043V44.1664L32.6951 39.8946C32.8568 39.7656 33.0558 39.6956 33.263 39.6956H44.6217C45.1233 39.6956 45.5304 39.2876 45.5304 38.7869V24.2478C45.5304 23.7471 45.1233 23.3391 44.6217 23.3391H22.813Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M40.9871 30.6091H26.448C25.9455 30.6091 25.5393 30.202 25.5393 29.7004C25.5393 29.1988 25.9455 28.7917 26.448 28.7917H40.9871C41.4896 28.7917 41.8958 29.1988 41.8958 29.7004C41.8958 30.202 41.4896 30.6091 40.9871 30.6091Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M33.7176 34.2437H26.448C25.9455 34.2437 25.5393 33.8366 25.5393 33.335C25.5393 32.8334 25.9455 32.4263 26.448 32.4263H33.7176C34.2201 32.4263 34.6263 32.8334 34.6263 33.335C34.6263 33.8366 34.2201 34.2437 33.7176 34.2437Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                    <div class=\"footer__box footer__box-1\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"flex-row footer__row\">\r\n                        <div class=\"footer__box footer__box-2\">\r\n                            <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"\" class=\"footer__img\">\r\n                            </a>\r\n                            <div class=\"footer__icons-block\">\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">О компании</div>\r\n                            <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                            <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                            <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                            <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                            <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                            <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Полезное</div>\r\n                            <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                            <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                            <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                            <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                            <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Спецпроекты</div>\r\n                            <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                            <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                            <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                            <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                            <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./partnerskaja-programma.html":
/*!*************************************!*\
  !*** ./partnerskaja-programma.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/jp1.png */ "./images/jp1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Бонусы</title>\r\n</head>\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"addresses addresses-2\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"addresses__card card\">\r\n                        <div class=\"container\">\r\n                            <h2 class=\"addresses__title\">Бонусы и партнёрская программа</h2>\r\n                            <div class=\"addresses__text\">Платим $3 с каждой отправленной посылки</div>\r\n                            <a href=\"#\" class=\"main-button green-button \">Начать зарабатывать</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"earnings\">\r\n                <div class=\"container\">\r\n                    <div class=\"earnings__title title\">Зарабатывать с нами — проще простого:</div>\r\n                    \r\n                    <div class=\"flex-row earnings__flex\">\r\n                        <div class=\"earnings__item\">\r\n                            <div class=\"earnings__svg\">\r\n                                <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M22.54 26H48.2742C49.8686 26 51.161 27.2925 51.161 28.8868C51.161 29.1972 51.1107 29.505 51.0126 29.7994L48.4637 37.4459C48.0712 38.6243 46.9683 39.4194 45.7253 39.4194H25.0562L22.54 26Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M16.8809 14.6832L23.5889 2.94417L25.0449 3.77617L18.3369 15.5152L16.8809 14.6832Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M23.4834 10.9032C23.4834 12.2904 24.6123 13.4193 25.9995 13.4193C27.3868 13.4193 28.5157 12.2904 28.5157 10.9032C28.5157 9.51599 27.3868 8.38708 25.9995 8.38708C24.6123 8.38708 23.4834 9.51599 23.4834 10.9032ZM25.9995 10.0645C26.4625 10.0645 26.8382 10.4402 26.8382 10.9032C26.8382 11.3662 26.4625 11.7419 25.9995 11.7419C25.5366 11.7419 25.1608 11.3662 25.1608 10.9032C25.1608 10.4402 25.5366 10.0645 25.9995 10.0645Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M18.4512 7.54842C18.4512 6.16119 17.3223 5.03229 15.9351 5.03229C14.5478 5.03229 13.4189 6.16119 13.4189 7.54842C13.4189 8.93564 14.5478 10.0645 15.9351 10.0645C17.3223 10.0645 18.4512 8.93564 18.4512 7.54842ZM15.9351 8.38713C15.4721 8.38713 15.0964 8.01138 15.0964 7.54842C15.0964 7.08545 15.4721 6.70971 15.9351 6.70971C16.398 6.70971 16.7738 7.08545 16.7738 7.54842C16.7738 8.01138 16.398 8.38713 15.9351 8.38713Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M48.2753 25.1613H48.0623C50.4392 23.4906 52 20.7329 52 17.6129C52 12.5261 47.861 8.3871 42.7742 8.3871C39.6542 8.3871 36.8965 9.94794 35.2258 12.3248V0H7.17181L0 8.06839V10.3832L7.17181 18.4516H16.7742H18.1841C19.3935 18.4516 20.4335 19.3146 20.6566 20.5039L25.0137 43.7421C23.1777 44.1891 21.8065 45.8355 21.8065 47.8064C21.8065 48.7542 22.1344 49.6197 22.667 50.3226H20.129V40.2581H15.0968V50.3226H13.4194V31.871H8.3871V50.3226H6.70968V36.9032H1.67742V50.3226H0V52H26C28.3123 52 30.1935 50.1188 30.1935 47.8064C30.1935 46.8587 29.8656 45.9932 29.333 45.2903H41.1177C40.586 45.9932 40.2581 46.8587 40.2581 47.8064C40.2581 50.1188 42.1393 52 44.4516 52C46.7639 52 48.6452 50.1188 48.6452 47.8064C48.6452 45.4941 46.7639 43.6129 44.4516 43.6129H26.6961L26.0671 40.2581H45.7265C47.3326 40.2581 48.7525 39.234 49.2599 37.7109L51.8088 30.0652C51.9354 29.6845 52 29.2877 52 28.886C52 26.832 50.3293 25.1613 48.2753 25.1613ZM43.6129 26.8387V28.5161H40.2581V26.8387H43.6129ZM38.5806 28.5161H35.2258V26.8387H38.5806V28.5161ZM38.5806 30.1935V33.5484H35.2258V30.1935H38.5806ZM33.5484 28.5161H30.1935V26.8387H33.5484V28.5161ZM28.5161 28.5161H23.8646L23.5501 26.8387H28.5161V28.5161ZM24.18 30.1935H28.5161V33.5484H24.809L24.18 30.1935ZM30.1935 30.1935H33.5484V33.5484H30.1935V30.1935ZM33.5484 35.2258V38.5806H30.1935V35.2258H33.5484ZM35.2258 35.2258H38.5806V38.5806H35.2258V35.2258ZM40.2581 35.2258H43.6129V38.5806H40.2581V35.2258ZM40.2581 33.5484V30.1935H43.6129V33.5484H40.2581ZM45.2903 30.1935H49.998L48.8792 33.5484H45.2903V30.1935ZM50.2848 28.5161H45.2903V26.8387H48.2753C49.2775 26.8387 50.1104 27.5634 50.2848 28.5161ZM42.7742 10.0645C46.9367 10.0645 50.3226 13.4504 50.3226 17.6129C50.3226 21.7754 46.9367 25.1613 42.7742 25.1613C38.6117 25.1613 35.2258 21.7754 35.2258 17.6129C35.2258 13.4504 38.6117 10.0645 42.7742 10.0645ZM1.67742 8.70581L6.70968 3.04452V15.4071L1.67742 9.74581V8.70581ZM16.7742 16.7742H8.3871V1.67742H33.5484V16.7742H18.1841H16.7742ZM21.5205 18.4516H33.5912C33.8428 21.2244 35.3248 23.6424 37.487 25.1613H23.2356L22.3038 20.1945C22.1822 19.5411 21.9004 18.9548 21.5205 18.4516ZM16.7742 41.9355H18.4516V50.3226H16.7742V41.9355ZM10.0645 33.5484H11.7419V50.3226H10.0645V33.5484ZM3.35484 38.5806H5.03226V50.3226H3.35484V38.5806ZM28.5161 47.8064C28.5161 49.1937 27.3872 50.3226 26 50.3226C24.6128 50.3226 23.4839 49.1937 23.4839 47.8064C23.4839 46.4192 24.6128 45.2903 26 45.2903C27.3872 45.2903 28.5161 46.4192 28.5161 47.8064ZM46.9677 47.8064C46.9677 49.1937 45.8388 50.3226 44.4516 50.3226C43.0644 50.3226 41.9355 49.1937 41.9355 47.8064C41.9355 46.4192 43.0644 45.2903 44.4516 45.2903C45.8388 45.2903 46.9677 46.4192 46.9677 47.8064ZM25.1235 35.2258H28.5161V38.5806H25.7526L25.1235 35.2258ZM45.7265 38.5806H45.2903V35.2258H48.3197L47.6681 37.1808C47.3896 38.0179 46.6088 38.5806 45.7265 38.5806Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M41.7195 21.8065H41.9351V23.4839H43.6125V21.8065H43.828C45.097 21.8065 46.1286 20.7748 46.1286 19.5059C46.1286 18.5137 45.4962 17.6364 44.5552 17.3227L41.5233 16.3121C41.2675 16.2274 41.0964 15.9883 41.0964 15.7199C41.0964 15.3761 41.3757 15.0968 41.7195 15.0968H43.828C44.1719 15.0968 44.4512 15.3761 44.4512 15.7199V15.9355H46.1286V15.7199C46.1286 14.451 45.097 13.4194 43.828 13.4194H43.6125V11.7419H41.9351V13.4194H41.7195C40.4506 13.4194 39.4189 14.451 39.4189 15.7199C39.4189 16.7121 40.0513 17.5894 40.9924 17.9031L44.0243 18.9138C44.2801 18.9985 44.4512 19.2375 44.4512 19.5059C44.4512 19.8498 44.1719 20.129 43.828 20.129H41.7195C41.3757 20.129 41.0964 19.8498 41.0964 19.5059V18.4516H39.4189V19.5059C39.4189 20.7748 40.4506 21.8065 41.7195 21.8065Z\" fill=\"#1F2428\"/>\r\n                                  </svg>\r\n                            </div>\r\n                            <div class=\"earnings__subtitle\">Дарим скидку 10% вашим друзьям и подписчикам</div>\r\n                            <div class=\"earnings__text\">На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.</div>\r\n                        </div>\r\n                        <div class=\"earnings__item\">\r\n                            <div class=\"earnings__svg\">\r\n                                <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M2.51613 15.0968C3.90575 15.0968 5.03226 13.9703 5.03226 12.5806C5.03226 11.191 3.90575 10.0645 2.51613 10.0645C1.12651 10.0645 0 11.191 0 12.5806C0 13.9703 1.12651 15.0968 2.51613 15.0968Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M14.2583 18.4516C15.6479 18.4516 16.7744 17.3251 16.7744 15.9355C16.7744 14.5459 15.6479 13.4194 14.2583 13.4194C12.8687 13.4194 11.7422 14.5459 11.7422 15.9355C11.7422 17.3251 12.8687 18.4516 14.2583 18.4516Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M10.9035 8.3871C13.2195 8.3871 15.0971 6.50958 15.0971 4.19355C15.0971 1.87752 13.2195 0 10.9035 0C8.58748 0 6.70996 1.87752 6.70996 4.19355C6.70996 6.50958 8.58748 8.3871 10.9035 8.3871Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M49.4839 8.38712C50.8735 8.38712 52 7.26061 52 5.87099C52 4.48137 50.8735 3.35486 49.4839 3.35486C48.0943 3.35486 46.9678 4.48137 46.9678 5.87099C46.9678 7.26061 48.0943 8.38712 49.4839 8.38712Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M26.0004 44.4516C21.3757 44.4516 17.6133 40.6892 17.6133 36.0645C17.6133 31.4399 21.3757 27.6774 26.0004 27.6774C30.625 27.6774 34.3875 31.4399 34.3875 36.0645C34.3875 40.6892 30.625 44.4516 26.0004 44.4516Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M23.4834 36.9032V37.7419C23.4834 38.8339 24.1871 39.7565 25.1608 40.1037V41.9355H26.8382V40.2581H28.5157V37.7419C28.5157 36.3547 27.3868 35.2258 25.9995 35.2258C25.5374 35.2258 25.1608 34.8501 25.1608 34.3871V33.5484H25.9995C26.4617 33.5484 26.8382 33.9241 26.8382 34.3871V35.2258H28.5157V34.3871C28.5157 33.2951 27.812 32.3725 26.8382 32.0253V30.1935H25.1608V31.871H23.4834V34.3871C23.4834 35.7743 24.6123 36.9032 25.9995 36.9032C26.4617 36.9032 26.8382 37.279 26.8382 37.7419V38.5806H25.9995C25.5374 38.5806 25.1608 38.2049 25.1608 37.7419V36.9032H23.4834Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M40.2581 13.9276V11.1691C41.8868 8.92723 43.0367 6.31716 43.5961 3.52174L43.7135 2.94135L43.2061 2.6369C40.331 0.911677 37.0416 0 33.6901 0H30.1935V0.83871C30.1935 1.24213 30.2028 1.64471 30.2179 2.04729C27.6497 2.76523 25.5907 4.29084 25.4968 4.36129L25.0514 4.6951L25.1865 5.23523C25.7517 7.49555 26.9041 9.56297 28.5161 11.2379V13.9276L25.584 17.0694C22.9077 19.937 20.7983 23.2239 19.2954 26.8387H18.4516V21.8065C18.4516 20.8814 17.6993 20.129 16.7742 20.129H1.67742C0.752322 20.129 0 20.8814 0 21.8065V50.3226C0 51.2477 0.752322 52 1.67742 52H43.6129C44.46 52 45.1544 51.3676 45.2668 50.5515C49.3706 48.3894 52 44.0792 52 39.4194C52 31.0935 48.8716 23.1559 43.1902 17.0694L40.2581 13.9276ZM33.6901 1.67742C36.5384 1.67742 39.3388 2.40123 41.8265 3.77671C41.3048 6.032 40.3176 8.18245 38.974 10.0645H33.327C32.453 7.34458 31.9615 4.53071 31.8827 1.67742H33.6901ZM30.1935 13.4194V11.7419H38.5806V13.4194H30.1935ZM30.3328 3.76581C30.529 5.90032 30.9408 8.00716 31.564 10.0645H29.7222C28.449 8.74019 27.4996 7.14077 26.967 5.38619C27.6162 4.96516 28.8801 4.2271 30.3328 3.76581ZM38.6477 28.5161C39.0176 31.0817 41.0473 33.1114 43.6129 33.4813V38.6477C41.0473 39.0176 39.0176 41.0473 38.6477 43.6129H13.3523C12.9824 41.0473 10.9527 39.0176 8.3871 38.6477V33.4813C10.9527 33.1114 12.9824 31.0817 13.3523 28.5161H38.6477ZM5.03226 23.4839V21.8065H6.70968V23.4839H5.03226ZM10.0645 25.1613V26.8387H1.67742V25.1613H10.0645ZM8.3871 40.3428C10.0276 40.6774 11.3226 41.9724 11.6572 43.6129H8.3871V40.3428ZM8.3871 28.5161H11.6572C11.3226 30.1566 10.0276 31.4516 8.3871 31.7863V28.5161ZM16.7742 25.1613V26.8387H15.0968V25.1613H16.7742ZM13.4194 26.8387H11.7419V25.1613H13.4194V26.8387ZM6.70968 28.5161V30.1935H1.67742V28.5161H6.70968ZM6.70968 31.871V33.5484H1.67742V31.871H6.70968ZM6.70968 35.2258V36.9032H1.67742V35.2258H6.70968ZM6.70968 38.5806V40.2581H1.67742V38.5806H6.70968ZM6.70968 41.9355V43.6129H1.67742V41.9355H6.70968ZM6.70968 45.2903V46.9677H1.67742V45.2903H6.70968ZM8.3871 45.2903H43.6129V46.9677H8.3871V45.2903ZM43.6129 43.6129H40.3428C40.6774 41.9724 41.9724 40.6774 43.6129 40.3428V43.6129ZM43.6129 31.7863C41.9724 31.4516 40.6774 30.1566 40.3428 28.5161H43.6129V31.7863ZM16.7742 23.4839H8.3871V21.8065H16.7742V23.4839ZM3.35484 21.8065V23.4839H1.67742V21.8065H3.35484ZM1.67742 48.6452H6.70968V50.3226H1.67742V48.6452ZM8.3871 50.3226V48.6452H43.6129V50.3226H8.3871ZM45.2903 48.6015V28.5161C45.2903 27.591 44.538 26.8387 43.6129 26.8387H21.1162C22.521 23.6617 24.4308 20.7639 26.8102 18.2143L29.7197 15.0968H31.871V20.129H33.5484V15.0968H35.2258V21.8065H36.9032V15.0968H39.0545L41.964 18.2143C47.3544 23.9896 50.3226 31.5195 50.3226 39.4194C50.3226 43.1457 48.3835 46.6146 45.2903 48.6015Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M35.2256 23.4839H36.903V25.1613H35.2256V23.4839Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M31.8711 21.8065H33.5485V23.4839H31.8711V21.8065Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M50.3226 5.03228V3.35486H48.6452V5.03228H46.9678V6.7097H48.6452V8.38712H50.3226V6.7097H52V5.03228H50.3226Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M1.67742 15.0968H3.35484V13.4194H5.03226V11.7419H3.35484V10.0645H1.67742V11.7419H0V13.4194H1.67742V15.0968Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M15.097 18.4516V16.7742H16.7744V15.0968H15.097V13.4194H13.4196V15.0968H11.7422V16.7742H13.4196V18.4516H15.097Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M10.0645 0H11.7419V3.35484H10.0645V0Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M11.7422 3.35486H15.097V5.03228H11.7422V3.35486Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M10.0645 5.03229H11.7419V8.38713H10.0645V5.03229Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M6.70996 3.35486H10.0648V5.03228H6.70996V3.35486Z\" fill=\"#1F2428\"/>\r\n                                  </svg>\r\n                            </div>\r\n                            <div class=\"earnings__subtitle\">Платим по £3 за отправленную посылку </div>\r\n                            <div class=\"earnings__text\">Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.</div>\r\n                        </div>\r\n                        <div class=\"earnings__item\">\r\n                            <div class=\"earnings__svg\">\r\n                                <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M31.2647 10.0645C31.5549 9.56548 32.09 9.22581 32.7098 9.22581H38.5808C39.9705 9.22581 41.0969 10.3522 41.0969 11.7419H41.6564C43.2004 11.7419 44.4518 12.9933 44.4518 14.5374C44.4518 15.4172 44.0374 16.2458 43.3338 16.7742L41.0969 18.4516V23.5485L42.8784 22.8355C47.4007 21.0273 50.3227 16.7121 50.3227 11.8417C50.3227 5.31155 45.0112 0 38.481 0H32.7098C29.4724 0 26.8389 2.63355 26.8389 5.87097C26.8389 8.18245 28.7201 10.0645 31.0324 10.0645H31.2647Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M3.35449 33.5483H15.9351V40.258H3.35449V33.5483Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M41.9355 26.0923V18.871L43.8368 17.4452C44.7468 16.7625 45.2903 15.6755 45.2903 14.5374C45.2903 12.5916 43.7538 10.9989 41.8306 10.9066C41.4583 9.45986 40.1423 8.38715 38.5806 8.38715H32.7097C31.3225 8.38715 30.1935 9.51606 30.1935 10.9033H1.67742V6.70973C1.67742 6.2476 2.054 5.87102 2.51613 5.87102H26.8387C26.8387 5.28812 26.9268 4.72535 27.0861 4.1936H2.51613C1.1289 4.1936 0 5.32251 0 6.70973V41.9355C0 43.3228 1.1289 44.4517 2.51613 44.4517H30.1935V52.0001H52V37.7772C52 31.9406 47.6379 26.952 41.9355 26.0923ZM41.4742 27.7337C41.5681 27.7454 41.6621 27.7563 41.7543 27.7706L41.3056 32.2568L39.6416 30.1768L41.4742 27.7337ZM31.871 13.2424V10.9033C31.871 10.4412 32.2475 10.0646 32.7097 10.0646H38.5806C39.5057 10.0646 40.2581 10.8169 40.2581 11.742V12.5807H41.6562C42.7348 12.5807 43.6129 13.4588 43.6129 14.5374C43.6129 15.1497 43.3202 15.7351 42.8295 16.1033L40.2581 18.0323V26.5595L38.5806 28.7963L36.9032 26.5595V24.3226H38.5806V22.6452H34.3871C32.9999 22.6452 31.871 21.5163 31.871 20.1291V18.7721L30.7362 18.2042C30.4015 18.0373 30.1935 17.7002 30.1935 17.3261C30.1935 17.1315 30.2506 16.9428 30.3588 16.781L31.1665 15.569C31.6269 14.8771 31.871 14.0728 31.871 13.2424ZM35.6695 27.7102L37.5197 30.1768L35.8557 32.2568L35.4028 27.7303L35.6695 27.7102ZM30.1935 13.2424C30.1935 13.7406 30.0476 14.2229 29.7708 14.6381L28.9632 15.85C28.6705 16.2886 28.5161 16.7994 28.5161 17.3261C28.5161 18.3401 29.0797 19.2518 29.9864 19.7055L30.1935 19.8087V20.1291C30.1935 22.4414 32.0748 24.3226 34.3871 24.3226H35.2258V26.0621C30.4133 26.4353 26.4336 29.7239 24.9516 34.0961L24.3427 31.0533L25.0464 28.2386C25.1227 27.9358 25.1613 27.623 25.1613 27.3101C25.1613 26.5066 24.9097 25.7619 24.4845 25.1454C26.7205 25.0573 28.5161 23.2248 28.5161 20.9678C28.5161 18.6555 26.6349 16.7742 24.3226 16.7742H22.7047C19.1972 16.7742 15.9003 15.434 13.3783 13.0118C13.3539 12.8625 13.3145 12.7199 13.265 12.5807H30.1935V13.2424ZM11.7419 13.4194V28.5162C11.7419 28.9783 11.3654 29.3549 10.9032 29.3549C10.4411 29.3549 10.0645 28.9783 10.0645 28.5162V13.4194C10.0645 12.9573 10.4411 12.5807 10.9032 12.5807C11.3654 12.5807 11.7419 12.9573 11.7419 13.4194ZM8.3871 23.3296C7.41335 22.9824 6.70968 22.0598 6.70968 20.9678C6.70968 19.8758 7.41335 18.9532 8.3871 18.606V23.3296ZM13.4194 15.2595C15.8315 17.1391 18.7301 18.2286 21.8065 18.4081V23.5141C21.7729 23.5158 21.7394 23.515 21.7058 23.5175V23.5217C21.5825 23.5091 21.4626 23.4839 21.3351 23.4839H19.2903C18.4659 23.4839 17.7395 23.8873 17.2808 24.5021C15.8994 25.033 14.5927 25.7694 13.4194 26.6777V15.2595ZM23.4839 23.4839V18.4517H24.3226C25.7098 18.4517 26.8387 19.5806 26.8387 20.9678C26.8387 22.355 25.7098 23.4839 24.3226 23.4839H23.4839ZM18.7988 30.1936L18.3493 29.7441C17.8813 29.2761 17.6129 28.6277 17.6129 27.9652V27.862C18.0591 28.2646 18.6437 28.5162 19.2903 28.5162H21.8065V26.8388H19.2903C18.8282 26.8388 18.4516 26.4622 18.4516 26.0001C18.4516 25.5379 18.8282 25.1613 19.2903 25.1613H21.3351C22.5202 25.1613 23.4839 26.125 23.4839 27.3101C23.4839 27.4854 23.4621 27.6607 23.4193 27.831L22.8288 30.1936H18.7988ZM2.51613 42.7742C2.054 42.7742 1.67742 42.3977 1.67742 41.9355V12.5807H8.54142C8.44748 12.8441 8.3871 13.1242 8.3871 13.4194V16.859C6.47568 17.249 5.03226 18.9432 5.03226 20.9678C5.03226 22.9924 6.47568 24.6866 8.3871 25.0766V28.5162C8.3871 29.9034 9.516 31.0323 10.9032 31.0323C12.1504 31.0323 13.1803 30.1181 13.3783 28.9263C14.1482 28.1874 15.0112 27.5466 15.9355 27.0082V27.9652C15.9355 29.0848 16.3716 30.1382 17.1634 30.93L17.6574 31.424L18.725 39.4295C18.8995 40.7395 19.5134 41.8986 20.4016 42.7742H2.51613ZM28.5145 42.7742C29.021 42.2752 29.4505 41.689 29.749 41.0146L30.1935 40.0157V42.7742H28.5145ZM50.3226 50.3226H46.9677V34.3872H45.2903V50.3226H31.871V34.3872H30.1935V35.8868L28.2167 40.3336C27.5583 41.8164 26.0839 42.7742 24.4618 42.7742C22.4103 42.7742 20.6591 41.2411 20.3882 39.2081L19.4094 31.871H22.7961L24.3226 39.5024V40.2581H26V37.841C26 33.1324 29.2936 29.0932 33.7446 28.0021L34.5959 36.5175L38.5806 31.5355L42.5654 36.5166L43.399 28.1782C47.424 29.5428 50.3226 33.374 50.3226 37.7772V50.3226Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M10.0645 7.54846H11.7419V9.22588H10.0645V7.54846Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M6.70996 7.54846H8.38738V9.22588H6.70996V7.54846Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M3.35449 7.54846H5.03191V9.22588H3.35449V7.54846Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M3.35449 32.7097H15.9351V34.3871H3.35449V32.7097Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M12.5811 36.0646H15.9359V37.742H12.5811V36.0646Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M3.35449 36.0646H10.9029V37.742H3.35449V36.0646Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M3.35449 39.4194H15.9351V41.0969H3.35449V39.4194Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M34.3875 13.4194C34.8507 13.4194 35.2262 13.0439 35.2262 12.5807C35.2262 12.1174 34.8507 11.7419 34.3875 11.7419C33.9243 11.7419 33.5488 12.1174 33.5488 12.5807C33.5488 13.0439 33.9243 13.4194 34.3875 13.4194Z\" fill=\"#1F2428\"/>\r\n                                  </svg>\r\n                            </div>\r\n                            <div class=\"earnings__subtitle\">Промо на любой вкус</div>\r\n                            <div class=\"earnings__text\">Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.</div>\r\n                        </div>\r\n                        <div class=\"earnings__item\">\r\n                            <div class=\"earnings__svg\">\r\n                                <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M24.3222 31.0323C24.3222 28.1178 25.2574 25.4264 26.8384 23.2298V10.0646H3.35449V41.9355H26.8384V38.8348C25.2608 36.6349 24.3222 33.946 24.3222 31.0323Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M18.4512 3.35486H20.1286V5.03228H18.4512V3.35486Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M10.0645 3.35486H16.7741V5.03228H10.0645V3.35486Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M11.7422 46.9678H18.4519V48.6452H11.7422V46.9678Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M23.4834 46.9678H25.1608V48.6452H23.4834V46.9678Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M5.03223 46.9678H6.70965V48.6452H5.03223V46.9678Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M46.0972 19.5008C46.6264 19.0395 46.9677 18.3686 46.9677 17.6129C46.9677 16.2257 45.8388 15.0968 44.4516 15.0968H43.5651L46.4561 11.0492C46.7908 10.5803 46.9677 10.0285 46.9677 9.4531C46.9677 7.9409 45.7365 6.70968 44.2235 6.70968H43.6129C42.4983 6.70968 41.9053 7.38652 41.5128 7.83439C41.1471 8.25206 41.002 8.3871 40.6749 8.3871C40.3478 8.3871 40.2027 8.25206 39.837 7.83439C39.4445 7.38652 38.8515 6.70968 37.7369 6.70968C36.6223 6.70968 36.0301 7.38735 35.6385 7.83523C35.2745 8.25206 35.1285 8.3871 34.8039 8.3871C34.4794 8.3871 34.3334 8.25206 33.9686 7.83523C33.5769 7.38735 32.9848 6.70968 31.871 6.70968H31.2604C30.8821 6.70968 30.5215 6.78684 30.1935 6.92523V4.19355C30.1935 1.88123 28.3123 0 26 0H4.19355C1.88123 0 0 1.88123 0 4.19355V47.8064C0 50.1188 1.88123 52 4.19355 52H26C28.3123 52 30.1935 50.1188 30.1935 47.8064V43.1063C32.3859 44.4818 34.9683 45.2903 37.7419 45.2903C45.604 45.2903 52 38.8943 52 31.0323C52 26.4386 49.7741 22.1637 46.0972 19.5008ZM45.2903 17.6129C45.2903 18.0759 44.9137 18.4516 44.4516 18.4516H31.0323C30.5701 18.4516 30.1935 18.0759 30.1935 17.6129C30.1935 17.1499 30.5701 16.7742 31.0323 16.7742H44.4516C44.9137 16.7742 45.2903 17.1499 45.2903 17.6129ZM30.1935 12.6821L31.9188 15.0968H31.0323C30.737 15.0968 30.4569 15.1572 30.1935 15.2511V12.6821ZM31.2604 8.3871H31.871C32.1955 8.3871 32.3415 8.52213 32.7055 8.93897C33.0972 9.38684 33.6893 10.0645 34.8039 10.0645C35.9177 10.0645 36.5099 9.38684 36.9015 8.93897C37.2664 8.52213 37.4115 8.3871 37.7369 8.3871C38.064 8.3871 38.2091 8.52213 38.5748 8.93981C38.9673 9.38768 39.5603 10.0645 40.6749 10.0645C41.7895 10.0645 42.3825 9.38768 42.775 8.93981C43.1407 8.52213 43.2858 8.3871 43.6129 8.3871H44.2235C44.8114 8.3871 45.2903 8.86516 45.2903 9.4531C45.2903 9.67703 45.2215 9.8909 45.0915 10.0737L41.5035 15.0968H33.9795L30.3923 10.0746C30.2623 9.89174 30.1935 9.67703 30.1935 9.4531C30.1935 8.86516 30.6725 8.3871 31.2604 8.3871ZM4.19355 1.67742H26C27.3872 1.67742 28.5161 2.80632 28.5161 4.19355V6.70968H1.67742V4.19355C1.67742 2.80632 2.80632 1.67742 4.19355 1.67742ZM26 50.3226H4.19355C2.80632 50.3226 1.67742 49.1937 1.67742 47.8064V45.2903H28.5161V47.8064C28.5161 49.1937 27.3872 50.3226 26 50.3226ZM28.5161 43.6129H1.67742V8.3871H28.5161V17.6129C28.5161 18.3686 28.8575 19.0395 29.3867 19.5008C25.7098 22.1637 23.4839 26.4386 23.4839 31.0323C23.4839 35.3768 25.4423 39.2667 28.5161 41.8835V43.6129ZM37.7419 43.6129C30.805 43.6129 25.1613 37.9692 25.1613 31.0323C25.1613 26.5301 27.5868 22.3743 31.5003 20.129H43.9811C47.8962 22.3717 50.3226 26.5284 50.3226 31.0323C50.3226 37.9692 44.6789 43.6129 37.7419 43.6129Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M37.7416 28.5161C38.6667 28.5161 39.419 29.2684 39.419 30.1935H41.0964C41.0964 28.6344 40.0228 27.3327 38.5803 26.9578V25.1613H36.9028V26.8387H34.3867V30.1935C34.3867 32.0437 35.8914 33.5484 37.7416 33.5484C38.6667 33.5484 39.419 34.3007 39.419 35.2258V36.9032H37.7416C36.8165 36.9032 36.0641 36.1509 36.0641 35.2258H34.3867C34.3867 36.7849 35.4603 38.0866 36.9028 38.4615V40.258H38.5803V38.5806H41.0964V35.2258C41.0964 33.3756 39.5918 31.8709 37.7416 31.8709C36.8165 31.8709 36.0641 31.1186 36.0641 30.1935V28.5161H37.7416Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M43.8926 37.9089L45.0114 39.1586C47.1015 37.2882 48.3788 34.7243 48.6086 31.9398L46.9371 31.8022C46.7425 34.1573 45.6614 36.3262 43.8926 37.9089Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M48.6084 30.1247C48.5573 29.5116 48.455 28.9002 48.3023 28.3073L46.6777 28.7249C46.8061 29.2265 46.8933 29.744 46.9369 30.2623L48.6084 30.1247Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M23.4842 13.4193H6.70996V25.1612H23.4842V13.4193ZM21.8067 23.4838H8.38738V15.0967H21.8067V23.4838Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M6.70996 26.8387H21.8067V28.5162H6.70996V26.8387Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M6.70996 30.1936H21.8067V31.871H6.70996V30.1936Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M20.1289 33.5483H21.8063V35.2258H20.1289V33.5483Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M6.70996 33.5483H18.4519V35.2258H6.70996V33.5483Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M6.70996 36.9032H21.8067V38.5806H6.70996V36.9032Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M26.8389 31.0323H28.5163C28.5163 27.9349 30.0587 25.0607 32.6411 23.3438L31.7126 21.9465C28.6605 23.9754 26.8389 27.3721 26.8389 31.0323Z\" fill=\"#1F2428\"/>\r\n                                  </svg>\r\n                            </div>\r\n                            <div class=\"earnings__subtitle\">Выплаты по запросу</div>\r\n                            <div class=\"earnings__text\">Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.</div>\r\n                        </div>\r\n                        <div class=\"earnings__item\">\r\n                            <div class=\"earnings__svg\">\r\n                                <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M39.4196 41.0967C35.7201 41.0967 32.71 38.0866 32.71 34.387C32.71 30.6875 35.7201 27.6774 39.4196 27.6774C43.1192 27.6774 46.1293 30.6875 46.1293 34.387C46.1293 38.0866 43.1192 41.0967 39.4196 41.0967Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M16.7801 5.03137H13.2424C5.94478 5.03137 0.00503395 10.9686 0.000840401 18.2662L1.69155e-06 20.0015C-0.00251444 25.0522 2.80213 29.593 7.31942 31.8516C8.40052 32.3926 9.53865 32.8111 10.7036 33.0954L10.9032 33.1441L10.9099 25.1604H10.0704C8.68065 25.1604 7.55426 24.034 7.55426 22.6443C7.55426 21.2545 8.68065 20.1281 10.0704 20.1281H10.9091V18.4507C10.9091 17.524 11.6597 16.7733 12.5865 16.7733H22.6494C23.2683 16.7733 23.8034 17.113 24.0945 17.612H24.3285C25.7157 17.612 26.8446 16.4831 26.8446 15.0959C26.8446 9.54615 22.3298 5.03137 16.7801 5.03137Z\" fill=\"#41B7E9\"/>\r\n                                    <path d=\"M18.4574 20.9668C19.3825 20.9668 20.1348 21.7192 20.1348 22.6443H21.8122C21.8122 20.7941 20.3076 19.2894 18.4574 19.2894C16.6072 19.2894 15.1025 20.7941 15.1025 22.6443H16.78C16.78 21.7192 17.5323 20.9668 18.4574 20.9668Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M26.838 38.735C26.5746 38.6411 26.2945 38.5807 25.9993 38.5807H21.5483L20.3212 35.308C20.0461 34.575 19.6108 33.9334 19.0716 33.4042C22.5396 32.724 25.1648 29.6644 25.1648 25.9992V18.4508C25.1648 17.0636 24.0359 15.9347 22.6486 15.9347H12.5858C11.1986 15.9347 10.0697 17.0636 10.0697 18.4508V19.2895C8.21949 19.2895 6.71484 20.7942 6.71484 22.6444C6.71484 24.4946 8.21949 25.9992 10.0697 25.9992L10.0638 32.9387L10.7037 33.0955C11.0476 33.1794 11.3948 33.249 11.7446 33.3094C10.713 34.2773 10.0638 35.6486 10.0638 37.1717C10.0638 39.1988 10.6828 41.0834 11.7412 42.6476V52H23.4832V46.9678H27.6767V46.9695H31.0316C33.3439 46.9695 35.2251 45.0882 35.2251 42.7759C35.2251 42.4807 35.1647 42.2006 35.0708 41.9372L51.9993 41.9355V26.8388H26.838V38.735ZM21.4174 30.4653C21.1776 30.3899 20.9352 30.3186 20.7062 30.2288C19.6184 29.8011 18.8191 28.8273 18.5532 27.6766H23.2408C22.912 28.7762 22.2696 29.739 21.4174 30.4653ZM10.0697 24.3218C9.14459 24.3218 8.39226 23.5695 8.39226 22.6444C8.39226 21.7193 9.14459 20.967 10.0697 20.967H11.7471V18.4508C11.7471 17.9879 12.1237 17.6121 12.5858 17.6121H22.6495C23.1116 17.6121 23.4882 17.9879 23.4882 18.4508V25.9992H16.7802V26.8379C16.7802 28.8181 17.8814 30.6289 19.563 31.5313C18.9533 31.7469 18.2999 31.8702 17.6164 31.8702L14.4754 31.871C13.5579 31.871 12.6412 31.783 11.7421 31.6068L11.7488 24.3218H10.0697ZM21.8057 50.3226H13.4187V44.5339C15.143 46.0444 17.3933 46.9678 19.8599 46.9678H21.8057V50.3226ZM26.838 45.2904H19.8599C15.3829 45.2904 11.7412 41.6479 11.7412 37.1683C11.7412 35.173 13.365 33.5484 15.3611 33.5484C16.8616 33.5484 18.2236 34.492 18.7503 35.8977L20.031 39.312L18.5918 41.4709L19.9874 42.401L21.4157 40.2581H25.9993C26.4614 40.2581 26.838 40.6339 26.838 41.0968V41.0985V45.2904ZM32.709 41.9372C33.1711 41.9372 33.5477 42.3129 33.5477 42.7759C33.5477 44.1631 32.4188 45.292 31.0316 45.292H28.5154V41.444L29.4565 40.5047C29.6141 40.347 29.8246 40.2598 30.0494 40.2598H30.1928C30.655 40.2598 31.0316 40.6355 31.0316 41.0985V41.9372H32.709ZM50.3219 40.2581L40.2574 40.2589V38.5807C41.6446 38.5807 42.7735 37.4518 42.7735 36.0646C42.7735 34.6773 41.6446 33.5484 40.2574 33.5484H38.5799C38.1178 33.5484 37.7412 33.1727 37.7412 32.7097C37.7412 32.2468 38.1178 31.871 38.5799 31.871H40.2574C40.7195 31.871 41.0961 32.2468 41.0961 32.7097H42.7735C42.7735 31.3225 41.6446 30.1936 40.2574 30.1936V28.5162H50.3219V40.2581ZM38.5799 28.5162V30.1936C37.1927 30.1936 36.0638 31.3225 36.0638 32.7097C36.0638 34.0969 37.1927 35.2259 38.5799 35.2259H40.2574C40.7195 35.2259 41.0961 35.6016 41.0961 36.0646C41.0961 36.5275 40.7195 36.9033 40.2574 36.9033H38.5799C38.1178 36.9033 37.7412 36.5275 37.7412 36.0646H36.0638C36.0638 37.4518 37.1927 38.5807 38.5799 38.5807V40.2589L32.5656 40.2598C32.2192 39.2835 31.2865 38.5824 30.1928 38.5824H30.0486C29.4841 38.5824 28.9532 38.7761 28.5154 39.1175V28.5162H38.5799Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M48.1003 3.35484L45.5146 1.28574C44.4771 0.457097 43.1754 0 41.8478 0H34.3866C33.4615 0 32.7092 0.752323 32.7092 1.67742C32.7092 2.29135 32.887 2.85916 33.1755 3.35484H31.0318C29.6445 3.35484 28.5156 4.48374 28.5156 5.87097C28.5156 7.0309 29.3082 8.00045 30.3776 8.28981C30.261 8.58 30.193 8.89452 30.193 9.22581C30.193 10.3857 30.9856 11.3553 32.055 11.6446C31.9384 11.9348 31.8705 12.2494 31.8705 12.5806C31.8705 13.9679 32.9994 15.0968 34.3866 15.0968H42.2185C43.2819 15.0968 44.327 14.8074 45.2395 14.2597L48.0383 12.5806H51.9995V3.35484H48.1003ZM44.3765 12.8214C43.7239 13.213 42.9783 13.4194 42.2185 13.4194H34.3866C33.9245 13.4194 33.5479 13.0436 33.5479 12.5806C33.5479 12.1177 33.9245 11.7419 34.3866 11.7419H39.4189V10.0645H34.3866H32.7092C32.247 10.0645 31.8705 9.68877 31.8705 9.22581C31.8705 8.76284 32.247 8.3871 32.7092 8.3871H39.4189V6.70968H32.7092H31.0318C30.5696 6.70968 30.193 6.33394 30.193 5.87097C30.193 5.408 30.5696 5.03226 31.0318 5.03226H36.064H39.4189H39.8089L40.2416 5.68058C41.0199 6.85058 42.3241 7.54839 43.7307 7.54839H44.4511V5.87097H43.7307C42.8869 5.87097 42.1052 5.45245 41.6372 4.75045L40.7063 3.35484H39.4189H36.064C35.1389 3.35484 34.3866 2.60252 34.3866 1.67742H41.8478C42.7955 1.67742 43.7265 2.00368 44.4679 2.59665L46.9672 4.59697V11.2672L44.3765 12.8214ZM50.3221 10.9032H48.6447V5.03226H50.3221V10.9032Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M33.5479 16.7742H35.2253V25.1613H33.5479V16.7742Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M36.9023 23.4839H38.5798V25.1613H36.9023V23.4839Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M36.9023 16.7742H38.5798V21.8064H36.9023V16.7742Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M43.6123 23.4839H45.2897V25.1613H43.6123V23.4839Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M43.6123 16.7742H45.2897V21.8064H43.6123V16.7742Z\" fill=\"#1F2428\"/>\r\n                                    <path d=\"M40.2578 16.7742H41.9352V25.1613H40.2578V16.7742Z\" fill=\"#1F2428\"/>\r\n                                  </svg>\r\n                            </div>\r\n                            <div class=\"earnings__subtitle\">Начисляем кэшбэк £1 на 1 посылку</div>\r\n                            <div class=\"earnings__text\">За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n            <section class=\"join-program\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"join-program__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"join-program__row\">\r\n                                <div class=\"join-program__img-block\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"join-program__img\">\r\n                                </div>\r\n                                <div class=\"join-program__box\">\r\n                                    <h2 class=\"join-program__title\">Готовы начать зарабатывать вместе с нами?</h2>\r\n                                    <div class=\"join-program__text\">Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!</div>\r\n                                    <a href=\"#\" class=\"main-button green-button\">Присоедениться</a>                        \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                    <div class=\"footer__box footer__box-1\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"flex-row footer__row\">\r\n                        <div class=\"footer__box footer__box-2\">\r\n                            <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"footer__img\">\r\n                            </a>\r\n                            <div class=\"footer__icons-block\">\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">О компании</div>\r\n                            <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                            <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                            <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                            <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                            <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                            <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Полезное</div>\r\n                            <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                            <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                            <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                            <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                            <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Спецпроекты</div>\r\n                            <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                            <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                            <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                            <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                            <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./prices.html":
/*!*********************!*\
  !*** ./prices.html ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sr1.png */ "./images/sr1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sr2.png */ "./images/sr2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sr3.png */ "./images/sr3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sr4.png */ "./images/sr4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/do-1.png */ "./images/do-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/do-2.png */ "./images/do-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/do-3.png */ "./images/do-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/lp1.png */ "./images/lp1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Цены</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"services\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"services__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"services__text\">Услуги доставки из Великобритании</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"container\">\r\n                    <div class=\"flex-row services__flex\">\r\n                        <div class=\"services__item\">\r\n                            <div class=\"services__img-container\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"services__img\">\r\n                            </div>\r\n                            <div class=\"services__item-title\">Ваш личный адрес для покупок</div>\r\n                            <div class=\"services__item-text\">на нашем современном автоматизированном складе в\r\n                                безналоговом Делавэре</div>\r\n                            <button class=\"services__button\">Бесплатно</button>\r\n                        </div>\r\n                        <div class=\"services__item\">\r\n                            <div class=\"services__img-container\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"services__img\">\r\n                            </div>\r\n                            <div class=\"services__item-title\">Объединение нескольких посылок в одну</div>\r\n                            <div class=\"services__item-text\">ведь часто отправлять несколько посылок в одной коробке\r\n                                гораздо выгоднее, чем по одной</div>\r\n                            <button class=\"services__button\">от £10.00</button>\r\n                        </div>\r\n                        <div class=\"services__item\">\r\n                            <div class=\"services__img-container\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"services__img\">\r\n                            </div>\r\n                            <div class=\"services__item-title\">Усиленная упаковка по запросу</div>\r\n                            <div class=\"services__item-text\">Мы дополнительно упакуем вашу посылку в пленку, коробку с\r\n                                двойными стенками.</div>\r\n                            <button class=\"services__button\">от £0.25</button>\r\n                        </div>\r\n                        <div class=\"services__item\">\r\n                            <div class=\"services__img-container\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"services__img\">\r\n                            </div>\r\n                            <div class=\"services__item-title\">Хранение входящих посылок 30 дней</div>\r\n                            <div class=\"services__item-text\">чем больше срок хранения посылок на складе – тем больше вы\r\n                                сможете собрать</div>\r\n                            <button class=\"services__button\">Бесплатно</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"delivery\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"delivery__title title title\">OkeyPost удобная и быстрая доставка посылок из\r\n                        Великобритании </h2>\r\n                    <div class=\"delivery__text\">Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши\r\n                        посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам\r\n                        надежно упакованными.</div>\r\n                    <div class=\"flex-row\">\r\n                        <div class=\"delivery__box\">\r\n                            <form class=\"delivery__form\">\r\n                                <div class=\"delivery__grid\">\r\n                                    <div class=\"delivery__items delivery__items-1\">\r\n                                        <div class=\"delivery__subtitle\">Страна:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M21.7511 17.3036L16.2377 13.9126C16.141 13.8531 16.033 13.8146 15.9206 13.7994L13.603 13.487C13.429 13.4636 13.2521 13.4971 13.0987 13.5827C12.9454 13.6682 12.8238 13.8011 12.7524 13.9615L11.3611 17.0834C11.2964 17.2285 11.2757 17.3895 11.3015 17.5463C11.3274 17.7032 11.3987 17.849 11.5066 17.9657L13.416 20.0309C13.5025 20.1245 13.5659 20.2372 13.6008 20.3598C13.6357 20.4825 13.6413 20.6116 13.6171 20.7368L13.2282 22.7474\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M6.59668 5.64746L5.68828 7.79548C5.60729 7.98701 5.60281 8.2023 5.67577 8.39703L6.84281 11.5118C6.8906 11.6393 6.96969 11.7528 7.07281 11.8418C7.17592 11.9308 7.29976 11.9924 7.43292 12.021L9.6094 12.4888C9.73017 12.5148 9.84343 12.5679 9.94057 12.6443C10.0377 12.7206 10.1162 12.818 10.17 12.9292L10.5565 13.7277C10.623 13.8651 10.7269 13.981 10.8563 14.0621C10.9856 14.1432 11.1352 14.1862 11.2878 14.1862H12.6521\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M15.4841 3.56982L16.432 5.26779C16.5216 5.4283 16.5542 5.61446 16.5243 5.79586C16.4944 5.97725 16.4039 6.14316 16.2676 6.26647L13.5345 8.73825C13.4881 8.7802 13.437 8.81665 13.3822 8.84689L12.1389 9.53348C12.0187 9.5999 11.8835 9.63473 11.7462 9.63473H9.57828C9.41841 9.63473 9.26209 9.68189 9.1289 9.77031C8.99571 9.85874 8.89156 9.98448 8.8295 10.1318L7.98376 12.1395\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <select name=\"Страна\" class=\"delivery__select\">\r\n\r\n                                            <option class=\"delivery__option\" value=\"Россия\">\r\n                                                Россия\r\n                                            </option>\r\n                                            <option class=\"delivery__option\" value=\"Америка\">Америка</option>\r\n                                            <option class=\"delivery__option\" value=\"Великобритания\">Великобритания\r\n                                            </option>\r\n                                            <option class=\"delivery__option\" value=\"Германия\">Германия</option>\r\n                                            <option class=\"delivery__option\" value=\"Франция\">Франция</option>\r\n                                            <option class=\"delivery__option\" value=\"япония\">Япония</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-2\">\r\n                                        <div class=\"delivery__subtitle\">Город:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M1.625 21.9358H24.375\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M14.6244 21.9358V4.06079C14.6244 3.8453 14.5388 3.63864 14.3864 3.48627C14.234 3.33389 14.0274 3.24829 13.8119 3.24829H4.06189C3.8464 3.24829 3.63974 3.33389 3.48737 3.48627C3.33499 3.63864 3.24939 3.8453 3.24939 4.06079V21.9358\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M22.7494 21.9358V10.5608C22.7494 10.3453 22.6638 10.1386 22.5114 9.98627C22.359 9.83389 22.1524 9.74829 21.9369 9.74829H14.6244\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M6.49939 7.31079H9.74939\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M8.12439 13.8108H11.3744\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M6.49939 17.8733H9.74939\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M17.8744 17.8733H19.4994\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M17.8744 13.8108H19.4994\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <input type=\"text\" placeholder=\"Москва\" class=\"delivery__input\">\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-3\">\r\n                                        <div class=\"delivery__subtitle\">Индекс:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M11.375 11.375H17.875\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M11.375 14.625H17.875\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M21.125 4.0625H4.875C4.42627 4.0625 4.0625 4.42627 4.0625 4.875V21.125C4.0625 21.5737 4.42627 21.9375 4.875 21.9375H21.125C21.5737 21.9375 21.9375 21.5737 21.9375 21.125V4.875C21.9375 4.42627 21.5737 4.0625 21.125 4.0625Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M8.125 4.0625V21.9375\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <input type=\"text\" placeholder=\"Введите индекс\" class=\"delivery__input\">\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-4\">\r\n                                        <div class=\"delivery__subtitle\">Вес посылки:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M8.9375 5.6875H6.5C6.05127 5.6875 5.6875 6.05127 5.6875 6.5V19.5C5.6875 19.9487 6.05127 20.3125 6.5 20.3125H8.9375C9.38623 20.3125 9.75 19.9487 9.75 19.5V6.5C9.75 6.05127 9.38623 5.6875 8.9375 5.6875Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M19.5 5.6875H17.0625C16.6138 5.6875 16.25 6.05127 16.25 6.5V19.5C16.25 19.9487 16.6138 20.3125 17.0625 20.3125H19.5C19.9487 20.3125 20.3125 19.9487 20.3125 19.5V6.5C20.3125 6.05127 19.9487 5.6875 19.5 5.6875Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M20.3125 8.125H22.75C22.9655 8.125 23.1722 8.2106 23.3245 8.36298C23.4769 8.51535 23.5625 8.72201 23.5625 8.9375V17.0625C23.5625 17.278 23.4769 17.4847 23.3245 17.637C23.1722 17.7894 22.9655 17.875 22.75 17.875H20.3125\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M5.6875 17.875H3.25C3.03451 17.875 2.82785 17.7894 2.67548 17.637C2.5231 17.4847 2.4375 17.278 2.4375 17.0625V8.9375C2.4375 8.72201 2.5231 8.51535 2.67548 8.36298C2.82785 8.2106 3.03451 8.125 3.25 8.125H5.6875\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M9.75 13H16.25\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M23.5625 13H25.1875\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M0.8125 13H2.4375\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <input type=\"text\" placeholder=\"0,5\" class=\"delivery__input\">\r\n                                    </div>\r\n                                    <div class=\"delivery__items delivery__items-5\">\r\n                                        <div class=\"delivery__subtitle\">Дополнительные услуги:</div>\r\n                                        <svg class=\"delivery__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M20.3125 22.75H5.68746C5.47198 22.75 5.26532 22.6644 5.11296 22.512C4.96059 22.3596 4.87499 22.153 4.875 21.9375V4.0625C4.87499 3.84702 4.96059 3.64036 5.11296 3.48798C5.26532 3.33561 5.47198 3.25001 5.68746 3.25H15.4378L21.125 8.9375V21.9375C21.125 22.153 21.0394 22.3596 20.887 22.512C20.7347 22.6644 20.528 22.75 20.3125 22.75V22.75Z\"\r\n                                                stroke=\"#1F2428\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M15.4375 3.25V8.9375H21.1258\" stroke=\"#1F2428\"\r\n                                                stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path d=\"M9.75 13.8125H16.25\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                            <path d=\"M9.75 17.0625H16.25\" stroke=\"#1F2428\" stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <select name=\"Страна\" class=\"delivery__select\">\r\n                                            <option class=\"delivery__option disabled\" value=\"\">Выберите услуги</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </form>\r\n                            <a href=\"#\" class=\"main-button green-button delivery__button\">Рассчитать</a>\r\n                        </div>\r\n                    </div>\r\n            </section>\r\n            <section class=\"delivery-options\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"delivery-options__title title\">Варианты доставки:</h2>\r\n                    <ul class=\"delivery-options__list\">\r\n                        <li class=\"delivery-options__items\">\r\n                            <div class=\"delivery-options__left-block\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"delivery-options__img\">\r\n                                <div class=\"delivery-options__text\">Почта России</div>\r\n                            </div>\r\n                            <div class=\"delivery-options__right-block\">\r\n                                <div class=\"delivery-options__right-box delivery-options__box-1\">\r\n                                    <div class=\"delivery-options__small-text\">Сроки:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">10-14 дней</div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-2\">\r\n                                    <div class=\"delivery-options__small-text\">Стоимость доставки:</div>\r\n                                    <div class=\"delivery-options__text  delivery-options__text--size\">от £27.00\r\n                                        <svg class=\"delivery-options__info\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#C0C9D7\" />\r\n                                            <path\r\n                                                d=\"M9.37987 10.6423L9.27284 11.0797C8.95178 11.2065 8.69531 11.3029 8.50433 11.3692C8.31315 11.4357 8.091 11.4688 7.8379 11.4688C7.44922 11.4688 7.14689 11.3736 6.93127 11.1845C6.71565 10.9946 6.6078 10.754 6.6078 10.4621C6.6078 10.3491 6.61563 10.2329 6.6319 10.1145C6.6483 9.99593 6.67439 9.86241 6.71009 9.71317L7.11133 8.29299C7.14703 8.157 7.17737 8.02814 7.20167 7.90629C7.22632 7.7852 7.23819 7.67378 7.23819 7.57349C7.23819 7.39212 7.20064 7.26526 7.12589 7.19394C7.05113 7.12282 6.90848 7.08671 6.6967 7.08671C6.59297 7.08671 6.48636 7.10332 6.37769 7.13545C6.26854 7.16771 6.17525 7.19888 6.09692 7.22785L6.20422 6.79001C6.46707 6.68299 6.71832 6.59135 6.95866 6.51528C7.199 6.43902 7.42608 6.40085 7.64088 6.40085C8.02689 6.40085 8.32475 6.49414 8.53392 6.68072C8.74309 6.86745 8.84764 7.1095 8.84764 7.40777C8.84764 7.46949 8.84077 7.57823 8.82602 7.73364C8.8116 7.88941 8.78476 8.03212 8.74563 8.16194L8.3461 9.57643C8.31335 9.69004 8.2839 9.81992 8.2583 9.96607C8.23187 10.1113 8.21924 10.2222 8.21924 10.2966C8.21924 10.4844 8.26111 10.6127 8.34507 10.6808C8.42964 10.749 8.57531 10.7829 8.78222 10.7829C8.87935 10.7829 8.98988 10.7657 9.11269 10.7318C9.23516 10.698 9.32447 10.6683 9.37987 10.6423ZM9.48119 4.70381C9.48119 4.95025 9.38831 5.16073 9.20166 5.33379C9.01548 5.50747 8.79114 5.59437 8.5287 5.59437C8.26544 5.59437 8.04055 5.50747 7.85225 5.33379C7.66429 5.16066 7.5701 4.95025 7.5701 4.70381C7.5701 4.45784 7.66429 4.24702 7.85225 4.07177C8.0402 3.89678 8.26551 3.80933 8.5287 3.80933C8.79107 3.80933 9.01548 3.89699 9.20166 4.07177C9.38845 4.24702 9.48119 4.45791 9.48119 4.70381Z\"\r\n                                                fill=\"#F2F6FC\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-3\">\r\n                                    <div class=\"delivery-options__small-text\">Итого:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">£41.99</div>\r\n                                </div>\r\n                                <svg class=\"delivery-options__arrow-down\" width=\"16\" height=\"9\" viewBox=\"0 0 16 9\"\r\n                                    fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M1 1L8 8L15 1\" stroke=\"#01CD7D\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                                        stroke-linejoin=\"round\" />\r\n                                </svg>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"delivery-options__items\">\r\n                            <div class=\"delivery-options__left-block\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"delivery-options__img\">\r\n                                <div class=\"delivery-options__text\">EMS ПОЧТА РОССИЯ</div>\r\n                            </div>\r\n                            <div class=\"delivery-options__right-block\">\r\n                                <div class=\"delivery-options__right-box delivery-options__box-1\">\r\n                                    <div class=\"delivery-options__small-text\">Сроки:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">9-12 дней</div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-2\">\r\n                                    <div class=\"delivery-options__small-text\">Стоимость доставки:</div>\r\n                                    <div class=\"delivery-options__text  delivery-options__text--size\">от £40.00\r\n                                        <svg class=\"delivery-options__info\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#C0C9D7\" />\r\n                                            <path\r\n                                                d=\"M9.37987 10.6423L9.27284 11.0797C8.95178 11.2065 8.69531 11.3029 8.50433 11.3692C8.31315 11.4357 8.091 11.4688 7.8379 11.4688C7.44922 11.4688 7.14689 11.3736 6.93127 11.1845C6.71565 10.9946 6.6078 10.754 6.6078 10.4621C6.6078 10.3491 6.61563 10.2329 6.6319 10.1145C6.6483 9.99593 6.67439 9.86241 6.71009 9.71317L7.11133 8.29299C7.14703 8.157 7.17737 8.02814 7.20167 7.90629C7.22632 7.7852 7.23819 7.67378 7.23819 7.57349C7.23819 7.39212 7.20064 7.26526 7.12589 7.19394C7.05113 7.12282 6.90848 7.08671 6.6967 7.08671C6.59297 7.08671 6.48636 7.10332 6.37769 7.13545C6.26854 7.16771 6.17525 7.19888 6.09692 7.22785L6.20422 6.79001C6.46707 6.68299 6.71832 6.59135 6.95866 6.51528C7.199 6.43902 7.42608 6.40085 7.64088 6.40085C8.02689 6.40085 8.32475 6.49414 8.53392 6.68072C8.74309 6.86745 8.84764 7.1095 8.84764 7.40777C8.84764 7.46949 8.84077 7.57823 8.82602 7.73364C8.8116 7.88941 8.78476 8.03212 8.74563 8.16194L8.3461 9.57643C8.31335 9.69004 8.2839 9.81992 8.2583 9.96607C8.23187 10.1113 8.21924 10.2222 8.21924 10.2966C8.21924 10.4844 8.26111 10.6127 8.34507 10.6808C8.42964 10.749 8.57531 10.7829 8.78222 10.7829C8.87935 10.7829 8.98988 10.7657 9.11269 10.7318C9.23516 10.698 9.32447 10.6683 9.37987 10.6423ZM9.48119 4.70381C9.48119 4.95025 9.38831 5.16073 9.20166 5.33379C9.01548 5.50747 8.79114 5.59437 8.5287 5.59437C8.26544 5.59437 8.04055 5.50747 7.85225 5.33379C7.66429 5.16066 7.5701 4.95025 7.5701 4.70381C7.5701 4.45784 7.66429 4.24702 7.85225 4.07177C8.0402 3.89678 8.26551 3.80933 8.5287 3.80933C8.79107 3.80933 9.01548 3.89699 9.20166 4.07177C9.38845 4.24702 9.48119 4.45791 9.48119 4.70381Z\"\r\n                                                fill=\"#F2F6FC\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-3\">\r\n                                    <div class=\"delivery-options__small-text\">Итого:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">£54.55</div>\r\n                                </div>\r\n                                <svg class=\"delivery-options__arrow-down\" width=\"16\" height=\"9\" viewBox=\"0 0 16 9\"\r\n                                    fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M1 1L8 8L15 1\" stroke=\"#01CD7D\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                                        stroke-linejoin=\"round\" />\r\n                                </svg>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"delivery-options__items\">\r\n                            <div class=\"delivery-options__left-block\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"delivery-options__img\">\r\n                                <div class=\"delivery-options__text\">ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</div>\r\n                            </div>\r\n                            <div class=\"delivery-options__right-block\">\r\n                                <div class=\"delivery-options__right-box delivery-options__box-1\">\r\n                                    <div class=\"delivery-options__small-text\">Сроки:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">10-14 дней</div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-2\">\r\n                                    <div class=\"delivery-options__small-text\">Стоимость доставки:</div>\r\n                                    <div class=\"delivery-options__text  delivery-options__text--size\">от £13.00\r\n                                        <svg class=\"delivery-options__info\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#C0C9D7\" />\r\n                                            <path\r\n                                                d=\"M9.37987 10.6423L9.27284 11.0797C8.95178 11.2065 8.69531 11.3029 8.50433 11.3692C8.31315 11.4357 8.091 11.4688 7.8379 11.4688C7.44922 11.4688 7.14689 11.3736 6.93127 11.1845C6.71565 10.9946 6.6078 10.754 6.6078 10.4621C6.6078 10.3491 6.61563 10.2329 6.6319 10.1145C6.6483 9.99593 6.67439 9.86241 6.71009 9.71317L7.11133 8.29299C7.14703 8.157 7.17737 8.02814 7.20167 7.90629C7.22632 7.7852 7.23819 7.67378 7.23819 7.57349C7.23819 7.39212 7.20064 7.26526 7.12589 7.19394C7.05113 7.12282 6.90848 7.08671 6.6967 7.08671C6.59297 7.08671 6.48636 7.10332 6.37769 7.13545C6.26854 7.16771 6.17525 7.19888 6.09692 7.22785L6.20422 6.79001C6.46707 6.68299 6.71832 6.59135 6.95866 6.51528C7.199 6.43902 7.42608 6.40085 7.64088 6.40085C8.02689 6.40085 8.32475 6.49414 8.53392 6.68072C8.74309 6.86745 8.84764 7.1095 8.84764 7.40777C8.84764 7.46949 8.84077 7.57823 8.82602 7.73364C8.8116 7.88941 8.78476 8.03212 8.74563 8.16194L8.3461 9.57643C8.31335 9.69004 8.2839 9.81992 8.2583 9.96607C8.23187 10.1113 8.21924 10.2222 8.21924 10.2966C8.21924 10.4844 8.26111 10.6127 8.34507 10.6808C8.42964 10.749 8.57531 10.7829 8.78222 10.7829C8.87935 10.7829 8.98988 10.7657 9.11269 10.7318C9.23516 10.698 9.32447 10.6683 9.37987 10.6423ZM9.48119 4.70381C9.48119 4.95025 9.38831 5.16073 9.20166 5.33379C9.01548 5.50747 8.79114 5.59437 8.5287 5.59437C8.26544 5.59437 8.04055 5.50747 7.85225 5.33379C7.66429 5.16066 7.5701 4.95025 7.5701 4.70381C7.5701 4.45784 7.66429 4.24702 7.85225 4.07177C8.0402 3.89678 8.26551 3.80933 8.5287 3.80933C8.79107 3.80933 9.01548 3.89699 9.20166 4.07177C9.38845 4.24702 9.48119 4.45791 9.48119 4.70381Z\"\r\n                                                fill=\"#F2F6FC\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"delivery-options__right-box delivery-options__box-3\">\r\n                                    <div class=\"delivery-options__small-text\">Итого:</div>\r\n                                    <div class=\"delivery-options__text delivery-options__text--size\">£90.50</div>\r\n                                </div>\r\n                                <svg class=\"delivery-options__arrow-down\" width=\"16\" height=\"9\" viewBox=\"0 0 16 9\"\r\n                                    fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"M1 1L8 8L15 1\" stroke=\"#01CD7D\" stroke-width=\"1.5\" stroke-linecap=\"round\"\r\n                                        stroke-linejoin=\"round\" />\r\n                                </svg>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </section>\r\n            <section class=\"warehouse-services\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"warehouse-services__title title\">Услуги склада</h2>\r\n                    <div class=\"warehouse-services__row\">\r\n                        <div class=\"warehouse-services__box\">\r\n                            <div class=\"warehouse-services__items warehouse-services__items-1\">\r\n                                <div class=\"warehouse-services__bold-text\">Консолидация </div>\r\n                                <div class=\"warehouse-services__price-text\">£1.00/1 трек</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__items warehouse-services__items-2\">\r\n                                <div class=\"warehouse-services__bold-text\">Дополнительная упаковка</div>\r\n                                <div class=\"warehouse-services__price-text\">£5.00</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__items warehouse-services__items-3\">\r\n                                <div class=\"warehouse-services__bold-text\">Заполнение декларации</div>\r\n                                <div class=\"warehouse-services__price-text\">£1.00</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"warehouse-services__box\">\r\n                            <div class=\"warehouse-services__items warehouse-services__items-4\">\r\n                                <div class=\"warehouse-services__bold-text\">Заполнение декларации</div>\r\n                                <div class=\"warehouse-services__price-text\">£1.00</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__items warehouse-services__items-5\">\r\n                                <div class=\"warehouse-services__bold-text\">Упаковка xрупкиx предметов</div>\r\n                                <div class=\"warehouse-services__price-text\">£10.00</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__items warehouse-services__items-6\">\r\n                                <div class=\"warehouse-services__bold-text\">Разделение заказа </div>\r\n                                <div class=\"warehouse-services__price-text\">£2.00</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"warehouse-services__bottom-row\">\r\n                        <div class=\"warehouse-services__bottom-item warehouse-services__items-7\">\r\n                            <div class=\"warehouse-services__bottom-box\">\r\n                                <div class=\"warehouse-services__bold-text warehouse-services__text-lh\">Сборка исходящей\r\n                                    посылки вне очереди или экспресс сборка</div>\r\n                                <div class=\"warehouse-services__text\">Чтобы сэкономить время</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__price-text warehouse-services__bottom-text\">£5.00</div>\r\n                        </div>\r\n                        <div class=\"warehouse-services__bottom-item warehouse-services__items-8\">\r\n                            <div class=\"warehouse-services__bottom-box\">\r\n                                <div class=\"warehouse-services__bold-text  warehouse-services__text-lh\">Фото содержимого\r\n                                    входящей посылки</div>\r\n                                <div class=\"warehouse-services__text\">3 фото за $5 или 10 фото за $8, а ещё можно\r\n                                    попросить сфотографировать бирку или подарочный сертификат</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__price-text warehouse-services__bottom-text\">£1.00 за 1 фото\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"warehouse-services__bottom-item warehouse-services__items-9\">\r\n                            <div class=\"warehouse-services__bottom-box\">\r\n                                <div class=\"warehouse-services__bold-text  warehouse-services__text-lh\">Возврат вещей в\r\n                                    магазин</div>\r\n                                <div class=\"warehouse-services__text\">В случае, если вещи нельзя отправить в страну\r\n                                    назначения, возврат в магазин для услуги \"Виртуальный адрес\"</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__price-text warehouse-services__bottom-text\">£10 + почтовые\r\n                                расходы</div>\r\n                        </div>\r\n                        <div class=\"warehouse-services__bottom-item warehouse-services__items-10\">\r\n                            <div class=\"warehouse-services__bottom-box\">\r\n                                <div class=\"warehouse-services__bold-text  warehouse-services__text-lh\">Проверка техники\r\n                                    на работоспособность</div>\r\n                                <div class=\"warehouse-services__text\">Проверка электроники на включение/выключение\r\n                                    (запрос через тикеты).</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__price-text warehouse-services__bottom-text\">£10</div>\r\n                        </div>\r\n                        <div class=\"warehouse-services__bottom-item warehouse-services__items-11\">\r\n                            <div class=\"warehouse-services__bottom-box\">\r\n                                <div class=\"warehouse-services__bold-text  warehouse-services__text-lh\">Удаление инвойса\r\n                                </div>\r\n                                <div class=\"warehouse-services__text\">Lorem ipsum dolor sit amet, consectetur adipiscing\r\n                                    elit</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__price-text warehouse-services__bottom-text\">Бесплатно</div>\r\n                        </div>\r\n                        <div class=\"warehouse-services__bottom-item warehouse-services__items-12\">\r\n                            <div class=\"warehouse-services__bottom-box\">\r\n                                <div class=\"warehouse-services__bold-text  warehouse-services__text-lh\">Дополнительная\r\n                                    упаковка</div>\r\n                                <div class=\"warehouse-services__text\">Lorem ipsum dolor sit amet, consectetur adipiscing\r\n                                    elit</div>\r\n                            </div>\r\n                            <div class=\"warehouse-services__price-text warehouse-services__bottom-text\">По\r\n                                договоренности</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"purchases\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"purchases__title title\">Покупки с операторами Okeypost.com</h2>\r\n                    <div class=\"purchases__box purchases__box-1\">\r\n                        <div class=\"purchases__left-block\">\r\n                            <div class=\"purchases__bold-text\">Быстрое оформление покупок в интернет-магазинах</div>\r\n                            <div class=\"purchases__text\">Вы присылаете ссылки, а оформлением заказов занимаются\r\n                                операторы Почтой.ком. Они сделают покупки за вас, проконтролируют доставку на склад и\r\n                                сообщат, когда всё будет готово.</div>\r\n                        </div>\r\n                        <div class=\"purchases__price\">5% от стоимости товаров <br>\r\n                            минимум £7 для каждого магазина <br>\r\n                            Но не менее £7 для каждого лота eBay</div>\r\n\r\n                    </div>\r\n                    <div class=\"purchases__box purchases__box-2\">\r\n                        <div class=\"purchases__left-block\">\r\n                            <div class=\"purchases__bold-text\">Фото товара по услуге \"Покупка с операторами\"</div>\r\n                            <div class=\"purchases__text\">Три фото выбранного вами товара, приобретенного по услуге\r\n                                \"Полное сопровождение\"</div>\r\n                        </div>\r\n                        <div class=\"purchases__price purchases__price--width\">£2</div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n            <section class=\"link-product\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"link-product__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row link-product__adaptive-flex\">\r\n                                <div class=\"link-product__img-container\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"link-product__img\">\r\n                                </div>\r\n                                <div class=\"link-product__box\">\r\n                                    <h2 class=\"link-product__title\">Попробуйте заказывать с оператором прямо сейчас.\r\n                                        Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.\r\n                                    </h2>\r\n                                    <div class=\"link-product__label\">\r\n                                        <svg class=\"link-product__svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M12.4258 7.25477L14.4366 5.24393C14.8515 4.82865 15.3441 4.49919 15.8864 4.27435C16.4286 4.04952 17.0099 3.93373 17.5969 3.93359C18.1839 3.93346 18.7652 4.04898 19.3076 4.27356C19.8499 4.49814 20.3427 4.82737 20.7578 5.24246C21.1729 5.65755 21.5021 6.15035 21.7267 6.69271C21.9513 7.23507 22.0668 7.81636 22.0667 8.40338C22.0666 8.9904 21.9508 9.57164 21.7259 10.1139C21.5011 10.6562 21.1716 11.1488 20.7564 11.5637L17.8837 14.4363C17.4688 14.8513 16.9761 15.1804 16.434 15.405C15.8918 15.6296 15.3107 15.7452 14.7238 15.7452C14.137 15.7452 13.5559 15.6296 13.0137 15.405C12.4716 15.1804 11.9789 14.8513 11.564 14.4363\"\r\n                                                stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                            <path\r\n                                                d=\"M13.5745 18.7453L11.5637 20.7561C11.1488 21.1714 10.6562 21.5009 10.1139 21.7257C9.57164 21.9505 8.9904 22.0663 8.40338 22.0665C7.81636 22.0666 7.23507 21.9511 6.69271 21.7265C6.15035 21.5019 5.65755 21.1727 5.24246 20.7576C4.82737 20.3425 4.49814 19.8497 4.27356 19.3074C4.04898 18.765 3.93346 18.1837 3.93359 17.5967C3.93373 17.0097 4.04952 16.4284 4.27435 15.8862C4.49919 15.3439 4.82865 14.8513 5.24393 14.4364L8.11655 11.5637C8.53151 11.1488 9.02415 10.8196 9.56632 10.595C10.1085 10.3705 10.6896 10.2549 11.2764 10.2549C11.8633 10.2549 12.4444 10.3705 12.9866 10.595C13.5287 10.8196 14.0214 11.1488 14.4363 11.5637\"\r\n                                                stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                        <input placeholder=\"Введите ссылку на товар\" type=\"text\"\r\n                                            class=\"link-product__input\">\r\n                                    </div>\r\n\r\n                                    <div class=\"link-product__row\">\r\n                                        <a href=\"#\" class=\"main-button green-button link-product__link\">Отправить</a>\r\n                                        <div class=\"link-product__text\">Нажимая на кнопку вы подтверждаете согласие с\r\n                                            правилами предоставления услуги и политикой конфиденциальности</div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n            <section class=\"insurance\">\r\n                <div class=\"container\">\r\n                    <div class=\"insurance__title title\">Страхование</div>\r\n                    <div class=\"insurance__box\">\r\n                        <div class=\"insurance__bold-text\">Дополнительное страxование</div>\r\n                        <div class=\"insurance__price\">5% от суммы на которую xотите застраxовать</div>\r\n                    </div>\r\n                    <div class=\"insurance__box\">\r\n                        <div class=\"insurance__bold-text\">Почта России и ЕМС</div>\r\n                        <div class=\"insurance__price\">Застраxовано по умолчанию на £50.00</div>\r\n                    </div>\r\n                    <div class=\"insurance__box\">\r\n                        <div class=\"insurance__bold-text\">Мелкие пакеты</div>\r\n                        <div class=\"insurance__price\">Застраxовано на £20.00</div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"additional-packaging\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"additional-packaging__title title\">Дополнительная упаковка</h2>\r\n                    <div class=\"additional-packaging__row\">\r\n                        <div class=\"additional-packaging__box\">\r\n                            <div class=\"additional-packaging__left-block\">\r\n                                <div class=\"additional-packaging__bold-text\">Многослойная пленка</div>\r\n                                <div class=\"additional-packaging__text\">Дополнительная защита покупок</div>\r\n                            </div>\r\n                            <div class=\"additional-packaging__price\">£3.99</div>\r\n                        </div>\r\n                        <div class=\"additional-packaging__box\">\r\n                            <div class=\"additional-packaging__left-block\">\r\n                                <div class=\"additional-packaging__bold-text\">Упаковка в пакет</div>\r\n                                <div class=\"additional-packaging__text\">Надежно защищает от влаги</div>\r\n                            </div>\r\n                            <div class=\"additional-packaging__price\">£1.99</div>\r\n                        </div>\r\n                        <div class=\"additional-packaging__box\">\r\n                            <div class=\"additional-packaging__left-block\">\r\n                                <div class=\"additional-packaging__bold-text\">Упаковка в коробку с двойными стенками</div>\r\n                                <div class=\"additional-packaging__text\">Надежно защищает от влаги</div>\r\n                            </div>\r\n                            <div class=\"additional-packaging__price\">£4.99</div>\r\n                        </div>\r\n                        <div class=\"additional-packaging__box\">\r\n                            <div class=\"additional-packaging__left-block\">\r\n                                <div class=\"additional-packaging__bold-text\">Наклейка “Обращаться с осторожностью”</div>\r\n                                <div class=\"additional-packaging__text\">Дополнительная защита покупок</div>\r\n                            </div>\r\n                            <div class=\"additional-packaging__price\">£0.25</div>\r\n                        </div>\r\n                        <div class=\"additional-packaging__box\">\r\n                            <div class=\"additional-packaging__left-block\">\r\n                                <div class=\"additional-packaging__bold-text\">Наклейка “Хрупкий груз”</div>\r\n                                <div class=\"additional-packaging__text\">Дополнительная защита покупок</div>\r\n                            </div>\r\n                            <div class=\"additional-packaging__price\">£0.25</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"contact\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"contact__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row contact__row\">\r\n                                <h2 class=\"contact__title\">Остались вопросы? Спросите нас в соцсетях!</h2>\r\n                                <div class=\"contact__icons\">\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M44.4313 21.6147C41.6399 18.7645 37.7812 17.2173 33.8405 17.2173C25.4663 17.2173 18.7342 23.9763 18.8163 32.2011C18.8163 34.8069 19.5552 37.3314 20.7867 39.6115L18.6521 47.3477L26.6157 45.3119C28.8324 46.5334 31.2954 47.1034 33.7584 47.1034C42.0504 47.1034 48.7825 40.3444 48.7825 32.1196C48.7825 28.1294 47.2226 24.3834 44.4313 21.6147ZM33.8405 44.579C31.6238 44.579 29.4071 44.0089 27.5188 42.8689L27.0262 42.6246L22.2645 43.8461L23.496 39.2044L23.1676 38.7158C19.5552 32.934 21.2793 25.2792 27.1904 21.6961C33.1016 18.1131 40.7368 19.8232 44.3492 25.6864C47.9615 31.5496 46.2375 39.1229 40.3263 42.706C38.438 43.9275 36.1392 44.579 33.8405 44.579ZM41.0652 35.5398L40.1621 35.1327C40.1621 35.1327 38.8485 34.5626 38.0275 34.1555C37.9454 34.1555 37.8633 34.074 37.7812 34.074C37.5349 34.074 37.3707 34.1555 37.2065 34.2369C37.2065 34.2369 37.1244 34.3183 35.975 35.6213C35.8929 35.7841 35.7287 35.8656 35.5646 35.8656H35.4825C35.4004 35.8656 35.2362 35.7841 35.1541 35.7027L34.7436 35.5398C33.8405 35.1327 33.0195 34.6441 32.3627 33.9926C32.1985 33.8297 31.9522 33.6669 31.788 33.504C31.2133 32.934 30.6386 32.2825 30.2281 31.5496L30.146 31.3867C30.0639 31.3053 30.0639 31.2239 29.9818 31.061C29.9818 30.8981 29.9818 30.7353 30.0639 30.6538C30.0639 30.6538 30.3923 30.2467 30.6386 30.0024C30.8028 29.8395 30.8849 29.5952 31.0491 29.4323C31.2133 29.188 31.2954 28.8623 31.2133 28.618C31.1312 28.2108 30.146 26.0121 29.8997 25.5235C29.7355 25.2792 29.5713 25.1978 29.325 25.1163H29.0787C28.9145 25.1163 28.6682 25.1163 28.4219 25.1163C28.2577 25.1163 28.0935 25.1978 27.9293 25.1978L27.8472 25.2792C27.683 25.3606 27.5188 25.5235 27.3546 25.6049C27.1904 25.7678 27.1083 25.9307 26.9441 26.0935C26.3694 26.8265 26.041 27.7222 26.041 28.618C26.041 29.2695 26.2052 29.9209 26.4515 30.491L26.5336 30.7353C27.2725 32.2825 28.2577 33.6669 29.5713 34.8884L29.8997 35.2141C30.146 35.4584 30.3923 35.6213 30.5565 35.8656C32.2806 37.3314 34.251 38.39 36.4676 38.9601C36.7139 39.0415 37.0423 39.0415 37.2886 39.1229C37.5349 39.1229 37.8633 39.1229 38.1096 39.1229C38.5201 39.1229 39.0127 38.9601 39.3411 38.7972C39.5874 38.6343 39.7516 38.6343 39.9158 38.4715L40.08 38.3086C40.2442 38.1457 40.4084 38.0643 40.5726 37.9014C40.7368 37.7386 40.901 37.5757 40.9831 37.4128C41.1473 37.0871 41.2294 36.6799 41.3115 36.2727C41.3115 36.1099 41.3115 35.8656 41.3115 35.7027C41.3115 35.7027 41.2294 35.6213 41.0652 35.5398Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M45.6111 20.3423C44.8165 19.6117 41.5995 17.2727 34.4285 17.2406C34.4285 17.2406 25.9759 16.7279 21.8553 20.5089C19.5611 22.8031 18.7537 26.1547 18.6703 30.3201C18.587 34.4791 18.4781 42.2781 25.9951 44.3929H26.0015L25.9951 47.6163C25.9951 47.6163 25.9503 48.9236 26.809 49.1863C27.8471 49.5068 28.4623 48.5135 29.4556 47.4433C30.0003 46.8537 30.7501 45.995 31.3205 45.3349C36.46 45.7643 40.4139 44.7774 40.8625 44.63C41.9007 44.2903 47.7772 43.5406 48.732 35.7416C49.7189 27.7183 48.2514 22.6365 45.6111 20.3423ZM46.4827 35.1776C45.6752 41.6885 40.9138 42.0987 40.0359 42.3807C39.6642 42.5024 36.1908 43.3675 31.8203 43.0792C31.8203 43.0792 28.5649 47.0075 27.5524 48.0264C27.3921 48.1866 27.2063 48.2507 27.0845 48.2187C26.9115 48.1738 26.8602 47.9688 26.8667 47.6676C26.8667 47.2318 26.8923 42.3038 26.8923 42.3038C26.8859 42.3038 26.8859 42.3038 26.8923 42.3038C20.5288 40.5414 20.9005 33.9024 20.971 30.429C21.0414 26.9557 21.6951 24.104 23.6368 22.1879C27.1166 19.035 34.3004 19.5028 34.3004 19.5028C40.3627 19.5284 43.2657 21.3548 43.9386 21.9636C46.1751 23.8861 47.3158 28.4681 46.4827 35.1776Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M37.3827 30.5509C37.1712 30.5509 36.9918 30.3843 36.9789 30.1664C36.9084 28.7886 36.2612 28.1157 34.9411 28.0452C34.7168 28.0324 34.5438 27.8402 34.5566 27.6159C34.5694 27.3916 34.7616 27.2186 34.9859 27.2314C36.729 27.3275 37.7031 28.3272 37.7928 30.1216C37.8056 30.3458 37.6326 30.5381 37.4083 30.5445C37.3955 30.5509 37.3891 30.5509 37.3827 30.5509Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M39.4593 31.2434H39.4529C39.2286 31.237 39.0492 31.0512 39.0556 30.8269C39.0876 29.4427 38.6903 28.3212 37.8444 27.3984C37.0049 26.4756 35.845 25.9758 34.3134 25.8668C34.0891 25.8476 33.9225 25.6553 33.9417 25.4311C33.9609 25.2068 34.1532 25.0401 34.3775 25.0594C36.1077 25.1875 37.4727 25.7899 38.4468 26.8537C39.4273 27.9239 39.9015 29.2633 39.8694 30.8461C39.863 31.0704 39.6772 31.2434 39.4593 31.2434Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M41.5868 32.0765C41.3625 32.0765 41.1831 31.8971 41.1831 31.6728C41.1638 29.1927 40.4525 27.3023 39.0042 25.886C37.5752 24.489 35.7616 23.7777 33.6276 23.7584C33.4033 23.7584 33.2239 23.5726 33.2239 23.3483C33.2239 23.124 33.4097 22.9446 33.6276 22.9446C35.9795 22.9638 37.9789 23.752 39.5618 25.3029C41.151 26.8537 41.9649 28.9941 41.9905 31.66C41.9969 31.8907 41.8175 32.0765 41.5868 32.0765C41.5932 32.0765 41.5932 32.0765 41.5868 32.0765Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M35.0374 35.5691C35.0374 35.5691 35.6078 35.6203 35.9154 35.2422L36.5113 34.4925C36.7997 34.1208 37.4982 33.8837 38.1775 34.2618C38.5556 34.4732 39.2413 34.8962 39.6643 35.2102C40.1193 35.5434 41.0421 36.3124 41.0485 36.3189C41.4906 36.6905 41.5932 37.2352 41.292 37.8184C41.292 37.8184 41.292 37.8248 41.292 37.8312C40.9844 38.3759 40.5678 38.8886 40.0488 39.3628C40.0424 39.3628 40.0424 39.3692 40.0359 39.3692C39.6066 39.7281 39.1836 39.9332 38.7735 39.978C38.7222 39.9909 38.6646 39.9909 38.5877 39.9909C38.4082 39.9909 38.2288 39.9652 38.0494 39.9075L38.0365 39.8883C37.3957 39.7089 36.3319 39.2603 34.5632 38.2798C33.4097 37.6454 32.4548 36.9981 31.641 36.3509C31.2116 36.0113 30.7759 35.6332 30.3273 35.1846C30.3144 35.1718 30.2952 35.1525 30.2824 35.1397C30.2696 35.1269 30.2504 35.1077 30.2375 35.0949C30.2247 35.082 30.2055 35.0628 30.1927 35.05C30.1799 35.0372 30.1606 35.018 30.1478 35.0051C29.7057 34.5566 29.3212 34.1208 28.9815 33.6914C28.3343 32.884 27.687 31.9227 27.0526 30.7692C26.0721 28.9941 25.6235 27.9303 25.4441 27.2959L25.4249 27.2831C25.3672 27.1036 25.3416 26.9242 25.3416 26.7447C25.3416 26.6678 25.3416 26.6102 25.3544 26.5589C25.4056 26.1424 25.6107 25.7258 25.9632 25.2965C25.9632 25.29 25.9696 25.29 25.9696 25.2836C26.4438 24.7582 26.9565 24.348 27.5012 24.0404C27.5012 24.0404 27.5076 24.0404 27.514 24.0404C28.0907 23.7392 28.6355 23.8418 29.0135 24.2839C29.0135 24.2839 29.789 25.2131 30.1222 25.6681C30.4362 26.0975 30.8592 26.7768 31.0706 27.1549C31.4487 27.8342 31.2116 28.5327 30.8399 28.8211L30.0902 29.417C29.7121 29.7246 29.7633 30.295 29.7633 30.295C29.7633 30.295 30.872 34.5117 35.0374 35.5691Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M26.4478 46.9652C26.3142 46.9652 26.1797 46.9352 26.0534 46.8752C25.7399 46.7235 25.5391 46.4064 25.5391 46.0565V41.513H22.813C21.31 41.513 20.0869 40.2899 20.0869 38.7869V24.2478C20.0869 22.7448 21.31 21.5217 22.813 21.5217H44.6217C46.1247 21.5217 47.3478 22.7448 47.3478 24.2478V38.7869C47.3478 40.2899 46.1247 41.513 44.6217 41.513H33.582L27.0157 46.7662C26.8512 46.898 26.6504 46.9652 26.4478 46.9652ZM22.813 23.3391C22.3114 23.3391 21.9043 23.7471 21.9043 24.2478V38.7869C21.9043 39.2876 22.3114 39.6956 22.813 39.6956H26.4478C26.9503 39.6956 27.3565 40.1018 27.3565 40.6043V44.1664L32.6951 39.8946C32.8568 39.7656 33.0558 39.6956 33.263 39.6956H44.6217C45.1233 39.6956 45.5304 39.2876 45.5304 38.7869V24.2478C45.5304 23.7471 45.1233 23.3391 44.6217 23.3391H22.813Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M40.9871 30.6091H26.448C25.9455 30.6091 25.5393 30.202 25.5393 29.7004C25.5393 29.1988 25.9455 28.7917 26.448 28.7917H40.9871C41.4896 28.7917 41.8958 29.1988 41.8958 29.7004C41.8958 30.202 41.4896 30.6091 40.9871 30.6091Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M33.7176 34.2437H26.448C25.9455 34.2437 25.5393 33.8366 25.5393 33.335C25.5393 32.8334 25.9455 32.4263 26.448 32.4263H33.7176C34.2201 32.4263 34.6263 32.8334 34.6263 33.335C34.6263 33.8366 34.2201 34.2437 33.7176 34.2437Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                <div class=\"footer__box footer__box-1\">\r\n                    <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"footer__img\">\r\n                    </a>\r\n                    <div class=\"footer__icons-block\">\r\n                        <a href=\"#\" class=\"footer__icons-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" class=\"footer__icon\">\r\n                        </a>\r\n                        <a href=\"#\" class=\"footer__icons-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"footer__icon\">\r\n                        </a>\r\n                        <a href=\"#\" class=\"footer__icons-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"footer__icon\">\r\n                        </a>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"flex-row footer__row\">\r\n                    <div class=\"footer__box footer__box-2\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"footer__box\">\r\n                        <div class=\"footer__title\">О компании</div>\r\n                        <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                        <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                        <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                        <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                        <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                        <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                        <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                    </div>\r\n                    <div class=\"footer__box\">\r\n                        <div class=\"footer__title\">Полезное</div>\r\n                        <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                        <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                        <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                        <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                        <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                        <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                    </div>\r\n                    <div class=\"footer__box\">\r\n                        <div class=\"footer__title\">Спецпроекты</div>\r\n                        <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                        <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                        <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                        <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                        <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n    </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./sales.html":
/*!********************!*\
  !*** ./sales.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/User.png */ "./images/User.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh1.png */ "./images/sh1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh2.png */ "./images/sh2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh3.png */ "./images/sh3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh4.png */ "./images/sh4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh5.png */ "./images/sh5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh6.png */ "./images/sh6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh7.png */ "./images/sh7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh8.png */ "./images/sh8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh9.png */ "./images/sh9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sh10.png */ "./images/sh10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f1.png */ "./images/f1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f2.png */ "./images/f2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/f3.png */ "./images/f3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Распродажи</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"wrapper\">\r\n        <header class=\"header\">\r\n            <div class=\"container\">\r\n                <div class=\"header__row\">\r\n                    <a href=\"index.html\" class=\"header__logo\">\r\n                        <svg width=\"190\" height=\"48\" viewBox=\"0 0 190 48\" fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path\r\n                                d=\"M80.6031 31.2289C78.5011 33.311 75.9427 34.352 72.9279 34.352C69.9131 34.352 67.3547 33.311 65.2526 31.2289C63.1506 29.1469 62.0996 26.5785 62.0996 23.5237C62.0996 20.4689 63.1506 17.9005 65.2526 15.8185C67.3547 13.7365 69.9131 12.6954 72.9279 12.6954C75.9427 12.6954 78.5011 13.7365 80.6031 15.8185C82.7051 17.9005 83.7561 20.4689 83.7561 23.5237C83.7561 26.5785 82.7051 29.1469 80.6031 31.2289ZM68.5989 27.9859C69.7598 29.1352 71.2023 29.7115 72.9279 29.7115C74.6535 29.7115 76.0959 29.1369 77.2569 27.9859C78.4178 26.835 78.9974 25.3476 78.9974 23.5237C78.9974 21.6982 78.4178 20.2108 77.2569 19.0615C76.0959 17.9122 74.6535 17.3359 72.9279 17.3359C71.2023 17.3359 69.7598 17.9105 68.5989 19.0615C67.438 20.2124 66.8583 21.6998 66.8583 23.5237C66.8583 25.3476 67.438 26.8367 68.5989 27.9859ZM100.567 33.9356H95.5089L90.7485 27.3747V33.9356H86.2862V13.1102H90.7485V25.5758L95.2107 19.0598H100.417L95.0025 26.4969L100.566 33.9339L100.567 33.9356ZM105.298 28.2824C105.814 29.6716 107.003 30.3645 108.867 30.3645C110.076 30.3645 111.029 29.988 111.724 29.2335L115.293 31.2856C113.826 33.3276 111.664 34.3503 108.807 34.3503C106.309 34.3503 104.31 33.6075 102.813 32.1184C101.315 30.631 100.567 28.7571 100.567 26.4952C100.567 24.2533 101.307 22.3844 102.784 20.887C104.262 19.3896 106.161 18.6401 108.481 18.6401C110.643 18.6401 112.443 19.3896 113.881 20.887C115.318 22.3844 116.038 24.2533 116.038 26.4952C116.038 27.1298 115.978 27.7244 115.86 28.2808H105.298V28.2824ZM105.208 24.9512H111.604C111.167 23.3838 110.116 22.601 108.451 22.601C106.725 22.601 105.644 23.3838 105.208 24.9512ZM127.342 19.0598H132.103L127.014 33.4892C126.181 35.8294 125.085 37.505 123.726 38.5177C122.367 39.5288 120.637 39.9852 118.535 39.8852V35.7195C119.566 35.7195 120.36 35.5362 120.915 35.1698C121.469 34.8034 121.916 34.1638 122.254 33.251L116.333 19.0598H121.241L124.544 28.1642L127.341 19.0598H127.342ZM163.43 32.0767C161.903 33.5941 160.039 34.352 157.837 34.352C155.635 34.352 153.771 33.5941 152.244 32.0767C150.716 30.5593 149.953 28.7005 149.953 26.4985C149.953 24.2966 150.716 22.4377 152.244 20.9203C153.771 19.4029 155.635 18.6451 157.837 18.6451C160.039 18.6451 161.903 19.4029 163.43 20.9203C164.957 22.4377 165.72 24.2966 165.72 26.4985C165.72 28.7005 164.956 30.5593 163.43 32.0767ZM155.397 29.027C156.051 29.6816 156.864 30.008 157.837 30.008C158.81 30.008 159.622 29.6816 160.277 29.027C160.932 28.3724 161.258 27.5296 161.258 26.4985C161.258 25.4675 160.932 24.6247 160.277 23.9701C159.622 23.3155 158.81 22.989 157.837 22.989C156.864 22.989 156.051 23.3155 155.397 23.9701C154.742 24.6247 154.416 25.4675 154.416 26.4985C154.416 27.5296 154.742 28.3724 155.397 29.027ZM172.176 23.4038C172.176 23.7019 172.429 23.9435 172.934 24.1333C173.44 24.3216 174.05 24.5098 174.763 24.698C175.477 24.8862 176.19 25.1294 176.905 25.4275C177.619 25.7257 178.229 26.2154 178.734 26.9C179.24 27.5845 179.492 28.4423 179.492 29.4734C179.492 31.0807 178.897 32.2949 177.706 33.1178C176.517 33.9406 175.048 34.352 173.304 34.352C170.169 34.352 168.037 33.1727 166.908 30.8125L170.775 28.6106C171.172 29.7815 172.015 30.3661 173.304 30.3661C174.375 30.3661 174.911 30.058 174.911 29.4434C174.911 29.1469 174.658 28.8987 174.153 28.7005C173.647 28.5023 173.037 28.3091 172.324 28.1209C171.61 27.9326 170.897 27.6845 170.182 27.3763C169.468 27.0682 168.858 26.5885 168.354 25.9339C167.847 25.2793 167.596 24.4765 167.596 23.5237C167.596 21.9763 168.155 20.7771 169.276 19.9243C170.397 19.0715 171.781 18.6451 173.427 18.6451C174.656 18.6451 175.777 18.9182 176.79 19.4629C177.801 20.0076 178.616 20.7971 179.23 21.8281L175.423 23.8802C174.946 23.0074 174.282 22.571 173.429 22.571C172.596 22.571 172.18 22.8491 172.18 23.4038H172.176ZM189.997 23.3438H186.932V28.6106C186.932 29.2052 187.17 29.5816 187.647 29.7415C188.123 29.8998 188.906 29.9497 189.997 29.8898V33.9356C187.16 34.2337 185.196 33.9606 184.105 33.1178C183.014 32.2749 182.47 30.7725 182.47 28.6106V23.3438H180.09V19.0598H182.47V16.2332L186.932 14.8941V19.0598H189.997V23.3438ZM141.175 13.1085C143.219 13.1085 144.943 13.8031 146.352 15.1906C147.76 16.5797 148.464 18.2653 148.464 20.2474C148.464 22.2312 147.76 23.9168 146.352 25.3059C144.943 26.6951 143.219 27.388 141.175 27.388H138.052V33.9339H133.292V13.1085H141.175ZM141.175 22.9258C141.908 22.9258 142.515 22.6676 142.989 22.1529C143.466 21.6366 143.704 21.002 143.704 20.2491C143.704 19.4946 143.466 18.8599 142.989 18.3453C142.513 17.8306 141.908 17.5724 141.175 17.5724H138.052V22.9274H141.175V22.9258Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M23.8852 0C37.077 0 47.7703 10.6934 47.7703 23.8852C47.7703 37.077 37.077 47.7703 23.8852 47.7703C10.6934 47.7703 0 37.077 0 23.8852C0 10.6934 10.6934 0 23.8852 0ZM23.8852 9.30089C31.9401 9.30089 38.4694 15.8302 38.4694 23.8852C38.4694 31.9401 31.9401 38.4694 23.8852 38.4694C15.8302 38.4694 9.30089 31.9401 9.30089 23.8852C9.30089 15.8302 15.8302 9.30089 23.8852 9.30089Z\"\r\n                                fill=\"url(#paint0_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M40.4714 41.0711C38.4743 42.9983 36.1408 44.5823 33.5707 45.7232L26.6816 38.1996C29.5832 37.6366 32.1766 36.2142 34.1886 34.2087L40.4731 41.0711H40.4714Z\"\r\n                                fill=\"#fff\" />\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M51.0881 0.253169L42.3568 8.74123C40.2765 6.20614 37.6831 4.10577 34.7366 2.60004L37.1684 0.251503H51.0881V0.253169ZM35.6493 15.2622L27.3645 23.3155L49.8855 47.1773H36.5921L13.693 22.9158L27.3628 9.71895C30.7391 10.5451 33.6523 12.5455 35.6477 15.2622H35.6493Z\"\r\n                                fill=\"url(#paint1_linear_179_2120)\" />\r\n                            <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                d=\"M26.6083 10.4485C29.9795 11.2846 32.8877 13.2917 34.8748 16.015L35.6494 15.2622C33.6539 12.5455 30.7407 10.5451 27.3645 9.71895L26.6083 10.4485Z\"\r\n                                fill=\"#1F2428\" />\r\n                            <defs>\r\n                                <linearGradient id=\"paint0_linear_179_2120\" x1=\"0.612057\" y1=\"47.7703\" x2=\"54.7001\"\r\n                                    y2=\"37.8739\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#5B52A3\" />\r\n                                    <stop offset=\"1\" stop-color=\"#40B8EA\" />\r\n                                </linearGradient>\r\n                                <linearGradient id=\"paint1_linear_179_2120\" x1=\"13.693\" y1=\"22.9157\" x2=\"49.9521\"\r\n                                    y2=\"22.9157\" gradientUnits=\"userSpaceOnUse\">\r\n                                    <stop stop-color=\"#54E1AB\" />\r\n                                    <stop offset=\"1\" stop-color=\"#7EEEC1\" />\r\n                                </linearGradient>\r\n                            </defs>\r\n                        </svg>\r\n                    </a>\r\n                    <nav class=\"header__menu burger-menu\">\r\n                        <a href=\"./kak-pokupat.html\" class=\"header__menu-link\">Как покупать</a>\r\n                        <a href=\"./sales.html\" class=\"header__menu-link\">Распродажи</a>\r\n                        <a href=\"./prices.html\" class=\"header__menu-link\">Цены</a>\r\n                        <a href=\"./chasto-zadavaemye-voprosy.html\" class=\"header__menu-link\">Помощь</a>\r\n                        <a href=\"./partnerskaja-programma.html\" class=\"header__menu-link\">Бонусы</a>\r\n                        <a href=\"./blog.html\" class=\"header__menu-link\">Блог</a>\r\n                        <a href=\"./magaziny.html\" class=\"header__menu-link\">Магазины</a>\r\n                    </nav>\r\n                    <div class=\"header__login burger-sign\">\r\n                        <a href=\"#\" class=\"header__text\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"user\" class=\"header__img\">\r\n                            Вход\r\n                        </a>\r\n                        <a href=\"#\" class=\"header__link-button green-button \">Связаться с нами</a>\r\n                    </div>\r\n                    <div class=\"menu-btn\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <main class=\"main\">\r\n            <section class=\"sales\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"sales__card card\">\r\n                        <div class=\"container\">\r\n                            <h2 class=\"sales__title\">Распродажи</h2>\r\n                            <div class=\"sales__text\">ранний доступ к распродажам в магазинах</div>\r\n                            <a href=\"#\" class=\"main-button green-button \">Получить адрес в UK</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"shops\">\r\n                <div class=\"container\">\r\n                    <div class=\"shops__title\">Black Friday Early Access\r\n                        ранний доступ к распродажам\r\n                        в магазинах Великобритании!</div>\r\n                    <div class=\"shops__grid\">\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">Abercrombie & Fitch</div>\r\n                                <div class=\"shops__text shops__text-1\">\r\n                                    цены от <a href=\"#\" class=\"shops__text shops__text-fw\">£7.99 (3365₽)</a> разделе:\r\n                                    мужские вещи: <a href=\"#\" class=\"shops__text shops__green-text\">CLEARANCE</a>\r\n                                    женские вещи: <a href=\"#\" class=\"shops__text shops__green-text\">CLEARANCE</a>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-1\">\r\n                                    качественные детские вещи <br> на <a href=\"#\"\r\n                                        class=\"shops__text shops__green-text\">Abercrombie kids</a>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-1\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Только выкуп с оператором →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">Timberland</div>\r\n                                <div class=\"shops__text shops__text-2\">\r\n                                    <div class=\"shops__text shops__text-fw\">NEW!</div>\r\n                                    Коллаб <a href=\"#\" class=\"shops__text shops__green-text\">Tommy Hilfiger x\r\n                                        Timberland!</a>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-2\">\r\n                                    Ботинки от <span class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span> <br>\r\n                                    Зимние шапкии за <span class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-2\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Только выкуп с оператором →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">Polo Ralph Lauren</div>\r\n                                <div class=\"shops__text shops__text-3\">\r\n                                    <div class=\"shops__text shops__text-fw\">\r\n                                        <a href=\"#\" class=\"shops__text shops__green-text\">Рубашка</a> <span\r\n                                            class=\"shops__text\">за</span>\r\n                                        £7.99 (3365₽)\r\n                                    </div>\r\n                                    <div class=\"shops__text shops__text-fw\">\r\n                                        <a href=\"#\" class=\"shops__text shops__green-text\">Худи</a> <span\r\n                                            class=\"shops__text\">за</span>\r\n                                        £7.99 (3365₽)\r\n                                    </div>\r\n                                    <div class=\"shops__text shops__text-fw\">\r\n                                        <a href=\"#\" class=\"shops__text shops__green-text\">Свитшот с лого</a> <span\r\n                                            class=\"shops__text\">за</span> £7.99 (3365₽)\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-3\">\r\n                                    До <span class=\"shops__text shops__text-fw\">- 40%</span> в разделе SALE\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-3\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Только выкуп с оператором →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">Hollister Co.</div>\r\n                                <div class=\"shops__text shops__text-4\">\r\n                                    Цены от <span class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span> разделе:\r\n                                    Мужские вещи: <a href=\"#\" class=\"shops__text shops__green-text\">CLEARANCE</a>\r\n                                    женские вещи: <a href=\"#\" class=\"shops__text shops__green-text\">CLEARANCE</a>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-4\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Только выкуп с оператором →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">Michael Kors</div>\r\n                                <div class=\"shops__text shops__text-5\">\r\n                                    <div class=\"shops__text shops__text-fw\">Новая коллекция! </div>\r\n                                    <div class=\"shops__text shops__text-fw\">Michael Kors x 007 (James Bond)</div>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-5\">\r\n                                    <div class=\"shops__text shops__text-fw\">HOLIDAY HEAD START  </div>\r\n                                     <span class=\"shops__text shops__text-fw\">- 60%</span> на сумки, обувь и одежду\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-5\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">В магазин →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">Аутлет Saks OFF 5TH</div>\r\n                                <div class=\"shops__text shops__text-6\">\r\n                                    <div class=\"shops__text shops__text-fw\">Black Friday Early Access </div>\r\n                                    Брендовые шапки, шарфы и перчатки <span class=\"shops__text shops__text-fw\">- 60%\r\n                                        OFF</span>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-6\">\r\n                                    Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-6\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Только выкуп с оператором →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">Victoria's Secret</div>\r\n                                <div class=\"shops__text shops__text-7\">\r\n                                    <div class=\"shops__text shops__text-fw\">Лосьоны и мисты за £7.99 (3365₽)</div>\r\n                                    <div class=\"shops__text shops__text-fw\"> 7 трусиков за £7.99 (3365₽)</div>\r\n                                    Халаты за <span class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-7\">\r\n                                    <span class=\"shops__text shops__text-fw\">Потрать £7.99 (3365₽)</span> - получи\r\n                                    <div class=\"shops__text shops__text-fw\">купон на $25</div> на следующий заказ\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-7\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">В магазин →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">levi.com</div>\r\n                                <div class=\"shops__text shops__text-8\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Джинсы</a> от <span\r\n                                        class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-fw shops__text-8\">\r\n                                    Скидка 30% на заказы от $100 с кодом TREAT30\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-8\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">В магазин →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">UGG® - вход с VPN</div>\r\n                                <div class=\"shops__text shops__text-9\">\r\n                                    Угги за <span class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span> <br>\r\n                                    Ботинки UGG от <span class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span> <br>\r\n                                    в разделе <a href=\"#\" class=\"shops__text shops__green-text\">SALE</a>\r\n\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-9\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Мужские угги</a> за <span\r\n                                        class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span>\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Слипперы</a> за <span\r\n                                        class=\"shops__text shops__text-fw\">£7.99 (3365₽)</span>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-9\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Только выкуп с оператором →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"shops__grid-item\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" class=\"shops__img\">\r\n                            <div class=\"shops__info\">\r\n                                <div class=\"shops__info-title\">New Balance</div>\r\n                                <div class=\"shops__text shops__text-10\">\r\n                                    <div class=\"shops__text shops__text-fw\">Вход с VPN</div>\r\n                                    <span class=\"shops__text shops__text-fw\">- 30%</span> на некоторые модели\r\n                                    <span class=\"shops__text shops__text-fw\">Бесплатная</span> доставка <span\r\n                                        class=\"shops__text shops__text-fw\">$50+</span>\r\n                                </div>\r\n                                <div class=\"shops__text shops__text-10\">\r\n                                    <a href=\"#\" class=\"shops__text shops__green-text\">Только выкуп с оператором →</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"contact\">\r\n                <div class=\"second-container\">\r\n                    <div class=\"contact__card card\">\r\n                        <div class=\"container\">\r\n                            <div class=\"flex-row contact__row\">\r\n                                <h2 class=\"contact__title\">Остались вопросы? Спросите нас в соцсетях!</h2>\r\n                                <div class=\"contact__icons\">\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M44.4313 21.6147C41.6399 18.7645 37.7812 17.2173 33.8405 17.2173C25.4663 17.2173 18.7342 23.9763 18.8163 32.2011C18.8163 34.8069 19.5552 37.3314 20.7867 39.6115L18.6521 47.3477L26.6157 45.3119C28.8324 46.5334 31.2954 47.1034 33.7584 47.1034C42.0504 47.1034 48.7825 40.3444 48.7825 32.1196C48.7825 28.1294 47.2226 24.3834 44.4313 21.6147ZM33.8405 44.579C31.6238 44.579 29.4071 44.0089 27.5188 42.8689L27.0262 42.6246L22.2645 43.8461L23.496 39.2044L23.1676 38.7158C19.5552 32.934 21.2793 25.2792 27.1904 21.6961C33.1016 18.1131 40.7368 19.8232 44.3492 25.6864C47.9615 31.5496 46.2375 39.1229 40.3263 42.706C38.438 43.9275 36.1392 44.579 33.8405 44.579ZM41.0652 35.5398L40.1621 35.1327C40.1621 35.1327 38.8485 34.5626 38.0275 34.1555C37.9454 34.1555 37.8633 34.074 37.7812 34.074C37.5349 34.074 37.3707 34.1555 37.2065 34.2369C37.2065 34.2369 37.1244 34.3183 35.975 35.6213C35.8929 35.7841 35.7287 35.8656 35.5646 35.8656H35.4825C35.4004 35.8656 35.2362 35.7841 35.1541 35.7027L34.7436 35.5398C33.8405 35.1327 33.0195 34.6441 32.3627 33.9926C32.1985 33.8297 31.9522 33.6669 31.788 33.504C31.2133 32.934 30.6386 32.2825 30.2281 31.5496L30.146 31.3867C30.0639 31.3053 30.0639 31.2239 29.9818 31.061C29.9818 30.8981 29.9818 30.7353 30.0639 30.6538C30.0639 30.6538 30.3923 30.2467 30.6386 30.0024C30.8028 29.8395 30.8849 29.5952 31.0491 29.4323C31.2133 29.188 31.2954 28.8623 31.2133 28.618C31.1312 28.2108 30.146 26.0121 29.8997 25.5235C29.7355 25.2792 29.5713 25.1978 29.325 25.1163H29.0787C28.9145 25.1163 28.6682 25.1163 28.4219 25.1163C28.2577 25.1163 28.0935 25.1978 27.9293 25.1978L27.8472 25.2792C27.683 25.3606 27.5188 25.5235 27.3546 25.6049C27.1904 25.7678 27.1083 25.9307 26.9441 26.0935C26.3694 26.8265 26.041 27.7222 26.041 28.618C26.041 29.2695 26.2052 29.9209 26.4515 30.491L26.5336 30.7353C27.2725 32.2825 28.2577 33.6669 29.5713 34.8884L29.8997 35.2141C30.146 35.4584 30.3923 35.6213 30.5565 35.8656C32.2806 37.3314 34.251 38.39 36.4676 38.9601C36.7139 39.0415 37.0423 39.0415 37.2886 39.1229C37.5349 39.1229 37.8633 39.1229 38.1096 39.1229C38.5201 39.1229 39.0127 38.9601 39.3411 38.7972C39.5874 38.6343 39.7516 38.6343 39.9158 38.4715L40.08 38.3086C40.2442 38.1457 40.4084 38.0643 40.5726 37.9014C40.7368 37.7386 40.901 37.5757 40.9831 37.4128C41.1473 37.0871 41.2294 36.6799 41.3115 36.2727C41.3115 36.1099 41.3115 35.8656 41.3115 35.7027C41.3115 35.7027 41.2294 35.6213 41.0652 35.5398Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M45.6111 20.3423C44.8165 19.6117 41.5995 17.2727 34.4285 17.2406C34.4285 17.2406 25.9759 16.7279 21.8553 20.5089C19.5611 22.8031 18.7537 26.1547 18.6703 30.3201C18.587 34.4791 18.4781 42.2781 25.9951 44.3929H26.0015L25.9951 47.6163C25.9951 47.6163 25.9503 48.9236 26.809 49.1863C27.8471 49.5068 28.4623 48.5135 29.4556 47.4433C30.0003 46.8537 30.7501 45.995 31.3205 45.3349C36.46 45.7643 40.4139 44.7774 40.8625 44.63C41.9007 44.2903 47.7772 43.5406 48.732 35.7416C49.7189 27.7183 48.2514 22.6365 45.6111 20.3423ZM46.4827 35.1776C45.6752 41.6885 40.9138 42.0987 40.0359 42.3807C39.6642 42.5024 36.1908 43.3675 31.8203 43.0792C31.8203 43.0792 28.5649 47.0075 27.5524 48.0264C27.3921 48.1866 27.2063 48.2507 27.0845 48.2187C26.9115 48.1738 26.8602 47.9688 26.8667 47.6676C26.8667 47.2318 26.8923 42.3038 26.8923 42.3038C26.8859 42.3038 26.8859 42.3038 26.8923 42.3038C20.5288 40.5414 20.9005 33.9024 20.971 30.429C21.0414 26.9557 21.6951 24.104 23.6368 22.1879C27.1166 19.035 34.3004 19.5028 34.3004 19.5028C40.3627 19.5284 43.2657 21.3548 43.9386 21.9636C46.1751 23.8861 47.3158 28.4681 46.4827 35.1776Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M37.3827 30.5509C37.1712 30.5509 36.9918 30.3843 36.9789 30.1664C36.9084 28.7886 36.2612 28.1157 34.9411 28.0452C34.7168 28.0324 34.5438 27.8402 34.5566 27.6159C34.5694 27.3916 34.7616 27.2186 34.9859 27.2314C36.729 27.3275 37.7031 28.3272 37.7928 30.1216C37.8056 30.3458 37.6326 30.5381 37.4083 30.5445C37.3955 30.5509 37.3891 30.5509 37.3827 30.5509Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M39.4593 31.2434H39.4529C39.2286 31.237 39.0492 31.0512 39.0556 30.8269C39.0876 29.4427 38.6903 28.3212 37.8444 27.3984C37.0049 26.4756 35.845 25.9758 34.3134 25.8668C34.0891 25.8476 33.9225 25.6553 33.9417 25.4311C33.9609 25.2068 34.1532 25.0401 34.3775 25.0594C36.1077 25.1875 37.4727 25.7899 38.4468 26.8537C39.4273 27.9239 39.9015 29.2633 39.8694 30.8461C39.863 31.0704 39.6772 31.2434 39.4593 31.2434Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M41.5868 32.0765C41.3625 32.0765 41.1831 31.8971 41.1831 31.6728C41.1638 29.1927 40.4525 27.3023 39.0042 25.886C37.5752 24.489 35.7616 23.7777 33.6276 23.7584C33.4033 23.7584 33.2239 23.5726 33.2239 23.3483C33.2239 23.124 33.4097 22.9446 33.6276 22.9446C35.9795 22.9638 37.9789 23.752 39.5618 25.3029C41.151 26.8537 41.9649 28.9941 41.9905 31.66C41.9969 31.8907 41.8175 32.0765 41.5868 32.0765C41.5932 32.0765 41.5932 32.0765 41.5868 32.0765Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M35.0374 35.5691C35.0374 35.5691 35.6078 35.6203 35.9154 35.2422L36.5113 34.4925C36.7997 34.1208 37.4982 33.8837 38.1775 34.2618C38.5556 34.4732 39.2413 34.8962 39.6643 35.2102C40.1193 35.5434 41.0421 36.3124 41.0485 36.3189C41.4906 36.6905 41.5932 37.2352 41.292 37.8184C41.292 37.8184 41.292 37.8248 41.292 37.8312C40.9844 38.3759 40.5678 38.8886 40.0488 39.3628C40.0424 39.3628 40.0424 39.3692 40.0359 39.3692C39.6066 39.7281 39.1836 39.9332 38.7735 39.978C38.7222 39.9909 38.6646 39.9909 38.5877 39.9909C38.4082 39.9909 38.2288 39.9652 38.0494 39.9075L38.0365 39.8883C37.3957 39.7089 36.3319 39.2603 34.5632 38.2798C33.4097 37.6454 32.4548 36.9981 31.641 36.3509C31.2116 36.0113 30.7759 35.6332 30.3273 35.1846C30.3144 35.1718 30.2952 35.1525 30.2824 35.1397C30.2696 35.1269 30.2504 35.1077 30.2375 35.0949C30.2247 35.082 30.2055 35.0628 30.1927 35.05C30.1799 35.0372 30.1606 35.018 30.1478 35.0051C29.7057 34.5566 29.3212 34.1208 28.9815 33.6914C28.3343 32.884 27.687 31.9227 27.0526 30.7692C26.0721 28.9941 25.6235 27.9303 25.4441 27.2959L25.4249 27.2831C25.3672 27.1036 25.3416 26.9242 25.3416 26.7447C25.3416 26.6678 25.3416 26.6102 25.3544 26.5589C25.4056 26.1424 25.6107 25.7258 25.9632 25.2965C25.9632 25.29 25.9696 25.29 25.9696 25.2836C26.4438 24.7582 26.9565 24.348 27.5012 24.0404C27.5012 24.0404 27.5076 24.0404 27.514 24.0404C28.0907 23.7392 28.6355 23.8418 29.0135 24.2839C29.0135 24.2839 29.789 25.2131 30.1222 25.6681C30.4362 26.0975 30.8592 26.7768 31.0706 27.1549C31.4487 27.8342 31.2116 28.5327 30.8399 28.8211L30.0902 29.417C29.7121 29.7246 29.7633 30.295 29.7633 30.295C29.7633 30.295 30.872 34.5117 35.0374 35.5691Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a href=\"#\" class=\"contact__link\">\r\n                                        <svg width=\"66\" height=\"66\" viewBox=\"0 0 66 66\" fill=\"none\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <circle cx=\"33\" cy=\"33\" r=\"32.25\" stroke=\"white\" stroke-width=\"1.5\" />\r\n                                            <path\r\n                                                d=\"M26.4478 46.9652C26.3142 46.9652 26.1797 46.9352 26.0534 46.8752C25.7399 46.7235 25.5391 46.4064 25.5391 46.0565V41.513H22.813C21.31 41.513 20.0869 40.2899 20.0869 38.7869V24.2478C20.0869 22.7448 21.31 21.5217 22.813 21.5217H44.6217C46.1247 21.5217 47.3478 22.7448 47.3478 24.2478V38.7869C47.3478 40.2899 46.1247 41.513 44.6217 41.513H33.582L27.0157 46.7662C26.8512 46.898 26.6504 46.9652 26.4478 46.9652ZM22.813 23.3391C22.3114 23.3391 21.9043 23.7471 21.9043 24.2478V38.7869C21.9043 39.2876 22.3114 39.6956 22.813 39.6956H26.4478C26.9503 39.6956 27.3565 40.1018 27.3565 40.6043V44.1664L32.6951 39.8946C32.8568 39.7656 33.0558 39.6956 33.263 39.6956H44.6217C45.1233 39.6956 45.5304 39.2876 45.5304 38.7869V24.2478C45.5304 23.7471 45.1233 23.3391 44.6217 23.3391H22.813Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M40.9871 30.6091H26.448C25.9455 30.6091 25.5393 30.202 25.5393 29.7004C25.5393 29.1988 25.9455 28.7917 26.448 28.7917H40.9871C41.4896 28.7917 41.8958 29.1988 41.8958 29.7004C41.8958 30.202 41.4896 30.6091 40.9871 30.6091Z\"\r\n                                                fill=\"white\" />\r\n                                            <path\r\n                                                d=\"M33.7176 34.2437H26.448C25.9455 34.2437 25.5393 33.8366 25.5393 33.335C25.5393 32.8334 25.9455 32.4263 26.448 32.4263H33.7176C34.2201 32.4263 34.6263 32.8334 34.6263 33.335C34.6263 33.8366 34.2201 34.2437 33.7176 34.2437Z\"\r\n                                                fill=\"white\" />\r\n                                        </svg>\r\n                                    </a>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </section>\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n\r\n                    <div class=\"footer__box footer__box-1\">\r\n                        <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"footer__img\">\r\n                        </a>\r\n                        <div class=\"footer__icons-block\">\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                            <a href=\"#\" class=\"footer__icons-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"footer__icon\">\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"flex-row footer__row\">\r\n                        <div class=\"footer__box footer__box-2\">\r\n                            <a href=\"./index.html\" class=\"footer__logo-link\">\r\n                                <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"footer__img\">\r\n                            </a>\r\n                            <div class=\"footer__icons-block\">\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                                <a href=\"#\" class=\"footer__icons-link\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"footer__icon\">\r\n                                </a>\r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">О компании</div>\r\n                            <a href=\"#\" class=\"footer__text\">Услуги </a>\r\n                            <a href=\"#\" class=\"footer__text\">Цены </a>\r\n                            <a href=\"#\" class=\"footer__text\">Отзывы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Контакты </a>\r\n                            <a href=\"#\" class=\"footer__text\">Вакансии</a>\r\n                            <a href=\"#\" class=\"footer__text\">Соглашение о персональных данных </a>\r\n                            <a href=\"#\" class=\"footer__text\">Условия использования</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Полезное</div>\r\n                            <a href=\"#\" class=\"footer__text\">Как работает наш сервис </a>\r\n                            <a href=\"#\" class=\"footer__text\">Как покупать с оператором </a>\r\n                            <a href=\"#\" class=\"footer__text\">Ответы на частые вопросы </a>\r\n                            <a href=\"#\" class=\"footer__text\">Популярные магазины</a>\r\n                            <a href=\"#\" class=\"footer__text\">Черный список магазинов </a>\r\n                            <a href=\"#\" class=\"footer__text\">Актуальные распродажи</a>\r\n                        </div>\r\n                        <div class=\"footer__box\">\r\n                            <div class=\"footer__title\">Спецпроекты</div>\r\n                            <a href=\"#\" class=\"footer__text\">50% на первую доставку</a>\r\n                            <a href=\"#\" class=\"footer__text\">Скидки для постоянных клиентов</a>\r\n                            <a href=\"#\" class=\"footer__text\">Реферальная программа </a>\r\n                            <a href=\"#\" class=\"footer__text\">Кэшбек Mr. Rebates и Rakuten</a>\r\n                            <a href=\"#\" class=\"footer__text\">Stop Fraud</a>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"footer__down-text\">© 2021 Okeypost . Все права защищены.</div>\r\n        </footer>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./scss/choices.min.css":
/*!******************************!*\
  !*** ./scss/choices.min.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/media.css":
/*!************************!*\
  !*** ./scss/media.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/slider..js";

/***/ }),

/***/ "./images/User.png":
/*!*************************!*\
  !*** ./images/User.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/User..png";

/***/ }),

/***/ "./images/advantages-1.png":
/*!*********************************!*\
  !*** ./images/advantages-1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/advantages-1..png";

/***/ }),

/***/ "./images/advantages-2.png":
/*!*********************************!*\
  !*** ./images/advantages-2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/advantages-2..png";

/***/ }),

/***/ "./images/advantages-3.png":
/*!*********************************!*\
  !*** ./images/advantages-3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/advantages-3..png";

/***/ }),

/***/ "./images/advantages-4.png":
/*!*********************************!*\
  !*** ./images/advantages-4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/advantages-4..png";

/***/ }),

/***/ "./images/ar1.png":
/*!************************!*\
  !*** ./images/ar1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar1..png";

/***/ }),

/***/ "./images/ar10.png":
/*!*************************!*\
  !*** ./images/ar10.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar10..png";

/***/ }),

/***/ "./images/ar11.png":
/*!*************************!*\
  !*** ./images/ar11.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar11..png";

/***/ }),

/***/ "./images/ar12.png":
/*!*************************!*\
  !*** ./images/ar12.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar12..png";

/***/ }),

/***/ "./images/ar2.png":
/*!************************!*\
  !*** ./images/ar2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar2..png";

/***/ }),

/***/ "./images/ar3.png":
/*!************************!*\
  !*** ./images/ar3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar3..png";

/***/ }),

/***/ "./images/ar4.png":
/*!************************!*\
  !*** ./images/ar4.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar4..png";

/***/ }),

/***/ "./images/ar5.png":
/*!************************!*\
  !*** ./images/ar5.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar5..png";

/***/ }),

/***/ "./images/ar6.png":
/*!************************!*\
  !*** ./images/ar6.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar6..png";

/***/ }),

/***/ "./images/ar7.png":
/*!************************!*\
  !*** ./images/ar7.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar7..png";

/***/ }),

/***/ "./images/ar8.png":
/*!************************!*\
  !*** ./images/ar8.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar8..png";

/***/ }),

/***/ "./images/ar9.png":
/*!************************!*\
  !*** ./images/ar9.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/ar9..png";

/***/ }),

/***/ "./images/britan.png":
/*!***************************!*\
  !*** ./images/britan.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/britan..png";

/***/ }),

/***/ "./images/c-1.png":
/*!************************!*\
  !*** ./images/c-1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/c-1..png";

/***/ }),

/***/ "./images/c-2.png":
/*!************************!*\
  !*** ./images/c-2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/c-2..png";

/***/ }),

/***/ "./images/c-3.png":
/*!************************!*\
  !*** ./images/c-3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/c-3..png";

/***/ }),

/***/ "./images/c-4.png":
/*!************************!*\
  !*** ./images/c-4.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/c-4..png";

/***/ }),

/***/ "./images/c-5.png":
/*!************************!*\
  !*** ./images/c-5.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/c-5..png";

/***/ }),

/***/ "./images/c-6.png":
/*!************************!*\
  !*** ./images/c-6.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/c-6..png";

/***/ }),

/***/ "./images/do-1.png":
/*!*************************!*\
  !*** ./images/do-1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/do-1..png";

/***/ }),

/***/ "./images/do-2.png":
/*!*************************!*\
  !*** ./images/do-2.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/do-2..png";

/***/ }),

/***/ "./images/do-3.png":
/*!*************************!*\
  !*** ./images/do-3.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/do-3..png";

/***/ }),

/***/ "./images/eng-store-1.png":
/*!********************************!*\
  !*** ./images/eng-store-1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/eng-store-1..png";

/***/ }),

/***/ "./images/f1.png":
/*!***********************!*\
  !*** ./images/f1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/f1..png";

/***/ }),

/***/ "./images/f2.png":
/*!***********************!*\
  !*** ./images/f2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/f2..png";

/***/ }),

/***/ "./images/f3.png":
/*!***********************!*\
  !*** ./images/f3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/f3..png";

/***/ }),

/***/ "./images/fb-1.png":
/*!*************************!*\
  !*** ./images/fb-1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/fb-1..png";

/***/ }),

/***/ "./images/fb-2.png":
/*!*************************!*\
  !*** ./images/fb-2.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/fb-2..png";

/***/ }),

/***/ "./images/fb-3.png":
/*!*************************!*\
  !*** ./images/fb-3.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/fb-3..png";

/***/ }),

/***/ "./images/fb-4.png":
/*!*************************!*\
  !*** ./images/fb-4.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/fb-4..png";

/***/ }),

/***/ "./images/hb1.png":
/*!************************!*\
  !*** ./images/hb1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/hb1..png";

/***/ }),

/***/ "./images/hb2.png":
/*!************************!*\
  !*** ./images/hb2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/hb2..png";

/***/ }),

/***/ "./images/hb3.png":
/*!************************!*\
  !*** ./images/hb3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/hb3..png";

/***/ }),

/***/ "./images/hb4.png":
/*!************************!*\
  !*** ./images/hb4.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/hb4..png";

/***/ }),

/***/ "./images/hb5.png":
/*!************************!*\
  !*** ./images/hb5.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/hb5..png";

/***/ }),

/***/ "./images/hero__img.png":
/*!******************************!*\
  !*** ./images/hero__img.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/hero__img..png";

/***/ }),

/***/ "./images/jacket.png":
/*!***************************!*\
  !*** ./images/jacket.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/jacket..png";

/***/ }),

/***/ "./images/jeans.png":
/*!**************************!*\
  !*** ./images/jeans.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/jeans..png";

/***/ }),

/***/ "./images/jp1.png":
/*!************************!*\
  !*** ./images/jp1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/jp1..png";

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/logo..png";

/***/ }),

/***/ "./images/lp1.png":
/*!************************!*\
  !*** ./images/lp1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/lp1..png";

/***/ }),

/***/ "./images/mag1.png":
/*!*************************!*\
  !*** ./images/mag1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag1..png";

/***/ }),

/***/ "./images/mag10.png":
/*!**************************!*\
  !*** ./images/mag10.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag10..png";

/***/ }),

/***/ "./images/mag11.png":
/*!**************************!*\
  !*** ./images/mag11.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag11..png";

/***/ }),

/***/ "./images/mag12.png":
/*!**************************!*\
  !*** ./images/mag12.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag12..png";

/***/ }),

/***/ "./images/mag13.png":
/*!**************************!*\
  !*** ./images/mag13.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag13..png";

/***/ }),

/***/ "./images/mag14.png":
/*!**************************!*\
  !*** ./images/mag14.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag14..png";

/***/ }),

/***/ "./images/mag15.png":
/*!**************************!*\
  !*** ./images/mag15.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag15..png";

/***/ }),

/***/ "./images/mag16.png":
/*!**************************!*\
  !*** ./images/mag16.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag16..png";

/***/ }),

/***/ "./images/mag17.png":
/*!**************************!*\
  !*** ./images/mag17.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag17..png";

/***/ }),

/***/ "./images/mag18.png":
/*!**************************!*\
  !*** ./images/mag18.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag18..png";

/***/ }),

/***/ "./images/mag19.png":
/*!**************************!*\
  !*** ./images/mag19.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag19..png";

/***/ }),

/***/ "./images/mag2.png":
/*!*************************!*\
  !*** ./images/mag2.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag2..png";

/***/ }),

/***/ "./images/mag20.png":
/*!**************************!*\
  !*** ./images/mag20.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag20..png";

/***/ }),

/***/ "./images/mag21.png":
/*!**************************!*\
  !*** ./images/mag21.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag21..png";

/***/ }),

/***/ "./images/mag22.png":
/*!**************************!*\
  !*** ./images/mag22.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag22..png";

/***/ }),

/***/ "./images/mag23.png":
/*!**************************!*\
  !*** ./images/mag23.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag23..png";

/***/ }),

/***/ "./images/mag24.png":
/*!**************************!*\
  !*** ./images/mag24.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag24..png";

/***/ }),

/***/ "./images/mag25.png":
/*!**************************!*\
  !*** ./images/mag25.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag25..png";

/***/ }),

/***/ "./images/mag26.png":
/*!**************************!*\
  !*** ./images/mag26.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag26..png";

/***/ }),

/***/ "./images/mag27.png":
/*!**************************!*\
  !*** ./images/mag27.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag27..png";

/***/ }),

/***/ "./images/mag28.png":
/*!**************************!*\
  !*** ./images/mag28.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag28..png";

/***/ }),

/***/ "./images/mag29.png":
/*!**************************!*\
  !*** ./images/mag29.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag29..png";

/***/ }),

/***/ "./images/mag3.png":
/*!*************************!*\
  !*** ./images/mag3.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag3..png";

/***/ }),

/***/ "./images/mag30.png":
/*!**************************!*\
  !*** ./images/mag30.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag30..png";

/***/ }),

/***/ "./images/mag4.png":
/*!*************************!*\
  !*** ./images/mag4.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag4..png";

/***/ }),

/***/ "./images/mag5.png":
/*!*************************!*\
  !*** ./images/mag5.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag5..png";

/***/ }),

/***/ "./images/mag6.png":
/*!*************************!*\
  !*** ./images/mag6.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag6..png";

/***/ }),

/***/ "./images/mag7.png":
/*!*************************!*\
  !*** ./images/mag7.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag7..png";

/***/ }),

/***/ "./images/mag8.png":
/*!*************************!*\
  !*** ./images/mag8.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag8..png";

/***/ }),

/***/ "./images/mag9.png":
/*!*************************!*\
  !*** ./images/mag9.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/mag9..png";

/***/ }),

/***/ "./images/r1.png":
/*!***********************!*\
  !*** ./images/r1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/r1..png";

/***/ }),

/***/ "./images/r2.png":
/*!***********************!*\
  !*** ./images/r2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/r2..png";

/***/ }),

/***/ "./images/r3.png":
/*!***********************!*\
  !*** ./images/r3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/r3..png";

/***/ }),

/***/ "./images/reviews1.png":
/*!*****************************!*\
  !*** ./images/reviews1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/reviews1..png";

/***/ }),

/***/ "./images/reviews2.png":
/*!*****************************!*\
  !*** ./images/reviews2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/reviews2..png";

/***/ }),

/***/ "./images/reviews3.png":
/*!*****************************!*\
  !*** ./images/reviews3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/reviews3..png";

/***/ }),

/***/ "./images/reviews4.png":
/*!*****************************!*\
  !*** ./images/reviews4.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/reviews4..png";

/***/ }),

/***/ "./images/russia.png":
/*!***************************!*\
  !*** ./images/russia.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/russia..png";

/***/ }),

/***/ "./images/sh1.png":
/*!************************!*\
  !*** ./images/sh1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh1..png";

/***/ }),

/***/ "./images/sh10.png":
/*!*************************!*\
  !*** ./images/sh10.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh10..png";

/***/ }),

/***/ "./images/sh2.png":
/*!************************!*\
  !*** ./images/sh2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh2..png";

/***/ }),

/***/ "./images/sh3.png":
/*!************************!*\
  !*** ./images/sh3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh3..png";

/***/ }),

/***/ "./images/sh4.png":
/*!************************!*\
  !*** ./images/sh4.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh4..png";

/***/ }),

/***/ "./images/sh5.png":
/*!************************!*\
  !*** ./images/sh5.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh5..png";

/***/ }),

/***/ "./images/sh6.png":
/*!************************!*\
  !*** ./images/sh6.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh6..png";

/***/ }),

/***/ "./images/sh7.png":
/*!************************!*\
  !*** ./images/sh7.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh7..png";

/***/ }),

/***/ "./images/sh8.png":
/*!************************!*\
  !*** ./images/sh8.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh8..png";

/***/ }),

/***/ "./images/sh9.png":
/*!************************!*\
  !*** ./images/sh9.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sh9..png";

/***/ }),

/***/ "./images/sr1.png":
/*!************************!*\
  !*** ./images/sr1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sr1..png";

/***/ }),

/***/ "./images/sr2.png":
/*!************************!*\
  !*** ./images/sr2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sr2..png";

/***/ }),

/***/ "./images/sr3.png":
/*!************************!*\
  !*** ./images/sr3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sr3..png";

/***/ }),

/***/ "./images/sr4.png":
/*!************************!*\
  !*** ./images/sr4.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/sr4..png";

/***/ }),

/***/ "./images/t-shirt.png":
/*!****************************!*\
  !*** ./images/t-shirt.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/t-shirt..png";

/***/ }),

/***/ "./images/t1.png":
/*!***********************!*\
  !*** ./images/t1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./images/t1..png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _kak_pokupat_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kak-pokupat.html */ "./kak-pokupat.html");
/* harmony import */ var _sales_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sales.html */ "./sales.html");
/* harmony import */ var _prices_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prices.html */ "./prices.html");
/* harmony import */ var _chasto_zadavaemye_voprosy_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chasto-zadavaemye-voprosy.html */ "./chasto-zadavaemye-voprosy.html");
/* harmony import */ var _partnerskaja_programma_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../partnerskaja-programma.html */ "./partnerskaja-programma.html");
/* harmony import */ var _magaziny_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../magaziny.html */ "./magaziny.html");
/* harmony import */ var _blog_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blog.html */ "./blog.html");
/* harmony import */ var _scss_media_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/media.css */ "./scss/media.css");
/* harmony import */ var _choices_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./choices.min.js */ "./js/choices.min.js");
/* harmony import */ var _choices_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_choices_min_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scss_choices_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scss/choices.min.css */ "./scss/choices.min.css");












const defaulSelect = () => {
  const element = document.querySelectorAll('.delivery__select');
  element.forEach(el => {
    const choices = new Choices(el);
  });
};
defaulSelect();
let menuBtn = document.querySelector('.menu-btn');
let burgerMenu = document.querySelector('.burger-menu');
let burgerSign = document.querySelector('.burger-sign');
menuBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerSign.classList.toggle('active');
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map