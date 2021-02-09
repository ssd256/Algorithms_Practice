package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

public class no_9093 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		Stack<Character> stack = new Stack<Character>();
		
		String input = "";
		int N = Integer.parseInt(br.readLine());
		
		for(int i = 0; i < N; i++) {
			input = br.readLine(); 
			input += "\n";	// 마지막 개행문자 추가
			
			StringBuilder sb = new StringBuilder("");
			
			for(int j = 0; j < input.length(); j++) {
				// 띄어쓰기나 엔터를 만났을 때
				if(input.charAt(j) == ' ' || input.charAt(j) == '\n'){
					// stack의 data를 sb에 추가하고 stack 비움
					while(!stack.isEmpty()) {
						sb.append(stack.peek()); 
						stack.pop(); 
					}
					// 띄어쓰기를 만났을 때 stack에 추가
					if(input.charAt(j) == ' ') {
						sb.append(input.charAt(j));
					}
				} else {
					// 문자인 경우에도 stack에 추가
					stack.push(input.charAt(j)); // 한 글자씩 거꾸로 집어넣음
				}
			}
			bw.write(sb.toString() + "\n"); 
		}
		// 잊지말자, close와 flush!
		br.close();
		bw.flush();
		bw.close();
	}
}
