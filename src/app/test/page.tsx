'use client';

import TestAction from "@/infrastructure/persistence/redux/test/testAction";
import { useEffect } from "react";
import "reflect-metadata";
import { container } from "tsyringe";

export default function Test() {

    container.register("ITestAction", { useClass: TestAction });
    const action = container.resolve<ITestAction>("ITestAction");

    const loading = action.GetTestLoading();
    const client: TestInformation = action.GetTestData();

    action.LoadExecute();

    useEffect(() => {

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