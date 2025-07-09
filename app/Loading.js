export default function LoadingPage(){
    return(
        <div className="max-w-screen min-h-screen overflow-hidden bg-[#F5C396]">
        <div class="inline-block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
  role="status">
  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
</div>
    )
}