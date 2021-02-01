package programmers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class L1_solution1 {
	public static int solution(int n) {
		int answer = 0;
		int num = 2; // 소수인지 num에 넣어서 비교
		
		while(num <= n) {
			for(int i = 2; i <= num; i++) {
				if(num%i == 0 && i != num) { // num이 i로 나눠지면서 서로 같은 값이 아니라면 num은 소수가 아님
					break;
				} else if(num%i == 0 && i == num) // num이 i로 나눠지면서 서로 같은 값이면 num은 소수(자신과 1만 나눠지니까)
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
