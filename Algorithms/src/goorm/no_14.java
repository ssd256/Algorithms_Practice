package goorm;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class no_14 {
	public static void main(String[] args) throws Exception {
		// 첫 번째 줄: A 배열 크기, B 배열 크기
		// 두 번째 줄: A 배열의 값
		// 세 번째 줄: B 배열의 값
		// 출력: A, B 배열을 합친 후 오름차순으로 정렬
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] input = (br.readLine()).split(" ");
		int[] arrTotal = new int[Integer.parseInt(input[0]) + Integer.parseInt(input[1])];
		String[] arrA = (br.readLine()).split(" ");
		String[] arrB = (br.readLine()).split(" ");
		
		for(int i = 0; i < arrA.length; i++) {
			arrTotal[i] = Integer.parseInt(arrA[i]);
		}
		
		for(int i = 0; i < arrB.length; i++) {
			arrTotal[i + arrA.length] = Integer.parseInt(arrB[i]);
		}
		
		Arrays.sort(arrTotal);
		
		for(int i : arrTotal) {
			System.out.print(i + " ");
		}
	}
}
