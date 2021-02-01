package programmers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class L1_solution1 {
	public static int solution(int n) {
		int answer = 0;
		int num = 2;
		
		while(num <= n) {
			for(int i = 2; i <= num; i++) {
				if(num%i == 0 && i != num) {
					break;
				} else if(num%i == 0 && i == num)
					answer++;
			}
			num++;
		}
		return answer;
	}
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int input = br.read();
		int result = solution(input);
		System.out.println(result);
	}
}
