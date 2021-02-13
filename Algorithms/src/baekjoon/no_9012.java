package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class no_9012 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		while(N-- > 0) {
			System.out.println(solve(br.readLine()));
		}
	}
	
	static String solve(String str) {
		Stack<Character> stack = new Stack<>();
		
		for(int i = 0; i < str.length(); i++) {
			char c = str.charAt(i);
			
			// 입력받은 괄호가 '('이면 push
			if(c == '(') stack.push(c);
			
			// 스택이 비었을 경우
			else if(stack.empty()) return "NO";
			
			// 입력받은 괄호가 ')'이면 pop
			else stack.pop();
		}
		
		// push와 pop이 같은 횟수면 YES 
		if(stack.empty()) return "YES";
		
		// push와 pop의 횟수가 다르면 NO
		else return "NO";
	}
}
