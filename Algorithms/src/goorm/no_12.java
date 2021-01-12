package goorm;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_12 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		String[] value = input.split(" ");

		int num1 = 0;
		String operator = "";
		int num2 = 0;
		
		// 입력받은 값들을 숫자와 연산자로 분리하고 숫자들은 형변환
		for(int i = 0; i < value.length; i++){
			num1 = Integer.parseInt(value[0]);
			operator = value[1];
			num2 = Integer.parseInt(value[2]);
		}
		
		switch(operator){
			case "+": System.out.println(num1 + num2); break;
			case "-": System.out.println(num1 - num2); break;
			case "*": System.out.println(num1 * num2); break;
			case "/": System.out.printf("%.2f", (float)num1 / num2); break;
			default: System.out.println("올바른 연산자를 입력하세요");
		}
	}
}
