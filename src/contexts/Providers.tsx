import { App } from "../App";
import { CreateExperienceProvider } from "./ContextsFiles/CreateExperience";
import { EditProfileProvider } from "./ContextsFiles/EditProfile";
import { ExperienceListProvider } from "./ContextsFiles/ExperienceList";
import { MemorableExperienceProvider } from "./ContextsFiles/MemorableExperience";
import { ProfileProvider } from "./ContextsFiles/Profile";
import { RegisterUserProvider } from "./ContextsFiles/RegisterUser";
import { NewPasswordProvider } from "./ContextsFiles/NewPassword";
import { TripnessSelectionProvider } from "./ContextsFiles/SelectionTripness";
import { TangranProvider } from "./ContextsFiles/Tangran";
import { UserDataProvider } from "./ContextsFiles/UserData";
import { ValuesTripnessProvider } from "./ContextsFiles/ValuesTripnessContext";
import { ItineraryProvider } from "./ContextsFiles/Itinerary";

export function Providers() {
  return (
    <MemorableExperienceProvider>
      <ValuesTripnessProvider>
        <UserDataProvider>
          <RegisterUserProvider>
            <TangranProvider>
              <ProfileProvider>
                <EditProfileProvider>
                  <CreateExperienceProvider>
                    <TripnessSelectionProvider>
                      <ExperienceListProvider>
                        <NewPasswordProvider>
                          <ItineraryProvider>
                            <App />
                          </ItineraryProvider>
                        </NewPasswordProvider>
                      </ExperienceListProvider>
                    </TripnessSelectionProvider>
                  </CreateExperienceProvider>
                </EditProfileProvider>
              </ProfileProvider>
            </TangranProvider>
          </RegisterUserProvider>
        </UserDataProvider>
      </ValuesTripnessProvider>
    </MemorableExperienceProvider>
  );
}
