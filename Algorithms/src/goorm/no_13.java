package goorm;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_13 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int input = Integer.parseInt(br.readLine());
		
		// 1. 서력기원으로 연수가 4로 나누어 떨어지는 해는 윤년 ex. 2004, 2008 ... 
		// 2. 그 중 100으로 나누어 떨어지는 해는 평년 ex. 2100, 2200 ...
		// 3. 그 중 400으로 나누어 떨어지는 해는 윤년 ex. 2000, 2400 ...
		if((input%4 == 0 && input%100 != 0) || input%400 == 0){
			System.out.println("Leap Year"); // 윤년
		} else {
			System.out.println("Not Leap Year"); // 평년
		}
	}
}
