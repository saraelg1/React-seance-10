import {calculerPrix} from './calculs.js'

test("Ceci est un test unitaire de calculerPrix",() => {expect(calculerPrix(100,2)).toBe(200);});

test("Ceci est un test unitaire de calculerPrix",() => {expect(calculerPrix(150,1)).toBe(150);});

test("Ceci est un test unitaire de calculerPrix",() => {expect(calculerPrix(200,3)).toBe(600);});
