package goorm;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_11 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		
		// 문자열 순서를 뒤집어야 하니 입력받은 문자열의 길이 - 1부터 시작
		// 0까지 돌기
		for(int i = input.length()-1; i > -1; i--){
			// 한 글자씩 출력
			System.out.print(input.charAt(i));
		}
	}
}
