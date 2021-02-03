package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class no_1874_2 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int N = Integer.parseInt(br.readLine());
		
		int[] stack = new int[N];
		int id = 0;
		int start = 0; 
		
		while(N-- > 0) {
			int value = Integer.parseInt(br.readLine()); 
			if(start < value) {
				for(int i = start + 1; i <= value; i++) {
					stack[id] = i;
					id++;
					sb.append("+\n");
				}
				start = value; 
			} else if(stack[id - 1] != value) {
				System.out.println("No");
				System.exit(0);
			}
			id--;
			sb.append("-\n");
		}
		System.out.println(sb);
	} 
}

