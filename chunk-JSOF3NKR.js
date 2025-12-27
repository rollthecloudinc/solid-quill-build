import {
  init_define_process
} from "./chunk-6DU4OIIQ.js";

// projects/plugin/src/bootstrap.ts
init_define_process();
import * as __NgCli_bootstrap_1 from "@angular/platform-browser";

// projects/plugin/src/app/app.module.ts
init_define_process();
import { BrowserModule } from "@angular/platform-browser";
import { NgModule as NgModule3 } from "@angular/core";

// projects/plugin/src/app/app.component.ts
init_define_process();
import { Component as Component3 } from "@angular/core";
import * as i03 from "@angular/core";

// projects/plugin/src/app/download.component.ts
init_define_process();
import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@rollthecloudinc/content";
var DownloadComponent = class _DownloadComponent {
  constructor(cpm) {
    this.cpm = cpm;
    console.log("download component constructor");
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function DownloadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadComponent)(i0.\u0275\u0275directiveInject(i1.ContentPluginManager));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _DownloadComponent, selectors: [["plugin-download"]], standalone: false, decls: 3, vars: 0, consts: [[1, "task"]], template: function DownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 0)(1, "p");
        i0.\u0275\u0275text(2, "Download");
        i0.\u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(DownloadComponent, [{
    type: Component,
    args: [{
      selector: "plugin-download",
      template: `
        <div class="task">
            <p>Download</p>
        </div>
    `,
      standalone: false
    }]
  }], () => [{ type: i1.ContentPluginManager }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(DownloadComponent, { className: "DownloadComponent", filePath: "projects/plugin/src/app/download.component.ts", lineNumber: 14 });
})();

