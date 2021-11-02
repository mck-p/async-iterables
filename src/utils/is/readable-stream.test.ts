import isReadableStream from "./readable-stream";
import { Readable, Duplex, Writable, Transform } from "stream";
import fs from "fs";

describe("Is -> Readable Stream", () => {
  describe("When given a readable stream", () => {
    describe("When given a readStream from FS", () => {
      it("returns true", () => {
        const filename = __filename;
        const stream = fs.createReadStream(filename);
        const expected = true;
        const actual = isReadableStream(stream);

        expect(actual).toBe(expected);
      });
    });

    describe("When given a Readable stream from stream", () => {
      it("returns true", () => {
        const stream = new Readable();
        const expected = true;
        const actual = isReadableStream(stream);

        expect(actual).toEqual(expected);
      });
    });

    describe("When given a Duplex stream from stream", () => {
      it("returns true", () => {
        const stream = new Duplex();
        const expected = true;
        const actual = isReadableStream(stream);

        expect(actual).toBe(expected);
      });
    });

    describe("When given a Tranform stream from stream", () => {
      it("returns true", () => {
        const stream = new Transform();
        const expected = true;
        const actual = isReadableStream(stream);

        expect(actual).toEqual(expected);
      });
    });
  });

  describe("When not given a non-read stream", () => {
    describe("when given a writeStream from FS", () => {
      it("returns false", () => {
        const filename = "too.txt";
        const stream = fs.createWriteStream(filename);
        const expected = false;
        const actual = isReadableStream(stream);

        expect(actual).toEqual(expected);
        process.nextTick(() => fs.rmSync(filename))
      });
    });

    describe("When given a Writeable stream from stream", () => {
      it("returns false", () => {
        const stream = new Writable();
        const expected = false;
        const actual = isReadableStream(stream);

        expect(actual).toEqual(expected);
      });
    });
  });
});
