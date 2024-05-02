import { EmptyListIcon } from 'assets/icons';
import { Button, Spinner } from 'components';
import { strings } from 'constant/strings';
import { dummyData } from 'data/dummyData';
import { useAppDispatch } from 'hooks';
import { useQuizAdd } from 'hooks/useQuizAdd';
import { useEffect, useState } from 'react';
import { importDummyData } from 'store/quizSlice';

export const EmptyList = () => {
    const { addAQuiz } = useQuizAdd();
    const dispatch = useAppDispatch();
    const [isImporting, setIsImporting] = useState(false);

    let timeOutId: NodeJS.Timeout;

    const onImport = () => {
        setIsImporting(true);
        /* Simulating delay for a loading state */
        timeOutId = setTimeout(() => {
            dispatch(importDummyData(dummyData));
            setIsImporting(false);
        }, 1000);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeOutId);
        };
    }, []); // eslint-disable-line

    return (
        <div className="flex flex-col justify-center items-center py-16 lg:py-32 space-y-6">
            <EmptyListIcon />
            <p className="text-text">{strings.your_have_no_quiz}</p>
            {isImporting && <Spinner />}
            <Button disabled={isImporting} onClick={addAQuiz} text={strings.create_new} />
            <Button disabled={isImporting} onClick={onImport} text={'⤵️ ' + strings.import_dummy} />
        </div>
    );
};
