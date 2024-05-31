//!! ********************* !!//
//!! Early code. do not use!
//!! ********************* !!//

import Loader from "../../ui/Loader";
import {
  useChildrenResposibilities,
  useResponsibilitiesPool,
} from "../responsibilitis/useChildrenResposibilities";
import Responsibility from "../responsibilitis/Responsibility";
import Container from "../../ui/Container";
import { useJoin, useUser } from "../users/useUser";

function ChildDashboard() {
  const {
    data: responsibilitiesToChildren,
    isPending: isLoadingResponsibilitiesToChildren,
  } = useChildrenResposibilities();
  const { user, isPending: isLoadingUser } = useUser();
  const { join, isPending: isLoadingJoin } = useJoin();
  const {
    data: responsibilities_pool,
    isPending: isLoadingResponsibilities_pool,
  } = useResponsibilitiesPool();

  if (
    isLoadingResponsibilitiesToChildren ||
    isLoadingUser ||
    isLoadingJoin ||
    isLoadingResponsibilities_pool
  )
    return <Loader />;

  const userId = user.id;
  const userToChildren = join.filter((item) => item.user_id === userId);
  const myChildrenIds = userToChildren.map((item) => item.child_id);
  const currentResponsibilities = responsibilitiesToChildren.filter((item) =>
    myChildrenIds.includes(item.child_id),
  );
  const responsibilitiesIds = currentResponsibilities.map(
    (item) => item.responsibilities_pool_id,
  );
  const current = responsibilities_pool.filter((Responsibility) =>
    responsibilitiesIds.includes(Responsibility.id),
  );

  return (
    <Container>
      <div className="grid grid-cols-2 gap-16 pt-32">
        {current.map((responsibility) => (
          <Responsibility
            key={responsibility.id}
            responsibilityName={responsibility.responsibility_name}
          />
        ))}
      </div>
    </Container>
  );
}

export default ChildDashboard;
