import './App.css';

function App() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='px-4 py-3'>교육부</div>
        <div className='text-right px-4 py-3'>menu</div>
      </div>
      <div className='bg-blue-900 grid grid-cols-2 text-white'>
        <div className='px-4 py-2 font-bold'>건강상태 자가진단</div>
        <div className='text-right px-4 py-2'>처음으로</div>
      </div>
      <div className='grid grid-cols-3 text-center py-5'>
        <div>로그인</div>
        <div>진단참여</div>
        <div>결과확인</div>
      </div>
      <div className='grid grid-cols-3 text-center bg-blue-300'>
        <div className='p-10 m-2 bg-white rounded-lg'>1</div>
        <div className='p-10 m-2 bg-white rounded-lg'>1</div>
        <div className='p-10 m-2 bg-white rounded-lg'>1</div>
        <div className='p-10 m-2 bg-white rounded-lg'>1</div>
        <div className='p-10 m-2 bg-white rounded-lg'>1</div>
        <div className='p-10 m-2 bg-white rounded-lg'>1</div>
      </div>
      <div className='px-4'>
        <div className='pt-3 pb-2'>참여자 목록</div>
        <div className='pb-2'>*()에는 참여시간과 로그인 계정이 표시됩니다</div>
        <div className='grid grid-cols-5'>
          <div className='col-span-4 bg-gray-500 mr-2 rounded-lg px-4 py-8'>이도엽</div>
          <div className='col-span-1 bg-green-600 rounded-lg text-center py-8'>방역기관</div>
        </div>
      </div>
    </div>
  );
}

export default App;
