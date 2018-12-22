import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import fs from 'fs';

describe("First test", () => {
	it("should pass", () => {
		expect(true).to.equal(true);
	});
});

describe("Test index.html", () => {
	it("Test Hello World content in dom", () => {
		const indexFile = fs.readFileSync('./src/index.html', 'utf-8').toString();
		const dom = new JSDOM(indexFile);
		const h1 = dom.window.document.getElementsByTagName('h1')[0];
		expect(h1.innerHTML).to.equal("Hello World!");
	});

});
