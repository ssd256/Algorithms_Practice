package programmers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class L1_solution3 {
	 public static String solution(String phone_number) {
	        String answer = "";
	        
	        	int len = phone_number.length();
	        	for(int i = 0; i < len; i++) {
	        		if(i < len - 4) {
	        			answer += '*';
	        		}
	        		if(i >= len - 4) {
	        			answer += phone_number.charAt(i);
	        		}
	        	}
	        	
	        return answer;
    }
	
	public static void main(String[] args) throws IOException {
		long start = System.currentTimeMillis();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		String result = solution(input);
		System.out.println(result);
		long end = System.currentTimeMillis();
		System.out.println("수행시간 : " + (double)(end - start)/1000);
	}

}
