package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.StringTokenizer;

public class no_10828 {
	
	public static int[] stack;
	public static int size = 0; // 스택 비었는지 유무확인 
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		// BufferedReader로 할 경우, StringTokenizer과 같이 사용 -> push할 때 값 분리해줘야 하니까
		
		Scanner sc = new Scanner(System.in);
//		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder(); // 결과값 담아줄 String 공간
		
//		StringTokenizer st;
		
		int num = sc.nextInt();
	
		stack = new int[num];
		
		for(int i = 0; i < num; i++) {
			String str = sc.next();
//			st = new StringTokenizer(br.readLine(), " ");
			
			switch(str) {
			case "push" : 
				push(sc.nextInt());
//				push(Integer.parseInt(st.nextToken()));
				break;
			case "pop" : 
				sb.append(pop()).append("\n");
				break;
			case "size" : 
				sb.append(size()).append("\n");
				break;
			case "empty" : 
				sb.append(empty()).append("\n");
				break;
			case "top" :
				sb.append(top()).append("\n"); 
				break;
			}
		}
		System.out.print(sb);
	}
	

	public static void push(int item) {
		stack[size] = item; // 0인덱스부터 k값 넣음
		size++;
	}
	
	public static  int pop() { // 데이터 출력 + 출력 데이터 삭제
		if(size == 0) {
			return -1;
		} else {
			int res = stack[size - 1]; // res는 값 저장할 임시변수
			stack[size - 1] = 0; // 리턴할 변수는 0으로 값 초기화
			size--; // 사이즈 줄임 -> 출력한 데이터는 삭제
			return res; 
		}
	}
	
	public static int size() {
		return size; // top는 인덱스값이랑 같아서 실제 크기는 +1
	}

	public static int empty() {
		if(size == 0) {
			return 1;
		} else {
			return 0;
		}
	}
	
	public static int top() {
		if(size == 0) {
			return -1;
		} else {
			return stack[size -1]; // 맨 위에 데이터 = 가장 마지막(최신) 데이터 -> push할 때 size++ 했으니 stack[size-1]이 맨 위의 값
								   // stack[size]에는 공간만 만들어지고 아직 값이 담겨있지 않음!
		}
	}
	
}
