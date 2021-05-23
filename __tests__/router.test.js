/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { pushToHistory } from "../scripts/router";

describe('pushToHistory', () => {

    test('settingsLen', () => {
        expect(pushToHistory('settings','').length).toBe(2);
    });

    test('entryLen', () => {
        expect(pushToHistory('entry','2').length).toBe(3);
    });

    test('defaultLen', () => {
        expect(pushToHistory('fewf','').length).toBe(4);
    });

    test('settingsState', () => {
        const data = {'page': 'settings'}
        expect(pushToHistory('settings','').state).toStrictEqual(data);
    });

    test('entryState', () => {
        const data = {'page': 'entry2'}
        expect(pushToHistory('entry','2').state).toStrictEqual(data);
    });

    test('defaultState', () => {
        const data = {}
        expect(pushToHistory('fewf','').state).toStrictEqual(data);
    });


});

