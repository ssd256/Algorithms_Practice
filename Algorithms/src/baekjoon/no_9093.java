package baekjoon;

import java.io.IOException;
import java.util.Scanner;
import java.util.Stack;

public class no_9093 {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		Stack<Character> stack = new Stack<Character>();
		
		int N = sc.nextInt();
		sc.nextLine();	// 엔터 처리
		
		while(N-- > 0) {
			String input = sc.nextLine() + " "; // 글자 + 엔터 받음
			for(int i = 0; i < input.length(); i++) {
				if(input.charAt(i) == ' '){
					while(!stack.isEmpty()) {
						System.out.print(stack.pop());	// pop하면서 자연스럽게 거꾸로 나옴
					}
					System.out.print(" ");
				} else {
					stack.push(input.charAt(i)); // 한 글자씩 거꾸로 집어넣음
				}
			}
			System.out.println();
		}
	}
}
