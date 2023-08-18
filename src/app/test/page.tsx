'use client';

import ITestAction from "@/domain/interfaces/infrastructure/persistence/redux/iTestAction";
import TestInformation from "@/domain/test/models/testInformation";
import { dependencyInjection, getDependency } from "@/shared/hooks/dependency";
import "reflect-metadata";


export default function Test() {
    dependencyInjection();
    const action = getDependency<ITestAction>("ITestAction");

    const loading = action.GetTestLoading();
    const client: TestInformation = action.GetTestData();

    action.LoadExecute();

    return (

        <main>
            {loading ? (
                <div>loading</div>
            ) : client ? (
                <div >{client.name}</div>
            ) : (
                null
            )
            }
        </main>


    )
}