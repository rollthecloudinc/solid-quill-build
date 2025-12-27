import { AsyncAction, AsyncScheduler, EMPTY, EmptyError, Observable, SafeSubscriber, Subscription, argsArgArrayOrObject, createObject, createOperatorSubscriber, from, innerFrom, isArrayLike, isFunction, mapOneOrManyArgs, mergeAll, mergeMap, popNumber, popResultSelector, popScheduler } from "@nf-internal/chunk-4WPE7WTU";
// node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
import { __extends } from "tslib";
// node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
import { __read, __spreadArray } from "tslib";
// node_modules/rxjs/dist/esm5/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function () {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    }
};
// node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
var setImmediate = Immediate.setImmediate;
var clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
    setImmediate: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function (handle) {
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
var AsapAction = function (_super) {
    __extends(AsapAction2, _super);
    function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction2.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
    };
    AsapAction2.prototype.recycleAsyncId = function (scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            immediateProvider.clearImmediate(id);
            scheduler._scheduled = void 0;
        }
        return void 0;
    };
    return AsapAction2;
}(AsyncAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js
import { __extends as __extends2 } from "tslib";
var AsapScheduler = function (_super) {
    __extends2(AsapScheduler2, _super);
    function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler2.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler2;
}(AsyncScheduler);
// node_modules/rxjs/dist/esm5/internal/scheduler/asap.js
var asapScheduler = new AsapScheduler(AsapAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js
import { __extends as __extends3 } from "tslib";
var QueueAction = function (_super) {
    __extends3(QueueAction2, _super);
    function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction2.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction2.prototype.execute = function (state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction2.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null && delay > 0 || delay == null && this.delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
    };
    return QueueAction2;
}(AsyncAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js
import { __extends as __extends4 } from "tslib";
var QueueScheduler = function (_super) {
    __extends4(QueueScheduler2, _super);
    function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler2;
}(AsyncScheduler);
// node_modules/rxjs/dist/esm5/internal/scheduler/queue.js
var queueScheduler = new QueueScheduler(QueueAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
import { __extends as __extends5 } from "tslib";
// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
import { __read as __read2, __spreadArray as __spreadArray2 } from "tslib";
var animationFrameProvider = {
    schedule: function (callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function (timestamp) {
            cancel = void 0;
            callback(timestamp);
        });
        return new Subscription(function () {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
    },
    requestAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray2([], __read2(args)));
    },
    cancelAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray2([], __read2(args)));
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = function (_super) {
    __extends5(AnimationFrameAction2, _super);
    function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction2.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function () {
            return scheduler.flush(void 0);
        }));
    };
    AnimationFrameAction2.prototype.recycleAsyncId = function (scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = void 0;
        }
        return void 0;
    };
    return AnimationFrameAction2;
}(AsyncAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js
import { __extends as __extends6 } from "tslib";
var AnimationFrameScheduler = function (_super) {
    __extends6(AnimationFrameScheduler2, _super);
    function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler2.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler2;
}(AsyncScheduler);
// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);
// node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
    return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}
// node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function firstValueFrom(source, config) {
    var hasConfig = typeof config === "object";
    return new Promise(function (resolve, reject) {
        var subscriber = new SafeSubscriber({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            }
        });
        source.subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
    return new Observable(function (subscriber) {
        innerFrom(observableFactory()).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
function forkJoin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = popResultSelector(args);
    var _a = argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable(function (subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function (sourceIndex2) {
            var hasValue = false;
            innerFrom(sources[sourceIndex2]).subscribe(createOperatorSubscriber(subscriber, function (value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex2] = value;
            }, function () {
                return remainingCompletions--;
            }, void 0, function () {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? createObject(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
            _loop_1(sourceIndex);
        }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
// node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
import { __read as __read3 } from "tslib";
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = void 0;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read3(isEventTarget(target) ? eventTargetMethods.map(function (methodName) {
        return function (handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap(function (subTarget) {
                return fromEvent(subTarget, eventName, options);
            })(innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError("Invalid event target");
    }
    return new Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () {
            return remove(handler);
        };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) {
        return function (handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
// node_modules/rxjs/dist/esm5/internal/observable/iif.js
function iif(condition, trueResult, falseResult) {
    return defer(function () {
        return condition() ? trueResult : falseResult;
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
export { asapScheduler, queueScheduler, animationFrameScheduler, isObservable, firstValueFrom, defer, forkJoin, fromEvent, iif, merge };
