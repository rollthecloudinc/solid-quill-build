import { argsOrArgArray, audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest2 as combineLatest, combineLatestAll, combineLatestWith, concat2 as concat, concatAll, concatMap, concatMapTo, concatWith, connect, count, createOperatorSubscriber, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize, find, findIndex, first, flatMap, groupBy, ignoreElements, innerFrom, isEmpty, last, map, mapTo, materialize, max, merge, mergeAll, mergeMap, mergeMapTo, mergeScan, mergeWith, min, multicast, noop, observeOn, operate, pairwise, pluck, publish, publishBehavior, publishLast, publishReplay, raceWith, reduce, refCount, repeat, repeatWhen, retry, retryWhen, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwIfEmpty, timeInterval, timeout, timeoutWith, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll, zipWith } from "@nf-internal/chunk-4WPE7WTU";
import "@nf-internal/chunk-VTXF2OHE";
// node_modules/rxjs/dist/esm5/internal/operators/onErrorResumeNext.js
import { __read, __spreadArray } from "tslib";
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray(sources);
    return operate(function (source, subscriber) {
        var remaining = __spreadArray([source], __read(nextSources));
        var subscribeNext = function () {
            if (!subscriber.closed) {
                if (remaining.length > 0) {
                    var nextSource = void 0;
                    try {
                        nextSource = innerFrom(remaining.shift());
                    }
                    catch (err) {
                        subscribeNext();
                        return;
                    }
                    var innerSub = createOperatorSubscriber(subscriber, void 0, noop, noop);
                    nextSource.subscribe(innerSub);
                    innerSub.add(subscribeNext);
                }
                else {
                    subscriber.complete();
                }
            }
        };
        subscribeNext();
    });
}
// node_modules/rxjs/dist/esm5/internal/util/not.js
function not(pred, thisArg) {
    return function (value, index) {
        return !pred.call(thisArg, value, index);
    };
}
// node_modules/rxjs/dist/esm5/internal/operators/partition.js
function partition(predicate, thisArg) {
    return function (source) {
        return [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
    };
}
// node_modules/rxjs/dist/esm5/internal/operators/race.js
import { __read as __read2, __spreadArray as __spreadArray2 } from "tslib";
function race() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return raceWith.apply(void 0, __spreadArray2([], __read2(argsOrArgArray(args))));
}
export { audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, combineLatestAll, combineLatestWith, concat, concatAll, concatMap, concatMapTo, concatWith, connect, count, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize, find, findIndex, first, flatMap, groupBy, ignoreElements, isEmpty, last, map, mapTo, materialize, max, merge, mergeAll, mergeMap, mergeMapTo, mergeScan, mergeWith, min, multicast, observeOn, onErrorResumeNext, pairwise, partition, pluck, publish, publishBehavior, publishLast, publishReplay, race, raceWith, reduce, refCount, repeat, repeatWhen, retry, retryWhen, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwIfEmpty, timeInterval, timeout, timeoutWith, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll, zipWith };
