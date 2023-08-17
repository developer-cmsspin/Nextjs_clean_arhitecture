'use client';

import TestAction from "@/infrastructure/persistence/redux/test/testAction";
import { useEffect } from "react";
import "reflect-metadata";
import { container } from "tsyringe";

export default function Test() {

    container.register("ITestAction", { useClass: TestAction });
    const action = container.resolve<ITestAction>("ITestAction");

    let loading = false;
    let client: TestInformation = null;

    action.GetTestLoading().then(x => loading = x);
    action.GetTestData().then(x => client = x);



    useEffect(() => {
        action.GetTestLoading();
    });

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