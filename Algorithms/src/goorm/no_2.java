package goorm;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_2 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		int num = Integer.parseInt(input);

		for(int i = 1; i <= num; i++){
			if(num%i == 0){
					System.out.print(i + " ");
				}
			}
		System.out.println();
	}
}
