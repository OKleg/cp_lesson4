import {MiniMaple} from "../src/miniMaple";

test('test1: 4*x^3, x //=> 12*x^2', () => {
    let mm = MiniMaple()
    let res = mm.diff("4*x^3","x");
    expect(res).toBeTruthy("12*x^2");
});

test('test2: 4*x^3, y // => 0', () => {
    let mm = MiniMaple()
    let res = mm.diff("4*x^3","y");
    expect(res).toBeTruthy("0");
});

test('test3: 4*x^3-x^2, x //=> 12*x^2 - 2*x ', () => {
    let mm = MiniMaple()
    let res = mm.diff("4*x^3-x^2","x");
    expect(res).toBeTruthy("12*x^2 - 2*x");
});