// projects/plugin/src/app/upload.component.ts
init_define_process();
import { Component as Component2 } from "@angular/core";
import * as i02 from "@angular/core";
var UploadComponent = class _UploadComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function UploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _UploadComponent, selectors: [["plugin-upload"]], standalone: false, decls: 3, vars: 0, consts: [[1, "task"]], template: function UploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275elementStart(0, "div", 0)(1, "p");
        i02.\u0275\u0275text(2, "Upload");
        i02.\u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(UploadComponent, [{
    type: Component2,
    args: [{
      selector: "plugin-upload",
      template: `
        <div class="task">
            <p>Upload</p>
        </div>
    `,
      standalone: false
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(UploadComponent, { className: "UploadComponent", filePath: "projects/plugin/src/app/upload.component.ts", lineNumber: 13 });
})();

// projects/plugin/src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementStart(0, "h1");
        i03.\u0275\u0275text(1, "Plugin");
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275element(2, "plugin-upload")(3, "plugin-download");
      }
    }, dependencies: [DownloadComponent, UploadComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(AppComponent, [{
    type: Component3,
    args: [{ selector: "app-root", standalone: false, template: "<h1>Plugin</h1>\n\n<plugin-upload></plugin-upload>\n<plugin-download></plugin-download>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "projects/plugin/src/app/app.component.ts", lineNumber: 8 });
})();

// projects/plugin/src/app/download.module.ts
init_define_process();
import { NgModule } from "@angular/core";

// projects/plugin/src/app/handlers/download-content.handler.ts
init_define_process();
import { Injectable } from "@angular/core";
import { ContentPluginEditorOptions } from "@rollthecloudinc/content";

// node_modules/rxjs/dist/esm/index.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/Observable.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/Subscriber.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/util/isFunction.js
init_define_process();
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm/internal/Subscription.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/util/createErrorClass.js
init_define_process();
function createErrorClass(createImpl) {
  const _super = (instance) => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass((_super) => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join("\n  ")}` : "";
  this.name = "UnsubscriptionError";
  this.errors = errors;
});

// node_modules/rxjs/dist/esm/internal/util/arrRemove.js
init_define_process();
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm/internal/Subscription.js
var Subscription = class _Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const { _parentage } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const { initialTeardown: initialFinalizer } = this;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      const { _finalizers } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof _Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const { _parentage } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const { _parentage } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const { _parentage } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  }
  remove(teardown) {
    const { _finalizers } = this;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof _Subscription) {
      teardown._removeParent(this);
    }
  }
};
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm/internal/config.js
init_define_process();
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js
init_define_process();
var timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const { delegate } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const { delegate } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(() => {
    const { onUnhandledError } = config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm/internal/util/noop.js
init_define_process();
function noop() {
}

// node_modules/rxjs/dist/esm/internal/NotificationFactories.js
init_define_process();
var COMPLETE_NOTIFICATION = (() => createNotification("C", void 0, void 0))();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm/internal/util/errorContext.js
init_define_process();
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      const { errorThrown, error } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm/internal/Subscriber.js
var Subscriber = class extends Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
};
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = class {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const { partialObserver } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const { partialObserver } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const { partialObserver } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
};
var SafeSubscriber = class extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      let context2;
      if (this && config.useDeprecatedNextContext) {
        context2 = Object.create(observerOrNext);
        context2.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context2),
          error: observerOrNext.error && bind(observerOrNext.error, context2),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context2)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
};
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const { onStoppedNotification } = config;
  onStoppedNotification && timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm/internal/symbol/observable.js
init_define_process();
var observable = (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();

// node_modules/rxjs/dist/esm/internal/util/pipe.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/util/identity.js
init_define_process();
function identity(x) {
  return x;
}

// node_modules/rxjs/dist/esm/internal/util/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

// node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = class _Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable2 = new _Observable();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(() => {
      const { operator, source } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new SafeSubscriber({
        next: (value) => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }
  [observable]() {
    return this;
  }
  pipe(...operations) {
    return pipeFromArray(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
    });
  }
};
Observable.create = (subscribe) => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm/internal/util/lift.js
init_define_process();
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return (source) => {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js
init_define_process();
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = class extends Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const { closed } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js
init_define_process();
var dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/scheduler/Action.js
init_define_process();
var Action = class extends Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js
init_define_process();
var intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const { delegate } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const { delegate } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js
var AsyncAction = class extends Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const { id, scheduler } = this;
      const { actions } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/Scheduler.js
init_define_process();
var Scheduler = class _Scheduler {
  constructor(schedulerActionCtor, now = _Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
};
Scheduler.now = dateTimestampProvider.now;

// node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = class extends Scheduler {
  constructor(SchedulerAction, now = Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const { actions } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/async.js
init_define_process();
var asyncScheduler = new AsyncScheduler(AsyncAction);

// node_modules/rxjs/dist/esm/internal/observable/of.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/util/args.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/util/isScheduler.js
init_define_process();
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}

// node_modules/rxjs/dist/esm/internal/observable/from.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/observable/innerFrom.js
init_define_process();

// node_modules/tslib/tslib.es6.mjs
init_define_process();
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}

// node_modules/rxjs/dist/esm/internal/util/isArrayLike.js
init_define_process();
var isArrayLike = ((x) => x && typeof x.length === "number" && typeof x !== "function");

// node_modules/rxjs/dist/esm/internal/util/isPromise.js
init_define_process();
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js
init_define_process();
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js
init_define_process();
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js
init_define_process();
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === "object" ? "an invalid object" : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

// node_modules/rxjs/dist/esm/internal/util/isIterable.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/symbol/iterator.js
init_define_process();
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js
init_define_process();
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const { value, done } = yield __await(reader.read());
        if (done) {
          return yield __await(void 0);
        }
        yield yield __await(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable((subscriber) => {
    const obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable((subscriber) => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable((subscriber) => {
    promise.then((value) => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, (err) => subscriber.error(err)).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable((subscriber) => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable((subscriber) => {
    process(asyncIterable, subscriber).catch((err) => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return __awaiter(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = __asyncValues(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done; ) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

// node_modules/rxjs/dist/esm/internal/operators/observeOn.js
init_define_process();

// node_modules/rxjs/dist/esm/internal/util/executeSchedule.js
init_define_process();
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm/internal/operators/observeOn.js
function observeOn(scheduler, delay = 0) {
  return operate((source, subscriber) => {
    source.subscribe(createOperatorSubscriber(subscriber, (value) => executeSchedule(subscriber, scheduler, () => subscriber.next(value), delay), () => executeSchedule(subscriber, scheduler, () => subscriber.complete(), delay), (err) => executeSchedule(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js
init_define_process();
function subscribeOn(scheduler, delay = 0) {
  return operate((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js
init_define_process();
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js
init_define_process();
function scheduleArray(input, scheduler) {
  return new Observable((subscriber) => {
    let i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js
init_define_process();
function scheduleIterable(input, scheduler) {
  return new Observable((subscriber) => {
    let iterator2;
    executeSchedule(subscriber, scheduler, () => {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({ value, done } = iterator2.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js
init_define_process();
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable((subscriber) => {
    executeSchedule(subscriber, scheduler, () => {
      const iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, () => {
        iterator2.next().then((result) => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js
init_define_process();
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm/internal/observable/of.js
function of(...args) {
  const scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/rxjs/dist/esm/internal/operators/debounceTime.js
init_define_process();
function debounceTime(dueTime, scheduler = asyncScheduler) {
  return operate((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(void 0, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, void 0, () => {
      lastValue = activeTask = null;
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/tap.js
init_define_process();
function tap(observerOrNext, error, complete) {
  const tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
  return tapObserver ? operate((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      var _a2;
      (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
      subscriber.complete();
    }, (err) => {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a2, _b;
      if (isUnsub) {
        (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : identity;
}

// projects/plugin/src/app/handlers/download-content.handler.ts
import * as i04 from "@angular/core";
var DownloadContentHandler = class _DownloadContentHandler {
  constructor() {
  }
  handleFile(file) {
    return of();
  }
  handlesType(type) {
    return false;
  }
  implementsRendererOverride() {
    return false;
  }
  hasRendererOverride(settings) {
    return of(false);
  }
  isDynamic(settings) {
    return false;
  }
  isData(settings) {
    return false;
  }
  getBindings(settings, type, metadata) {
    return of([]);
  }
  fetchDynamicData(settings, metadata) {
    return of();
  }
  buildDynamicItems(settings, metadata) {
    return of([]);
  }
  stateDefinition(settings) {
    return of({});
  }
  editorOptions(settings) {
    return of(new ContentPluginEditorOptions({ fullscreen: true }));
  }
  static {
    this.\u0275fac = function DownloadContentHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadContentHandler)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i04.\u0275\u0275defineInjectable({ token: _DownloadContentHandler, factory: _DownloadContentHandler.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(DownloadContentHandler, [{
    type: Injectable
  }], () => [], null);
})();

// projects/plugin/src/app/app.factories.ts
init_define_process();
import { ContentPlugin } from "@rollthecloudinc/content";

// projects/plugin/src/app/quill/quill.component.ts
init_define_process();
import { Component as Component4, ViewEncapsulation } from "@angular/core";
import { FormElementBase } from "@rollthecloudinc/forms";
import * as i05 from "@angular/core";
import * as i12 from "@angular/forms";
import * as i2 from "ngx-quill";
var QuillComponent = class _QuillComponent extends FormElementBase {
  constructor() {
    super(...arguments);
    this.logValueChangesSub = this.formControl.valueChanges.pipe(debounceTime(1e3), tap((v) => {
      console.log("quill value changes", v);
    })).subscribe();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275QuillComponent_BaseFactory;
      return function QuillComponent_Factory(__ngFactoryType__) {
        return (\u0275QuillComponent_BaseFactory || (\u0275QuillComponent_BaseFactory = i05.\u0275\u0275getInheritedFactory(_QuillComponent)))(__ngFactoryType__ || _QuillComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _QuillComponent, selectors: [["solid-quill-quill"]], standalone: false, features: [i05.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["format", "json", 3, "formControl"]], template: function QuillComponent_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275element(0, "quill-editor", 0);
      }
      if (rf & 2) {
        i05.\u0275\u0275property("formControl", ctx.formControl);
      }
    }, dependencies: [i12.NgControlStatus, i12.FormControlDirective, i2.QuillEditorComponent], styles: ['/* node_modules/quill/dist/quill.snow.css */\n.ql-container {\n  box-sizing: border-box;\n  font-family:\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container:not(.ql-disabled) li[data-list=checked] > .ql-ui,\n.ql-container:not(.ql-disabled) li[data-list=unchecked] > .ql-ui {\n  cursor: pointer;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n}\n@supports (counter-set:none) {\n  .ql-editor p,\n  .ql-editor h1,\n  .ql-editor h2,\n  .ql-editor h3,\n  .ql-editor h4,\n  .ql-editor h5,\n  .ql-editor h6 {\n    counter-set: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor p,\n  .ql-editor h1,\n  .ql-editor h2,\n  .ql-editor h3,\n  .ql-editor h4,\n  .ql-editor h5,\n  .ql-editor h6 {\n    counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor table {\n  border-collapse: collapse;\n}\n.ql-editor td {\n  border: 1px solid #000;\n  padding: 2px 5px;\n}\n.ql-editor ol {\n  padding-left: 1.5em;\n}\n.ql-editor li {\n  list-style-type: none;\n  padding-left: 1.5em;\n  position: relative;\n}\n.ql-editor li > .ql-ui:before {\n  display: inline-block;\n  margin-left: -1.5em;\n  margin-right: .3em;\n  text-align: right;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li[data-list=checked] > .ql-ui,\n.ql-editor li[data-list=unchecked] > .ql-ui {\n  color: #777;\n}\n.ql-editor li[data-list=bullet] > .ql-ui:before {\n  content: "\\2022";\n}\n.ql-editor li[data-list=checked] > .ql-ui:before {\n  content: "\\2611";\n}\n.ql-editor li[data-list=unchecked] > .ql-ui:before {\n  content: "\\2610";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list] {\n    counter-set: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list] {\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered] {\n  counter-increment: list-0;\n}\n.ql-editor li[data-list=ordered] > .ql-ui:before {\n  content: counter(list-0, decimal) ". ";\n}\n.ql-editor li[data-list=ordered].ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor li[data-list=ordered].ql-indent-1 > .ql-ui:before {\n  content: counter(list-1, lower-alpha) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-1 {\n    counter-set: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-1 {\n    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor li[data-list=ordered].ql-indent-2 > .ql-ui:before {\n  content: counter(list-2, lower-roman) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-2 {\n    counter-set: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-2 {\n    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor li[data-list=ordered].ql-indent-3 > .ql-ui:before {\n  content: counter(list-3, decimal) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-3 {\n    counter-set: list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-3 {\n    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor li[data-list=ordered].ql-indent-4 > .ql-ui:before {\n  content: counter(list-4, lower-alpha) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-4 {\n    counter-set: list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-4 {\n    counter-reset: list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor li[data-list=ordered].ql-indent-5 > .ql-ui:before {\n  content: counter(list-5, lower-roman) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-5 {\n    counter-set: list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-5 {\n    counter-reset: list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor li[data-list=ordered].ql-indent-6 > .ql-ui:before {\n  content: counter(list-6, decimal) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-6 {\n    counter-set: list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-6 {\n    counter-reset: list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor li[data-list=ordered].ql-indent-7 > .ql-ui:before {\n  content: counter(list-7, lower-alpha) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-7 {\n    counter-set: list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-7 {\n    counter-reset: list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor li[data-list=ordered].ql-indent-8 > .ql-ui:before {\n  content: counter(list-8, lower-roman) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-8 {\n    counter-set: list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-8 {\n    counter-reset: list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor li[data-list=ordered].ql-indent-9 > .ql-ui:before {\n  content: counter(list-9, decimal) ". ";\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor li.ql-direction-rtl > .ql-ui:before {\n  margin-left: .3em;\n  margin-right: -1.5em;\n  text-align: left;\n}\n.ql-editor table {\n  table-layout: fixed;\n  width: 100%;\n}\n.ql-editor table td {\n  outline: none;\n}\n.ql-editor .ql-code-block-container {\n  font-family: monospace;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family:\n    Georgia,\n    Times New Roman,\n    serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family:\n    Monaco,\n    Courier New,\n    monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: .75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor .ql-ui {\n  position: absolute;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: "";\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer:coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: "";\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: .4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: .83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: .67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor .ql-code-block-container {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor .ql-code-block-container {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor .ql-code-block-container {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: "Normal";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {\n  content: "Heading 1";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {\n  content: "Heading 2";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {\n  content: "Heading 3";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {\n  content: "Heading 4";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {\n  content: "Heading 5";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {\n  content: "Heading 6";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {\n  font-size: .83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {\n  font-size: .67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: "Sans Serif";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: "Serif";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: "Monospace";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family:\n    Georgia,\n    Times New Roman,\n    serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family:\n    Monaco,\n    Courier New,\n    monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: "Normal";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: "Small";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: "Large";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: "Huge";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-code-block-container {\n  position: relative;\n}\n.ql-code-block-container .ql-ui {\n  right: 5px;\n  top: 5px;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family:\n    "Helvetica Neue",\n    "Helvetica",\n    "Arial",\n    sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: "Visit URL:";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: "Edit";\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: "Remove";\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0;\n  content: "Save";\n  padding-right: 0;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: "Enter link:";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: "Enter formula:";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: "Enter video:";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n\n/* projects/plugin/src/app/quill/quill.component.scss */\n/*! Bundled license information:\n\nquill/dist/quill.snow.css:\n  (*!\n   * Quill Editor v2.0.3\n   * https://quilljs.com\n   * Copyright (c) 2017-2024, Slab\n   * Copyright (c) 2014, Jason Chen\n   * Copyright (c) 2013, salesforce.com\n   *)\n*/\n/*# sourceMappingURL=quill.component-VRZ2TJYG.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(QuillComponent, [{
    type: Component4,
    args: [{ selector: "solid-quill-quill", encapsulation: ViewEncapsulation.None, standalone: false, template: '<quill-editor [formControl]="formControl" format="json"></quill-editor>', styles: ['/* node_modules/quill/dist/quill.snow.css */\n.ql-container {\n  box-sizing: border-box;\n  font-family:\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container:not(.ql-disabled) li[data-list=checked] > .ql-ui,\n.ql-container:not(.ql-disabled) li[data-list=unchecked] > .ql-ui {\n  cursor: pointer;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n}\n@supports (counter-set:none) {\n  .ql-editor p,\n  .ql-editor h1,\n  .ql-editor h2,\n  .ql-editor h3,\n  .ql-editor h4,\n  .ql-editor h5,\n  .ql-editor h6 {\n    counter-set: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor p,\n  .ql-editor h1,\n  .ql-editor h2,\n  .ql-editor h3,\n  .ql-editor h4,\n  .ql-editor h5,\n  .ql-editor h6 {\n    counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor table {\n  border-collapse: collapse;\n}\n.ql-editor td {\n  border: 1px solid #000;\n  padding: 2px 5px;\n}\n.ql-editor ol {\n  padding-left: 1.5em;\n}\n.ql-editor li {\n  list-style-type: none;\n  padding-left: 1.5em;\n  position: relative;\n}\n.ql-editor li > .ql-ui:before {\n  display: inline-block;\n  margin-left: -1.5em;\n  margin-right: .3em;\n  text-align: right;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li[data-list=checked] > .ql-ui,\n.ql-editor li[data-list=unchecked] > .ql-ui {\n  color: #777;\n}\n.ql-editor li[data-list=bullet] > .ql-ui:before {\n  content: "\\2022";\n}\n.ql-editor li[data-list=checked] > .ql-ui:before {\n  content: "\\2611";\n}\n.ql-editor li[data-list=unchecked] > .ql-ui:before {\n  content: "\\2610";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list] {\n    counter-set: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list] {\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered] {\n  counter-increment: list-0;\n}\n.ql-editor li[data-list=ordered] > .ql-ui:before {\n  content: counter(list-0, decimal) ". ";\n}\n.ql-editor li[data-list=ordered].ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor li[data-list=ordered].ql-indent-1 > .ql-ui:before {\n  content: counter(list-1, lower-alpha) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-1 {\n    counter-set: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-1 {\n    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor li[data-list=ordered].ql-indent-2 > .ql-ui:before {\n  content: counter(list-2, lower-roman) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-2 {\n    counter-set: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-2 {\n    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor li[data-list=ordered].ql-indent-3 > .ql-ui:before {\n  content: counter(list-3, decimal) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-3 {\n    counter-set: list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-3 {\n    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor li[data-list=ordered].ql-indent-4 > .ql-ui:before {\n  content: counter(list-4, lower-alpha) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-4 {\n    counter-set: list-5 list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-4 {\n    counter-reset: list-5 list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor li[data-list=ordered].ql-indent-5 > .ql-ui:before {\n  content: counter(list-5, lower-roman) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-5 {\n    counter-set: list-6 list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-5 {\n    counter-reset: list-6 list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor li[data-list=ordered].ql-indent-6 > .ql-ui:before {\n  content: counter(list-6, decimal) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-6 {\n    counter-set: list-7 list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-6 {\n    counter-reset: list-7 list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor li[data-list=ordered].ql-indent-7 > .ql-ui:before {\n  content: counter(list-7, lower-alpha) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-7 {\n    counter-set: list-8 list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-7 {\n    counter-reset: list-8 list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor li[data-list=ordered].ql-indent-8 > .ql-ui:before {\n  content: counter(list-8, lower-roman) ". ";\n}\n@supports (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-8 {\n    counter-set: list-9;\n  }\n}\n@supports not (counter-set:none) {\n  .ql-editor li[data-list].ql-indent-8 {\n    counter-reset: list-9;\n  }\n}\n.ql-editor li[data-list=ordered].ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor li[data-list=ordered].ql-indent-9 > .ql-ui:before {\n  content: counter(list-9, decimal) ". ";\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor li.ql-direction-rtl > .ql-ui:before {\n  margin-left: .3em;\n  margin-right: -1.5em;\n  text-align: left;\n}\n.ql-editor table {\n  table-layout: fixed;\n  width: 100%;\n}\n.ql-editor table td {\n  outline: none;\n}\n.ql-editor .ql-code-block-container {\n  font-family: monospace;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family:\n    Georgia,\n    Times New Roman,\n    serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family:\n    Monaco,\n    Courier New,\n    monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: .75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor .ql-ui {\n  position: absolute;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0, 0, 0, 0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: "";\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer:coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: "";\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: .4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: .83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: .67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor .ql-code-block-container {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor .ql-code-block-container {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor .ql-code-block-container {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: "Normal";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {\n  content: "Heading 1";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {\n  content: "Heading 2";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {\n  content: "Heading 3";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {\n  content: "Heading 4";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {\n  content: "Heading 5";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {\n  content: "Heading 6";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {\n  font-size: .83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {\n  font-size: .67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: "Sans Serif";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: "Serif";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: "Monospace";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family:\n    Georgia,\n    Times New Roman,\n    serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family:\n    Monaco,\n    Courier New,\n    monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: "Normal";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: "Small";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: "Large";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: "Huge";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-code-block-container {\n  position: relative;\n}\n.ql-code-block-container .ql-ui {\n  right: 5px;\n  top: 5px;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family:\n    "Helvetica Neue",\n    "Helvetica",\n    "Arial",\n    sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: "Visit URL:";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: "Edit";\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: "Remove";\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0;\n  content: "Save";\n  padding-right: 0;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: "Enter link:";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: "Enter formula:";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: "Enter video:";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n\n/* projects/plugin/src/app/quill/quill.component.scss */\n/*! Bundled license information:\n\nquill/dist/quill.snow.css:\n  (*!\n   * Quill Editor v2.0.3\n   * https://quilljs.com\n   * Copyright (c) 2017-2024, Slab\n   * Copyright (c) 2014, Jason Chen\n   * Copyright (c) 2013, salesforce.com\n   *)\n*/\n/*# sourceMappingURL=quill.component-VRZ2TJYG.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(QuillComponent, { className: "QuillComponent", filePath: "projects/plugin/src/app/quill/quill.component.ts", lineNumber: 13 });
})();

// projects/plugin/src/app/quill-view/quill-view.component.ts
init_define_process();
import { Component as Component5, Input, ViewEncapsulation as ViewEncapsulation2 } from "@angular/core";

// projects/plugin/src/app/handlers/quill-view-content.handler.ts
init_define_process();
import { Injectable as Injectable2 } from "@angular/core";
import { ContentPluginEditorOptions as ContentPluginEditorOptions2 } from "@rollthecloudinc/content";

// projects/plugin/src/app/models/quill.models.ts
init_define_process();
var QuillViewItem = class {
  constructor(data) {
    if (data) {
      this.token = data.token ? data.token : "";
    }
  }
};

// projects/plugin/src/app/handlers/quill-view-content.handler.ts
import * as i06 from "@angular/core";
import * as i13 from "@rollthecloudinc/attributes";
var QuillViewContentHandler = class _QuillViewContentHandler {
  constructor(attributeSerializer) {
    this.attributeSerializer = attributeSerializer;
  }
  handleFile(file) {
    return of();
  }
  handlesType(type) {
    return false;
  }
  implementsRendererOverride() {
    return false;
  }
  hasRendererOverride(settings) {
    return of(false);
  }
  isDynamic(settings) {
    return false;
  }
  isData(settings) {
    return false;
  }
  getBindings(settings, type, metadata) {
    return of([]);
  }
  fetchDynamicData(settings, metadata) {
    return of();
  }
  buildDynamicItems(settings, metadata) {
    return of([]);
  }
  stateDefinition(settings) {
    return of({});
  }
  editorOptions(settings) {
    return of(new ContentPluginEditorOptions2({ fullscreen: true }));
  }
  toObject(settings) {
    return of(new QuillViewItem(this.attributeSerializer.deserializeAsObject(settings)));
  }
  buildSettings(instance) {
    return this.attributeSerializer.serialize(instance, "root").attributes;
  }
  static {
    this.\u0275fac = function QuillViewContentHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillViewContentHandler)(i06.\u0275\u0275inject(i13.AttributeSerializerService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i06.\u0275\u0275defineInjectable({ token: _QuillViewContentHandler, factory: _QuillViewContentHandler.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(QuillViewContentHandler, [{
    type: Injectable2
  }], () => [{ type: i13.AttributeSerializerService }], null);
})();

// projects/plugin/src/app/quill-view/quill-view.component.ts
import { map, switchMap } from "rxjs/operators";
import * as i07 from "@angular/core";
import * as i22 from "@rollthecloudinc/token";
import * as i3 from "ngx-quill";
var QuillViewComponent2 = class _QuillViewComponent {
  constructor(handler, tokenizerService) {
    this.handler = handler;
    this.tokenizerService = tokenizerService;
    this.content = JSON.stringify({});
    this.settings = [];
  }
  ngOnInit() {
    this.handler.toObject(this.settings).pipe(switchMap((item) => this.resolveContexts().pipe(map((tokens) => [item, tokens])))).subscribe(([item, tokens]) => {
      const token = item.token.substring(1, item.token.indexOf("]"));
      console.log("tokens", tokens);
      console.log("item", item);
      console.log("content", tokens.get(token));
      this.content = tokens.get(token);
    });
  }
  // Not sure about this yet... not sure if we need to handle changes or just initialize.
  // I think this is needed for transitions between contexts
  ngOnChanges() {
    console.log("pane changed");
    this.handler.toObject(this.settings).pipe(switchMap((item) => this.resolveContexts().pipe(map((tokens) => [item, tokens])))).subscribe(([item, tokens]) => {
      const token = item.token.substring(1, item.token.indexOf("]"));
      this.content = tokens.get(token);
    });
  }
  resolveContexts() {
    return new Observable((obs) => {
      let tokens = /* @__PURE__ */ new Map();
      if (this.resolvedContext) {
        for (const name in this.resolvedContext) {
          tokens = new Map([...tokens, ...this.tokenizerService.generateGenericTokens(this.resolvedContext[name], name === "_root" ? "" : name)]);
        }
      }
      obs.next(tokens);
      obs.complete();
    });
  }
  static {
    this.\u0275fac = function QuillViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillViewComponent)(i07.\u0275\u0275directiveInject(QuillViewContentHandler), i07.\u0275\u0275directiveInject(i22.TokenizerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _QuillViewComponent, selectors: [["solid-quill-quill-view"]], inputs: { settings: "settings", tokens: "tokens", resolvedContext: "resolvedContext" }, standalone: false, features: [i07.\u0275\u0275ProvidersFeature([
      QuillViewContentHandler
    ]), i07.\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["format", "json", 3, "content"]], template: function QuillViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275element(0, "quill-view", 0);
      }
      if (rf & 2) {
        i07.\u0275\u0275property("content", ctx.content);
      }
    }, dependencies: [i3.QuillViewComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(QuillViewComponent2, [{
    type: Component5,
    args: [{ selector: "solid-quill-quill-view", encapsulation: ViewEncapsulation2.None, providers: [
      QuillViewContentHandler
    ], standalone: false, template: '<quill-view [content]="content" format="json"></quill-view>' }]
  }], () => [{ type: QuillViewContentHandler }, { type: i22.TokenizerService }], { settings: [{
    type: Input
  }], tokens: [{
    type: Input
  }], resolvedContext: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(QuillViewComponent2, { className: "QuillViewComponent", filePath: "projects/plugin/src/app/quill-view/quill-view.component.ts", lineNumber: 19 });
})();

// projects/plugin/src/app/quill-view-editor/quill-view-editor.component.ts
init_define_process();
import { Component as Component6, inject } from "@angular/core";
import { FormControl, FormGroup, UntypedFormArray, UntypedFormControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AttributeSerializerService as AttributeSerializerService2 } from "@rollthecloudinc/attributes";
import * as i08 from "@angular/core";
import * as i14 from "@angular/forms";
import * as i23 from "@angular/material/button";
import * as i32 from "@angular/material/dialog";
import * as i4 from "@angular/material/input";
var QuillViewEditorComponent = class _QuillViewEditorComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.dialogData = inject(MAT_DIALOG_DATA);
    this.handler = inject(QuillViewContentHandler);
    this.attributeSerializer = inject(AttributeSerializerService2);
    this.contentForm = new FormGroup({
      token: new FormControl("")
    });
    console.log("quill view editor component constructor");
  }
  ngOnInit() {
    if (this.dialogData.pane !== void 0) {
      this.handler.toObject(this.dialogData.pane.settings).subscribe((quillViewItem) => {
        this.quillViewItem = quillViewItem;
        this.contentForm.get("token").patchValue(this.quillViewItem.token);
      });
    }
  }
  submit() {
    let paneIndex;
    if (this.dialogData.paneIndex === void 0) {
      this.dialogData.panelFormGroup.get("panes").push(new FormGroup({
        contentPlugin: new UntypedFormControl("quill_view_item"),
        name: new UntypedFormControl(""),
        label: new UntypedFormControl(""),
        rule: new UntypedFormControl(""),
        settings: new UntypedFormArray([])
      }));
      paneIndex = this.dialogData.panelFormGroup.get("panes").length - 1;
    } else {
      paneIndex = this.dialogData.paneIndex;
    }
    const paneForm = this.dialogData.panelFormGroup.get("panes").at(paneIndex);
    const token = this.contentForm.get("token").value;
    const quillViewItem = new QuillViewItem({ token });
    paneForm.get("settings").clear();
    const controls = this.handler.buildSettings(quillViewItem).map((s) => this.attributeSerializer.convertToGroup(s));
    controls.forEach((c) => paneForm.get("settings").push(c));
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function QuillViewEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillViewEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _QuillViewEditorComponent, selectors: [["solid-quill-view-editor"]], standalone: false, features: [i08.\u0275\u0275ProvidersFeature([
      QuillViewContentHandler
    ])], decls: 10, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "token"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function QuillViewEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275elementStart(0, "form", 0);
        i08.\u0275\u0275listener("ngSubmit", function QuillViewEditorComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submit();
        });
        i08.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div")(3, "mat-form-field")(4, "mat-label");
        i08.\u0275\u0275text(5, "Content Object Token");
        i08.\u0275\u0275elementEnd();
        i08.\u0275\u0275element(6, "input", 1);
        i08.\u0275\u0275elementEnd()()();
        i08.\u0275\u0275elementStart(7, "mat-dialog-actions")(8, "button", 2);
        i08.\u0275\u0275text(9, "Save");
        i08.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        i08.\u0275\u0275property("formGroup", ctx.contentForm);
        i08.\u0275\u0275advance(8);
        i08.\u0275\u0275property("disabled", !ctx.contentForm.valid);
      }
    }, dependencies: [i14.\u0275NgNoValidate, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.FormGroupDirective, i14.FormControlName, i23.MatButton, i32.MatDialogClose, i32.MatDialogActions, i32.MatDialogContent, i4.MatInput, i4.MatFormField, i4.MatLabel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(QuillViewEditorComponent, [{
    type: Component6,
    args: [{ selector: "solid-quill-view-editor", standalone: false, providers: [
      QuillViewContentHandler
    ], template: '<form [formGroup]="contentForm" (ngSubmit)="submit()">\n    <mat-dialog-content>\n        <div>\n            <mat-form-field>\n                <mat-label>Content Object Token</mat-label>\n                <input matInput formControlName="token">\n            </mat-form-field>\n        </div>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button type="submit" mat-raised-button color="primary" mat-dialog-close [disabled]="!contentForm.valid">Save</button>       \n    </mat-dialog-actions>\n</form>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(QuillViewEditorComponent, { className: "QuillViewEditorComponent", filePath: "projects/plugin/src/app/quill-view-editor/quill-view-editor.component.ts", lineNumber: 19 });
})();

// projects/plugin/src/app/quill-editor/quill-editor.component.ts
init_define_process();
import { Component as Component7 } from "@angular/core";
import { FormElementEditorComponent } from "@rollthecloudinc/forms";
import * as i09 from "@angular/core";
import * as i15 from "@angular/common";
import * as i24 from "@angular/forms";
import * as i33 from "@angular/material/autocomplete";
import * as i42 from "@angular/material/button";
import * as i5 from "@angular/material/dialog";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/select";
import * as i8 from "@rollthecloudinc/ordain";
function QuillEditorComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    i09.\u0275\u0275elementStart(0, "mat-option", 9);
    i09.\u0275\u0275text(1);
    i09.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bo_r1 = ctx.$implicit;
    i09.\u0275\u0275property("value", bo_r1);
    i09.\u0275\u0275advance();
    i09.\u0275\u0275textInterpolate(bo_r1);
  }
}
var QuillEditorComponent2 = class _QuillEditorComponent extends FormElementEditorComponent {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275QuillEditorComponent_BaseFactory;
      return function QuillEditorComponent_Factory(__ngFactoryType__) {
        return (\u0275QuillEditorComponent_BaseFactory || (\u0275QuillEditorComponent_BaseFactory = i09.\u0275\u0275getInheritedFactory(_QuillEditorComponent)))(__ngFactoryType__ || _QuillEditorComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _QuillEditorComponent, selectors: [["solid-quill-editor"]], standalone: false, features: [i09.\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function QuillEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275elementStart(0, "form", 0);
        i09.\u0275\u0275listener("ngSubmit", function QuillEditorComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submit();
        });
        i09.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label");
        i09.\u0275\u0275text(5, "Value");
        i09.\u0275\u0275elementEnd();
        i09.\u0275\u0275element(6, "input", 2);
        i09.\u0275\u0275elementEnd()();
        i09.\u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label");
        i09.\u0275\u0275text(9, "Datasource");
        i09.\u0275\u0275elementEnd();
        i09.\u0275\u0275elementStart(10, "mat-select", 4);
        i09.\u0275\u0275template(11, QuillEditorComponent_mat_option_11_Template, 2, 2, "mat-option", 5);
        i09.\u0275\u0275elementEnd()();
        i09.\u0275\u0275element(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7);
        i09.\u0275\u0275elementEnd();
        i09.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 8);
        i09.\u0275\u0275text(16, "Save");
        i09.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        i09.\u0275\u0275property("formGroup", ctx.formGroup);
        i09.\u0275\u0275advance(11);
        i09.\u0275\u0275property("ngForOf", ctx.bindableOptions);
        i09.\u0275\u0275advance(2);
        i09.\u0275\u0275property("validation", ctx.validation);
      }
    }, dependencies: [i15.NgForOf, i24.\u0275NgNoValidate, i24.DefaultValueAccessor, i24.NgControlStatus, i24.NgControlStatusGroup, i24.RequiredValidator, i24.FormGroupDirective, i24.FormControlName, i24.FormGroupName, i33.MatOption, i42.MatButton, i5.MatDialogClose, i5.MatDialogActions, i5.MatDialogContent, i6.MatInput, i6.MatFormField, i6.MatLabel, i7.MatSelect, i8.ValidationEditorComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(QuillEditorComponent2, [{
    type: Component7,
    args: [{ selector: "solid-quill-editor", standalone: false, template: '<form [formGroup]="formGroup" (ngSubmit)="submit()">\n  <mat-dialog-content fxLayout="column">\n    <!-- <div>\n      <mat-form-field>\n        <input matInput placeholder="Key" formControlName="key" required>\n      </mat-form-field>\n      <mat-form-field formGroupName="options">\n        <input matInput placeholder="label" formControlName="label">\n      </mat-form-field>\n    </div> -->\n\n    <div>\n      <mat-form-field>\n        <mat-label>Value</mat-label>\n        <input matInput formControlName="value">\n      </mat-form-field>\n    </div>\n\n    <!-- <classifieds-ui-rest-source-form formControlName="rest" [restSource]="rest" [contexts]="contexts"></classifieds-ui-rest-source-form> -->\n\n    <mat-form-field formGroupName="datasourceBinding">\n      <mat-label>Datasource</mat-label>\n      <mat-select required formControlName="id">\n        <mat-option *ngFor="let bo of bindableOptions" [value]="bo">{{ bo }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <classifieds-ui-datasource-options formControlName="datasourceOptions"></classifieds-ui-datasource-options>\n\n    <druid-ordain-validation-editor formControlName="validation" [validation]="validation"></druid-ordain-validation-editor>\n\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button type="submit" mat-raised-button color="primary" mat-dialog-close>Save</button>\n  </mat-dialog-actions>\n</form>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(QuillEditorComponent2, { className: "QuillEditorComponent", filePath: "projects/plugin/src/app/quill-editor/quill-editor.component.ts", lineNumber: 10 });
})();

// projects/plugin/src/app/app.factories.ts
var pluginDownloadContentPluginFactory = ({ handler }) => {
  return new ContentPlugin({
    id: "plugin_download",
    title: "Plugin Download",
    selectionComponent: void 0,
    editorComponent: void 0,
    renderComponent: DownloadComponent,
    handler
  });
};
var pluginQuillContentPluginFactory = ({ handler }) => {
  return new ContentPlugin({
    id: "plugin_quill",
    title: "Quill Editor",
    selectionComponent: void 0,
    editorComponent: QuillEditorComponent2,
    renderComponent: QuillComponent,
    handler
  });
};
var pluginQuillViewContentPluginFactory = ({ handler }) => {
  return new ContentPlugin({
    id: "plugin_quill_view",
    title: "Quill View",
    selectionComponent: void 0,
    editorComponent: QuillViewEditorComponent,
    renderComponent: QuillViewComponent2,
    handler
  });
};

// projects/plugin/src/app/download.module.ts
import { CommonModule } from "@angular/common";
import * as i010 from "@angular/core";
import * as i16 from "@rollthecloudinc/content";
var DownloadModule = class _DownloadModule {
  constructor(cpm, downloadHandler) {
    console.log("register plugin download content plugin");
    cpm.register(pluginDownloadContentPluginFactory({ handler: downloadHandler }));
  }
  static {
    this.\u0275fac = function DownloadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadModule)(i010.\u0275\u0275inject(i16.ContentPluginManager), i010.\u0275\u0275inject(DownloadContentHandler));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ i010.\u0275\u0275defineNgModule({ type: _DownloadModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ i010.\u0275\u0275defineInjector({ providers: [
      DownloadContentHandler
    ], imports: [CommonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(DownloadModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule
      ],
      declarations: [
        DownloadComponent
      ],
      providers: [
        DownloadContentHandler
      ],
      exports: [
        DownloadComponent
      ]
    }]
  }], () => [{ type: i16.ContentPluginManager }, { type: DownloadContentHandler }], null);
})();

// projects/plugin/src/app/quill.module.ts
init_define_process();
import { NgModule as NgModule2 } from "@angular/core";
import { MaterialModule } from "@rollthecloudinc/material";
import { CommonModule as CommonModule2 } from "@angular/common";
import { QuillModule as QModule } from "ngx-quill";
import { ReactiveFormsModule } from "@angular/forms";
import { OrdainModule } from "@rollthecloudinc/ordain";
import * as i011 from "@angular/core";
import * as i17 from "@rollthecloudinc/content";
import * as i25 from "@rollthecloudinc/forms";
import * as i43 from "ngx-quill";
var QuillModule2 = class _QuillModule {
  constructor(cpm, handler, viewHandler) {
    console.log("register plugin quill content plugin");
    cpm.register(pluginQuillContentPluginFactory({ handler }));
    cpm.register(pluginQuillViewContentPluginFactory({ handler: viewHandler }));
  }
  static {
    this.\u0275fac = function QuillModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillModule)(i011.\u0275\u0275inject(i17.ContentPluginManager), i011.\u0275\u0275inject(i25.FormElementHandler), i011.\u0275\u0275inject(QuillViewContentHandler));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ i011.\u0275\u0275defineNgModule({ type: _QuillModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ i011.\u0275\u0275defineInjector({ providers: [
      // QuillContentHandler
      QuillViewContentHandler
    ], imports: [
      CommonModule2,
      ReactiveFormsModule,
      MaterialModule,
      OrdainModule,
      QModule.forRoot()
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(QuillModule2, [{
    type: NgModule2,
    args: [{
      imports: [
        CommonModule2,
        ReactiveFormsModule,
        MaterialModule,
        OrdainModule,
        QModule.forRoot()
      ],
      declarations: [
        QuillComponent,
        QuillViewComponent2,
        QuillViewEditorComponent,
        QuillEditorComponent2
      ],
      providers: [
        // QuillContentHandler
        QuillViewContentHandler
      ],
      exports: [
        QuillComponent,
        QuillViewComponent2,
        QuillViewEditorComponent,
        QuillEditorComponent2
      ]
    }]
  }], () => [{ type: i17.ContentPluginManager }, { type: i25.FormElementHandler }, { type: QuillViewContentHandler }], null);
})();

// projects/plugin/src/app/app.module.ts
import * as i012 from "@angular/core";
var AppModule = class _AppModule {
  constructor() {
    console.log("plugin app module");
  }
  static {
    this.\u0275fac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ i012.\u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ i012.\u0275\u0275defineInjector({ imports: [
      BrowserModule,
      DownloadModule,
      QuillModule2
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassMetadata(AppModule, [{
    type: NgModule3,
    args: [{
      imports: [
        BrowserModule,
        DownloadModule,
        QuillModule2
      ],
      declarations: [
        AppComponent,
        UploadComponent
      ],
      bootstrap: [
        AppComponent
      ]
    }]
  }], () => [], null);
})();

// projects/plugin/src/bootstrap.ts
console.log("bootstrap");
__NgCli_bootstrap_1.platformBrowser().bootstrapModule(AppModule).catch((err) => console.log(err));
//# sourceMappingURL=chunk-JSOF3NKR.js.map
