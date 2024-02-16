/* eslint-disable @typescript-eslint/require-await -- might use db later or remove async*/
import { NextResponse } from "next/server";

type Language = "c++" | "java" | "python";

const data: Record<Language, string> = {
  "c++": `/**
  * Definition for singly-linked list.
  * struct ListNode {
  *     int val;
  *     ListNode *next;
  *     ListNode(int x) : val(x), next(NULL) {}
  * };
  */
 
 void trimLeftTrailingSpaces(string &input) {
     input.erase(input.begin(), find_if(input.begin(), input.end(), [](int ch) {
         return !isspace(ch);
     }));
 }
 
 void trimRightTrailingSpaces(string &input) {
     input.erase(find_if(input.rbegin(), input.rend(), [](int ch) {
         return !isspace(ch);
     }).base(), input.end());
 }
 
 vector<int> stringToIntegerVector(string input) {
     vector<int> output;
     trimLeftTrailingSpaces(input);
     trimRightTrailingSpaces(input);
     input = input.substr(1, input.length() - 2);
     stringstream ss;
     ss.str(input);
     string item;
     char delim = ',';
     while (getline(ss, item, delim)) {
         output.push_back(stoi(item));
     }
     return output;
 }
 
 ListNode* stringToListNode(string input) {
     // Generate list from the input
     vector<int> list = stringToIntegerVector(input);
 
     // Now convert that list into linked list
     ListNode* dummyRoot = new ListNode(0);
     ListNode* ptr = dummyRoot;
     for(int item : list) {
         ptr->next = new ListNode(item);
         ptr = ptr->next;
     }
     ptr = dummyRoot->next;
     delete dummyRoot;
     return ptr;
 }
 
 void prettyPrintLinkedList(ListNode* node) {
   while (node && node->next) {
       cout << node->val << "->";
       node = node->next;
   }
 
   if (node) {
     cout << node->val << endl;
   } else {
     cout << "Empty LinkedList" << endl;
   }
 }
 
 int main() {
     string line;
     while (getline(cin, line)) {
         ListNode* head = stringToListNode(line);
         prettyPrintLinkedList(head);
     }
     return 0;
 }`,
  java: `class Wrapper {
    /**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode(int x) { val = x; }
     * }
     */
    
    public static int[] stringToIntegerArray(String input) {
        input = input.trim();
        input = input.substring(1, input.length() - 1);
        if (input.length() == 0) {
          return new int[0];
        }
    
        String[] parts = input.split(",");
        int[] output = new int[parts.length];
        for(int index = 0; index < parts.length; index++) {
            String part = parts[index].trim();
            output[index] = Integer.parseInt(part);
        }
        return output;
    }
    
    public static ListNode stringToListNode(String input) {
        // Generate array from the input
        int[] nodeValues = stringToIntegerArray(input);
    
        // Now convert that list into linked list
        ListNode dummyRoot = new ListNode(0);
        ListNode ptr = dummyRoot;
        for(int item : nodeValues) {
            ptr.next = new ListNode(item);
            ptr = ptr.next;
        }
        return dummyRoot.next;
    }
    
    public static void prettyPrintLinkedList(ListNode node) {
      while (node != null && node.next != null) {
          System.out.print(node.val + "->");
          node = node.next;
      }
    
      if (node != null) {
        System.out.println(node.val);
      } else {
        System.out.println("Empty LinkedList");
      }
    }
}

public class MainClass {
    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        String line;
        while ((line = in.readLine()) != null) {
            ListNode node = Wrapper.stringToListNode(line);
            Wrapper.prettyPrintLinkedList(node);
        }
    }
}`,
  python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def stringToListNode(input):
    # Generate list from the input
    numbers = json.loads(input)

    # Now convert that list into linked list
    dummyRoot = ListNode(0)
    ptr = dummyRoot
    for number in numbers:
        ptr.next = ListNode(number)
        ptr = ptr.next

    ptr = dummyRoot.next
    return ptr

def prettyPrintLinkedList(node):
    import sys
    while node and node.next:
        sys.stdout.write(str(node.val) + "->")
        node = node.next

    if node:
        print(node.val)
    else:
        print("Empty LinkedList")

def main():
    import sys

    def readlines():
        for line in sys.stdin:
            yield line.strip('\n')

    lines = readlines()
    while True:
        try:
            line = lines.next()
            node = stringToListNode(line)
            prettyPrintLinkedList(node)
        except StopIteration:
            break


if __name__ == '__main__':
    main()`,
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
