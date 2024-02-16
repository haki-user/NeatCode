/* eslint-disable @typescript-eslint/require-await -- might use db later or remove async*/
import { NextResponse } from "next/server";

type Language = "c++" | "java" | "python";

const data: Record<Language, string> = {
  "c++": `vector<uint64_t> generate_fibonaccis(int n) {
    vector<uint64_t> fib(n);
    fib[0] = 1;
    fib[1] = 1;
    for (int i = 2; i < n; ++i) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

int main() {
    int n = 10;
    vector<uint64_t> fib = generate_fibonaccis(n);
    for (int i = 0; i < n; i++) {
        std::cout << fib[i] << " ";
    }
    return 0;
}`,
  java: `public class Main {
    public static long[] generateFibonaccis(int n) {
        long[] fib = new long[n];
        fib[0] = 1;
        fib[1] = 1;
        for (int i = 2; i < n; ++i) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib;
    }
    public static void main(String[] args) {
        int n = 10;
        long[] fib = generateFibonaccis(n);
        for (int i = 0; i < n; i++) {
            System.out.print(Long.toUnsignedString(fib[i]) + " ");
        }
    }
}`,
  python: `def fib():
    a, b = 1, 1
    while True:
        yield a
        a, b = b, a + b

for index, x in enumerate(fib()):
    if index == 10:
        break
    print("%s" % x),`,
};

export async function GET(
  _: Request,
  { params }: { params: { lang: string } }
): Promise<NextResponse<{ code: string }>> {
  const lang = params.lang;
  if (!(lang in data)) {
    return NextResponse.json({ code: "" }, { status: 400 });
  }
  return NextResponse.json({ code: data[lang as Language] });
}
