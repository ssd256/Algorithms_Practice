package goorm;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_8 {
	public static void main(String[] args) throws Exception {
		// 입력한 수의 약수들의 합 구하기
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		int num = Integer.parseInt(input);
		
		int sum = 0;
		for(int i = 1; i <= num; i++){
			if(num%i == 0){
				sum += i;
			}
		}
		System.out.println(sum);
	}
}
