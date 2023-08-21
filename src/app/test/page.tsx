'use client';

import ITestAction from "@/domain/interfaces/infrastructure/persistence/redux/iTestAction";
import ResponseExchange from "@/domain/test/models/responseExchange";
import { dependencyInjection, getDependency } from "@/shared/hooks/dependency";
import "reflect-metadata";


export default function Test() {
    dependencyInjection();
    const action = getDependency<ITestAction>("ITestAction");

    const loading = action.GetTestLoading();
    const client: ResponseExchange = action.GetTestData();

    action.LoadExecute();

    return (

        <main>
            {loading ? (
                <div>loading</div>
            ) : client ? (
                <>
                    <div>===============================</div>
                    <div>total items {client.list.length}</div>
                    <div>===============================</div>
                    <div>
                        {client.list.map((exchange, i) => {
                            console.log("Entered");
                            // Return the element. Also pass key     
                            return (<><div>--{exchange.name}({exchange.value} USD)</div></>)
                        })}
                    </div>
                </>


            ) : (
                null
            )
            }
        </main>


    )
}