package goorm;

import java.io.BufferedReader;
import java.io.InputStreamReader;
 
public class no_1 {
	public static void main(String[] args) throws Exception {
		// Scanner 대신 사용  --> Scanner보다 빠르다
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));	
		
		// String 값으로 고정되므로 int로 형변환  --> readLine() : 한 줄씩 읽을 수 있음
		int input = Integer.parseInt(br.readLine());	
		
		if(input % 2 != 0){
			System.out.println("odd");
		} else {
			System.out.println("even");
		}
	}
}
