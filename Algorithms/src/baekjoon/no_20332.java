package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_20332 {
	public static void main(String[] args) throws Exception {
		// 수정중
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int count = Integer.parseInt(br.readLine());
		String input = br.readLine();
		String[] inputArr = input.split(" ");
		
		int sum = 0; 
		for(String i : inputArr) {
			sum += Integer.parseInt(i);
		}
		
		// System.out.println(sum);
		if(sum%count == 0) {
			System.out.println("yes");
		} else {
			System.out.println("no");
		}
	}	
}
