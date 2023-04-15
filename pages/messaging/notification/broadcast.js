import Header from "../../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../../config";
import BroadcastNotification from "../../../components/messaging/BroadcastNotification";

export default function broadcast_notification({ regions, districts, messages, users }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <BroadcastNotification
              users={users}
              messages={messages}
              regions={regions}
              districts={districts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  const messages = await fetch(
    `${SERVER_BASE_URL}/api/v1/messaging/notification`
  ).then((res) => res.json());

  const users = await fetch(`${SERVER_BASE_URL}/api/v1/account/user?token=${token}`).then((res) =>
    res.json()
  );

  const regions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/region?token=${token}`
  ).then((res) => res.json());
  const districts = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/district?token=${token}`
  ).then((res) => res.json());

  return {
    props: {
      users,
      regions,
      districts,
      messages,
    },
  };
}
