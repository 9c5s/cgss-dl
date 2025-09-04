import { Client } from "mishiro-core";
import { checkVersion } from "../src/index";

const mockCheck = vi.fn();

vi.mock("mishiro-core", () => {
	const MockClient = vi.fn().mockImplementation(() => {
		return { check: mockCheck };
	});
	return { Client: MockClient };
});

describe("checkVersion", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("正しいAPIキーでClientを初期化し、checkメソッドを呼び出すこと", async () => {
		const MOCK_RESPONSE = 174481488;
		mockCheck.mockResolvedValue(MOCK_RESPONSE);

		const result = await checkVersion();

		expect(Client).toHaveBeenCalledWith(
			"940464243:174481488:cf608be5-6d38-421a-8eb1-11a501132c0a",
		);

		expect(mockCheck).toHaveBeenCalledTimes(1);

		expect(result).toBe(MOCK_RESPONSE);
	});
});
