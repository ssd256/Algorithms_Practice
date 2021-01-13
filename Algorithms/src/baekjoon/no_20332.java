package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_20332 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int count = Integer.parseInt(br.readLine());
		String input = br.readLine();
		String[] inputArr = input.split(" ");
		
		int sum = 0; 
		for(String i : inputArr) {
			sum += Integer.parseInt(i);
		}
		
		// 3명이 동일한 상금을 나눠갖을 수 있을 때: yes
		// 그렇지 않을 때: no
		if(sum%3 == 0) {
			System.out.println("yes");
		} else {
			System.out.println("no");
		}
	}	
}
