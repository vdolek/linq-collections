import { ArrayIteratorTests } from "./Iterators/ArrayIteratorTest";
import { StringIteratorTests } from "./Iterators/StringIteratorTest";
import { EnumerableTests } from "./Linq/EnumerableTests";
import { IEnumerableTests } from "./Linq/IEnumerableTests";
import { UtilsTests } from "./Utils/UtilsTest";
import { IEnumerableIntegrationTests } from "./Linq/IEnumerableIntegrationTests";

describe("Utils", UtilsTests.run);

describe("Iterators", () =>
{
    describe("ArrayIterator", ArrayIteratorTests.run);
    describe("StringIterator", StringIteratorTests.run);
});

describe("Linq", () =>
{
    describe("Enumerable", EnumerableTests.run);
    describe("IEnumerable", IEnumerableTests.run);
});

describe("Integration", IEnumerableIntegrationTests.run);
