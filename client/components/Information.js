import { useDispatch, useSelector } from "react-redux";
import { MdDelete, MdOutlineAddCircle } from "react-icons/md";
import { contract2 } from "../confing";
import Register from "../../backend/build/contracts/register.json";
import { ethers } from "ethers";

export default function Information() {
  // const dispatch = useDispatch();
  // const detailChange = async () => {
  //   if (data.userPersonalDetail.name == "") {
  //     try {
  //       const { ethereum } = window;
  //       if (ethereum) {
  //         const provider = new ethers.providers.Web3Provider(ethereum);
  //         const signer = provider.getSigner();
  //         const Contract = new ethers.Contract(contract2, TaskAbi.abi, signer);
  //         let detail = await Contract.getPatientDetail();
  //         dispatch();
  //       } else {
  //         console.log("Ethereum Object does not exists");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  const data = useSelector((state) => {
    return state.slice;
  });
  return (
    <div className=" flex bg-gray-900 py-20  justify-center  min-h-screen min-w-screen">
      <div className="  container max-w-2xl md:w-3/4   bg-white  shadow-2xl rounded-2xl">
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="text-2xl font-semibold leading-6 text-gray-900">Public Address</div>
          <div className="mt-1 text-sm text-gray-900 sm:col-span-3 sm:mt-0">
            {data.currentAccount}
          </div>
        </div>
        <div className="border-t bg-transparent border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.userPersonalDetail.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.userPersonalDetail.phone}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.userPersonalDetail.mail}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-3 sm:mt-0">
                {data.userPersonalDetail.residentAddress}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Disease</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.userPersonalDetail.disease}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Treatment</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.userPersonalDetail.treatment}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Access</dt>

              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <dt className="text-sm flex items-center justify-between  font-medium overflow-hidden text-gray-500 ">
                  <h3 className="text-lg text-black">Add</h3>
                  <MdOutlineAddCircle className="text-2xl hover:cursor-pointer " />
                </dt>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <span className="ml-2 w-0 flex-1 truncate">
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <MdDelete className="text-2xl text-gray-700 hover:cursor-pointer hover:text-red-500" />
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
