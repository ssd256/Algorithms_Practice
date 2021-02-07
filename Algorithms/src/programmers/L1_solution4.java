package programmers;

import java.util.Arrays;

public class L1_solution4 {
	public static void main(String[] args) {
		String[] participant = {"marina", "josipa", "nikola", "vinko", "filipa"};
		String[] completion = {"josipa", "nikola", "marina", "filipa"};
		String result = running(participant, completion);
		System.out.println(result);
	}
	
	public static String running(String[] participant, String[] completion) {
		String answer = "";
		String temp = "";
		
		Arrays.sort(participant);
		Arrays.sort(completion);
		
		for(int i = 0; i < completion.length; i++) {
			if(!completion[i].equals(participant[i])) {
				temp = participant[i];
				break;
			}
		}
		
		if(!temp.equals("")) {
			// 정렬 후 겹치지 않는 참가자 찾았을 때
			answer = temp;
		} else { 
			// completion 다 돌았는데도 안 겹치는 참가자가 없을 때
			answer = participant[participant.length - 1];
		}
		return answer;
	}
}
