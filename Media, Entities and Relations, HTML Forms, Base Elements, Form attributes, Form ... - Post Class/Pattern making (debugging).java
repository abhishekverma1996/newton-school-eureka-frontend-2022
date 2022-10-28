public static void pattern_making(int n){
          for(int i=1;i<=n;i++){
    for(int j=1;j<=i;j++){
        System.out.print(j+" ");
    }
    for(int j=i-1;j>=1;j--){
        
        System.out.print(j+" ");
    }
        System.out.println();
}

for(int i=n-1;i>=1;i--){
    for(int j=1;j<=i;j++){
        
        System.out.print(j+" ");
    }
    for(int j=i-1;j>=1;j--){
        
        System.out.print(j+" ");
    }
    
        System.out.println();
}
}
