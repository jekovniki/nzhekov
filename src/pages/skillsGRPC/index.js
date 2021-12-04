import React from 'react';
import styles from './index.module.scss';
import SkillsPageLayout from '../../components/skillsPageLayout';
import SkillsPageContent from '../../components/skillsPageContent';


const SkillsReact = () => {
    return (
        <SkillsPageLayout>
            <SkillsPageContent title="gRPC" image="https://grpc.io/img/logos/grpc-logo.png">
            <p>
                gRPC is the modern, lightweight communication protocol from Google. gRPC is a high-performance,
                open source, universal RPC framework that can run in any environment.
            </p>
            <p>
                I use gRPC mostly for my NodeJS projects. I prefer it over REST because with gRPC, the operations
                are easy to model (using the proto files), it's efficient and scaleable and it's simple to use.
            </p>
            </SkillsPageContent>
        </SkillsPageLayout>
    )
}

export default SkillsReact