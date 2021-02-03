package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class no_1874_1 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		Stack<Integer> stack = new Stack<Integer>();
		
		int N = Integer.parseInt(br.readLine());
		int start = 0; 
		
		while(N-- > 0) {
			int value = Integer.parseInt(br.readLine()); 
			if(start < value) { // 시작값이 입력받은 값보다 작을 경우
				for(int i = start + 1; i <= value; i++) {
					stack.push(i);
					sb.append('+').append("\n");
				}
				start = value; // 시작값을 입력받은 값으로 변수 초기화
			} else if(stack.peek() != value){ // 시작값 > 입력값이면서 스택의 맨 위의 값을 확인했을 때, 입력받은 값과 다를 경우
				System.out.println("No");
				return;
			}
			stack.pop();
			sb.append('-').append("\n");
		}
		System.out.println(sb);
	} 
}

